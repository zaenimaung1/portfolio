import ProjectCard from "../components/ProjectCard";
import { usePortfolioStore } from "../stores/portfolioStore";

export default function Projects() {
  const projects = usePortfolioStore((state) => state.projects);

  return (
    <main className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h1>Projects with photos, descriptions, and tech stacks</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
