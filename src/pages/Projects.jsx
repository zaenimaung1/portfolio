import ProjectCard from "../components/ProjectCard";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";

export default function Projects() {
  const projects = usePortfolioStore((state) => state.projects);

  return (
    <main className={`${ui.section} relative`}>

      {/* decorative elements */}
      <div className="absolute -top-3 right-10 h-5 w-5 rotate-12 bg-black max-sm:hidden" />
      <div className="absolute bottom-10 left-6 h-4 w-4 -rotate-12 bg-[#00e5ff] border-4 border-black max-sm:hidden" />

      {/* HEADER */}
      <section className="mb-12">

        {/* badge */}
        <div className="inline-block -rotate-2 border-4 border-black bg-[#00e5ff] px-4 py-2 shadow-[5px_5px_0px_black]">
          <p className="text-sm font-black uppercase tracking-wide text-black">
            🚀 Portfolio Projects
          </p>
        </div>

        {/* title */}
        <h1 className={`${ui.h1Page} mt-5`}>
          Building ideas into{" "}
          <span className="inline-block rotate-[-1deg] border-4 border-black bg-[#f6e27f] px-3 py-1 shadow-[6px_6px_0px_black]">
            real products
          </span>
        </h1>

        {/* description */}
        <p className="mt-6 max-w-[760px] border-l-4 border-black pl-4 text-[1.05rem] font-semibold leading-[1.7] text-[#1A1A1A]">
          These projects reflect my learning journey and experience in
          frontend, backend, and full-stack development using modern
          web technologies.
        </p>
      </section>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-6 max-[920px]:grid-cols-2 max-sm:grid-cols-1">

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`
              transition-all duration-200
              ${index === 0 ? "md:col-span-2" : ""}
            `}
          >
            <ProjectCard
              project={project}
              bgColor={
                [
                  "bg-white",
                  "bg-[#ff90e8]",
                  "bg-[#00e5ff]",
                  "bg-[#f6e27f]",
                  "bg-[#f1f1f1]",
                ][index % 5]
              }
            />
          </div>
        ))}
      </div>
    </main>
  );
}