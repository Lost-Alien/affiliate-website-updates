import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-3">
            Expert Reviews You Can Trust
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Make Smarter Tech Decisions
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
            We test hundreds of products to bring you honest, unbiased reviews and buying guides for the Indian market. No hype, no fluff — just the information you need.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/article/best-wireless-earbuds-budget"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground text-primary font-medium rounded-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Browse Buying Guides
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/how-we-test"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary-foreground/30 text-primary-foreground font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              How We Test
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
