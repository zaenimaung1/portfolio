import SocialIcon from "./SocialIcon";
import { usePortfolioStore } from "../stores/portfolioStore";

export default function Footer() {
  const { person, socials } = usePortfolioStore();

  return (
    <footer
      className="
        mt-10 border-t-4 border-black bg-black px-6 py-10 text-white
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Top row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Name + intro */}
          <div>
            <h3 className="text-2xl font-black">
              {person.name}.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-[1.6] opacity-80">
              Computer Science student passionate about building clean,
              functional web experiences.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  border-4 border-white px-3 py-2
                  font-bold text-white
                  transition-all duration-150
                  hover:-translate-y-1 hover:bg-white hover:text-black
                "
              >
                <SocialIcon className="h-5 w-5" name={social.icon} />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-8 border-t-4 border-white pt-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}