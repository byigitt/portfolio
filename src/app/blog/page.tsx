"use client";

import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { BlogPlaceholder } from '@/components/ui/blog-placeholder'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import type { BlogPost } from '@/lib/mdx'

const fallbackData = {
  posts: [],
  tags: []
}

export default function BlogPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [initialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        if (initialLoading) {
          const response = await fetch('/blog-data.json')
          if (!response.ok) {
            throw new Error('Failed to load blog data')
          }
          
          const data = await response.json()
          setTags(data.tags)
          
          // Filter posts if tags are selected
          const filteredPosts = selectedTags.length > 0
            ? data.posts.filter((post: BlogPost) => 
                post.tags.some(tag => selectedTags.includes(tag))
              )
            : data.posts

          setPosts(filteredPosts)
          setInitialLoading(false)
        } else {
          // Client-side filtering without loading state
          const response = await fetch('/blog-data.json')
          const data = await response.json()
          const filteredPosts = selectedTags.length > 0
            ? data.posts.filter((post: BlogPost) => 
                post.tags.some(tag => selectedTags.includes(tag))
              )
            : data.posts
          setPosts(filteredPosts)
        }
      } catch (error) {
        console.error('Error loading blog data:', error)
        setError('Failed to load blog posts. Please try again later.')
        setPosts(fallbackData.posts)
        setTags(fallbackData.tags)
      }
    }

    loadData()
  }, [selectedTags, initialLoading])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (initialLoading) {
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

      <div className="mb-12 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setSelectedTags([])}
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-colors",
            selectedTags.length === 0
              ? "bg-primary text-primary-foreground"
              : "bg-muted/50 hover:bg-muted"
          )}
        >
          All
        </button>
        {tags.map((tagName) => (
          <button
            key={tagName}
            type="button"
            onClick={() => toggleTag(tagName)}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-colors",
              selectedTags.includes(tagName)
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 hover:bg-muted"
            )}
          >
            {tagName}
          </button>
        ))}
      </div>

      <motion.div
        key={selectedTags.join(',')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {posts.map((post) => (
          <div key={post.slug}>
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
                    <button
                      type="button"
                      key={tagName}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleTag(tagName);
                      }}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium hover:bg-muted/80 transition-colors"
                    >
                      {tagName}
                    </button>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </motion.div>

      {posts.length === 0 && !initialLoading && !error && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-12 text-center"
        >
          <p className="text-muted-foreground">
            No blog posts found {selectedTags.length > 0 && `for tags "${selectedTags.join(',')}"`}.
          </p>
        </motion.div>
      )}
    </div>
  )
} 