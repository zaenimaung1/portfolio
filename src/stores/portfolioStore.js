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
import pivotImage from "../assets/images/Pivot.png";
import pivotAdmin from "../assets/images/pivot-admin.png";
import pivotApp from "../assets/images/pivot-app.png";
import pivotBot from "../assets/images/pivot-bot.png";
import pivotWeb from "../assets/images/pivot-web.png";
import baydinImage from "../assets/images/baydin.png";
import baydin2 from "../assets/images/baydin2.png";
import baydin3 from "../assets/images/baydin3.png";
import baydin4 from "../assets/images/baydin4.png";
import baydin5 from "../assets/images/baydin5.png";
import baydin6 from "../assets/images/baydin6.png";
import proverbTutorCover from "../assets/images/Mm-Proverb-1.png";
import proverbTutor1 from "../assets/images/Mm-Proverb-2.png";
import proverbTutor2 from "../assets/images/Mm-Proverb-3.png";
import proverbTutor3 from "../assets/images/Mm-Proverb-4.png";

const portfolio = {
  person: {
    name: "Zarni Maung",
   title: "Junior Full Stack Web Developer",
    location: "Myeik, Myanmar",
    photo: profilePhoto,
    email: "zarnizn5048@gmail.com",
    phone: "+95 9 791 579 929",
   intro:
  "I am a passionate junior full stack web developer with a strong foundation in both frontend and backend technologies. I have experience working on various projects, including a full-stack invoice application and an AI chatbot system. I am eager to continue learning and growing my skills in web development, and I am excited to contribute to innovative projects that make a real-world impact.",

highlights: [
  "Full Stack Learning",
  "Web Applications",
  "Clean and Responsive Design",
  "Application Performance",
],
  },
  skills: {
    frontend: ["React", "JavaScript", "Tailwind CSS", "Bootstrap","Dart","Flutter"],
    backend: ["Node.js", "Express.js", "PHP","Typescript"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "Vite", "npm","GitHub"],
  },
  socials: [
    {
      label: "GitHub",
      value: "https://github.com/zaenimaung1",
      url: "https://github.com/zaenimaung1",
      icon: "github",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/zar-ni-7908b4312/",
      url: "https://www.linkedin.com/in/zar-ni-7908b4312/",
      icon: "linkedin",
    },
    {
      label: "Facebook",
      value: "https://www.facebook.com/",
      url: "https://www.facebook.com/",
      icon: "facebook",
      
    },
  ],
  projects: [
    {
      id: 1,
      title: "Invoice_App Dashboard",
      image: dashboardImage,
      description:
        "Full-stack invoice app with React and Node.js for managing and tracking invoices...",
      detailDescription:
         "The Invoice App is a full-stack web application designed to manage invoices efficiently. Users can create, edit, and organize invoices through a clean and responsive dashboard interface.\n\nThe frontend is built with React and Tailwind CSS, while the backend uses Node.js and Express to handle API requests. MongoDB is used for storing invoice data, ensuring fast and reliable data management.\n\nThe application focuses on usability, performance, and real-world functionality, making it suitable for small business or personal use.",
      detailImages: [dashboardImage, dashboardImage2, dashboardImage3, dashboardImage4, dashboardImage5, dashboardImage6, dashboardImage7, dashboardImage8,dashboardImage9],
        techStack: ["Tailwind CSS", "React.JS", "Express.JS", "MongoDB", "Node.Js","FlowBite UI","JsonServer"],
       whatILearned: [
    "Built a full-stack application using Node.js, Express, and MongoDB",
    "Learned how to design and build RESTful APIs",
    "Gained experience working with MongoDB for data storage",
    "Implemented CRUD operations for managing invoices",
    "Integrated frontend and backend for real-time data handling",
    "Learned how to generate and print invoices"
  ],
  highlights: [
    "Full invoice management system (create, edit, delete)",
    "Responsive and clean dashboard UI",
    "Print/download invoice feature",
    "Efficient data handling with MongoDB",
    "Real-world business use case"
  ],
  status: "Completed",
  sourceCodeUrl: "https://github.com/zaenimaung1/vite_invoice_app"
    },
    {
      id: 2,
      title: "Pivot",
      image: pivotImage,
      description:
        "An AI-powered chatbot for Myanmar SMEs and startups, featuring Telegram bot integration and smart document-based responses.",
      detailDescription:
          "Pivot is an AI chatbot system designed to provide cyber law and regulation guidance for Myanmar SMEs and startups. The system supports multiple input types, including text, file uploads, and voice.\n\nMy main role in this project was developing the Telegram bot integration using Python. I worked on handling user messages, connecting the bot with the backend API, and ensuring smooth communication between users and the system.\n\nThis project was built as a team collaboration, where I also gained experience working with Git for version control and team contributions.",
      detailImages: [pivotImage, pivotAdmin, pivotApp, pivotBot, pivotWeb],
      techStack: ["Python", "FastApi", "Langchain", "Telegram", "Next.Js","Docker","Expo","Gemini"],
       whatILearned: [
     "Developed a Telegram bot using Python",
    "Learned how to integrate APIs with a chatbot system",
    "Improved understanding of backend communication and data flow",
    "Gained experience working with AI tools like LangChain",
    "Practiced teamwork and collaboration using Git and GitHub"
  ],
      highlights: [
    "Telegram bot integration for real-time interaction",
    "Supports text, file, and voice inputs",
    "AI-powered responses using document-based retrieval",
    "Top 10 project achievement",
    "Team-based project with real-world application"
  ],
  role: "Telegram Bot Developer",
  achievement: "Top 10 Project",
  status: "Completed",
  sourceCodeUrl: "https://github.com/zaenimaung1/RAG_Telegram_Frontend_Bot",
    },
   {
  id: 3,
  title: "Myanmar AI Proverb Tutor",
  image: proverbTutorCover,
  description:
    "An AI-powered RAG application that helps users understand Myanmar proverbs through natural conversations, semantic search, and contextual explanations.",

  detailDescription:
    "Myanmar AI Proverb Tutor is a Retrieval-Augmented Generation (RAG) application built to preserve and make Myanmar proverbs more accessible through artificial intelligence. Users can ask questions in natural Burmese, search for proverbs by meaning, and receive accurate explanations retrieved from a curated proverb knowledge base.\n\nThe system uses LangChain for retrieval orchestration, ChromaDB for vector search, and a locally hosted Qwen model through Ollama for fast and private inference. It also includes a DOCX ingestion pipeline with automatic metadata generation, enabling administrators to expand the knowledge base without manually editing data.\n\nThis project demonstrates my experience in building production-ready AI applications, including RAG pipelines, vector databases, prompt engineering, FastAPI backend development, asynchronous processing, and modern React frontend development.",

  detailImages: [
    proverbTutor1,
    proverbTutor2,
    proverbTutor3,
  ],

  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "LangChain",
    "ChromaDB",
    "Ollama",
    "Qwen",
    "Python"
  ],

  whatILearned: [
    "Built a complete Retrieval-Augmented Generation (RAG) pipeline.",
    "Implemented semantic search using vector embeddings.",
    "Integrated a local Large Language Model with Ollama.",
    "Designed an efficient document ingestion and metadata generation workflow.",
    "Optimized AI response quality through prompt engineering.",
    "Developed scalable REST APIs using FastAPI."
  ],

  highlights: [
    "AI-powered Myanmar proverb explanations",
    "Semantic search with vector database",
    "Supports natural Burmese conversations",
    "Local LLM integration (Qwen + Ollama)",
    "Automatic DOCX dataset import",
    "Metadata generation pipeline",
    "Modern responsive UI",
    "Production-ready RAG architecture"
  ],

  status: "In Progress",

  sourceCodeUrl: "https://github.com/zaenimaung1/Myanmar-Proverbs-RAG"
},
 {
  id: 4,
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
   highlights: [
    "Dynamic question-and-answer system",
    "Clean and simple user interface",
    "Efficient data handling with MySQL",
    "Real-world application of PHP and database management",
    "Utilized external data sources for content"
  ],
  status: "Completed",
  sourceCodeUrl: "https://github.com/zaenimaung1/BayDin",
},

  ],
  services :[{
 label: "Web Development",
  description : "Building responsive and modern websites using React, Node.js, Express, and modern web technologies."
  },
  {
    label: "Mobile Development",
    description : " mobile applications with Flutter and Dart for cross-platform compatibility."
  },
  {
    label: "Full Stack Development",
    description : "Developing complete web applications with both frontend and backend components for a full-stack solution."
  }
  ]
};

export const usePortfolioStore = create(() => portfolio);
