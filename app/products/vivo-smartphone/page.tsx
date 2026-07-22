import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { Star, Check, ExternalLink, Smartphone, Cpu, Camera, Battery, Monitor } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/vivo-Storage-Additional-Exchange-Offers/dp/B0GX94B58L?linkCode=ll2&tag=techstor0caaf-21&linkId=0ad2973400e1638013e37d63debba88a&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'Vivo Premium Smartphone (2025) Review | TechSelect India',
  description:
    'In-depth review of Vivo Premium Smartphone (2025). 120Hz 1.5K AMOLED display, Sony IMX camera, and 120W FlashCharge for Indian buyers.',
  openGraph: {
    title: 'Vivo Smartphone (2025) Review — Premium Android Performance',
    description: 'Full review of Vivo Premium Smartphone featuring MediaTek Dimensity 9300+, 50MP Sony IMX OIS camera, and 120W fast charging.',
    images: [{ url: '/products/vivo-smartphone.png' }],
  },
}

const specs = [
  { icon: Monitor, label: 'Display', value: '6.78" 1.5K 3D Curved AMOLED, 120Hz, 4500 nits peak' },
  { icon: Cpu, label: 'Processor', value: 'MediaTek Dimensity 9300+ (4nm flagship chip)' },
  { icon: Camera, label: 'Camera', value: '50MP Sony IMX920 OIS + 50MP Ultra-wide angle' },
  { icon: Battery, label: 'Battery', value: '5,500 mAh battery with 120W FlashCharge' },
  { icon: Smartphone, label: 'OS', value: 'Funtouch OS 15 (based on Android 15)' },
]

const pros = [
  'Blazing fast 120W FlashCharge powers phone to 100% in under 20 minutes',
  'Stunning 1.5K 120Hz curved AMOLED panel with incredible outdoor brightness',
  'Flagship MediaTek Dimensity 9300+ chipset handles heavy 60fps gaming effortlessly',
  'Sony IMX920 camera delivers fantastic low-light portrait shots',
  'Sleek lightweight design with premium glass back finish',
]

const cons = [
  'Funtouch OS comes with pre-installed bloatware that needs manual uninstallation',
  'No official IP68 rating on base configuration',
]

const ratingBreakdown = [
  { label: 'Display', score: 9.2 },
  { label: 'Performance', score: 9.0 },
  { label: 'Camera', score: 8.8 },
  { label: 'Battery & Charging', score: 9.6 },
  { label: 'Value for Money', score: 8.7 },
]

export default function VivoSmartphonePage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Mobiles', href: '/category/mobiles' },
            { label: 'Android', href: '/category/mobiles/android' },
            { label: 'Vivo Smartphone (2025)' },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/vivo-smartphone.png"
              alt="Vivo Premium Smartphone (2025)"
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
                Great Value — Premium Android
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                Vivo Smartphone (2025)
                <span className="block text-base font-normal text-muted-foreground mt-1">1.5K 120Hz Curved AMOLED · Dimensity 9300+ · 120W FlashCharge</span>
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">8.5</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Very Good</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Current Price on Amazon India</p>
              <p className="text-3xl font-bold text-foreground">₹39,999</p>
              <p className="text-xs text-muted-foreground mt-1">Includes 120W Fast Charger in box + protective case</p>
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
            With ultra-fast 120W charging, a vibrant 1.5K AMOLED display, and strong Dimensity 9300+ performance,
            this Vivo smartphone offers fantastic value for buyers under ₹40,000 in India.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Best Fast-Charging Smartphone</p>
              <p className="font-bold text-lg">Vivo Smartphone (2025)</p>
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
