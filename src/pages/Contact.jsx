import { usePortfolioStore } from "../stores/portfolioStore";

export default function Contact() {
  const { person, socials } = usePortfolioStore();

  return (
    <main className="page-section contact-page">
      <section className="contact-card brutal-card">
        <div>
          <p className="eyebrow">Contact Me</p>
          <h1>Let us build a clean frontend together.</h1>
          <p>
            I am open to frontend projects, portfolio feedback, internships, and
            collaboration on React interfaces.
          </p>
        </div>

        <div className="contact-list">
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={`tel:${person.phone.replaceAll(" ", "")}`}>{person.phone}</a>
          {socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.value}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
