"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, imageUrl, liveUrl, githubUrl } = project;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex h-full flex-col overflow-hidden rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-blue-900 shadow-lg"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{title}</h3>
        <p className="mt-2 flex-grow text-blue-700 dark:text-blue-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 dark:bg-blue-800 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300 transition-colors hover:text-blue-800 dark:hover:text-blue-200"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300 transition-colors hover:text-blue-800 dark:hover:text-blue-200"
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