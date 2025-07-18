"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react"; // A popular icon library

/**
 * @purpose Renders a button to toggle between light and dark themes.
 * @description This is a client component that uses the `useTheme` hook from `next-themes`
 * to get and set the current theme. It displays a sun or moon icon based on the active theme.
 * @library `lucide-react` - for clean and simple icons. You can install it with `npm install lucide-react`.
 * @returns A button element for theme toggling.
 */
export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {/* Sun Icon: Visible in dark mode to switch to light mode */}
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      {/* Moon Icon: Visible in light mode to switch to dark mode */}
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}