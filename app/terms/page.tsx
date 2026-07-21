import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Terms of Service | TechSelect',
  description: 'Read the terms and conditions for using the TechSelect website.',
}

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />
      
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: January 15, 2026
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using TechSelect (&quot;the Site&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Use of Content
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            All content on TechSelect, including text, images, graphics, and logos, is owned by us or our licensors and is protected by copyright laws. You may:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>View and read content for personal, non-commercial use</li>
            <li>Share links to our content with proper attribution</li>
            <li>Quote brief excerpts with attribution and a link to the original article</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            You may not reproduce, distribute, modify, or create derivative works from our content without written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Product Reviews and Recommendations
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our reviews and recommendations are based on our testing and research at the time of publication. Product specifications, prices, and availability may change. We make no guarantees about the accuracy or completeness of information, and we are not responsible for purchasing decisions you make based on our content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Affiliate Links
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            TechSelect participates in affiliate programs. When you click on affiliate links and make purchases, we may receive commissions. This does not affect the price you pay. Our use of affiliate links is governed by our{' '}
            <Link href="/affiliate-disclosure" className="text-primary hover:underline">
              Affiliate Disclosure
            </Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            User Conduct
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When using our website, you agree not to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Use automated systems to scrape or copy our content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Use the site for any unlawful purpose</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Disclaimer of Warranties
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            THE SITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, TECHSELECT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Changes to Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about these terms, contact us at{' '}
            <a href="mailto:legal@techselect.com" className="text-primary hover:underline">
              legal@techselect.com
            </a>.
          </p>
        </section>
      </article>

      <div className="mt-8 pt-8 border-t border-border">
        <Link
          href="/"
          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
        >
          &larr; Back to Home
        </Link>
      </div>
    </main>
  )
}
