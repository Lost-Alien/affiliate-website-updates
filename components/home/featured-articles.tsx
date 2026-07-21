import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, ExternalLink } from 'lucide-react'

const ASUS_ROG_URL =
  'https://www.amazon.in/dp/B0F5BH7D1L?th=1&linkCode=ll2&tag=techstor0caaf-21&linkId=5d528a812b0131c07a2021e4fa256922&ref_=as_li_ss_tl'

export function FeaturedArticles() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Featured Guides</h2>
        <Link
          href="/category/computers/laptops"
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
        >
          View all
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Top Featured Product */}
      <div className="bg-card border border-border rounded-xl overflow-hidden mb-4 group hover:border-accent/50 transition-all hover:shadow-md">
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <Link href="/products/asus-rog-strix-g16" className="sm:w-56 flex-shrink-0 block">
            <div className="relative aspect-square sm:h-full bg-muted overflow-hidden">
              <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                #1 Top Pick
              </span>
              <Image
                src="/products/asus-rog-strix-g16.jpg"
                alt="ASUS ROG Strix G16"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 224px"
              />
            </div>
          </Link>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                Gaming Laptops · Computers
              </span>
              <Link href="/products/asus-rog-strix-g16">
                <h3 className="mt-1 font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                  ASUS ROG Strix G16 (G615LR-S5190WS)
                </h3>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                Intel Core Ultra 9 275HX · RTX 5070 Ti 12GB · 32GB DDR5 · 2.5K 240Hz Display — the most powerful gaming laptop in India right now.
              </p>

              {/* Rating + Price */}
              <div className="mt-3 flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-bold text-foreground">9.4</span>
                  <span className="text-xs text-muted-foreground">/ 10</span>
                </div>
                <span className="text-sm font-bold text-foreground">₹2,75,990</span>
                <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 font-semibold px-2 py-0.5 rounded-full">
                  Editor&apos;s Choice
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={ASUS_ROG_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Buy on Amazon.in
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/products/asus-rog-strix-g16"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Full Review
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* More guides coming soon */}
      <div className="bg-muted/40 border border-dashed border-border rounded-xl p-5 text-center">
        <p className="text-sm text-muted-foreground">
          More buying guides coming soon — our team is testing new products daily.
        </p>
      </div>
    </section>
  )
}
