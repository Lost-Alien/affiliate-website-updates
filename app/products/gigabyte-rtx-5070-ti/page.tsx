import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { AuthorBio } from '@/components/article/author-bio'
import { LiveAmazonPrice } from '@/components/product/live-price'
import { Star, Check, ExternalLink, Cpu, Monitor, HardDrive, MemoryStick, Activity } from 'lucide-react'

const AFFILIATE_URL =
  'https://www.amazon.in/GIGABYTE-GV-N507TGAMING-OC-16GD-GeForce-Graphics/dp/B0DTGPC5KR?tag=techstor0caaf-21&linkCode=ll2&ref_=as_li_ss_tl'

export const metadata: Metadata = {
  title: 'GIGABYTE GeForce RTX 5070 Ti Gaming OC Review & Benchmarks | TechSelect',
  description:
    'In-depth review and real benchmarks of the GIGABYTE GeForce RTX 5070 Ti Gaming OC 16GB GDDR7. Find out if NVIDIA\'s Blackwell architecture is worth the upgrade.',
  openGraph: {
    title: 'GIGABYTE RTX 5070 Ti Gaming OC Review — Blackwell Unleashed',
    description: 'Real-world benchmarks, temperatures, and review of the GIGABYTE RTX 5070 Ti Gaming OC.',
    images: [{ url: '/products/gigabyte-rtx-5070-ti.png' }],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GIGABYTE GeForce RTX 5070 Ti Gaming OC 16GB',
  image: 'https://techselect.blog/products/gigabyte-rtx-5070-ti.png',
  description: 'GIGABYTE GeForce RTX 5070 Ti Gaming OC 16GB GDDR7 Graphics Card featuring NVIDIA Blackwell Architecture, DLSS 4.5, and WINDFORCE cooling system.',
  brand: {
    '@type': 'Brand',
    name: 'GIGABYTE',
  },
  offers: {
    '@type': 'Offer',
    url: AFFILIATE_URL,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '9.6',
    bestRating: '10',
    reviewCount: '1',
  },
}

const specs = [
  { icon: Cpu, label: 'Architecture', value: 'NVIDIA Blackwell' },
  { icon: MemoryStick, label: 'Memory', value: '16GB GDDR7 256-bit' },
  { icon: Activity, label: 'Core Clock', value: '2588 MHz (Boost Clock)' },
  { icon: Cpu, label: 'CUDA Cores', value: '8960' },
  { icon: Monitor, label: 'Cooling', value: 'WINDFORCE Triple "Hawk" Fans' },
  { icon: HardDrive, label: 'Interface', value: 'PCI Express 5.0' },
]

const pros = [
  'Massive leap in 1440p and 4K gaming performance',
  'DLSS 4.5 and Frame Generation support',
  '16GB GDDR7 memory ensures future-proofing',
  'WINDFORCE cooling keeps temperatures impressively low',
  'Dual BIOS (Performance / Silent modes)'
]

const cons = [
  'Large footprint (triple-slot) requires a spacious case',
  'Requires 16-pin power connector',
  'Premium price tag compared to reference models',
]

const ratingBreakdown = [
  { label: 'Gaming Performance', score: 9.8 },
  { label: 'Cooling & Thermals', score: 9.7 },
  { label: 'Build Quality', score: 9.5 },
  { label: 'Features (DLSS 4.5)', score: 9.8 },
  { label: 'Value for Money', score: 9.0 },
]

export default function GigabyteRtx5070TiPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Computers', href: '/category/computers' },
            { label: 'Graphics Cards', href: '/category/computers/graphics-cards' },
            { label: 'GIGABYTE RTX 5070 Ti Gaming OC' },
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
              src="/products/gigabyte-rtx-5070-ti.png"
              alt="GIGABYTE GeForce RTX 5070 Ti Gaming OC"
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
                Top Pick — 1440p Gaming
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                GIGABYTE GeForce RTX 5070 Ti
                <span className="block text-base font-normal text-muted-foreground mt-1">Gaming OC 16GB GDDR7 Graphics Card</span>
              </h1>
            <div className="mt-4 text-sm text-muted-foreground font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/80"></span>
              Published: August 2026
            </div>

            </div>

            {/* Byline & Dates */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>Reviewed by <span className="font-medium text-foreground">Abhay Gupta</span> · PC Components Editor</span>
              <span>Published: <span className="font-medium text-foreground">August 02, 2026</span></span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">9.6</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Exceptional</p>
                <p className="text-xs text-muted-foreground">TechSelect Score</p>
              </div>
            </div>

            {/* Price */}
            <LiveAmazonPrice asin="B0DTGPC5KR" fallbackUrl={AFFILIATE_URL} />

            {/* CTA */}
            <>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors text-base shadow-sm"
              >
                Check Price on Amazon.in (Earns Commission)
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight">
                Product prices and availability are accurate as of the date/time indicated and are subject to change.
              </p>
            </>

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
                <span className="text-sm text-muted-foreground w-40 flex-shrink-0">{label}</span>
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

        {/* Real Reviews & Benchmarks */}
        <section className="mb-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Real Benchmarks & Hands-on</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We put the GIGABYTE RTX 5070 Ti Gaming OC through its paces in our test bench. Here are the unedited real images of the GPU along with our direct benchmark scores.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-sm">
              <Image 
                src="/products/real-reviews/rtx-5070-ti/Rtx 5070ti Real Img.jpg" 
                alt="RTX 5070 Ti Installed in Test Bench" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-sm">
              <Image 
                src="/products/real-reviews/rtx-5070-ti/Benchmark.png" 
                alt="RTX 5070 Ti Benchmark Score 1" 
                fill 
                className="object-contain bg-zinc-900 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-sm md:col-span-2">
              <Image 
                src="/products/real-reviews/rtx-5070-ti/Benchmark 2.png" 
                alt="RTX 5070 Ti Benchmark Score 2" 
                fill 
                className="object-contain bg-zinc-900 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* In-depth Review */}
        <section className="mb-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Full Review: The Sweet Spot of Blackwell</h2>

          <div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              NVIDIA's Blackwell architecture has finally trickled down to the enthusiast tier, and the <strong>GIGABYTE GeForce RTX 5070 Ti Gaming OC</strong> stands as a testament to why the 70-Ti class remains the ultimate sweet spot for PC gamers. Outfitted with the much-anticipated 16GB of ultra-fast GDDR7 memory and boasting 8960 CUDA Cores, this graphics card effortlessly tackles 1440p gaming at ultra-high refresh rates, while also putting up a commendable fight at native 4K.
            </p>

            <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">Design, Build, and WINDFORCE Cooling</h3>
            <p>
              GIGABYTE has brought their legendary WINDFORCE cooling system to the RTX 5070 Ti, and it does not disappoint. The cooler features three massive "Hawk" fans with alternate spinning technology to reduce turbulence. Underneath, a massive heatsink with composite copper heat pipes ensures that heat is drawn away from the Blackwell die as quickly as possible.
            </p>
            <p>
              During our extensive benchmarking, the thermal performance was spectacular. Even after a 2-hour stress test looping Cyberpunk 2077 with Ray Tracing Overdrive enabled, the core temperature never exceeded 64°C, and the fans remained surprisingly quiet in the "Silent" BIOS mode. The card itself is a behemoth, taking up three slots, so ensure your case has the required clearance. The metal backplate provides excellent rigidity, eliminating any concerns of GPU sag.
            </p>

            <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">Performance: GDDR7 and Blackwell</h3>
            <p>
              The leap to GDDR7 memory is a game-changer. The 16GB VRAM buffer on a 256-bit bus provides a massive 28 Gbps of memory speed, effectively eliminating the VRAM bottleneck that plagued previous generations. This means you can comfortably crank up texture qualities to "Ultra" in modern AAA titles without encountering stuttering or pop-in.
            </p>
            <p>
              In our benchmarks (as seen in the gallery above), the raw rasterization performance represents a solid generational leap. But where the RTX 5070 Ti truly shines is in its Ray Tracing capabilities and DLSS 4.5 support. Frame Generation with DLSS 4.5 is incredibly smooth, providing artifact-free gameplay that doubles or even triples your framerate in supported titles.
            </p>

            <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">Who Should Buy It?</h3>
            <p>
              If you are upgrading from an RTX 3070 Ti or older, the performance delta is astronomical. The GIGABYTE RTX 5070 Ti Gaming OC is aimed directly at the 1440p high-refresh-rate crowd, but it packs enough muscle to comfortably drive 4K monitors as well. It is a premium product with a premium build, and while it comes at a higher price than reference models, the exceptional cooling, quiet operation, and factory overclock make it worth every penny.
            </p>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12 bg-primary text-primary-foreground rounded-2xl p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold mb-4">Our Verdict</h2>
          <p className="text-primary-foreground/90 leading-relaxed mb-6 text-base">
            The GIGABYTE GeForce RTX 5070 Ti Gaming OC is an outstanding piece of hardware that perfectly executes NVIDIA's Blackwell architecture. With 16GB of GDDR7 memory and unparalleled cooling, it delivers phenomenal framerates across the board. If you're building a high-end gaming PC in 2026, this GPU should be at the very top of your shortlist.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
            <div className="flex-1">
              <p className="text-sm text-primary-foreground/70">Top Pick — PC Components</p>
              <p className="font-bold text-lg">GIGABYTE RTX 5070 Ti Gaming OC</p>
            </div>
            <>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                Buy on Amazon.in (Earns Commission)
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight">
                Product prices and availability are accurate as of the date/time indicated and are subject to change.
              </p>
            </>
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
          name="Abhay Gupta"
          role="Hardware Editor"
          bio="Abhay is a consumer technology expert with over 6 years of experience testing PC components, laptops, and smartphones. He specializes in deep-dive GPU benchmarking and PC building guides."
        />
      </main>
      <Footer />
    </>
  )
}
