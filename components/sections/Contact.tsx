"use client";

import { useState } from "react";
// Import Variants from framer-motion
import { motion, Variants } from "framer-motion"; 
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

/**
 * @purpose The Contact section of the portfolio.
 * @description Provides contact information and a functional form for users to send messages.
 * The form state is handled locally, and submission is currently logged to the console.
 * @returns A JSX element representing the Contact section.
 */
export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessaFge] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    console.log({
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    setTimeout(() => {
      setStatus("Message sent successfully! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  // Explicitly type the variants object with the Variants type
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/70 md:text-xl">
            Have a question, a project proposal, or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column: Contact Info */}
          <motion.div className="flex flex-col gap-6" variants={sectionVariants}>
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-foreground/80">
              You can reach me via email or connect with me on social media.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:suneelgiree@example.com"
                className="group flex items-center gap-3 text-lg"
              >
                <Mail className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-foreground/90 transition-colors group-hover:text-primary">
                  suneelgiree@example.com
                </span>
              </a>
              <Link
                href="https://linkedin.com/in/suneelgiree"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-lg"
              >
                <Linkedin className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-foreground/90 transition-colors group-hover:text-primary">
                  suneelgiree
                </span>
              </Link>
              <Link
                href="https://github.com/suneelgiree"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-lg"
              >
                <Github className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-foreground/90 transition-colors group-hover:text-primary">
                  suneelgiree
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={sectionVariants}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="h-12 rounded-md border border-input bg-transparent px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="h-12 rounded-md border border-input bg-transparent px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
                rows={5}
                className="min-h-[80px] rounded-md border border-input bg-transparent px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:w-auto md:self-end"
                disabled={status.startsWith("Submitting")}
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
            {status && (
              <p className="mt-4 text-center text-sm text-foreground/80">{status}</p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}