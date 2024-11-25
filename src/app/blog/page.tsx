import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { getBlogPosts, getAllTags } from '@/lib/mdx'
import { BlogPlaceholder } from '@/components/ui/blog-placeholder'
import { Suspense } from 'react'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'baris.pw | Blog',
  description: 'Read my thoughts on software development, design, and more.',
}

interface PageProps {
  searchParams: Promise<{
    tag?: string
  }>
}

async function getPageData(searchParams: { tag?: string }) {
  const tag = searchParams?.tag?.toString()
  return {
    posts: getBlogPosts(tag),
    tags: getAllTags(),
  }
}

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams
  const currentTag = params?.tag || ''
  const { posts, tags } = await getPageData(params)

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12 flex flex-wrap gap-3">
        <Link
          href="/blog"
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-colors",
            !currentTag
              ? "bg-primary text-primary-foreground"
              : "bg-muted/50 hover:bg-muted"
          )}
        >
          All
        </Link>
        {tags.map((tagName) => (
          <Link
            key={tagName}
            href={`/blog?tag=${tagName}`}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-colors",
              currentTag === tagName
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 hover:bg-muted"
            )}
          >
            {tagName}
          </Link>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border bg-card transition-all hover:bg-accent/50"
          >
            <Suspense fallback={<BlogPlaceholder title={post.title} />}>
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
            </Suspense>
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
        ))}
      </div>

      {posts.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No blog posts found {params?.tag && `for tag "${params.tag}"`}.
          </p>
        </div>
      )}
    </div>
  )
} 