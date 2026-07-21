import { Award, ExternalLink } from 'lucide-react'
import { getAmazonAffiliateUrl } from '@/lib/affiliate'

interface QuickVerdictProps {
  winner: {
    name: string
    href: string
  }
  summary: string
}

export function QuickVerdict({ winner, summary }: QuickVerdictProps) {
  return (
    <section>
      <div className="bg-primary text-primary-foreground rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5" />
          <h2 className="font-serif text-xl font-semibold">The Bottom Line</h2>
        </div>

        <p className="text-primary-foreground/90 leading-relaxed mb-6">
          {summary}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg">
          <div className="flex-1">
            <p className="text-sm text-primary-foreground/70">Our Top Pick</p>
            <p className="font-semibold text-lg">{winner.name}</p>
          </div>
          <a
            href={getAmazonAffiliateUrl(winner.name)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
          >
            Check Price on Amazon.in
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
