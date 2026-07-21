import Link from 'next/link'
import { Clock, Calendar, User } from 'lucide-react'

interface ReviewHeaderProps {
  productName: string
  category: string
  author: string
  authorRole: string
  publishDate: string
  updateDate?: string
  readTime: string
}

export function ReviewHeader({
  productName,
  category,
  author,
  authorRole,
  publishDate,
  updateDate,
  readTime,
}: ReviewHeaderProps) {
  return (
    <header className="bg-secondary border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Link
            href={`/category/${category.toLowerCase()}`}
            className="inline-block text-sm font-medium text-accent uppercase tracking-wider hover:text-accent/80 transition-colors"
          >
            {category} Review
          </Link>
          
          <h1 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {productName} Review
          </h1>
          
          <p className="mt-4 text-lg text-muted-foreground">
            Our hands-on verdict after weeks of real-world testing
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>
                <span className="font-medium text-foreground">{author}</span>
                <span className="mx-1">·</span>
                {authorRole}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{publishDate}</span>
              {updateDate && (
                <span className="text-muted-foreground/70">(Updated {updateDate})</span>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Prominent Affiliate Disclosure - Amazon Associates Compliant */}
          <p className="mt-6 text-sm italic text-muted-foreground max-w-2xl mx-auto">
            As an Amazon Associate, TechSelect earns from qualifying purchases.
          </p>
        </div>
      </div>
    </header>
  )
}
