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
  keywords: [
    'batching plant spare parts Sri Lanka',
    'asphalt plant spare parts Sri Lanka',
    'crusher spare parts Sri Lanka',
    'concrete mixer spare parts Sri Lanka',
    'mixing arms',
    'mixing blades',
    'bottom plates',
    'wear plates',
    'batching plant gearbox repairs',
    'custom metal fabrication Sri Lanka',
    'cast iron fabrication',
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/logo.svg', type: 'image/svg+xml' }],
    shortcut: '/logo.svg',
  },
  openGraph: {
    title: company.name,
    description: company.description,
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
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: company.name,
              description: company.description,
              url: baseUrl,
              logo: `${baseUrl}/logo.svg`,
              email: company.contact.email,
              telephone: company.contact.proprietorPhone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: company.contact.office.address,
                addressLocality: 'Kelaniya',
                addressCountry: 'LK',
              },
              areaServed: 'Sri Lanka',
              knowsAbout: [
                'Batching plant spare parts',
                'Asphalt plant spare parts',
                'Crusher spare parts',
                'Custom metal fabrication',
                'Gearbox repair',
              ],
            }),
          }}
        />
        <main className="site-shell flex min-w-0 w-full flex-col">
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
