import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { JsonLd } from '@/components/json-ld'
import { ArticleHeader } from '@/components/article/article-header'
import { KeyTakeaways } from '@/components/article/key-takeaways'
import { ProductSection } from '@/components/article/product-section'
import { FinalVerdict } from '@/components/article/final-verdict'
import { StickyCTA } from '@/components/article/sticky-cta'

export const metadata: Metadata = {
  title: 'Samsung Galaxy Watch8 Review: The Smartest Android Watch Yet | TechSelect',
  description: 'In-depth review of Samsung Galaxy Watch8 (Graphite). We tested the 3nm processor, 3,000 nits AMOLED display, cushion design, sleep apnea detection, and antioxidant index tracking.',
  openGraph: {
    title: 'Samsung Galaxy Watch8 Review — The Smartest Android Watch Yet',
    description: 'Full review of Samsung Galaxy Watch8 with health tracking benchmarks, battery life tests, and 3nm performance evaluation.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Samsung Galaxy Watch8 Review: The Smartest Android Watch Yet',
  description: 'Full review of Samsung Galaxy Watch8 with health tracking, display brightness, and 3nm processor testing.',
  author: {
    '@type': 'Person',
    name: 'Arjun Mehta',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techselect.blog/icon.svg',
    },
  },
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
}

const AFFILIATE_URL = 'https://www.amazon.in/Samsung-Graphite-Processor-Monitoring-Anti-oxidant/dp/B0FDQKGB28?th=1&linkCode=ll2&tag=techstor0caaf-21&linkId=c36e6fb59bdfbf56fffd3ac906cde3cd&ref_=as_li_ss_tl'

const articleData = {
  title: 'Samsung Galaxy Watch8: The Smartest Android Watch Yet',
  subtitle: 'With a 3nm processor, 3,000 nits display, and FDA-cleared sleep apnea detection, is this the ultimate Galaxy upgrade?',
  author: 'Arjun Mehta',
  authorRole: 'Wearables Editor',
  publishDate: 'July 28, 2026',
  updateDate: 'July 28, 2026',
  readTime: '8 min read',
  category: 'Wearables',
}

const keyTakeaways = [
  'Refined cushion case design with Dynamic Lug System makes it one of the thinnest and most comfortable smartwatches to wear all day and night.',
  'Blindingly bright Super AMOLED display reaches 3,000 nits peak brightness for effortless readability under intense sunlight.',
  'Next-gen 3nm processor delivers instantaneous app responsiveness and superior energy efficiency without UI lag.',
  'Groundbreaking health tracking includes FDA-cleared sleep apnea detection, vascular load monitoring, and antioxidant index tracking.',
  'Personalized AI running coach analyzes VO2 max and running form to create tailored fitness programs.',
]

const products = [
  {
    rank: 1,
    name: 'Samsung Galaxy Watch8 (Graphite)',
    tagline: 'The Pinnacle of Android Smartwatches',
    rating: 9.3,
    image: '/products/samsung-galaxy-watch8.webp',
    amazonUrl: AFFILIATE_URL,
    bestFor: 'Android smartphone users, fitness enthusiasts, sleep tracking seekers, and anyone looking for a sleek, high-performance wearable with preventative health tools.',
    features: [
      '3nm processor — ultra-fast performance with enhanced energy efficiency',
      'Super AMOLED display with 3,000 nits peak outdoor brightness',
      'Cushion design with Dynamic Lug System for ergonomic comfort',
      'FDA-cleared sleep apnea detection & sleep coaching',
      'Vascular Load monitoring & Antioxidant Index tracking',
      'BioActive Sensor: Heart Rate, ECG, SpO2, and Body Composition',
      'Personalized AI running coach with real-time form feedback',
      'Sapphire crystal glass for scratch-resistant durability',
      'Wear OS with Samsung One UI Watch — full Google Play Store access',
      'Samsung Wallet support for tap-to-pay contactless UPI & NFC transactions',
    ],
    pros: [
      'Incredibly comfortable and thin cushion design for 24/7 wear',
      'Industry-leading 3,000 nits screen brightness',
      'Game-changing health tools like sleep apnea detection',
      'Fast and fluid performance from the 3nm chipset',
      'Seamless ecosystem integration with Samsung Galaxy devices',
    ],
    cons: [
      'Advanced health features require pairing with a Samsung Galaxy smartphone',
      'Battery life requires recharging every 1.5 to 2 days under heavy usage',
      'No physical rotating bezel (available only on the Classic variant)',
    ],
    verdict: 'The Samsung Galaxy Watch8 is a triumph of smartwatch engineering. By pairing a super-bright 3,000 nit display and a lightning-fast 3nm chip with innovative health tracking like sleep apnea detection and antioxidant index monitoring, it easily earns our top recommendation for Android users in 2026.',
  },
]

export default function SamsungGalaxyWatch8ReviewPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <ArticleHeader {...articleData} />

        <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-10">
            <KeyTakeaways items={keyTakeaways} />

            {products.map((product) => (
              <ProductSection key={product.name} {...product} />
            ))}

            {/* Why We Recommend It */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Why the Galaxy Watch8 Stands Out</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The smartwatch landscape in 2026 is highly competitive, but the Samsung Galaxy Watch8 manages to stand head and shoulders above the crowd by focusing on meaningful technological leaps rather than incremental tweaks. The transition to a 3nm processor architecture is the most noticeable improvement: app launches are instant, workout tracking initiates without hesitation, and navigating through Wear OS tiles feels effortlessly fluid.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What truly sets the Watch8 apart, however, is its dedication to preventative health monitoring. While most competitors offer standard heart rate and step tracking, Samsung introduces FDA-cleared sleep apnea detection directly to your wrist. By monitoring overnight breathing patterns and blood oxygen drops, it provides vital early warning insights that can genuinely impact long-term wellbeing. Combined with Vascular Load monitoring and the new Antioxidant Index, the Watch8 transforms from a passive fitness tracker into an active personal health guardian.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For Indian users, the practical design refinements make a world of difference. The 3,000 nits Super AMOLED display ensures that even under the glaring afternoon sun, your stats and notifications remain crystal clear. Furthermore, the updated cushion case and Dynamic Lug System allow the watch to wrap naturally around any wrist size, preventing sweat buildup and discomfort during hot summer workouts or overnight sleep tracking.
              </p>
            </section>

            {/* Who Should Buy */}
            <section className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-xl font-bold text-foreground mb-4">Who Should Buy This Watch?</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Samsung Galaxy Smartphone Owners:</strong> Unlock the complete suite of advanced health sensors including ECG, blood pressure, and sleep apnea tracking.</li>
                <li><strong className="text-foreground">Sleep & Recovery Seekers:</strong> Benefit from comfortable 24/7 cushion ergonomics, detailed sleep stage analysis, and sleep apnea detection.</li>
                <li><strong className="text-foreground">Runners & Fitness Enthusiasts:</strong> Utilize the personalized AI running coach, VO2 max tracking, and customized heart rate zones to crush your fitness goals.</li>
                <li><strong className="text-foreground">Tech & Style Enthusiasts:</strong> Enjoy the ultra-smooth 3nm performance, blindingly bright 3,000 nit AMOLED screen, and sophisticated cushion aesthetic.</li>
              </ul>
            </section>

            <FinalVerdict
              title="Final Verdict"
              content="The Samsung Galaxy Watch8 is unquestionably the smartest and most refined Android smartwatch available in India today. Its 3nm speed, 3,000 nit screen, cushion ergonomics, and breakthrough health features make it an essential upgrade for any Android user."
              topPick={{
                name: 'Samsung Galaxy Watch8 (Graphite)',
                href: AFFILIATE_URL,
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
        productName="Samsung Galaxy Watch8"
        href={AFFILIATE_URL}
      />
      <Footer />
    </>
  )
}
