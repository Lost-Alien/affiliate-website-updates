import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { ArticlesClient } from './articles-client'
import { getSortedArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'All Buying Guides & Reviews | TechSelect India',
  description: 'Browse all in-depth buying guides, head-to-head comparisons, and unbiased product reviews sorted by publish date.',
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'All Buying Guides & Reviews',
  description: 'Complete archive of tech buying guides and reviews from TechSelect India.',
  url: 'https://techselect.blog/article',
}

export default function AllArticlesPage() {
  const articles = getSortedArticles()

  return (
    <>
      <JsonLd data={collectionSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'All Articles' },
          ]}
        />

        <div className="mt-6 mb-8 text-center sm:text-left">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
            All Buying Guides & Reviews
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
            Independent hands-on benchmarks, comparisons, and buying recommendations sorted dynamically by date.
          </p>
        </div>

        <ArticlesClient articles={articles} />
      </main>
      <Footer />
    </>
  )
}
