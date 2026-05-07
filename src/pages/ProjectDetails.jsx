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
  <main className={`${ui.section} grid gap-14`}>

    {/* HERO */}
    <section className="grid gap-8 border-b-4 border-black pb-10 ">

      {/* status badges */}
      <div className="flex flex-wrap gap-3">
        {project.status && (
          <span className="border-4 border-black bg-[#ef4444] px-3 py-1 text-sm font-black text-white">
            {project.status}
          </span>
        )}
        {project.achievement && (
          <span className="border-4 border-black bg-[#22c55e] px-3 py-1 text-sm font-black">
            {project.achievement}
          </span>
        )}
        {project.role && (
          <span className="border-4 border-black bg-[#00e5ff] px-3 py-1 text-sm font-black">
            {project.role}
          </span>
        )}
      </div>

      {/* title + description */}
      <div className="grid gap-5">
        <p className={ui.eyebrow}>Project</p>

        <h1 className={ui.h1}>{project.title}</h1>

        <p className="max-w-[800px] border-l-4 border-black pl-4 text-[1.1rem] font-semibold leading-[1.7]">
          {project.description}
        </p>
      </div>

      {/* MAIN IMAGE (focus point) */}
      <button
        className={`${ui.framed} overflow-hidden border-4 border-black bg-white`}
        onClick={() => setIsImageViewerOpen(true)}
      >
        <img
          src={activeImage}
          className="w-full object-cover aspect-[16/9]"
        />
      </button>
    </section>

    {/* CONTENT GRID */}
    <section className="grid grid-cols-[1.3fr_0.7fr] gap-10 max-[920px]:grid-cols-1">

      {/* LEFT STORY */}
      <div className="grid gap-10">

        {/* DESCRIPTION */}
        <div>
          <p className={ui.eyebrow}>Story</p>
          <h2 className={ui.h2}>What this project does</h2>

          <div className="mt-5 grid gap-4">
            {detailParagraphs.map((p) => (
              <p key={p} className="font-semibold leading-[1.7]">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        <div className="bg-[#f6e27f] border-y-4 border-black py-12">
          <p className={ui.eyebrow}>Gallery</p>
          <h2 className={ui.h2}>Screenshots</h2>

          <div className="mt-5 grid grid-cols-3 gap-4 max-sm:grid-cols-2">
            {detailImages.map((img, i) => (
              <button
                key={i}
                onClick={() => openImageViewer(i)}
                className="border-4 border-black bg-white overflow-hidden hover:-translate-y-1 transition"
              >
                <img src={img} className="aspect-square object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (DETAILS PANEL) */}
      <aside className="grid gap-8 border-l-4 border-black pl-8 max-[920px]:border-l-0 max-[920px]:pl-0">

        {/* TECH STACK */}
        <div>
          <p className={ui.eyebrow}>Tech Stack</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((t) => (
              <span key={t} className={ui.stackItem}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div>
          <p className={ui.eyebrow}>Highlights</p>
          <ul className="mt-4 grid gap-3">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3 font-semibold">
                <span className="h-3 w-3 border-4 border-black bg-[#22c55e] mt-2" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* LEARNING */}
        <div className="bg-[#00BFFF] border-t-4 border-black py-12">
          <p className={ui.eyebrow}>What I Learned</p>
          <ul className="mt-4 grid gap-3">
            {whatILearned.map((w) => (
              <li key={w} className="flex gap-3 font-semibold">
                <span className="h-3 w-3 border-4 border-black bg-[#4f46e5] mt-2" />
                {w}
              </li>
            ))}
          </ul>
        </div>

        {/* ACTIONS */}
       <div className="mt-8 flex flex-wrap items-center gap-3">

  {project.sourceCodeUrl && (
    <a
      className={`${ui.button} ${ui.primaryButton} px-4 py-3 text-sm`}
      href={project.sourceCodeUrl}
      target="_blank"
      rel="noreferrer"
    >
      Source Code
    </a>
  )}

  <Link
    className={`${ui.button} ${ui.secondaryButton} px-4 py-3 text-sm`}
    to="/projects"
  >
    Back
  </Link>
</div>

      </aside>
    </section>

    {/* IMAGE MODAL stays same */}
    {isImageViewerOpen && (
      <div className="fixed inset-0 z-50 bg-black/90 grid place-items-center">
        <button
          className="absolute top-5 right-5 border-4 border-white bg-red-500 px-3 py-1 font-black"
          onClick={() => setIsImageViewerOpen(false)}
        >
          X
        </button>

        <img
          src={activeImage}
          className="max-h-[85vh] border-4 border-white"
        />
      </div>
    )}
  </main>
);
}
