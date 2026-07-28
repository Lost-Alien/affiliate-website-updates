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
  title: 'Best Smart Home Robot Vacuums for Indian Homes (2026) | TechSelect',
  description: 'We tested leading self-emptying and mopping robot vacuums on tile, marble, and carpet floors in Indian households.',
  openGraph: {
    title: 'Best Smart Home Robot Vacuums for Indian Homes (2026)',
    description: 'Autonomous floor cleaning with extreme suction and anti-tangle brush technology.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Smart Home Robot Vacuums for Indian Homes (2026)',
  description: 'Testing robot vacuums for heavy dust and hair handling on Indian flooring.',
  author: {
    '@type': 'Person',
    name: 'Aditya Patwa',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techselect.blog/icon.svg',
    },
  },
  datePublished: '2026-03-15',
  dateModified: '2026-07-26',
}

const articleData = {
  title: 'Best Smart Home Robot Vacuums for Indian Homes (2026)',
  subtitle: 'Say goodbye to daily sweeping and mopping with automated LiDAR navigation.',
  author: 'Aditya Patwa',
  authorRole: 'Smart Home Editor',
  publishDate: 'March 15, 2026',
  updateDate: 'July 26, 2026',
  readTime: '7 min read',
  category: 'Smart Home',
}

const keyTakeaways = [
  'Suction power above 10,000 Pa is essential for lifting fine dust from marble and tile floors.',
  'Anti-tangle brush designs prevent long hair from jamming the main roller.',
  'Low-profile bodies under 9cm allow access under beds and low sofas.',
]

const products = [
  {
    rank: 1,
    name: 'ECOVACS DEEBOT T50 PRO',
    tagline: 'Best Overall Robot Vacuum & Mop',
    rating: 8.8,
    image: '/products/ecovacs-t50-pro.png',
    amazonUrl: 'https://www.amazon.in/ECOVACS-T50-PRO-Ultra-Thin-Zerotangle/dp/DRJPJLNQ?tag=techstor0caaf-21',
    bestFor: 'Homeowners wanting total hands-free floor cleaning with zero hair wrap.',
    features: ['12,800 Pa suction power', 'ZeroTangle anti-hair wrap roller', 'Ultra-thin 8.3cm height', 'Vibrating mopping pads'],
    pros: ['Extreme suction capability', 'Navigates low furniture smoothly', 'Advanced AI obstacle avoidance'],
    cons: ['Requires floor space for base station'],
    verdict: 'The ECOVACS DEEBOT T50 PRO is the ultimate choice for Indian homes demanding automated daily cleaning.',
  },
]

const comparisonData = {
  headers: ['Feature', 'ECOVACS DEEBOT T50 PRO', 'Basic Robot Vacuums'],
  rows: [
    ['Suction Power', '12,800 Pa', '3,000 Pa'],
    ['Body Height', '8.3 cm', '10.2 cm'],
  ],
}

const buyingGuideItems = [
  {
    title: 'Why Low Profile Height Matters',
    content: 'Dust accumulates under furniture. A low height profile lets the robot clean under beds without getting stuck.',
  },
]

const faqItems = [
  {
    question: 'How often does the dust bag need replacing?',
    answer: 'The auto-empty station holds up to 60-90 days of dust depending on house size.',
  },
]

export default function BestRobotVacuumsPage() {
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
              title="Final Verdict: Best Robot Vacuum Cleaner"
              content="The ECOVACS DEEBOT T50 PRO offers unmatched suction, anti-tangle technology, and slim design."
              topPick={{
                name: 'ECOVACS DEEBOT T50 PRO',
                href: 'https://www.amazon.in/ECOVACS-T50-PRO-Ultra-Thin-Zerotangle/dp/DRJPJLNQ?tag=techstor0caaf-21',
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
        productName="ECOVACS DEEBOT T50 PRO"
        href="https://www.amazon.in/ECOVACS-T50-PRO-Ultra-Thin-Zerotangle/dp/DRJPJLNQ?tag=techstor0caaf-21"
      />
      <Footer />
    </>
  )
}
