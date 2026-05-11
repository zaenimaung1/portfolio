import SocialIcon from "../components/SocialIcon";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";

export default function Contact() {
  const { person, socials } = usePortfolioStore();

  return (
    <main className={`${ui.section} grid min-h-[62vh] items-center`}>

      <section className={`${ui.card} grid grid-cols-[1fr_minmax(280px,0.7fr)] gap-8 max-[920px]:grid-cols-1`}>

        {/* LEFT SIDE */}
        <div>
          <p className={ui.eyebrow}>Contact Me</p>

          <h1 className={ui.h1}>
            Let us build something great together.
          </h1>

          <p className="mt-6 border-l-4 border-black pl-4 text-[1.1rem] font-semibold leading-[1.7]">
            I am open to  collaborations, or just a friendly chat about tech and design. Feel free to reach out through any of the channels listed, or simply drop me an email. Let's connect and create something amazing!
          </p>
        </div>

        {/* RIGHT SIDE (clean unified panel) */}
        <div className="grid gap-4 border-l-4 border-black pl-6 max-[920px]:border-l-0 max-[920px]:pl-0">

          {/* EMAIL */}
          <a
            className={`${ui.button} ${ui.secondaryButton} justify-start`}
            href="mailto:zarnizn5048@gmail.com"
          >
            <SocialIcon className="h-5 w-5" name="mail" />
            <span className="ml-3">{person.email}</span>
          </a>

          {/* PHONE */}
          <a
            className={`${ui.button} ${ui.secondaryButton} justify-start`}
            href={`tel:${person.phone.replaceAll(" ", "")}`}
          >
            <SocialIcon className="h-5 w-5" name="phone" />
            <span className="ml-3">{person.phone}</span>
          </a>

          {/* SOCIALS */}
          <div className="grid gap-3 pt-2">
            <p className="text-sm font-black uppercase">Social Links</p>

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`${ui.button} ${ui.secondaryButton} justify-start`}
              >
                <SocialIcon className="h-5 w-5" name={social.icon} />
                <span className="ml-3">{social.label}</span>
              </a>
            ))}
          </div>

        </div>

      </section>
    </main>
  );
}