import { create } from "zustand";
import dashboardImage from "../assets/images/dashboard.png";
import dashboardImage2 from "../assets/images/dashboard2.png";
import dashboardImage3 from "../assets/images/dashboard3.png";
import dashboardImage4 from "../assets/images/dashboard4.png";
import dashboardImage5 from "../assets/images/dashboard5.png";
import dashboardImage6 from "../assets/images/dashboard6.png";
import dashboardImage7 from "../assets/images/dashboard7.png";
import dashboardImage8 from "../assets/images/dashboard8.png";
import dashboardImage9 from "../assets/images/dashboard9.png";
import profilePhoto from "../assets/images/zarni.png";
import pivotImage from "../assets/images/Pivot.webp";
import baydinImage from "../assets/images/baydin.png";
import baydin2 from "../assets/images/baydin2.png";
import baydin3 from "../assets/images/baydin3.png";
import baydin4 from "../assets/images/baydin4.png";
import baydin5 from "../assets/images/baydin5.png";
import baydin6 from "../assets/images/baydin6.png";

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
      title: "Invoice_App Dashboard",
      image: dashboardImage,
      description:
        "Full-stack invoice app with React and Node.js for managing and tracking invoices...",
      detailDescription:
        "A full-stack invoice management dashboard for creating, updating, filtering, and tracking invoices. The interface focuses on fast status scanning, clear invoice details, and a responsive layout that works well across desktop and mobile screens.",
      detailImages: [dashboardImage, dashboardImage2, dashboardImage3, dashboardImage4, dashboardImage5, dashboardImage6, dashboardImage7, dashboardImage8,dashboardImage9],
      techStack: ["React", "Zustand", "Node.js", "Express.js", "MongoDB" ,"Tailwind CSS"],
      status: "Completed",
      sourceCodeUrl: "https://github.com/zarni/invoice-app-dashboard",
    },
    {
      id: 2,
      title: "Pivot",
      image: pivotImage,
      description:
        "Multiplatform AI assistant with RGA support across web,dashboard, android app and TelegramBot",
      detailDescription:
        "A multiplatform AI assistant experience designed for web, dashboard, Android, and Telegram bot use cases. The project explores consistent product flows, reusable interface patterns, and assistant-driven task support across several surfaces.",
      detailImages: [pivotImage, dashboardImage, baydinImage],
      techStack: ["Python", "FastApi", "Langchain", "Telegram", "Next.Js","Docker","Expo","Gemini"],
       whatILearned: [
    "Built a dynamic web application using PHP and MySQL",
    "Learned CRUD operations and database management",
    "Understood how frontend and backend communicate",
    "Improved skills in handling and organizing data",
    "Practiced writing clean and structured code",
    "Designed a simple and user-friendly interface"
  ],
      status: "Completed",
      sourceCodeUrl: "https://github.com/zarni/pivot",
    },
 {
  id: 3,
  title: "YoeYar BayDin",
  image: baydinImage,
  description:
    "A BayDin web application built with PHP and MySQL, featuring a dynamic question-and-answer system with a simple and user-friendly interface.",
  detailDescription:
    "YoeYar BayDin is a web application developed using PHP and MySQL. It provides a dynamic question-and-answer system where users can easily ask questions and receive answers. The application has a clean and simple interface, making it easy to use and navigate.\n\nThe backend is built with PHP, which handles data processing and communicates with the MySQL database to store and retrieve data efficiently. The project uses data from Ko San Lwin Htun’s Burma Project Ideas repository, allowing users to explore a variety of questions and answers.\n\nOverall, the application focuses on simplicity, usability, and a smooth user experience.",
  detailImages: [baydinImage, baydin2, baydin3, baydin4, baydin5, baydin6],
  techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
  whatILearned: [
    "Built a dynamic web application using PHP and MySQL",
    "Learned CRUD operations and database management",
    "Understood how frontend and backend communicate",
    "Improved skills in handling and organizing data",
    "Practiced writing clean and structured code",
    "Designed a simple and user-friendly interface"
  ],
  status: "Prototype",
  sourceCodeUrl: "https://github.com/zarni/task-tracker",
}
  ],
};

export const usePortfolioStore = create(() => portfolio);
