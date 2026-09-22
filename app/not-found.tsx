import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArticleCard } from '@/components/cards'
import { Funny404 } from '@/components/funny-404'
import { CATEGORIES, SAMPLE_PRODUCTS } from '@/lib/categories'

export default function NotFound() {
  const activeCategories = CATEGORIES.filter((c) => c.active)
  const featuredGuides = SAMPLE_PRODUCTS.slice(0, 3)

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {/* Interactive Funny 404 Hero & Arcade */}
        <Funny404 />

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
