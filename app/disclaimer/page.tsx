import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Disclaimer | TechSelect',
  description:
    'TechSelect disclaimer — information about the accuracy of our content, affiliate relationships, and limitations of liability for product recommendations.',
}

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Disclaimer</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: July 2026</p>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            The information on TechSelect (<strong className="text-foreground">techselect.blog</strong>) is provided for general informational purposes only. All product recommendations, ratings, and reviews reflect our team&apos;s independent testing and opinions at the time of publication.
          </p>

          <h2 className="font-serif text-xl font-semibold text-foreground mt-8">Product Information Accuracy</h2>
          <p>
            Product specifications, pricing, and availability may change without notice. While we make every effort to ensure the accuracy of our content at the time of publication, we make no warranties as to the completeness or accuracy of this information. Always verify current specifications, pricing, and availability directly with the manufacturer or retailer before making a purchase.
          </p>

          <h2 className="font-serif text-xl font-semibold text-foreground mt-8">Purchasing Decisions</h2>
          <p>
            TechSelect is not responsible for purchasing decisions made based on content published on this site. Product recommendations are based on our editorial team&apos;s assessment at the time of testing. Individual experiences with products may vary depending on usage, environment, and personal preferences.
          </p>

          <h2 className="font-serif text-xl font-semibold text-foreground mt-8">Affiliate Relationships</h2>
          <p>
            This site participates in the Amazon Associates Program and may participate in other affiliate programs. When you click on product links and make a purchase, TechSelect may earn a commission at no additional cost to you. This affiliate relationship does not influence our editorial opinions or product recommendations. For full details, please read our{' '}
            <Link href="/affiliate-disclosure" className="text-primary underline hover:no-underline">
              Affiliate Disclosure
            </Link>
            .
          </p>

          <h2 className="font-serif text-xl font-semibold text-foreground mt-8">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, TechSelect and its editors, authors, and contributors shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of, or inability to use, any information on this website, including but not limited to product performance, compatibility, or suitability for any particular purpose.
          </p>

          <h2 className="font-serif text-xl font-semibold text-foreground mt-8">External Links</h2>
          <p>
            This website contains links to external websites, including Amazon India and other retailers. TechSelect does not control the content or privacy practices of these external sites and accepts no responsibility for them. Visiting external links is at your own discretion.
          </p>

          <h2 className="font-serif text-xl font-semibold text-foreground mt-8">Contact</h2>
          <p>
            If you have questions about this Disclaimer, please contact us at{' '}
            <a href="mailto:support@techselect.blog" className="text-primary underline hover:no-underline">
              support@techselect.blog
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
