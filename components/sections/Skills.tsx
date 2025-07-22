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
          <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white" variants={itemVariants}>
            My Technical Skills
          </motion.h2>
          <motion.p className="mx-auto mt-4 max-w-[700px] text-lg text-gray-700 dark:text-gray-300 md:text-xl" variants={itemVariants}>
            I focus on modern technologies to build robust and scalable web applications. Here&apos;s a look at my tech stack.
          </motion.p>
        </div>
        <motion.div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" variants={sectionVariants}>
          {skillCategories.map((category) => (
            <motion.div key={category.title} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-md" variants={itemVariants}>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100"
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