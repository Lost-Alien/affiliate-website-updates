'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ArticleItem } from '@/lib/articles'
import { Calendar, Clock, Search, ArrowRight } from 'lucide-react'

interface ArticlesClientProps {
  articles: ArticleItem[]
}

const CATEGORY_TABS = ['All', 'Audio', 'Computers', 'Mobiles', 'Smart Home', 'Monitors']

export function ArticlesClient({ articles }: ArticlesClientProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === 'All' ||
      article.category.toLowerCase() === activeCategory.toLowerCase()

    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-card p-4 rounded-xl border border-border">
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1">
          {CATEGORY_TABS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative md:w-72 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
        </span>
        <span>Sorted by: Latest First</span>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all hover:shadow-md flex flex-col"
            >
              <div className="relative aspect-[16/9] bg-muted overflow-hidden">
                <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-bold bg-primary text-primary-foreground rounded-full">
                  {article.category}
                </span>
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.datePublished).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-base font-bold text-foreground group-hover:text-accent transition-colors leading-snug mb-2">
                    {article.title}
                  </h2>

                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
                  <span>Read Full Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card border border-border rounded-2xl p-8">
          <p className="text-base font-semibold text-foreground mb-1">No articles found</p>
          <p className="text-xs text-muted-foreground mb-4">
            Try adjusting your search terms or category filter.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All')
              setSearchQuery('')
            }}
            className="px-4 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}
