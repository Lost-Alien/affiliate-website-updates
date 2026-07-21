import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleCard, ReviewCard } from '@/components/cards'
import { Watch, Activity, Glasses, Headphones, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wearables Reviews & Buying Guides | TechSelect',
  description: 'Expert reviews and buying guides for smartwatches, fitness trackers, smart glasses, and wearable technology.',
}

const subcategories = [
  { name: 'Smartwatches', icon: Watch, count: 26 },
  { name: 'Fitness Trackers', icon: Activity, count: 18 },
  { name: 'Smart Glasses', icon: Glasses, count: 8 },
  { name: 'Hearables', icon: Headphones, count: 22 },
  { name: 'Smart Rings', icon: Smartphone, count: 6 },
]

const featuredGuides = [
  {
    title: 'Best Smartwatches 2026',
    description: 'From Apple to Samsung to Garmin, we test the top smartwatches for every platform.',
    category: 'Smartwatches',
    href: '/article/best-smartwatches',
    image: '/placeholder-wearable.jpg',
  },
  {
    title: 'Best Fitness Trackers for Running',
    description: 'Dedicated fitness bands with GPS, heart rate, and advanced training features.',
    category: 'Fitness Trackers',
    href: '/article/best-running-trackers',
    image: '/placeholder-wearable.jpg',
  },
  {
    title: 'Apple Watch vs Galaxy Watch',
    description: 'A comprehensive comparison of the two leading smartwatch platforms.',
    category: 'Smartwatches',
    href: '/compare/apple-watch-galaxy-watch',
    image: '/placeholder-wearable.jpg',
  },
]

const latestReviews = [
  {
    title: 'Apple Watch Series 11 Review',
    rating: 9.2,
    category: 'Smartwatches',
    href: '/review/apple-watch-series-11',
    image: '/placeholder-wearable.jpg',
  },
  {
    title: 'Garmin Fenix 9 Review',
    rating: 9.0,
    category: 'Smartwatches',
    href: '/review/garmin-fenix-9',
    image: '/placeholder-wearable.jpg',
  },
  {
    title: 'Fitbit Charge 7 Review',
    rating: 8.3,
    category: 'Fitness Trackers',
    href: '/review/fitbit-charge-7',
    image: '/placeholder-wearable.jpg',
  },
  {
    title: 'Oura Ring Gen 4 Review',
    rating: 8.6,
    category: 'Smart Rings',
    href: '/review/oura-ring-gen-4',
    image: '/placeholder-wearable.jpg',
  },
]

export default function WearablesCategoryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Categories', href: '/' }, { label: 'Wearables' }]} />
      
      <header className="mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
          Wearables
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Expert reviews, comparisons, and buying guides for smartwatches, fitness trackers, and wearable technology. Find the perfect device to track your health and stay connected.
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
              href={`/category/wearables/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
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
