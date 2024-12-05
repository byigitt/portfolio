"use client";

import { motion } from "framer-motion";
import { Award, Users, Star, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievements = [
  {
    category: "Community Leadership",
    icon: <Users className="h-5 w-5 text-primary" />,
    items: [
      {
        title: "GDG on Campus",
        description: "Currently serving as a Hackathon & Software Team Member (Sept 2024 - Present). Previously served as a Shell Team Member (Dec 2022 - June 2024).",
      },
      {
        title: "Discord Community Management",
        description: "Volunteered as a community manager on a large Discord server with over 145,000 members.",
      },
    ],
  },
  {
    category: "Academic Achievements",
    icon: <Trophy className="h-5 w-5 text-primary" />,
    items: [
      {
        title: "Model United Nations",
        description: "Participated in the G-20 committee at the MUN event organized by Yusuf Kalkavan Anatolian High School and received the Outstanding Delegate Award.",
      },
      {
        title: "1st place @ Ostim Solana Hackathon",
        description: "Participated in the Ostim Solana Hackathon with our project named Soulana and won the 1st place with a team of 3 people.",
      },
    ],
  },
  {
    category: "Volunteer Work",
    icon: <Star className="h-5 w-5 text-primary" />,
    items: [
      {
        title: "Tubitak Science Fair 4006",
        description: "Worked as a project demonstrator and general assistant at the TUBITAK fair.",
      },
      {
        title: "Former Contributor of BilimIAL",
        description: "BilimIAL is a community/page that supports and promotes science and technology in Turkey from my highschool.",
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AchievementsPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Volunteer & Achievements
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          My contributions to the community and notable achievements.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {achievements.map((category) => (
          <motion.div key={category.category} variants={item}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.items.map((achievement) => (
                  <div key={achievement.title} className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 