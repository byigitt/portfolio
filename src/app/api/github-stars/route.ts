import { NextResponse } from 'next/server';

interface GitHubSearchResponse {
  items: {
    full_name: string;
    stargazers_count: number;
    description: string | null;
    language: string | null;
    html_url: string;
  }[];
}

interface ProcessedRepo {
  fullName: string;
  stars: number;
  description: string | null;
  language: string | null;
  url: string;
}

const cache = new Map<string, { data: ProcessedRepo[], timestamp: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

async function fetchRepos(query: { type: 'user' | 'org', name: string }) {
  const cacheKey = `${query.type}:${query.name}`;
  
  // Check cache first
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App',
    };

    // Add GitHub token if available
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const searchQuery = query.type === 'org' ? `org:${query.name}` : `user:${query.name}`;
    const response = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&order=desc`, {
      headers
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const { items: repos } = await response.json() as GitHubSearchResponse;
    const processedRepos = repos.map((repo) => ({
      fullName: repo.full_name.toLowerCase(),
      stars: repo.stargazers_count,
      description: repo.description,
      language: repo.language,
      url: repo.html_url,
    }));

    // Update cache
    cache.set(cacheKey, {
      data: processedRepos,
      timestamp: Date.now()
    });

    return processedRepos;
  } catch (error) {
    console.error(`Error fetching repos for ${query.type}:${query.name}:`, error);
    // Return cached data if available, even if expired
    return cached?.data || [];
  }
}

export async function GET() {
  const queries = [
    { type: 'user' as const, name: 'byigitt' },
    { type: 'org' as const, name: 'eudalabs' }
  ];
  
  const allRepos = await Promise.all(
    queries.map(query => fetchRepos(query))
  );


  // Flatten the array of arrays and sort by stars
  const sortedRepos = allRepos
    .flat()
    .sort((a, b) => b.stars - a.stars);

  return NextResponse.json(sortedRepos);
} 