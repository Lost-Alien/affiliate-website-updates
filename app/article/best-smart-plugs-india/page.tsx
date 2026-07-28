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
  title: 'Best Smart Plugs with Energy Monitoring in India (2026) | TechSelect',
  description: 'Automate your heavy home appliances and track real-time power consumption. Compare top 16A smart plugs for Indian sockets.',
  openGraph: {
    title: 'Best Smart Plugs with Energy Monitoring in India (2026)',
    description: 'Compare top 16A smart plugs for geysers, ACs, and home automation.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Smart Plugs with Energy Monitoring in India (2026)',
  description: 'Automate heavy appliances and monitor electricity consumption with 16A smart plugs.',
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
  datePublished: '2026-02-10',
  dateModified: '2026-07-26',
}

const articleData = {
  title: 'Best Smart Plugs with Energy Monitoring in India (2026)',
  subtitle: 'Automate geysers, air conditioners, and water pumps while cutting monthly electricity bills.',
  author: 'Aditya Patwa',
  authorRole: 'Mobile Editor',
  publishDate: 'February 10, 2026',
  updateDate: 'July 26, 2026',
  readTime: '6 min read',
  category: 'smart-home',
}

const keyTakeaways = [
  '16A smart plugs are required for heavy appliances like geysers, ACs, and water pumps in Indian homes.',
  'Real-time energy tracking displays active wattage and estimates monthly power consumption.',
  'Voice control via Alexa and Google Assistant lets you control appliances completely hands-free.',
]

const products = [
  {
    rank: 1,
    name: 'TP-Link Tapo P110 (16A)',
    tagline: 'Best Overall 16A Smart Plug with Energy Monitoring',
    rating: 9.1,
    image: '/products/tp-link-tapo-smart-plug.png',
    amazonUrl: 'https://www.amazon.in/TP-Link-Tapo-P110-Energy-Monitoring/dp/B097XZ3X7H?tag=techstor0caaf-21',
    bestFor: 'Homeowners who want live energy tracking for heavy appliances up to 3680W.',
    features: ['16A / 3680W heavy load rating', 'Real-time energy consumption tracking', 'Away mode for home security', 'Flame-retardant ABS construction'],
    pros: ['Accurate live wattage and monthly kWh metrics', 'Rock-solid 2.4GHz Wi-Fi connection', 'Fits standard 16A Indian 3-pin wall sockets'],
    cons: ['Requires 2.4GHz Wi-Fi network'],
    verdict: 'The TP-Link Tapo P110 is the single best smart plug in India. It handles heavy loads effortlessly and gives clear insight into electric bills.',
  },
]

const comparisonData = {
  headers: ['Feature', 'TP-Link Tapo P110', 'Generic 10A Plugs'],
  rows: [
    ['Max Current', '16 Amps (3680W)', '10 Amps (2300W)'],
    ['Heavy Appliances (AC/Geyser)', 'Supported', 'Not Supported (Fire Hazard)'],
    ['Energy Monitoring', 'Real-Time & Historical', 'None'],
  ],
}

const buyingGuideItems = [
  {
    title: '10A vs 16A Plugs: Why Amperage Matters in India',
    content: 'Standard 10A smart plugs are built for lamps and phone chargers. For water heaters, microwave ovens, or air conditioners, you must use a 16A rated plug with heavy-duty brass pins to prevent thermal melting.',
  },
]

const faqItems = [
  {
    question: 'Can a 16A smart plug turn off a geyser automatically?',
    answer: 'Yes, using the Tapo app or Alexa schedules, you can set your geyser to turn on 30 minutes before waking up and shut off automatically after 45 minutes.',
  },
]

export default function BestSmartPlugsPage() {
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
              title="Final Verdict: Which Smart Plug Should You Buy?"
              content="If you want to automate heavy 16A appliances and track energy usage, the TP-Link Tapo P110 is unmatched in quality and safety."
              topPick={{
                name: 'TP-Link Tapo P110 (16A)',
                href: 'https://www.amazon.in/TP-Link-Tapo-P110-Energy-Monitoring/dp/B097XZ3X7H?tag=techstor0caaf-21',
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
        productName="TP-Link Tapo P110 (16A)"
        href="https://www.amazon.in/TP-Link-Tapo-P110-Energy-Monitoring/dp/B097XZ3X7H?tag=techstor0caaf-21"
      />
      <Footer />
    </>
  )
}
