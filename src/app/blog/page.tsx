"use client";

import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { BlogPlaceholder } from '@/components/ui/blog-placeholder'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import type { BlogPost } from '@/lib/mdx'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const fallbackData = {
  posts: [],
  tags: []
}

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('/blog-data.json')
        if (!response.ok) {
          throw new Error('Failed to load blog data')
        }
        
        const data = await response.json()
        
        // Filter posts if a tag is selected
        const filteredPosts = selectedTag
          ? data.posts.filter((post: BlogPost) => post.tags.includes(selectedTag))
          : data.posts

        setPosts(filteredPosts)
        setTags(data.tags)
      } catch (error) {
        console.error('Error loading blog data:', error)
        setError('Failed to load blog posts. Please try again later.')
        setPosts(fallbackData.posts)
        setTags(fallbackData.tags)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [selectedTag])

  if (error) {
    return (
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-red-500"
        >
          <p>{error}</p>
        </motion.div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-muted rounded mb-8" />
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border bg-card p-4">
                <div className="aspect-[16/9] bg-muted rounded-lg mb-4" />
                <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Blog Posts
        </h1>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Thoughts, tutorials and insights about web development and technology.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 flex flex-wrap gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => setSelectedTag('')}
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-colors",
            !selectedTag
              ? "bg-primary text-primary-foreground"
              : "bg-muted/50 hover:bg-muted"
          )}
        >
          All
        </motion.button>
        {tags.map((tagName) => (
          <motion.button
            key={tagName}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setSelectedTag(tagName)}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-colors",
              selectedTag === tagName
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 hover:bg-muted"
            )}
          >
            {tagName}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={item}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border bg-card transition-all hover:bg-accent/50"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <BlogPlaceholder title={post.title} />
                )}
              </div>
              <div className="flex h-full flex-col p-6">
                <p className="text-sm text-muted-foreground">
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">{post.title}</h2>
                <p className="mt-2 line-clamp-2 text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tagName) => (
                    <span
                      key={tagName}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium"
                    >
                      {tagName}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {posts.length === 0 && !loading && !error && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-12 text-center"
        >
          <p className="text-muted-foreground">
            No blog posts found {selectedTag && `for tag "${selectedTag}"`}.
          </p>
        </motion.div>
      )}
    </div>
  )
} 