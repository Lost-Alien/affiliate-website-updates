import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export function LatestReviews() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Top-Rated Products</h2>
        <Link
          href="/category/audio"
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
        >
          All reviews
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <Star className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
        <h3 className="font-serif text-lg font-medium text-foreground mb-1">No Reviews Published Yet</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Honest hands-on product reviews and ratings will appear here once our lab testing completes.
        </p>
      </div>
    </section>
  )
}
