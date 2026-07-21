import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleCard, ReviewCard } from '@/components/cards'
import { Laptop, Monitor, Cpu, HardDrive, Keyboard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Computer Reviews & Buying Guides | TechSelect',
  description: 'Expert reviews and buying guides for laptops, desktops, components, and computer accessories.',
}

const subcategories = [
  { name: 'Laptops', icon: Laptop, count: 42 },
  { name: 'Desktops', icon: Monitor, count: 18 },
  { name: 'Processors', icon: Cpu, count: 15 },
  { name: 'Storage', icon: HardDrive, count: 21 },
  { name: 'Peripherals', icon: Keyboard, count: 34 },
]

const featuredGuides = [
  {
    title: 'Best Mechanical Keyboards for Coding in India (Under Rs. 10,000)',
    description: 'Compare tactile and linear hot-swappable keyboards like Keychron, Aula, and Kreo for developers.',
    category: 'Peripherals',
    href: '/article/best-mechanical-keyboards-coding-india',
    image: '/placeholder-computer.jpg',
  },
  {
    title: 'Best Laptops for Students 2026',
    description: 'Our top picks for college students balancing portability, performance, and price.',
    category: 'Laptops',
    href: '/article/best-student-laptops',
    image: '/placeholder-computer.jpg',
  },
  {
    title: 'Best Gaming Laptops Under $1500',
    description: 'Powerful gaming laptops that deliver excellent performance without premium prices.',
    category: 'Laptops',
    href: '/article/best-gaming-laptops',
    image: '/placeholder-computer.jpg',
  },
  {
    title: 'Best SSDs for Every Budget',
    description: 'Speed up your system with our recommended solid-state drives at every price point.',
    category: 'Storage',
    href: '/article/best-ssds',
    image: '/placeholder-computer.jpg',
  },
]

const latestReviews = [
  {
    title: 'MacBook Pro M4 Review',
    rating: 9.4,
    category: 'Laptops',
    href: '/review/macbook-pro-m4',
    image: '/placeholder-computer.jpg',
  },
  {
    title: 'Dell XPS 15 (2026) Review',
    rating: 8.8,
    category: 'Laptops',
    href: '/review/dell-xps-15-2026',
    image: '/placeholder-computer.jpg',
  },
  {
    title: 'Samsung 990 Pro 2TB Review',
    rating: 9.1,
    category: 'Storage',
    href: '/review/samsung-990-pro',
    image: '/placeholder-computer.jpg',
  },
  {
    title: 'AMD Ryzen 9 9950X Review',
    rating: 9.0,
    category: 'Processors',
    href: '/review/amd-ryzen-9-9950x',
    image: '/placeholder-computer.jpg',
  },
]

export default function ComputersCategoryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Categories', href: '/' }, { label: 'Computers' }]} />
      
      <header className="mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
          Computers
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Expert reviews, comparisons, and buying guides for laptops, desktops, components, and peripherals. Find the right computer for work, gaming, or creative tasks.
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
              href={`/category/computers/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
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
