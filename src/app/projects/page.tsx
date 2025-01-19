"use client";

import { useState, useEffect } from "react";
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

// Language colors mapping
const languageColors: Record<string, { bg: string; text: string }> = {
  TypeScript: { bg: "bg-blue-100 dark:bg-blue-900", text: "text-blue-800 dark:text-blue-100" },
  JavaScript: { bg: "bg-yellow-100 dark:bg-yellow-900", text: "text-yellow-800 dark:text-yellow-100" },
  Python: { bg: "bg-green-100 dark:bg-green-900", text: "text-green-800 dark:text-green-100" },
  HTML: { bg: "bg-orange-100 dark:bg-orange-900", text: "text-orange-800 dark:text-orange-100" },
  CSS: { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-800 dark:text-purple-100" },
  Ruby: { bg: "bg-red-100 dark:bg-red-900", text: "text-red-800 dark:text-red-100" },
  Go: { bg: "bg-cyan-100 dark:bg-cyan-900", text: "text-cyan-800 dark:text-cyan-100" },
  Rust: { bg: "bg-orange-100 dark:bg-orange-900", text: "text-orange-800 dark:text-orange-100" },
  Java: { bg: "bg-red-100 dark:bg-red-900", text: "text-red-800 dark:text-red-100" },
  PHP: { bg: "bg-indigo-100 dark:bg-indigo-900", text: "text-indigo-800 dark:text-indigo-100" },
  Swift: { bg: "bg-orange-100 dark:bg-orange-900", text: "text-orange-800 dark:text-orange-100" },
  Kotlin: { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-800 dark:text-purple-100" },
};

const getLanguageColors = (language: string | null) => {
  if (!language) return { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-800 dark:text-gray-100" };
  
  const colors = languageColors[language];
  return colors || { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-800 dark:text-gray-100" };
};

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

interface GitHubRepo {
  fullName: string;
  stars: number;
  description: string | null;
  language: string | null;
  url: string;
}

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"stars" | "recent">("stars");
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('/api/github-stars');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        console.log(data);
        setGithubRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  const getGitHubData = (project: typeof projects[0]) => {
    if (!project.repo) return null;
    const fullName = `${project.repo.owner}/${project.repo.name}`;
    return githubRepos.find(repo => repo.fullName === fullName);
  };

  const filteredProjects = projects
    .filter((project) =>
      selectedTags.length === 0
        ? true
        : project.tags.some((tag) => selectedTags.includes(tag))
    )
    .sort((a, b) => {
      if (sortBy === "stars") {
        const aStars = getGitHubData(a)?.stars || 0;
        const bStars = getGitHubData(b)?.stars || 0;
        return bStars - aStars;
      }
      // Add recent sorting logic here if needed
      return 0;
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
              disabled={true} // Disable recent sorting for now
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
        {filteredProjects.map((project) => {
          const githubData = getGitHubData(project);
          return (
            <motion.div key={project.title} variants={item}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span className="text-lg">{project.title}</span>
                    {githubData && (
                      <span className="flex items-center text-sm text-yellow-500">
                        <Star className="mr-1 h-4 w-4 fill-yellow-500" />
                        {githubData.stars}
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
                    {githubData?.language && (
                      <span
                        key={githubData.language}
                        className={`px-2 py-1 text-xs rounded-full ${
                          getLanguageColors(githubData.language).bg
                        } ${getLanguageColors(githubData.language).text}`}
                      >
                        {githubData.language}
                      </span>
                    )}
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
          );
        })}
      </motion.div>
    </div>
  );
} 