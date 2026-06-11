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
import pivotAdmin from "../assets/images/pivot-admin.webp";
import pivotApp from "../assets/images/pivot-app.webp";
import pivotBot from "../assets/images/pivot-bot.webp";
import pivotWeb from "../assets/images/pivot-web.webp";
import baydinImage from "../assets/images/baydin.png";
import baydin2 from "../assets/images/baydin2.png";
import baydin3 from "../assets/images/baydin3.png";
import baydin4 from "../assets/images/baydin4.png";
import baydin5 from "../assets/images/baydin5.png";
import baydin6 from "../assets/images/baydin6.png";
import softwareClubA from "../assets/images/sfa.png"
import softwareClub from "../assets/images/sf.png"
import softwareClub2 from "../assets/images/sf2.png"

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
  title: "PUMyeik Software",
  image: softwareClubA,
  description:
    "A software solution for PUMyeik, designed to support collaboration among all students who are passionate about software development",
  detailDescription:
    "PUMyeik Software is a project aimed at creating a software solution for PUMyeik, a university in Myanmar. The goal of this project is to provide a platform that supports collaboration among students who are passionate about software development.\n\nThe project is currently in progress, and I am working on developing the core features and functionalities of the application. The software will include tools for project management, communication, and resource sharing to facilitate collaboration among students.\n\nThis project is an opportunity for me to apply my skills in full-stack development while also contributing to a community-driven initiative that promotes learning and collaboration in the field of software development.",
  detailImages: [softwareClubA,softwareClub,softwareClub2],
  techStack: ["React", "Node.js", "Express", "MongoDB"],
   whatILearned: [],
   highlights: [],
  status: "In Progress",
  sourceCodeUrl: "https://github.com/zaenimaung1/Software_club_PUMyeik"
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
