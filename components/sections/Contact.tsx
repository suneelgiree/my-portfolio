"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion"; 
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus("Message sent successfully! I'll get back to you soon.");
      setName(""); setEmail(""); setMessage("");
    }, 1000);
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" }},
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-gray-700 dark:text-gray-300 md:text-xl">
            Have a question, a project proposal, or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left
