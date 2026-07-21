import Link from 'next/link'
import { ProductCard } from '@/components/cards'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Sony WH-1000XM5',
    tagline: 'Best ANC Headphones',
    rating: 9.4,
    href: '/review/sony-wh-1000xm5',
    badge: 'Editor\'s Choice',
  },
  {
    name: 'Keychron K2',
    tagline: 'Best Mechanical Keyboard',
    rating: 9.0,
    href: '/article/best-mechanical-keyboards',
    badge: 'Best Value',
  },
  {
    name: 'Apple Watch Series 9',
    tagline: 'Best Smartwatch Overall',
    rating: 9.2,
    href: '/article/best-smartwatches-fitness',
  },
  {
    name: 'Garmin Forerunner 265',
    tagline: 'Best Fitness Smartwatch',
    rating: 8.9,
    href: '/article/best-smartwatches-fitness',
  },
]

export function LatestReviews() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Top-Rated Products</h2>
        <Link
          href="/category/audio"
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
        >
          All reviews
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}
