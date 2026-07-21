import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

const popularPosts = [
  { title: 'Best Wireless Earbuds in India', href: '/article/best-wireless-earbuds-budget', category: 'Audio' },
  { title: 'Sony WH-1000XM5 Review', href: '/review/sony-wh-1000xm5', category: 'Audio' },
  { title: 'Best Smartwatches for Fitness', href: '/article/best-smartwatches-fitness', category: 'Wearables' },
  { title: 'Best Mechanical Keyboards', href: '/article/best-mechanical-keyboards', category: 'Computers' },
]

const categories = [
  { name: 'Audio', count: 24, href: '/category/audio' },
  { name: 'Computers', count: 18, href: '/category/computers' },
  { name: 'Monitors', count: 12, href: '/category/monitors' },
  { name: 'Wearables', count: 15, href: '/category/wearables' },
  { name: 'Home Office', count: 21, href: '/category/home-office' },
]

export function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-accent" />
          <h3 className="font-serif font-semibold text-foreground">Trending Now</h3>
        </div>
        <ul className="space-y-4">
          {popularPosts.map((post, index) => (
            <li key={post.title}>
              <Link href={post.href} className="group flex gap-3">
                <span className="text-2xl font-serif font-bold text-muted-foreground/40 group-hover:text-accent transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="font-serif font-semibold text-foreground mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={category.href}
                className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors group"
              >
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {category.name}
                </span>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-primary rounded-lg p-6">
        <h3 className="font-serif font-semibold text-primary-foreground mb-2">Stay Updated</h3>
        <p className="text-sm text-primary-foreground/80 mb-4">
          Get our latest reviews and buying guides delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-md placeholder:text-primary-foreground/50 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
          />
          <button
            type="submit"
            className="w-full px-3 py-2 text-sm font-medium bg-primary-foreground text-primary rounded-md hover:bg-primary-foreground/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  )
}
