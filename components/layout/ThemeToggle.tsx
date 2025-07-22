"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    console.log("Current theme:", theme)
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
