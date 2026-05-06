import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";

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
    description: "Studied specialized frontend development at MMSIT, focusing on ES6+ and React.",
  },
  {
    year: "2025-Present",
    title: "Backend Development",
    description: "Started learning Node.js and MongoDB through YouTube courses and documentation.",
  },
];

const skillCategories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools" },
];

const skillIconMeta = {
  React: { label: "R", className: "bg-[#61dafb] text-black" },
  JavaScript: { label: "JS", className: "bg-[#f7df1e] text-black" },
  "Tailwind CSS": { label: "TW", className: "bg-[#38bdf8] text-black" },
  CSS: { label: "CSS", className: "bg-[#2563eb] text-white" },
  Bootstrap: { label: "BS", className: "bg-[#7952b3] text-white" },
  "Node.js": { label: "ND", className: "bg-[#3c873a] text-white" },
  "Express.js": { label: "EX", className: "bg-black text-white" },
  PHP: { label: "PHP", className: "bg-[#777bb4] text-white" },
  MongoDB: { label: "MG", className: "bg-[#47a248] text-white" },
  MySQL: { label: "SQL", className: "bg-[#f29111] text-black" },
  Git: { label: "Git", className: "bg-[#f03c2e] text-white" },
  Vite: { label: "V", className: "bg-[#646cff] text-white" },
  npm: { label: "npm", className: "bg-[#cb3837] text-white" },
};
export default function Home() {
  const { person, skills, projects } = usePortfolioStore();
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const previewProjects = projects.slice(0, 3);
  const visibleSkills = useMemo(() => {
    if (activeSkillCategory === "all") {
      return Object.values(skills).flat();
    }

    return skills[activeSkillCategory] ?? [];
  }, [activeSkillCategory, skills]);

  return (
    <main className="grid gap-8">
      <section className="grid grid-cols-[minmax(0,1.08fr)_minmax(280px,0.72fr)] items-stretch gap-7 border-b-4 border-black bg-[#f6e27f] py-[45px] pb-10 max-[920px]:grid-cols-1 max-sm:pt-9">
        <div className={`${ui.card} flex flex-col justify-center`}>
          <p className={ui.eyebrow}>{person.location}</p>
          <h1 className={ui.h1}>
            Hi, I am{" "}
            <span className="inline bg-[linear-gradient(transparent_56%,#00e5ff_56%)]">
              {person.name}
            </span>
            .
          </h1>
          <p className="mt-[22px] max-w-[680px] break-words text-[clamp(1rem,2vw,1.2rem)] font-semibold leading-[1.65]">
            {person.intro}
          </p>

          <div className="mt-[30px] flex flex-wrap gap-3.5">
            <Link className={`${ui.button} ${ui.primaryButton}`} to="/projects">
              View Projects
            </Link>
            <Link className={`${ui.button} ${ui.secondaryButton}`} to="/contact">
              Contact Me
            </Link>
          </div>
        </div>

        <aside
          className={`${ui.framed} grid content-between gap-[18px] bg-[#00e5ff] p-[18px] max-sm:p-4`}
        >
          <img
            className="aspect-[1/1.08] w-full border-4 border-black bg-white object-cover"
            src={person.photo}
            alt={`${person.name} profile illustration`}
          />
          <div className="border-4 border-black bg-white p-4">
            <p className="mb-3 mt-0 text-xl font-black text-black">{person.title}</p>
            <div className="flex flex-wrap gap-2.5">
              {person.highlights.map((highlight) => (
                <span className={ui.stackItem} key={highlight}>
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section
        className={`${ui.section} -mx-4 border-y-4 border-black bg-[#00e5ff] px-4 max-sm:-mx-2.5 max-sm:px-2.5`}
      >
        <div className={ui.sectionHeading}>
          <p className="mb-3 mt-0 text-sm font-black uppercase tracking-normal text-black">
            Skill Stack
          </p>
          <h2 className={ui.h2}>
            <span className="inline bg-[linear-gradient(transparent_56%,#f6e27f_56%)] px-1">
              Tools I use to build
            </span>
          </h2>
        </div>

        <div
          className="mb-[18px] flex flex-wrap gap-2.5"
          aria-label="Skill categories"
        >
          {skillCategories.map((category) => (
            <button
              className={
                activeSkillCategory === category.key
                  ? `${ui.raised} bg-[#22c55e] px-3.5 py-[9px] text-black focus-visible:outline-4 focus-visible:outline-offset-3 focus-visible:outline-[#4f46e5] font-extrabold`
                  : `${ui.raised} bg-white px-3.5 py-[9px] text-black focus-visible:outline-4 focus-visible:outline-offset-3 focus-visible:outline-[#4f46e5] font-bold`
              }
              key={category.key}
              type="button"
              onClick={() => setActiveSkillCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-6 gap-2.5 max-[920px]:grid-cols-2 max-sm:grid-cols-2">
          {visibleSkills.map((skill, index) => {
            const icon = skillIconMeta[skill] ?? {
              label: skill.slice(0, 2).toUpperCase(),
              className: "bg-[#00e5ff] text-black",
            };

            return (
              <span
                key={skill}
                className={`${ui.framed} grid min-h-[92px] place-items-center gap-2.5 p-3 text-center font-black text-black transition-all duration-150 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#f1f1f1]"
                } hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_#000]`}
              >
                <span
                  className={`inline-grid h-11 w-11 place-items-center border-[3px] border-black text-[0.8rem] font-black leading-none shadow-[3px_3px_0_#000000] ${icon.className}`}
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

      {/*  Projects preview section  */}
      <section
        className={`${ui.section} -mx-4 border-y-4 border-black bg-[#22c55e] px-4 max-sm:-mx-2.5 max-sm:px-2.5`}
      >
        <div className={ui.sectionHeading}>
          <p className="mb-3 mt-0 text-sm font-black uppercase tracking-normal text-black">
            Project ShowCase
          </p>
          <div className={ui.sectionHeadingContent}>
            <h2 className={ui.h2}>
              <span className="inline bg-[linear-gradient(transparent_56%,#ef4444_56%)] px-1">
                Some of my recent works
              </span>
            </h2>
            <Link to="/projects" className={`${ui.button} ${ui.primaryButton}`}>
              View All Projects
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[920px]:grid-cols-2 max-sm:grid-cols-1">
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section
        className={`${ui.section} -mx-4 border-y-4 border-black bg-[#4f46e5] px-4 text-white max-sm:-mx-2.5 max-sm:px-2.5`}
      >
        <div className={ui.sectionHeading}>
          <p className="mb-3 mt-0 text-sm font-black uppercase tracking-normal text-[#f6e27f]">
            Timeline
          </p>
          <h2 className="m-0 max-w-[780px] break-words text-[clamp(2rem,5vw,3.35rem)] font-black leading-[1.02] tracking-normal text-white">
            <span className="inline bg-[linear-gradient(transparent_56%,#ef4444_56%)] px-1">
              My Learning Journey
            </span>
          </h2>
        </div>

        <div className="grid gap-[18px]">
          {timelineItems.map((item, index) => (
            <article
              className="grid grid-cols-[120px_minmax(0,1fr)] items-stretch gap-[18px] max-sm:grid-cols-1 max-sm:gap-2.5"
              key={item.year}
            >
              <span
                className={`${ui.framed} grid min-h-28 place-items-center text-[clamp(1.4rem,3vw,2rem)] font-black max-sm:min-h-16 max-sm:justify-start max-sm:px-4 max-sm:py-3 ${
                  index % 3 === 2
                    ? "bg-[#22c55e] text-black"
                    : index % 2 === 1
                      ? "bg-[#ef4444] text-white"
                      : "bg-[#4f46e5] text-white"
                }`}
              >
                {item.year}
              </span>
              <div className={`${ui.framed} min-w-0 bg-white p-5`}>
                <h3 className="m-0 break-words text-[clamp(1.2rem,2.5vw,1.65rem)] font-black leading-[1.08] text-black">
                  {item.title}
                </h3>
                <p className="mt-3 mb-0 break-words font-semibold leading-[1.55] text-black">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
