'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArticleCard } from '@/components/cards'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Audio', 'Computers', 'Mobiles', 'Smart Home']

const articles = [
  {
    title: 'Best 5G Smartphones in India (2026): Flagship Cameras & Displays',
    excerpt: 'Comparing Samsung Galaxy 5G, Vivo V70 Elite 5G, 120Hz Dynamic AMOLED displays, and 90W fast charging.',
    category: 'Mobiles',
    href: '/article/best-5g-smartphones-under-30000-india',
    readTime: '7 min read',
    imageUrl: '/products/samsung-galaxy-s25.png',
  },
  {
    title: 'Best Smart Home Appliances & QLED TVs in India (2026)',
    excerpt: 'Hands-on testing of VW 32-inch QLED Smart TV, Lloyd 1.5 Ton 5-in-1 AC, and Dreame self-emptying robot vacuum.',
    category: 'Smart Home',
    href: '/article/best-smart-tvs-and-appliances-india',
    readTime: '8 min read',
    imageUrl: '/products/vw-32-inch-qled-smart-tv.png',
  },
  {
    title: 'Samsung Galaxy S26 Plus 5G Review: The Ultimate AI Flagship',
    excerpt: 'Our deep dive into the Samsung Galaxy S26 Plus 5G, featuring 12GB RAM, 512GB storage, and advanced Photo Assist AI capabilities.',
    category: 'Mobiles',
    href: '/article/samsung-galaxy-s26-plus-review',
    readTime: '6 min read',
    imageUrl: '/products/samsung-galaxy-s26-plus.png',
  },
  {
    title: 'ASUS ROG Strix G16 Review & Gaming Benchmarks',
    excerpt: 'Windows gaming beast tested: Intel Core i9, RTX 4070 GPU, 240Hz Nebula display frame rates.',
    category: 'Computers',
    href: '/article/asus-rog-strix-g16-review',
    readTime: '8 min read',
    imageUrl: '/products/asus-rog-strix-g16.png',
  },
  {
    title: 'Bose QuietComfort Ultra vs Sennheiser Momentum 4',
    excerpt: 'We wore these on local trains, flights, and loud office floors to find the undisputed noise-cancelling king.',
    category: 'Audio',
    href: '/article/bose-quietcomfort-ultra-review',
    readTime: '7 min read',
    imageUrl: '/products/bose-quietcomfort.png',
  },
  {
    title: 'Best Smart Plugs with Energy Monitoring in India (2026)',
    excerpt: 'Automate geysers, air conditioners, and water pumps while cutting monthly electricity bills with 16A smart plugs.',
    category: 'Smart Home',
    href: '/article/best-smart-plugs-india',
    readTime: '6 min read',
    imageUrl: '/products/tp-link-tapo-smart-plug.png',
  },
  {
    title: 'Best Budget Noise Cancelling Headphones in India',
    excerpt: 'Top over-ear headphones with active noise cancellation, long battery life, and comfortable ear cushions under budget.',
    category: 'Audio',
    href: '/article/best-budget-noise-cancelling-headphones-india',
    readTime: '6 min read',
    imageUrl: '/products/sennheiser-momentum-4.png',
  },
  {
    title: 'Best Wireless Earbuds on a Budget in India',
    excerpt: 'Testing TWS earbuds for sound quality, dual mic call clarity, ANC depth, and IPX battery stamina.',
    category: 'Audio',
    href: '/article/best-wireless-earbuds-budget',
    readTime: '5 min read',
    imageUrl: '/products/bose-quietcomfort.png',
  },
]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(article => article.category === activeCategory)

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
