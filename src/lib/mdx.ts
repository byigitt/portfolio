import path from 'node:path'
import { promises as fs } from 'node:fs'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
  image?: string
  tags: string[]
  authors: string[]
}

let blogPosts: BlogPost[] | null = null

export async function getBlogPosts(tag?: string): Promise<BlogPost[]> {
  if (blogPosts) return filterPosts(blogPosts, tag)

  try {
    const contentDir = path.join(process.cwd(), 'src/content/blog')
    const files = await fs.readdir(contentDir)
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async file => {
          const filePath = path.join(contentDir, file)
          const source = await fs.readFile(filePath, 'utf8')
          const { data, content } = matter(source)
          
          return {
            slug: file.replace('.mdx', ''),
            title: data.title as string,
            date: data.date as string,
            description: data.description as string,
            image: data.image as string | undefined,
            tags: (data.tags as string[]) || [],
            content,
            authors: Array.isArray(data.authors) ? data.authors : [],
          }
        })
    )

    blogPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return filterPosts(blogPosts, tag)
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

function filterPosts(posts: BlogPost[], tag?: string): BlogPost[] {
  if (tag) {
    return posts.filter(post => post.tags.includes(tag))
  }
  return posts
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find(post => post.slug === slug) || null
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getBlogPosts()
  const tags = new Set<string>()
  
  for (const post of posts) {
    for (const tag of post.tags) {
      tags.add(tag)
    }
  }
  
  return Array.from(tags).sort()
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return getBlogPosts()
} 