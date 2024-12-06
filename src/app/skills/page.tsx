"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Laptop, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = {
  programmingLanguages: {
    icon: <Code2 className="h-5 w-5" />,
    title: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "PHP", "C", "Go", "SQL", "C#", "Julia"],
  },
  technologies: {
    icon: <Terminal className="h-5 w-5" />,
    title: "Technologies",
    items: ["Next.js", "Node.js", "React.js", "Express", "EJS", "MongoDB", "MySQL", "Git", "Postman", "Redis"],
  },
  tools: {
    icon: <Laptop className="h-5 w-5" />,
    title: "Tools",
    items: ["Cursor", "Ollama", "Visual Studio Code", "Adobe Photoshop", "Figma", "Adobe Premiere", "Vegas Pro"],
  },
  languages: {
    icon: <Globe className="h-5 w-5" />,
    title: "Languages",
    items: ["Turkish (Native)", "English (Fluent)", "German (Beginner)"],
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const iconAnimation = {
  hidden: { rotate: -180, opacity: 0 },
  show: { 
    rotate: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

export default function SkillsPage() {
  return (
    <div className="container py-12">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <motion.h1 
          className="text-4xl font-bold tracking-tighter sm:text-5xl"
        >
          Skills & Expertise
        </motion.h1>
        <motion.p 
          className="mt-4 text-muted-foreground max-w-[700px]"
        >
          A comprehensive overview of my technical skills and proficiencies.
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {Object.entries(skills).map(([key, category], index) => (
          <motion.div 
            key={key} 
            variants={item}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div
                    variants={iconAnimation}
                    className="text-primary"
                  >
                    {category.icon}
                  </motion.div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={skillItem}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 
                               transition-colors cursor-default text-sm"
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 