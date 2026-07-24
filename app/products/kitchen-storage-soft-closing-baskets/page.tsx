import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { Star, Check, ExternalLink, Box, Sliders, ShieldCheck, Sparkles, Wrench } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/Kitchen-Storage-Closing-Baskets-Cabinet/dp/B0FHFWDJ4B?pd_rd_w=zoMaQ&content-id=amzn1.sym.41279fa1-dd23-4c70-9745-af6d0ebf3670%3Aamzn1.symc.30e3dbb4-8dd8-4bad-b7a1-a45bcdbc49b8&pf_rd_p=41279fa1-dd23-4c70-9745-af6d0ebf3670&pf_rd_r=TCJH5YE5ND2W6PHGFHX9&pd_rd_wg=Hug6N&pd_rd_r=4b359838-131f-439e-8da7-078484df97fc&pd_rd_i=B0FHFWDJ4B&th=1&linkCode=ll2&tag=techstor0caaf-21&linkId=bb6d99085b60fdced704b2167990c220&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'Modular Kitchen Soft-Closing Pull-Out Storage Basket Review | TechSelect India',
  description:
    'In-depth review of Stainless Steel Soft-Closing Modular Kitchen Pull-Out Basket & Cabinet Storage Organizer. Heavy-duty construction, smooth slides, and space-saving design.',
  openGraph: {
    title: 'Modular Kitchen Soft-Closing Pull-Out Storage Basket Review — Premium Cabinet Storage',
    description: 'Full review of Soft-Closing Modular Kitchen Storage Baskets featuring heavy-duty stainless steel build, quiet hydraulic slides, and maximum space optimization.',
    images: [{ url: '/products/kitchen-storage-soft-closing-baskets.png' }],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Modular Kitchen Soft-Closing Pull-Out Storage Basket Cabinet Organizer',
  image: 'https://lostdev.tech/products/kitchen-storage-soft-closing-baskets.png',
  description: 'Modular Kitchen Soft-Closing Pull-Out Storage Basket Cabinet Organizer with heavy-duty stainless steel wire design and soft-close hydraulic drawer slides.',
  offers: {
    '@type': 'Offer',
    url: AFFILIATE_URL,
    priceCurrency: 'INR',
    price: '3499',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '8.9',
    bestRating: '10',
    reviewCount: '1',
  },
}

const specs = [
  { icon: Box, label: 'Material', value: 'Grade 304 Stainless Steel (Anti-Rust Chrome Polish)' },
  { icon: Sliders, label: 'Mechanism', value: 'Heavy-Duty Soft-Closing Hydraulic Telescopic Slides' },
  { icon: ShieldCheck, label: 'Weight Capacity', value: 'Supports up to 35 kg load capacity' },
  { icon: Wrench, label: 'Mounting', value: 'Side/Bottom cabinet mounting with template hardware included' },
  { icon: Sparkles, label: 'Usage', value: 'Utensils, spice jars, cutlery, and pantry organizer' },
]

const pros = [
  'Smooth soft-closing hydraulic mechanism eliminates slam noises completely',
  'Heavy-duty Grade 304 stainless steel construction prevents rust and corrosion in humid kitchens',
  'Multi-tier modular compartments for organized cutlery, spices, and cookware storage',
  '35 kg weight capacity easily handles heavy pressure cookers and glass jars',
  'Easy installation hardware kit included with universal cabinet fitment',
]

const cons = [
  'Requires precise cabinet depth measuring before installation',
  'Professional cabinet installer recommended for perfect alignment',
]

const ratingBreakdown = [
  { label: 'Build & Durability', score: 9.5 },
  { label: 'Soft-Close Mechanism', score: 9.3 },
  { label: 'Storage Organization', score: 9.0 },
  { label: 'Ease of Installation', score: 8.2 },
  { label: 'Value for Money', score: 8.8 },
]

export default function KitchenStorageBasketsPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Smart Home', href: '/category/smart-home' },
            { label: 'Kitchen Storage', href: '/category/smart-home/kitchen-storage' },
            { label: 'Kitchen Soft-Closing Baskets' },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/kitchen-storage-soft-closing-baskets.png"
              alt="Modular Kitchen Soft-Closing Pull-Out Storage Basket Cabinet Organizer"
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
                Top Pick — Kitchen Organization
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                Modular Kitchen Soft-Closing Storage Basket
                <span className="block text-base font-normal text-muted-foreground mt-1">Stainless Steel · Soft-Close Telescopic Slides · 35kg Load Capacity</span>
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">8.9</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Excellent</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Current Price on Amazon India</p>
              <p className="text-3xl font-bold text-foreground">₹3,499</p>
              <p className="text-xs text-muted-foreground mt-1">Includes soft-closing slides, mounting brackets & installation kit</p>
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
            The Soft-Closing Modular Kitchen Pull-Out Basket is an essential upgrade for modern Indian kitchens.
            It optimizes deep cabinet storage space, operates silently without drawer banging, and Grade 304 stainless steel ensures long-lasting rust-free durability.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Best Modular Kitchen Organizer 2025</p>
              <p className="font-bold text-lg">Kitchen Soft-Closing Storage Basket</p>
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
