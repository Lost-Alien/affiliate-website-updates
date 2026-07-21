import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'

interface Product {
  id: string
  name: string
  rating: number
  badge: string
  highlights: string[]
  href: string
}

interface ComparisonOverviewProps {
  products: Product[]
}

export function ComparisonOverview({ products }: ComparisonOverviewProps) {
  return (
    <section>
      <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Quick Overview</h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-card rounded-xl border border-border p-5 flex flex-col"
          >
            {/* Badge */}
            <span className="inline-block self-start px-2.5 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-3">
              {product.badge}
            </span>

            {/* Product Image Placeholder */}
            <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
              <div className="w-2/3 h-2/3 bg-gradient-to-br from-secondary to-muted rounded-lg" />
            </div>

            {/* Info */}
            <h3 className="font-semibold text-foreground">{product.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-medium text-foreground">{product.rating.toFixed(1)}</span>
              </div>
            </div>

            {/* Highlights */}
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground flex-1">
              {product.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index}>• {highlight}</li>
              ))}
            </ul>

            {/* Links */}
            <div className="mt-4 flex gap-2">
              <Link
                href={product.href}
                className="flex-1 text-center text-sm font-medium py-2 px-3 border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                Full Review
              </Link>
              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-1 flex-1 text-sm font-medium py-2 px-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                View on Amazon
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
