import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { Star, Check, ExternalLink, Headphones, Battery, Bluetooth, Weight, Music } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/Sennheiser-Momentum-Wireless-Headphones-Cancelling-ANC/dp/B0B6G9TPNQ?linkCode=ll2&tag=techstor0caaf-21&linkId=624f127efe2e59a13c34318c7b90d7ee&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'Sennheiser Momentum 4 Wireless Review | TechSelect India',
  description:
    'In-depth review of Sennheiser Momentum 4 Wireless. Audiophile sound quality, 60-hour battery life, and adaptive ANC.',
  openGraph: {
    title: 'Sennheiser Momentum 4 Wireless Review — Best Audiophile Wireless Headphones',
    description: 'Full review of Sennheiser Momentum 4 featuring 60-hour battery life, 42mm audiophile transducers, and adaptive ANC.',
    images: [{ url: '/products/sennheiser-momentum-4.png' }],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Sennheiser Momentum 4 Wireless Headphones',
  image: 'https://lostdev.tech/products/sennheiser-momentum-4.png',
  description: 'Sennheiser Momentum 4 Wireless Headphones featuring 60-hour battery life, 42mm dynamic audiophile transducers, and Adaptive Active Noise Cancellation.',
  brand: {
    '@type': 'Brand',
    name: 'Sennheiser',
  },
  offers: {
    '@type': 'Offer',
    url: AFFILIATE_URL,
    priceCurrency: 'INR',
    price: '26990',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '9.0',
    bestRating: '10',
    reviewCount: '1',
  },
}

const specs = [
  { icon: Music, label: 'Transducer', value: '42mm dynamic audiophile-grade driver' },
  { icon: Headphones, label: 'ANC', value: 'Adaptive Active Noise Cancellation' },
  { icon: Battery, label: 'Battery', value: 'Up to 60 hours (ANC on)' },
  { icon: Bluetooth, label: 'Codecs', value: 'aptX Adaptive, aptX, AAC, SBC' },
  { icon: Weight, label: 'Weight', value: '293g — Lightweight design' },
]

const pros = [
  'Staggering 60-hour battery life — nearly triple competitors',
  'Signature Sennheiser soundstage with rich bass and crystalline detail',
  'aptX Adaptive support for low-latency high-res streaming',
  'Adaptive ANC automatically adjusts to noise level',
  'Quick charging gives 6 hours playtime from 5 minutes charge',
]

const cons = [
  'ANC is slightly less aggressive than Bose QuietComfort',
  'Touch controls take time to master',
]

const ratingBreakdown = [
  { label: 'Sound Quality', score: 9.8 },
  { label: 'Battery Life', score: 10.0 },
  { label: 'Comfort', score: 9.0 },
  { label: 'Noise Cancellation', score: 8.7 },
  { label: 'Value for Money', score: 9.1 },
]

export default function SennheiserMomentum4Page() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Audio', href: '/category/audio' },
            { label: 'Headphones', href: '/category/audio/headphones' },
            { label: 'Sennheiser Momentum 4' },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/sennheiser-momentum-4.png"
              alt="Sennheiser Momentum 4 Wireless Noise Cancelling Headphones"
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
                Audiophile Pick — Best Battery Life
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                Sennheiser Momentum 4 Wireless
                <span className="block text-base font-normal text-muted-foreground mt-1">Audiophile Over-Ear Noise Cancelling Headphones</span>
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.0</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Outstanding</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Current Price on Amazon India</p>
              <p className="text-3xl font-bold text-foreground">₹26,990</p>
              <p className="text-xs text-muted-foreground mt-1">Includes hard travel case, USB-C cable & 3.5mm audio cable</p>
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
            For music lovers who want sound quality first and an incredible 60-hour battery life that lasts for weeks of commuting,
            the Sennheiser Momentum 4 Wireless is unbeatable value at ₹26,990.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Best Sounding Wireless Headphones</p>
              <p className="font-bold text-lg">Sennheiser Momentum 4 Wireless</p>
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
