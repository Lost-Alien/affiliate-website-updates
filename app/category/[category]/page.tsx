import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleCard, ReviewCard } from '@/components/cards'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CATEGORIES, SAMPLE_PRODUCTS } from '@/lib/categories'
import { PackageSearch, ArrowLeft } from 'lucide-react'

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
    title: `${cat.name} Reviews & Buying Guides | TechSelect`,
    description: cat.description,
  }
}

export default async function DynamicCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params
  const cat = CATEGORIES.find((c) => c.slug === categorySlug.toLowerCase())

  // Find products / articles matching this category
  const activeProducts = cat
    ? SAMPLE_PRODUCTS.filter(
        (p) => p.category.toLowerCase() === cat.name.toLowerCase()
      )
    : []

  // Check if category or products exist
  const hasContent = cat && (cat.subcategories.some((s) => s.active) || activeProducts.length > 0)

  if (!cat || !hasContent) {
    const formattedTitle = categorySlug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
          <Breadcrumb items={[{ label: 'Categories', href: '/' }, { label: formattedTitle }]} />

          <div className="mt-8 max-w-xl mx-auto text-center bg-card border border-border rounded-xl p-8 sm:p-12 shadow-sm">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground">
              <PackageSearch className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              No products listed in this category yet
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              We haven&apos;t published any reviews or buying guides for &quot;{formattedTitle}&quot; yet. Check back soon as our team continuously tests and adds new gear!
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Active subcategories
  const activeSubcategories = cat.subcategories.filter((s) => s.active)
  const articles = activeProducts.filter((p) => p.type === 'article')
  const reviews = activeProducts.filter((p) => p.type === 'review')

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb items={[{ label: 'Categories', href: '/' }, { label: cat.name }]} />

        <header className="mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            {cat.name}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {cat.description}
          </p>
        </header>

        {activeSubcategories.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
              Browse by Subcategory
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {activeSubcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/category/${cat.slug}/${sub.slug}`}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-all text-center group shadow-sm hover:shadow-md"
                >
                  <span className="font-medium text-foreground block group-hover:text-primary transition-colors text-base mb-1">
                    {sub.name}
                  </span>
                  <span className="text-xs text-muted-foreground block line-clamp-1">
                    {sub.description || `${sub.count} items`}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

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

        {reviews.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
              Latest Reviews
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

        <div className="mt-8 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
