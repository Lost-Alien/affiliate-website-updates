import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { Star, Check, ExternalLink, Cpu, Monitor, HardDrive, MemoryStick, Battery, Weight } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/ASUS-Gaming-Windows-Eclipse-G615LR-S5190WS/dp/B0F5BH7D1L?crid=38OIH0C33VG9Q&dib=eyJ2IjoiMSJ9.fhNj6crAx9P1CUwwwNxBXRO9aij3P0zV4POeWD-dPm4zDHbPozhGiOUZEi1AWOcP1rj8vIvChgB3FE8RkYVOo4CXa9DOyx159AQaT24WvahnxhrOQcthkfy_A3g9c9jQhtX05-7wmeUFC_HW7Xz0Nw8s23ZFzDrC7ZyaJKnFRig3A7v-WvkKPkfqI2pNV6MboPZxveHexz47N3kfvpuQyn2j8-UUrpwAqM9uyGZF0a8.Pn-RDc8LLBwgRuXSwlLhQARnE0K4TOEHMCQrWl3YyZc&dib_tag=se&keywords=rog%2Bstrix%2Bg16&qid=1784631896&sprefix=rog%2B%2Caps%2C295&sr=8-7&th=1&linkCode=ll2&tag=techstor0caaf-21&linkId=aadd764dc4c6da405d29919bcab54154&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'ASUS ROG Strix G16 (G615LR-S5190WS) Review | TechSelect',
  description:
    'In-depth review of the ASUS ROG Strix G16 with Intel Core Ultra 9 275HX and RTX 5070 Ti. Find out if it is worth ₹2,75,990 for Indian gamers.',
  openGraph: {
    title: 'ASUS ROG Strix G16 Review — RTX 5070 Ti Gaming Laptop',
    description: 'Full review of ASUS ROG Strix G16 gaming laptop featuring Intel Core Ultra 9 275HX, 32GB DDR5, and a blazing 2.5K 240Hz display.',
    images: [{ url: '/products/asus-rog-strix-g16.jpg' }],
  },
}

const specs = [
  { icon: Cpu, label: 'Processor', value: 'Intel Core Ultra 9 275HX (up to 5.4 GHz, 24 cores)' },
  { icon: Monitor, label: 'Display', value: '16" 2.5K QHD+ 2560×1600, 240Hz, 500nits IPS' },
  { icon: MemoryStick, label: 'GPU', value: 'NVIDIA GeForce RTX 5070 Ti 12GB GDDR7 — 140W TGP' },
  { icon: MemoryStick, label: 'RAM', value: '32GB DDR5' },
  { icon: HardDrive, label: 'Storage', value: '1TB PCIe 4.0 NVMe M.2 SSD' },
  { icon: Battery, label: 'Battery', value: '90Whr — Windows 11 Home' },
  { icon: Weight, label: 'Weight', value: '2.65 kg — Eclipse Gray' },
]

const pros = [
  'RTX 5070 Ti 140W TGP — no power compromise',
  'Core Ultra 9 275HX handles any workload effortlessly',
  '2.5K 240Hz display with 500nits brightness is stunning',
  '32GB DDR5 RAM future-proofs this machine',
  'Premium ROG build quality and keyboard feel',
  'Includes Office Home 2024 + M365 Basic',
]

const cons = [
  'Hefty ₹2,75,990 price tag',
  '2.65 kg — not lightweight for travel',
  'High-performance mode runs noticeably warm',
]

const ratingBreakdown = [
  { label: 'Performance', score: 9.8 },
  { label: 'Display', score: 9.5 },
  { label: 'Build Quality', score: 9.2 },
  { label: 'Thermals', score: 8.5 },
  { label: 'Value for Money', score: 8.8 },
]

export default function AsusRogStrixG16Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Computers', href: '/category/computers' },
            { label: 'Laptops', href: '/category/computers/laptops' },
            { label: 'ASUS ROG Strix G16' },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/asus-rog-strix-g16.jpg"
              alt="ASUS ROG Strix G16 Gaming Laptop — Eclipse Gray"
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
                Editor&apos;s Choice — Gaming Laptops
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                ASUS ROG Strix G16
                <span className="block text-base font-normal text-muted-foreground mt-1">G615LR-S5190WS — Eclipse Gray</span>
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.4</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Excellent</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Current Price on Amazon India</p>
              <p className="text-3xl font-bold text-foreground">₹2,75,990</p>
              <p className="text-xs text-muted-foreground mt-1">Includes Office Home 2024 + M365 Basic (1 Year)</p>
            </div>

            {/* CTA */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors text-base shadow-sm"
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
            The ASUS ROG Strix G16 G615LR-S5190WS is an absolute powerhouse — one of the most capable gaming laptops available in India right now. The RTX 5070 Ti at 140W TGP combined with Intel&apos;s Core Ultra 9 275HX delivers desktop-class gaming performance in a chassis that, while sizeable, is well-engineered and premium. The 2.5K 240Hz display is exceptional for fast-paced gaming. At ₹2,75,990, it is priced at a premium, but for gamers who want no compromise, it earns every rupee.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Best Gaming Laptop 2025 — India</p>
              <p className="font-bold text-lg">ASUS ROG Strix G16</p>
            </div>
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
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
