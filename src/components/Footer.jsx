import SocialIcon from "./SocialIcon";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";

export default function Footer() {
  const { person, socials } = usePortfolioStore();

  return (
    <footer
      className={`${ui.framed} mt-5 flex justify-between gap-[18px] bg-black p-[18px] text-white shadow-none max-sm:flex-col`}
    >
      <div>
        <strong className="text-2xl">{person.name}.</strong>
        <p className="mt-1.5 mb-0">Computer Science student with a passion for web development. Exploring the world of front-end and back-end development.</p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <p className="m-0 font-bold">Find me on:</p>
        {socials.map((social) => (
          <a
            className="inline-flex min-h-10 items-center gap-2 border-[3px] border-white px-2.5 py-1.5 font-black text-white transition-transform duration-150 hover:-translate-y-0.5"
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
          >
            <SocialIcon className="h-5 w-5" name={social.icon} />
            <span>{social.label}</span>
          </a>
        ))}
      </div>
      <p className="m-0 text-sm opacity-80">© {new Date().getFullYear()} {person.name}. All rights reserved.</p>
    </footer>
  );
}
