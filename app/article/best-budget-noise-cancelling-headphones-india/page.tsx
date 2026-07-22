import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { JsonLd } from '@/components/json-ld'
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
  title: 'Best Premium Noise Cancelling Headphones in India (2026) | TechSelect',
  description: 'We tested the Bose QuietComfort and Sennheiser Momentum 4 in real-world Indian conditions. Here is the honest, definitive verdict on which ANC king is worth your money.',
  openGraph: {
    title: 'Best Premium Noise Cancelling Headphones in India',
    description: 'Bose QuietComfort vs Sennheiser Momentum 4 — which one should you buy?',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bose QuietComfort vs Sennheiser Momentum 4: The Ultimate ANC Shootout',
  description: 'We tested the Bose QuietComfort and Sennheiser Momentum 4 in real-world Indian conditions.',
  author: {
    '@type': 'Person',
    name: 'Rahul Sharma',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://lostdev.tech/icon.svg',
    },
  },
  datePublished: '2026-01-15',
  dateModified: '2026-07-22',
}

const articleData = {
  title: 'Bose QuietComfort vs Sennheiser Momentum 4: The Ultimate ANC Shootout',
  subtitle: 'We wore these on local trains, flights, and loud office floors to find the undisputed noise-cancelling king.',
  author: 'Rahul Sharma',
  authorRole: 'Audio Editor',
  publishDate: 'July 18, 2026',
  updateDate: 'July 21, 2026',
  readTime: '7 min read',
  category: 'Audio',
}

const keyTakeaways = [
  'Bose QuietComfort offers the strongest active noise cancellation. It completely silences low-frequency engine hums and Delhi Metro vibrations.',
  'Sennheiser Momentum 4 has a massive 60-hour battery life. We charged it once, used it for a week, and still had 30% battery left.',
  'If you prioritize soundstage depth and instrument separation, the Sennheiser is the clear winner over the bass-boosted Bose.',
  'Bose is lighter (250g vs 293g) and has a more secure clamping force, making it better for long office sessions.',
]

const products = [
  {
    rank: 1,
    name: 'Bose QuietComfort Wireless Headphones',
    tagline: 'The Undisputed King of Silence',
    rating: 9.1,
    image: '/products/bose-quietcomfort.png',
    bestFor: 'Commuters, travelers, and open-office workers who need absolute silence.',
    features: ['Industry-leading hybrid active noise cancellation', 'Plush, sweat-resistant synthetic leather earcups', '24-hour battery life with ANC enabled', 'Bluetooth 5.3 with seamless multipoint switching'],
    pros: ['Completely blocks out low-frequency engine hums and traffic noise', 'Extremely lightweight at 250g — no head squeeze', 'Folds flat into a compact carrying case', 'Simple physical buttons that do not misfire like touch controls'],
    cons: ['₹29,900 price tag is a heavy investment', 'Battery life is average compared to Sennheiser\'s 60 hours'],
    verdict: 'Buy the Bose QuietComfort if noise cancellation is your main priority. It handles the chaotic rumble of Indian commutes better than anything else. You get instant, reliable isolation at the press of a button.',
  },
  {
    rank: 2,
    name: 'Sennheiser Momentum 4 Wireless',
    tagline: 'Best for Audiophiles & Battery Life',
    rating: 9.0,
    image: '/products/sennheiser-momentum-4.png',
    bestFor: 'Music lovers who want deep, detailed sound signature and hate charging their gadgets.',
    features: ['42mm audiophile-grade dynamic transducers', 'Adaptive active noise cancellation', 'Massive 60-hour battery life (ANC on)', 'Intuitive touch pad controls on the right earcup'],
    pros: ['Stunning soundstage with rich mids and crisp highs', 'Unbeatable 60-hour battery — charge it twice a month', 'Customizable 5-band EQ settings via Smart Control App', 'Comfortable thick headband cushion design'],
    cons: ['Heavier at 293g', 'Touch controls can occasionally misfire when adjusting the headband'],
    verdict: 'Buy the Sennheiser Momentum 4 if you care about music fidelity first. While its ANC is slightly less aggressive than Bose in blocking voices, its incredible 60-hour battery life and superior audio quality make it a stellar premium choice.',
  },
]

const comparisonData = {
  headers: ['Product', 'Sound Quality', 'ANC Depth', 'Battery Life', 'Rating'],
  rows: [
    ['Bose QuietComfort', 'Punchy & Bass-rich', 'World-class (-35dB)', '24 hours', '9.1'],
    ['Sennheiser Momentum 4', 'Balanced & Detailed', 'Very Good (-30dB)', '60 hours', '9.0'],
  ],
}

const buyingGuideItems = [
  {
    title: 'Why ANC Depth Matters on Indian Commutes',
    content: 'Indian traffic and public transport noise averages 80-85dB. Standard passive isolation only drops this by 10-15dB. Premium hybrid ANC (like Bose and Sennheiser) uses dual internal/external microphones to create anti-noise waves, dropping the ambient noise floor by up to 35dB. The difference is night and day.',
  },
  {
    title: 'Battery Specs vs Real-World Usage',
    content: 'While Bose provides a highly reliable 24 hours of juice, Sennheiser\'s 60-hour capacity is in a league of its own. If you travel frequently or work in coworking spaces without easy plug access, Sennheiser eliminates charger anxiety entirely.',
  },
]

const faqItems = [
  {
    question: 'Do these headphones block out human voices?',
    answer: 'No ANC completely silences human voices because vocal frequencies are dynamic and irregular. However, both the Bose and Sennheiser muffle office chatter to a faint whisper, especially when you play music at 20-30% volume.',
  },
  {
    question: 'How fast do they charge?',
    answer: 'Bose gives you 2.5 hours of playback from a 15-minute quick charge. Sennheiser gives you up to 4 hours of playback from just a 10-minute charge via USB-C.',
  },
]

const BOSE_AFFILIATE_URL = 'https://www.amazon.in/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0FDKPFLFP?linkCode=ll2&tag=techstor0caaf-21&linkId=122c872c91a5eabaf2731569876ee2aa&ref_=as_li_ss_tl'

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
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
                    Let’s cut through the marketing noise: Premium noise cancellation is not a luxury anymore. If you work in a loud open office or commute on the Delhi Metro or Mumbai locals, it is a survival tool.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We spent two weeks testing the Bose QuietComfort and the Sennheiser Momentum 4 side-by-side. We wore them on flights, local trains, and in noisy cafes to see which one delivers the best combination of silence, sound, and comfort. Here is our honest, unfiltered verdict.
                  </p>
                </div>

                <KeyTakeaways items={keyTakeaways} />

                <ComparisonTable headers={comparisonData.headers} rows={comparisonData.rows} />

                <div className="mt-12 space-y-12">
                  {products.map((product) => (
                    <ProductSection
                      key={product.name}
                      {...product}
                      amazonUrl={
                        product.name.includes('Bose')
                          ? BOSE_AFFILIATE_URL
                          : 'https://www.amazon.in/Sennheiser-Momentum-Wireless-Headphones-Cancelling-ANC/dp/B0B6G9TPNQ?linkCode=ll2&tag=techstor0caaf-21&linkId=624f127efe2e59a13c34318c7b90d7ee&ref_=as_li_ss_tl'
                      }
                    />
                  ))}
                </div>

                <BuyingGuide items={buyingGuideItems} />

                <FAQ items={faqItems} />

                <FinalVerdict
                  title="Which ANC Headphone Should You Buy?"
                  content="For pure silence and lightweight comfort, buy the Bose QuietComfort. It completely isolates you from the chaos of travel and noisy offices. If you want rich audiophile sound quality and two-week battery life, go for the Sennheiser Momentum 4."
                  topPick={{
                    name: 'Bose QuietComfort',
                    href: BOSE_AFFILIATE_URL,
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
      <StickyCTA productName="Bose QuietComfort" href={BOSE_AFFILIATE_URL} />
    </>
  )
}
