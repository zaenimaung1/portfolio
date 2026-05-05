import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const projects = usePortfolioStore((state) => state.projects);
  const project = projects.find((item) => String(item.id) === projectId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  if (!project) {
    return (
      <main className={ui.section}>
        <section className={`${ui.card} grid gap-[22px]`}>
          <p className={ui.eyebrow}>Project Not Found</p>
          <h1 className={ui.h1}>This project is not available</h1>
          <Link className={`${ui.button} ${ui.primaryButton}`} to="/projects">
            Back To Projects
          </Link>
        </section>
      </main>
    );
  }

  const detailImages = project.detailImages ?? [project.image];
  const activeImage = detailImages[activeImageIndex];
  const whatILearned = project.whatILearned ?? [];
  const openImageViewer = (index) => {
    setActiveImageIndex(index);
    setIsImageViewerOpen(true);
  };
  const goToPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? detailImages.length - 1 : currentIndex - 1,
    );
  };
  const goToNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === detailImages.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <main className={`${ui.section} grid gap-[42px]`}>
      <section className="">
        <div className={`${ui.card} flex flex-col justify-center`}>
          <h1 className={ui.h1}>{project.title}</h1>
          <p className="mt-[18px] break-words text-[clamp(1rem,2vw,1.12rem)] font-semibold leading-[1.65]">
            {project.description}
          </p>

          
        </div>
          
       
      </section>

      <section className="min-w-0">
        <div className={ui.sectionHeading}>
          <p className={ui.eyebrow}>Gallery</p>
          <h2 className={ui.h2}>Project detail images</h2>
        </div>

        <div className="grid gap-[18px]">
          <button
            className={`${ui.framed} relative min-w-0 cursor-zoom-in overflow-hidden bg-white p-0`}
            type="button"
            onClick={() => setIsImageViewerOpen(true)}
            aria-label="Open selected project image"
          >
            <img
              className="aspect-[1.75/1] w-full object-cover max-sm:aspect-[1.2/1]"
              src={activeImage}
              alt={`${project.title} selected detail ${activeImageIndex + 1}`}
            />
          </button>

          <div className="flex justify-center gap-3.5">
            <button
              className={`${ui.imageButton} max-sm:h-[42px] max-sm:w-[42px]`}
              type="button"
              onClick={goToPreviousImage}
              aria-label="Show previous project image"
            >
              &lt;
            </button>
            <button
              className={`${ui.imageButton} max-sm:h-[42px] max-sm:w-[42px]`}
              type="button"
              onClick={goToNextImage}
              aria-label="Show next project image"
            >
              &gt;
            </button>
          </div>

          <div
            className="grid grid-cols-3 gap-4 max-[920px]:grid-cols-2 max-sm:grid-cols-1"
            aria-label="Project images"
          >
            {detailImages.map((image, index) => (
              <button
                className={
                  index === activeImageIndex
                    ? `${ui.framed} min-w-0 -translate-x-0.5 -translate-y-0.5 cursor-pointer bg-[#22c55e] p-0 opacity-100 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#4f46e5]`
                    : `${ui.framed} min-w-0 cursor-pointer bg-white p-0 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#4f46e5]`
                }
                key={image}
                type="button"
                onClick={() => openImageViewer(index)}
                aria-label={`Open project image ${index + 1}`}
                aria-current={index === activeImageIndex}
              >
                <img
                  className="aspect-[1.45/1] w-full object-cover"
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {isImageViewerOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-[clamp(18px,4vw,44px)]"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} image viewer`}
        >
          <button
            className={`${ui.imageButton} fixed top-[18px] right-[18px] z-[51] bg-[#ef4444] text-white`}
            type="button"
            onClick={() => setIsImageViewerOpen(false)}
            aria-label="Close image viewer"
          >
            X
          </button>

          <button
            className={`${ui.imageButton} fixed top-1/2 left-[18px] z-[51] -translate-y-1/2 hover:-translate-x-0.5 hover:translate-y-[calc(-50%_-_2px)] max-sm:left-2.5`}
            type="button"
            onClick={goToPreviousImage}
            aria-label="Show previous project image"
          >
            &lt;
          </button>

          <img
            className={`${ui.framed} max-h-[86vh] w-[min(100%,1120px)] bg-white object-contain`}
            src={activeImage}
            alt={`${project.title} full size detail ${activeImageIndex + 1}`}
          />

          <button
            className={`${ui.imageButton} fixed top-1/2 right-[18px] z-[51] -translate-y-1/2 hover:-translate-x-0.5 hover:translate-y-[calc(-50%_-_2px)] max-sm:right-2.5`}
            type="button"
            onClick={goToNextImage}
            aria-label="Show next project image"
          >
            &gt;
          </button>
        </div>
      )}

      <section className="grid min-w-0 grid-cols-2 items-start gap-6 max-[920px]:grid-cols-1">
        <div className={`${ui.card} min-w-0`}>
          <p className={ui.eyebrow}>Description</p>
          <h2 className={ui.h2}>What this project does</h2>
          <p className="mt-[18px] break-words text-[clamp(1rem,2vw,1.12rem)] font-semibold leading-[1.65]">
            {project.detailDescription}
          </p>
        </div>

        <div className="grid min-w-0 gap-6">
          <aside className={`${ui.card} min-w-0`}>
            <h2 className={ui.h2}>What I Learned</h2>
            {whatILearned.length > 0 ? (
              <ul className="mt-[18px] grid list-disc gap-2 pl-5">
                {whatILearned.map((item) => (
                  <li
                    className="break-words font-semibold leading-[1.65] text-black"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-[18px] break-words font-semibold leading-[1.55]">
                Learning notes are coming soon.
              </p>
            )}
          </aside>

          <aside className={`${ui.card} min-w-0`}>
            <p className={ui.eyebrow}>Tech Stack</p>
            <div
              className="mt-[18px] flex flex-wrap gap-2.5"
              aria-label={`${project.title} tech stack`}
            >
              {project.techStack.map((tech) => (
                <span className={ui.stackItem} key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </aside>

          <div className="flex flex-wrap gap-3.5">
            <a
              className={`${ui.button} ${ui.primaryButton}`}
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Source Code
            </a>
            <Link className={`${ui.button} ${ui.secondaryButton}`} to="/projects">
              Back To Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
