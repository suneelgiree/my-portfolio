"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.section className="py-20 md:py-32" variants={containerVariants} initial="hidden" animate="visible">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div className="flex flex-col items-start gap-6" variants={itemVariants}>
          <motion.h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-blue-700 dark:text-blue-400" variants={itemVariants}>
            Hi, I&apos;m Suneel Giri
            <span className="block text-blue-600 dark:text-blue-300">A Senior Web Developer</span>
          </motion.h1>
          <motion.p className="max-w-[600px] text-lg text-blue-700 dark:text-blue-300 md:text-xl" variants={itemVariants}>
            I specialize in building exceptional, high-performance websites and applications using modern frontend technologies like React, Next.js, and TypeScript—combining frontend precision with backend power to ship real-world products that actually solve problems.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 dark:bg-blue-500 px-8 text-sm font-medium text-white dark:text-gray-900 shadow transition-colors hover:bg-blue-700 dark:hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-blue-300 dark:border-blue-700 bg-white dark:bg-blue-900 px-8 text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm transition-colors hover:bg-blue-100 dark:hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="relative mx-auto h-[300px] w-[300px] md:h-[400px] md:w-[400px]" variants={imageVariants}>
          <Image
            src="/images/profile-picture.png"
            alt="Suneel Giri"
            fill
            priority
            className="rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}