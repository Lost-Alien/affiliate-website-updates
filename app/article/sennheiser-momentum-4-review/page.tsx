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

export const metadata: Metadata = {
  title: 'Sennheiser Momentum 4 Wireless Detailed Review | TechSelect',
  description: 'In-depth review of Sennheiser Momentum 4. Testing the 60-hour battery life, soundstage depth, and customizable 5-band EQ.',
  openGraph: {
    title: 'Sennheiser Momentum 4 Wireless Review',
    description: 'Audiophile sound quality meets 60-hour battery endurance.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sennheiser Momentum 4 Wireless Review',
  description: '60-hour battery life and audiophile dynamic sound signature.',
  author: {
    '@type': 'Person',
    name: 'Rahul Sharma',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techselect.blog/icon.svg',
    },
  },
  datePublished: '2026-04-15',
  dateModified: '2026-07-26',
}

const articleData = {
  title: 'Sennheiser Momentum 4 Wireless Detailed Review',
  subtitle: 'An audiophile headphone with industry-topping 60-hour battery endurance.',
  author: 'Rahul Sharma',
  authorRole: 'Audio Editor',
  publishDate: 'April 15, 2026',
  updateDate: 'July 26, 2026',
  readTime: '6 min read',
  category: 'Audio',
}

const keyTakeaways = [
  'Insane 60-hour battery life means charging only once every two weeks.',
  '42mm transducers present crisp acoustic detail and wide soundstage imaging.',
  'Customizable EQ in Smart Control app provides fine sound tuning.',
]

const products = [
  {
    rank: 1,
    name: 'Sennheiser Momentum 4 Wireless',
    tagline: 'Audiophile Sound & Massive Battery',
    rating: 9.0,
    image: '/products/sennheiser-momentum-4.png',
    amazonUrl: 'https://www.amazon.in/Sennheiser-Momentum-Wireless-Headphones-Cancelling-ANC/dp/B0B6G9TPNQ?tag=techstor0caaf-21',
    bestFor: 'Music lovers who value high-fidelity sound clarity and minimal charging.',
    features: ['42mm dynamic transducers', '60-hour battery life with ANC', 'Adaptive noise cancellation', 'Touch control gestures'],
    pros: ['Stunning audio clarity', '60-hour battery life', 'Rich bass and clean highs'],
    cons: ['Touch panel requires getting used to'],
    verdict: 'The Sennheiser Momentum 4 is the best wireless choice for pure music enjoyment.',
  },
]

export default function SennheiserMomentum4ReviewPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <ArticleHeader {...articleData} />

        <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-10">
            <KeyTakeaways items={keyTakeaways} />

            {products.map((product) => (
              <ProductSection key={product.name} {...product} />
            ))}

            <FinalVerdict
              title="Final Verdict"
              content="The Sennheiser Momentum 4 Wireless stands out for audiophiles who demand great sound and extreme battery endurance."
              topPick={{
                name: 'Sennheiser Momentum 4 Wireless',
                href: 'https://www.amazon.in/Sennheiser-Momentum-Wireless-Headphones-Cancelling-ANC/dp/B0B6G9TPNQ?tag=techstor0caaf-21',
              }}
            />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <StickyCTA
        productName="Sennheiser Momentum 4 Wireless"
        href="https://www.amazon.in/Sennheiser-Momentum-Wireless-Headphones-Cancelling-ANC/dp/B0B6G9TPNQ?tag=techstor0caaf-21"
      />
      <Footer />
    </>
  )
}
