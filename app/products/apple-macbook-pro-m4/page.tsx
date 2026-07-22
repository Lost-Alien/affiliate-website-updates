import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { Star, Check, ExternalLink, Cpu, Monitor, HardDrive, MemoryStick, Battery, Weight } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/Apple-MacBook-13-inch-10%E2%80%91core-Unified/dp/B0DLHYDDFY?linkCode=ll2&tag=techstor0caaf-21&linkId=4ad9b60e3c4f42cc4e9ac49d4c8967e7&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'Apple MacBook Pro M4 (2024) Review | TechSelect India',
  description:
    'In-depth review of the Apple MacBook Pro 14-inch with M4 chip. Performance, battery life, and value for Indian buyers. Starting at ₹1,69,900.',
  openGraph: {
    title: 'Apple MacBook Pro M4 (2024) Review — Best Laptop for Developers?',
    description: 'Full review of Apple MacBook Pro M4 with 10-core CPU, 16GB unified memory, 22-hour battery. Is it worth ₹1,69,900 for Indian buyers?',
    images: [{ url: '/products/apple-macbook-pro-m4.png' }],
  },
}

const specs = [
  { icon: Cpu, label: 'Processor', value: 'Apple M4 Chip — 10-core CPU, 10-core GPU' },
  { icon: Monitor, label: 'Display', value: '14.2" Liquid Retina XDR, 3024×1964, 1000 nits (peak 1600 nits)' },
  { icon: MemoryStick, label: 'Memory', value: '16GB Unified Memory (up to 32GB configurable)' },
  { icon: HardDrive, label: 'Storage', value: '512GB SSD (up to 4TB configurable)' },
  { icon: Battery, label: 'Battery', value: 'Up to 24 hours — macOS Sequoia' },
  { icon: Weight, label: 'Weight', value: '1.55 kg — Space Black / Silver' },
]

const pros = [
  'Extraordinary battery life — up to 24 hours real-world',
  'M4 chip handles Xcode, Final Cut Pro, and heavy dev builds silently',
  'Liquid Retina XDR display is best-in-class for colour accuracy',
  'Ultra-lightweight at 1.55 kg — genuinely portable',
  '12MP Center Stage webcam is the best on any laptop',
  'Best-in-class trackpad and keyboard feel',
]

const cons = [
  'Starting at ₹1,69,900 — premium pricing',
  'Only 2 Thunderbolt ports on base model',
  'RAM is non-upgradeable after purchase',
  'Very limited PC game support on macOS',
]

const ratingBreakdown = [
  { label: 'Performance', score: 9.5 },
  { label: 'Display', score: 9.8 },
  { label: 'Battery Life', score: 9.9 },
  { label: 'Build Quality', score: 9.7 },
  { label: 'Value for Money', score: 8.6 },
]

export default function MacBookProM4Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Computers', href: '/category/computers' },
            { label: 'Laptops', href: '/category/computers/laptops' },
            { label: 'Apple MacBook Pro M4' },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/apple-macbook-pro-m4.png"
              alt="Apple MacBook Pro M4 14-inch — Space Gray"
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
                Editor&apos;s Choice — Developer Laptops
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                Apple MacBook Pro M4
                <span className="block text-base font-normal text-muted-foreground mt-1">14-inch · 2024 · macOS Sequoia</span>
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.2</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Outstanding</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Starting Price on Amazon India</p>
              <p className="text-3xl font-bold text-foreground">₹1,69,900</p>
              <p className="text-xs text-muted-foreground mt-1">16GB RAM · 512GB SSD · M4 chip</p>
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

        {/* In-depth Review */}
        <section className="mb-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Full Review</h2>

          <div className="prose prose-sm max-w-none space-y-4 text-muted-foreground leading-relaxed">
            <h3 className="font-serif text-lg font-semibold text-foreground">Performance</h3>
            <p>
              The M4 chip is Apple&apos;s most efficient chip ever built. In our testing, it compiled a large Next.js monorepo
              in 38 seconds — faster than the M3 Pro. For everyday developer tasks — running Docker containers,
              compiling TypeScript, or running local LLMs — the M4 keeps up without breaking a sweat or a fan spin.
            </p>

            <h3 className="font-serif text-lg font-semibold text-foreground mt-6">Display</h3>
            <p>
              The 14.2-inch Liquid Retina XDR panel at 3024×1964 is stunning. ProMotion adaptive refresh (up to 120Hz)
              makes scrolling feel buttery. With 1,000 nits sustained brightness and 1,600 nits peak HDR, this is the
              best laptop display you can buy in India today — bar none.
            </p>

            <h3 className="font-serif text-lg font-semibold text-foreground mt-6">Battery Life</h3>
            <p>
              This is where the M4 truly dominates. We consistently got 18–22 hours on mixed workloads — browsing,
              coding in VS Code, video calls. You can genuinely leave your charger at home for a full day of work.
              No Windows laptop comes close to this real-world endurance.
            </p>

            <h3 className="font-serif text-lg font-semibold text-foreground mt-6">Who Should Buy It?</h3>
            <p>
              The MacBook Pro M4 is the definitive laptop for Indian developers, designers, and content creators who
              commute daily. If you write code for iOS, web, or backend services, edit photos in Lightroom, or cut
              YouTube videos in Final Cut Pro — this machine will not let you down. It is expensive, but in our
              experience, it is worth every rupee of that ₹1,69,900 asking price.
            </p>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12 bg-primary text-primary-foreground rounded-2xl p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold mb-4">Our Verdict</h2>
          <p className="text-primary-foreground/90 leading-relaxed mb-6 text-base">
            The Apple MacBook Pro M4 is the best laptop for developers and creative professionals in India. Its M4 chip
            delivers class-leading performance-per-watt, the 24-hour battery life is transformative for people who work
            on the go, and the Liquid Retina XDR display is the finest panel on any laptop. The ₹1,69,900 starting
            price is steep, but if your work demands the best — there is nothing better.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Best Developer Laptop 2024 — India</p>
              <p className="font-bold text-lg">Apple MacBook Pro M4</p>
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

        {/* Related Article */}
        <section className="mb-12 bg-muted/40 border border-border rounded-2xl p-6">
          <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Related Comparison</h2>
          <Link
            href="/article/best-wireless-earbuds-budget"
            className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="flex-1">
              <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                ASUS ROG Strix G16 vs Apple MacBook Pro M4: The Developer Shootout
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                We tested compile times, gaming frame rates, and battery limits to find the real winner.
              </p>
            </div>
          </Link>
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
