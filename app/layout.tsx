import type { Metadata } from 'next'
import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/json-ld'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lostdev.tech'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'TechSelect India | Premium Tech Reviews & Buying Guides',
    template: '%s | TechSelect India',
  },
  description:
    'Expert, hands-on product reviews and buying guides tailored for Indian buyers. Discover deep-dive tests of laptops, headphones, smartphones, and consumer tech.',
  keywords: [
    'tech reviews India',
    'best laptops India',
    'best earbuds India',
    'buying guide India',
    'Bose QuietComfort review',
    'ASUS ROG Strix G16 review',
  ],
  authors: [{ name: 'abs6187', url: 'https://github.com/abs6187' }],
  creator: 'TechSelect Team',
  publisher: 'TechSelect India',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: 'TechSelect India',
    title: 'TechSelect India | Expert Product Reviews & Buying Guides',
    description: 'Honest, expert product reviews and buying guides for Indian tech buyers.',
    images: [
      {
        url: `${baseUrl}/icon.svg`,
        width: 1200,
        height: 630,
        alt: 'TechSelect Logo & Brand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechSelect India | Expert Tech Reviews & Buying Guides',
    description: 'Hands-on product testing and honest buying guides for tech enthusiasts in India.',
    images: [`${baseUrl}/icon.svg`],
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TechSelect India',
  url: baseUrl,
  logo: `${baseUrl}/icon.svg`,
  sameAs: ['https://github.com/Lost-Alien/affiliate-website-updates'],
  description: 'Independent technology review platform providing data-driven scores and buying guides for tech products in India.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <JsonLd data={organizationSchema} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

