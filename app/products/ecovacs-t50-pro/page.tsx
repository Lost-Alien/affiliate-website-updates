import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { Star, Check, ExternalLink, Zap, Compass, ShieldCheck, Sparkles, Sliders } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/ECOVACS-T50-PRO-Ultra-Thin-Zerotangle/dp/B0DRJPJLNQ?linkCode=ll2&tag=techstor0caaf-21&linkId=42263cbb289297ede12d9457887f1871&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'ECOVACS DEEBOT T50 PRO Robot Vacuum Review | TechSelect India',
  description:
    'In-depth review of ECOVACS DEEBOT T50 PRO Robot Vacuum. 12,800 Pa suction, ZeroTangle anti-tangle tech, ultra-thin 8.3cm profile.',
  openGraph: {
    title: 'ECOVACS DEEBOT T50 PRO Review — Ultra-Thin Robot Vacuum & Mop',
    description: 'Full review of ECOVACS DEEBOT T50 PRO featuring 12,800 Pa suction, ZeroTangle anti-hair wrap technology, and AI obstacle avoidance.',
    images: [{ url: '/products/ecovacs-t50-pro.png' }],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ECOVACS DEEBOT T50 PRO Robot Vacuum Cleaner',
  image: 'https://lostdev.tech/products/ecovacs-t50-pro.png',
  description: 'ECOVACS DEEBOT T50 PRO Robot Vacuum Cleaner featuring 12,800 Pa suction power, ZeroTangle anti-hair wrap technology, and AI obstacle avoidance.',
  brand: {
    '@type': 'Brand',
    name: 'ECOVACS',
  },
  offers: {
    '@type': 'Offer',
    url: AFFILIATE_URL,
    priceCurrency: 'INR',
    price: '49900',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '8.8',
    bestRating: '10',
    reviewCount: '1',
  },
}

const specs = [
  { icon: Zap, label: 'Suction', value: '12,800 Pa monster suction power' },
  { icon: Compass, label: 'Navigation', value: 'TrueMapping 3.0 LiDAR + AIVI 3D AI obstacle avoidance' },
  { icon: Sliders, label: 'Profile', value: '8.3 cm ultra-thin profile fits under low furniture' },
  { icon: ShieldCheck, label: 'Anti-Tangle', value: 'ZeroTangle 2.0 dual comb teeth anti-hair wrap' },
  { icon: Sparkles, label: 'Mopping', value: 'OZMO Turbo 2.0 dual spinning mops with auto-lift' },
]

const pros = [
  'Massive 12,800 Pa suction picks up fine dust, pet hair & heavy debris effortlessly',
  'ZeroTangle technology prevents human & pet hair from clogging the roller brush',
  'Ultra-thin 8.3cm height glides under sofas, beds & low clearance furniture',
  'OZMO Turbo 2.0 dual spinning mops scrub stubborn floor stains',
  'Smart app control with multi-floor mapping & customizable no-go zones',
]

const cons = [
  '₹49,900 is an investment',
  'Base station requires dedicated floor space',
]

const ratingBreakdown = [
  { label: 'Suction & Cleaning', score: 9.6 },
  { label: 'Obstacle Avoidance', score: 9.2 },
  { label: 'Mopping Performance', score: 9.0 },
  { label: 'App & Features', score: 8.8 },
  { label: 'Value for Money', score: 8.5 },
]

export default function EcovacsT50ProPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Smart Home', href: '/category/smart-home' },
            { label: 'Robot Vacuums', href: '/category/smart-home/robot-vacuums' },
            { label: 'ECOVACS DEEBOT T50 PRO' },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/ecovacs-t50-pro.png"
              alt="ECOVACS DEEBOT T50 PRO Ultra-Thin Robot Vacuum Cleaner"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="inline-block text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
                Editor&apos;s Choice — Best Robot Vacuum
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                ECOVACS DEEBOT T50 PRO
                <span className="block text-base font-normal text-muted-foreground mt-1">12,800 Pa · Ultra-Thin 8.3cm · ZeroTangle Anti-Hair Wrap</span>
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">8.8</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Excellent</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Current Price on Amazon India</p>
              <p className="text-3xl font-bold text-foreground">₹49,900</p>
              <p className="text-xs text-muted-foreground mt-1">Includes All-in-One OMNI Station, dust bag & dual mop pads</p>
            </div>

            {/* CTA */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="amazon-btn flex items-center justify-center gap-2 w-full py-4 px-6 font-semibold rounded-xl transition-colors text-base shadow-sm"
            >
              Check Price on Amazon.in
              <ExternalLink className="h-4 w-4" />
            </a>

            <p className="text-xs text-muted-foreground text-center">
              *As an Amazon Associate we earn from qualifying purchases at no extra cost to you.
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-2">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-2 bg-card border border-border rounded-lg p-3">
                  <Icon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-xs font-semibold text-foreground leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <section className="mb-12 bg-card border border-border rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-5">Rating Breakdown</h2>
          <div className="space-y-3">
            {ratingBreakdown.map(({ label, score }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-32 flex-shrink-0">{label}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(score / 10) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-foreground w-8">{score.toFixed(1)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold text-foreground mb-4">Pros</h2>
            <ul className="space-y-2">
              {pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold text-foreground mb-4">Cons</h2>
            <ul className="space-y-2">
              {cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 font-bold flex-shrink-0">✕</span>
                  <span className="text-muted-foreground">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12 bg-primary text-primary-foreground rounded-2xl p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold mb-4">Our Verdict</h2>
          <p className="text-primary-foreground/90 leading-relaxed mb-6 text-base">
            The ECOVACS DEEBOT T50 PRO is hands-down the most capable robot vacuum for Indian homes with pets and low furniture.
            The ZeroTangle anti-wrap system works like magic, and 12,800 Pa suction keeps tiles and carpets dust-free.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Best Robot Vacuum 2025 — India</p>
              <p className="font-bold text-lg">ECOVACS DEEBOT T50 PRO</p>
            </div>
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="amazon-btn flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              Buy on Amazon.in
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Disclosure */}
        <p className="text-xs text-muted-foreground text-center mb-8">
          This page contains affiliate links. If you purchase through our links, TechSelect earns a commission at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="underline hover:text-foreground transition-colors">
            Read our affiliate disclosure.
          </Link>
        </p>
      </main>
      <Footer />
    </>
  )
}
