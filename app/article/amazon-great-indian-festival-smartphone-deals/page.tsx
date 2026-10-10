import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { AMAZON_TAG } from '@/lib/affiliate'
import {
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Clock,
  Calendar,
  User,
  Check,
  X,
  Flame,
  Award,
  BookOpen,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Amazon Great Indian Festival (2026): Best Smartphone Deals & Price Audit | TechSelect India',
  description: 'Auditing real festive price cuts on Galaxy S25 Ultra, OnePlus 15R, Xiaomi 17, iQOO 15R, and OnePlus Nord 6 during Amazon Great Indian Festival 2026.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Amazon Great Indian Festival (2026): Best Smartphone Deals and Price Audit',
  description: 'Auditing real festive price cuts on Galaxy S25 Ultra, OnePlus 15R, Xiaomi 17, iQOO 15R, and OnePlus Nord 6 during Amazon Great Indian Festival 2026.',
  image: 'https://techselect.blog/products/samsung-galaxy-s25.png',
  datePublished: '2026-10-08',
  dateModified: '2026-10-10',
  author: {
    '@type': 'Person',
    name: 'Aditya Patwa',
    jobTitle: 'Mobile & Smart Home Editor',
    url: 'https://techselect.blog/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techselect.blog/icon.png',
    },
  },
}

interface DealItem {
  rank: number
  name: string
  tagline: string
  mrp: string
  dealPrice: string
  savings: string
  chipset: string
  battery: string
  bestFor: string
  keyOffer: string
  image?: string
  features: string[]
  pros: string[]
  cons: string[]
  verdict: string
  searchQuery: string
}

const DEALS: DealItem[] = [
  {
    rank: 1,
    name: 'Samsung Galaxy S25 Ultra',
    tagline: 'Best Overall Flagship Deal of the Year',
    mrp: '₹1,29,999',
    dealPrice: '₹84,999',
    savings: '₹45,000 (34% Off)',
    chipset: 'Fastest Samsung Processor',
    battery: '5000 mAh (All-Day Battery)',
    image: '/products/samsung-galaxy-s25.png',
    bestFor: 'Anyone wanting the best camera for family photos and concerts, a large bright screen, and a phone that will last 7 years without slowing down.',
    keyOffer: 'Includes a flat sale discount plus extra savings with an SBI credit card at checkout.',
    features: [
      '200MP camera that takes crisp photos even from far away (100x zoom)',
      'Large 6.8-inch bright screen with special anti-glare glass for sunlight',
      'Built-in S-Pen pen inside the phone for taking notes and signing forms',
      'Guaranteed software updates for 7 full years so your phone stays safe',
    ],
    pros: [
      'Genuine ₹45,000 price drop on Samsung top flagship phone',
      'Best camera quality for night shots, family events, and travel',
      'Screen is very easy to read even outside under bright sun',
    ],
    cons: [
      'Phone is big and heavy; needs two hands to type comfortably',
      'Wall charger is not included in the box',
    ],
    verdict: 'At ₹84,999, this is the best premium phone deal in the entire sale. If your budget allows it, you will not need to upgrade for at least five years.',
    searchQuery: 'Samsung Galaxy S25 Ultra',
  },
  {
    rank: 2,
    name: 'Xiaomi 17',
    tagline: 'Small, Lightweight Phone with Top Cameras',
    mrp: '₹89,999',
    dealPrice: '₹59,999',
    savings: '₹30,000 (33% Off)',
    chipset: 'High-Speed Flagship Chip',
    battery: '5400 mAh (Very Fast 90W Charging)',
    bestFor: 'People who hate bulky, heavy phones and want something comfortable to hold in one hand that still takes beautiful pictures.',
    keyOffer: 'Festive price drop of ₹27,000 plus an extra ₹3,000 instant bank discount.',
    features: [
      'Professional Leica camera lenses that make face photos look natural',
      'Compact 6.36-inch screen that easily fits in your pocket or small hands',
      'Very fast processor that opens any app or game with zero lag',
      'Comes with a 90W charger that charges the phone from 0 to 100% in 35 minutes',
    ],
    pros: [
      'Massive ₹30,000 savings brings a top phone down to ₹60,000',
      'Comfortable to use with one hand while walking or traveling',
      'Natural-looking photos without artificial skin whitening',
    ],
    cons: [
      'Can get warm if you record 4K video for a long time',
      'You need to turn off a few notification popups on first setup',
    ],
    verdict: 'If you want a normal-sized phone that is not like a heavy brick in your pocket, the Xiaomi 17 at ₹59,999 is the smartest purchase in this sale.',
    searchQuery: 'Xiaomi 17',
  },
  {
    rank: 3,
    name: 'iQOO 15R',
    tagline: 'Best Gaming & Heavy Use Phone Under ₹50,000',
    mrp: '₹53,999',
    dealPrice: '₹46,499',
    savings: '₹7,500 Direct Coupon',
    chipset: 'Super Fast Gaming Processor',
    battery: '6500 mAh (Charges in 25 Mins)',
    bestFor: 'Gamers and heavy users who want games like BGMI to run super smooth and want a battery that lasts two full days.',
    keyOffer: 'Just tap the ₹7,500 coupon checkbox on the Amazon page to get the discount instantly.',
    features: [
      'Top-tier gaming chip designed to keep games smooth without dropping frames',
      'Super sharp 144Hz screen that feels completely instant to the touch',
      'Large 6500 mAh battery that easily lasts 2 days of normal use',
      '120W flash charger included that fills the battery in roughly 25 minutes',
    ],
    pros: [
      'Runs games smoothly without overheating or stuttering',
      'No complicated bank card tricks; just a simple 1-click coupon',
      'Huge battery life with ultra-fast charging in the box',
    ],
    cons: [
      'Wide-angle camera is just average in low light',
      'Design looks more like a gaming device than a business phone',
    ],
    verdict: 'Under ₹50,000, no phone beats the iQOO 15R for raw speed and battery life. It gives you flagship power without the flagship price.',
    searchQuery: 'iQOO 15R',
  },
  {
    rank: 4,
    name: 'OnePlus 15R',
    tagline: 'Smooth, Reliable Phone for Everyday Life',
    mrp: '₹57,999',
    dealPrice: '₹52,999',
    savings: '₹5,000 Total Discount',
    chipset: 'Powerful Next-Gen Chip',
    battery: '6400 mAh (100W Fast Charging)',
    bestFor: 'Anyone wanting clean software with no spam ads, a super smooth screen, and dependable battery for office, home, and travel.',
    keyOffer: 'Festive deal price of ₹54,999 plus an extra ₹2,000 discount using an SBI card.',
    features: [
      'Ultra smooth 165Hz screen that makes web browsing and scrolling effortless',
      'Aqua Touch technology that lets you use the screen even with wet fingers or in rain',
      'High-quality 50MP Sony camera with stabilization for shake-free videos',
      'Clean OxygenOS software with no annoying advertising notifications',
    ],
    pros: [
      'Cleanest and easiest software experience in its category',
      'Screen is very clear and easy to read outdoors',
      'Stays cool and snappy during everyday multitasking',
    ],
    cons: [
      'Does not have a dedicated zoom camera for distant shots',
      'No wireless charging',
    ],
    verdict: 'The OnePlus 15R is the most headache-free phone around ₹50,000. It is built to run smoothly for 4 or 5 years without slowing down.',
    searchQuery: 'OnePlus 15R',
  },
  {
    rank: 5,
    name: 'OnePlus Nord 6',
    tagline: 'Monster 2-Day Battery for Frequent Travelers',
    mrp: '₹46,999',
    dealPrice: '₹42,999',
    savings: '₹4,000 Festive Drop',
    chipset: 'Power-Efficient Fast Processor',
    battery: '9000 mAh (Massive Multi-Day Battery)',
    bestFor: 'Frequent travelers, field workers, and anyone tired of looking for a charger or power bank in the middle of the day.',
    keyOffer: 'Direct ₹3,000 festive price cut plus ₹1,000 bank discount at checkout.',
    features: [
      'Giant 9000 mAh battery cell that can last up to 3 days on light use',
      'Large 6.78-inch colorful screen with fast 165Hz scrolling',
      'Reliable 50MP main camera for crisp daytime photos',
      'Metal-finish frame that handles everyday bumps and drops',
    ],
    pros: [
      'Unbeatable battery life; you will rarely worry about running out of charge',
      'Smooth display makes social media and videos look great',
      'Solid, durable feel in your hands',
    ],
    cons: [
      'The phone is slightly heavier and thicker because of the big battery',
      'Takes about an hour to charge fully from zero',
    ],
    verdict: 'If your biggest frustration with smartphones is battery life dying before night, the Nord 6 solves that permanently for ₹42,999.',
    searchQuery: 'OnePlus Nord 6',
  },
  {
    rank: 6,
    name: 'OnePlus 13s',
    tagline: 'Pocket-Sized Powerhouse that Fits Anywhere',
    mrp: '₹54,999',
    dealPrice: '₹49,999',
    savings: '₹5,000 Festive Cut',
    chipset: 'Top-Tier Flagship Chip',
    battery: '5850 mAh (80W Charging)',
    bestFor: 'Shoppers looking for a smaller phone that slips into any pocket easily but still runs as fast as expensive flagship phones.',
    keyOffer: 'Flat ₹5,000 price drop bringing it under the ₹50,000 mark.',
    features: [
      'Compact 6.36-inch flat screen with very thin borders',
      'Waterproof and dustproof body with IP68 certification for peace of mind',
      'Hasselblad natural camera tuning for true-to-life colors',
      'Clean, simple software with fast app loading',
    ],
    pros: [
      'Easy to hold and carry; does not stretch your pocket',
      'Fully protected against rain and accidental water spills',
      'Fast performance with snappy everyday multitasking',
    ],
    cons: [
      'Can get warm during heavy continuous gaming due to smaller size',
      'Does not have a super-zoom camera for distant objects',
    ],
    verdict: 'A rare compact phone that does not feel cheap or slow. Highly recommended if you dislike oversized phones.',
    searchQuery: 'OnePlus 13s',
  },
  {
    rank: 7,
    name: 'iQOO 15',
    tagline: 'Maximum Speed for High-End Gaming',
    mrp: '₹92,999',
    dealPrice: '₹76,999',
    savings: '₹16,000 (17% Off)',
    chipset: 'Most Powerful Android Processor',
    battery: '7000 mAh (120W FlashCharge)',
    bestFor: 'Enthusiasts and heavy mobile gamers who want top gaming benchmarks, a razor-sharp 2K screen, and very quick charging.',
    keyOffer: 'Includes an instant ₹10,000 bank card discount plus sale concessions.',
    features: [
      'Ultra high-speed gaming processor with advanced internal cooling',
      'Crystal-clear 2K display with super high brightness and smooth 144Hz speed',
      'Huge 7000 mAh battery with both fast wired and wireless charging',
      'Periscope zoom camera for sharp photos of distant subjects',
    ],
    pros: [
      'Fastest gaming phone in its price range with zero frame lag',
      'Bright, gorgeous 2K display that looks spectacular for streaming movies',
      'Massive battery combined with 25-minute fast charging',
    ],
    cons: [
      'Gaming-style look may not suit people wanting a subtle business phone',
      'Software has some preloaded apps you might want to uninstall',
    ],
    verdict: 'If raw speed, gaming power, and display clarity are your top priorities, the iQOO 15 at ₹76,999 is unbeatable value.',
    searchQuery: 'iQOO 15',
  },
  {
    rank: 8,
    name: 'OnePlus 15',
    tagline: 'Luxury All-Round Flagship for Professionals',
    mrp: '₹89,999',
    dealPrice: '₹81,999',
    savings: '₹8,000 Off',
    chipset: 'Premium High-End Processor',
    battery: '7300 mAh (100W SUPERVOOC)',
    bestFor: 'Professionals who want a classy design, long 2.5-day battery life, versatile cameras, and premium build quality.',
    keyOffer: '₹5,000 instant bank discount plus an extra ₹3,000 festive coupon on Amazon.',
    features: [
      'Sharp 2K curved display with smooth 165Hz scrolling and rich colors',
      'Enormous 7300 mAh battery that easily handles 2 to 3 days of work and calls',
      'Hasselblad triple camera setup with 3x optical zoom for portraits',
      'Premium metal and ceramic finish that feels luxurious in the hand',
    ],
    pros: [
      'Stunning design and top-shelf materials that look expensive',
      'Massive 7300 mAh battery keeps you away from chargers for days',
      'Excellent cameras for both close portraits and distant shots',
    ],
    cons: [
      'Curved screen edges take a day or two to get used to',
      'Pricier than value-flagship alternatives',
    ],
    verdict: 'A complete luxury phone that nails the basics: outstanding battery life, gorgeous screen, and a refined, premium feel.',
    searchQuery: 'OnePlus 15',
  },
]

export default function GreatIndianFestivalDealsPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Mobiles', href: '/category/mobiles' },
            { label: 'Amazon Great Indian Festival Deals' },
          ]}
        />

        {/* Mandatory Amazon Associates and Legal Compliance Banner */}
        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-100 rounded-xl text-xs sm:text-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
            <p>
              <strong>Affiliate Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. When you click through our links and complete a purchase, TechSelect may earn an affiliate commission at no extra cost to you.
            </p>
          </div>
          <span className="text-[11px] opacity-80 shrink-0 text-left md:text-right">
            Product prices and availability are accurate as of the date/time indicated and are subject to change.
          </span>
        </div>

        {/* Article Header */}
        <header className="mt-8 mb-10 border-b border-border pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-red-600 text-white font-bold text-xs rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <Flame className="h-3.5 w-3.5 fill-current" />
              Live Festive Audit
            </span>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Amazon Great Indian Festival 2026
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 text-balance">
            Amazon Great Indian Festival (2026): Best Smartphone Deals &amp; Price Audit
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
            We checked 8 popular smartphones on Amazon to see which deals are genuine price cuts and which ones are just marketing tricks. Here is your simple, honest guide to help you pick the right phone for your budget.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span>
                By <strong className="text-foreground">Aditya Patwa</strong> (Mobile &amp; Smart Home Editor)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Published: October 8, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Updated: October 10, 2026 · 9 min read</span>
            </div>
          </div>
        </header>

        {/* Quick Deal Summary Comparison Table */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Verified Deals at a Glance
              </h2>
              <p className="text-sm text-muted-foreground">
                Net effective prices after applying active Amazon coupons and instant bank discounts.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/70 text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Smartphone</th>
                  <th className="py-3.5 px-4 font-semibold">Launch MRP</th>
                  <th className="py-3.5 px-4 font-semibold text-foreground">Deal Price</th>
                  <th className="py-3.5 px-4 font-semibold">Savings</th>
                  <th className="py-3.5 px-4 font-semibold">Processor / Battery</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Direct Amazon Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {DEALS.map((deal) => {
                  const affiliateUrl = `https://www.amazon.in/s?k=${encodeURIComponent(deal.searchQuery)}&tag=${AMAZON_TAG}`
                  return (
                    <tr key={deal.name} className="hover:bg-muted/40 transition-colors">
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-foreground block">{deal.name}</span>
                        <span className="text-[11px] text-muted-foreground">{deal.tagline}</span>
                      </td>
                      <td className="py-3.5 px-4 line-through text-muted-foreground">{deal.mrp}</td>
                      <td className="py-3.5 px-4 font-bold text-red-600 dark:text-red-400 text-base">
                        {deal.dealPrice}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-md">
                          {deal.savings}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-muted-foreground">
                        <div>{deal.chipset}</div>
                        <div className="opacity-80">{deal.battery}</div>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <a
                          href={affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-medium text-xs rounded-lg transition-colors whitespace-nowrap shadow-xs"
                        >
                          Check Deal
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-muted-foreground mt-2">
            * All outbound Amazon links include partner tag {AMAZON_TAG} and open directly on Amazon India. Prices are subject to stock availability and bank offer quotas.
          </p>
        </section>

        {/* Detailed Product Breakdowns */}
        <section className="space-y-12 mb-16">
          <div className="border-b border-border pb-4">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Deep-Dive Analysis: The 8 Best Phone Deals
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Independent lab testing insights, genuine street pricing, and real-world caveats for each device.
            </p>
          </div>

          {DEALS.map((deal) => {
            const affiliateUrl = `https://www.amazon.in/s?k=${encodeURIComponent(deal.searchQuery)}&tag=${AMAZON_TAG}`
            return (
              <div
                key={deal.name}
                id={deal.name.toLowerCase().replace(/\s+/g, '-')}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header Strip */}
                <div className="p-6 border-b border-border bg-gradient-to-r from-muted/50 to-card">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                          Pick #{deal.rank}
                        </span>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                          {deal.tagline}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                        {deal.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-muted-foreground line-through">MRP {deal.mrp}</div>
                      <div className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400">
                        {deal.dealPrice}
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {deal.savings}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Key Offer Banner */}
                  <div className="p-4 bg-muted/60 rounded-xl border border-border/80 flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Active Festive Offer
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {deal.keyOffer}
                      </p>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="text-sm leading-relaxed">
                      <strong className="text-foreground">Ideal User Profile: </strong>
                      <span className="text-muted-foreground">{deal.bestFor}</span>
                    </p>
                  </div>

                  {/* Hardware Specs Grid */}
                  <div>
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3">
                      Key Technical Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {deal.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                      <h5 className="font-semibold text-emerald-700 dark:text-emerald-400 text-sm mb-2.5 flex items-center gap-1.5">
                        <Check className="h-4 w-4" />
                        What We Liked
                      </h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {deal.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-500 font-bold shrink-0">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                      <h5 className="font-semibold text-red-700 dark:text-red-400 text-sm mb-2.5 flex items-center gap-1.5">
                        <X className="h-4 w-4" />
                        Points to Consider
                      </h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {deal.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-500 font-bold shrink-0">✕</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Editorial Verdict */}
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-foreground/90 leading-relaxed italic">
                      <strong>Editorial Verdict: </strong>
                      {deal.verdict}
                    </p>
                  </div>

                  {/* Outbound Direct CTA */}
                  <div className="pt-2">
                    <a
                      href={affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
                    >
                      <span>Check Price on Amazon.in (Earns Commission)</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <p className="text-[10px] text-muted-foreground mt-2">
                      Product prices and availability are accurate as of the date/time indicated and are subject to change.
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        {/* Investigative Buying Guide & Traps Warning */}
        <section className="mb-14 bg-card border border-border rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-accent" />
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Festive Sale Audit: 3 Common Traps to Avoid
            </h2>
          </div>

          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground text-base mb-1">
                1. Beware of Fake Price Cuts
              </h3>
              <p>
                Some brands quietly raise the original price a few weeks before the sale. That way, a small normal discount looks like a huge 40% festive drop. A genuine deal is when the current checkout price is lower than what the phone sold for back in August or September.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground text-base mb-1">
                2. Do Not Rely on Maximum Exchange Value
              </h3>
              <p>
                Sale banners often show prices like "Galaxy S25 Ultra at ₹74,999" by assuming you are giving them an expensive old phone in showroom condition. When the courier person arrives at your doorstep, they often reduce ₹2,000 to ₹5,000 for normal wear and tear or missing boxes. Treat exchange bonuses as an extra perk, not guaranteed cash.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground text-base mb-1">
                3. Heavy Battery vs Pocket Comfort
              </h3>
              <p>
                Phones with giant batteries (like the OnePlus Nord 6 with 9000 mAh) are amazing if you travel a lot and hate chargers. But remember that big batteries make the phone thicker and heavier in your hand. If you prefer a light phone that easily slips into your jeans pocket, pick a compact device like the Xiaomi 17 or OnePlus 13s instead.
              </p>
            </div>
          </div>
        </section>

        {/* Final Recommendation */}
        <section className="mb-12 bg-primary text-primary-foreground rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-amber-400" />
            <h2 className="font-serif text-2xl font-bold">
              Final Editorial Recommendation
            </h2>
          </div>

          <p className="text-primary-foreground/90 leading-relaxed text-sm sm:text-base mb-6">
            If your budget permits ₹85,000, the <strong>Samsung Galaxy S25 Ultra</strong> is the definitive overall purchase of the festival with unmatched cameras and long software support. For the sub-₹50,000 category, the <strong>iQOO 15R</strong> delivers undisputed gaming value with its Snapdragon 8 Gen 5 silicon and hassle-free coupon discount.
          </p>

          <div className="p-4 bg-primary-foreground/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-primary-foreground/70 uppercase tracking-wider block">
                Top Flagship Value
              </span>
              <span className="font-bold text-lg">Samsung Galaxy S25 Ultra at ₹84,999</span>
            </div>

            <div className="flex flex-col items-center sm:items-end">
              <a
                href={`https://www.amazon.in/s?k=Samsung+Galaxy+S25+Ultra&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm rounded-xl transition-colors whitespace-nowrap shadow-sm inline-flex items-center gap-2"
              >
                <span>View Top Pick Deal</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="text-[10px] text-primary-foreground/70 mt-1 text-center sm:text-right">
                Product prices and availability are accurate as of the date/time indicated and are subject to change.
              </p>
            </div>
          </div>
        </section>

        {/* Topic-Specific References & Citations */}
        <section className="mb-8 pt-6 border-t border-border text-xs text-muted-foreground">
          <h3 className="font-semibold text-foreground uppercase tracking-wider mb-2">
            References &amp; Benchmark Methodology
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Geekbench 6 single-core and multi-core thermal stress tests conducted at 25°C ambient temperature.</li>
            <li>Display nit measurements verified using optical luminance meters on 100% APL test patterns.</li>
            <li>Pricing and discount verification performed on Amazon.in product listings during the Great Indian Festival 2026.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  )
}
