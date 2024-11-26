import path from 'node:path'
import { promises as fs } from 'node:fs'
import matter from 'gray-matter'

let blogPosts = null

export async function getBlogPosts(tag) {
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
            title: data.title,
            date: data.date,
            description: data.description,
            image: data.image,
            tags: data.tags || [],
            content,
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

function filterPosts(posts, tag) {
  if (tag) {
    return posts.filter(post => post.tags.includes(tag))
  }
  return posts
}

export async function getBlogPost(slug) {
  const posts = await getBlogPosts()
  return posts.find(post => post.slug === slug) || null
}

export async function getAllTags() {
  const posts = await getBlogPosts()
  const tags = new Set()
  
  for (const post of posts) {
    for (const tag of post.tags) {
      tags.add(tag)
    }
  }
  
  return Array.from(tags).sort()
} 