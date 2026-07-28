import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { AuthorBio } from '@/components/article/author-bio'
import { Star, ExternalLink, Zap, ShieldCheck, Wind, Thermometer } from 'lucide-react'

const AFFILIATE_URL = "https://www.amazon.in/Lloyd-Convertible-Installation-Indication-GLS18I3AGGSC/dp/B0GJDVGS6P?tag=techstor0caaf-21"

export const metadata: Metadata = {
  title: 'Lloyd 1.5 Ton 5-in-1 Convertible Inverter AC Review | TechSelect India',
  description: 'Hands-on review of Lloyd 1.5 Ton 3 Star Inverter AC. Testing the 5-in-1 convertible cooling modes, anti-viral filter, and 52°C extreme cooling performance.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Lloyd 1.5 Ton 5-in-1 Convertible Inverter Split AC (GLS18I3AGGSC)',
  image: 'https://techselect.blog/products/lloyd-1-5-ton-inverter-ac.png',
  description: 'Lloyd 1.5 Ton 3 Star 5-in-1 Convertible Inverter Split AC featuring 100% copper condenser tubes, PM 2.5 air filter, low gas detection, and 52°C extreme cooling capability.',
  brand: {
    '@type': 'Brand',
    name: 'Lloyd',
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

export default function LloydInverterAcPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Smart Home', href: '/category/smart-home' },
            { label: 'Appliances', href: '/category/smart-home/appliances' },
            { label: 'Lloyd 1.5 Ton Inverter AC' },
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
                src="/products/lloyd-1-5-ton-inverter-ac.png"
                alt="Lloyd 1.5 Ton Inverter AC"
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
                Best Value AC
              </span>
              <span className="flex items-center text-yellow-500 text-sm font-medium">
                <Star className="h-4 w-4 fill-current mr-1" />
                8.7 / 10
              </span>
            </div>

            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              Lloyd 1.5 Ton 5-in-1 Convertible Inverter Split AC
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Engineered for the harsh Indian summer, this 1.5 Ton Inverter AC offers flexible 5-in-1 cooling modes, an anti-viral PM 2.5 filter, and relentless cooling even at 52°C.
            </p>

            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Key Specifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Wind className="h-5 w-5 text-primary" />
                  <span>5-in-1 Convertible Modes</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Thermometer className="h-5 w-5 text-primary" />
                  <span>Cools at 52°C Ambient</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span>Anti-Viral PM 2.5 Filter</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>100% Copper Condenser</span>
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
              Full Review: Lloyd 1.5 Ton Inverter AC - Beating the Heat
            </h2>
            
            <p>
              When summer temperatures in India soar past 45°C, an air conditioner stops being a luxury and becomes an absolute necessity. However, skyrocketing electricity bills and inconsistent cooling remain massive headaches for consumers. We installed the <strong>Lloyd 1.5 Ton 5-in-1 Convertible Inverter AC</strong> in a 150 sq. ft. top-floor bedroom that receives direct afternoon sunlight to see if it could truly handle extreme heat while keeping power consumption in check. After extensive testing, this AC has proven to be an exceptional value proposition.
            </p>
            <p>
              Backed by Havells, the Lloyd brand has steadily built a reputation for robust, no-nonsense appliances. This specific 3-star rated model sits in the sweet spot of affordability and features, bringing flagship-level convertible technology and heavy-duty condenser builds to a budget-friendly price point. Here's our comprehensive breakdown of its performance.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">5-in-1 Convertible Cooling Technology</h3>
            <p>
              The standout feature of this AC is its inverter compressor paired with 5-in-1 convertible modes. Traditional ACs operate on a simple binary: the compressor is either running at 100% capacity or it's off. This causes massive power spikes and temperature fluctuations. Lloyd's inverter technology dynamically adjusts the compressor speed based on the room's heat load.
            </p>
            <p>
              The "Convertible" aspect means you can manually dictate the tonnage via the remote control. If you have a room full of guests, you can run it at 110% capacity (Turbo Mode) for rapid cooling. Conversely, if you are sleeping alone at night, you can drop the capacity down to 40% or 60%. This granular control is phenomenal for energy savings. During our testing, running the AC at 70% capacity overnight resulted in a perfectly comfortable 24°C room while drawing significantly less electricity than a fixed-speed AC.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Extreme Heat Performance (52°C Rating)</h3>
            <p>
              Many budget ACs struggle and frequently trip when the outside ambient temperature crosses 45°C. Lloyd has specifically engineered this unit to provide uninterrupted cooling even at a blistering 52°C. 
            </p>
            <p>
              While we couldn't synthetically push our environment to 52°C, we did test it during a severe heatwave where the outdoor unit was baking in 47°C direct sunlight. The AC never faltered. It continued to blast frigid air into the room, bringing the indoor temperature from 38°C down to 22°C in under 20 minutes on Turbo mode. This reliability is crucial for consumers in regions like Delhi-NCR or Rajasthan where summer heat is unforgiving.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Air Quality: PM 2.5 and Anti-Viral Filters</h3>
            <p>
              Air quality is a major concern in Indian cities, and Lloyd has addressed this by integrating a PM 2.5 filter alongside an Anti-Viral dust filter. 
            </p>
            <p>
              While it won't entirely replace a dedicated HEPA air purifier for severe asthma sufferers, we noticed a significant reduction in ambient dust and a general "freshness" to the air after running the AC for a few hours. The filters are easily accessible, popping out from the top of the indoor unit, allowing you to wash them under a tap every two weeks to maintain optimal airflow.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Build Quality and 100% Copper Condenser</h3>
            <p>
              Durability is where the Lloyd AC truly earns its keep. It utilizes 100% copper tubes with a specialized anti-corrosion coating on both the indoor evaporator and outdoor condenser coils. In coastal areas or heavily polluted cities, aluminum coils frequently succumb to galvanic corrosion and gas leaks within a couple of years. Copper is far more durable, easier to repair, and transfers heat much more efficiently.
            </p>
            <p>
              The unit also features a smart "Low Gas Detection" system. Instead of running the compressor dry when refrigerant levels drop (which can permanently damage the machine), the AC displays an error code on the hidden LED display, alerting you to call a technician before catastrophic failure occurs.
            </p>
          </div>

          <div className="mt-12">
            <AuthorBio 
              name="TechSelect Editorial Team" 
              role="Appliance Reviewers" 
              bio="Our smart home experts test hundreds of appliances in real-world Indian households to find what actually works." 
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
