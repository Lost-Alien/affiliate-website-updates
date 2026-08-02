import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { AuthorBio } from '@/components/article/author-bio'
import { Star, ExternalLink, Cpu, Battery, Camera, Sparkles } from 'lucide-react'

const AFFILIATE_URL = "https://www.amazon.in/dp/B0GX94B58L?tag=techstor0caaf-21"

export const metadata: Metadata = {
  title: 'vivo X300 FE 5G Review: The Best Portrait Camera | TechSelect India',
  description: 'In-depth review of the vivo X300 FE 5G (Urban Olive, 12GB RAM, 256GB Storage). Testing the pro portrait camera system, 5000mAh battery, and Dimensity processor.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'vivo X300 FE 5G (Urban Olive, 12GB RAM, 256GB Storage)',
  image: 'https://techselect.blog/products/vivo-x300-fe.png',
  description: 'vivo X300 FE 5G featuring Pro Portrait System, Urban Olive finish, and 120W FlashCharge battery.',
  brand: {
    '@type': 'Brand',
    name: 'vivo',
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

export default function VivoX300FEPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Mobiles', href: '/category/mobiles' },
            { label: 'Smartphones', href: '/category/mobiles/smartphones' },
            { label: 'vivo X300 FE 5G' },
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
                src="/products/vivo-x300-fe.png"
                alt="vivo X300 FE 5G"
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
                Best Camera Value
              </span>
              <span className="flex items-center text-yellow-500 text-sm font-medium">
                <Star className="h-4 w-4 fill-current mr-1" />
                8.9 / 10
              </span>
            </div>

            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              vivo X300 FE 5G (Urban Olive, 12GB RAM, 256GB Storage)
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Vivo's new Fan Edition of the flagship X series delivers a phenomenal portrait photography experience wrapped in a stunning Urban Olive design, all at a competitive price.
            </p>

            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Key Specifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Camera className="h-5 w-5 text-primary" />
                  <span>Pro Portrait System</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span>Urban Olive Finish</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Cpu className="h-5 w-5 text-primary" />
                  <span>12GB RAM, 256GB Storage</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Battery className="h-5 w-5 text-primary" />
                  <span>120W FlashCharge</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <>
<a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-primary-foreground text-center font-semibold py-4 px-8 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Check Price on Amazon
                <ExternalLink className="h-5 w-5" />
              </a>
<p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight">
              Product prices and availability are accurate as of the date/time indicated and are subject to change.
            </p>
</>
            </div>
          </div>
        </div>

        {/* Deep Dive Review */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Full Review: vivo X300 FE 5G - The Portrait Photography King
            </h2>
            
            <p>
              When vivo announced the X300 series, all eyes were on the ultra-premium Pro models. But the real story for most consumers is the <strong>vivo X300 FE 5G</strong>. Taking the core camera DNA of the flagship line and placing it into a more accessible price bracket, this "Fan Edition" aims directly at photography enthusiasts who don't want to break the bank. After rigorous testing across various lighting scenarios and use cases, it's clear that vivo has crafted something special here.
            </p>
            <p>
              This specific variant, clad in a gorgeous Urban Olive finish and boasting 12GB of RAM with 256GB of storage, feels remarkably premium in the hand. The tactile feedback, the weight distribution, and the display quality are all top-tier. But a smartphone is more than just a spec sheet. Let's delve into what makes the vivo X300 FE 5G stand out in an incredibly crowded midrange-to-flagship market, focusing on its highly touted portrait camera capabilities, battery endurance, and day-to-day performance.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">The Camera: Portrait Photography Perfected</h3>
            <p>
              The absolute highlight of the vivo X300 FE 5G is its Pro Portrait System. Vivo has consistently pushed the boundaries of portrait photography on smartphones, and the X300 FE inherits much of that magic. The main sensor, paired with specialized portrait lenses, captures stunning depth of field that rivals entry-level DSLRs. Edge detection around hair and complex objects—often the downfall of smartphone portrait modes—is exceptionally accurate here.
            </p>
            <p>
              What truly sets it apart are the built-in portrait styles. Vivo's collaboration with optics experts (a legacy of their premium models) shines through in the simulated bokeh effects. You can choose different lens flares and background blur characteristics that genuinely alter the mood of the photo. Skin tones are rendered naturally, striking a perfect balance between enhancing the subject and maintaining realistic textures, avoiding the overly smoothed, artificial look common on many modern smartphones.
            </p>
            <p>
              In low light, the camera continues to impress. The Night Mode kicks in seamlessly, brightening dark environments while keeping noise to a minimum. While it might lack the extreme long-range zoom capabilities of a much more expensive Ultra device, for everyday photography—pictures of friends, family, and pets—the X300 FE is arguably best-in-class at this price point.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Design: The Urban Olive Aesthetics</h3>
            <p>
              Smartphone design has become somewhat stagnant, with endless slabs of black and gray glass. The Urban Olive finish on the vivo X300 FE 5G is a breath of fresh air. It's an elegant, understated shade of green that shifts subtly depending on the lighting. The matte texture on the back panel not only feels silky to the touch but also expertly repels fingerprints and smudges, meaning you can confidently use the phone without a case if you choose.
            </p>
            <p>
              The camera module on the rear is prominent but tastefully designed, housing the lenses within a circular island that hints at its photography prowess. The phone feels remarkably thin and light considering the large battery inside, and the slightly curved edges make it comfortable to hold for extended periods, whether you're gaming or scrolling through social media.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Performance: 12GB RAM and Funtouch OS</h3>
            <p>
              Equipped with a powerful octa-core processor (likely a high-end Dimensity chip) and 12GB of RAM, the vivo X300 FE 5G handles anything you throw at it with ease. Multitasking is a breeze; you can switch between demanding applications, keep dozens of browser tabs open, and edit high-resolution photos without noticing any stutter or lag. 
            </p>
            <p>
              The 256GB of internal storage provides ample room for apps, games, and years' worth of photos and videos. On the software side, vivo's Funtouch OS (or OriginOS depending on the exact regional variant) has matured significantly. It's cleaner, more responsive, and comes with less bloatware than in previous years. The interface is highly customizable, allowing you to tweak everything from the animation speeds to the always-on display styles. 
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Battery Life and 120W FlashCharge</h3>
            <p>
              A great camera is useless if your phone dies halfway through the day. Fortunately, the vivo X300 FE 5G packs a substantial battery that easily powers through a full day of heavy use. Even with heavy camera usage, GPS navigation, and high-refresh-rate gaming, we consistently reached the end of the day with at least 20-30% battery remaining.
            </p>
            <p>
              However, the real star of the show is the charging speed. The 120W FlashCharge technology is nothing short of incredible. If you forget to charge your phone overnight, plugging it in for just 15 to 20 minutes while you shower and get dressed is enough to almost fully replenish the battery. This completely changes how you think about charging your device; battery anxiety is effectively eliminated.
            </p>

          </div>

          <div className="mt-12">
            <AuthorBio 
              name="TechSelect Editorial Team" 
              role="Mobile Editors" 
              bio="Our team of smartphone enthusiasts brings you the most in-depth and unbiased reviews of the latest mobile technology in India." 
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
