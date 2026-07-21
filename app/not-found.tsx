import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArticleCard } from '@/components/cards'
import { CATEGORIES, SAMPLE_PRODUCTS } from '@/lib/categories'
import { FileQuestion, ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
  const activeCategories = CATEGORIES.filter((c) => c.active)
  const featuredGuides = SAMPLE_PRODUCTS.slice(0, 3)

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        {/* Main 404 Hero Card */}
        <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-sm mb-16">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <FileQuestion className="h-8 w-8" />
          </div>
          <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
            404 Error
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            The page you are looking for might have been moved, renamed, or is currently unavailable. Explore our active categories and buying guides below!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/category/audio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground font-medium rounded-lg hover:bg-muted/80 transition-colors text-sm"
            >
              <Compass className="h-4 w-4" />
              Explore Audio Reviews
            </Link>
          </div>
        </div>

        {/* Active Categories Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
            Browse Active Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {activeCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all text-center group shadow-sm hover:shadow-md"
              >
                <span className="font-serif text-base font-semibold text-foreground block group-hover:text-primary transition-colors mb-1">
                  {cat.name}
                </span>
                <span className="text-xs text-muted-foreground block line-clamp-2">
                  {cat.description}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Recommended Buying Guides */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
            Popular Buying Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <ArticleCard key={guide.title} {...guide} excerpt={guide.description} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
