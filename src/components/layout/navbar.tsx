"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Code2, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/skills",
    label: "Skills",
  },
  {
    href: "/education",
    label: "Education",
  },
  {
    href: "/experience",
    label: "Experience",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/achievements",
    label: "Achievements",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-45">
              <Code2 className="h-4 w-4" />
            </div>
          </Link>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60 relative group"
              >
                {route.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu for mobile devices
              </SheetDescription>
            </SheetHeader>
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-45">
                <Code2 className="h-4 w-4" />
              </div>
            </div>
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="block px-2 py-1 text-lg hover:text-foreground/80 transition-colors"
                  onClick={handleLinkClick}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
} 