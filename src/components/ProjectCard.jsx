import { Link } from "react-router-dom";
import { ui } from "../styles";

export default function ProjectCard({ project }) {
  return (
    <article
      className={`${ui.framed} flex min-w-0 flex-col bg-white transition-[transform,box-shadow] duration-[160ms] ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000000]`}
    >
      <div className="relative border-b-4 border-black bg-[#f1f1f1]">
        <img
          className="aspect-[1.55/1] w-full object-cover"
          src={project.image}
          alt={`${project.title} preview`}
        />
        <span className="absolute right-3 bottom-3 border-[3px] border-black bg-[#ef4444] px-2.5 py-2 text-[0.82rem] font-black text-white">
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 max-sm:p-4">
        <h2 className="m-0 break-words text-[1.55rem] font-black leading-[1.02] tracking-normal text-black">
          {project.title}
        </h2>
        <p className="my-3 mb-[18px] break-words font-semibold leading-[1.55]">
          {project.description}
        </p>

        <div className={ui.stackList} aria-label={`${project.title} tech stack`}>
          {project.techStack.map((tech) => (
            <span key={tech} className={ui.stackItem}>
              {tech}
            </span>
          ))}
        </div>

        <Link
          className={`${ui.button} ${ui.secondaryButton} mt-[18px] w-full`}
          to={`/projects/${project.id}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
