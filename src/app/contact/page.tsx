"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Contact Form
                <span className="text-sm font-normal text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-md">
                  Coming Soon
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  🚧 The contact form is currently under development. Please use the alternative contact methods provided on the right to reach out to me.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 opacity-60">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    disabled
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full" disabled>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Other Ways to Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link
                href="mailto:bbayburtlu@hotmail.com"
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>bbayburtlu@hotmail.com</span>
              </Link>
              <Link
                href="https://github.com/byigitt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/byigitt</span>
              </Link>
              <Link
                href="https://linkedin.com/in/bbayburtlu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/bbayburtlu</span>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                I typically respond within 24-48 hours. For urgent matters, please
                reach out via email directly.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 