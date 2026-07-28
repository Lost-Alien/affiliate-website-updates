import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { AuthorBio } from '@/components/article/author-bio'
import { Star, Check, ExternalLink, Smartphone, Cpu, Camera, Battery, Monitor } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/vivo-Storage-Additional-Exchange-Offers/dp/B0GX94B58L?linkCode=ll2&tag=techstor0caaf-21&linkId=0ad2973400e1638013e37d63debba88a&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'Vivo X100 Pro 5G Review | TechSelect India',
  description:
    'In-depth review of Vivo X100 Pro 5G featuring Zeiss optics, 120Hz 1.5K AMOLED display, Dimensity 9300+, and 120W FlashCharge for Indian buyers.',
  openGraph: {
    title: 'Vivo X100 Pro 5G Review — Zeiss Camera & Flagship Power',
    description: 'Full review of Vivo X100 Pro 5G featuring MediaTek Dimensity 9300+, 50MP Sony IMX OIS camera, and 120W fast charging.',
    images: [{ url: '/products/vivo-smartphone.png' }],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Vivo X100 Pro 5G',
  image: 'https://techselect.blog/products/vivo-smartphone.png',
  description: 'Vivo X100 Pro 5G featuring 6.78-inch 120Hz 1.5K AMOLED display, MediaTek Dimensity 9300+ processor, and 50MP Sony IMX camera.',
  brand: {
    '@type': 'Brand',
    name: 'Vivo',
  },
  offers: {
    '@type': 'Offer',
    url: AFFILIATE_URL,
    priceCurrency: 'INR',
    price: '39999',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '8.5',
    bestRating: '10',
    reviewCount: '1',
  },
}

const specs = [
  { icon: Cpu, label: 'Processor', value: 'MediaTek Dimensity 9300+ (4nm) — Octa-Core' },
  { icon: Monitor, label: 'Display', value: '6.78" 1.5K 120Hz Curved AMOLED, HDR10+' },
  { icon: Camera, label: 'Camera', value: '50MP Sony IMX989 OIS Main + 50MP Ultra-Wide' },
  { icon: Battery, label: 'Battery', value: '5400mAh — 120W FlashCharge' },
  { icon: Smartphone, label: 'OS', value: 'Funtouch OS 14 (Android 14)' },
]

const pros = [
  'MediaTek Dimensity 9300+ handles heavy gaming and multitasking with zero lag',
  '1.5K 120Hz AMOLED panel is bright and vivid even in outdoor Indian sunlight',
  '120W FlashCharge gets you from 0 to 100% in under 25 minutes',
  'Sony IMX 50MP camera takes brilliant low-light and portrait photos',
  'Solid build quality with premium glass back finish',
]

const cons = [
  'Funtouch OS includes some pre-installed apps that need manual uninstalling',
  'No 3.5mm headphone jack (requires USB-C adapter or TWS earbuds)',
]

const ratingBreakdown = [
  { label: 'Performance', score: 9.0 },
  { label: 'Display', score: 8.8 },
  { label: 'Camera', score: 8.6 },
  { label: 'Battery Life', score: 8.5 },
  { label: 'Value for Money', score: 7.8 },
]

export default function VivoSmartphonePage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Mobiles', href: '/category/mobiles' },
            { label: 'Android', href: '/category/mobiles/android' },
            { label: 'Vivo X100 Pro 5G' },
          ]}
        />

        {/* Top Disclosure Banner */}
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
        </div>

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/vivo-smartphone.png"
              alt="Vivo X100 Pro 5G Smartphone"
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
                Flagship Performance
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                Vivo X100 Pro 5G
                <span className="block text-base font-normal text-muted-foreground mt-1">1.5K 120Hz Curved AMOLED · Dimensity 9300+ · 120W FlashCharge</span>
              </h1>
            <div className="mt-4 text-sm text-muted-foreground font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/80"></span>
              Published: July 2026
            </div>

            </div>

            {/* Byline & Dates */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>Reviewed by <span className="font-medium text-foreground">Aditya Patwa</span> · Mobile Editor</span>
              <span>Published: <span className="font-medium text-foreground">July 20, 2026</span></span>
              <span>Updated: <span className="font-medium text-foreground">July 26, 2026</span></span>
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
              <p className="text-xs text-muted-foreground mb-1">Price & Availability on Amazon India</p>
              <p className="text-xl font-bold text-foreground">Check Latest Price</p>
              <p className="text-xs text-muted-foreground mt-1">Includes 120W Fast Charger in box + protective case</p>
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
            the Vivo X100 Pro 5G offers fantastic value for buyers in India.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Best Fast-Charging Smartphone</p>
              <p className="font-bold text-lg">Vivo X100 Pro 5G</p>
            </div>
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

        {/* Disclosure */}
        <p className="text-xs text-muted-foreground text-center mb-8">
          This page contains affiliate links. If you purchase through our links, TechSelect earns a commission at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="underline hover:text-foreground transition-colors">
            Read our affiliate disclosure.
          </Link>
        </p>
      
        <AuthorBio
          name="Arjun Mehta"
          role="Hardware Editor"
          bio="Arjun is a consumer technology expert with over 6 years of experience testing laptops, smartphones, and smart home devices. Before joining TechSelect, he was a senior reviewer at a leading Indian tech publication."
        />
      </main>
      <Footer />
    </>
  )
}
