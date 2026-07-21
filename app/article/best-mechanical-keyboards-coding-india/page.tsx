import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { AffiliateDisclosure } from '@/components/article/affiliate-disclosure'
import { ArticleHeader } from '@/components/article/article-header'
import { KeyTakeaways } from '@/components/article/key-takeaways'
import { ComparisonTable } from '@/components/article/comparison-table'
import { ProductSection } from '@/components/article/product-section'
import { BuyingGuide } from '@/components/article/buying-guide'
import { FAQ } from '@/components/article/faq'
import { FinalVerdict } from '@/components/article/final-verdict'
import { StickyCTA } from '@/components/article/sticky-cta'
import { ReferencesSection } from '@/components/article/references-section'

export const metadata: Metadata = {
  title: 'ECOVACS DEEBOT T50 PRO Robot Vacuum Review | TechSelect',
  description: 'An honest, definitive review of the ECOVACS DEEBOT T50 PRO. We evaluated the suction power, ZeroTangle anti-hair technology, and obstacle avoidance in Indian homes.',
  openGraph: {
    title: 'ECOVACS DEEBOT T50 PRO Robot Vacuum Review',
    description: 'ECOVACS DEEBOT T50 PRO review — is this the best smart home vacuum cleaner?',
    type: 'article',
  },
}

const articleData = {
  title: 'ECOVACS DEEBOT T50 PRO: The Smart Home Game Changer',
  subtitle: '12,800 Pa suction power, anti-tangle tech, and automated mopping — we put this vacuum through real home dust tests.',
  author: 'Karan Malhotra',
  authorRole: 'Smart Home Editor',
  publishDate: 'July 21, 2026',
  updateDate: 'July 21, 2026',
  readTime: '7 min read',
  category: 'Smart Home',
}

const keyTakeaways = [
  'ECOVACS DEEBOT T50 PRO delivers a massive 12,800 Pa suction power, easily lifting fine dust and heavy debris from carpets.',
  'The ZeroTangle anti-hair wrap technology prevents long hair from wrapping around the roller brush, eliminating manual cleaning.',
  'It has an ultra-thin 8.3cm profile, allowing it to navigate under low furniture, beds, and cabinets where dust accumulates.',
  'Advanced AI obstacle avoidance and LiDAR mapping prevent the vacuum from getting stuck on cables or shoes.',
]

const products = [
  {
    rank: 1,
    name: 'ECOVACS DEEBOT T50 PRO',
    tagline: 'Best Suction & Zero Hair Wrap',
    rating: 8.8,
    image: '/products/ecovacs-t50-pro.png',
    bestFor: 'Pet owners and busy homeowners who want fully autonomous floor cleaning.',
    features: ['12,800 Pa extreme suction performance', 'ZeroTangle anti-hair wrap roller system', 'Ultra-thin 8.3cm compact body height', 'Vibrating mopping pad with auto-lift feature'],
    pros: ['Incredibly strong suction picks up even fine flour dust', 'ZeroTangle system actually works — no hair wraps around the brush', 'Flawless LiDAR navigation mapping within minutes', 'Quiet operation during normal cleaning runs'],
    cons: ['₹49,900 is a significant smart home investment', 'Dustbin capacity requires periodic emptying if not using auto-empty station'],
    verdict: 'Buy the ECOVACS DEEBOT T50 PRO if you are tired of sweeping daily. It handles hair, dust, and spills on marble and wood floors flawlessly, leaving your home spotless with zero manual effort.',
  },
]

const comparisonData = {
  headers: ['Feature', 'ECOVACS DEEBOT T50 PRO', 'Standard Robot Vacuums'],
  rows: [
    ['Suction Power', '12,800 Pa', '2,000 - 4,000 Pa'],
    ['Body Profile Height', 'Ultra-thin (8.3 cm)', 'Chunky (9.8 - 10.5 cm)'],
    ['Brush Tangles', 'ZeroTangle anti-wrap', 'Requires manual cutting of hair'],
  ],
}

const buyingGuideItems = [
  {
    title: 'Why Suction and Height Profile Matter',
    content: 'Most dust settles under heavy couches and beds where standard vacuums cannot reach. An ultra-thin profile of under 9cm ensures complete room coverage. Combine this with suction power above 10,000 Pa, and the vacuum acts as a deep-cleaning sweep.',
  },
]

const faqItems = [
  {
    question: 'How does it handle carpet cleaning?',
    answer: 'The vacuum automatically detects carpets, boosts its suction to maximum (12,800 Pa), and lifts the damp mopping pads by 9mm to prevent the carpet from getting wet.',
  },
]

const ECOVACS_AFFILIATE_URL = 'https://www.amazon.in/ECOVACS-T50-PRO-Ultra-Thin-Zerotangle/dp/B0DRJPJLNQ?linkCode=ll2&tag=techstor0caaf-21&linkId=42263cbb289297ede12d9457887f1871&ref_=as_li_ss_tl'

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article>
          <ArticleHeader {...articleData} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <AffiliateDisclosure />
                
                <div className="prose prose-lg max-w-none mt-8">
                  <p className="text-lg text-foreground leading-relaxed font-semibold">
                    Sweeping and mopping every day is a waste of your time. If you have pets or long hair in your household, standard robot vacuums get clogged within three runs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We tested the new ECOVACS DEEBOT T50 PRO on marble, tile, and carpets. We scattered hair, dust, and food crumbs to see if its ZeroTangle brush and 12,800 Pa suction could deliver on their premium claims. Here is our unfiltered verdict.
                  </p>
                </div>

                <KeyTakeaways items={keyTakeaways} />

                <ComparisonTable headers={comparisonData.headers} rows={comparisonData.rows} />

                <div className="mt-12 space-y-12">
                  {products.map((product) => (
                    <ProductSection
                      key={product.name}
                      {...product}
                      amazonUrl={ECOVACS_AFFILIATE_URL}
                    />
                  ))}
                </div>

                <BuyingGuide items={buyingGuideItems} />

                <FAQ items={faqItems} />

                <FinalVerdict
                  title="The Smart Home Verdict"
                  content="The ECOVACS DEEBOT T50 PRO is one of the most capable and trouble-free robot vacuums available in India. If you want pristine floors daily without hair clogs, buy this model."
                  topPick={{
                    name: 'ECOVACS DEEBOT T50 PRO',
                    href: ECOVACS_AFFILIATE_URL,
                  }}
                />

                <ReferencesSection />
              </div>

              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <StickyCTA productName="ECOVACS DEEBOT T50 PRO" href={ECOVACS_AFFILIATE_URL} />
    </>
  )
}
