import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { Star, Check, ExternalLink, Cpu, Smartphone, Battery, Camera, ShieldCheck, ThumbsUp, ThumbsDown } from 'lucide-react'

const AFFILIATE_URL = "https://www.amazon.in/vivo-V70-Elite-Additional-Exchange/dp/B0GHS4WQYV?tag=techstor0caaf-21"

export const metadata: Metadata = {
  title: 'Vivo V70 Elite 5G Review: Pro Aura Light Camera & Design | TechSelect India',
  description: 'Hands-on review of Vivo V70 Elite 5G smartphone featuring ZEISS portrait camera, 1.5K 120Hz AMOLED screen, and 90W FlashCharge battery.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Vivo V70 Elite 5G Smartphone',
  image: 'https://techselect.blog/products/vivo-v70-elite.png',
  description: 'Vivo V70 Elite 5G flagship smartphone with studio-grade portrait camera, 120Hz 1.5K AMOLED display, and high-efficiency 90W fast charging.',
  brand: {
    '@type': 'Brand',
    name: 'Vivo',
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

export default function VivoV70ElitePage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Mobiles', href: '/category/mobiles' },
            { label: 'Smartphones', href: '/category/mobiles/smartphones' },
            { label: 'Vivo V70 Elite 5G' },
          ]}
        />

        {/* Top Disclosure Banner */}
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate, I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
        </div>

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/vivo-v70-elite.png"
              alt="Vivo V70 Elite 5G Smartphone"
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold text-xs rounded-full mb-3">
              Best Camera Smartphone for Portraits
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Vivo V70 Elite 5G
            </h1>
            <p className="text-muted-foreground text-sm mb-6">
              Studio Aura Portrait Camera · 1.5K 120Hz Curved AMOLED · 90W FlashCharge
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.2</span>
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
              <p className="text-xs text-muted-foreground mt-1">Additional Exchange Bonus Available · Free Express Delivery</p>
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
                <Smartphone className="h-4 w-4 text-accent shrink-0" />
                <span>6.78-inch 1.5K 120Hz</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Cpu className="h-4 w-4 text-accent shrink-0" />
                <span>MediaTek Dimensity 5G</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Battery className="h-4 w-4 text-accent shrink-0" />
                <span>5500 mAh + 90W Charge</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Camera className="h-4 w-4 text-accent shrink-0" />
                <span>Studio Aura Light Camera</span>
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
                <span>Smart Aura Light fill system produces studio-quality night portraits with natural skin tones.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Ultra-thin 3D curved glass body feels extremely premium and light in the hand.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>90W FlashCharge refills 50% battery in just 19 minutes.</span>
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
                <span>Pre-installed bloatware apps require manual uninstall during initial setup.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">&ndash;</span>
                <span>No stereo speaker balance equal to gaming-focused rivals.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-6 w-6 text-accent" />
            <h2 className="font-serif text-xl font-bold text-foreground">How We Tested This Phone</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Evaluated portrait photo quality across low-light indoor cafe and outdoor night environments, timed 90W FlashCharge speeds from 1% to 100%, and stress-tested CPU throttling under multi-tasking loads.
          </p>
        </section>

        {/* Verdict CTA */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Final Verdict: 9.2 / 10</h2>
          <p className="max-w-2xl mx-auto text-sm text-primary-foreground/80 mb-6 leading-relaxed">
            If social photography, portrait image quality, fast 90W charging, and sleek ergonomic design are your top smartphone priorities, the Vivo V70 Elite 5G is a stellar choice.
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
