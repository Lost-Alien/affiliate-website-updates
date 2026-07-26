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
  title: 'ASUS ROG Strix G16 Gaming Laptop Review | TechSelect',
  description: 'In-depth review of ASUS ROG Strix G16. Benchmarks for thermal throttling, 2.5K 240Hz screen accuracy, and compile times.',
  openGraph: {
    title: 'ASUS ROG Strix G16 Review',
    description: 'Benchmarking the Intel Core Ultra 9 and RTX GPU powerhouse.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ASUS ROG Strix G16 Review',
  description: 'Benchmarking performance, thermals, and display on the ROG Strix G16.',
  author: {
    '@type': 'Person',
    name: 'Priya Sharma',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techselect.blog/icon.svg',
    },
  },
  datePublished: '2026-05-01',
  dateModified: '2026-07-26',
}

const articleData = {
  title: 'ASUS ROG Strix G16 Detailed Review',
  subtitle: 'A high-refresh rate desktop replacement for hard-core gamers and developers.',
  author: 'Priya Sharma',
  authorRole: 'Hardware Editor',
  publishDate: 'May 1, 2026',
  updateDate: 'July 26, 2026',
  readTime: '7 min read',
  category: 'Computers',
}

const keyTakeaways = [
  'Tri-Fan technology with Conductonaut Extreme liquid metal keeps CPU thermals under control.',
  '16-inch 2.5K 240Hz display provides buttery smooth frame rates and color fidelity.',
  'Expandable RAM and storage slots offer long-term upgradeability.',
]

const products = [
  {
    rank: 1,
    name: 'ASUS ROG Strix G16',
    tagline: 'High Performance Desktop Replacement',
    rating: 9.4,
    image: '/products/asus-rog-strix-g16.jpg',
    amazonUrl: 'https://www.amazon.in/dp/B0F5BH7D1L?th=1&tag=techstor0caaf-21',
    bestFor: 'Gamers, 3D artists, and developers compiling huge codebases.',
    features: ['Intel Core Ultra 9 processor', 'NVIDIA GeForce RTX graphics', '32GB DDR5 RAM', '2.5K 240Hz IPS screen'],
    pros: ['Desktop-tier compiling speed', 'Sensational 240Hz display', 'Substantial thermal cooling'],
    cons: ['Chunky chassis power brick'],
    verdict: 'The ASUS ROG Strix G16 is the ultimate performance gaming laptop.',
  },
]

export default function AsusRogStrixG16ReviewPage() {
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
              content="The ASUS ROG Strix G16 is the ultimate machine for heavy workloads and top-tier gaming."
              topPick={{
                name: 'ASUS ROG Strix G16',
                href: 'https://www.amazon.in/dp/B0F5BH7D1L?th=1&tag=techstor0caaf-21',
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
        productName="ASUS ROG Strix G16"
        href="https://www.amazon.in/dp/B0F5BH7D1L?th=1&tag=techstor0caaf-21"
      />
      <Footer />
    </>
  )
}
