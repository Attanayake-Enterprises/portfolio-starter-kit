import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { company } from './data/company'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: company.name,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  openGraph: {
    title: company.name,
    description: company.tagline,
    url: baseUrl,
    siteName: company.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/ae-20.jpeg',
        width: 1200,
        height: 630,
        alt: 'Attanayake Enterprises industrial machinery components',
      },
    ],
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased mx-3 mt-4 max-w-5xl py-2 sm:mx-4 lg:mx-auto lg:mt-6">
        <main className="mt-2 flex min-w-0 flex-col px-1 sm:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
