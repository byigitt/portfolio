"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, KeyRound } from "lucide-react";
import { SpotifyNowPlaying } from "@/components/spotify-now-playing";

export function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 text-center mb-4"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent p-4">
          Barış Bayburtlu
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
      >
        <SpotifyNowPlaying />
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
        <Link href="https://open.spotify.com/user/31ulj7uprihbyxrxesfv7ucqtp6q" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span className="sr-only">Spotify</span>
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
        <Link href="https://bayburt.lu/docs/cv.pdf" target="_blank">
          <Button variant="ghost" size="icon" className="rounded-full">
            <FileText className="h-5 w-5" />
            <span className="sr-only">CV</span>
          </Button>
        </Link>
        <Link href="https://github.com/byigitt.gpg" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <KeyRound className="h-5 w-5" />
            <span className="sr-only">PGP Key</span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
