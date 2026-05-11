import { useEffect, useMemo, useRef, useState } from "react";
import { ui } from "../styles";
import SocialIcon from "../components/SocialIcon";
import { usePortfolioStore } from "../stores/portfolioStore";

function buildSystemPrompt({ person, projects }) {
  const recentProjects = (projects ?? []).slice(0, 3);

  const projectSummaries = recentProjects
    .map((p) => {
      const stack = p.techStack?.length ? p.techStack.join(", ") : "";

      return `
- ${p.title} (${p.status ?? ""})
Role: ${p.role ?? ""}
Summary: ${p.description ?? ""}
Service : ${p.service ?? ""}
Tech: ${stack}
      `.trim();
    })
    .join("\n");

  return [
    "You are Zarni AI, a portfolio assistant for Zarni Maung, a junior web developer.",
    "Keep answers short, friendly, and professional.",
    "Focus on web development skills, projects, learning journey, and technical experience.",
    "Use only the provided information.",
    "Do not invent information.",
    "If the user asks to contact Zarni, tell them to use the Contact section.",
    "---",
    `Name: ${person?.name ?? ""}`,
    `Title: ${person?.title ?? ""}`,
    `Location: ${person?.location ?? ""}`,
    `Intro: ${person?.intro ?? ""}`,
    `Highlights: ${(person?.highlights ?? []).join(", ")}`,
    "---",
    `Recent projects:\n${projectSummaries || "(none)"}`,
    `Service : ${person?.service ?? ""}`,
  ].join("\n");
} 
 

function getGeminiApiKey() {
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
      maxOutputTokens: 500,
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Gemini request failed (${res.status}). ${text}`);
  }

  const data = await res.json();

  return (
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Sorry, I couldn't generate a response."
  );
}

export default function AIBotWidget() {
  const { person, projects } = usePortfolioStore();

  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: "hello",
      role: "assistant",
      content:
        "Hi! I'm Zarni AI 👋\nAsk me about my projects, skills , Serive , or learning journey.",
    },
  ]);

  const apiKey = useMemo(() => getGeminiApiKey(), []);

  const systemPrompt = useMemo(
    () => buildSystemPrompt({ person, projects }),
    [person, projects]
  );

  const listRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isThinking, isOpen]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const send = async () => {
    const trimmed = input.trim();

    if (!trimmed || isThinking) return;

    setError("");

    const userMsg = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    if (!apiKey) {
      setError("Missing Gemini API key.");

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file.",
        },
      ]);

      return;
    }

    setIsThinking(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const reply = await callGemini({
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
          content: reply,
        },
      ]);
    } catch (e) {
      setError(e.message || "Failed to generate response.");

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry, something went wrong while generating a response.",
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
          className={`${ui.framed} grid min-h-[60px] min-w-[60px] place-items-center bg-[#00e5ff] shadow-[6px_6px_0_#000000] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#000000]`}
        >
          <span className="grid h-[42px] w-[42px] place-items-center border-[3px] border-black bg-white font-black">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-8 w-8"
>
  <SocialIcon name="aibot" />
</svg>
          </span>
        </button>
      )}

      {isOpen && (
        <div
          className={`${ui.framed} w-[min(420px,calc(100vw_-_40px))] bg-[#f1f1f1] shadow-[10px_10px_0_#000000]`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between border-b-[3px] border-black bg-[#00e5ff] p-3">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center border-[3px] border-black bg-white font-black">
                AI
              </span>

              <div>
                <p className="m-0 text-sm font-black">
                  Zarni's AI
                </p>

                <p className="m-0 text-xs font-bold text-black/70">
                  Portfolio Assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={`${ui.imageButton} h-10 w-10 bg-[#ef4444] text-white`}
            >
              X
            </button>
          </div>

          {/* CHAT */}
          <div
            ref={listRef}
            className="max-h-[55vh] overflow-auto p-3"
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
                        ? "max-w-[85%] border-[3px] border-black bg-[#f6e27f] px-3 py-2 font-semibold text-black whitespace-pre-wrap shadow-[4px_4px_0px_black]"
                        : "max-w-[85%] border-[3px] border-black bg-white px-3 py-2 font-semibold text-black whitespace-pre-wrap shadow-[4px_4px_0px_black]"
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="justify-self-start">
                  <div className="border-[3px] border-black bg-white px-3 py-2 font-semibold shadow-[4px_4px_0px_black]">
                    Zarni's AI is thinking...
                  </div>
                </div>
              )}

              {error && (
                <div className="justify-self-start">
                  <div className="border-[3px] border-black bg-[#ef4444] px-3 py-2 font-bold text-white shadow-[4px_4px_0px_black]">
                    {error}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* QUICK QUESTIONS */}
        {showQuickQuestions && (
  <div className="flex flex-wrap gap-2 border-t-[3px] border-black p-3">
    {[
      "What projects did you build?",
      "What technologies do you use?",
      "Tell me about Pivot AI",
    ].map((q) => (
      <button
        key={q}
        type="button"
        onClick={() => {
          setInput(q);
          setShowQuickQuestions(false);
        }}
        className="border-[3px] border-black bg-[#f6e27f] px-2 py-1 text-xs font-black shadow-[3px_3px_0px_black]"
      >
        {q}
      </button>
    ))}
  </div>
)}

          {/* INPUT */}
          <form
            onSubmit={onSubmit}
            className="border-t-[3px] border-black p-3"
          >
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={2}
                placeholder="Ask me anything..."
                className="min-h-[44px] w-full resize-none border-[3px] border-black bg-white p-2.5 font-semibold outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send();
                  }
                }}
              />

              <button
                type="submit"
                disabled={isThinking}
                className={`${ui.button} ${ui.primaryButton} min-h-[44px] px-4 ${
                  isThinking ? "cursor-not-allowed opacity-70" : ""
                }`}
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
