"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Code2, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
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

const DRAG_THRESHOLD = 50;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SWIPE_START_THRESHOLD = 150; // Increase this value as needed

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  
    if (isOpen) {
      // Allow swiping from anywhere to close the menu
      isSwiping.current = true;
    } else {
      // Increase the touch start area to improve usability
      isSwiping.current = touchStartX.current < SWIPE_START_THRESHOLD;
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    
  
    touchEndX.current = e.touches[0].clientX;
    const swipeDistance = touchEndX.current - touchStartX.current;
  
    // If swiping right and menu is closed
    if (swipeDistance > DRAG_THRESHOLD && !isOpen) {
      setIsOpen(true);
      isSwiping.current = false;
    }
    // If swiping left and menu is open
    else if (swipeDistance < -DRAG_THRESHOLD && isOpen) {
      setIsOpen(false);
      isSwiping.current = false;
    }
  };

  const handleTouchEnd = () => {
    isSwiping.current = false;
  };

  return (
    <header 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
              <Code2 className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
            </div>
          </Link>

          {/* Centered Navigation */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-1 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="relative px-3 py-1.5 group transition-colors hover:text-foreground text-foreground/60 rounded-md"
              >
                <span className="relative z-10">{route.label}</span>
                <span className="absolute inset-0 bg-primary/10 rounded-md scale-95 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between flex-1">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            <SheetContent 
              side="left" 
              className="pr-0"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu for mobile devices
                </SheetDescription>
              </SheetHeader>
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                  <Code2 className="h-4 w-4" />
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="group relative block px-3 py-2 text-lg transition-colors rounded-md"
                    onClick={handleLinkClick}
                  >
                    <span className="relative z-10 text-foreground/60 group-hover:text-foreground transition-colors">{route.label}</span>
                    <span className="absolute inset-0 bg-primary/10 rounded-md scale-95 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
              <Code2 className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
            </div>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}