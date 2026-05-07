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

const projectCardColors = [
 
  "bg-[#00e5ff]",
  "bg-[#ff90e8]",
  "bg-[#f6e27f]",
  "bg-white",
  "bg-[#f1f1f1]",
];
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

      {/*  Hero section  */}
     <section className="relative grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] items-stretch gap-7 border-b-4 border-black bg-[#f6e27f] py-12 pb-12 max-[920px]:grid-cols-1 max-sm:pt-9">

  {/* background accent */}
  <div className="absolute -top-4 left-10 h-6 w-6 rotate-12 bg-black max-sm:hidden" />
  <div className="absolute bottom-6 right-14 h-4 w-4 -rotate-12 bg-[#00e5ff] border-4 border-black max-sm:hidden" />

  {/* LEFT CONTENT */}
  <div className={`${ui.card} relative flex flex-col justify-center`}>
    <p className={`${ui.eyebrow} inline-block -rotate-2 border-4 border-black bg-white px-3 py-1 shadow-[4px_4px_0px_black]`}>
      {person.location}
    </p>

    <h1 className={`${ui.h1} mt-5 leading-[1.05]`}>
      Hi, I am{" "}
      <span className="inline-block rotate-[-1deg] border-4 border-black bg-[#00e5ff] px-3 py-1 shadow-[6px_6px_0px_black]">
        {person.name}
      </span>
      .
    </h1>

    <p className="mt-[22px] max-w-[680px] border-l-4 border-black pl-4 text-[clamp(1rem,2vw,1.2rem)] font-semibold leading-[1.65]">
      {person.intro}
    </p>

    {/* CTA becomes more “designed blocks” */}
    <div className="mt-[30px] flex flex-wrap gap-4">
      <Link
        className="
          border-4 border-black bg-black px-5 py-3
          font-black text-white shadow-[6px_6px_0px_#00e5ff]
          transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_#00e5ff]
        "
        to="/projects"
      >
        View Projects →
      </Link>

      <Link
        className="
          border-4 border-black bg-white px-5 py-3
          font-black text-black shadow-[6px_6px_0px_black]
          transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_black]
        "
        to="/contact"
      >
        Contact Me
      </Link>
      
      <button
        type="button"
        onClick={async () => {
          try {
            const res = await fetch('/Zarni_CV.pdf');
            if (!res.ok) throw new Error('CV not found');
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Zarni_CV.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          } catch (err) {
            // fallback: open the file path so user can see 404 or place file
            window.open('/Zarni_CV.pdf', '_blank');
          }
        }}
      className={`${ui.button} ${ui.primaryButton}`}
      >
        Download CV
      </button>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <aside className="relative">

    {/* offset frame effect (important neubrutal trick) */}
    <div className="absolute left-3 top-3 h-full w-full border-4 border-black bg-[#22c55e]" />

    <div className={`${ui.framed} relative z-10 grid content-between gap-[18px] bg-[#00e5ff] p-[18px]`}>
      
      <img
        className="aspect-[1/1.08] w-full border-4 border-black object-cover shadow-[6px_6px_0px_black]"
        src={person.photo}
        alt={`${person.name} profile illustration`}
      />

      <div className="border-4 border-black bg-white p-4 shadow-[4px_4px_0px_black]">
        <p className="mb-3 text-xl font-black text-black">
          {person.title}
        </p>

        <div className="flex flex-wrap gap-2.5">
          {person.highlights.map((highlight) => (
            <span className={ui.stackItem} key={highlight}>
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  </aside>
</section>

            {/*  Skills section  */}
      <section
  className={`${ui.section} -mx-4 border-y-4 border-black bg-[#00BFFF]  py-12 px-4 max-sm:-mx-2.5 max-sm:px-2.5`}
>
  {/* heading */}
  <div className={`${ui.sectionHeading} relative`}>
    <p className="mb-3 text-sm font-black uppercase text-black">
      Skill Stack
    </p>

    <h2 className="text-[clamp(2rem,5vw,3.35rem)] font-black leading-[1.05] text-black">
      <span className="inline-block rotate-[-1deg] border-4 border-black bg-[#f6e27f] px-3 py-1 shadow-[6px_6px_0px_black]">
        Tools I use to build
      </span>
    </h2>

    {/* little accent block */}
    <div className="absolute -top-2 right-10 h-5 w-5 rotate-12 bg-black max-sm:hidden" />
  </div>

  {/* category buttons */}
  <div className="mb-[18px] flex flex-wrap gap-2.5">
    {skillCategories.map((category) => {
      const active = activeSkillCategory === category.key;

      return (
        <button
          key={category.key}
          type="button"
          onClick={() => setActiveSkillCategory(category.key)}
          className={`
            ${ui.raised}
            border-4 border-black px-4 py-2 text-black font-black
            transition-all duration-150
            ${
              active
                ? "bg-[#22c55e] translate-y-[2px] shadow-[2px_2px_0px_black]"
                : "bg-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_black]"
            }
          `}
        >
          {category.label}
        </button>
      );
    })}
  </div>

  {/* skills */}
  <div className="grid grid-cols-6 gap-3 max-[920px]:grid-cols-2 max-sm:grid-cols-2">
    {visibleSkills.map((skill, index) => {
      const icon = skillIconMeta[skill] ?? {
        label: skill.slice(0, 2).toUpperCase(),
        className: "bg-[#00e5ff] text-black",
      };

      return (
        <div
          key={skill}
          className={`
            ${ui.framed}
            group relative grid min-h-[100px] place-items-center gap-2
            border-4 border-black p-3 text-center font-black text-black
            transition-all duration-150
            ${
              index % 3 === 0
                ? "bg-white"
                : index % 3 === 1
                  ? "bg-[#f1f1f1]"
                  : "bg-[#e5e5e5]"
            }
            hover:-translate-x-1 hover:-translate-y-1
            hover:shadow-[8px_8px_0px_black]
          `}
        >
          {/* icon */}
          <span
            className={`
              grid h-11 w-11 place-items-center
              border-4 border-black text-xs font-black
              shadow-[4px_4px_0px_black]
              ${icon.className}
            `}
          >
            {icon.label}
          </span>

          <span className="text-sm font-extrabold">{skill}</span>

          {/* hover accent */}
          <div className="absolute -right-2 -top-2 h-3 w-3 rotate-45 bg-black opacity-0 group-hover:opacity-100" />
        </div>
      );
    })}
  </div>
</section>

      {/*  Projects preview section  */}
   <section  className={`${ui.section} -mx-4 border-y-4 border-black bg-white py-12 px-4 max-sm:-mx-2.5 max-sm:px-2.5`}>
  {/* decorative brutal shapes */}
  <div className="absolute -top-4 right-10 h-6 w-6 rotate-12 bg-black max-sm:hidden" />
  <div className="absolute bottom-10 left-6 h-4 w-4 -rotate-12 bg-[#00e5ff] border-4 border-black max-sm:hidden" />

  {/* header */}
  <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
    <div>
      <p className={`${ui.eyebrow} inline-block -rotate-2 border-4 border-black bg-white px-3 py-1 shadow-[4px_4px_0px_black]`}>
        Projects
      </p>

      <h2 className={`${ui.h2} mt-4`}>
        Some of my{" "}
        <span className="inline-block rotate-[-1deg] border-4 border-black bg-[#00e5ff] px-2 shadow-[6px_6px_0px_black]">
          recent work
        </span>
      </h2>

      <p className="mt-5 max-w-[620px] border-l-4 border-black pl-4 text-[1rem] font-semibold leading-[1.6] text-[#1A1A1A]">
        A few selected projects that showcase my frontend,
        backend, and full-stack development skills.
      </p>
    </div>

    {/* CTA becomes stronger */}
    <Link
      to="/projects"
      className="
        border-4 border-black bg-[#22c55e] px-5 py-3
        font-black text-black shadow-[6px_6px_0px_black]
        transition-all duration-150
        hover:-translate-y-1 hover:shadow-[10px_10px_0px_black]
        active:translate-y-1 active:shadow-[2px_2px_0px_black]
      "
    >
      View All Projects →
    </Link>
  </div>

  {/* grid */}
  <div className="grid grid-cols-3 gap-6 max-[920px]:grid-cols-2 max-sm:grid-cols-1">
    {previewProjects.map((project, index) => (
      <div
        key={project.id}
        className={`
          transition-all duration-200
          ${index === 0 ? "md:col-span-2" : ""}
        `}
      >
        <ProjectCard
          project={project}
          bgColor={projectCardColors[index % projectCardColors.length]}
        />
      </div>
    ))}
  </div>
</section>

          {/*  Timeline section  */}
     <section
  className={`${ui.section} -mx-4 border-y-4 border-black bg-[#D77D00] px-4 text-white max-sm:-mx-2.5 max-sm:px-2.5`}
>
  <div className={`${ui.sectionHeading} relative`}>
  {/* small label badge */}
  <div className="inline-block -rotate-2 border-4 border-black bg-white px-3 py-1 shadow-[4px_4px_0px_black]">
    <p className="text-xs font-black uppercase tracking-wide text-black">
      Timeline
    </p>
  </div>

  {/* main title */}
  <h2 className="mt-4 max-w-[780px] text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.02] text-black">
    <span
      className="inline-block rotate-[-1deg] border-4 border-black bg-[#ef4444]
        px-3 py-1 text-white shadow-[6px_6px_0px_black]"
    >
      My Learning Journey
    </span>
  </h2>

  {/* decorative brutal accent */}
  <div className="absolute -top-3 right-10 h-6 w-6 rotate-12 bg-black max-sm:hidden" />
  <div className="absolute -bottom-3 left-20 h-4 w-4 -rotate-12 bg-white border-4 border-black max-sm:hidden" />
</div>

  {/* timeline wrapper */}
  <div className="relative mt-10">
    {/* vertical line */}
    <div className="absolute left-10 top-0 h-full w-[4px] bg-black max-sm:left-4" />

    <div className="space-y-10">
      {timelineItems.map((item, index) => (
        <article
          key={item.year}
          className="relative grid grid-cols-[80px_minmax(0,1fr)] gap-6 max-sm:grid-cols-1"
        >
          {/* dot */}
          <div className="relative flex justify-center max-sm:justify-start">
            <div className="z-10 mt-6 h-5 w-5 rounded-full border-4 border-black bg-white shadow-[4px_4px_0px_black]" />
          </div>

          {/* year badge */}
          <span
            className={`absolute left-0 top-0 translate-x-[-120px] max-sm:static max-sm:translate-x-0
              border-4 border-black px-3 py-1 text-lg font-black shadow-[6px_6px_0px_black]
              ${
                index % 3 === 0
                  ? "bg-[#4f46e5] text-white"
                  : index % 3 === 1
                    ? "bg-[#ef4444] text-white"
                    : "bg-[#22c55e] text-black"
              }`}
          >
            {item.year}
          </span>

          {/* content card */}
          <div
            className="border-4 border-black bg-white p-6 text-black
              shadow-[8px_8px_0px_black] transition-all duration-200
              hover:-translate-y-1 hover:shadow-[12px_12px_0px_black]"
          >
            <h3 className="text-[clamp(1.2rem,2.5vw,1.65rem)] font-black leading-tight">
              {item.title}
            </h3>

            <p className="mt-3 font-semibold leading-relaxed">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}
