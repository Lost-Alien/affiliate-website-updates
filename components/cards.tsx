import Link from 'next/link'
import { Star, Clock, ArrowRight } from 'lucide-react'

interface ArticleCardProps {
  title: string
  excerpt: string
  category: string
  href: string
  imageUrl?: string
  readTime?: string
  featured?: boolean
}

export function ArticleCard({
  title,
  excerpt,
  category,
  href,
  imageUrl,
  readTime = '5 min read',
  featured = false,
}: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={href} className="group block">
        <article className="relative overflow-hidden rounded-xl bg-card border border-border">
          <div className="aspect-[16/9] bg-muted">
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
            )}
          </div>
          <div className="p-6">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">
              {category}
            </span>
            <h3 className="mt-2 font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors leading-tight text-balance">
              {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {excerpt}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readTime}
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={href} className="group block">
      <article className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
        <div className="flex-shrink-0 w-24 h-24 rounded-md bg-muted overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-accent uppercase tracking-wide">
            {category}
          </span>
          <h3 className="mt-1 font-serif font-medium text-foreground group-hover:text-accent transition-colors leading-snug line-clamp-2">
            {title}
          </h3>
          <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

interface ProductCardProps {
  name: string
  tagline: string
  rating: number
  href: string
  imageUrl?: string
  badge?: string
}

export function ProductCard({
  name,
  tagline,
  rating,
  href,
  imageUrl,
  badge,
}: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
        <div className="relative aspect-square bg-muted p-6">
          {badge && (
            <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
              {badge}
            </span>
          )}
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full h-full object-contain" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-secondary to-muted rounded-lg" />
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1">
            {name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{tagline}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
            </div>
            <span className="text-xs font-medium text-accent">View Details</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

interface CategoryCardProps {
  name: string
  description: string
  articleCount: number
  href: string
}

export function CategoryCard({ name, description, articleCount, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all hover:shadow-sm">
        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{articleCount} articles</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </div>
      </article>
    </Link>
  )
}

interface ReviewCardProps {
  title: string
  rating: number
  category: string
  href: string
  image?: string
}

export function ReviewCard({ title, rating, category, href, image }: ReviewCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
        <div className="aspect-[4/3] bg-muted">
          {image ? (
            <img src={image} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
          )}
        </div>
        <div className="p-4">
          <span className="text-xs font-medium text-accent uppercase tracking-wide">
            {category}
          </span>
          <h3 className="mt-1 font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="mt-2 flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

interface ProductListingCardProps {
  title: string
  description: string
  image?: string
  rating?: number
  price?: string
  href: string
  amazonUrl?: string
  badge?: string
}

export function ProductListingCard({
  title,
  description,
  image,
  rating,
  price,
  href,
  amazonUrl,
  badge,
}: ProductListingCardProps) {
  return (
    <article className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all hover:shadow-md group">
      <Link href={href} className="block">
        <div className="relative aspect-[4/3] bg-muted overflow-hidden">
          {badge && (
            <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
              {badge}
            </span>
          )}
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-secondary to-muted rounded-lg" />
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={href}>
          <h3 className="font-serif font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug mb-1">
            {title}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3">{description}</p>

        <div className="flex items-center justify-between mb-3">
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground">/ 10</span>
            </div>
          )}
          {price && <span className="text-sm font-bold text-foreground">{price}</span>}
        </div>

        {amazonUrl && (
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="amazon-btn flex items-center justify-center gap-1.5 w-full py-2.5 px-4 text-sm font-semibold rounded-lg transition-colors"
          >
            View on Amazon.in
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  )
}
