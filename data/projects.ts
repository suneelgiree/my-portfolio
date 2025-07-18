// Define the type for a single project
export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string; // Link to the live project
  githubUrl: string; // Link to the GitHub repository
};

// Array of project data with placeholder images
export const projects: Project[] = [
  {
    title: "AIR-QUALITY-MEASUREMENT ",
    description:
      "A comprehensive IoT-based Air Quality Monitoring System that combines real-time sensor data (PM2.5, PM10) with weather APIs and machine learning for accurate AQI calculation and forecasting. Built with Django REST backend, React frontend, and EPA-standard AQI algorithms. ",
    tags: ["React.js","Tailwind CSS, Django REST", "Machine Learning", "IoT"],
    // Updated URL
    imageUrl: "https://placehold.co/1280x720/1a1a1a/ffffff?text=E-commerce",
    githubUrl: "https://github.com/suneelgiree/AIR-QUALITY-MEASUREMENT",
  },
  {
    title: "Cricksy---Cricksal-booking-system",
    description:
      "A full-stack cricket ground booking system with real-time slot management, user/admin dashboards, and integrated payments. Built for teams, players, and ground owners.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    // Updated URL
    imageUrl: "https://placehold.co/1280x720/4a4a4a/ffffff?text=Task+Manager",
    githubUrl: "https://github.com/suneelgiree/Cricksy---Cricksal-booking-system",
  },
  {
    title: "iNotebook",
    description:
      "iNotebook: A secure, cloud-based note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js). Features include user authentication, real-time CRUD operations for notes, rich text editing, note categorization with tags, and responsive design for all devices.",
    tags: ["MERN Stack", "Authentication", "CRUD Operations", "Responsive Design"],
    // Updated URL
    imageUrl: "https://placehold.co/1280x720/7a7a7a/ffffff?text=Portfolio",
    githubUrl: "https://github.com/suneelgiree/iNotebook",
  },
  {
    title: "NEWSapp",
    description:
      "A feature-rich news aggregation application built with React using class-based component architecture. NewsWave fetches real-time news from multiple sources via News API, demonstrating solid OOP principles and React's class component lifecycle methods. ",
    tags: ["React", "News API", "Class Components", "OOP Principles"],
    // Updated URL
    imageUrl: "https://placehold.co/1280x720/1a1a1a/ffffff?text=E-commerce",
    githubUrl: "https://github.com/suneelgiree/NEWSapp",
  },
];