import ProjectCard from "../components/ProjectCard";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";

export default function Projects() {
  const projects = usePortfolioStore((state) => state.projects);

  return (
    <main className={ui.section}>
     <p className={`${ui.h1Page} pb-10`}>
  <span className="bg-[linear-gradient(transparent_56%,#00e5ff_56%)]">
    Selected Work
  </span>
</p>

      <div className="grid grid-cols-3 gap-6 max-[920px]:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
