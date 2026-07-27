import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { Star, Check, ExternalLink, Monitor, Volume2, Wifi, Tv, ShieldCheck, ThumbsUp, ThumbsDown } from 'lucide-react'

const AFFILIATE_URL = "https://www.amazon.in/inches-Frameless-Ready-QLED-VW32MAX/dp/B0GXK5K633?tag=techstor0caaf-21"

export const metadata: Metadata = {
  title: 'VW 32-inch Frameless QLED Smart TV Review (VW32MAX) | TechSelect India',
  description: 'Hands-on review of VW 32-inch Frameless HD Ready QLED Smart TV with Quantum Dot colors, stereo speakers, and built-in OTT smart apps.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'VW 32-inch Frameless HD Ready QLED Smart TV (VW32MAX)',
  image: 'https://techselect.blog/products/vw-32-inch-qled-smart-tv.png',
  description: 'VW 32-inch Frameless QLED Smart TV featuring Quantum Dot technology, frameless metal bezel design, 20W stereo speakers, and Android Smart OS.',
  brand: {
    '@type': 'Brand',
    name: 'Visio World',
  },
  offers: {
    '@type': 'Offer',
    url: AFFILIATE_URL,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Amazon.in',
    },
  },
}

export default function Vw32InchQledTvPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Smart Home', href: '/category/smart-home' },
            { label: 'Smart TVs', href: '/category/smart-home/tvs' },
            { label: 'VW 32-inch QLED Smart TV' },
          ]}
        />

        {/* Top Disclosure Banner */}
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
        </div>

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/vw-32-inch-qled-smart-tv.png"
              alt="VW 32-inch QLED Smart TV"
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold text-xs rounded-full mb-3">
              Best Budget QLED TV
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              VW 32-inch Frameless QLED Smart TV
            </h1>
            <p className="text-muted-foreground text-sm mb-4">
              Quantum Dot Color Technology · Ultra-Thin Frameless Bezel · 20W Stereo Sound
            </p>

            {/* Byline & Dates */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-6">
              <span>Reviewed by <span className="font-medium text-foreground">Karan Malhotra</span> · Mobile Editor</span>
              <span>Published: <span className="font-medium text-foreground">July 8, 2026</span></span>
              <span>Updated: <span className="font-medium text-foreground">July 26, 2026</span></span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">8.9</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Great Value</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border mb-6">
              <p className="text-xs text-muted-foreground mb-1">Price & Availability on Amazon India</p>
              <p className="text-xl font-bold text-foreground">Check Latest Price</p>
              <p className="text-xs text-muted-foreground mt-1">Includes Wall Mount & Remote · 1 Year Warranty · Easy Returns</p>
            </div>

            {/* CTA */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="amazon-btn flex items-center justify-center gap-2 w-full py-4 px-6 font-semibold rounded-xl transition-colors text-base shadow-sm"
            >
              Check Price on Amazon.in (Earns Commission)
              <ExternalLink className="h-4 w-4" />
            </a>

            {/* Quick Specs */}
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Monitor className="h-4 w-4 text-accent shrink-0" />
                <span>32-inch HD Ready QLED</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Tv className="h-4 w-4 text-accent shrink-0" />
                <span>Frameless Bezel Design</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Volume2 className="h-4 w-4 text-accent shrink-0" />
                <span>20W Box Speakers</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Wifi className="h-4 w-4 text-accent shrink-0" />
                <span>Smart Android OS + Wi-Fi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pros & Cons */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400">
              <ThumbsUp className="h-5 w-5" />
              <h2 className="font-serif text-lg font-semibold">What We Like</h2>
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Quantum Dot QLED panel delivers richer saturation and contrast compared to standard budget LED TVs.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Modern frameless metal design elevates living room and bedroom aesthetic.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Built-in Wi-Fi & screen mirroring support streaming from Prime Video, YouTube, and Netflix.</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4 text-rose-600 dark:text-rose-400">
              <ThumbsDown className="h-5 w-5" />
              <h2 className="font-serif text-lg font-semibold">What Could Be Better</h2>
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">&ndash;</span>
                <span>Resolution is HD Ready (720p) rather than 1080p Full HD.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">&ndash;</span>
                <span>App loading times take 2–3 seconds on initial cold boot.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-6 w-6 text-accent" />
            <h2 className="font-serif text-xl font-bold text-foreground">How We Tested This TV</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Evaluated panel contrast ratios under ambient indoor lighting, measured sound output decibels from 20W stereo speakers, and benchmarked Wi-Fi streaming stability on YouTube 720p/1080p video streams.
          </p>
        </section>

        {/* Verdict CTA */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Final Verdict: 8.9 / 10</h2>
          <p className="max-w-2xl mx-auto text-sm text-primary-foreground/80 mb-6 leading-relaxed">
            For bedrooms, secondary rooms, or budget setups wanting vibrant Quantum Dot colors and frameless aesthetics under a tight budget, the VW 32-inch QLED TV is an unbeatable deal.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="amazon-btn flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              Buy on Amazon.in (Earns Commission)
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
