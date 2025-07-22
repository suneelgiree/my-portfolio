"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

/**
 * @purpose Renders a single project card with details and links.
 * @description This component displays project information and uses framer-motion
 * for a hover effect. It's designed to be used within the Projects section.
 * @param {ProjectCardProps} project - The project data to display.
 * @returns A JSX element representing a project card.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, imageUrl, liveUrl, githubUrl } = project;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex h-full flex-col overflow-hidden rounded-lg border border-border/60 dark:border-gray-700 bg-card dark:bg-gray-900 shadow-lg"

    >
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-card-foreground dark:text-white">{title}</h3>
        <p className="mt-2 flex-grow text-card-foreground/70 dark:text-gray-400">{description}</p>


        {/* Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary dark:bg-gray-700 px-3 py-1 text-xs font-medium text-secondary-foreground dark:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}