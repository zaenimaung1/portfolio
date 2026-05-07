import { useEffect, useMemo, useRef, useState } from "react";
import { ui } from "../styles";
import { usePortfolioStore } from "../stores/portfolioStore";

function buildSystemPrompt({ person, projects }) {
  const recentProjects = (projects ?? []).slice(0, 3);

  const projectSummaries = recentProjects
    .map((p) => {
      const stack = p.techStack?.length ? p.techStack.join(", ") : "";
      return `- ${p.title} (${p.status ?? ""})\n  Role: ${p.role ?? ""}\n  Summary: ${p.description ?? ""}\n  Tech: ${stack}`.trim();
    })
    .join("\n");

  return [
    "You are ZarniPortfolio AI Bot. You help visitors learn about the portfolio owner (Zarni Maung).",
    "Use only the information provided in the prompt. If the user asks for something not in the info, respond that you don't have that information.",
    "Answer conversationally and concisely.",
    "When discussing work/projects, mention recent projects: get answers from the provided project summaries.",
    "If the user asks to contact, tell them to use the Contact section of the portfolio.",
    "---",
    `Person: ${person?.name ?? ""}`,
    `Title: ${person?.title ?? ""}`,
    `Location: ${person?.location ?? ""}`,
    `Intro: ${person?.intro ?? ""}`,
    `Highlights: ${(person?.highlights ?? []).join(", ")}`,
    "---",
    `Recent projects:\n${projectSummaries || "(none)"}`,
  ].join("\n");
}

function getGeminiApiKey() {
  // Prefer Vite env var (client-side). Use caution: this exposes the key in the browser.
  // The safer approach is a backend proxy, but this implementation follows your request.
  return (
    import.meta.env.VITE_GEMINI_API_KEY ||
    import.meta.env.VITE_GOOGLE_GEMINI_API_KEY ||
    ""
  );
}

async function callGemini({ apiKey, systemPrompt, userMessage, signal }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${encodeURIComponent(
    apiKey
  )}`;

  const body = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `SYSTEM:\n${systemPrompt}\n\nUSER:\n${userMessage}`,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.4,
      topP: 0.9,
      maxOutputTokens: 600,
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Gemini request failed (${res.status}). ${text}`);
  }

  const data = await res.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.map((p) => p?.text).join("\n") ||
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "";

  return text || "I couldn't generate a response right now.";
}

export default function AIBotWidget() {
  const { person, projects } = usePortfolioStore();

  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState(() => [
    {
      id: "hello",
      role: "assistant",
      content:
        "Hi! I’m the ZarniPortfolio AI Bot. Ask me about the projects, my recent work, or how to contact me.",
    },
  ]);
  const [input, setInput] = useState("");

  const apiKey = useMemo(() => getGeminiApiKey(), []);

  const systemPrompt = useMemo(
    () => buildSystemPrompt({ person, projects }),
    [person, projects],
  );

  const listRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen, isThinking]);

  useEffect(() => {
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  const send = async () => {
    const trimmed = input.trim();
    if (!trimmed || isThinking) return;

    setError("");

    const userMsg = { id: crypto.randomUUID(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    if (!apiKey) {
      setIsThinking(false);
      setError(
        "Missing Gemini API key. Set VITE_GEMINI_API_KEY in your .env file. (Key will be exposed in the browser.)",
      );
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "I can’t access my Gemini API key yet. Please set VITE_GEMINI_API_KEY in a .env file and restart the dev server.",
        },
      ]);
      return;
    }

    setIsThinking(true);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const replyText = await callGemini({
        apiKey,
        systemPrompt,
        userMessage: trimmed,
        signal: controller.signal,
      });

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: replyText,
        },
      ]);
    } catch (e) {
      const msg = e?.message ? String(e.message) : "Failed to call Gemini.";
      setError(msg);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry—something went wrong while generating my response. Please try again.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    void send();
  };

  return (
    <div className="fixed bottom-5 left-5 z-[60]">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`${ui.framed} grid min-h-[54px] min-w-[54px] place-items-center bg-[#00e5ff] shadow-[6px_6px_0_#000000]`}
          aria-label="Open AI chat bot"
        >
          <span className="grid h-[40px] w-[40px] place-items-center border-[3px] border-black bg-white text-black font-black">
            AI
          </span>
        </button>
      )}

      {isOpen && (
        <div
          className={`${ui.framed} w-[min(420px,calc(100vw_-_40px))] bg-white shadow-[10px_10px_0_#000000]`}
          role="dialog"
          aria-label="AI chat bot"
        >
          <div className="flex items-center justify-between gap-3 border-b-[3px] border-black bg-[#00e5ff] p-3">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center border-[3px] border-black bg-white text-black font-black">
                AI
              </span>
              <div>
                <p className="m-0 text-sm font-black">ChatAIBot</p>
                <p className="m-0 text-xs font-bold text-black/80">Ask about projects & me</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={`${ui.imageButton} h-10 w-10 bg-[#ef4444] text-white shadow-[4px_4px_0_#000000]`}
              aria-label="Close AI chat bot"
            >
              X
            </button>
          </div>

          <div
            ref={listRef}
            className="max-h-[55vh] overflow-auto p-3"
            aria-label="Chat messages"
          >
            <div className="grid gap-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={
                    m.role === "user"
                      ? "justify-self-end"
                      : "justify-self-start"
                  }
                >
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-lg border-[3px] border-black bg-[#f6e27f] p-2.5 font-semibold text-black whitespace-pre-wrap"
                        : "max-w-[85%] rounded-lg border-[3px] border-black bg-white p-2.5 font-semibold text-black whitespace-pre-wrap"
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="justify-self-start">
                  <div className="max-w-[85%] rounded-lg border-[3px] border-black bg-white p-2.5 font-semibold text-black">
                    Thinking…
                  </div>
                </div>
              )}

              {error && (
                <div className="justify-self-start">
                  <div className="max-w-[85%] rounded-lg border-[3px] border-black bg-[#ef4444] p-2.5 font-bold text-white">
                    {error}
                  </div>
                </div>
              )}
            </div>
          </div>

          <form onSubmit={onSubmit} className="border-t-[3px]  border-black p-3">
            <div className="flex  gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={2}
                className="min-h-[44px] w-full resize-none border-[3px] border-black bg-white p-2.5 font-semibold text-black outline-none focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
                placeholder="Ask me anything..."
                aria-label="Chat input"
              />

              <button
                type="submit"
                disabled={isThinking}
                className={`${ui.button} ${ui.primaryButton} min-h-[44px] px-3.5 ${
                  isThinking ? "opacity-70 cursor-not-allowed" : ""
                }`}
                aria-label="Send message"
              >
                Send
              </button>
            </div>

           
          </form>
        </div>
      )}
    </div>
  );
}

