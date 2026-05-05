import ProjectCard from "../components/ProjectCard";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";

export default function Projects() {
  const projects = usePortfolioStore((state) => state.projects);

  return (
    <main className={ui.section}>
      <div className={ui.sectionHeading}>
        <p className={ui.eyebrow}>Selected Work</p>
        <h1 className={ui.h1Page}>Projects with photos, descriptions, and tech stacks</h1>
      </div>

      <div className="grid grid-cols-3 gap-6 max-[920px]:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
