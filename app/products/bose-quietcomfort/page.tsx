import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { Star, Check, ExternalLink, Headphones, Battery, Bluetooth, Weight, ShieldCheck } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0FDKPFLFP?linkCode=ll2&tag=techstor0caaf-21&linkId=122c872c91a5eabaf2731569876ee2aa&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'Bose QuietComfort Wireless Headphones Review | TechSelect India',
  description:
    'In-depth review of Bose QuietComfort Wireless Headphones. World-class active noise cancellation, comfort, and battery life for Indian buyers.',
  openGraph: {
    title: 'Bose QuietComfort Review — Gold Standard Noise Cancellation',
    description: 'Full review of Bose QuietComfort Wireless Headphones featuring 24h battery life, plush comfort, and industry-leading ANC.',
    images: [{ url: '/products/bose-quietcomfort.png' }],
  },
}

const specs = [
  { icon: Headphones, label: 'Acoustics', value: '35mm TriPort acoustic architecture' },
  { icon: ShieldCheck, label: 'ANC', value: 'Quiet & Aware Modes (Customizable ANC)' },
  { icon: Battery, label: 'Battery', value: 'Up to 24 hours (USB-C quick charge)' },
  { icon: Bluetooth, label: 'Bluetooth', value: 'Bluetooth 5.3 with Multipoint pairing' },
  { icon: Weight, label: 'Weight', value: '250g — Ultra lightweight' },
]

const pros = [
  'Best-in-class active noise cancellation blocks engine drone & office chatter',
  'Exceptionally comfortable plush earcups for 8+ hour wear',
  'Adjustable EQ via Bose Music App',
  'Multipoint Bluetooth connects to phone & laptop simultaneously',
  'Physical button controls are reliable and easy to operate',
]

const cons = [
  '₹29,900 price tag is premium',
  'Design is mostly unchanged from previous QuietComfort 45',
  'Case is slightly bulky for compact bags',
]

const ratingBreakdown = [
  { label: 'Noise Cancellation', score: 9.9 },
  { label: 'Comfort', score: 9.8 },
  { label: 'Sound Quality', score: 8.8 },
  { label: 'Battery Life', score: 9.0 },
  { label: 'Value for Money', score: 8.4 },
]

export default function BoseQuietComfortPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Audio', href: '/category/audio' },
            { label: 'Headphones', href: '/category/audio/headphones' },
            { label: 'Bose QuietComfort' },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/bose-quietcomfort.png"
              alt="Bose QuietComfort Wireless Noise Cancelling Headphones"
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
                Editor&apos;s Choice — Best ANC Headphones
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                Bose QuietComfort Wireless
                <span className="block text-base font-normal text-muted-foreground mt-1">Active Noise Cancelling Over-Ear Headphones</span>
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.1</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Superb</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Current Price on Amazon India</p>
              <p className="text-3xl font-bold text-foreground">₹29,900</p>
              <p className="text-xs text-muted-foreground mt-1">Includes carrying case, 3.5mm audio cable & USB-C cable</p>
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
            <h3 className="font-serif text-lg font-semibold text-foreground">Noise Cancellation</h3>
            <p>
              Bose remains the king of active noise cancellation. The QuietComfort Wireless creates an envelope of silence
              that silences traffic, airplane engine hum, and noisy AC compressors. Aware Mode lets transparent sound in
              naturally when you need to hear announcements.
            </p>

            <h3 className="font-serif text-lg font-semibold text-foreground mt-6">Comfort & Design</h3>
            <p>
              Weighing only 250g with synthetic leather cushions and minimal clamping force, you can wear these for a full 8-hour
              workday without ear fatigue or headband pressure points.
            </p>

            <h3 className="font-serif text-lg font-semibold text-foreground mt-6">Battery Life & Controls</h3>
            <p>
              24 hours of playback on a single charge with USB-C quick charging (15 minutes gives 3 hours). Physical buttons on
              the earcups mean no accidental touch gestures when adjusting position.
            </p>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12 bg-primary text-primary-foreground rounded-2xl p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold mb-4">Our Verdict</h2>
          <p className="text-primary-foreground/90 leading-relaxed mb-6 text-base">
            If noise cancellation and all-day wearing comfort are your top priorities, the Bose QuietComfort Wireless Headphones
            are the gold standard. Perfect for frequent travelers and open-office workers.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Best ANC Headphones 2025</p>
              <p className="font-bold text-lg">Bose QuietComfort Wireless</p>
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
