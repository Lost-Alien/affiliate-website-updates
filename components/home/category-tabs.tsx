'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArticleCard } from '@/components/cards'
import { ArrowRight } from 'lucide-react'
import { ARTICLES_DATA } from '@/lib/articles'
import { dedupeBy } from '@/lib/dedup'

const categories = ['All', 'Audio', 'Computers', 'Mobiles', 'Smart Home']

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const uniqueArticles = dedupeBy(ARTICLES_DATA, (a) => a.href)

  const filteredArticles = activeCategory === 'All'
    ? uniqueArticles.slice(0, 8)
    : uniqueArticles.filter(article => article.category === activeCategory)

  const viewAllHref = activeCategory === 'All'
    ? '/article'
    : `/category/${activeCategory.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Latest Articles</h2>
        <Link
          href={viewAllHref}
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
        >
          View all
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide" role="tablist">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            role="tab"
            aria-selected={activeCategory === category}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="space-y-1 bg-card rounded-lg border border-border divide-y divide-border">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  )
}
