import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedArticles } from '@/components/home/featured-articles'
import { CategoryTabs } from '@/components/home/category-tabs'
import { LatestReviews } from '@/components/home/latest-reviews'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <FeaturedArticles />
              <CategoryTabs />
              <LatestReviews />
            </div>

            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
