import { getBlogPosts } from '@/lib/mdx'

export const dynamic = 'force-static'
export const revalidate = false

export default async function sitemap() {
  const baseUrl = 'https://portfolio.baris.pw'
  const buildDate = new Date().toISOString()
  const posts = await getBlogPosts()

  const blogUrls = (posts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date || buildDate,
  }))

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: buildDate,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: buildDate,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: buildDate,
    },
  ]

  return [...staticUrls, ...blogUrls]
} 