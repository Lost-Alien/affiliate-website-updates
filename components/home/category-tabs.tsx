'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArticleCard } from '@/components/cards'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Audio', 'Computers', 'Mobiles', 'Smart Home']

const articles = [
  {
    title: 'ASUS ROG Strix G16 vs Apple MacBook Pro M4',
    excerpt: 'Windows gaming beast vs Apple M4 Silicon — we tested compile times, gaming frame rates, and battery limits.',
    category: 'Computers',
    href: '/article/best-wireless-earbuds-budget',
    readTime: '8 min read',
  },
  {
    title: 'Bose QuietComfort vs Sennheiser Momentum 4',
    excerpt: 'We wore these on local trains, flights, and loud office floors to find the undisputed noise-cancelling king.',
    category: 'Audio',
    href: '/article/best-budget-noise-cancelling-headphones-india',
    readTime: '7 min read',
  },
  {
    title: 'ECOVACS DEEBOT T50 PRO Robot Vacuum Review',
    excerpt: '12,800 Pa suction power, anti-tangle tech, and automated mopping — we put this vacuum through real home dust tests.',
    category: 'Smart Home',
    href: '/article/best-mechanical-keyboards-coding-india',
    readTime: '7 min read',
  },
  {
    title: 'Vivo Premium Smartphone (2025) Review',
    excerpt: 'AMOLED display, massive battery, and a versatile camera setup — here is the biased truth about Vivo’s latest.',
    category: 'Mobiles',
    href: '/article/best-coding-monitors-under-15000-india',
    readTime: '6 min read',
  },
]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(article => article.category === activeCategory)

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Latest Articles</h2>
        <Link
          href="/category/audio"
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
