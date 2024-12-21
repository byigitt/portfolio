export interface Project {
  title: string;
  description: string;
  stars?: number;
  tags: string[];
  github?: string;
  link?: string;
  category: "web" | "cli" | "automation" | "tools" | "api";
}

export const projects: Project[] = [
  // Web Applications
  {
    title: "Suncore",
    description: "An open-source offline web-based audio processor with features like nightcore effect, reverb, and bass boost.",
    stars: 5,
    tags: ["Next.js", "TypeScript", "Audio Processing", "Web Audio API"],
    github: "https://github.com/byigitt/suncore",
    link: "https://suncore.vercel.app",
    category: "web"
  },
  {
    title: "Flashy",
    description: "Modern offline flashcard application for students to use.",
    stars: 0,
    tags: ["Next.js", "TypeScript", "Offline", "Study", "Flashcards"],
    github: "https://github.com/byigitt/flashy",
    link: "https://flashy-byigitt.vercel.app",
    category: "web"
  },
  {
    title: "OneTimeLink",
    description: "One-time-link generator for uploading files.",
    stars: 4,
    tags: ["Next.js", "TypeScript", "File Upload", "One-Time Links"],
    github: "https://github.com/byigitt/onetimelink",
    category: "web"
  },
  {
    title: "URL Shortener",
    description: "A simple but effective URL shortener service built with JavaScript.",
    stars: 1,
    tags: ["JavaScript", "URL Shortening", "Web App"],
    github: "https://github.com/byigitt/shrtn",
    category: "web"
  },
  {
    title: "React Note",
    description: "Compact note-taking application optimized for mobile use.",
    stars: 1,
    tags: ["React", "JavaScript", "Mobile-First", "Notes"],
    github: "https://github.com/byigitt/react-note",
    category: "web"
  },

  // API & Backend
  {
    title: "SAPI - Simple Spotify API",
    description: "A simplified implementation of the Spotify API for easier integration.",
    stars: 2,
    tags: ["JavaScript", "Spotify API", "API", "Node.js"],
    github: "https://github.com/byigitt/sapi",
    category: "api"
  },
  {
    title: "DDGS - DuckDuckGo Search",
    description: "A TypeScript package that allows you to search the web using DuckDuckGo's API.",
    stars: 7,
    tags: ["TypeScript", "Node.js", "Search", "API"],
    github: "https://github.com/eudalabs/ddgs",
    category: "api"
  },

  // Automation Tools
  {
    title: "Discord URL Spammer",
    description: "A tool for Discord vanity URL management with features for automated URL acquisition and monitoring.",
    stars: 19,
    tags: ["JavaScript", "Discord API", "Automation"],
    github: "https://github.com/byigitt/url",
    category: "automation"
  },
  {
    title: "Spotify Daily Playlist",
    description: "Automatically creates daily playlists on Spotify based on your most listened tracks.",
    stars: 4,
    tags: ["JavaScript", "Spotify API", "Automation", "Node.js"],
    github: "https://github.com/byigitt/spotify-daily-playlist",
    category: "automation"
  },
  {
    title: "Visa Checker",
    description: "Automated Schengen visa appointment tracker with Telegram notifications.",
    stars: 70,
    tags: ["TypeScript", "Automation", "Telegram", "Notifications"],
    github: "https://github.com/byigitt/visa-checker",
    category: "automation"
  },

  // Development Tools
  {
    title: "Web Scraper",
    description: "A Python web scraper for supplementler.com to extract and process product information efficiently.",
    stars: 6,
    tags: ["Python", "BeautifulSoup", "Selenium", "Web Scraping"],
    github: "https://github.com/byigitt/web-scraper-test",
    category: "tools"
  },
  {
    title: "Transcriptor",
    description: "A Python-based tool using Whisper AI to automatically transcribe audio from YouTube videos.",
    stars: 8,
    tags: ["Python", "Whisper AI", "YouTube", "Google Colab"],
    github: "https://github.com/byigitt/transcriptor",
    category: "tools"
  },
  {
    title: "Ollama Chat",
    description: "Chat with your local LLM model using Ollama API inside your terminal.",
    stars: 2,
    tags: ["JavaScript", "CLI", "LLM", "AI"],
    github: "https://github.com/byigitt/ollama-chat",
    category: "tools"
  },

  // CLI & Utilities
  {
    title: "AIC - AI Commit Messages",
    description: "A CLI tool that generates commit messages using AI, streamlining the git workflow for developers.",
    stars: 13,
    tags: ["TypeScript", "AI", "CLI", "Git"],
    github: "https://github.com/eudalabs/aic",
    category: "cli"
  },
  {
    title: "Wordle Finder",
    description: "A tool designed to find the best words for the popular Wordle game.",
    stars: 1,
    tags: ["JavaScript", "Algorithm", "Game Helper", "CLI"],
    github: "https://github.com/byigitt/wordle-finder",
    category: "cli"
  },
  {
    title: "Parolla Finder",
    description: "Word finder tool for the Parolla game.",
    stars: 1,
    tags: ["JavaScript", "CLI", "Word Games", "Helper"],
    github: "https://github.com/byigitt/parolla-finder",
    category: "cli"
  }
]; 