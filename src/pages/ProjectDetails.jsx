import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePortfolioStore } from "../stores/portfolioStore";
import { ui } from "../styles";
import { motion as Motion } from "framer-motion";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsIcon from "@mui/icons-material/Collections";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SettingsIcon from "@mui/icons-material/Settings";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const projects = usePortfolioStore((state) => state.projects);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  const normalizedProjectId = String(projectId ?? "").trim();

  const project = projects.find(
    (item) => String(item.id) === normalizedProjectId
  );

  useEffect(() => {
    setActiveImageIndex(0);
    setIsImageViewerOpen(false);
  }, [normalizedProjectId]);

  if (!project) {
    return (
      <main className={ui.section}>
        <section className={`${ui.card} grid gap-6`}>
          <p className={ui.eyebrow}>Project Not Found</p>

          <h1 className={ui.h1}>This project is not available.</h1>

          <Link
            className={`${ui.button} ${ui.primaryButton} w-fit`}
            to="/projects"
          >
            Back To Projects
          </Link>
        </section>
      </main>
    );
  }

  // ✅ SAFE DATA
  const detailImages =
    project.detailImages?.length > 0
      ? project.detailImages
      : project.image
      ? [project.image]
      : [];

  const activeImage = detailImages[activeImageIndex] || "";

  const whatILearned = project.whatILearned ?? [];
  const highlights = project.highlights ?? [];
  const techStack = project.techStack ?? [];

  const detailParagraphs = project.detailDescription
    ? project.detailDescription.split("\n\n").filter(Boolean)
    : [];

  const openImageViewer = (index) => {
    setActiveImageIndex(index);
    setIsImageViewerOpen(true);
  };

  const goToPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? detailImages.length - 1 : current - 1
    );
  };

  const goToNextImage = () => {
    setActiveImageIndex((current) =>
      current === detailImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className={`${ui.section} grid gap-12`}>

      {/* HERO */}
      <section className="grid gap-8 border-b-4 border-black pb-10">

        {/* BADGES */}
        <div className="flex flex-wrap gap-3">
          {project.status && (
            <span className="border-4 border-black bg-[#ef4444] px-3 py-1 text-sm font-black text-white shadow-[4px_4px_0_#000]">
              {project.status}
            </span>
          )}

          {project.achievement && (
            <span className="border-4 border-black bg-[#22c55e] px-3 py-1 text-sm font-black text-black shadow-[4px_4px_0_#000]">
              {project.achievement}
            </span>
          )}

          {project.role && (
            <span className="border-4 border-black bg-[#00e5ff] px-3 py-1 text-sm font-black text-black shadow-[4px_4px_0_#000]">
              {project.role}
            </span>
          )}
        </div>

        {/* TITLE */}
        <div className="grid gap-5">
          <p className={ui.eyebrow}>Project</p>

          <h1 className={ui.h1}>{project.title}</h1>

          <p className="max-w-[800px] border-l-4 border-black pl-4 text-[1.05rem] font-semibold leading-[1.8] text-[#1A1A1A]">
            {project.description}
          </p>
        </div>

        {/* MAIN IMAGE */}
        {activeImage && (
          <button
            onClick={() => openImageViewer(activeImageIndex)}
            className={`${ui.framed} overflow-hidden bg-white transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#000]`}
          >
            <img
              src={activeImage}
              alt={project.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </button>
        )}
      </section>

      {/* CONTENT */}
      <section className="grid grid-cols-[1.2fr_0.8fr] gap-8 max-[920px]:grid-cols-1">

        {/* LEFT */}
        <div className="grid gap-8">

          {/* DESCRIPTION */}
          <div className={`${ui.framed} bg-white p-6 max-sm:p-4`}>
            <div className="mb-5">
              <div className="inline-block border-4 border-black bg-[#22c55e] px-3 py-1 shadow-[4px_4px_0_#000]">
                <p className="inline-flex items-center gap-1.5 text-sm font-black uppercase text-black">
                  <ArticleIcon fontSize="inherit" />
                  Description
                </p>
              </div>

              <h2 className={`${ui.h2} mt-4`}>
                What this{" "}
                <span className="bg-[linear-gradient(transparent_56%,#22c55e_56%)]">
                  project does
                </span>
              </h2>
            </div>

            <div className="grid gap-4">
              {detailParagraphs.length > 0 ? (
                detailParagraphs.map((p, i) => (
                  <p
                    key={`${p}-${i}`}
                    className="text-[1rem] font-semibold leading-[1.8] text-[#1A1A1A]"
                  >
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-sm font-semibold text-gray-600">
                  No description available yet.
                </p>
              )}
            </div>
          </div>

          {/* GALLERY */}
          {detailImages.length > 0 && (
            <div className={`${ui.framed} bg-white p-6 max-sm:p-4`}>
              <div className="mb-5">
                <div className="inline-block border-4 border-black bg-[#00e5ff] px-3 py-1 shadow-[4px_4px_0_#000]">
                  <p className="inline-flex items-center gap-1.5 text-sm font-black uppercase text-black">
                    <CollectionsIcon fontSize="inherit" />
                    Gallery
                  </p>
                </div>

                <h2 className={`${ui.h2} mt-4`}>
                  Project{" "}
                  <span className="bg-[linear-gradient(transparent_56%,#00e5ff_56%)]">
                    screenshots
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
                {detailImages.map((img, i) => (
                  <button
                    key={`${img}-${i}`}
                    onClick={() => openImageViewer(i)}
                    className="overflow-hidden border-4 border-black bg-white transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]"
                  >
                    <img
                      src={img}
                      alt=""
                      className="aspect-square w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <aside className="grid gap-6">

          {/* TECH STACK */}
          {techStack.length > 0 && (
            <div className={`${ui.framed} bg-white p-5`}>
              <div className="mb-4 inline-block border-4 border-black bg-[#f6e27f] px-3 py-1 shadow-[4px_4px_0_#000]">
                <p className="inline-flex items-center gap-1.5 text-sm font-black uppercase text-black">
                  <SettingsIcon fontSize="inherit" />
                  Tech Stack
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((t, i) => (
                  <span key={`${t}-${i}`} className={ui.stackItem}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* HIGHLIGHTS */}
          {highlights.length > 0 && (
            <div className={`${ui.framed} bg-white p-5`}>
              <div className="mb-4 inline-block border-4 border-black bg-[#ef4444] px-3 py-1 shadow-[4px_4px_0_#000]">
                <p className="inline-flex items-center gap-1.5 text-sm font-black uppercase text-white">
                  <RocketLaunchIcon fontSize="inherit" />
                  Highlights
                </p>
              </div>

              <ul className="grid gap-3">
                {highlights.map((h, i) => (
                  <li
                    key={`${h}-${i}`}
                    className="flex gap-3 text-[0.98rem] font-semibold leading-[1.6]"
                  >
                    <span className="mt-2 h-3 w-3 border-4 border-black bg-[#ef4444]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* LEARNED */}
          {whatILearned.length > 0 && (
            <div className={`${ui.framed} bg-white p-5`}>
              <div className="mb-4 inline-block border-4 border-black bg-[#4f46e5] px-3 py-1 shadow-[4px_4px_0_#000]">
                <p className="inline-flex items-center gap-1.5 text-sm font-black uppercase text-white">
                  <MenuBookIcon fontSize="inherit" />
                  What I Learned
                </p>
              </div>

              <ul className="grid gap-3">
                {whatILearned.map((w, i) => (
                  <li
                    key={`${w}-${i}`}
                    className="flex gap-3 text-[0.98rem] font-semibold leading-[1.6]"
                  >
                    <span className="mt-2 h-3 w-3 border-4 border-black bg-[#4f46e5]" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex flex-wrap items-center gap-3">
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noreferrer"
                className={`${ui.button} ${ui.primaryButton}`}
              >
                Source Code
              </a>
            )}

            <Link
              to="/projects"
              className={`${ui.button} ${ui.secondaryButton}`}
            >
              Back
            </Link>
          </div>
        </aside>
      </section>

      {/* IMAGE VIEWER */}
      {isImageViewerOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-5">

          <Motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsImageViewerOpen(false)}
            className="absolute top-5 right-5 grid h-12 w-12 place-items-center border-4 border-black bg-[#ef4444] text-2xl font-black text-white"
            aria-label="Close image viewer"
          >
            <CloseIcon fontSize="inherit" />
          </Motion.button>

          {detailImages.length > 1 && (
            <>
              <Motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToPreviousImage}
                className="absolute left-5 grid h-12 w-12 place-items-center border-4 border-black bg-white text-2xl font-black"
                aria-label="Previous image"
              >
                <ArrowBackIcon fontSize="inherit" />
              </Motion.button>

              <Motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToNextImage}
                className="absolute right-5 grid h-12 w-12 place-items-center border-4 border-black bg-white text-2xl font-black"
                aria-label="Next image"
              >
                <ArrowForwardIcon fontSize="inherit" />
              </Motion.button>
            </>
          )}

          <img
            src={activeImage}
            alt=""
            className="max-h-[85vh] border-4 border-white object-contain"
          />
        </div>
      )}
    </main>
  );
}


