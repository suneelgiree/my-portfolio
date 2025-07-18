import Image from "next/image";
import Link from "next/link";

/**
 * @purpose The Hero section for the homepage.
 * @description This component displays a prominent headline, a brief introduction,
 * call-to-action buttons, and a profile image. It's designed to be the
 * first thing a user sees.
 * @component
 * - `next/image`: For optimized image loading.
 * - `next/link`: For client-side navigation.
 * @returns A JSX element representing the Hero section.
 */
export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-foreground/80">Hi, I'm Suneel Giri</span>
            A Senior Web Developer
          </h1>
          <p className="max-w-[600px] text-lg text-foreground/70 md:text-xl">
            I specialize in building exceptional, high-performance websites and applications
            using modern frontend technologies like React, Next.js, and TypeScript— combining
            frontend precision with backend power to ship real-worldproducts that actually solve problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative mx-auto h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
          <Image
            src="/images/profile-picture.png" 
            alt="Suneel Giri"
            fill
            priority // Preload this image as it's above the fold
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}