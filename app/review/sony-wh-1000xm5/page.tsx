import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { AffiliateDisclosure } from '@/components/article/affiliate-disclosure'
import { ReviewHeader } from '@/components/review/review-header'
import { ProductSummaryCard } from '@/components/review/product-summary-card'
import { FeatureBreakdown } from '@/components/review/feature-breakdown'
import { PerformanceNotes } from '@/components/review/performance-notes'
import { ReviewVerdict } from '@/components/review/review-verdict'
import { ReferencesSection } from '@/components/article/references-section'

export const metadata: Metadata = {
  title: 'Sony WH-1000XM5 Review: The Best ANC Headphones? | TechSelect',
  description: 'Our in-depth review of the Sony WH-1000XM5 wireless headphones. We tested sound quality, industry-leading ANC, comfort, and battery life over 4 weeks of daily use.',
  openGraph: {
    title: 'Sony WH-1000XM5 Review: The Best ANC Headphones?',
    description: 'Our in-depth review of the Sony WH-1000XM5 wireless headphones.',
    type: 'article',
  },
}

const reviewData = {
  productName: 'Sony WH-1000XM5',
  category: 'Audio',
  rating: 9.4,
  ratingBreakdown: {
    'Sound Quality': 9.5,
    'ANC Performance': 9.8,
    'Comfort': 9.2,
    'Battery Life': 9.0,
    'Value': 9.0,
  },
  author: 'Rahul Sharma',
  authorRole: 'Audio Editor',
  publishDate: 'January 10, 2024',
  updateDate: 'January 18, 2024',
  readTime: '10 min read',
  bestFor: ['Frequent travellers who need best-in-class noise cancellation', 'Audiophiles seeking premium wireless sound quality', 'Work-from-home professionals needing focus'],
  specs: [
    { label: 'Driver Size', value: '30mm carbon fiber composite' },
    { label: 'Battery Life', value: '30 hours (ANC on)' },
    { label: 'ANC', value: 'Yes, 8 microphones + Auto NC Optimizer' },
    { label: 'Weight', value: '250g' },
    { label: 'Bluetooth', value: '5.2 with Multipoint' },
    { label: 'Codecs', value: 'SBC, AAC, LDAC' },
  ],
  pros: [
    'Industry-leading noise cancellation with 8 microphones',
    'Exceptional sound quality with 30mm drivers',
    'Lightweight at 250g with premium build quality',
    'Excellent 30-hour battery life with quick charge',
    'Speak-to-Chat and Adaptive Sound Control features',
  ],
  cons: [
    'Premium pricing compared to competitors',
    'No foldable design unlike predecessor XM4',
    'Touch controls can be accidentally triggered',
  ],
}

const featureData = [
  {
    title: 'Sound Quality',
    rating: 9.5,
    content: 'The Sony WH-1000XM5 delivers exceptional audio quality through its 30mm carbon fiber composite drivers. The sound signature is warm and balanced with tight bass, clear mids, and detailed highs. LDAC codec support enables hi-res audio streaming on compatible devices, making these headphones shine with high-quality source material. The new Integrated Processor V1 handles audio processing beautifully.',
  },
  {
    title: 'Active Noise Cancellation',
    rating: 9.8,
    content: 'Sony has raised the bar again with the XM5. Eight microphones work together using the HD Noise Cancelling Processor QN1 to deliver best-in-class ANC. The Auto NC Optimizer automatically adjusts noise cancellation based on your environment and whether you are wearing glasses. Low-frequency rumble from aircraft and trains is virtually eliminated, while office chatter becomes a distant murmur.',
  },
  {
    title: 'Comfort & Design',
    rating: 9.2,
    content: 'At just 250g, the XM5 is noticeably lighter than its predecessor. The soft-fit leather and improved headband padding distribute weight evenly, allowing for 6+ hour listening sessions without fatigue. The minimalist design looks premium, though the non-foldable frame may concern frequent travellers. The included carrying case helps protect them during transport.',
  },
  {
    title: 'Battery Life',
    rating: 9.0,
    content: 'Sony claims 30 hours with ANC enabled, and our real-world testing confirmed approximately 28-30 hours at moderate volume. A 3-minute quick charge provides 3 hours of playback — perfect for when you forget to charge. The USB-C port makes charging convenient, and the headphones work passively with the included audio cable.',
  },
]

const performanceNotes = [
  {
    scenario: 'Air Travel',
    notes: 'Outstanding. The ANC handles engine noise exceptionally well, making long-haul flights much more comfortable.',
  },
  {
    scenario: 'Office / WFH',
    notes: 'Excellent. Speak-to-Chat pauses audio when you speak, and the ANC blocks out most office noise effectively.',
  },
  {
    scenario: 'Outdoor Use',
    notes: 'Very Good. Ambient Sound mode lets traffic noise through for safety, and wind noise reduction works well.',
  },
  {
    scenario: 'Video Calls',
    notes: 'Excellent. Four beamforming microphones deliver crystal-clear voice pickup, with AI-based noise reduction.',
  },
]

export default function ReviewPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ReviewHeader
          productName={reviewData.productName}
          category={reviewData.category}
          author={reviewData.author}
          authorRole={reviewData.authorRole}
          publishDate={reviewData.publishDate}
          updateDate={reviewData.updateDate}
          readTime={reviewData.readTime}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <AffiliateDisclosure />

              <ProductSummaryCard
                productName={reviewData.productName}
                rating={reviewData.rating}
                ratingBreakdown={reviewData.ratingBreakdown}
                bestFor={reviewData.bestFor}
                specs={reviewData.specs}
                pros={reviewData.pros}
                cons={reviewData.cons}
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed">
                  The Sony WH-1000XM5 represents the fifth generation of Sony&apos;s flagship noise-cancelling headphones, building on a legacy of audio excellence. After four weeks of testing across flights, office work, and daily commutes in India, we can confirm these are among the best wireless headphones you can buy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In this review, we break down everything you need to know about the Sony WH-1000XM5 — from sound quality and ANC performance to comfort, battery life, and overall value. Are these worth the premium price tag in India? Let us find out.
                </p>
              </div>

              <FeatureBreakdown features={featureData} />

              <PerformanceNotes notes={performanceNotes} />

              <ReviewVerdict
                rating={reviewData.rating}
                summary="The Sony WH-1000XM5 sets a new benchmark for wireless ANC headphones. With industry-leading noise cancellation, exceptional sound quality, and a comfortable lightweight design, these headphones justify their premium positioning. The lack of a foldable design and occasional touch control issues are minor gripes in an otherwise outstanding package."
                recommendation="We recommend the Sony WH-1000XM5 for anyone who prioritizes audio quality and noise cancellation. They are especially suited for frequent travellers, remote workers, and audiophiles who want the best wireless listening experience available."
                productName={reviewData.productName}
              />

              <ReferencesSection />
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
