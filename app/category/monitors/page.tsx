import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleCard, ReviewCard } from '@/components/cards'
import { Monitor, Tv, Gamepad2, Palette, Maximize } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Monitor Reviews & Buying Guides | TechSelect',
  description: 'Expert reviews and buying guides for computer monitors, gaming displays, and professional screens.',
}

const subcategories = [
  { name: 'Gaming', icon: Gamepad2, count: 28 },
  { name: 'Professional', icon: Palette, count: 16 },
  { name: '4K & 5K', icon: Tv, count: 22 },
  { name: 'Ultrawide', icon: Maximize, count: 14 },
  { name: 'Budget', icon: Monitor, count: 19 },
]

const featuredGuides = [
  {
    title: 'Best Gaming Monitors 2026',
    description: 'Our top picks for competitive gaming, from budget-friendly to premium displays.',
    category: 'Gaming',
    href: '/article/best-gaming-monitors',
    image: '/placeholder-monitor.jpg',
  },
  {
    title: 'Best 4K Monitors for Productivity',
    description: 'High-resolution displays that make multitasking and content creation a breeze.',
    category: '4K & 5K',
    href: '/article/best-4k-monitors',
    image: '/placeholder-monitor.jpg',
  },
  {
    title: 'Best Ultrawide Monitors',
    description: 'Immersive curved displays that transform your workspace and gaming experience.',
    category: 'Ultrawide',
    href: '/article/best-ultrawide-monitors',
    image: '/placeholder-monitor.jpg',
  },
]

const latestReviews = [
  {
    title: 'LG 27GP950-B Review',
    rating: 9.1,
    category: 'Gaming',
    href: '/review/lg-27gp950-b',
    image: '/placeholder-monitor.jpg',
  },
  {
    title: 'Samsung Odyssey G9 (2026) Review',
    rating: 8.9,
    category: 'Ultrawide',
    href: '/review/samsung-odyssey-g9-2026',
    image: '/placeholder-monitor.jpg',
  },
  {
    title: 'ASUS ProArt PA32UCG Review',
    rating: 9.3,
    category: 'Professional',
    href: '/review/asus-proart-pa32ucg',
    image: '/placeholder-monitor.jpg',
  },
  {
    title: 'Dell S2722QC Review',
    rating: 8.5,
    category: '4K & 5K',
    href: '/review/dell-s2722qc',
    image: '/placeholder-monitor.jpg',
  },
]

export default function MonitorsCategoryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Categories', href: '/' }, { label: 'Monitors' }]} />
      
      <header className="mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
          Monitors
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Expert reviews, comparisons, and buying guides for gaming monitors, professional displays, and everyday screens. Find the perfect monitor for your setup.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
          Browse by Type
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {subcategories.map((sub) => (
            <Link
              key={sub.name}
              href={`/category/monitors/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors text-center group"
            >
              <sub.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary mx-auto mb-2 transition-colors" />
              <span className="font-medium text-foreground block">{sub.name}</span>
              <span className="text-xs text-muted-foreground">{sub.count} articles</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
          Featured Buying Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGuides.map((guide) => (
            <ArticleCard key={guide.title} {...guide} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
          Latest Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestReviews.map((review) => (
            <ReviewCard key={review.title} {...review} />
          ))}
        </div>
      </section>

      <div className="mt-8 pt-8 border-t border-border">
        <Link
          href="/"
          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
        >
          &larr; Back to Home
        </Link>
      </div>
    </main>
  )
}
