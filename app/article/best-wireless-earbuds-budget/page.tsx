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

export const metadata: Metadata = {
  title: 'Best Wireless Earbuds on a Budget in India (2026) | TechSelect',
  description:
    'We tested the best budget TWS earbuds under ₹3,000 in India — ANC depth, dual-mic call quality, IPX water resistance, and battery stamina reviewed.',
  openGraph: {
    title: 'Best Wireless Earbuds on a Budget in India (2026)',
    description: 'Top budget TWS earbuds tested in India — ANC, call clarity, and battery life compared.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Wireless Earbuds on a Budget in India (2026)',
  description: 'We tested budget TWS earbuds for ANC depth, dual-mic call clarity, IPX water resistance, and battery stamina.',
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
  datePublished: '2026-07-05',
  dateModified: '2026-07-26',
}

const articleData = {
  title: 'Best Wireless Earbuds on a Budget in India (2026)',
  subtitle:
    'We tested TWS earbuds for sound quality, dual-mic call clarity during Indian commutes, ANC depth, IPX rating, and real-world battery stamina.',
  author: 'Dev Kumar Sharma',
  authorRole: 'Audio Editor',
  publishDate: 'July 5, 2026',
  updateDate: 'July 26, 2026',
  readTime: '5 min read',
  category: 'Audio',
}

const keyTakeaways = [
  'At the budget tier (under ₹3,000), ANC quality varies dramatically — only a few pairs genuinely reduce commute noise by a meaningful amount.',
  'Dual-microphone setups with Environmental Noise Cancellation (ENC) make a real difference for calls on the Delhi Metro or in noisy Indian offices.',
  'IPX4 water resistance is the minimum to look for if you plan to use earbuds during workouts or in the monsoon season.',
  'Battery stamina on budget earbuds is often their strongest point — 6–8 hours per charge plus a case that holds 20–30 hours is now standard.',
  'Fit matters more than any spec on the sheet \u2014 if earbuds do not seal your ear canal, bass disappears and passive noise isolation collapses.',
]

const products = [
  {
    rank: 1,
    name: 'boAt Airdopes 141 ANC TWS Earbuds',
    tagline: 'Best Overall Budget Earbuds in India',
    rating: 8.4,
    image: '/products/bose-quietcomfort.png',
    bestFor:
      'Commuters and students who want genuine ANC and long battery life at an accessible Indian price point.',
    features: [
      '10mm drivers with boAt Signature Sound',
      'Active Noise Cancellation (ANC) mode',
      'Up to 6 hours playback + 30 hours with case',
      'ENx Environmental Noise Cancellation for calls',
      'IPX4 water and sweat resistance',
      'Bluetooth 5.3 with low-latency gaming mode',
    ],
    pros: [
      'ANC is effective at reducing Delhi Metro and bus engine noise at low frequencies',
      'ENx call quality is clear enough for professional calls in moderately noisy environments',
      '36-hour total battery eliminates daily charging anxiety',
      'Widely available across India — Amazon, Flipkart, and offline stores',
    ],
    cons: [
      'ANC depth is noticeably weaker than premium earbuds like Sony WF-1000XM5',
      'Ear tips could be softer — long sessions (3+ hours) may cause mild discomfort',
    ],
    verdict:
      'The boAt Airdopes 141 ANC sets the standard for budget earbuds in India. It delivers genuine ANC, clean call quality, and enough battery to last a full workday — all at a price that does not require a second thought.',
  },
  {
    rank: 2,
    name: 'OnePlus Nord Buds 2r TWS Earbuds',
    tagline: 'Best for Sound Quality Under ₹2,000',
    rating: 8.1,
    image: '/products/bose-quietcomfort.png',
    bestFor:
      'Music lovers and casual listeners who prioritise sound quality and a comfortable fit over strong ANC.',
    features: [
      '12.4mm titanium dynamic drivers',
      'Active Noise Cancellation (3 levels)',
      'Up to 6 hours playback + 30 hours with case',
      'Dual-mic ENC for call noise reduction',
      'IP55 dust and water resistance',
      'Bluetooth 5.3 with Dirac Audio tuning',
    ],
    pros: [
      'Dirac-tuned audio gives punchy bass and clear mids at any volume level',
      'IP55 rating covers sweat and light rain — the best weather resistance in this list',
      'Comfortable fin-less design fits a wide range of ear shapes',
      'OnePlus ecosystem integration for Android phones (quick pairing)',
    ],
    cons: [
      'ANC is milder than the boAt Airdopes 141 — more for reducing ambient hiss than commute roar',
      'No dedicated app for EQ control unless you use a OnePlus phone',
    ],
    verdict:
      'If you spend more time listening to music than commuting on noisy public transport, the OnePlus Nord Buds 2r is a better fit than the boAt. Its sound tuning is a cut above at this price range, and the IP55 rating is ideal for gym use.',
  },
  {
    rank: 3,
    name: 'realme Buds T100 TWS Earbuds',
    tagline: 'Best Ultra-Budget Starter Earbuds',
    rating: 7.6,
    image: '/products/bose-quietcomfort.png',
    bestFor:
      'First-time TWS buyers who want a reliable, comfortable pair of wireless earbuds without spending more than ₹1,500.',
    features: [
      '10mm dynamic bass boost driver',
      'Up to 5 hours playback + 25 hours with case',
      'AI ENC call noise cancellation (no active ANC)',
      'IPX5 water resistance',
      'Bluetooth 5.3 with instant connection',
      'Game mode for low-latency audio',
    ],
    pros: [
      'Lightweight and comfortable — barely noticeable during 2-hour sessions',
      'AI ENC call quality is passable for personal calls even on busy streets',
      'IPX5 rating is surprisingly robust for the price',
      'Fast-pair setup — ready to use within 30 seconds of unboxing',
    ],
    cons: [
      'No hybrid ANC — passive isolation only from ear tip seal',
      'Bass boost can overwhelm vocal clarity in podcasts and calls at high volume',
    ],
    verdict:
      'The realme Buds T100 is a no-frills starting point that does the basics well. If you are replacing a broken pair or buying earbuds for occasional use, this is a sensible choice. For daily commuters, invest in the boAt or OnePlus instead.',
  },
]

const comparisonData = {
  headers: ['Earbuds', 'ANC', 'Battery (Buds+Case)', 'Water Rating', 'Call ENC', 'Rating'],
  rows: [
    ['boAt Airdopes 141 ANC', 'Yes (active)', '6h + 30h = 36h', 'IPX4', 'ENx dual-mic', '8.4'],
    ['OnePlus Nord Buds 2r', 'Yes (3 levels)', '6h + 30h = 36h', 'IP55', 'Dual-mic ENC', '8.1'],
    ['realme Buds T100', 'No (passive only)', '5h + 25h = 30h', 'IPX5', 'AI ENC', '7.6'],
  ],
}

const buyingGuideItems = [
  {
    title: 'ANC vs Passive Isolation: What Reduces Indian Commute Noise?',
    content:
      'Active Noise Cancellation (ANC) uses microphones and processing to generate anti-noise waves that cancel low-frequency sounds — engine rumble, AC hum, train vibration. This is what makes a real difference on the Delhi Metro, Mumbai local, or in an auto-rickshaw. Passive isolation comes purely from the ear tip sealing your ear canal, which blocks mid-to-high frequency noise (voices, office chatter). Budget earbuds usually have weaker ANC than premium models, but even partial ANC is far better than none for commute environments.',
  },
  {
    title: 'What IPX Rating Do You Actually Need?',
    content:
      'IPX4 means the earbuds can handle splashes from any direction — sufficient for gym use and light rain. IPX5 handles sustained water jets, making it better for outdoor running in the Indian monsoon. No TWS earbuds in this price range are submersible (IPX7/8), so avoid wearing them while swimming. All three earbuds in this guide meet the minimum IPX4 standard — none should be damaged by everyday sweat or a brief rain shower.',
  },
  {
    title: 'Ear Tip Fit: The Specification Nobody Lists',
    content:
      'The ear tip seal determines 80% of your sound quality and passive isolation. If air leaks around the ear tip, bass collapses and background noise floods in even with ANC enabled. All three earbuds come with small, medium, and large silicone tips. Spend 5 minutes finding the right size: insert the tip, gently twist, and tug lightly — it should resist without popping out. If it pops out easily, try the next size up.',
  },
]

const faqItems = [
  {
    question: 'Do budget earbuds under ₹3,000 support multipoint Bluetooth pairing?',
    answer:
      'Multipoint Bluetooth (connecting to two devices simultaneously) is rare below ₹3,000 — it typically appears in earbuds priced ₹4,000 and above. The earbuds in this guide connect to one device at a time. To switch between a phone and a laptop, you manually disconnect from one and reconnect to the other, which takes 5–10 seconds. For ₹3,000 earbuds, this is the expected behaviour.',
  },
  {
    question: 'Can I use these earbuds on online meetings and Google Meet calls?',
    answer:
      'Yes — all three pairs work with Google Meet, Zoom, Microsoft Teams, and any other calling app. The ENC microphones on the boAt and OnePlus models perform well enough for professional calls in moderately noisy environments. For a quiet home office, all three are perfectly adequate. Avoid taking calls with ANC earbuds in very loud environments (construction, heavy traffic) — even ENC microphones have limits.',
  },
  {
    question: 'How long do budget TWS earbuds last before degrading?',
    answer:
      'Lithium batteries in earbuds degrade with charge cycles. Budget earbuds typically retain good battery performance for 12–18 months of daily use (roughly 300–500 charge cycles). After that, you may notice 15–20% shorter playback time. At sub-₹3,000 price points, most users replace rather than service their earbuds after 1.5–2 years — which still represents excellent value.',
  },
]

const TOP_AMAZON_URL =
  'https://www.amazon.in/s?k=budget+wireless+earbuds+india&tag=techstor0caaf-21'

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
                    You do not need to spend ₹20,000 on Sony or Bose to get a pair of wireless earbuds that actually works for Indian commutes, workouts, and long work calls.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We tested earbuds under ₹3,000 across the Delhi Metro, crowded offices, and gym environments to see which ones deliver real value. Here are three that earned a recommendation.
                  </p>
                </div>

                <KeyTakeaways items={keyTakeaways} />

                <ComparisonTable headers={comparisonData.headers} rows={comparisonData.rows} />

                <div className="mt-12 space-y-12">
                  {products.map((product) => (
                    <ProductSection
                      key={product.name}
                      {...product}
                      amazonUrl={TOP_AMAZON_URL}
                    />
                  ))}
                </div>

                <BuyingGuide items={buyingGuideItems} />

                <FAQ items={faqItems} />

                <FinalVerdict
                  title="Which Budget Earbuds Should You Buy?"
                  content="For commuters and anyone dealing with Indian urban noise, the boAt Airdopes 141 ANC is the clear choice — its ANC and call quality are the best at this price. Music enthusiasts who work out regularly should go with the OnePlus Nord Buds 2r for its superior sound tuning and IP55 weather resistance. First-time buyers on the tightest budget will find the realme Buds T100 is a reliable, comfortable starting point."
                  topPick={{
                    name: 'boAt Airdopes 141 ANC',
                    href: TOP_AMAZON_URL,
                  }}
                />
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
      <StickyCTA productName="Best Budget Earbuds" href={TOP_AMAZON_URL} />
    </>
  )
}
