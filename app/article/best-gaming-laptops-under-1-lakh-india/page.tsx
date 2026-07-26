import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { JsonLd } from '@/components/json-ld'
import { ArticleHeader } from '@/components/article/article-header'
import { KeyTakeaways } from '@/components/article/key-takeaways'
import { ComparisonTable } from '@/components/article/comparison-table'
import { ProductSection } from '@/components/article/product-section'
import { BuyingGuide } from '@/components/article/buying-guide'
import { FAQ } from '@/components/article/faq'
import { FinalVerdict } from '@/components/article/final-verdict'
import { StickyCTA } from '@/components/article/sticky-cta'

export const metadata: Metadata = {
  title: 'Best Gaming & Developer Laptops Under ₹1 Lakh in India (2026) | TechSelect',
  description: 'Looking for maximum GPU power and thermal efficiency under ₹1 Lakh? We tested top gaming laptops for developers and gamers.',
  openGraph: {
    title: 'Best Gaming Laptops Under ₹1 Lakh in India (2026)',
    description: 'High refresh rate displays, RTX GPUs, and high-performance CPUs benchmarked.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Gaming & Developer Laptops Under ₹1 Lakh in India (2026)',
  description: 'Comprehensive benchmark comparison of high-performance laptops in India.',
  author: {
    '@type': 'Person',
    name: 'Priya Sharma',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techselect.blog/icon.svg',
    },
  },
  datePublished: '2026-03-01',
  dateModified: '2026-07-26',
}

const articleData = {
  title: 'Best Gaming & Developer Laptops Under ₹1 Lakh in India (2026)',
  subtitle: 'Compile code in seconds and render high FPS games without thermal throttling.',
  author: 'Priya Sharma',
  authorRole: 'Hardware Editor',
  publishDate: 'March 1, 2026',
  updateDate: 'July 26, 2026',
  readTime: '8 min read',
  category: 'Computers',
}

const keyTakeaways = [
  'NVIDIA RTX graphics cards with high TGP wattage deliver superior 1440p gaming performance.',
  '16GB DDR5 RAM minimum is required for running modern IDEs, Docker, and games simultaneously.',
  'Dual-fan cooling systems prevent thermal throttling under heavy compilation workloads.',
]

const products = [
  {
    rank: 1,
    name: 'ASUS ROG Strix G16',
    tagline: 'Ultimate Flagship Powerhouse',
    rating: 9.4,
    image: '/products/asus-rog-strix-g16.jpg',
    amazonUrl: 'https://www.amazon.in/dp/B0F5BH7D1L?th=1&tag=techstor0caaf-21',
    bestFor: 'Gamers and heavy developers who demand desktop-grade CPU and GPU performance.',
    features: ['Intel Core Ultra 9 processor', 'NVIDIA GeForce RTX graphics', '32GB DDR5 high-speed RAM', '2.5K 240Hz IPS panel'],
    pros: ['Monster 240Hz display', 'Incredible cooling headroom with liquid metal thermal compound', 'RGB lighting aesthetic'],
    cons: ['Heavy power adapter'],
    verdict: 'The ASUS ROG Strix G16 is the ultimate machine for developers and gamers who want absolute maximum frame rates.',
  },
]

const comparisonData = {
  headers: ['Model', 'Display', 'GPU TGP', 'Cooling'],
  rows: [
    ['ASUS ROG Strix G16', '16" 2.5K 240Hz', '140W Max', 'Tri-Fan Liquid Metal'],
  ],
}

const buyingGuideItems = [
  {
    title: 'Why TGP (Total Graphics Power) Matters',
    content: 'Not all GPUs perform equally. An RTX graphics card running at 140W TGP can outperform a higher-tier card throttled at 75W TGP.',
  },
]

const faqItems = [
  {
    question: 'Is 16GB RAM enough for gaming and programming in 2026?',
    answer: '16GB is the sweet spot for modern gaming, though 32GB is recommended if you run multiple Docker containers or heavy virtual machines.',
  },
]

export default function BestGamingLaptopsPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <ArticleHeader {...articleData} />

        <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-10">
            <KeyTakeaways items={keyTakeaways} />
            <ComparisonTable {...comparisonData} />

            {products.map((product) => (
              <ProductSection key={product.name} {...product} />
            ))}

            <BuyingGuide items={buyingGuideItems} />
            <FAQ items={faqItems} />

            <FinalVerdict
              title="Final Verdict: Best High-Performance Laptop"
              content="The ASUS ROG Strix G16 stands tall as the definitive performance pick for serious gamers and software engineers."
              topPick={{
                name: 'ASUS ROG Strix G16',
                href: 'https://www.amazon.in/dp/B0F5BH7D1L?th=1&tag=techstor0caaf-21',
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
        productName="ASUS ROG Strix G16"
        href="https://www.amazon.in/dp/B0F5BH7D1L?th=1&tag=techstor0caaf-21"
      />
      <Footer />
    </>
  )
}
