import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-200 dark:border-blue-700 py-8 bg-white dark:bg-blue-900">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          © {currentYear} Suneel Giri. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/suneelgiree"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-blue-700 dark:text-blue-300 transition-colors hover:text-blue-800 dark:hover:text-blue-200"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sunil-giri-b106b8259/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-700 dark:text-blue-300 transition-colors hover:text-blue-800 dark:hover:text-blue-200"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}