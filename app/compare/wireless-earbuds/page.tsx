import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { AffiliateDisclosure } from '@/components/article/affiliate-disclosure'
import { ComparisonHeader } from '@/components/comparison/comparison-header'
import { ComparisonOverview } from '@/components/comparison/comparison-overview'
import { DetailedComparison } from '@/components/comparison/detailed-comparison'
import { WinnerCards } from '@/components/comparison/winner-cards'
import { QuickVerdict } from '@/components/comparison/quick-verdict'
import { ReferencesSection } from '@/components/article/references-section'

export const metadata: Metadata = {
  title: 'Best Wireless Earbuds Comparison 2024 | TechSelect',
  description: 'Compare the top wireless earbuds side by side. See how Apple AirPods Pro, Sony WF-1000XM5, and Samsung Galaxy Buds2 Pro stack up in sound quality, ANC, battery life, and more.',
  openGraph: {
    title: 'Best Wireless Earbuds Comparison 2024',
    description: 'Compare the top wireless earbuds side by side.',
    type: 'article',
  },
}

const comparisonData = {
  title: 'Best Wireless Earbuds Compared',
  subtitle: 'Side-by-side comparison of our top picks for Indian buyers',
  category: 'Audio',
  author: 'Rahul Sharma',
  authorRole: 'Audio Editor',
  publishDate: 'January 18, 2024',
  readTime: '8 min read',
}

const products = [
  {
    id: 'airpods-pro-2',
    name: 'Apple AirPods Pro (2nd Gen)',
    rating: 9.3,
    badge: 'Best for iPhone',
    specs: {
      'Driver Size': '11mm',
      'Battery (Earbuds)': '6 hours',
      'Battery (Total)': '30 hours',
      'ANC': 'Yes',
      'Water Resistance': 'IPX4',
      'Bluetooth': '5.3',
      'Weight (per earbud)': '5.3g',
      'Wireless Charging': 'Yes (MagSafe)',
      'Multipoint': 'Apple devices only',
      'Codecs': 'AAC, SBC',
    },
    highlights: ['Best Apple integration', 'Excellent ANC', 'Spatial Audio', 'Adaptive Transparency'],
    href: '/article/best-wireless-earbuds-budget',
  },
  {
    id: 'sony-wf-1000xm5',
    name: 'Sony WF-1000XM5',
    rating: 9.2,
    badge: 'Best Sound',
    specs: {
      'Driver Size': '8.4mm',
      'Battery (Earbuds)': '8 hours',
      'Battery (Total)': '24 hours',
      'ANC': 'Yes',
      'Water Resistance': 'IPX4',
      'Bluetooth': '5.3',
      'Weight (per earbud)': '5.9g',
      'Wireless Charging': 'Optional',
      'Multipoint': 'Yes',
      'Codecs': 'AAC, SBC, LDAC, LC3',
    },
    highlights: ['Audiophile sound', 'Best-in-class ANC', 'LDAC support', 'Lightweight'],
    href: '/review/sony-wh-1000xm5',
  },
  {
    id: 'galaxy-buds2-pro',
    name: 'Samsung Galaxy Buds2 Pro',
    rating: 8.9,
    badge: 'Best Value',
    specs: {
      'Driver Size': '10mm',
      'Battery (Earbuds)': '5 hours',
      'Battery (Total)': '29 hours',
      'ANC': 'Yes',
      'Water Resistance': 'IPX7',
      'Bluetooth': '5.3',
      'Weight (per earbud)': '5.5g',
      'Wireless Charging': 'Yes',
      'Multipoint': 'Samsung devices',
      'Codecs': 'AAC, SBC, SSC',
    },
    highlights: ['Great value', '360 Audio', 'IPX7 rating', 'Compact design'],
    href: '/article/best-wireless-earbuds-budget',
  },
]

const winners = [
  {
    category: 'Best for iPhone Users',
    product: 'Apple AirPods Pro (2nd Gen)',
    reason: 'Seamless integration, excellent ANC, and Spatial Audio make these the top choice for Apple users.',
    href: '/article/best-wireless-earbuds-budget',
  },
  {
    category: 'Best Sound Quality',
    product: 'Sony WF-1000XM5',
    reason: 'Audiophile-grade sound with LDAC support and exceptional noise cancellation.',
    href: '/review/sony-wh-1000xm5',
  },
  {
    category: 'Best for Samsung Users',
    product: 'Samsung Galaxy Buds2 Pro',
    reason: '360 Audio, great value, and seamless integration with Galaxy devices.',
    href: '/article/best-wireless-earbuds-budget',
  },
  {
    category: 'Best for Workouts',
    product: 'Samsung Galaxy Buds2 Pro',
    reason: 'IPX7 water resistance handles heavy sweat and rain better than competitors.',
    href: '/article/best-wireless-earbuds-budget',
  },
]

const verdictData = {
  winner: {
    name: 'Apple AirPods Pro (2nd Gen)',
    href: '/article/best-wireless-earbuds-budget',
  },
  summary: 'For most iPhone users in India, the Apple AirPods Pro (2nd Gen) offers the best overall experience. Android users should consider the Sony WF-1000XM5 for superior sound quality, or the Samsung Galaxy Buds2 Pro for great value and Samsung ecosystem integration. All three options deliver excellent ANC and premium build quality.',
}

export default function ComparisonPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ComparisonHeader {...comparisonData} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <AffiliateDisclosure />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed">
                  Choosing between premium wireless earbuds can be overwhelming with so many excellent options available. To help Indian buyers decide, we have put our top three picks side by side, comparing everything from sound quality to battery life.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Each of these earbuds excels in different areas. Below, you will find a detailed comparison to help you pick the right pair for your needs, budget, and smartphone ecosystem.
                </p>
              </div>

              <ComparisonOverview products={products} />

              <DetailedComparison products={products} />

              <WinnerCards winners={winners} />

              <QuickVerdict {...verdictData} />

              <ReferencesSection />
            </div>

            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
