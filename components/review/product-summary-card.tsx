import { Star, Check, X, ExternalLink } from 'lucide-react'

interface ProductSummaryCardProps {
  productName: string
  rating: number
  ratingBreakdown: Record<string, number>
  bestFor: string[]
  specs: { label: string; value: string }[]
  pros: string[]
  cons: string[]
  amazonUrl?: string
}

export function ProductSummaryCard({
  productName,
  rating,
  ratingBreakdown,
  bestFor,
  specs,
  pros,
  cons,
  amazonUrl = 'https://www.amazon.in',
}: ProductSummaryCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Product Image */}
      <div className="aspect-video bg-muted flex items-center justify-center">
        <div className="w-1/3 h-2/3 bg-gradient-to-br from-secondary to-muted rounded-xl" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Header with Rating */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">{productName}</h2>
          </div>
          <div className="flex flex-col items-center bg-primary text-primary-foreground rounded-xl px-4 py-3">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-3xl font-bold">{rating.toFixed(1)}</span>
            </div>
            <span className="text-xs text-primary-foreground/80">TechSelect Score</span>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="p-4 bg-muted/50 rounded-lg">
          <h3 className="font-semibold text-foreground text-sm mb-3">Rating Breakdown</h3>
          <div className="space-y-2">
            {Object.entries(ratingBreakdown).map(([category, score]) => (
              <div key={category} className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground w-28">{category}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all"
                    style={{ width: `${(score / 10) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-foreground w-8">{score.toFixed(1)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Best For */}
        <div>
          <h3 className="font-semibold text-foreground text-sm mb-2">Best For</h3>
          <ul className="space-y-1">
            {bestFor.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Specs */}
        <div>
          <h3 className="font-semibold text-foreground text-sm mb-2">Key Specifications</h3>
          <div className="grid grid-cols-2 gap-2">
            {specs.map((spec, index) => (
              <div key={index} className="text-sm">
                <span className="text-muted-foreground">{spec.label}: </span>
                <span className="text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Pros</h3>
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
            <h3 className="font-semibold text-foreground mb-3">Cons</h3>
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
  )
}
