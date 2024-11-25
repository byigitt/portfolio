"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

// Get unique tags from all projects
const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"stars" | "recent">("stars");

  const filteredProjects = projects
    .filter((project) =>
      selectedTags.length === 0
        ? true
        : project.tags.some((tag) => selectedTags.includes(tag))
    )
    .sort((a, b) => {
      if (sortBy === "stars") {
        return (b.stars || 0) - (a.stars || 0);
      }
      return 0; // Keep original order for "recent"
    });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          A collection of my open-source projects and personal works.
        </p>
      </motion.div>

      <div className="mb-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant={sortBy === "stars" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("stars")}
              className="rounded-full"
            >
              <Star className="mr-2 h-4 w-4" />
              Stars
            </Button>
            <Button
              variant={sortBy === "recent" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("recent")}
              className="rounded-full"
            >
              Recent
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span className="text-lg">{project.title}</span>
                  {project.stars && (
                    <span className="flex items-center text-sm text-yellow-500">
                      <Star className="mr-1 h-4 w-4 fill-yellow-500" />
                      {project.stars}
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </Link>
                )}
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Visit
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 