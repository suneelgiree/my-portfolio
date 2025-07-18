"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * @purpose This component wraps the application with the next-themes provider.
 * @description It's a client component that allows the theme to be changed dynamically on the client side.
 * By creating this wrapper, we can keep our root layout (`app/layout.tsx`) as a Server Component.
 * @param {ThemeProviderProps} children - The child components to be rendered within the provider.
 * @returns The application wrapped with the theme provider.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}