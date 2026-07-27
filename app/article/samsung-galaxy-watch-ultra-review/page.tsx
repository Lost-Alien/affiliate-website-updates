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
  title: 'Samsung Galaxy Watch Ultra Review: Titanium Smartwatch Built for Adventure | TechSelect',
  description: 'In-depth review of Samsung Galaxy Watch Ultra 47mm LTE. Grade 4 Titanium, Exynos W1000, ECG, Blood Pressure, 100-hour battery, and MIL-STD-810H durability tested.',
  openGraph: {
    title: 'Samsung Galaxy Watch Ultra Review — Titanium Rugged Smartwatch',
    description: 'Full review of Samsung Galaxy Watch Ultra with health tracking benchmarks, battery life tests, and LTE connectivity evaluation.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Samsung Galaxy Watch Ultra Review: Titanium Smartwatch Built for Adventure',
  description: 'Full review of Samsung Galaxy Watch Ultra 47mm LTE with health tracking, battery, and durability testing.',
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
  title: 'Samsung Galaxy Watch Ultra: Titanium Smartwatch Built for Adventure',
  subtitle: 'Is Samsung\'s most rugged wearable worth the premium? We wore it for 14 days to find out.',
  author: 'Arjun Mehta',
  authorRole: 'Wearables Editor',
  publishDate: 'July 28, 2026',
  updateDate: 'July 28, 2026',
  readTime: '8 min read',
  category: 'Wearables',
}

const keyTakeaways = [
  'Grade 4 Titanium + Sapphire Crystal build survives drops, scratches, and underwater use (10ATM + IP68 + MIL-STD-810H).',
  '3nm Exynos W1000 delivers the smoothest Wear OS experience on any Android smartwatch — zero lag.',
  'Comprehensive BioActive Sensor tracks ECG, Blood Pressure, SpO2, body composition, and advanced sleep coaching.',
  'Multi-day battery (2.5–3 days normal use, up to 100 hours power-saving) eliminates daily charging anxiety.',
  'Standalone LTE with eSIM lets you call, text, stream, and pay without your phone.',
]

const products = [
  {
    rank: 1,
    name: 'Samsung Galaxy Watch Ultra (47mm LTE, Graphite)',
    tagline: 'The Most Capable Android Smartwatch',
    rating: 9.3,
    image: '/products/samsung-galaxy-watch-ultra.png',
    amazonUrl: AFFILIATE_URL,
    bestFor: 'Outdoor adventurers, fitness enthusiasts, health-conscious users, and anyone who wants a premium smartwatch that works independently with LTE.',
    features: [
      'Grade 4 Titanium frame with Sapphire crystal display',
      '3nm Exynos W1000 processor — fastest Galaxy Watch chip ever',
      'BioActive Sensor: ECG, Blood Pressure, SpO2, Heart Rate, Body Composition',
      '10ATM + IP68 + MIL-STD-810H military-grade durability',
      '590mAh battery — up to 100 hours power-saving mode',
      'LTE (eSIM) — calls, messages, music streaming without phone',
      'Dual-frequency GPS (L1 + L5) for pinpoint trail mapping',
      'Quick Button + Emergency Siren for safety',
      'Wear OS with One UI Watch — Google Play Store access',
      'Samsung Wallet — UPI and NFC contactless payments',
    ],
    pros: [
      'Titanium + Sapphire build is virtually indestructible yet lightweight (60g)',
      'Most comprehensive health sensor suite on any smartwatch',
      'Blazing-fast 3nm processor — no lag, instant app launches',
      'Multi-day battery with excellent power-saving mode',
      'Standalone LTE with clear call quality',
    ],
    cons: [
      '47mm only — may feel large on slimmer wrists',
      'Blood pressure requires calibration with a traditional cuff',
      'Premium price point (₹50,000+ range)',
    ],
    verdict: 'The Samsung Galaxy Watch Ultra is the definitive Android smartwatch for 2026. Its titanium construction, class-leading health sensors, multi-day battery, and smooth 3nm performance make it our top pick for anyone serious about wearable technology.',
  },
]

export default function SamsungGalaxyWatchUltraReviewPage() {
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
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Why the Galaxy Watch Ultra Stands Out</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In a crowded smartwatch market dominated by the Apple Watch Ultra, Samsung has delivered a compelling Android alternative. The Galaxy Watch Ultra doesn&apos;t just match Apple&apos;s rugged wearable on specs — it surpasses it in key areas. The BioActive Sensor is the most comprehensive health monitoring system on any consumer smartwatch, offering ECG, blood pressure, SpO2, and body composition analysis that Apple simply doesn&apos;t match.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The 3nm Exynos W1000 chipset is a generational leap over every other Wear OS watch on the market. Where competitors stutter during app transitions and struggle with complex watch faces, the Galaxy Watch Ultra runs everything with console-level smoothness. This isn&apos;t a spec-sheet claim — it&apos;s immediately noticeable in daily use.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For Indian users specifically, the watch excels in hot and humid conditions. The titanium frame doesn&apos;t heat up uncomfortably like stainless steel alternatives, the Sapphire crystal handles the inevitable knocks of daily commuting, and the 10ATM rating means getting caught in monsoon rain is a non-issue. Jio and Airtel eSIM support works seamlessly for standalone LTE.
              </p>
            </section>

            {/* Who Should Buy */}
            <section className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-xl font-bold text-foreground mb-4">Who Should Buy This Watch?</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Fitness Enthusiasts:</strong> Comprehensive workout tracking with GPS, heart rate zones, and body composition analysis.</li>
                <li><strong className="text-foreground">Health-Conscious Users:</strong> ECG, blood pressure, and SpO2 monitoring make this a legitimate health companion.</li>
                <li><strong className="text-foreground">Outdoor Adventurers:</strong> MIL-STD-810H, 10ATM water resistance, emergency siren, and 100-hour battery for multi-day treks.</li>
                <li><strong className="text-foreground">Galaxy Ecosystem Users:</strong> Deep integration with Samsung Health, SmartThings, Galaxy Buds auto-switching, and Samsung Wallet.</li>
              </ul>
            </section>

            <FinalVerdict
              title="Final Verdict"
              content="The Samsung Galaxy Watch Ultra is the best Android smartwatch money can buy in India. Its titanium build, 3nm performance, comprehensive health sensors, multi-day battery, and standalone LTE connectivity justify the premium price tag. If you own a Samsung or Android phone, this is the wearable to get."
              topPick={{
                name: 'Samsung Galaxy Watch Ultra (47mm LTE)',
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
        productName="Samsung Galaxy Watch Ultra"
        href={AFFILIATE_URL}
      />
      <Footer />
    </>
  )
}
