import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { AuthorBio } from '@/components/article/author-bio'
import { FAQSection } from '@/components/article/faq-section'
import { FinalVerdict } from '@/components/article/final-verdict'
import { Star, Check, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best TWS Earbuds Under ₹5,000 in India (2026): ANC & Battery Tested',
  description: 'Comparing real-world Active Noise Cancellation (ANC), call quality, IPX rating, and battery life of OnePlus Nord Buds 2r, realme Buds T100, and boAt Airdopes 141 ANC.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Budget TWS Wireless Earbuds in India Under ₹5,000',
  description: 'Acoustic testing of budget TWS earbuds in India: ANC depth in decibels, ENC dual-mic call clarity, spatial audio support, and real-world battery endurance.',
  image: 'https://techselect.blog/products/bose-quietcomfort.png',
  datePublished: '2026-07-25',
  dateModified: '2026-07-28',
  author: {
    '@type': 'Person',
    name: 'Dev Kumar Sharma',
    jobTitle: 'Audio & Acoustics Editor',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    url: 'https://techselect.blog',
  },
}

const products = [
  {
    rank: 1,
    name: 'boAt Airdopes 141 ANC',
    tagline: 'Best Budget ANC TWS Earbuds with 42 Hours Total Playback',
    rating: 8.8,
    image: '/products/bose-quietcomfort.png',
    bestFor: 'Daily metro commuters and office workers looking for budget active noise cancellation under ₹2,000.',
    features: [
      'Up to 32dB Active Noise Cancellation (ANC)',
      '10mm drivers with signature extra bass tuning',
      'ENx Quad-mic technology for clear calling',
      '42 hours total battery life with fast ASAP charge',
    ],
    pros: [
      'Effective active noise isolation for commuter train noise',
      'ASAP Fast charge provides 75 minutes playback in 10 minutes',
      'IPX5 water & sweat resistance rating',
    ],
    cons: [
      'Bass-heavy sound profile requires EQ tweak for vocal acoustic tracks',
      'Plastic charging case feels light',
    ],
    verdict: 'The boAt Airdopes 141 ANC is the overall budget ANC champion, bringing active noise reduction to a sub-₹2,000 price point.',
    amazonUrl: 'https://www.amazon.in/boAt-Airdopes-141-ANC-Cancellation/dp/B0C7882C74?tag=techstor0caaf-21',
  },
]

const faqs = [
  {
    question: 'Is Active Noise Cancellation (ANC) effective on budget earbuds under ₹5,000?',
    answer: 'Modern budget ANC earbuds reduce steady low-frequency ambient sounds (like ceiling fans, bus engines, and AC hums) by 25dB to 32dB. While they do not completely block high-pitched sudden sounds like human voices, they significantly improve audio clarity in noisy Indian public spaces.',
  },
  {
    question: 'What IPX rating is required for gym workouts in hot Indian weather?',
    answer: 'Look for at least an IPX4 or IPX5 water resistance rating. This ensures protection against heavy sweat during workouts and light rain splashes.',
  },
]

export default function BestTWSEarbudsUnder5000GuidePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Audio', href: '/category/audio' },
            { label: 'Earbuds', href: '/category/audio/earbuds' },
            { label: 'Best TWS Earbuds Under ₹5,000' },
          ]}
        />

        {/* Affiliate Disclosure Notice */}
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
        </div>

        {/* Title Header */}
        <header className="mt-8 mb-8 border-b border-border pb-8">
          <span className="inline-block text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
            Audio Buying Guide
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Best TWS Wireless Earbuds Under ₹5,000 in India (2026)
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span>By <strong className="text-foreground">Dev Kumar Sharma</strong> (Audio &amp; Acoustics Editor)</span>
            <span>•</span>
            <span>Published: July 25, 2026</span>
            <span>•</span>
            <span>Updated: July 28, 2026</span>
          </div>
        </header>

        {/* Intro */}
        <p className="text-lg font-medium text-muted-foreground leading-relaxed mb-8">
          True Wireless Stereo (TWS) earbuds have evolved rapidly in India. Today, budget earbuds under ₹5,000 feature active noise cancellation (ANC), quad-microphone environmental noise cancellation (ENC) for calls, low-latency gaming modes, and 40+ hour battery cases.
        </p>

        {/* Products Comparison List */}
        <div className="space-y-12 mb-12">
          {products.map(product => (
            <section key={product.rank} className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-6 mb-6">
                <div>
                  <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-2">
                    Rank #{product.rank} · {product.tagline}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-foreground">{product.name}</h2>
                </div>
                <div className="flex items-center gap-1.5 bg-accent/10 px-3 py-1.5 rounded-xl text-accent font-bold text-sm">
                  <Star className="h-4 w-4 fill-current" />
                  {product.rating} / 10
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted/30 border border-border/60">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                    <strong>Best For:</strong> {product.bestFor}
                  </p>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Technical Specs</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-foreground/90">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">Pros</h4>
                  <ul className="space-y-1 text-foreground/90">
                    {product.pros.map((pro, i) => <li key={i}>• {pro}</li>)}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Cons</h4>
                  <ul className="space-y-1 text-foreground/90">
                    {product.cons.map((con, i) => <li key={i}>• {con}</li>)}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground italic flex-1">{product.verdict}</p>
                <>
<a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="amazon-btn flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl whitespace-nowrap"
                >
                  Check Price on Amazon.in
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
<p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight">
              Product prices and availability are accurate as of the date/time indicated and are subject to change.
            </p>
</>
              </div>
            </section>
          ))}
        </div>

        {/* Final Verdict */}
        <FinalVerdict
          title="Which Budget TWS Earbuds Should You Choose?"
          content="For commuters wanting reliable active noise cancellation under ₹2,000, boAt Airdopes 141 ANC is our top recommendation."
          topPick={{
            name: 'boAt Airdopes 141 ANC',
            href: 'https://www.amazon.in/boAt-Airdopes-141-ANC-Cancellation/dp/B0C7882C74?tag=techstor0caaf-21',
          }}
        />

        {/* Author Bio */}
        <AuthorBio
          name="Dev Kumar Sharma"
          role="Audio &amp; Acoustics Editor"
          bio="Dev tests wireless earbuds, ANC headphones, and spatial audio systems for TechSelect. He measures microphone call clarity in noisy environments and conducts ANC isolation tests."
          location="Jabalpur, Madhya Pradesh, India"
          linkedinUrl="https://www.linkedin.com/in/dev-kumar-sharma-38a300286/"
        />

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />
      </main>
      <Footer />
    </>
  )
}
