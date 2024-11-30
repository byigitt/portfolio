import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://portfolio.baris.pw'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Barış Cem Bayburtlu | Full Stack Developer',
    template: 'Barış Cem Bayburtlu | %s'
  },
  description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies. Exploring the intersection of design and development.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Barış Cem Bayburtlu' }],
  creator: 'Barış Cem Bayburtlu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.baris.pw',
    siteName: 'Barış Cem Bayburtlu - Portfolio',
    title: 'Barış Cem Bayburtlu | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Barış Cem Bayburtlu - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barış Cem Bayburtlu | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'],
    creator: '@bariscmb'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
