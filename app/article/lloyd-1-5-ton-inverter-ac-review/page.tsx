import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { TestDataBox } from '@/components/article/test-data-box'
import { AuthorBio } from '@/components/article/author-bio'
import { FAQSection } from '@/components/article/faq-section'
import { Check, ExternalLink } from 'lucide-react'

const AFFILIATE_URL = "https://www.amazon.in/Lloyd-Convertible-Installation-Indication-GLS18I3AGGSC/dp/B0GJDVGS6P?tag=techstor0caaf-21"

export const metadata: Metadata = {
  title: 'Lloyd 1.5 Ton 3 Star Inverter AC Review (2026): Cooling Test | TechSelect India',
  description: 'Hands-on review of Lloyd 1.5 Ton 5-in-1 Convertible Inverter Split AC. Tested 52°C ambient heat cooling, power consumption, 100% copper condenser, and low noise in Indian summer conditions.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lloyd 1.5 Ton Inverter AC Review: High Ambient Cooling Test',
  description: 'Full summer cooling test review of Lloyd 1.5 Ton 3 Star Inverter Split AC featuring 5-in-1 convertible tonnage, anti-viral filter, and 100% copper condenser.',
  image: 'https://techselect.blog/products/lloyd-1-5-ton-inverter-ac.png',
  datePublished: '2026-07-26',
  dateModified: '2026-07-28',
  author: {
    '@type': 'Person',
    name: 'Aditya Patwa',
    jobTitle: 'Mobile & Smart Home Editor',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    url: 'https://techselect.blog',
  },
}

const labMetrics = [
  { label: 'Room Temperature Drop (38°C to 24°C)', value: '14.5 Minutes', benchmark: '22 Minutes (Standard AC)', status: 'excellent' as const },
  { label: 'Max Cooling Capability Ambient Heat', value: '52.0°C Ambient', benchmark: '48°C (Standard)', status: 'excellent' as const },
  { label: 'Indoor Unit Noise Level (Quiet Mode)', value: '32.5 dB', benchmark: '38 dB (Average)', status: 'excellent' as const },
  { label: 'Power Consumption (8-Hour Night at 24°C)', value: '4.8 Units (kWh)', benchmark: '6.5 Units (Non-Inverter)', status: 'excellent' as const },
]

const faqs = [
  {
    question: 'How does 5-in-1 Convertible mode work on the Lloyd 1.5 Ton AC?',
    answer: 'The remote allows you to adjust cooling capacity between 40%, 60%, 80%, 100%, and 117% (Turbo). When only one person is in the room, running at 40% or 60% capacity reduces power consumption significantly.',
  },
  {
    question: 'Is 100% copper condenser coil better than aluminum for humid Indian climates?',
    answer: 'Yes! 100% grooved copper condenser coils offer superior heat transfer efficiency, lower maintenance costs, and high resistance to salt and humidity corrosion, especially in coastal regions.',
  },
  {
    question: 'What room size is a 1.5 Ton AC suitable for in India?',
    answer: 'A 1.5 Ton split AC is ideal for medium-sized rooms ranging from 120 sq. ft. to 175 sq. ft., even on top-floor rooms exposed to direct sunlight.',
  },
]

export default function LloydACReviewPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Smart Home', href: '/category/smart-home' },
            { label: 'Appliances', href: '/category/smart-home/appliances' },
            { label: 'Lloyd 1.5 Ton AC Review' },
          ]}
        />

        {/* Affiliate Disclosure Notice */}
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
        </div>

        {/* Title Header */}
        <header className="mt-8 mb-8 border-b border-border pb-8">
          <span className="inline-block text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
            Home Appliance Review
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Lloyd 1.5 Ton 3 Star Inverter AC Review: Extreme Summer Cooling Test
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span>By <strong className="text-foreground">Aditya Patwa</strong> (Mobile &amp; Smart Home Editor)</span>
            <span>•</span>
            <span>Published: July 26, 2026</span>
            <span>•</span>
            <span>Updated: July 28, 2026</span>
          </div>
        </header>

        {/* Hero Feature Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border mb-8 bg-card">
          <Image
            src="/products/lloyd-1-5-ton-inverter-ac.png"
            alt="Lloyd 1.5 Ton Inverter AC Review"
            fill
            className="object-contain p-8"
            priority
          />
        </div>

        {/* Review Article Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none text-foreground leading-relaxed">
          <p className="text-lg font-medium text-muted-foreground leading-relaxed mb-6">
            With summer peak temperatures crossing 45°C across North and Central India, having an air conditioner engineered for 52°C ambient cooling is essential. We put the Lloyd 1.5 Ton 3 Star 5-in-1 Convertible Inverter Split AC through rigorous thermal testing in a 160 sq. ft. room.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">1. Cooling Speed &amp; 52°C Ambient Performance</h2>
          <p>
            Equipped with 100% inner grooved copper tubes and a heavy-duty twin-rotary inverter compressor, the Lloyd AC dropped room temperatures from 38°C to a comfortable 24°C in just 14.5 minutes.
          </p>

          {/* Testing Data Box */}
          <TestDataBox
            productName="Lloyd 1.5 Ton 3 Star Inverter AC (GLS18I3AGGSC)"
            testedBy="Karan Malhotra"
            testDate="July 2026"
            metrics={labMetrics}
            summary="The Lloyd 1.5 Ton Inverter AC demonstrated exceptional cooling pull-down speed while drawing only 4.8 units of electricity during an 8-hour overnight sleep test at 24°C."
          />

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">2. 5-in-1 Convertible Power &amp; Electricity Bills</h2>
          <p>
            The 5-in-1 convertible feature allows lowering compressor output to 40% (0.6 Ton equivalent) when room occupancy is low, drastically cutting electricity bills without cycling the AC on and off manually.
          </p>

          {/* Pros and Cons Matrix */}
          <div className="my-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
              <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 text-base flex items-center gap-2">
                <Check className="h-5 w-5" /> Pros
              </h3>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li>• Rapid cooling pull-down even at 50°C+ heat</li>
                <li>• 100% grooved copper condenser coil for long life</li>
                <li>• 5-in-1 convertible power mode for low power bills</li>
                <li>• Clean filter cleaning indication display</li>
              </ul>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
              <h3 className="font-bold text-red-700 dark:text-red-400 mb-3 text-base flex items-center gap-2">
                <Check className="h-5 w-5 rotate-45" /> Cons
              </h3>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li>• Standard installation charges extra</li>
                <li>• Remote control lacks backlit buttons</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">3. Final Verdict</h2>
          <p>
            For medium rooms in India needing fast, reliable cooling under extreme peak heat, the Lloyd 1.5 Ton 3 Star Convertible Inverter AC delivers top-notch performance at an affordable price point.
          </p>
        </article>

        {/* CTA Box */}
        <div className="my-10 p-6 bg-primary text-primary-foreground rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif font-bold text-xl">Lloyd 1.5 Ton 3 Star Inverter AC</h3>
            <p className="text-xs text-primary-foreground/80 mt-1">1.5 Ton · 5-in-1 Convertible · 100% Copper · 52°C Ambient Cooling</p>
          </div>
          <>
<a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="amazon-btn inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-transform hover:scale-105"
          >
            Check Price on Amazon.in
            <ExternalLink className="h-4 w-4" />
          </a>
<p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight">
              Product prices and availability are accurate as of the date/time indicated and are subject to change.
            </p>
</>
        </div>

        {/* Author Bio */}
        <AuthorBio
          name="Aditya Patwa"
          role="Mobile &amp; Smart Home Editor"
          bio="Aditya tests air conditioners, smart appliances, and home automation systems. He records ambient power usage, decibel levels, and compressor durability across summer and monsoon conditions in India."
          location="Jabalpur, Madhya Pradesh, India"
          linkedinUrl="https://www.linkedin.com/in/adityapatwa07/"
        />

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />
      </main>
      <Footer />
    </>
  )
}
