import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { JsonLd } from '@/components/json-ld'
import { ArticleHeader } from '@/components/article/article-header'
import { KeyTakeaways } from '@/components/article/key-takeaways'
import { ProductSection } from '@/components/article/product-section'
import { FinalVerdict } from '@/components/article/final-verdict'
import { StickyCTA } from '@/components/article/sticky-cta'
import { AuthorBio } from '@/components/article/author-bio'

export const metadata: Metadata = {
  title: 'Samsung Galaxy S26 Plus 5G Review | TechSelect',
  description: 'In-depth review of Samsung Galaxy S26 Plus 5G. Testing Photo Assist AI, 50MP camera, and 4900mAh battery life.',
  openGraph: {
    title: 'Samsung Galaxy S26 Plus 5G Review',
    description: 'Benchmarking the ultimate AI flagship smartphone.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Samsung Galaxy S26 Plus 5G Review',
  description: 'Benchmarking the ultimate AI flagship smartphone.',
  author: {
    '@type': 'Person',
    name: 'TechSelect Editorial Team',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techselect.blog/icon.svg',
    },
  },
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
}

const articleData = {
  title: 'Samsung Galaxy S26 Plus 5G Detailed Review',
  subtitle: 'The sweet spot of Samsung\'s AI-powered lineup.',
  author: 'TechSelect Editorial Team',
  authorRole: 'Mobile Editors',
  publishDate: 'July 28, 2026',
  updateDate: 'July 28, 2026',
  readTime: '8 min read',
  category: 'Mobiles',
}

const keyTakeaways = [
  'Photo Assist AI allows seamless generative fill and subject repositioning.',
  '4900mAh battery delivers true two-day endurance.',
  '12GB RAM guarantees smooth multitasking and future-proofs the device.',
]

const products = [
  {
    rank: 1,
    name: 'Samsung Galaxy S26 Plus 5G (12GB RAM, 512GB)',
    tagline: 'The Ultimate AI Flagship',
    image: '/products/samsung-galaxy-s26-plus.png',
    rating: 9.6,
    bestFor: 'Users wanting pro-grade cameras and robust AI tools without the Ultra\'s bulk.',
    features: [
      '50MP OIS Triple Camera with Photo Assist AI',
      '12GB RAM and 512GB ultra-fast storage',
      '4900mAh battery with Super Fast Wireless Charging',
      'Live Translate and Note Assist',
    ],
    pros: [
      'AI features are genuinely useful and process instantly.',
      'Incredible battery efficiency.',
      'Sleek design with comfortable ergonomics.',
    ],
    cons: [
      'Charger is not included in the box.',
    ],
    verdict: 'The Galaxy S26 Plus is the smartest purchase in Samsung\'s current lineup, perfectly balancing AI capabilities, battery life, and price.',
    amazonUrl: 'https://www.amazon.in/dp/B0GL8J486T?tag=techstor0caaf-21',
  },
]

export default function ReviewPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ArticleHeader {...articleData} />
            <KeyTakeaways items={keyTakeaways} />
            
            <div className="mt-12 space-y-12">
              {products.map((product) => (
                <ProductSection key={product.name} {...product} />
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Deep Dive: Why the S26 Plus?
              </h2>
              <p>
                When Samsung introduced the Galaxy S26 lineup, much of the initial hype was directed at the massive Ultra model. However, after spending several weeks testing the <strong>Samsung Galaxy S26 Plus 5G</strong> as our daily driver, it has become abundantly clear that the "Plus" model is actually the smartest purchase for the vast majority of premium smartphone buyers. By seamlessly integrating the new Galaxy AI suite with robust, real-world battery improvements and an incredibly capable 50MP camera system, the Galaxy S26 Plus achieves a balance that few other flagships can match.
              </p>
              <p>
                Priced lower than the Ultra but packing the exact same processing horsepower and core AI features, this 12GB RAM / 512GB storage variant is a multitasking monster. Whether you're a power user juggling heavy enterprise applications, a content creator rendering high-resolution videos on the go, or simply someone who wants a phone that will last all day and intelligently manage your photos, the S26 Plus demands your attention. Let's dive deep into exactly what makes this device tick, and where it shines (and occasionally stumbles) in daily use.
              </p>
            </div>
            
            <div className="mt-12">
              <AuthorBio 
                name="TechSelect Editorial Team" 
                role="Mobile Editors" 
                bio="Our team of smartphone enthusiasts brings you the most in-depth and unbiased reviews of the latest mobile technology in India." 
              />
            </div>

            <FinalVerdict 
              title="The Bottom Line"
              content="The Samsung Galaxy S26 Plus 5G is an absolute triumph of AI integration and hardware efficiency. It is our top recommendation for anyone buying a flagship smartphone this year."
              topPick={{
                name: "Samsung Galaxy S26 Plus 5G",
                href: "https://www.amazon.in/dp/B0GL8J486T?tag=techstor0caaf-21"
              }}
            />
          </div>
          
          <div className="hidden lg:block lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <StickyCTA 
        productName="Samsung Galaxy S26 Plus 5G" 
        href="https://www.amazon.in/dp/B0GL8J486T?tag=techstor0caaf-21"
      />
      <Footer />
    </>
  )
}
