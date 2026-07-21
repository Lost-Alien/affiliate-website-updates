import Link from 'next/link'
import { ArticleCard } from '@/components/cards'
import { ArrowRight } from 'lucide-react'

const featuredArticles = [
  {
    title: 'Best Wireless Earbuds in India',
    excerpt: 'We tested 25+ wireless earbuds to find the best options. From Apple AirPods Pro to Sony WF-1000XM5, discover our top picks for every budget.',
    category: 'Audio',
    href: '/article/best-wireless-earbuds-budget',
    readTime: '12 min read',
  },
  {
    title: 'Best Mechanical Keyboards for Typing',
    excerpt: 'From the Keychron K2 to Logitech MX Mechanical, discover keyboards that make every keystroke a pleasure.',
    category: 'Computers',
    href: '/article/best-mechanical-keyboards',
    readTime: '10 min read',
  },
  {
    title: 'Best Smartwatches for Fitness in India',
    excerpt: 'Apple Watch Series 9 vs Garmin Forerunner 265 — which fitness smartwatch is right for your workout routine?',
    category: 'Wearables',
    href: '/article/best-smartwatches-fitness',
    readTime: '15 min read',
  },
]

export function FeaturedArticles() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Featured Guides</h2>
        <Link
          href="/category/audio"
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
        >
          View all
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {/* Main Featured */}
        <div className="md:col-span-2 xl:col-span-2">
          <ArticleCard
            {...featuredArticles[0]}
            featured
          />
        </div>
        
        {/* Secondary Featured */}
        {featuredArticles.slice(1).map((article) => (
          <ArticleCard key={article.title} {...article} featured />
        ))}
      </div>
    </section>
  )
}
