import type { Metadata } from 'next'
import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

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

export const metadata: Metadata = {
  title: 'TechSelect India | Premium Tech Reviews & Buying Guides',
  description: 'Expert, hands-on product reviews and buying guides tailored for Indian buyers. Discover deep-dive tests of the latest headphones, keyboards, and consumer tech.',
  keywords: ['tech reviews India', 'best earbuds India', 'Sony WH-1000XM5 review', 'Apple AirPods Pro India', 'buying guide'],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'TechSelect India | Expert Product Reviews & Buying Guides',
    description: 'Honest, expert product reviews and buying guides for Indian tech buyers.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
