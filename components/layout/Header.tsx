import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

/**
 * @purpose The main header and navigation bar for the website.
 * @description Contains the site logo/name, navigation links, and the theme toggle.
 * It's designed to be responsive and uses Next.js's Link component for optimized navigation.
 * @returns A header element with navigation.
 */
export function Header() {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Site Logo/Name */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-foreground/80"
        >
          Suneel Giri
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-foreground/60 transition-colors hover:text-foreground/80"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-md p-2 text-sm font-medium md:hidden">
            {/* we can use an icon here, e.g., from lucide-react */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}