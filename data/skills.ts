// Define the type for a single skill category
export type SkillCategory = {
  title: string;
  skills: string[]; // Skills are just an array of strings now
};

// Array of skill categories and their skills
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML5", "CSS3", "JavaScript", "TypeScript", "React",
      "Next.js", "Tailwind CSS", "Framer Motion", "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js", "Express.js", "PHP", "Django",
      "Spring Boot", "REST APIs",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Graduate", "Docker", "GitHub Actions", "Git", "GitHub"],
  },
  {
    title: "AI/ML",
    skills: [
      "AI/ML Basics", "TensorFlow", "Keras", "CNN-LSTM",
      "NLP", "NumPy", "OpenCV",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Postman", "VSCode", "Google Assistant"],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Playwright"],
  },
];