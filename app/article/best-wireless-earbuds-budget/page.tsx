import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { AffiliateDisclosure } from '@/components/article/affiliate-disclosure'
import { ArticleHeader } from '@/components/article/article-header'
import { KeyTakeaways } from '@/components/article/key-takeaways'
import { ComparisonTable } from '@/components/article/comparison-table'
import { ProductSection } from '@/components/article/product-section'
import { BuyingGuide } from '@/components/article/buying-guide'
import { FAQ } from '@/components/article/faq'
import { FinalVerdict } from '@/components/article/final-verdict'
import { StickyCTA } from '@/components/article/sticky-cta'
import { ReferencesSection } from '@/components/article/references-section'

export const metadata: Metadata = {
  title: 'ASUS ROG Strix G16 vs Apple MacBook Pro M4 (2026) | TechSelect',
  description: 'Can a Windows gaming powerhouse beat Apple’s M4 silicon for developers and creators? Here is our definitive comparison between the ROG Strix G16 and MacBook Pro.',
  openGraph: {
    title: 'ASUS ROG Strix G16 vs Apple MacBook Pro M4',
    description: 'We compared the top developer and gaming laptops in India to find the real winner.',
    type: 'article',
  },
}

const articleData = {
  title: 'ASUS ROG Strix G16 vs Apple MacBook Pro M4: The Developer Shootout',
  subtitle: 'Windows gaming beast vs Apple M4 Silicon — we tested compile times, gaming frame rates, and battery limits.',
  author: 'Karan Malhotra',
  authorRole: 'Hardware Editor',
  publishDate: 'July 19, 2026',
  updateDate: 'July 21, 2026',
  readTime: '8 min read',
  category: 'Computers',
}

const keyTakeaways = [
  'ASUS ROG Strix G16 is the ultimate performance king with Intel Core Ultra 9 275HX and NVIDIA RTX 5070 Ti. It is a desktop replacement.',
  'Apple MacBook Pro M4 leads in battery life, lasting up to 22 hours on a single charge. No Windows laptop matches this efficiency.',
  'For developers compiling heavy codebases, the MacBook Pro M4 is silent and cool. The ROG Strix G16 runs louder under heavy load.',
  'If you play games on the side, the ASUS is the only real choice. MacBook gaming compatibility is still highly limited.',
]

const products = [
  {
    rank: 1,
    name: 'ASUS ROG Strix G16 (G615LR-S5190WS)',
    tagline: 'The Ultimate Gaming & Dev Powerhouse',
    rating: 9.4,
    image: '/products/asus-rog-strix-g16.jpg',
    bestFor: 'Developers who want maximum processing power, high-end gaming capability, and zero performance limits.',
    features: ['Intel Core Ultra 9 275HX processor (up to 5.4GHz)', 'NVIDIA GeForce RTX 5070 Ti 12GB GDDR7 GPU', '32GB DDR5 RAM & 1TB PCIe 4.0 NVMe SSD', '16" 2.5K QHD+ 240Hz fast gaming display'],
    pros: ['Desktop-grade gaming performance with RTX 5070 Ti (140W TGP)', '32GB DDR5 RAM is future-proof for VMs and Docker containers', 'Gorgeous 240Hz screen makes everything feel incredibly smooth', 'Advanced cooling system keeps performance stable'],
    cons: ['Heavy at 2.65 kg — not built for portable working', 'AC charging brick is bulky to carry around'],
    verdict: 'Buy the ASUS ROG Strix G16 if you want maximum power without compromise. Whether you compile large code projects, render 3D scenes, or play heavy AAA games at 1440p, it handles everything effortlessly.',
  },
  {
    rank: 2,
    name: 'Apple MacBook Pro 13" M4 (2024)',
    tagline: 'Best for Ultra-Portable Work & Long Battery Life',
    rating: 9.2,
    image: '/products/apple-macbook-pro-m4.png',
    bestFor: 'Mobile developers, students, and creative professionals who work on the go and value efficiency.',
    features: ['Apple M4 Chip with 10-core CPU and 10-core GPU', '16GB unified memory architecture', '512GB ultra-fast SSD storage', '13.3" Liquid Retina display with 500nits brightness'],
    pros: ['Incredible battery life lasting up to 22 hours on a charge', 'Completely silent operation even under heavy CPU loads', 'Lightweight, ultra-thin aluminum unibody build', 'Best-in-class trackpad and typing comfort'],
    cons: ['Limited port selection (only two Thunderbolt/USB-C ports)', 'Very limited support for popular PC games'],
    verdict: 'Buy the MacBook Pro M4 if portability, silence, and long battery life are what you need. It is the perfect daily driver for web developers and writers who want to work from cafes without searching for power sockets.',
  },
]

const comparisonData = {
  headers: ['Product', 'Battery Life', 'Gaming Performance', 'RAM Capacity', 'Rating'],
  rows: [
    ['ASUS ROG Strix G16', 'Up to 6-8 hours', 'Desktop-grade (RTX 5070 Ti)', '32GB DDR5 (Upgradeable)', '9.4'],
    ['Apple MacBook Pro M4', 'Up to 20-22 hours', 'Very basic (macOS native)', '16GB Unified (Fixed)', '9.2'],
  ],
}

const buyingGuideItems = [
  {
    title: 'How to Choose: macOS vs Windows 11',
    content: 'If your daily work involves Docker, macOS terminal, and Xcode for iOS apps, the MacBook is the default choice. If you develop in .NET, work with local CUDA models, or want to game after work, the ASUS ROG Strix G16 running Windows 11 is the clear path.',
  },
  {
    title: 'Upgradability vs Unified Memory',
    content: 'The MacBook Pro has unified memory soldered to the chip, which means you cannot upgrade it later. The ASUS ROG Strix G16 allows you to swap or add DDR5 RAM and add secondary high-speed NVMe SSDs, extending the life of the machine.',
  },
]

const faqItems = [
  {
    question: 'Can I play PC games on the MacBook Pro M4?',
    answer: 'Only native macOS games (like Baldur\'s Gate 3 or Resident Evil) run well. For the vast majority of Steam games, you will need a Windows PC like the ROG Strix G16.',
  },
  {
    question: 'How heavy is the ASUS ROG Strix G16?',
    answer: 'It weighs 2.65 kg, and the power brick adds another 700g. It is best used as a portable desktop station rather than a laptop you slip into a backpack daily.',
  },
]

const ASUS_AFFILIATE_URL = 'https://www.amazon.in/dp/B0F5BH7D1L?th=1&linkCode=ll2&tag=techstor0caaf-21&linkId=5d528a812b0131c07a2021e4fa256922&ref_=as_li_ss_tl'

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article>
          <ArticleHeader {...articleData} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <AffiliateDisclosure />
                
                <div className="prose prose-lg max-w-none mt-8">
                  <p className="text-lg text-foreground leading-relaxed font-semibold">
                    Let’s stop pretending all laptops are equal. A thin-and-light laptop cannot handle heavy gaming, and a massive gaming laptop will not survive a 4-hour flight without a wall socket.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We tested the ASUS ROG Strix G16 (2025) and Apple\'s MacBook Pro M4 side-by-side. We compiled code, rendered video, and tested battery drain to see which machine earns your hard-earned cash. Here is our unfiltered breakdown.
                  </p>
                </div>

                <KeyTakeaways items={keyTakeaways} />

                <ComparisonTable headers={comparisonData.headers} rows={comparisonData.rows} />

                <div className="mt-12 space-y-12">
                  {products.map((product) => (
                    <ProductSection
                      key={product.name}
                      {...product}
                      amazonUrl={
                        product.name.includes('ASUS')
                          ? ASUS_AFFILIATE_URL
                          : 'https://www.amazon.in/Apple-MacBook-13-inch-10%E2%80%91core-Unified/dp/B0DLHYDDFY?linkCode=ll2&tag=techstor0caaf-21&linkId=4ad9b60e3c4f42cc4e9ac49d4c8967e7&ref_=as_li_ss_tl'
                      }
                    />
                  ))}
                </div>

                <BuyingGuide items={buyingGuideItems} />

                <FAQ items={faqItems} />

                <FinalVerdict
                  title="Our Definitive Recommendation"
                  content="If you play PC games or work with machine learning models locally, the ASUS ROG Strix G16 is the undisputed champion. For users who commute daily and value battery life and silence above all else, buy the MacBook Pro M4."
                  topPick={{
                    name: 'ASUS ROG Strix G16',
                    href: ASUS_AFFILIATE_URL,
                  }}
                />

                <ReferencesSection />
              </div>

              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <StickyCTA productName="ASUS ROG Strix G16" href={ASUS_AFFILIATE_URL} />
    </>
  )
}
