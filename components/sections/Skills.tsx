"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section id="skills" className="py-20 md:py-32" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}>
      <div className="container mx-auto">
        <div className="text-center">
          <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-400" variants={itemVariants}>
            My Technical Skills
          </motion.h2>
          <motion.p className="mx-auto mt-4 max-w-[700px] text-lg text-blue-700 dark:text-blue-300 md:text-xl" variants={itemVariants}>
            I focus on modern technologies to build robust and scalable web applications. Here&apos;s a look at my tech stack.
          </motion.p>
        </div>
        <motion.div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" variants={sectionVariants}>
          {skillCategories.map((category) => (
            <motion.div key={category.title} className="rounded-xl border border-blue-200 dark:border-blue-700 bg-white dark:bg-blue-900 p-6 shadow-md" variants={itemVariants}>
              <h3 className="mb-4 text-xl font-semibold text-blue-700 dark:text-blue-300">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className="rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-800 dark:text-blue-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}