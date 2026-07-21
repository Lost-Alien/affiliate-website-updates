import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, ExternalLink } from 'lucide-react'
import { SAMPLE_PRODUCTS } from '@/lib/categories'

export function FeaturedArticles() {
  const topProduct = SAMPLE_PRODUCTS[0] // ASUS ROG always first
  const otherProducts = SAMPLE_PRODUCTS.slice(1)

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Featured Guides</h2>
        <Link
          href="/category/computers/laptops"
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
        >
          View all <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* #1 Top Featured Product — Full Width */}
      <div className="bg-card border border-border rounded-xl overflow-hidden mb-6 group hover:border-accent/50 transition-all hover:shadow-md">
        <div className="flex flex-col sm:flex-row">
          <Link href={topProduct.href} className="sm:w-64 flex-shrink-0 block">
            <div className="relative aspect-square sm:h-full bg-muted overflow-hidden">
              <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                #1 Top Pick
              </span>
              <Image
                src={topProduct.image}
                alt={topProduct.title}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 256px"
              />
            </div>
          </Link>
          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                {topProduct.category} · {topProduct.subcategorySlug}
              </span>
              <Link href={topProduct.href}>
                <h3 className="mt-1 font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                  {topProduct.title}
                </h3>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {topProduct.description}
              </p>
              <div className="mt-3 flex items-center gap-4 flex-wrap">
                {topProduct.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-bold text-foreground">{topProduct.rating.toFixed(1)}</span>
                    <span className="text-xs text-muted-foreground">/ 10</span>
                  </div>
                )}
                {topProduct.price && (
                  <span className="text-sm font-bold text-foreground">{topProduct.price}</span>
                )}
                <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 font-semibold px-2 py-0.5 rounded-full">
                  Editor&apos;s Choice
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {topProduct.amazonUrl && (
                <a
                  href={topProduct.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Buy on Amazon.in <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              <Link
                href={topProduct.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Full Review <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Other Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProducts.map((product) => (
          <article
            key={product.href}
            className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all hover:shadow-md group"
          >
            <Link href={product.href} className="block">
              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                {product.badge && (
                  <span className="absolute top-2 left-2 z-10 px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    {product.badge}
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Link>
            <div className="p-4">
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                {product.category}
              </span>
              <Link href={product.href}>
                <h3 className="mt-1 font-serif font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug text-sm">
                  {product.title}
                </h3>
              </Link>
              <div className="mt-2 flex items-center justify-between">
                {product.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    <span className="text-xs font-bold text-foreground">{product.rating.toFixed(1)}</span>
                    <span className="text-xs text-muted-foreground">/ 10</span>
                  </div>
                )}
                {product.price && (
                  <span className="text-xs font-bold text-foreground">{product.price}</span>
                )}
              </div>
              {product.amazonUrl && (
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  View on Amazon.in <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mt-4">
        * Prices are indicative. As an Amazon Associate, TechSelect earns from qualifying purchases.
      </p>
    </section>
  )
}
