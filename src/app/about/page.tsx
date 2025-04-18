"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Coffee, Rocket, ExternalLink, Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aboutSections = [
  {
    title: "Hello World!",
    icon: <Heart className="h-5 w-5 text-primary" />,
    content: "I'm Barış, a 21 years old junior software engineering student who turned a passion for gaming servers into a love for web development. When I'm not coding, you'll find me exploring new tech, contributing to open-source, or probably debugging with an energy drink in hand.",
  },
  {
    title: "What I Do",
    icon: <Rocket className="h-5 w-5 text-primary" />,
    content: "I build modern web applications with a focus on user experience and performance. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  },
];

const portfolioProjects = [
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.",
    image: "https://bayburt.lu/portfolio/portfolio.png",
    liveUrl: "https://portfolio.bayburt.lu",
    githubUrl: "https://github.com/byigitt/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    title: "Soulana",
    description: "Soulana is a web application that allows users to donate secure, fast and transparently using blockchain technology. Ostim Solana Hackathon, 1st place.",
    image: "https://bayburt.lu/portfolio/soulana.png",
    liveUrl: "https://cyberia-frontend.vercel.app",
    githubUrl: "https://github.com/wearesoulana/soulana-frontend",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    title: "imatil",
    description: "imatil is a modern, browser-based file conversion tool built with Next.js 15 that enables users to convert media files directly in their browser using WebAssembly technology.",
    image: "https://bayburt.lu/portfolio/imatil.png",
    liveUrl: "https://i.bayburt.lu",
    githubUrl: "https://github.com/byigitt/imatil",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebAssembly", "Shadcn/UI", "FFMPEG"]
  },
  {
    title: "cankaya.chat",
    description: "cankaya.chat is a modern, browser-based chat application built with Next.js 15 that enables users to chat with each other anonymously using WebSocket technology.",
    image: "https://bayburt.lu/portfolio/cankayachat.png",
    liveUrl: "https://cankaya.chat",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSocket", "PWA"]
  },
  {
    title: "smartmove",
    description: "smartmove is an AI-powered passenger analysis system for the Ankara Metro network that combines real-time passenger counting using YOLOv8 object detection and predictive analytics to forecast crowd density. Ostim AI Competition, 2nd place.",
    image: "https://bayburt.lu/portfolio/smartmove.png",
    githubUrl: "https://github.com/byigitt/smartmove",
    tags: ["Python", "Numpy", "Pandas", "Scikit-learn", "Seaborn", "YOLOv8", "Shadcn/UI"]
  },
  {
    title: "Flashy",
    description: "Flashy is a modern, intuitive flashcard application built with Next.js 15 that helps users study effectively through digital flashcards. Features include group organization, study mode with shuffle functionality, and smooth animations.",
    image: "https://bayburt.lu/portfolio/flashy.png", 
    liveUrl: "https://flashy-byigitt.vercel.app/",
    githubUrl: "https://github.com/byigitt/flashy",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"]
  },
  {
    title: "Suncore",
    description: "Suncore is an innovative open-source audio transformation platform inspired by nightcore.studio, designed to help users create nightcore versions of their favorite music. Features include real-time playback speed adjustment, reverb control, bass boost, and SoundCloud API integration.",
    image: "https://bayburt.lu/portfolio/suncore.png",
    liveUrl: "https://suncore.vercel.app",
    githubUrl: "https://github.com/byigitt/suncore",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Tone.js"]
  },
  {
    title: "Tourist AI Planner",
    description: "Tourist AI Planner is a web application that helps users plan their trips by providing personalized recommendations for destinations, activities, and accommodations. Did my internship here. ",
    image: "https://bayburt.lu/portfolio/tourist.png",
    liveUrl: "https://touristapplication.com",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "StarSalesInv",
    description: "Star Sales & Investment is committed to delivering high-quality products at competitive prices to businesses of all sizes.",
    image: "https://bayburt.lu/portfolio/starsales.png",
    liveUrl: "https://starsalesinv.com",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Wholesale Template",
    description: "Wholesale Template is a website template for wholesale businesses.",
    image: "https://bayburt.lu/portfolio/template.png",
    liveUrl: "https://bayburt.lu/template1",
    tags: ["HTML", "CSS", "JavaScript"],
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Caffeine-fueled coder turning ideas into reality
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {aboutSections.map((section) => (
          <motion.div key={section.title} variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Portfolio
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <Link 
                  href={project.liveUrl || project.githubUrl || ""} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video group cursor-pointer overflow-hidden"
                >
                  <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
                      <LinkIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-muted font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Coffee className="h-5 w-5" />
          <p>Powered by Monster Energy and curiosity</p>
        </div>
      </motion.div>
    </div>
  );
} 