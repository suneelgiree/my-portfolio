"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * @purpose The Hero section for the homepage with entry animations.
 * @description This component uses framer-motion to animate its elements on load.
 * The main container staggers the animation of its children.
 * @component
 * - `motion.div`: A div with animation capabilities.
 * @returns A JSX element representing the animated Hero section.
 */
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.section
      className="py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-start gap-6"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            <span className="block text-foreground/80">Hi, I&apos;m Suneel Giri</span>
            A Senior Web Developer
          </motion.h1>
          <motion.p
            className="max-w-[600px] text-lg text-foreground/70 md:text-xl"
            variants={itemVariants}
          >
            I specialize in building exceptional, high-performance websites and applications
            using modern frontend technologies like React, Next.js, and TypeScript— combining
            frontend precision with backend power to ship real-world products that actually solve problems.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <Link
              href="#projects" // Corrected: Changed from "/projects" to "#projects"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View My Work
            </Link>
            <Link
              href="#contact" // Corrected: Changed from "/contact" to "#contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="relative mx-auto h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
          variants={imageVariants}
        >
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