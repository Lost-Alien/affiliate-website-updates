import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { Star, Check, ExternalLink, Zap, ShieldCheck, Cpu, RefreshCw, ThumbsUp, ThumbsDown } from 'lucide-react'

const AFFILIATE_URL = "https://www.amazon.in/Self-Emptying-Hands-Off-Collection-MopExtend-Anti-Tangle/dp/B0H2DD8Z5T?tag=techstor0caaf-21"

export const metadata: Metadata = {
  title: 'Dreame Self-Emptying Robot Vacuum & Mop Review | TechSelect India',
  description: 'Hands-on review of Dreame Self-Emptying Robot Vacuum & Mop featuring MopExtend edge cleaning, Anti-Tangle roller brush, and hands-off dust collection dock.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Dreame Self-Emptying Robot Vacuum & Mop (MopExtend)',
  image: 'https://techselect.blog/products/dreame-robot-vacuum-mop.png',
  description: 'Dreame Robot Vacuum Cleaner & Mop with self-emptying base station, MopExtend corner reach technology, anti-tangle hair cutting brush, and 7000Pa suction.',
  brand: {
    '@type': 'Brand',
    name: 'Dreame',
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

export default function DreameRobotVacuumPage() {
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
            { label: 'Dreame Self-Emptying Robot Vacuum' },
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
              src="/products/dreame-robot-vacuum-mop.png"
              alt="Dreame Self-Emptying Robot Vacuum & Mop"
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold text-xs rounded-full mb-3">
              Best Hands-Off Robot Cleaner
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Dreame Self-Emptying Robot Vacuum
            </h1>
            <p className="text-muted-foreground text-sm mb-4">
              MopExtend Technology · Auto Dust Emptying Station · Anti-Tangle Brush · 7000Pa Suction
            </p>

            {/* Byline & Dates */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-6">
              <span>Reviewed by <span className="font-medium text-foreground">Karan Malhotra</span> · Mobile Editor</span>
              <span>Published: <span className="font-medium text-foreground">July 3, 2026</span></span>
              <span>Updated: <span className="font-medium text-foreground">July 26, 2026</span></span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.4</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Outstanding</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border mb-6">
              <p className="text-xs text-muted-foreground mb-1">Price & Availability on Amazon India</p>
              <p className="text-xl font-bold text-foreground">Check Latest Price</p>
              <p className="text-xs text-muted-foreground mt-1">Includes Auto-Empty Station & Extra Dust Bag · 1 Year Warranty</p>
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
                <Zap className="h-4 w-4 text-accent shrink-0" />
                <span>7000Pa Powerful Suction</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <RefreshCw className="h-4 w-4 text-accent shrink-0" />
                <span>MopExtend Corner Reach</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Cpu className="h-4 w-4 text-accent shrink-0" />
                <span>LiDAR 3D Obstacle Avoidance</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                <span>75-Day Hands-Off Dust Base</span>
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
                <span>MopExtend mechanical arm automatically extends mop pads to clean baseboards and tight furniture corners.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Anti-tangle roller brush effectively cuts long pet and human hair to prevent roller jams.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Self-emptying base station holds up to 75 days of dust before requiring a bag change.</span>
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
                <span>Base station footprint requires dedicated 1.5 ft clearance around wall power socket.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">&ndash;</span>
                <span>Requires replacement dust bags every 2–3 months.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-6 w-6 text-accent" />
            <h2 className="font-serif text-xl font-bold text-foreground">How We Tested This Robot Vacuum</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tested on hard tile floors, wooden planks, and low-pile rugs. Evaluated flour and rice debris pickup rates at 7000Pa suction, measured wall-edge mop clearance distance with MopExtend enabled, and tested dark room obstacle navigation.
          </p>
        </section>

        {/* Verdict CTA */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Final Verdict: 9.4 / 10</h2>
          <p className="max-w-2xl mx-auto text-sm text-primary-foreground/80 mb-6 leading-relaxed">
            If you want true hands-off home cleaning with corner-reaching mop extension, anti-tangle hair cutting technology, and a 75-day dust collection dock, the Dreame Self-Emptying Robot Vacuum is outstanding.
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
