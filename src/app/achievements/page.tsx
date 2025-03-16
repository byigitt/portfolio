"use client";

import { motion } from "framer-motion";
import { Users, Star, Trophy, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    category: "Competition Achievements",
    icon: <Trophy className="h-5 w-5" />,
    items: [
      {
        title: "1st place @ HACKMETU Hackathon",
        description: "Participated in the HACKMETU with our project named \"RoundCall\" and won the 1st place with a team of 2 people.",
        year: "2024"
      },
      {
        title: "1st place @ Ostim Solana Hackathon",
        description: "Participated in the Ostim Solana Hackathon with our project named \"Soulana\" and won the 1st place with a team of 3 people.",
        year: "2024"
      },
      {
        title: "1st place @ Cankaya University 2nd Planathon",
        description: "Participated in the Cankaya University 2nd Planathon with detailed usage of AI and won the 1st place with a team of 5 people.",
        year: "2024"
      },
      {
        title: "2nd place @ Ostim AI Competition",
        description: "Participated in the Ostim AI Competition with our project named \"smartmove\" and won the 2nd place with a team of 2 people.",
        year: "2024"
      },
      {
        title: "2nd place @ LiftZone Hackcube Competition",
        description: "Participated in the LiftZone Hackcube Competition with our project named \"crai\" and won the 2nd place with a team of 2 people.",
        year: "2024"
      },
      {
        title: "Outstanding Delegate Award @ MUN",
        description: "Participated in the G-20 committee at the MUN event organized by Yusuf Kalkavan Anatolian High School and received the Outstanding Delegate Award.",
        year: "2022"
      },
    ],
  },
  {
    category: "Community Leadership",
    icon: <Users className="h-5 w-5" />,
    items: [
      {
        title: "GDG on Campus - Çankaya University",
        description: "Served as a Hackathon & Software Team Member (Sept 2024 - Feb 2025). Previously served as a Shell Team Member (Dec 2022 - June 2024).",
        year: "2022-2025"
      },
      {
        title: "Community Management",
        description: "Volunteering as a community manager on a large Discord server with over 145,000 members.",
        year: "2022-Present"
      },
    ],
  },
  {
    category: "Academic Achievements",
    icon: <Star className="h-5 w-5" />,
    items: [
      {
        title: "Working as Undergraduate Assistant",
        description: "Worked with my teachers to teach/assist them in their courses.",
        year: "2024-Present"
      },
      {
        title: "Former Contributor of @bilimial",
        description: "@bilimial is a community/page that supports and promotes science and technology in Turkey from my highschool.",
        year: "2020-2021"
      },
      {
        title: "Tubitak Science Fair 4006",
        description: "Worked as a project demonstrator and general assistant at the TUBITAK fair.",
        year: "2017"
      },
    ],
  },
];

// Flatten all achievements into a single timeline
const timelineItems = achievements.flatMap(category => 
  category.items.map(item => ({
    ...item,
    category: category.category,
    icon: category.icon
  }))
);

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
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function AchievementsPage() {
  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-8 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Achievements
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-[700px]">
          My contributions and notable accomplishments
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-1"
      >
        {timelineItems.map((achievement) => (
          <motion.div 
            key={achievement.title} 
            variants={item}
            className="relative pl-8 py-4 border-l border-gray-200 dark:border-gray-800"
          >
            <div className="absolute left-0 top-5 -translate-x-1/2 p-1 bg-white dark:bg-gray-950 rounded-full border border-gray-200 dark:border-gray-800">
              {achievement.icon}
            </div>
            
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-base">{achievement.title}</h3>
              <Badge variant="outline" className="ml-auto flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{achievement.year}</span>
              </Badge>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {achievement.description}
            </p>
            
            <Badge variant="secondary" className="mt-2">
              {achievement.category}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 