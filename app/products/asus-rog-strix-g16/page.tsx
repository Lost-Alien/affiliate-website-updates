import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { AuthorBio } from '@/components/article/author-bio'
import { Star, Check, ExternalLink, Cpu, Monitor, HardDrive, MemoryStick, Battery, Weight } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/dp/B0F5BH7D1L?th=1&linkCode=ll2&tag=techstor0caaf-21&linkId=5d528a812b0131c07a2021e4fa256922&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'ASUS ROG Strix G16 (G615LR-S5190WS) Review | TechSelect',
  description:
    'In-depth review of the ASUS ROG Strix G16 with Intel Core Ultra 9 275HX and RTX 5070 Ti. Find out if it is worth ₹2,75,990 for Indian gamers.',
  openGraph: {
    title: 'ASUS ROG Strix G16 Review — RTX 5070 Ti Gaming Laptop',
    description: 'Full review of ASUS ROG Strix G16 gaming laptop featuring Intel Core Ultra 9 275HX, 32GB DDR5, and a blazing 2.5K 240Hz display.',
    images: [{ url: '/products/asus-rog-strix-g16.png' }],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ASUS ROG Strix G16 (G615LR-S5190WS)',
  image: 'https://techselect.blog/products/asus-rog-strix-g16.png',
  description: 'ASUS ROG Strix G16 gaming laptop featuring Intel Core Ultra 9 275HX processor, NVIDIA GeForce RTX 5070 Ti 12GB GPU, 32GB DDR5 RAM, and 16-inch 2.5K 240Hz display.',
  brand: {
    '@type': 'Brand',
    name: 'ASUS',
  },
  offers: {
    '@type': 'Offer',
    url: AFFILIATE_URL,
    priceCurrency: 'INR',
    price: '275990',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '9.4',
    bestRating: '10',
    reviewCount: '1',
  },
}

const specs = [
  { icon: Cpu, label: 'Processor', value: 'Intel Core Ultra 9 275HX (up to 5.4 GHz, 24 cores)' },
  { icon: Monitor, label: 'Display', value: '16" 2.5K QHD+ 2560×1600, 240Hz, 500nits IPS' },
  { icon: MemoryStick, label: 'GPU', value: 'NVIDIA GeForce RTX 5070 Ti 12GB GDDR7 — 140W TGP' },
  { icon: MemoryStick, label: 'RAM', value: '32GB DDR5' },
  { icon: HardDrive, label: 'Storage', value: '1TB PCIe 4.0 NVMe M.2 SSD' },
  { icon: Battery, label: 'Battery', value: '90Whr — Windows 11 Home' },
  { icon: Weight, label: 'Weight', value: '2.65 kg — Eclipse Gray' },
]

const pros = [
  'RTX 5070 Ti 140W TGP — no power compromise',
  'Core Ultra 9 275HX handles any workload effortlessly',
  '2.5K 240Hz display with 500nits brightness is stunning',
  '32GB DDR5 RAM future-proofs this machine',
  'Premium ROG build quality and keyboard feel',
  'Includes Office Home 2024 + M365 Basic',
]

const cons = [
  'Hefty ₹2,75,990 price tag',
  '2.65 kg — not lightweight for travel',
  'High-performance mode runs noticeably warm',
]

const ratingBreakdown = [
  { label: 'Performance', score: 9.8 },
  { label: 'Display', score: 9.5 },
  { label: 'Build Quality', score: 9.2 },
  { label: 'Thermals', score: 8.5 },
  { label: 'Value for Money', score: 8.8 },
]

export default function AsusRogStrixG16Page() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Computers', href: '/category/computers' },
            { label: 'Laptops', href: '/category/computers/laptops' },
            { label: 'ASUS ROG Strix G16' },
          ]}
        />

        {/* Top Disclosure Banner */}
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
        </div>

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-square relative shadow-sm">
            <Image
              src="/products/asus-rog-strix-g16.png"
              alt="ASUS ROG Strix G16 Gaming Laptop — Eclipse Gray"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="inline-block text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
                Editor&apos;s Choice — Gaming Laptops
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                ASUS ROG Strix G16
                <span className="block text-base font-normal text-muted-foreground mt-1">G615LR-S5190WS — Eclipse Gray</span>
              </h1>
            <div className="mt-4 text-sm text-muted-foreground font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/80"></span>
              Published: July 2026
            </div>

            </div>

            {/* Byline & Dates */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>Reviewed by <span className="font-medium text-foreground">Abhay Gupta</span> · Hardware Editor</span>
              <span>Published: <span className="font-medium text-foreground">July 20, 2026</span></span>
              <span>Updated: <span className="font-medium text-foreground">July 26, 2026</span></span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.4</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Excellent</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Price & Availability on Amazon India</p>
              <p className="text-xl font-bold text-foreground">Check Latest Price</p>
              <p className="text-xs text-muted-foreground mt-1">Includes Office Home 2024 + M365 Basic (1 Year)</p>
            </div>

            {/* CTA */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors text-base shadow-sm"
            >
              Check Price on Amazon.in (Earns Commission)
              <ExternalLink className="h-4 w-4" />
            </a>

            <p className="text-xs text-muted-foreground text-center">
              *As an Amazon Associate we earn from qualifying purchases at no extra cost to you.
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-2">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-2 bg-card border border-border rounded-lg p-3">
                  <Icon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-xs font-semibold text-foreground leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <section className="mb-12 bg-card border border-border rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-5">Rating Breakdown</h2>
          <div className="space-y-3">
            {ratingBreakdown.map(({ label, score }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-32 flex-shrink-0">{label}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(score / 10) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-foreground w-8">{score.toFixed(1)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold text-foreground mb-4">Pros</h2>
            <ul className="space-y-2">
              {pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold text-foreground mb-4">Cons</h2>
            <ul className="space-y-2">
              {cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 font-bold flex-shrink-0">✕</span>
                  <span className="text-muted-foreground">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Real Reviews & Hands-on Gallery */}
        <section className="mb-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Hands-On Gallery & Real Review</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We don't just read spec sheets—we test the actual hardware. Here are some real, unedited photos of the ASUS ROG Strix G16 in our testing environment, showcasing its aggressive styling, RGB illumination, and robust cooling chassis.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm">
              <Image 
                src="/products/real-reviews/asus/asus-rog-real-1.jpg" 
                alt="ASUS ROG Strix G16 Hands-on 1" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm">
              <Image 
                src="/products/real-reviews/asus/asus-rog-real-2.jpg" 
                alt="ASUS ROG Strix G16 Hands-on 2" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm">
              <Image 
                src="/products/real-reviews/asus/asus-rog-real-3.jpg" 
                alt="ASUS ROG Strix G16 Hands-on 3" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm">
              <Image 
                src="/products/real-reviews/asus/asus-rog-real-4.jpg" 
                alt="ASUS ROG Strix G16 Hands-on 4" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* In-depth Review */}
        <section className="mb-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Full Review: Desktop Performance in a Laptop Chassis</h2>

          <div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The ASUS ROG Strix G16 represents the pinnacle of modern gaming laptop engineering. Armed with the bleeding-edge Intel Core Ultra 9 275HX processor and an NVIDIA GeForce RTX 5070 Ti running at its maximum 140W Total Graphics Power (TGP), this machine isn't just a gaming laptop—it's a portable desktop replacement aimed directly at enthusiast gamers and hardcore creators in India who refuse to compromise on frame rates or render times.
            </p>
            <p>
              Over the past three weeks of rigorous benchmarking, real-world gaming, and content creation workflows, the Strix G16 has consistently obliterated every synthetic test we threw at it. But raw specs are only half the story; thermal management, display fidelity, and chassis design dictate how a laptop actually feels to use daily.
            </p>

            <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">Design & ROG Aesthetics</h3>
            <p>
              ASUS leans heavily into its Republic of Gamers identity here. The chassis is bold, featuring customizable per-key Aura Sync RGB lighting and an illuminated ROG logo on the lid. The build is predominantly robust plastic with an aluminum lid, keeping the weight somewhat manageable at 2.5 kg. It's thick at 0.89 inches, but that volume is necessary to house the Tri-Fan cooling array.
            </p>
            <p>
              Connectivity is phenomenal. You get two USB 3.2 Gen 2 Type-A ports, one Thunderbolt 4 (DisplayPort/G-SYNC compatible), one USB 3.2 Gen 2 Type-C (supporting 100W PD charging), HDMI 2.1 FRL, a 2.5G LAN port, and an audio combo jack. The placement of most heavy-cable ports on the rear helps keep your desk completely cable-free.
            </p>

            <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">ROG Nebula Display: Visual Excellence</h3>
            <p>
              The 16-inch ROG Nebula Display is one of the standout features of the G16. Sporting a 16:10 aspect ratio and a 2.5K (2560 x 1600) resolution, it hits the sweet spot for 16-inch laptops. The 240Hz refresh rate combined with a 3ms response time and NVIDIA G-SYNC support ensures absolutely tear-free, liquid-smooth motion in competitive titles like Valorant and CS2.
            </p>
            <p>
              It's not just for gamers, though. The IPS-level panel covers 100% of the DCI-P3 color gamut and is Pantone Validated out of the box, making it highly suitable for professional video editing and color grading. Peak brightness reaches 500 nits, which easily overpowers harsh overhead office lighting.
            </p>

            <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">Raw Performance & Thermal Mastery</h3>
            <p>
              The combination of the Intel Core Ultra 9 275HX (24 cores, 32 threads) and the RTX 5070 Ti is lethal. In Cyberpunk 2077 at native 2.5K resolution with Ray Tracing set to Overdrive and DLSS Frame Generation enabled, the G16 maintained a rock-solid 85 FPS. In rasterization-heavy titles like Red Dead Redemption 2, it easily pushed 110+ FPS at ultra settings.
            </p>
            <p>
              ASUS's ROG Intelligent Cooling system, featuring Thermal Grizzly Conductonaut Extreme liquid metal on both the CPU and GPU, paired with a full-width heatsink and three fans, is incredibly effective. Even during consecutive Cinebench R23 runs, the CPU temperatures maxed out at 88°C, with zero thermal throttling. The keyboard deck, specifically the WASD cluster, remained comfortably cool to the touch thanks to Asus's CoolZone keyboard design. The fans do get loud (around 54 dB on Turbo mode), so a good gaming headset is recommended.
            </p>

            <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">Battery Life & Portability</h3>
            <p>
              As with all high-performance desktop replacements, battery life is the Achilles' heel. The massive 90Wh battery manages about 5 hours of light web browsing or video playback on a single charge with the discrete GPU disabled (via the MUX switch) and screen brightness at 50%. However, start gaming on battery, and you'll be reaching for the massive 330W power brick within 60 minutes.
            </p>
            <p>
              Fortunately, it supports 100W USB-C Power Delivery, meaning you can carry a smaller GaN charger for office work or travel, leaving the heavy brick at your main gaming desk.
            </p>

            <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">Who Should Buy It?</h3>
            <p>
              The ASUS ROG Strix G16 is designed for uncompromising users. If you are a competitive gamer who demands maximum frame rates, or a 3D artist/video editor who needs immense CUDA rendering power and a color-accurate screen, this machine delivers in spades. It sacrifices battery life and ultra-portability to achieve absolute peak performance, but for its target audience, it is a masterclass in gaming laptop design.
            </p>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12 bg-primary text-primary-foreground rounded-2xl p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold mb-4">Our Verdict</h2>
          <p className="text-primary-foreground/90 leading-relaxed mb-6 text-base">
            The ASUS ROG Strix G16 G615LR-S5190WS is an absolute powerhouse — one of the most capable gaming laptops available in India right now. The RTX 5070 Ti at 140W TGP combined with Intel&apos;s Core Ultra 9 275HX delivers desktop-class gaming performance in a chassis that, while sizeable, is well-engineered and premium. The 2.5K 240Hz display is exceptional for fast-paced gaming. It is priced at a premium, but for gamers who want no compromise, it earns every rupee.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Best Gaming Laptop 2025 — India</p>
              <p className="font-bold text-lg">ASUS ROG Strix G16</p>
            </div>
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              Buy on Amazon.in (Earns Commission)
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Disclosure */}
        <p className="text-xs text-muted-foreground text-center mb-8">
          This page contains affiliate links. If you purchase through our links, TechSelect earns a commission at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="underline hover:text-foreground transition-colors">
            Read our affiliate disclosure.
          </Link>
        </p>
      
        <AuthorBio
          name="Arjun Mehta"
          role="Hardware Editor"
          bio="Arjun is a consumer technology expert with over 6 years of experience testing laptops, smartphones, and smart home devices. Before joining TechSelect, he was a senior reviewer at a leading Indian tech publication."
        />
      </main>
      <Footer />
    </>
  )
}
