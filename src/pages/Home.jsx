import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion as Motion } from "framer-motion";
import {
  FaCode,
  FaTools,
  FaServer,
  FaGlobe,
} from "react-icons/fa";
import { FaBolt } from "react-icons/fa";

const timelineItems = [
  {
    year: "2019",
    title: "Passed High School",
    description:
      "Completed high school and started preparing for the next step in tech.",
  },
  {
    year: "2022",
    title: "Computer University, Myeik",
    description:
      "Started attending Computer University, Myeik, and currently studying in fifth year.",
  },
  {
    year: "2023",
    title: "Web Development Foundation",
    description:
      "Started learning web development foundations at Hornbill Information Technology.",
  },
  {
    year: "2024",
    title: "Specialized Frontend Development",
    description:
      "Studied specialized frontend development at MMSIT, focusing on ES6+ and React.",
  },
  {
    year: "2025-Present",
    title: "Backend Development",
    description:
      "Started learning Node.js and MongoDB through YouTube courses and documentation.",
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
  GitHub: {label : "GitHub", className : "bg-[#47a248] text-white"},
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
  const { person, skills, projects, services } = usePortfolioStore();
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const previewProjects = projects.slice(0, 3);
  const visibleSkills = useMemo(() => {
    if (activeSkillCategory === "all") {
      return Object.values(skills).flat();
    }

    return skills[activeSkillCategory] ?? [];
  }, [activeSkillCategory, skills]);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  return (
    <main className="grid gap-8">
      {/*  Hero section  */}
      <Motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] items-stretch gap-7 border-b-4 border-black bg-[#f6e27f] py-5 max-[920px]:grid-cols-1 max-sm:px-4 max-sm:py-8"
      >
        {/* LEFT */}
        <div
          className={`${ui.card} relative z-10 flex flex-col justify-center`}
        >
          <p
            className={`${ui.eyebrow} inline-block w-fit -rotate-2 border-4 border-black bg-white px-3 py-1 shadow-[4px_4px_0px_black]`}
          >
            {person.location}
          </p>

          <h1 className={`${ui.h1} mt-3 leading-[1.02]`}>
            Hi, I am{" "}
            <span className="inline-block -rotate-1 border-4 border-black bg-[#00e5ff] px-1 py-1 shadow-[6px_6px_0px_black]">
              {person.name}
            </span>
            .
          </h1>

          <p className="mt-6 max-w-[700px] border-l-4 border-black pl-4 text-[1.05rem] font-semibold leading-[1.8] text-[#1A1A1A]">
            {person.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="border-4 border-black bg-white px-5 py-3 font-black text-black shadow-[6px_6px_0px_black] transition-all duration-150 hover:-translate-y-1 hover:shadow-[10px_10px_0px_black]"
            >
              Contact Me
            </Link>

            <button
              type="button"
              className={`${ui.button} ${ui.primaryButton}`}
            >
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="relative">
          <div className="absolute left-3 top-3 h-full w-full border-4 border-black bg-[#22c55e]" />

          <div
            className={`${ui.framed} relative z-10 grid gap-5 bg-[#00e5ff] p-5`}
          >
            <img
              className="aspect-[1/1.08] w-full border-4 border-black object-cover shadow-[6px_6px_0px_black]"
              src={person.photo}
              alt={person.name}
            />

            <div className="border-4 border-black bg-white p-4 shadow-[4px_4px_0px_black]">
              <p className="mb-3 text-xl font-black">{person.title}</p>

              <div className="flex flex-wrap gap-2">
                {person.highlights.map((highlight) => (
                  <span key={highlight} className={ui.stackItem}>
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </Motion.section>

      {/*  Skills section  */}
      <Motion.section
      
        data-aos="fade-up"
        className={`${ui.section} -mx-4 border-y-4 border-black bg-[#00BFFF]  py-12 px-4 max-sm:-mx-2.5 max-sm:px-2.5`}
      >
        {/* heading */}
        <div className={`${ui.sectionHeading} relative`}>
          <div className="inline-block rotate-[-2deg] border-4 border-black bg-white px-4 py-2 shadow-[6px_6px_0px_black]">
            <p className="text-sm font-black uppercase tracking-wide text-black">
              Tech Stack
            </p>
          </div>

          <h2 className="text-[clamp(2rem,5vw,3.35rem)] font-black leading-[1.05] text-black">
            <span className="inline-block rotate-[-1deg] border-4 border-black bg-[#f6e27f] px-3 py-1 shadow-[6px_6px_0px_black]">
              Tools I use to build
            </span>
          </h2>

          {/* little accent block */}
          <div className="absolute -top-2 right-10 h-5 w-5 rotate-12 bg-[#22c55e] border-4 max-sm:hidden animate-bounce" />
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
                data-aos="zoom-in-up"
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
                <Motion.span
                whileHover={{
    scale: 1.1,
    rotate: 8,
  }}
                  className={`
              grid h-11 w-11 place-items-center
              border-4 border-black text-xs font-black
              shadow-[4px_4px_0px_black]
              ${icon.className}
            `}
                >
                  {icon.label}
                </Motion.span>

                <span className="text-sm font-extrabold">{skill}</span>

                {/* hover accent */}
                <div className="absolute -right-2 -top-2 h-3 w-3 rotate-45 bg-black opacity-0 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </Motion.section>

      {/*  Projects preview section  */}
      <section
        className={`${ui.section} -mx-4 border-y-4 border-black bg-white py-12 px-4 max-sm:-mx-2.5 max-sm:px-2.5`}
      >
        {/* decorative brutal shapes */}

      <Motion.div
  animate={{
    y: [0, -12, 0],
    rotate: [0, 8, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-[12%] left-[4%] h-16 w-16 border-4 border-black bg-[#D77D00] max-sm:hidden"
/>
<Motion.div
  animate={{
    rotate: [-6, 6, -6],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="absolute max-sm:hidden right-[4%] top-[18%] text-6xl text-[#00e5ff]"
>
  ✿
</Motion.div>
<Motion.div
  animate={{
    rotate: [0, 360],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute max-sm:hidden top-[10%] left-[5%] text-5xl text-[#ef4444]"
>
  ★
</Motion.div>

<Motion.div
  animate={{
    y: [0, 10, 0],
    rotate: [0, -10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute max-sm:hidden top-[32%] right-[4%] h-16 w-16 border-4 border-black bg-[#ff90e8] max-sm:hidden"
/>

<Motion.div
  animate={{
    y: [0, -8, 0],
    x: [0, 6, 0],
    rotate: [0, 12, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute max-sm:hidden left-[45%] top-[19%] z-10 text-5xl font-black text-[#4f46e5] max-sm:hidden"
>
  ↗
</Motion.div>
        {/* header */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className={`${ui.eyebrow} inline-block -rotate-2 border-4 border-black bg-white px-3 py-1 shadow-[4px_4px_0px_black]`}
            >
              Projects
            </p>

            <h2 className={`${ui.h2} mt-4`}>
              Some of my{" "}
              <span className="inline-block rotate-[-1deg] border-4 border-black bg-[#00e5ff] px-2 shadow-[6px_6px_0px_black]">
                recent work
              </span>
            </h2>

            <p className="mt-5 max-w-[620px] border-l-4 border-black pl-4 text-[1rem] font-semibold leading-[1.6] text-[#1A1A1A]">
              A few selected projects that showcase my frontend, backend, and
              full-stack development skills.
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
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
          <div className="absolute -top-3 right-10 h-6 w-6 max-sm:hidden animate-bounce  rotate-12 border-4 border-black bg-[#22c55e]" />
          <div className="absolute -bottom-3 left-20 h-4 w-4 -rotate-12 bg-white border-4 border-black max-sm:hidden" />
        </div>

        {/* timeline wrapper */}
        <div className="relative mt-10">
          {/* vertical line */}
          <div className="absolute left-10 top-0 h-full w-[4px] bg-black max-sm:left-4" />

          <div className="space-y-10">
            {timelineItems.map((item, index) => (
              <article
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
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

      {/* SERVICES SECTION */}
      <section
        className={`${ui.section} -mx-4 border-y-4 border-black bg-[#ff90e8] px-4 max-sm:-mx-2.5 max-sm:px-2.5`}
      >
        {/* heading */}
        <div className={`${ui.sectionHeading} relative`}>
          <div className="inline-block rotate-[-2deg] border-4 border-black bg-white px-4 py-2 shadow-[6px_6px_0px_black]">
            <p className="text-sm font-black uppercase tracking-wide text-black">
              Services
            </p>
          </div>

          <h2 className="mt-5 max-w-[760px] text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.02] text-black">
            What I can{" "}
            <span className="inline-block rotate-[1deg] border-4 border-black bg-[#00e5ff] px-3 py-1 shadow-[6px_6px_0px_black]">
              build for you
            </span>
          </h2>

          {/* decorations */}
          <div className="absolute right-8 top-0 hidden h-5 w-5 rotate-12 border-4 border-black bg-[#22c55e] md:block" />
          <div className="absolute bottom-0 left-10 hidden text-4xl text-white md:block">
            ✦
          </div>
        </div>

        {/* services grid */}
        <div className="grid grid-cols-3 gap-6 max-[920px]:grid-cols-2 max-sm:grid-cols-1">
          {services.map((service, index) => {
            const colors = [
              "bg-[#00e5ff]",
              "bg-[#f6e27f]",
              "bg-[#22c55e]",
              "bg-[#ff90e8]",
            ];

            const serviceIcons = [
              { key: "frontend", el: <FaCode /> },
              { key: "tools", el: <FaTools /> },
              { key: "speed", el: <FaBolt /> },
              { key: "web", el: <FaGlobe /> },
            ];

            return (
              <article
                data-aos="flip-left"
                key={service.label}
                className={`
          group relative overflow-hidden
          border-4 border-black
          ${index % 2 === 0 ? "bg-white" : "bg-[#f1f1f1]"}
          p-6
          shadow-[8px_8px_0px_black]
          transition-all duration-200
          hover:-translate-x-1 hover:-translate-y-1
          hover:shadow-[12px_12px_0px_black]
        `}
              >
                {/* top decoration */}
                <div
                  className={`
            absolute right-3 top-3 h-4 w-4 rotate-12 border-4 border-black
            ${colors[index % colors.length]}
          `}
                />

                {/* icon */}
                <div
                  className={`
            mb-5 inline-flex h-16 w-16 items-center justify-center
            border-4 border-black text-3xl
            shadow-[5px_5px_0px_black]
            ${colors[index % colors.length]}
          `}
                >
                  {serviceIcons[index % serviceIcons.length].el}
                </div>

                {/* title */}
                <h3 className="text-[1.6rem] font-black leading-tight text-black">
                  {service.label}
                </h3>

                {/* divider */}
                <div className="my-4 h-1 w-16 bg-black" />

                {/* description */}
                <p className="font-semibold leading-[1.7] text-[#1a1a1a]">
                  {service.description}
                </p>

                {/* bottom hover accent */}
                <div
                  className="
            absolute bottom-0 left-0 h-2 w-0 bg-black
            transition-all duration-300 group-hover:w-full
          "
                />
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
