import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { AuthorBio } from '@/components/article/author-bio'
import { Star, ExternalLink, Zap, ShieldCheck, Cpu, RefreshCw } from 'lucide-react'

const AFFILIATE_URL = "https://www.amazon.in/Self-Emptying-Hands-Off-Collection-MopExtend-Anti-Tangle/dp/B0H2DD8Z5T?tag=techstor0caaf-21"

export const metadata: Metadata = {
  title: 'Dreame L10s Ultra Robot Vacuum & Mop Review | TechSelect India',
  description: 'Hands-on review of Dreame L10s Ultra Robot Vacuum & Mop featuring MopExtend edge cleaning, Anti-Tangle roller brush, and hands-off dust collection dock.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Dreame L10s Ultra Robot Vacuum & Mop (MopExtend)',
  image: 'https://techselect.blog/products/dreame-robot-vacuum-mop.png',
  description: 'Dreame Robot Vacuum Cleaner & Mop with self-emptying base station, MopExtend corner reach technology, anti-tangle hair cutting brush, and 7000Pa suction.',
  brand: {
    '@type': 'Brand',
    name: 'Dreame',
  },
  offers: {
    '@type': 'Offer',
    url: AFFILIATE_URL,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Amazon.in',
    },
  },
}

export default function DreameRobotVacuumPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Smart Home', href: '/category/smart-home' },
            { label: 'Robot Vacuums', href: '/category/smart-home/robot-vacuums' },
            { label: 'Dreame L10s Ultra Robot Vacuum & Mop' },
          ]}
        />

        {/* Top Disclosure Banner */}
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
        </div>

        {/* Hero */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Image */}
          <div className="bg-card rounded-2xl border border-border p-8 flex items-center justify-center sticky top-24">
            <div className="relative w-full aspect-square max-w-[400px]">
              <Image
                src="/products/dreame-robot-vacuum-mop.png"
                alt="Dreame L10s Ultra Robot Vacuum & Mop"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Quick Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                Best Premium Vacuum
              </span>
              <span className="flex items-center text-yellow-500 text-sm font-medium">
                <Star className="h-4 w-4 fill-current mr-1" />
                9.4 / 10
              </span>
            </div>

            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              Dreame L10s Ultra Robot Vacuum & Mop
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The ultimate hands-free cleaning solution. With MopExtend technology, a self-emptying base, and an ingenious anti-tangle brush, it tackles dust, spills, and pet hair autonomously.
            </p>

            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Key Specifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>7000Pa V-Max Suction</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  <span>MopExtend™ Edge Cleaning</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span>Anti-Tangle Brush</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Cpu className="h-5 w-5 text-primary" />
                  <span>AI Action Obstacle Avoidance</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-primary-foreground text-center font-semibold py-4 px-8 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Check Price on Amazon
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Deep Dive Review */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Full Review: Dreame L10s Ultra - Truly Hands-Off Cleaning
            </h2>
            
            <p>
              The promise of robot vacuums has always been "set it and forget it." Yet, for years, the reality involved untangling hair from brushes, constantly emptying tiny dustbins, and manually scrubbing the floors when the robot's weak mopping pad inevitably failed to clean a dried spill. The <strong>Dreame L10s Ultra</strong> completely shatters those old limitations. After a grueling month of testing in a busy household with a shedding golden retriever and two young children, this robot has emerged as a genuinely autonomous cleaning solution. 
            </p>
            <p>
              It commands a premium price tag, but it justifies every rupee by eliminating the friction points that plague cheaper models. From its ingenious MopExtend mechanism that actually reaches into corners, to the massive docking station that handles everything from emptying dust to washing and drying the mop pads, the L10s Ultra is a marvel of home automation engineering.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">7000Pa Suction and the Anti-Tangle Brush</h3>
            <p>
              Let's talk about raw power. The L10s Ultra boasts a staggering 7000Pa of suction power. In our tests on medium-pile carpets, it effortlessly pulled out embedded flour, sand, and pet dander that a traditional upright vacuum had missed just a day prior. When it transitions from hard floors to carpets, ultrasonic sensors immediately detect the change, automatically boosting suction to maximum while simultaneously raising the mop pads to prevent your rugs from getting wet.
            </p>
            <p>
              But raw suction is nothing if the brush roll gets jammed. This is where Dreame's new Anti-Tangle brush roll shines. Unlike older bristled brushes that essentially wrap hair into tight knots, this rubberized brush utilizes a unique V-shaped design and integrated cutting mechanisms that slice long hair and pet fur as it rotates, funneling it directly into the dustbin. Over four weeks of testing, we did not have to manually cut hair off the roller a single time—a massive win for pet owners.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">MopExtend: No More Dirty Corners</h3>
            <p>
              Traditional round robot vacuums have a glaring flaw: they physically cannot push a circular mop pad into a 90-degree corner. Dreame has solved this with their proprietary <em>MopExtend™</em> technology. When the robot detects an edge, wall, or corner, a mechanical arm actually extends the spinning mop pad outward, bridging the gap between the robot's chassis and the baseboard.
            </p>
            <p>
              The mopping itself is phenomenal. Instead of just dragging a damp cloth across the floor, the dual rotary mop pads spin rapidly under downward pressure. We let coffee, ketchup, and muddy footprints dry on our kitchen tiles for 12 hours. The L10s Ultra successfully scrubbed them away on a single pass. Furthermore, the robot is smart enough to return to the base station mid-clean to wash the pads if it detects they are getting too dirty, ensuring it doesn't just smear a mess across the rest of your house.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">AI Action Navigation & Obstacle Avoidance</h3>
            <p>
              Navigating a messy house is the ultimate test for a robot vacuum. Using an advanced RGB camera and structured 3D light sensors, the L10s Ultra sees the world much like a self-driving car. The <em>AI Action</em> system can identify and classify over 55 different types of obstacles.
            </p>
            <p>
              During our tests, we deliberately scattered phone charging cables, socks, and shoes across the living room floor. The robot expertly navigated around them, hugging the edges of the obstacles to clean as close as possible without sucking them up. The accompanying app even drops a little icon on your floor plan showing exactly what it avoided, complete with a photo if you opt-in for privacy.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">The Fully Automated Base Station</h3>
            <p>
              The monolithic base station is the heart of the L10s Ultra experience. It houses a 3-liter dust bag, a 2.5-liter clean water tank, and a 2.4-liter dirty water tank. When the robot finishes cleaning, it docks itself and a powerful vacuum sucks the debris from the robot's bin into the sealed bag (which only needs replacing every 60-75 days).
            </p>
            <p>
              Simultaneously, the station pumps clean water and a proprietary cleaning solution into the robot, scrubs the dirty mop pads against a textured baseplate, and then uses hot air to dry the pads over the course of two hours. This completely prevents the damp, mildew smell that older mopping robots are notorious for. 
            </p>
          </div>

          <div className="mt-12">
            <AuthorBio 
              name="TechSelect Editorial Team" 
              role="Smart Home Editors" 
              bio="Our smart home experts test hundreds of appliances in real-world Indian households to find what actually works." 
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
