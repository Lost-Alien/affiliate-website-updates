import { Award, Star, ExternalLink } from 'lucide-react'
import { getAmazonAffiliateUrl } from '@/lib/affiliate'

interface ReviewVerdictProps {
  rating: number
  summary: string
  recommendation: string
  productName: string
}

export function ReviewVerdict({
  rating,
  summary,
  recommendation,
  productName,
}: ReviewVerdictProps) {
  const targetUrl = getAmazonAffiliateUrl(productName)

  const getVerdictLabel = (rating: number) => {
    if (rating >= 9) return 'Excellent'
    if (rating >= 8) return 'Great'
    if (rating >= 7) return 'Good'
    if (rating >= 6) return 'Decent'
    return 'Fair'
  }

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <Award className="h-5 w-5 text-accent" />
        <h2 className="font-serif text-2xl font-semibold text-foreground">Final Verdict</h2>
      </div>

      <div className="bg-primary text-primary-foreground rounded-xl overflow-hidden">
        {/* Score Banner */}
        <div className="flex items-center justify-between p-6 border-b border-primary-foreground/10">
          <div>
            <p className="text-sm text-primary-foreground/70">TechSelect Score</p>
            <p className="text-4xl font-bold mt-1">{rating.toFixed(1)}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(rating / 2)
                      ? 'fill-primary-foreground text-primary-foreground'
                      : 'text-primary-foreground/30'
                  }`}
                />
              ))}
            </div>
            <p className="text-lg font-semibold mt-1">{getVerdictLabel(rating)}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Summary</h3>
            <p className="text-primary-foreground/90 leading-relaxed">{summary}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Who Should Buy?</h3>
            <p className="text-primary-foreground/90 leading-relaxed">{recommendation}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg">
            <div className="flex-1">
              <p className="font-semibold text-lg">{productName}</p>
            </div>
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
            >
              Check Price on Amazon.in
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
