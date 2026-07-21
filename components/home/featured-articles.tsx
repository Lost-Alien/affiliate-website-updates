import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'

export function FeaturedArticles() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Featured Guides</h2>
        <Link
          href="/category/audio"
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
        >
          View all
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
        <h3 className="font-serif text-lg font-medium text-foreground mb-1">No Articles Published Yet</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Our team is currently testing new products. Comprehensive buying guides will be listed here soon!
        </p>
      </div>
    </section>
  )
}
