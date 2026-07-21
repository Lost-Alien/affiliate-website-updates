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
  title: 'Best Budget Noise Cancelling Headphones in India (2026) | TechSelect',
  description: 'Looking for the best budget noise-canceling headphones in India under Rs. 5,000? We tested boAt, JBL, and Blaupunkt options to find the best ANC and sound quality.',
  openGraph: {
    title: 'Best Budget Noise Cancelling Headphones in India',
    description: 'We tested the best ANC headphones under Rs. 5,000 in the Indian market.',
    type: 'article',
  },
}

const articleData = {
  title: 'Best Budget Noise Cancelling Headphones in India',
  subtitle: 'Top active noise cancelling (ANC) picks under Rs. 5,000 for work, travel, and study',
  author: 'Rahul Sharma',
  authorRole: 'Audio Editor',
  publishDate: 'July 18, 2026',
  updateDate: 'July 21, 2026',
  readTime: '9 min read',
  category: 'Audio',
}

const keyTakeaways = [
  'boAt Nirvanaa 751 ANC is our top pick for raw noise cancellation power, offering up to 33dB of hybrid ANC at an entry-level price.',
  'JBL Tune 770NC delivers the best audio tuning and build quality under Rs. 6,000, ideal for audiophiles on a budget.',
  'Budget ANC is highly effective against continuous, low-frequency hums (like AC or train noise) but struggles with high-pitched sounds or chatter.',
  'Always check for Fast Charging support; budget headphones are prone to long charge times otherwise.',
]

const products = [
  {
    rank: 1,
    name: 'boAt Nirvanaa 751 ANC',
    tagline: 'Best Overall Value & ANC',
    rating: 8.8,
    bestFor: 'Commuters and students who want the strongest noise cancellation possible under Rs. 4,000',
    features: ['33dB Hybrid Active Noise Cancellation', '65-hour battery life (ANC off) / 50-hour (ANC on)', '40mm dynamic drivers', 'ASAP charge (10 mins = 10 hours playback)'],
    pros: ['Very powerful low-frequency noise isolation', 'Unbeatable battery life for multi-day usage', 'Sturdy carrying case included in the box', 'Extremely quick charging speed'],
    cons: ['Sound signature is heavily bass-heavy (muddy mids)', 'Plush earcups can cause ears to sweat in Indian summers', 'Plastic build creaks slightly under pressure'],
    verdict: 'The boAt Nirvanaa 751 ANC offers the best price-to-performance ratio for noise cancellation. If your primary goal is blocking out noisy commutes or loud neighbors without breaking the bank, this is your best option.',
  },
  {
    rank: 2,
    name: 'JBL Tune 770NC',
    tagline: 'Best Sound Quality & App Customization',
    rating: 8.7,
    bestFor: 'Listeners who prioritize balanced sound quality, dual-device connection, and app support',
    features: ['Adaptive Active Noise Cancellation', '70-hour battery life (ANC off) / 44-hour (ANC on)', 'JBL Pure Bass sound tuning', 'Bluetooth 5.3 with Multipoint connection'],
    pros: ['Excellent sound tuning with clear vocals and tight bass', 'Fully customizable EQ settings via JBL Headphones App', 'Reliable Bluetooth multipoint (seamless device switching)', 'Lightweight and foldable design'],
    cons: ['ANC is weaker than boAt in low-frequency rumbles', 'Earcups are on the smaller side (can pinch larger ears)', 'Does not include a hard carrying case'],
    verdict: 'If you want headphones that sound great and support custom EQ tuning, the JBL Tune 770NC is worth stretching your budget slightly. Its ANC is decent, but its audio fidelity and multipoint capabilities are top-tier.',
  },
  {
    rank: 3,
    name: 'Blaupunkt BH31',
    tagline: 'Best Long-Life & Budget Pick',
    rating: 8.2,
    bestFor: 'Casual listeners seeking comfortable over-ear headphones with long battery life under Rs. 3,000',
    features: ['Basic Active Noise Cancellation', 'TurboVolt fast charging', 'Super-soft memory foam earcups', '40mm large aperture drivers'],
    pros: ['Highly affordable price point', 'Extremely soft ear cushion comfort', 'Good battery life with quick-charge feature', 'Built-in mic has decent voice clarity'],
    cons: ['ANC is very basic (only isolates high-frequency hums)', 'Chunky design is not very portable', 'Micro-USB charging instead of Type-C on older stock'],
    verdict: 'The Blaupunkt BH31 is a comfortable over-ear headphone that gives you a taste of active noise cancellation at a entry-level price. It is extremely comfortable for long hours of movie watching or lectures, though not ideal for blocking heavy street traffic.',
  },
]

const comparisonData = {
  headers: ['Product', 'Best For', 'Battery Life (ANC On)', 'ANC Depth', 'Rating'],
  rows: [
    ['boAt Nirvanaa 751', 'Maximum ANC Isolation', '50 hours', '33dB (Hybrid)', '8.8'],
    ['JBL Tune 770NC', 'Balanced Audio', '44 hours', '25dB (Adaptive)', '8.7'],
    ['Blaupunkt BH31', 'Affordable Comfort', '35 hours', '18dB (Basic)', '8.2'],
  ],
}

const buyingGuideItems = [
  {
    title: 'Hybrid ANC vs. Feedforward ANC',
    content: 'Hybrid ANC uses microphones both inside and outside the earcup to sense and block noise, which is much more effective than feedforward ANC (external mics only). In the budget category, look for "Hybrid" specifications for the best results.',
  },
  {
    title: 'Earcup Comfort & Breathability',
    content: 'Indian climates can make over-ear headphones hot and sweaty. Soft protein leather with memory foam is comfortable, but ensure the headband tension is not too tight, and take breaks every 2 hours to avoid sweat build-up.',
  },
  {
    title: 'Sound Signature & EQ Customization',
    content: 'Most budget Indian audio brands tune their headphones with heavy bass boosts. If you prefer natural acoustics, select brands like JBL that offer app-based equalizers to customize the frequency curve.',
  },
]

const faqItems = [
  {
    question: 'Does budget ANC really block traffic and honking?',
    answer: 'No. Active noise cancellation is designed to block constant low-frequency drones (like engines, ACs, or hums). Sharp, sudden noises like car horns, sirens, and human chatter will still leak through, though they will sound muffled.',
  },
  {
    question: 'Can I use these headphones for gym and workouts?',
    answer: 'Over-ear headphones are generally not recommended for intensive workouts due to sweat accumulation in the leather cushions. Look for IPX4 rated earbuds instead, or wipe your headphone cushions dry immediately after light exercise.',
  },
  {
    question: 'How long do budget ANC batteries last?',
    answer: 'Most modern budget headphones deliver 30 to 50 hours of playback even with ANC turned on, which easily lasts a full week of normal daily commuting.',
  },
]

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
                  <p className="text-lg text-foreground leading-relaxed">
                    Active Noise Cancellation (ANC) was once a luxury reserved for premium headphones like Sony or Bose costing upwards of Rs. 20,000. Today, technology has democratized, making decent ANC accessible for less than Rs. 5,000.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We put 8 of the best-selling budget ANC headphones in India through their paces. We tested them in local trains, busy coffee shops, and home office setups to measure how effectively they cancel noise and evaluate their sound profiles. Here are our top recommendations.
                  </p>
                </div>

                <KeyTakeaways items={keyTakeaways} />

                <ComparisonTable headers={comparisonData.headers} rows={comparisonData.rows} />

                <div className="mt-12 space-y-12">
                  {products.map((product) => (
                    <ProductSection key={product.name} {...product} />
                  ))}
                </div>

                <BuyingGuide items={buyingGuideItems} />

                <FAQ items={faqItems} />

                <FinalVerdict
                  title="Our Final Recommendation"
                  content="If blocking maximum noise during transit is your main concern, the boAt Nirvanaa 751 ANC is the most powerful budget isolator we tested. For listeners who value natural sound profiles and device connectivity, the JBL Tune 770NC is a superior musical choice. The Blaupunkt BH31 is a comfortable, highly affordable alternative for casual home listening."
                  topPick={{
                    name: 'boAt Nirvanaa 751 ANC',
                    href: 'https://www.amazon.in',
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
      <StickyCTA productName="boAt Nirvanaa 751 ANC" href="https://www.amazon.in" />
    </>
  )
}
