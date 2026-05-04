import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { usePortfolioStore } from "../stores/portfolioStore";

const timelineItems = [
  {
    year: "2019",
    title: "Passed High School",
    description: "Completed high school and started preparing for the next step in tech.",
  },
  {
    year: "2022",
    title: "Computer University, Myeik",
    description: "Started attending Computer University, Myeik, and currently studying in fifth year.",
  },
  {
    year: "2023",
    title: "Web Development Foundation",
    description: "Started learning web development foundations at Hornbill Information Technology.",
  },
  {
    year: "2024",
    title: "Specialized Frontend Development",
    description: "Studied specialized frontend development at MMSIT, focusing on ES6 and React.",
  },
  {
    year: "2025",
    title: "Backend Development",
    description: "Started learning Node.js and MongoDB through YouTube courses and documentation.",
  },
];

const skillCategories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
];

const skillIconMeta = {
  React: { label: "R", className: "skill-icon-react" },
  JavaScript: { label: "JS", className: "skill-icon-javascript" },
  "Tailwind CSS": { label: "TW", className: "skill-icon-tailwind" },
  CSS: { label: "CSS", className: "skill-icon-css" },
  Bootstrap: { label: "B", className: "skill-icon-bootstrap" },
  "Node.js": { label: "N", className: "skill-icon-node" },
  "Express.js": { label: "EX", className: "skill-icon-express" },
  PHP: { label: "PHP", className: "skill-icon-php" },
  MongoDB: { label: "DB", className: "skill-icon-mongodb" },
  MySQL: { label: "SQL", className: "skill-icon-mysql" },
};

export default function Home() {
  const { person, skills, projects } = usePortfolioStore();
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const previewProjects = projects.slice(0, 2);
  const visibleSkills = useMemo(() => {
    if (activeSkillCategory === "all") {
      return Object.values(skills).flat();
    }

    return skills[activeSkillCategory] ?? [];
  }, [activeSkillCategory, skills]);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy brutal-card">
          <p className="eyebrow">{person.location}</p>
          <h1>
            Hi, I am <span>{person.name}</span>.
          </h1>
          <p className="hero-text">{person.intro}</p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>

        <aside className="profile-panel">
          <img src={person.photo} alt={`${person.name} profile illustration`} />
          <div className="profile-meta">
            <p>{person.title}</p>
            <div>
              {person.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Skill Stack</p>
          <h2>Tools I use to build </h2>
        </div>

        <div className="skill-tabs" aria-label="Skill categories">
          {skillCategories.map((category) => (
            <button
              className={
                activeSkillCategory === category.key
                  ? "skill-tab skill-tab-active"
                  : "skill-tab"
              }
              key={category.key}
              type="button"
              onClick={() => setActiveSkillCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="skill-grid">
          {visibleSkills.map((skill) => {
            const icon = skillIconMeta[skill] ?? {
              label: skill.slice(0, 2).toUpperCase(),
              className: "",
            };

            return (
              <span key={skill} className="skill-tile">
                <span
                  className={`skill-icon ${icon.className}`}
                  aria-hidden="true"
                >
                  {icon.label}
                </span>
                <span>{skill}</span>
              </span>
            );
          })}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Timeline</p>
          <h2>My learning journey so far</h2>
        </div>

        <div className="timeline-list">
          {timelineItems.map((item) => (
            <article className="timeline-item" key={item.year}>
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/*  Projects preview section  */}
      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <div className="section-heading-content">
            <h2>Some of my recent works</h2>
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>

        <div className="projects-preview">
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
