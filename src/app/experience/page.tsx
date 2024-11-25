"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experience = [
  {
    company: "Cankaya University",
    location: "Ankara, Turkey",
    position: "Undergraduate Teaching Assistant",
    period: "Nov 2024 - Present",
    description: [
      {
        id: "cankaya-1",
        text: "Assisting in SENG271 (Software Project I) and SENG101 (Computer Programming I) courses.",
      },
      {
        id: "cankaya-2",
        text: "Supporting students with programming concepts, reviewing assignments, and providing guidance in software development projects.",
      },
    ],
  },
  {
    company: "Tourist: Travel the World",
    location: "Remote",
    position: "Web Development Intern",
    period: "July 2024 - Nov 2024",
    description: [
      {
        id: "tourist-1",
        text: "Collaborated with the development team to design and implement new features for the company's AI-powered travel planning platform.",
      },
      {
        id: "tourist-2",
        text: "Worked with web development technologies and contributed to both frontend and backend development tasks.",
      },
      {
        id: "tourist-3",
        text: "Implemented CI/CD pipelines, managed containerized deployments, and optimized development workflows.",
      },
    ],
  },
  {
    company: "Google Game and Application Academy",
    location: "Istanbul, Turkey",
    position: "Trainee",
    period: "Nov 2023 - July 2024",
    description: [
      {
        id: "google-1",
        text: "Participated in a rigorous training program focused on game and application development using industry-standard tools and practices.",
      },
      {
        id: "google-2",
        text: "Collaborated on team projects, enhancing skills in software design, coding, and project management in a professional setting.",
      },
      {
        id: "google-3",
        text: "Engaged in hands-on learning and developed proficiency in modern development environments.",
      },
    ],
  },
  {
    company: "G.Round",
    location: "Los Angeles, CA (Remote)",
    position: "QA Tester",
    period: "May 2023 - May 2024",
    description: [
      {
        id: "ground-1",
        text: "Performed comprehensive testing of pre-release games to identify bugs, performance issues, and potential improvements.",
      },
      {
        id: "ground-2",
        text: "Provided detailed feedback and reports to developers, enhancing the overall quality and user experience of gaming products.",
      },
      {
        id: "ground-3",
        text: "Developed expertise in QA methodologies, tools, and processes while working within a dynamic international team.",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function ExperiencePage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Experience</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          My professional journey and work experience.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company + exp.position}
            variants={item}
            className="relative pl-8 pb-8 last:pb-0"
          >
            {index !== experience.length - 1 && (
              <div className="absolute left-[11px] top-8 h-full w-[2px] bg-gray-200 dark:bg-gray-800" />
            )}
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-primary bg-background" />
            
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  {exp.company}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <p className="font-medium">{exp.position}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item) => (
                      <li key={item.id} className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 