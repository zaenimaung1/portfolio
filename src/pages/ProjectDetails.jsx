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

  const detailImages = project.detailImages?.length ? project.detailImages : [project.image];
  const activeImage = detailImages[activeImageIndex];
  const whatILearned = project.whatILearned ?? [];
  const highlights = project.highlights ?? [];
  const techStack = project.techStack ?? [];
  const overviewItems = [
    project.status && { label: "Status", value: project.status },
    project.role && { label: "Role", value: project.role },
    project.achievement && { label: "Achievement", value: project.achievement },
  ].filter(Boolean);
  const detailParagraphs = project.detailDescription
    ? project.detailDescription.split("\n\n").filter(Boolean)
    : [];

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
    <main className={`${ui.section} grid gap-[44px]`}>
      <section className="grid gap-6 border-b-4 border-black pb-9">
        <div className="flex flex-wrap items-center gap-3">
          {project.status && (
            <span className="border-[3px] border-black bg-[#ef4444] px-3 py-2 text-sm font-black uppercase text-white">
              {project.status}
            </span>
          )}
          {project.achievement && (
            <span className="border-[3px] border-black bg-[#22c55e] px-3 py-2 text-sm font-black uppercase text-black">
              {project.achievement}
            </span>
          )}
          {project.role && (
            <span className="border-[3px] border-black bg-[#00e5ff] px-3 py-2 text-sm font-black uppercase text-black">
              {project.role}
            </span>
          )}
        </div>

        <div className="grid grid-cols-[1.35fr_0.65fr] gap-7 max-[920px]:grid-cols-1">
          <div className="min-w-0">
            <p className={ui.eyebrow}>Project Details</p>
            <h1 className={ui.h1}>{project.title}</h1>
            <p className="mt-[18px] max-w-[780px] break-words text-[clamp(1rem,2vw,1.14rem)] font-semibold leading-[1.65] text-[#1a1a1a]">
              {project.description}
            </p>
          </div>

          {overviewItems.length > 0 && (
            <dl className="grid min-w-0 content-start gap-4 border-l-4 border-black pl-6 max-[920px]:border-l-0 max-[920px]:border-t-4 max-[920px]:pt-5 max-[920px]:pl-0">
              {overviewItems.map((item) => (
                <div
                  className="grid grid-cols-[120px_1fr] gap-4 border-b-[3px] border-black pb-4 last:border-b-0 last:pb-0 max-sm:grid-cols-1 max-sm:gap-1"
                  key={item.label}
                >
                  <dt className="text-xs font-black uppercase text-[#4f46e5]">
                    {item.label}
                  </dt>
                  <dd className="mt-1 break-words text-lg font-black text-black">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <section className="grid min-w-0 grid-cols-[1.4fr_0.6fr] gap-6 max-[920px]:grid-cols-1">
        <div className="min-w-0">
          <div className={ui.sectionHeading}>
            <p className={ui.eyebrow}>IMAGE ARCHIVE</p>
            <h2 className={ui.h2}>All Project Images</h2>
          </div>

          <div className="grid gap-[18px]">
            <button
              className={`${ui.framed} relative min-w-0 cursor-zoom-in overflow-hidden bg-white p-0`}
              type="button"
              onClick={() => setIsImageViewerOpen(true)}
              aria-label="Open selected project image"
            >
              <img
                className="aspect-[1.7/1] w-full object-cover max-sm:aspect-[1.15/1]"
                src={activeImage}
                alt={`${project.title} selected detail ${activeImageIndex + 1}`}
              />
            </button>

            {detailImages.length > 1 && (
              <div className="flex justify-center gap-3.5">
                <button
                  className={`${ui.imageButton} max-sm:h-[42px] max-sm:w-[42px]`}
                  type="button"
                  onClick={goToPreviousImage}
                  aria-label="Show previous project image"
                >
                  &lt;
                </button>
                <span className="grid min-h-12 min-w-24 place-items-center border-[3px] border-black bg-[#f6e27f] px-4 font-black">
                  {activeImageIndex + 1} / {detailImages.length}
                </span>
                <button
                  className={`${ui.imageButton} max-sm:h-[42px] max-sm:w-[42px]`}
                  type="button"
                  onClick={goToNextImage}
                  aria-label="Show next project image"
                >
                  &gt;
                </button>
              </div>
            )}

            {detailImages.length > 1 && (
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
                    key={`${image}-${index}`}
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
            )}
          </div>
        </div>

        <aside className="grid min-w-0 content-start gap-5">
          {highlights.length > 0 && (
            <section className="min-w-0 border-t-4 border-black pt-5">
              <p className={ui.eyebrow}>Highlights</p>
              <h2 className="m-0 break-words text-[clamp(1.55rem,3.5vw,2.35rem)] font-black leading-[1.05] text-black">
                Best Parts
              </h2>
              <ul className="mt-[18px] grid gap-3">
                {highlights.map((item) => (
                  <li
                    className="grid grid-cols-[auto_1fr] gap-3 break-words font-semibold leading-[1.55] text-black"
                    key={item}
                  >
                    <span className="mt-1 h-4 w-4 border-[3px] border-black bg-[#22c55e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {techStack.length > 0 && (
            <section className="min-w-0 border-t-4 border-black pt-5">
              <p className={ui.eyebrow}>Tech Stack</p>
              <div
                className="flex flex-wrap gap-2.5"
                aria-label={`${project.title} tech stack`}
              >
                {techStack.map((tech) => (
                  <span className={ui.stackItem} key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          <div className="flex flex-wrap gap-3.5 border-t-4 border-black pt-5">
            {project.sourceCodeUrl && (
              <a
                className={`${ui.button} ${ui.primaryButton}`}
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Source Code
              </a>
            )}
            <Link className={`${ui.button} ${ui.secondaryButton}`} to="/projects">
              Back To Projects
            </Link>
          </div>
        </aside>
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

          {detailImages.length > 1 && (
            <button
              className={`${ui.imageButton} fixed top-1/2 left-[18px] z-[51] -translate-y-1/2 hover:-translate-x-0.5 hover:translate-y-[calc(-50%_-_2px)] max-sm:left-2.5`}
              type="button"
              onClick={goToPreviousImage}
              aria-label="Show previous project image"
            >
              &lt;
            </button>
          )}

          <img
            className={`${ui.framed} max-h-[86vh] w-[min(100%,1120px)] bg-white object-contain`}
            src={activeImage}
            alt={`${project.title} full size detail ${activeImageIndex + 1}`}
          />

          {detailImages.length > 1 && (
            <button
              className={`${ui.imageButton} fixed top-1/2 right-[18px] z-[51] -translate-y-1/2 hover:-translate-x-0.5 hover:translate-y-[calc(-50%_-_2px)] max-sm:right-2.5`}
              type="button"
              onClick={goToNextImage}
              aria-label="Show next project image"
            >
              &gt;
            </button>
          )}
        </div>
      )}

      <section className="grid min-w-0 grid-cols-[1.1fr_0.9fr] items-start gap-9 border-t-4 border-black pt-9 max-[920px]:grid-cols-1">
        <div className="min-w-0">
          <p className={ui.eyebrow}>Description</p>
          <h2 className={ui.h2}>What this project does</h2>
          <div className="mt-[18px] grid gap-4">
            {detailParagraphs.length > 0 ? (
              detailParagraphs.map((paragraph) => (
                <p
                  className="break-words text-[clamp(1rem,2vw,1.12rem)] font-semibold leading-[1.65]"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="break-words text-[clamp(1rem,2vw,1.12rem)] font-semibold leading-[1.65]">
                Project details are coming soon.
              </p>
            )}
          </div>
        </div>

        <aside className="min-w-0 border-l-4 border-black pl-7 max-[920px]:border-l-0 max-[920px]:border-t-4 max-[920px]:pt-7 max-[920px]:pl-0">
          <p className={ui.eyebrow}>Learning</p>
          <h2 className={ui.h2}>What I Learned</h2>
          {whatILearned.length > 0 ? (
            <ul className="mt-[18px] grid gap-3">
              {whatILearned.map((item) => (
                <li
                  className="grid grid-cols-[auto_1fr] gap-3 break-words font-semibold leading-[1.65] text-black"
                  key={item}
                >
                  <span className="mt-2 h-3 w-3 border-[3px] border-black bg-[#4f46e5]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-[18px] break-words font-semibold leading-[1.55]">
              Learning notes are coming soon.
            </p>
          )}
        </aside>
      </section>
    </main>
  );
}
