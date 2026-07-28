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
  title: 'Best Robot Vacuum Cleaners with Mop in India (2026): Hands-Off Floor Cleaning',
  description: 'Comparing Dreame L10s Ultra and ECOVACS Deebot T50 Pro for Indian marble, tile, and carpet floors. Tested 7000Pa vs 15000Pa suction, self-emptying docks, and obstacle avoidance.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Self-Emptying Robot Vacuums & Mops for Indian Homes (2026)',
  description: 'Real-world floor cleaning evaluation of robot vacuums on Indian dust, tile stains, pet hair, and thresholds: MopExtend corner reach, anti-tangle brushes, and LiDAR navigation.',
  image: 'https://techselect.blog/products/dreame-robot-vacuum-mop.png',
  datePublished: '2026-07-26',
  dateModified: '2026-07-28',
  author: {
    '@type': 'Person',
    name: 'Karan Malhotra',
    jobTitle: 'Mobile & Smart Home Editor',
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
    name: 'Dreame L10s Ultra Robot Vacuum & Mop',
    tagline: 'Best All-in-One Robot Vacuum with MopExtend Corner Cleaning',
    rating: 9.4,
    image: '/products/dreame-robot-vacuum-mop.png',
    bestFor: 'Large Indian apartments & houses with hard tile/marble floors wanting 75 days of hands-off dust collection.',
    features: [
      '7,000Pa Vormax Suction Power',
      'MopExtend robotic arm extends outward to clean room corners & wall edges',
      'Anti-Tangle hair cutting roller brush prevents pet hair wraps',
      'Automated self-emptying base station washes and dries mop pads',
    ],
    pros: [
      'MopExtend reaching arm leaves zero uncleaned gap along skirtings',
      'Self-emptying dust bag holds up to 75 days of debris',
      'AI 3D obstacle avoidance prevents getting stuck on cables',
    ],
    cons: [
      'Base station requires dedicated floor space near power socket',
      'Higher initial investment',
    ],
    verdict: 'The Dreame L10s Ultra is our top hands-off cleaning recommendation for Indian homes, combining corner mopping with zero hair tangle maintenance.',
    amazonUrl: 'https://www.amazon.in/Self-Emptying-Hands-Off-Collection-MopExtend-Anti-Tangle/dp/B0H2DD8Z5T?tag=techstor0caaf-21',
  },
  {
    rank: 2,
    name: 'ECOVACS Deebot T50 Pro Omni',
    tagline: 'Ultra-Slim 8.1cm Profile with 15,000Pa Suction Power',
    rating: 9.2,
    image: '/products/ecovacs-t50-pro.png',
    bestFor: 'Homes with low-clearance sofas, beds, and heavy dust accumulation.',
    features: [
      '15,000Pa Extreme Suction Power',
      'Ultra-slim 8.1cm height slips under low furniture',
      'ZeroTangle 2.0 dual-comb hair anti-wrap technology',
      'Hot water mop washing at 70°C in Omni station',
    ],
    pros: [
      '15,000Pa suction pulls deep fine dust out of carpet fibers',
      'Ultra-thin 8.1cm design cleans under low beds and couches',
      '70°C hot water mop washing dissolves kitchen grease',
    ],
    cons: [
      'Requires frequent water tank refills for very large houses',
    ],
    verdict: 'For homes with low furniture clearance and tough kitchen grease stains, the ECOVACS Deebot T50 Pro Omni is a phenomenal cleaning machine.',
    amazonUrl: 'https://www.amazon.in/ECOVACS-Deebot-T50-Pro-Omni/dp/B0F2H3942Z?tag=techstor0caaf-21',
  },
]

const faqs = [
  {
    question: 'Are robot vacuums effective on Indian tile and marble floors?',
    answer: 'Yes! High-end robot vacuums with dual rotary spinning mop pads apply downforce pressure while scrubbing tile and marble floors, effectively removing fine Indian dust, footprints, and light spill stains.',
  },
  {
    question: 'How often do you need to refill water and empty the dust bag on a self-emptying robot vacuum?',
    answer: 'The dust collection bag in the base station lasts 60 to 75 days before needing replacement. The clean water tank typically needs a quick refill every 3 to 5 days depending on house size.',
  },
]

export default function BestRobotVacuumsGuidePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Smart Home', href: '/category/smart-home' },
            { label: 'Robot Vacuums', href: '/category/smart-home/robot-vacuums' },
            { label: 'Best Robot Vacuums Guide' },
          ]}
        />

        {/* Affiliate Disclosure Notice */}
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
        </div>

        {/* Title Header */}
        <header className="mt-8 mb-8 border-b border-border pb-8">
          <span className="inline-block text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
            Smart Home Guide
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Best Robot Vacuum Cleaners with Mop in India (2026)
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span>By <strong className="text-foreground">Karan Malhotra</strong> (Mobile &amp; Smart Home Editor)</span>
            <span>•</span>
            <span>Published: July 26, 2026</span>
            <span>•</span>
            <span>Updated: July 28, 2026</span>
          </div>
        </header>

        {/* Intro */}
        <p className="text-lg font-medium text-muted-foreground leading-relaxed mb-8">
          Self-emptying robot vacuums with automated mop washing docks have revolutionized floor maintenance in Indian households. We tested top models on fine dust, turmeric stains, pet hair, and thresholds up to 20mm.
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
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="amazon-btn flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl whitespace-nowrap"
                >
                  Check Price on Amazon.in
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* Final Verdict */}
        <FinalVerdict
          title="Which Robot Vacuum Should You Buy?"
          content="If you want corner-reaching mop extension and 75-day dust independence, choose the Dreame L10s Ultra. If your house has low furniture under 9cm clearance, pick the ECOVACS Deebot T50 Pro Omni."
          topPick={{
            name: 'Dreame L10s Ultra Robot Vacuum & Mop',
            href: 'https://www.amazon.in/Self-Emptying-Hands-Off-Collection-MopExtend-Anti-Tangle/dp/B0H2DD8Z5T?tag=techstor0caaf-21',
          }}
        />

        {/* Author Bio */}
        <AuthorBio
          name="Karan Malhotra"
          role="Mobile &amp; Smart Home Editor"
          bio="Karan tests smart home robots, automated mop docks, and home vacuuming systems for TechSelect. He conducts obstacle avoidance challenges and floor dirt pickup tests in real home setups."
        />

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />
      </main>
      <Footer />
    </>
  )
}
