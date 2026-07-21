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
  title: 'Best Wireless Earbuds in India (2024) | TechSelect',
  description: 'We tested 25+ wireless earbuds to find the best options for Indian buyers. Our top picks deliver premium sound quality, effective ANC, and great value.',
  openGraph: {
    title: 'Best Wireless Earbuds in India (2024)',
    description: 'We tested 25+ wireless earbuds to find the best options for Indian buyers.',
    type: 'article',
  },
}

const articleData = {
  title: 'Best Wireless Earbuds in India',
  subtitle: 'Top Picks for Every Budget and Use Case',
  author: 'Rahul Sharma',
  authorRole: 'Audio Editor',
  publishDate: 'January 15, 2024',
  updateDate: 'January 20, 2024',
  readTime: '12 min read',
  category: 'Audio',
}

const keyTakeaways = [
  'The Apple AirPods Pro (2nd Gen) offers the best overall experience with excellent ANC and seamless Apple ecosystem integration.',
  'For Android users, the Sony WF-1000XM5 delivers superior sound quality and industry-leading noise cancellation.',
  'The Samsung Galaxy Buds2 Pro provides excellent value with great features for Samsung phone owners.',
  'All our top picks feature IPX4 or better water resistance, suitable for workouts and daily use in India.',
]

const products = [
  {
    rank: 1,
    name: 'Apple AirPods Pro (2nd Gen)',
    tagline: 'Best for iPhone Users',
    rating: 9.3,
    bestFor: 'iPhone users who want seamless integration, excellent ANC, and premium sound quality',
    features: ['30-hour total battery with MagSafe case', 'Active Noise Cancellation with Adaptive Transparency', 'IPX4 water resistant', 'Spatial Audio with head tracking'],
    pros: ['Exceptional ANC that rivals over-ear headphones', 'Seamless pairing and switching across Apple devices', 'Comfortable fit with multiple silicone tip sizes', 'Excellent call quality with wind noise reduction'],
    cons: ['Premium pricing in the Indian market', 'Limited customization compared to Android alternatives', 'Best features require Apple devices'],
    verdict: 'The Apple AirPods Pro (2nd Gen) remain the gold standard for true wireless earbuds in the Apple ecosystem. The H2 chip delivers remarkable ANC performance and Adaptive Transparency feels almost magical. If you use an iPhone, these are the earbuds to get.',
  },
  {
    rank: 2,
    name: 'Sony WF-1000XM5',
    tagline: 'Best Sound Quality',
    rating: 9.2,
    bestFor: 'Audiophiles and Android users who prioritize sound quality and ANC performance',
    features: ['24-hour total battery', 'Industry-leading ANC with 8.4mm drivers', 'IPX4 water resistant', 'LDAC and DSEE Extreme support'],
    pros: ['Best-in-class sound quality with rich, detailed audio', 'Exceptional noise cancellation', 'Comfortable lightweight design at 5.9g per earbud', 'Excellent Sony Headphones Connect app'],
    cons: ['Premium price point', 'Touch controls can be finicky', 'Case is not wireless charging by default'],
    verdict: 'The Sony WF-1000XM5 delivers audiophile-grade sound in a truly wireless form factor. If sound quality is your top priority and you use an Android phone, these earbuds offer an unmatched listening experience with excellent ANC to boot.',
  },
  {
    rank: 3,
    name: 'Samsung Galaxy Buds2 Pro',
    tagline: 'Best for Samsung Users',
    rating: 8.9,
    bestFor: 'Samsung Galaxy phone owners who want great features and seamless integration',
    features: ['29-hour total battery', '360 Audio with head tracking', 'IPX7 water resistant', 'Intelligent ANC'],
    pros: ['Excellent value compared to Apple and Sony', 'Compact and comfortable design', 'Great call quality with 3 mics', '360 Audio is immersive with Samsung devices'],
    cons: ['Best features limited to Samsung phones', 'ANC not as strong as Sony or Apple', 'Hi-Fi audio requires Samsung devices'],
    verdict: 'The Galaxy Buds2 Pro offer an excellent balance of features, comfort, and value. Samsung users will appreciate the seamless integration and 360 Audio support, while others will still enjoy the comfortable fit and solid ANC performance.',
  },
]

const comparisonData = {
  headers: ['Product', 'Best For', 'Battery', 'ANC', 'Rating'],
  rows: [
    ['Apple AirPods Pro 2', 'iPhone Users', '30 hours', 'Excellent', '9.3'],
    ['Sony WF-1000XM5', 'Sound Quality', '24 hours', 'Excellent', '9.2'],
    ['Samsung Galaxy Buds2 Pro', 'Samsung Users', '29 hours', 'Very Good', '8.9'],
  ],
}

const buyingGuideItems = [
  {
    title: 'Sound Quality',
    content: 'Look for earbuds with high-quality drivers (8mm or larger) and support for advanced codecs like LDAC or AAC. Driver size matters, but tuning is equally important — a well-tuned 6mm driver can outperform a poorly implemented 10mm one.',
  },
  {
    title: 'Active Noise Cancellation',
    content: 'ANC performance varies significantly between models. Premium earbuds like AirPods Pro and Sony WF-1000XM5 offer near over-ear headphone levels of noise cancellation. Consider your typical environment when deciding how important this feature is.',
  },
  {
    title: 'Battery Life',
    content: 'Aim for at least 6 hours of playback per charge, with the case providing 2-3 additional full charges. Consider wireless charging if convenience is important to you. Quick charge features are valuable for forgetful users.',
  },
  {
    title: 'Fit and Comfort',
    content: 'Most premium earbuds come with multiple ear tip sizes. A proper seal is crucial for both sound quality and noise isolation. Try different tips to find your perfect fit — this dramatically affects ANC performance and bass response.',
  },
  {
    title: 'Water Resistance',
    content: 'IPX4 protects against splashes and sweat — sufficient for most gym use. IPX5 and above can handle water jets and rain. For Indian monsoons or heavy workouts, aim for at least IPX4 rating.',
  },
  {
    title: 'Ecosystem Integration',
    content: 'Apple users will benefit most from AirPods, Samsung users from Galaxy Buds, and Android users can choose Sony or Samsung for the best experience. Cross-platform compatibility exists but premium features may be limited.',
  },
]

const faqItems = [
  {
    question: 'Are premium wireless earbuds worth it in India?',
    answer: 'Yes, premium wireless earbuds have improved dramatically. The ANC, sound quality, and build quality justify the price for daily users. However, if you only use earbuds occasionally, mid-range options may suffice.',
  },
  {
    question: 'Which earbuds work best with both iPhone and Android?',
    answer: 'Sony WF-1000XM5 offers the most consistent experience across platforms. AirPods work with Android but lose features like automatic ear detection and seamless switching. Galaxy Buds work well on iPhone but lose 360 Audio.',
  },
  {
    question: 'How long do premium wireless earbuds last?',
    answer: 'With proper care, quality earbuds should last 2-3 years. Battery degradation is the most common issue, typically becoming noticeable after 18-24 months of regular use. Avoid extreme temperatures and keep them clean.',
  },
  {
    question: 'Is ANC necessary for commuting in Indian cities?',
    answer: 'ANC is highly valuable for Indian commutes — it helps block out traffic noise, metro announcements, and crowd noise. For auto/cab rides and metro commutes, ANC significantly improves the listening experience and reduces fatigue.',
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
              {/* Main Content */}
              <div className="lg:col-span-2">
                <AffiliateDisclosure />
                
                {/* Introduction */}
                <div className="prose prose-lg max-w-none mt-8">
                  <p className="text-lg text-foreground leading-relaxed">
                    Finding the perfect wireless earbuds in India can be overwhelming with so many options available. We spent three months testing over 25 pairs of wireless earbuds — using them during metro commutes, gym sessions, work-from-home calls, and everything in between — to find the best options for Indian buyers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our testing focused on what matters most: sound quality, ANC performance, comfort, battery life, and value for money in the Indian market. Below, you will find our honest recommendations based on extensive real-world testing.
                  </p>
                </div>

                <KeyTakeaways items={keyTakeaways} />

                <ComparisonTable headers={comparisonData.headers} rows={comparisonData.rows} />

                {/* Product Sections */}
                <div className="mt-12 space-y-12">
                  {products.map((product) => (
                    <ProductSection key={product.name} {...product} />
                  ))}
                </div>

                <BuyingGuide items={buyingGuideItems} />

                <FAQ items={faqItems} />

                <FinalVerdict
                  title="Our Final Recommendation"
                  content="For iPhone users, the Apple AirPods Pro (2nd Gen) offers the best overall experience with excellent ANC and seamless ecosystem integration. Android users should consider the Sony WF-1000XM5 for superior sound quality, or the Samsung Galaxy Buds2 Pro for great value and Samsung ecosystem benefits."
                  topPick={{
                    name: 'Apple AirPods Pro (2nd Gen)',
                    href: 'https://www.amazon.in',
                  }}
                />

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
        </article>
      </main>
      <Footer />
      <StickyCTA productName="Apple AirPods Pro (2nd Gen)" href="https://www.amazon.in" />
    </>
  )
}
