import { Star, Check, X, ExternalLink } from 'lucide-react'

interface ProductSectionProps {
  rank: number
  name: string
  tagline: string
  rating: number
  bestFor: string
  features: string[]
  pros: string[]
  cons: string[]
  verdict: string
  amazonUrl?: string
}

export function ProductSection({
  rank,
  name,
  tagline,
  rating,
  bestFor,
  features,
  pros,
  cons,
  verdict,
  amazonUrl = 'https://www.amazon.in',
}: ProductSectionProps) {
  return (
    <section className="scroll-mt-24" id={name.toLowerCase().replace(/\s+/g, '-')}>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                  #{rank}
                </span>
                <span className="text-sm font-medium text-accent">{tagline}</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">{name}</h3>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="text-2xl font-bold text-foreground">{rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Image Placeholder */}
        <div className="aspect-[3/2] bg-muted flex items-center justify-center">
          <div className="w-1/2 h-1/2 bg-gradient-to-br from-secondary to-muted rounded-xl" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Best For */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm">
              <span className="font-semibold text-foreground">Best for: </span>
              <span className="text-muted-foreground">{bestFor}</span>
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Pros</h4>
              <ul className="space-y-2">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Cons</h4>
              <ul className="space-y-2">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verdict */}
          <div className="pt-4 border-t border-border">
            <h4 className="font-semibold text-foreground mb-2">Our Verdict</h4>
            <p className="text-muted-foreground leading-relaxed">{verdict}</p>
          </div>

          {/* CTA */}
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
          >
            Check Price on Amazon.in
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
