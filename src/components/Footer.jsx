import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";

export default function Footer() {
  const { person, socials } = usePortfolioStore();

  return (
    <footer
      className={`${ui.framed} mt-5 flex justify-between gap-[18px] bg-black p-[18px] text-white shadow-none max-sm:flex-col`}
    >
      <div>
        <strong>{person.name}</strong>
        <p className="mt-1.5 mb-0">Built with React, React Router, Zustand, and neobrutalist energy.</p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {socials.map((social) => (
          <a
            className="font-black text-white underline underline-offset-4"
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
