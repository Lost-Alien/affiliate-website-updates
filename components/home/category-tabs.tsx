'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArticleCard } from '@/components/cards'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Audio', 'Computers', 'Monitors', 'Wearables', 'Home Office']

const articles = [
  {
    title: 'Best Smartwatches for Fitness in India',
    excerpt: 'Apple Watch Series 9 vs Garmin Forerunner 265 — track your workouts, monitor your health, and stay connected.',
    category: 'Wearables',
    href: '/article/best-smartwatches-fitness',
    readTime: '8 min read',
  },
  {
    title: 'Best Desk Setup Accessories',
    excerpt: 'Transform your workspace with ergonomic monitors, keyboards, and accessories for productivity and comfort.',
    category: 'Home Office',
    href: '/article/best-desk-setup-accessories',
    readTime: '7 min read',
  },
  {
    title: 'Sony WH-1000XM5 vs Bose QuietComfort Ultra',
    excerpt: 'A detailed comparison of the two best ANC headphones for Indian buyers in 2024.',
    category: 'Audio',
    href: '/review/sony-wh-1000xm5',
    readTime: '9 min read',
  },
  {
    title: 'Best Budget Gaming Monitors in India',
    excerpt: 'Get smooth, responsive gameplay without breaking the bank with these affordable gaming monitors.',
    category: 'Monitors',
    href: '/article/best-budget-gaming-monitors',
    readTime: '11 min read',
  },
  {
    title: 'Best Laptops for College Students',
    excerpt: 'Portable, powerful, and affordable laptops perfect for lectures, research, and everything in between.',
    category: 'Computers',
    href: '/article/best-laptops-college-students',
    readTime: '14 min read',
  },
  {
    title: 'Best Wireless Earbuds in India',
    excerpt: 'Apple AirPods Pro vs Sony WF-1000XM5 vs Samsung Galaxy Buds2 Pro — find your perfect pair.',
    category: 'Audio',
    href: '/article/best-wireless-earbuds-budget',
    readTime: '12 min read',
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
