"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent p-4">
          Barış Cem Bayburtlu
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl"
        >
          A dedicated software engineering student passionate about exploring new technologies 
          and developing innovative solutions.
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link href="/projects">
          <Button size="lg" className="group">
            View Projects
            <motion.span
              className="ml-2 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Get in Touch
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4 mt-8"
      >
        <Link href="https://github.com/byigitt" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/bbayburtlu" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="mailto:bbayburtlu@hotmail.com">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
        <Link href="/cv.pdf" target="_blank">
          <Button variant="ghost" size="icon" className="rounded-full">
            <FileText className="h-5 w-5" />
            <span className="sr-only">CV</span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
} 