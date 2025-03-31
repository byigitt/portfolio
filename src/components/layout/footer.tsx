"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with{" "}
              <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Tailwind
              </Link>
              , and{" "}
              <Link
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                shadcn/ui
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/byigitt"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-background p-2 hover:bg-accent"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/bbayburtlu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-background p-2 hover:bg-accent"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:bbayburtlu@hotmail.com"
              className="rounded-2xl bg-background p-2 hover:bg-accent"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Barış Bayburtlu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 