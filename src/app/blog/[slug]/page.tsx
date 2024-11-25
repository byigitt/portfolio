import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPost } from '@/lib/mdx'
import { BlogPlaceholder } from '@/components/ui/blog-placeholder'
import { Suspense } from 'react'

interface PageProps {
  params: { slug: string }
}

async function getPost(slug: string) {
  return getBlogPost(slug)
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params
  if (!slug) return {}
  
  const post = await getPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Your Name`,
    description: post.description,
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = params
  if (!slug) {
    notFound()
  }

  const post = await getPost(slug)
  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Suspense fallback={<BlogPlaceholder title={post.title} />}>
            <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <BlogPlaceholder title={post.title} />
              )}
            </div>
          </Suspense>
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground">
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2 py-1 text-xs rounded-md bg-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  )
} 