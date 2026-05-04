export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img src={project.image} alt={`${project.title} preview`} />
        <span className="project-status">{project.status}</span>
      </div>

      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="stack-list" aria-label={`${project.title} tech stack`}>
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
