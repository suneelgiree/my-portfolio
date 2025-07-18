import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

/**
 * @purpose The global footer for the website.
 * @description Displays copyright information with a dynamic year and social media links.
 * It's designed to be used in the main layout file.
 * @returns A JSX element representing the footer.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-foreground/60">
          © {currentYear} Suneel Giri. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/suneelgiree"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sunil-giri-b106b8259/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}