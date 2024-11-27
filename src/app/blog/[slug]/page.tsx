import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPost, getBlogPosts } from '@/lib/mdx'
import { BlogPlaceholder } from '@/components/ui/blog-placeholder'
import type { Metadata } from 'next'
import Script from 'next/script'

export const dynamic = 'force-static'
export const dynamicParams = false

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return {};

  const post = await getBlogPost(slug);
  if (!post) return {};

  const images = post.image ? [{
    url: post.image,
    width: 1200,
    height: 630,
    alt: post.title,
  }] : [];

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.authors,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  if (!slug) return notFound();

  const post = await getBlogPost(slug);
  if (!post) return notFound();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.authors?.[0] || 'Barış Cem Bayburtlu',
      url: 'https://portfolio.baris.pw/about',
    },
    publisher: {
      '@type': 'Person',
      name: 'Barış Cem Bayburtlu',
      url: 'https://portfolio.baris.pw',
    },
  }

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <article className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
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
            <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
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
    </>
  )
}

// Generate all blog post paths at build time
export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
} 