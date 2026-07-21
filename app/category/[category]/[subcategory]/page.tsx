import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleCard, ReviewCard } from '@/components/cards'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CATEGORIES, SAMPLE_PRODUCTS } from '@/lib/categories'
import { PackageSearch, ArrowLeft, ArrowRight } from 'lucide-react'

interface SubcategoryPageProps {
  params: Promise<{
    category: string
    subcategory: string
  }>
}

export function generateStaticParams() {
  const paramsList: { category: string; subcategory: string }[] = []

  CATEGORIES.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      paramsList.push({
        category: cat.slug,
        subcategory: sub.slug,
      })
    })
  })

  return paramsList
}

export async function generateMetadata({ params }: SubcategoryPageProps): Promise<Metadata> {
  const { category: categorySlug, subcategory: subcategorySlug } = await params

  const cat = CATEGORIES.find((c) => c.slug === categorySlug.toLowerCase())
  const sub = cat?.subcategories.find((s) => s.slug === subcategorySlug.toLowerCase())

  const formattedSubName = sub
    ? sub.name
    : subcategorySlug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')

  const formattedCatName = cat
    ? cat.name
    : categorySlug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')

  return {
    title: `${formattedSubName} - ${formattedCatName} Reviews | TechSelect`,
    description: sub?.description || `Expert reviews and buying guides for ${formattedSubName}.`,
  }
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params

  const cat = CATEGORIES.find((c) => c.slug === categorySlug.toLowerCase())
  const sub = cat?.subcategories.find((s) => s.slug === subcategorySlug.toLowerCase())

  // Find products matching category and subcategory slug
  const matchingProducts = SAMPLE_PRODUCTS.filter((p) => {
    const categoryMatches = cat
      ? p.category.toLowerCase() === cat.name.toLowerCase()
      : p.category.toLowerCase() === categorySlug.toLowerCase()

    const subcategoryMatches = p.subcategorySlug.toLowerCase() === subcategorySlug.toLowerCase()

    return categoryMatches && subcategoryMatches
  })

  const isSubcategoryActive = sub ? sub.active : false
  const hasProducts = matchingProducts.length > 0
  const hasActiveContent = isSubcategoryActive && hasProducts

  const parentCatName = cat
    ? cat.name
    : categorySlug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')

  const subName = sub
    ? sub.name
    : subcategorySlug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')

  // Active subcategories in this category for related recommendations
  const relatedSubcategories = cat ? cat.subcategories.filter((s) => s.active && s.slug !== subcategorySlug) : []
  const recommendedGuides = SAMPLE_PRODUCTS.slice(0, 3)

  // If subcategory or category has no active products, render fallback UI card with related details!
  if (!hasActiveContent) {
    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
          <Breadcrumb
            items={[
              { label: 'Categories', href: '/' },
              { label: parentCatName, href: `/category/${categorySlug}` },
              { label: subName },
            ]}
          />

          {/* Main Empty State Fallback Card */}
          <div className="mt-8 max-w-xl mx-auto text-center bg-card border border-border rounded-xl p-8 sm:p-12 shadow-sm mb-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground">
              <PackageSearch className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              No products listed in this subcategory yet
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              We haven&apos;t listed active products or reviews under &quot;{subName}&quot; in {parentCatName} yet. Our editorial team is currently testing products in this category.
            </p>
            <Link
              href={`/category/${categorySlug}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {parentCatName}
            </Link>
          </div>

          {/* Related Subcategories in Parent Category */}
          {relatedSubcategories.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                  Explore Active {parentCatName} Subcategories
                </h2>
                <Link
                  href={`/category/${categorySlug}`}
                  className="text-xs sm:text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                >
                  View All <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {relatedSubcategories.map((rSub) => (
                  <Link
                    key={rSub.slug}
                    href={`/category/${categorySlug}/${rSub.slug}`}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all text-center group shadow-sm hover:shadow-md"
                  >
                    <span className="font-medium text-foreground block group-hover:text-primary transition-colors text-base mb-1">
                      {rSub.name}
                    </span>
                    <span className="text-xs text-muted-foreground block line-clamp-1">
                      {rSub.description || `${rSub.count} items`}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Recommended Guides Across Site */}
          <section className="mb-12">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-6">
              Popular Buying Guides You Might Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedGuides.map((guide) => (
                <ArticleCard key={guide.title} {...guide} excerpt={guide.description} />
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  const articles = matchingProducts.filter((p) => p.type === 'article')
  const reviews = matchingProducts.filter((p) => p.type === 'review')
  const comparisons = matchingProducts.filter((p) => p.type === 'comparison')

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: parentCatName, href: `/category/${categorySlug}` },
            { label: subName },
          ]}
        />

        <header className="mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            {subName}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {sub?.description || `Explore our latest tests, reviews, and buying guides for ${subName}.`}
          </p>
        </header>

        {articles.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
              Buying Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((guide) => (
                <ArticleCard key={guide.title} {...guide} excerpt={guide.description} />
              ))}
            </div>
          </section>
        )}

        {reviews.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
              Product Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.title} {...review} rating={review.rating || 9.0} />
              ))}
            </div>
          </section>
        )}

        {comparisons.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
              Comparisons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {comparisons.map((comp) => (
                <ArticleCard key={comp.title} {...comp} excerpt={comp.description} />
              ))}
            </div>
          </section>
        )}

        <div className="mt-8 pt-8 border-t border-border">
          <Link
            href={`/category/${categorySlug}`}
            className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
          >
            &larr; Back to {parentCatName}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
