import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";

// Using Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO.
export const metadata: Metadata = {
  title: "Suneel Giri - Portfolio",
  description: "A portfolio built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto max-w-screen-2xl flex-grow px-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}