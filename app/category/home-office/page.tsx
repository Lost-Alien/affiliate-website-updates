import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleCard, ReviewCard } from '@/components/cards'
import { Armchair, Monitor, Keyboard, Lamp, Webcam } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home Office Reviews & Buying Guides | TechSelect',
  description: 'Expert reviews and buying guides for desks, chairs, webcams, lighting, and home office equipment.',
}

const subcategories = [
  { name: 'Desks', icon: Monitor, count: 15 },
  { name: 'Chairs', icon: Armchair, count: 22 },
  { name: 'Webcams', icon: Webcam, count: 14 },
  { name: 'Lighting', icon: Lamp, count: 11 },
  { name: 'Accessories', icon: Keyboard, count: 28 },
]

const featuredGuides = [
  {
    title: 'Best Mechanical Keyboards for Coding in India (Under Rs. 10,000)',
    description: 'Compare tactile and linear hot-swappable keyboards like Keychron, Aula, and Kreo for developers.',
    category: 'Accessories',
    href: '/article/best-mechanical-keyboards-coding-india',
    image: '/placeholder-office.jpg',
  },
  {
    title: 'Best Monitors for Coding in India under Rs. 15,000',
    description: 'We evaluated 27-inch 2K QHD and eye-care IPS displays from BenQ, LG, and Acer for developers.',
    category: 'Accessories',
    href: '/article/best-coding-monitors-under-15000-india',
    image: '/placeholder-office.jpg',
  },
  {
    title: 'Best Standing Desks 2026',
    description: 'Sit-stand desks that help you stay healthy and productive while working from home.',
    category: 'Desks',
    href: '/article/best-standing-desks',
    image: '/placeholder-office.jpg',
  },
  {
    title: 'Best Ergonomic Office Chairs',
    description: 'Support your back through long work sessions with our top chair recommendations.',
    category: 'Chairs',
    href: '/article/best-office-chairs',
    image: '/placeholder-office.jpg',
  },
]

const latestReviews = [
  {
    title: 'Secretlab Titan Evo Review',
    rating: 9.0,
    category: 'Chairs',
    href: '/review/secretlab-titan-evo',
    image: '/placeholder-office.jpg',
  },
  {
    title: 'Uplift V2 Standing Desk Review',
    rating: 8.8,
    category: 'Desks',
    href: '/review/uplift-v2-standing-desk',
    image: '/placeholder-office.jpg',
  },
  {
    title: 'Elgato Facecam Pro Review',
    rating: 8.7,
    category: 'Webcams',
    href: '/review/elgato-facecam-pro',
    image: '/placeholder-office.jpg',
  },
  {
    title: 'BenQ ScreenBar Halo Review',
    rating: 8.9,
    category: 'Lighting',
    href: '/review/benq-screenbar-halo',
    image: '/placeholder-office.jpg',
  },
]

export default function HomeOfficeCategoryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Categories', href: '/' }, { label: 'Home Office' }]} />
      
      <header className="mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
          Home Office
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Expert reviews, comparisons, and buying guides for home office furniture, ergonomics, and remote work equipment. Create a productive and comfortable workspace.
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
              href={`/category/home-office/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
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
