export interface Project {
  title: string;
  description: string;
  github?: string;
  link?: string;
  tags: string[];
  repo?: {
    owner: string;
    name: string;
  };
}

export const projects: Project[] = [
  // Web Applications
  {
    title: "Suncore",
    description: "An open-source offline web-based audio processor with features like nightcore effect, reverb, and bass boost.",
    github: "https://github.com/byigitt/suncore",
    tags: ["Next.js", "TypeScript", "Audio Processing", "Web Audio API"],
    repo: {
      owner: "byigitt",
      name: "suncore"
    },
    link: "https://suncore.vercel.app"
  },
  {
    title: "Flashy",
    description: "Modern offline flashcard application for students to use.",
    github: "https://github.com/byigitt/flashy",
    tags: ["Next.js", "TypeScript", "Offline", "Study", "Flashcards"],
    repo: {
      owner: "byigitt",
      name: "flashy"
    },
    link: "https://flashy-byigitt.vercel.app"
  },
  {
    title: "OneTimeLink",
    description: "One-time-link generator for uploading files.",
    github: "https://github.com/byigitt/onetimelink",
    tags: ["Next.js", "TypeScript", "File Upload", "One-Time Links"],
    repo: {
      owner: "byigitt",
      name: "onetimelink"
    }
  },
  {
    title: "URL Shortener",
    description: "A simple but effective URL shortener service built with JavaScript.",
    github: "https://github.com/byigitt/shrtn",
    tags: ["JavaScript", "URL Shortening", "Web App"],
    repo: {
      owner: "byigitt",
      name: "shrtn"
    }
  },
  {
    title: "React Note",
    description: "Compact note-taking application optimized for mobile use.",
    github: "https://github.com/byigitt/react-note",
    tags: ["React", "JavaScript", "Mobile-First", "Notes"],
    repo: {
      owner: "byigitt",
      name: "react-note"
    }
  },

  // API & Backend
  {
    title: "SAPI - Simple Spotify API",
    description: "A simplified implementation of the Spotify API for easier integration.",
    github: "https://github.com/byigitt/sapi",
    tags: ["JavaScript", "Spotify API", "API", "Node.js"],
    repo: {
      owner: "byigitt",
      name: "sapi"
    }
  },
  {
    title: "DDGS - DuckDuckGo Search",
    description: "A TypeScript package that allows you to search the web using DuckDuckGo's API.",
    github: "https://github.com/eudalabs/ddgs",
    tags: ["TypeScript", "Node.js", "Search", "API"],
    repo: {
      owner: "eudalabs",
      name: "ddgs"
    }
  },

  // Automation Tools
  {
    title: "Discord URL Spammer",
    description: "A tool for Discord vanity URL management with features for automated URL acquisition and monitoring.",
    github: "https://github.com/byigitt/url",
    tags: ["JavaScript", "Discord API", "Automation"],
    repo: {
      owner: "byigitt",
      name: "url"
    }
  },
  {
    title: "Spotify Daily Playlist",
    description: "Automatically creates daily playlists on Spotify based on your most listened tracks.",
    github: "https://github.com/byigitt/spotify-daily-playlist",
    tags: ["JavaScript", "Spotify API", "Automation", "Node.js"],
    repo: {
      owner: "byigitt",
      name: "spotify-daily-playlist"
    }
  },
  {
    title: "Visa Checker",
    description: "Automated Schengen visa appointment tracker with Telegram notifications.",
    github: "https://github.com/byigitt/visa-checker",
    tags: ["TypeScript", "Automation", "Telegram", "Notifications"],
    repo: {
      owner: "byigitt",
      name: "visa-checker"
    }
  },

  // Development Tools
  {
    title: "Web Scraper",
    description: "A Python web scraper for supplementler.com to extract and process product information efficiently.",
    github: "https://github.com/byigitt/web-scraper-test",
    tags: ["Python", "BeautifulSoup", "Selenium", "Web Scraping"],
    repo: {
      owner: "byigitt",
      name: "web-scraper-test"
    }
  },
  {
    title: "Transcriptor",
    description: "A Python-based tool using Whisper AI to automatically transcribe audio from YouTube videos.",
    github: "https://github.com/byigitt/transcriptor",
    tags: ["Python", "Whisper AI", "YouTube", "Google Colab"],
    repo: {
      owner: "byigitt",
      name: "transcriptor"
    }
  },
  {
    title: "Ollama Chat",
    description: "Chat with your local LLM model using Ollama API inside your terminal.",
    github: "https://github.com/byigitt/ollama-chat",
    tags: ["JavaScript", "CLI", "LLM", "AI"],
    repo: {
      owner: "byigitt",
      name: "ollama-chat"
    }
  },

  // CLI & Utilities
  {
    title: "AIC - AI Commit Messages",
    description: "A CLI tool that generates commit messages using AI, streamlining the git workflow for developers.",
    github: "https://github.com/eudalabs/aic",
    tags: ["TypeScript", "AI", "CLI", "Git"],
    repo: {
      owner: "eudalabs",
      name: "aic"
    }
  },
  {
    title: "Wordle Finder",
    description: "A tool designed to find the best words for the popular Wordle game.",
    github: "https://github.com/byigitt/wordle-finder",
    tags: ["JavaScript", "Algorithm", "Game Helper", "CLI"],
    repo: {
      owner: "byigitt",
      name: "wordle-finder"
    }
  },
  {
    title: "Parolla Finder",
    description: "Word finder tool for the Parolla game.",
    github: "https://github.com/byigitt/parolla-finder",
    tags: ["JavaScript", "CLI", "Word Games", "Helper"],
    repo: {
      owner: "byigitt",
      name: "parolla-finder"
    }
  }
]; 