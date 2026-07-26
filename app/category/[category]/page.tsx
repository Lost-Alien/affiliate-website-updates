import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleCard, ReviewCard } from '@/components/cards'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CATEGORIES, SAMPLE_PRODUCTS } from '@/lib/categories'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const cat = CATEGORIES.find((c) => c.slug === categorySlug.toLowerCase())

  if (!cat) {
    return {
      title: 'Category Not Found | TechSelect',
    }
  }

  return {
    title: `${cat.name} Reviews & Buying Guides | TechSelect India`,
    description: cat.description,
  }
}

export default async function DynamicCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params
  const cat = CATEGORIES.find((c) => c.slug === categorySlug.toLowerCase())

  if (!cat) {
    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
          <Breadcrumb items={[{ label: 'Categories', href: '/' }, { label: 'Not Found' }]} />
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <Link href="/" className="text-accent underline text-sm">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Find products / reviews matching this category
  const activeProducts = SAMPLE_PRODUCTS.filter(
    (p) => p.category.toLowerCase() === cat.name.toLowerCase()
  )

  const articles = activeProducts.filter((p) => p.type === 'article')
  const reviews = activeProducts.filter((p) => p.type === 'review')
  const recommendedGuides = SAMPLE_PRODUCTS.slice(0, 4)

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb items={[{ label: 'Categories', href: '/' }, { label: cat.name }]} />

        <header className="mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            {cat.name}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {cat.description}
          </p>
        </header>

        {/* Subcategories Grid */}
        {cat.subcategories.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
              Browse Subcategories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cat.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/category/${cat.slug}/${sub.slug}`}
                  className="bg-card border border-border rounded-xl p-5 hover:border-accent transition-all text-center group shadow-sm hover:shadow-md"
                >
                  <span className="font-medium text-foreground block group-hover:text-accent transition-colors text-base mb-1">
                    {sub.name}
                  </span>
                  <span className="text-xs text-muted-foreground block line-clamp-2 leading-relaxed">
                    {sub.description || `Reviews for ${sub.name}`}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Category Articles */}
        {articles.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
              Featured Buying Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((guide) => (
                <ArticleCard key={guide.title} {...guide} excerpt={guide.description} />
              ))}
            </div>
          </section>
        )}

        {/* Category Product Reviews */}
        {reviews.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
              Product Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review) => (
                <ReviewCard
                  key={review.title}
                  {...review}
                  rating={review.rating || 9.0}
                />
              ))}
            </div>
          </section>
        )}

        {/* Fallback Guides if no products yet */}
        {activeProducts.length === 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
              Recommended Buying Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedGuides.map((guide) => (
                <ReviewCard
                  key={guide.title}
                  {...guide}
                  rating={guide.rating || 9.0}
                />
              ))}
            </div>
          </section>
        )}

        <div className="mt-8 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-sm text-accent hover:underline inline-flex items-center gap-1 font-medium"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
