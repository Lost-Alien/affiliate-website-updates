import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleHeader } from '@/components/article/article-header'
import { ProductSection } from '@/components/article/product-section'
import { BuyingGuide } from '@/components/article/buying-guide'
import { FinalVerdict } from '@/components/article/final-verdict'
import { JsonLd } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Best 5G Smartphones in India (2026): Flagship Cameras & Displays | TechSelect India',
  description: 'In-depth testing of the best 5G smartphones in India. Comparing camera quality, 120Hz AMOLED displays, battery life, and overall performance.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best 5G Smartphones in India (2026): Flagship Cameras & Displays',
  image: 'https://techselect.blog/products/samsung-galaxy-s25.png',
  author: {
    '@type': 'Organization',
    name: 'TechSelect Editorial Team',
    url: 'https://techselect.blog/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechSelect India',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techselect.blog/icon.png',
    },
  },
  datePublished: '2026-07-26',
  dateModified: '2026-07-26',
}

const products = [
  {
    rank: 1,
    name: 'Samsung Galaxy 5G Smartphone',
    tagline: 'Best Overall 5G Flagship Smartphone',
    image: '/products/samsung-galaxy-s25.png',
    rating: 9.5,
    bestFor: 'Everyday flagship performance, top-tier display quality, and long-term OS update support.',
    features: [
      '6.7-inch 120Hz Dynamic AMOLED 2X Display',
      'Octa-Core 5G Processor with Vapor Chamber Cooling',
      '50MP OIS Triple Camera Array with Nightography',
      '5000 mAh Battery with Fast Charge Support',
    ],
    pros: [
      '2600 nits peak outdoor screen brightness for direct sunlight',
      '7 years of guaranteed OS and security updates',
      'Vapor chamber cooling prevents gaming thermal throttling',
    ],
    cons: [
      'Charger not included in box',
      'Max 45W wired charging cap',
    ],
    verdict: 'The Samsung Galaxy 5G smartphone is our top overall pick in India. It pairs an unbeatable 120Hz AMOLED display with reliable 5G battery life and long-term OS update commitment.',
    amazonUrl: 'https://www.amazon.in/Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B?tag=techstor0caaf-21',
  },
  {
    rank: 2,
    name: 'Vivo V70 Elite 5G',
    tagline: 'Best Smartphone for Portrait Photography',
    image: '/products/vivo-v70-elite.png',
    rating: 9.2,
    bestFor: 'Social media creators, portrait photography lovers, and users wanting 90W fast charging.',
    features: [
      '6.78-inch 1.5K 120Hz Curved AMOLED Screen',
      'Studio Aura Light Fill Flash Camera System',
      '5500 mAh High-Density Battery + 90W FlashCharge',
      'Slim 3D Curved Glass Ergonomic Chassis',
    ],
    pros: [
      'Studio-grade Smart Aura Light fill flash for night portraits',
      '90W FlashCharge charges 50% in 19 minutes',
      'Slim 3D curved glass body feels premium',
    ],
    cons: [
      'Pre-installed bloatware requires cleanup',
      'No stereo speaker balance equal to gaming phones',
    ],
    verdict: 'If taking stunning portrait photos and fast charging are your priorities, the Vivo V70 Elite 5G stands out with its smart Aura Light system.',
    amazonUrl: 'https://www.amazon.in/vivo-V70-Elite-Additional-Exchange/dp/B0GHS4WQYV?tag=techstor0caaf-21',
  },
  {
    rank: 2,
    name: 'Samsung Galaxy S26 Plus 5G',
    tagline: 'The Ultimate AI Flagship',
    image: '/products/samsung-galaxy-s26-plus.png',
    rating: 9.6,
    bestFor: 'Users wanting pro-grade cameras, 4900mAh two-day battery life, and robust AI tools without the Ultra\'s bulk.',
    features: [
      '50MP OIS Triple Camera with Photo Assist AI',
      '12GB RAM and 512GB ultra-fast storage',
      '4900mAh battery with Super Fast Wireless Charging',
      'Live Translate and Note Assist',
    ],
    pros: [
      'Photo Assist AI handles generative fill and subject repositioning instantly',
      'Incredible battery efficiency for a true 2-day use case',
      '12GB RAM future-proofs the device for upcoming AI updates',
    ],
    cons: [
      'Charger not included in box',
    ],
    verdict: 'The Galaxy S26 Plus is the smartest purchase in Samsung\'s lineup, perfectly balancing AI capabilities, battery life, and price.',
    amazonUrl: 'https://www.amazon.in/dp/B0GL8J486T?tag=techstor0caaf-21',
  },
]

export default function Best5gSmartphonesPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/' },
            { label: 'Mobiles', href: '/category/mobiles' },
            { label: 'Best 5G Smartphones' },
          ]}
        />

        <ArticleHeader
          title="Best 5G Smartphones in India (2026): Flagship Cameras & Displays"
          subtitle="We benchmarked camera color accuracy, 120Hz AMOLED outdoor brightness, 5G battery drain, and thermal performance across 10 days of testing."
          category="mobiles"
          author="TechSelect Editorial Team"
          authorRole="Mobile Tech Editors"
          publishDate="July 2026"
          readTime="7 min read"
        />

        {/* Product Reviews */}
        <section className="space-y-12 mb-16">
          {products.map((product) => (
            <ProductSection key={product.name} {...product} />
          ))}
        </section>

        {/* Buying Guide */}
        <BuyingGuide
          items={[
            {
              title: '1. Display Quality & Outdoor Brightness',
              content: 'Look for 120Hz AMOLED panels with at least 1500+ nits peak brightness for clear visibility under direct Indian sun.',
            },
            {
              title: '2. 5G Band Support & Battery Efficiency',
              content: 'Ensure the phone supports N28, N77, and N78 5G bands used by Reliance Jio and Airtel, coupled with a 5000+ mAh battery.',
            },
            {
              title: '3. Camera Stabilization (OIS)',
              content: 'Optical Image Stabilization (OIS) is crucial for blur-free night shots and steady 4K video recording.',
            },
          ]}
        />

        {/* Verdict */}
        <FinalVerdict
          title="Which 5G Smartphone Should You Buy?"
          content="For the best balance of display quality, long-term software support, and reliable performance, choose the Samsung Galaxy 5G. For portrait photography and 90W ultra-fast charging, go with the Vivo V70 Elite 5G."
          topPick={{
            name: 'Samsung Galaxy 5G Smartphone',
            href: 'https://www.amazon.in/Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B?tag=techstor0caaf-21',
          }}
        />
      </main>
      <Footer />
    </>
  )
}
