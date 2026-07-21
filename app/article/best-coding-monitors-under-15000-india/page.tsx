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
  title: 'Vivo Flagship Smartphone (2025) Review | TechSelect',
  description: 'An honest, definitive review of the Vivo Flagship Smartphone. We evaluated the AMOLED display, gaming limits, and camera capabilities in real Indian conditions.',
  openGraph: {
    title: 'Vivo Flagship Smartphone (2025) Review',
    description: 'Vivo Flagship Smartphone review — is it the best premium Android alternative?',
    type: 'article',
  },
}

const articleData = {
  title: 'Vivo Flagship (2025): A Premium Android Challenger',
  subtitle: 'AMOLED display, massive battery, and a versatile camera setup — here is the unfiltered truth about Vivo’s latest.',
  author: 'Karan Malhotra',
  authorRole: 'Mobile Editor',
  publishDate: 'July 20, 2026',
  updateDate: 'July 21, 2026',
  readTime: '6 min read',
  category: 'Mobiles',
}

const keyTakeaways = [
  'The Vivo flagship features a gorgeous high-refresh-rate AMOLED display that is incredibly vibrant and clear under direct Sunlight.',
  'It has exceptional fast charging support, taking the battery from 10% to 100% in under 35 minutes.',
  'The Funtouch OS UI feels fast and smooth, although it still comes with a few pre-installed system applications that need disabling.',
  'Excellent build quality with curved glass back panel that resists fingerprint smudges.',
]

const products = [
  {
    rank: 1,
    name: 'Vivo Premium Smartphone (2025)',
    tagline: 'Best Screen & Battery Combo',
    rating: 8.5,
    image: '/products/vivo-smartphone.png',
    bestFor: 'Android users who want a stunning media display and rapid charging speed.',
    features: ['High-refresh-rate AMOLED curved display', 'Super-fast charging capability (charger in box)', 'Vibrant multi-lens rear camera system', 'Sleek glass back design with premium finishes'],
    pros: ['Vibrant screen colors with deep ink-blacks', 'Superb battery life easily lasting a full work day', 'Fast charging cuts down desk cord time significantly', 'Includes protective phone cover in the retail box'],
    cons: ['Some pre-installed system apps are present', 'No official IP68 rating on entry-level storage tiers'],
    verdict: 'Buy the Vivo smartphone if you prioritize display quality and rapid charging. It is a stunning media player and daily driver that keeps up with demanding social media, video playback, and casual gaming workloads.',
  },
]

const comparisonData = {
  headers: ['Feature', 'Vivo Smartphone (2025)', 'Standard Budget Android'],
  rows: [
    ['Display Panel', '120Hz curved AMOLED', '90Hz LCD / flat screen'],
    ['Charging Time', 'Under 35 mins', '60-90 minutes'],
    ['Build', 'Premium glass back', 'Chunky plastic cabinet'],
  ],
}

const buyingGuideItems = [
  {
    title: 'Why AMOLED Displays are Vital for Media',
    content: 'Standard LCD panels rely on single backlight columns, causing blacks to look gray in dark rooms. AMOLED screen pixels emit their own light, allowing true infinite contrast and deep ink blacks. Once you switch to AMOLED, you cannot go back.',
  },
]

const faqItems = [
  {
    question: 'Does the charger come in the retail box?',
    answer: 'Yes, Vivo includes the high-speed flash charger and a premium protection cover inside the retail packaging, unlike Apple or Samsung.',
  },
]

const VIVO_AFFILIATE_URL = 'https://www.amazon.in/vivo-Storage-Additional-Exchange-Offers/dp/B0GX94B58L?linkCode=ll2&tag=techstor0caaf-21&linkId=0ad2973400e1638013e37d63debba88a&ref_=as_li_ss_tl'

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
                    Let’s face it: Most smartphone buyers care about two things: Is the screen gorgeous, and does it charge fast enough?
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We tested the latest Vivo flagship smartphone in real-world Indian conditions. We ran GPS navigation, streamed high-definition videos over 5G networks, and recorded outdoor samples. Here is our unfiltered review of how it performs.
                  </p>
                </div>

                <KeyTakeaways items={keyTakeaways} />

                <ComparisonTable headers={comparisonData.headers} rows={comparisonData.rows} />

                <div className="mt-12 space-y-12">
                  {products.map((product) => (
                    <ProductSection
                      key={product.name}
                      {...product}
                      amazonUrl={VIVO_AFFILIATE_URL}
                    />
                  ))}
                </div>

                <BuyingGuide items={buyingGuideItems} />

                <FAQ items={faqItems} />

                <FinalVerdict
                  title="Our Final Recommendation"
                  content="The Vivo Flagship Smartphone is an excellent Android daily driver for anyone who streams media, values fast charging, and wants a premium feel without overspending. It is highly recommended."
                  topPick={{
                    name: 'Vivo Flagship Smartphone',
                    href: VIVO_AFFILIATE_URL,
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
      <StickyCTA productName="Vivo Smartphone" href={VIVO_AFFILIATE_URL} />
    </>
  )
}
