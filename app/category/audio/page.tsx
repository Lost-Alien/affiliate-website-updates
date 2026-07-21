import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleCard, ReviewCard } from '@/components/cards'
import { Headphones, Speaker, Mic, Radio } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Audio Reviews & Buying Guides | TechSelect',
  description: 'Expert reviews and buying guides for headphones, earbuds, speakers, microphones, and audio equipment.',
}

const subcategories = [
  { name: 'Headphones', icon: Headphones, count: 24 },
  { name: 'Earbuds', icon: Headphones, count: 31 },
  { name: 'Speakers', icon: Speaker, count: 18 },
  { name: 'Microphones', icon: Mic, count: 12 },
  { name: 'DACs & Amps', icon: Radio, count: 8 },
]

const featuredGuides = [
  {
    title: 'Best Wireless Earbuds Under $100',
    description: 'Top picks for budget-conscious listeners who want great sound without breaking the bank.',
    category: 'Earbuds',
    href: '/article/best-wireless-earbuds-budget',
    image: '/placeholder-audio.jpg',
  },
  {
    title: 'Best Noise-Canceling Headphones 2026',
    description: 'Our top recommendations for blocking out the world and focusing on your music.',
    category: 'Headphones',
    href: '/article/best-noise-canceling-headphones',
    image: '/placeholder-audio.jpg',
  },
  {
    title: 'Best Portable Bluetooth Speakers',
    description: 'Take your music anywhere with these rugged, great-sounding portable speakers.',
    category: 'Speakers',
    href: '/article/best-portable-speakers',
    image: '/placeholder-audio.jpg',
  },
]

const latestReviews = [
  {
    title: 'Soundcore Pro X Review',
    rating: 8.7,
    category: 'Earbuds',
    href: '/review/soundcore-pro-x',
    image: '/placeholder-audio.jpg',
  },
  {
    title: 'Sony WH-1000XM6 Review',
    rating: 9.2,
    category: 'Headphones',
    href: '/review/sony-wh-1000xm6',
    image: '/placeholder-audio.jpg',
  },
  {
    title: 'Bose SoundLink Flex Review',
    rating: 8.4,
    category: 'Speakers',
    href: '/review/bose-soundlink-flex',
    image: '/placeholder-audio.jpg',
  },
  {
    title: 'Shure MV7+ Review',
    rating: 8.9,
    category: 'Microphones',
    href: '/review/shure-mv7-plus',
    image: '/placeholder-audio.jpg',
  },
]

export default function AudioCategoryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Categories', href: '/' }, { label: 'Audio' }]} />
      
      <header className="mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
          Audio
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Expert reviews, comparisons, and buying guides for headphones, earbuds, speakers, microphones, and audio equipment. Find the perfect gear for your listening needs.
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
              href={`/category/audio/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
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
