import Link from 'next/link'
import { Trophy, ArrowRight } from 'lucide-react'

interface Winner {
  category: string
  product: string
  reason: string
  href: string
}

interface WinnerCardsProps {
  winners: Winner[]
}

export function WinnerCards({ winners }: WinnerCardsProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="h-5 w-5 text-accent" />
        <h2 className="font-serif text-2xl font-semibold text-foreground">Category Winners</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {winners.map((winner, index) => (
          <div
            key={index}
            className="bg-card rounded-xl border border-border p-5 hover:border-accent/50 transition-colors"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wide">
              {winner.category}
            </span>
            <h3 className="font-serif text-lg font-semibold text-foreground mt-1">
              {winner.product}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {winner.reason}
            </p>
            <div className="flex items-center justify-between mt-4">
              <Link
                href={winner.href}
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
              >
                View Review
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
