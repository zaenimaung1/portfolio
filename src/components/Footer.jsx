import { usePortfolioStore } from "../stores/portfolioStore";

export default function Footer() {
  const { person, socials } = usePortfolioStore();

  return (
    <footer className="footer">
      <div>
        <strong>{person.name}</strong>
        <p>Built with React, React Router, Zustand, and neobrutalist energy.</p>
      </div>

      <div className="footer-links">
        {socials.map((social) => (
          <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
