import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { Star, Check, ExternalLink, Zap, Shield, Wifi, Smartphone, Timer, DollarSign } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/TP-Link-Tapo-P110-Energy-Monitoring/dp/B097XZ3X7H?tag=techstor0caaf-21'

export const metadata: Metadata = {
  title: 'TP-Link Tapo P110 Wi-Fi Smart Plug Review | TechSelect India',
  description:
    'Detailed review of TP-Link Tapo P110 16A smart plug with real-time energy monitoring, Alexa, Google Home, and app controls.',
  openGraph: {
    title: 'TP-Link Tapo P110 Wi-Fi Smart Plug Review — Best Smart Plug in India?',
    description: 'Full review of TP-Link Tapo P110 with energy monitoring, 16A capacity, scheduling, and voice assistant integration.',
    images: [{ url: '/products/tp-link-tapo-smart-plug.png' }],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'TP-Link Tapo P110 Wi-Fi Smart Plug (16A)',
  image: 'https://techselect.blog/products/tp-link-tapo-smart-plug.png',
  description: '16A Wi-Fi Smart Plug with Energy Monitoring, schedule timers, remote control, and voice assistant compatibility.',
  brand: {
    '@type': 'Brand',
    name: 'TP-Link',
  },
  offers: {
    '@type': 'Offer',
    url: AFFILIATE_URL,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '9.1',
    bestRating: '10',
    reviewCount: '1',
  },
}

const specs = [
  { icon: Zap, label: 'Power Rating', value: '16A / 3680W High Load Support' },
  { icon: DollarSign, label: 'Energy Monitor', value: 'Real-time & Historical Power Consumption' },
  { icon: Wifi, label: 'Connectivity', value: '2.4GHz Wi-Fi (No Hub Required)' },
  { icon: Smartphone, label: 'App Support', value: 'Tapo App (iOS & Android)' },
  { icon: Timer, label: 'Features', value: 'Schedules, Timers & Away Mode' },
  { icon: Shield, label: 'Safety', value: 'Flame-Retardant ABS, Overload Protection' },
]

const pros = [
  'Real-time power consumption tracking helps monitor electricity bills',
  'Supports 16A heavy appliances like geysers, ACs, and water heaters',
  'Rock-solid Wi-Fi connection with fast response times',
  'Seamless integration with Amazon Alexa and Google Assistant',
  'Away mode randomly turns devices on/off for home security',
]

const cons = [
  'Requires 2.4GHz Wi-Fi band (does not work on 5GHz Wi-Fi)',
  'App setup requires creating a TP-Link Tapo account',
]

const ratingBreakdown = [
  { label: 'Energy Tracking', score: 9.6 },
  { label: 'Ease of Setup', score: 9.3 },
  { label: 'Connectivity', score: 9.2 },
  { label: 'Build Quality', score: 9.0 },
  { label: 'Value for Money', score: 9.4 },
]

export default function TapoSmartPlugPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Smart Home', href: '/category/smart-home' },
            { label: 'Smart Plugs', href: '/category/smart-home/smart-plugs' },
            { label: 'TP-Link Tapo P110' },
          ]}
        />

        {/* Top Disclosure Banner */}
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate, I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
        </div>

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/tp-link-tapo-smart-plug.png"
              alt="TP-Link Tapo P110 Smart Plug"
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
                Editor&apos;s Choice — Best Smart Plug India
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                TP-Link Tapo P110 (16A)
                <span className="block text-base font-normal text-muted-foreground mt-1">Wi-Fi Smart Plug with Energy Monitoring</span>
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.1</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Excellent</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Price & Availability on Amazon India</p>
              <p className="text-xl font-bold text-foreground">Check Latest Price</p>
              <p className="text-xs text-muted-foreground mt-1">16A Rated · Energy Monitor · Flame Retardant</p>
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

        {/* Review Content */}
        <section className="mb-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Full Review</h2>
          <div className="prose prose-sm max-w-none space-y-4 text-muted-foreground leading-relaxed">
            <h3 className="font-serif text-lg font-semibold text-foreground">Why Energy Monitoring Matters</h3>
            <p>
              The standout feature of the TP-Link Tapo P110 is its live energy monitoring. Through the Tapo app, you can view real-time wattage consumption, total daily usage in kWh, and estimated electricity cost. For heavy appliances like geysers or portable heaters, this feature pays for itself by revealing power spikes.
            </p>
            <h3 className="font-serif text-lg font-semibold text-foreground mt-6">Heavy Duty 16A Rating</h3>
            <p>
              Unlike 10A mini plugs meant only for lamps or phone chargers, the P110 supports up to 16 Amps (3680W max load). You can safely plug in heavy kitchen appliances, room heaters, water pumps, or heavy-duty power strips without thermal risks.
            </p>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12 bg-primary text-primary-foreground rounded-2xl p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold mb-4">Our Verdict</h2>
          <p className="text-primary-foreground/90 leading-relaxed mb-6 text-base">
            The TP-Link Tapo P110 is the ultimate smart plug for Indian households. With 16A rating, reliable Wi-Fi, and precise energy tracking, it turns traditional appliances into smart, cost-efficient devices seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Top Smart Home Pick</p>
              <p className="font-bold text-lg">TP-Link Tapo P110 (16A)</p>
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
      </main>
      <Footer />
    </>
  )
}
