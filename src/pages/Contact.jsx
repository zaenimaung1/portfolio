import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";

export default function Contact() {
  const { person, socials } = usePortfolioStore();

  return (
    <main className={`${ui.section} grid min-h-[62vh] items-center`}>
      <section
        className={`${ui.card} grid grid-cols-[1fr_minmax(260px,0.7fr)] items-center gap-7 max-[920px]:grid-cols-1`}
      >
        <div>
          <p className={ui.eyebrow}>Contact Me</p>
          <h1 className={ui.h1}>Let us build a clean frontend together.</h1>
          <p className="mt-[22px] max-w-[680px] break-words text-[clamp(1rem,2vw,1.2rem)] font-semibold leading-[1.65]">
            I am open to frontend projects, portfolio feedback, internships, and
            collaboration on React interfaces.
          </p>
        </div>

        <div className="grid gap-3.5">
          <a
            className={`${ui.raised} block min-w-0 [overflow-wrap:anywhere] bg-[#4f46e5] p-3.5 text-white`}
            href={`mailto:${person.email}`}
          >
            {person.email}
          </a>
          <a
            className={`${ui.raised} block min-w-0 [overflow-wrap:anywhere] bg-[#00e5ff] p-3.5 text-black`}
            href={`tel:${person.phone.replaceAll(" ", "")}`}
          >
            {person.phone}
          </a>
          {socials.map((social) => (
            <a
              className={`${ui.raised} block min-w-0 [overflow-wrap:anywhere] bg-[#00e5ff] p-3.5 text-black`}
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.value}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
