import { create } from "zustand";
import dashboardImage from "../assets/images/dashboard-project.svg";
import profilePhoto from "../assets/images/zarni.png";
import shopImage from "../assets/images/shop-project.svg";
import trackerImage from "../assets/images/tracker-project.svg";

const portfolio = {
  person: {
    name: "Zarni Maung",
    title: "Frontend Developer",
    location: "Myeik, Myanmar",
    photo: profilePhoto,
    email: "hello@zarni.dev",
    phone: "+95 9 000 000 000",
    intro:
      "I build bold, fast, and responsive web interfaces with React. I like turning clean layouts, useful interactions, and sharp visual systems into products people can actually enjoy using.",
    highlights: ["React UI", "Zustand State", "Responsive Design"],
  },
  skills: {
    frontend: ["React", "JavaScript", "Tailwind CSS", "CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "PHP"],
    database: ["MongoDB", "MySQL"],
  },
  socials: [
    { label: "GitHub", value: "github.com/zarni", url: "https://github.com/" },
    { label: "LinkedIn", value: "linkedin.com/in/zarni", url: "https://linkedin.com/" },
  ],
  projects: [
    {
      id: 1,
      title: "SkillBoard Dashboard",
      image: dashboardImage,
      description:
        "A compact dashboard for tracking learning goals, weekly progress, and frontend practice tasks in one focused workspace.",
      techStack: ["React", "Zustand", "CSS Grid"],
      status: "Featured",
    },
    {
      id: 2,
      title: "Neo Shop UI",
      image: shopImage,
      description:
        "A neobrutalist ecommerce interface with product cards, strong call-to-actions, and responsive browsing sections.",
      techStack: ["React Router", "JavaScript", "CSS"],
      status: "UI Build",
    },
    {
      id: 3,
      title: "Task Tracker",
      image: trackerImage,
      description:
        "A simple productivity app concept for organizing tasks, priorities, and completed work with a friendly visual rhythm.",
      techStack: ["React", "Local State", "Responsive UI"],
      status: "Prototype",
    },
  ],
};

export const usePortfolioStore = create(() => portfolio);
