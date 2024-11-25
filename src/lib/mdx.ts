import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  image?: string
  tags: string[]
  content: string
}

export const getBlogPosts = (tag?: string): BlogPost[] => {
  const files = fs.readdirSync(BLOG_DIR)
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        tags: data.tags || [],
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (tag) {
    return posts.filter(post => post.tags.includes(tag))
  }

  return posts
}

export const getBlogPost = (slug: string): BlogPost | null => {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      image: data.image,
      tags: data.tags || [],
      content,
    }
  } catch {
    return null
  }
}

export const getAllTags = (): string[] => {
  const posts = getBlogPosts()
  const tags = new Set<string>()
  
  for (const post of posts) {
    for (const tag of post.tags) {
      tags.add(tag)
    }
  }
  
  return Array.from(tags).sort()
} 