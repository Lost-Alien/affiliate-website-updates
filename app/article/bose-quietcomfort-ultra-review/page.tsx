import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { JsonLd } from '@/components/json-ld'
import { ArticleHeader } from '@/components/article/article-header'
import { KeyTakeaways } from '@/components/article/key-takeaways'
import { ProductSection } from '@/components/article/product-section'
import { FinalVerdict } from '@/components/article/final-verdict'
import { StickyCTA } from '@/components/article/sticky-cta'

export const metadata: Metadata = {
  title: 'Bose QuietComfort Headphones Detailed Review | TechSelect',
  description: 'In-depth review of Bose QuietComfort Wireless Headphones. World-class ANC, acoustic isolation, and long-session comfort tested.',
  openGraph: {
    title: 'Bose QuietComfort Headphones Review',
    description: 'Full review of Bose QuietComfort Wireless Headphones with noise cancelling benchmarks.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bose QuietComfort Headphones Review',
  description: 'Full review of Bose QuietComfort Wireless Headphones.',
  author: {
    '@type': 'Person',
    name: 'Dev Kumar Sharma',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techselect.blog/icon.svg',
    },
  },
  datePublished: '2026-04-01',
  dateModified: '2026-07-26',
}

const articleData = {
  title: 'Bose QuietComfort Headphones Detailed Review',
  subtitle: 'The gold standard for noise cancellation and long-haul flight comfort.',
  author: 'Dev Kumar Sharma',
  authorRole: 'Audio Editor',
  publishDate: 'April 1, 2026',
  updateDate: 'July 26, 2026',
  readTime: '6 min read',
  category: 'Audio',
}

const keyTakeaways = [
  'Best-in-class Active Noise Cancellation silences jet engine rumble and street traffic.',
  'Lightweight 250g chassis with plush ear cushions allows all-day listening without fatigue.',
  'Reliable physical button controls prevent accidental touch triggers.',
]

const products = [
  {
    rank: 1,
    name: 'Bose QuietComfort Wireless Headphones',
    tagline: 'World-Class Noise Cancellation',
    rating: 9.1,
    image: '/products/bose-quietcomfort.png',
    amazonUrl: 'https://www.amazon.in/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0FDKPFLFP?tag=techstor0caaf-21',
    bestFor: 'Frequent travelers, remote workers, and anyone needing deep acoustic focus.',
    features: ['Hybrid active noise cancellation', '24-hour battery life', 'Multi-point Bluetooth pairing', 'Compact folding design'],
    pros: ['Unbeatable low-frequency noise suppression', 'Superior wearing comfort', 'Physical buttons'],
    cons: ['Battery life lower than 60-hour competitors'],
    verdict: 'If active noise cancelling is your primary goal, nothing tops the Bose QuietComfort.',
  },
]

export default function BoseQuietComfortReviewPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <ArticleHeader {...articleData} />

        <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-10">
            <KeyTakeaways items={keyTakeaways} />

            {products.map((product) => (
              <ProductSection key={product.name} {...product} />
            ))}

            <FinalVerdict
              title="Final Verdict"
              content="The Bose QuietComfort Wireless Headphones deliver peaceful quietness wherever you go."
              topPick={{
                name: 'Bose QuietComfort Wireless',
                href: 'https://www.amazon.in/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0FDKPFLFP?tag=techstor0caaf-21',
              }}
            />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <StickyCTA
        productName="Bose QuietComfort Wireless"
        href="https://www.amazon.in/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0FDKPFLFP?tag=techstor0caaf-21"
      />
      <Footer />
    </>
  )
}
