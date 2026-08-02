import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { AuthorBio } from '@/components/article/author-bio'
import { Star, Check, ExternalLink, Cpu, HardDrive, Monitor, ShieldCheck, ThumbsUp, ThumbsDown } from 'lucide-react'

const AFFILIATE_URL = "https://www.amazon.in/ASUS-3050-4GB-Upgradeable-Graphite-FA506NCQ-HN006W/dp/B0GW85JTBN?tag=techstor0caaf-21"

export const metadata: Metadata = {
  title: 'ASUS TUF Gaming A15 Review: Best Budget Gaming Laptop | TechSelect India',
  description: 'Hands-on review of ASUS TUF Gaming A15 featuring AMD Ryzen processor, NVIDIA GeForce RTX 3050 4GB GPU, 144Hz display, and upgradeable storage.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ASUS TUF Gaming A15 (RTX 3050 4GB)',
  image: 'https://techselect.blog/products/asus-tuf-gaming-a15.png',
  description: 'ASUS TUF Gaming A15 laptop powered by AMD Ryzen processor, NVIDIA GeForce RTX 3050 4GB VRAM graphics, 144Hz display, and MIL-STD-810H durability.',
  brand: {
    '@type': 'Brand',
    name: 'ASUS',
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

export default function AsusTufGamingA15Page() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Computers', href: '/category/computers' },
            { label: 'Laptops', href: '/category/computers/laptops' },
            { label: 'ASUS TUF Gaming A15' },
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
              src="/products/asus-tuf-gaming-a15.png"
              alt="ASUS TUF Gaming A15 Laptop"
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold text-xs rounded-full mb-3">
              Best Value Gaming Laptop
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              ASUS TUF Gaming A15
            </h1>
            <div className="mt-4 text-sm text-muted-foreground font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/80"></span>
              Published: July 2026
            </div>

            <p className="text-muted-foreground text-sm mb-4">
              RTX 3050 4GB GPU · 144Hz FHD Display · Upgradeable RAM &amp; Dual SSD Slots
            </p>

            {/* Byline & Dates */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-6">
              <span>Reviewed by <span className="font-medium text-foreground">Abhay Gupta</span> · Hardware Editor</span>
              <span>Published: <span className="font-medium text-foreground">July 10, 2026</span></span>
              <span>Updated: <span className="font-medium text-foreground">July 26, 2026</span></span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.1</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Great Value</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border mb-6">
              <p className="text-xs text-muted-foreground mb-1">Price & Availability on Amazon India</p>
              <p className="text-xl font-bold text-foreground">Check Latest Price</p>
              <p className="text-xs text-muted-foreground mt-1">Includes Windows 11 Home + Office · MIL-STD Military Grade Durability</p>
            </div>

            {/* CTA */}
            <>
<a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="amazon-btn flex items-center justify-center gap-2 w-full py-4 px-6 font-semibold rounded-xl transition-colors text-base shadow-sm"
            >
              Check Price on Amazon.in (Earns Commission)
              <ExternalLink className="h-4 w-4" />
            </a>
<p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight">
              Product prices and availability are accurate as of the date/time indicated and are subject to change.
            </p>
</>

            {/* Quick Specs */}
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Cpu className="h-4 w-4 text-accent shrink-0" />
                <span>AMD Ryzen Processor</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Monitor className="h-4 w-4 text-accent shrink-0" />
                <span>NVIDIA RTX 3050 4GB</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <Monitor className="h-4 w-4 text-accent shrink-0" />
                <span>15.6-inch 144Hz FHD</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                <HardDrive className="h-4 w-4 text-accent shrink-0" />
                <span>Upgradeable RAM & SSD</span>
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
                <span>Solid 1080p gaming performance at 60+ FPS in AAA titles with DLSS enabled.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Military-grade MIL-STD-810H durability chassis resists drops and vibrations.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Dual M.2 NVMe slots and SO-DIMM slots allow easy future RAM and storage upgrades.</span>
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
                <span>Fan noise reaches ~48dB in Turbo thermal mode during intensive gaming.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">&ndash;</span>
                <span>Base model comes with 8GB RAM which should be upgraded to 16GB for heavy multitasking.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-6 w-6 text-accent" />
            <h2 className="font-serif text-xl font-bold text-foreground">How We Tested This Laptop</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tested using 3DMark TimeSpy, Cyberpunk 2077 benchmark runs at 1080p, Cinebench R23 thermal throttling loops, and battery rundown tests during video playback and coding sessions.
          </p>
        </section>

        {/* Verdict CTA */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Final Verdict: 9.1 / 10</h2>
          <p className="max-w-2xl mx-auto text-sm text-primary-foreground/80 mb-6 leading-relaxed">
            The ASUS TUF Gaming A15 remains one of the best budget gaming laptops in India, offering upgradeability, military-grade build quality, and reliable 1080p gaming frame rates.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md mx-auto">
            <>
<a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="amazon-btn flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              Buy on Amazon.in (Earns Commission)
              <ExternalLink className="h-4 w-4" />
            </a>
<p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight">
              Product prices and availability are accurate as of the date/time indicated and are subject to change.
            </p>
</>
          </div>
        </section>
      
        <AuthorBio
          name="Abhay Gupta"
          role="Hardware Editor"
          bio="Arjun is a consumer technology expert with over 6 years of experience testing laptops, smartphones, and smart home devices. Before joining TechSelect, he was a senior reviewer at a leading Indian tech publication."
        />
      </main>
      <Footer />
    </>
  )
}
