// Define the type for a single skill category
export type SkillCategory = {
  title: string;
  skills: string[];
};

// Array of skill categories and their skills
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "FASTAPIs",
      "Django",
      "Spring Boot",
      "Java",
      "Python",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "MongoDB",
    ],
  },
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "PHP",
      "SQL",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VSCode",
      "Overleaf",
      "Web APIs",
      "Google Assistant Integration"
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS Academy Graduate",
      "Docker (Containerization)",
      "GitHub Actions",
    ],
  },
  {
    title: "AI/ML",
    skills: [
      "AI/ML Basics",
      "TensorFlow/Keras",
      "CNN-LSTM",
      "NLP",
      "NumPy",
      "OpenCV",
    ],
  },
  {
    title: "Cybersecurity",
    skills: ["Fundamentals of Cybersecurity"],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Playwright"],
  },
];