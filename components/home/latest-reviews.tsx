import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, ExternalLink } from 'lucide-react'
import { SAMPLE_PRODUCTS } from '@/lib/categories'

export function LatestReviews() {
  const topRated = SAMPLE_PRODUCTS.slice(0, 4)

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Top-Rated Product Reviews</h2>
        <Link
          href="/category/computers/laptops"
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
        >
          All reviews
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topRated.map((product) => (
          <div
            key={product.href}
            className="bg-card border border-border rounded-xl p-4 flex gap-4 hover:border-accent/50 transition-all hover:shadow-md group"
          >
            <Link href={product.href} className="w-20 h-20 bg-muted rounded-lg flex-shrink-0 relative overflow-hidden block">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform"
                sizes="80px"
              />
            </Link>
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                  {product.category}
                </span>
                <Link href={product.href}>
                  <h3 className="font-serif font-semibold text-foreground group-hover:text-accent transition-colors text-sm line-clamp-1">
                    {product.title}
                  </h3>
                </Link>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    <span className="text-xs font-bold text-foreground">{product.rating?.toFixed(1)}</span>
                  </div>
                  <span className="text-xs font-bold text-foreground">{product.price}</span>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-3 text-xs">
                <Link href={product.href} className="font-medium text-primary hover:underline">
                  Full Review &rarr;
                </Link>
                {product.amazonUrl && (
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="font-medium text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-0.5"
                  >
                    Amazon <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
