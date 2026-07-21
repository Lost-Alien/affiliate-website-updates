import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { CheckCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Editorial Guidelines | TechSelect',
  description: 'Learn about TechSelect editorial standards, review process, and commitment to accuracy and integrity.',
}

export default function EditorialGuidelinesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Editorial Guidelines' }]} />
      
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
          Editorial Guidelines
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          At TechSelect, we hold ourselves to the highest standards of journalistic integrity. These guidelines govern how we research, write, and publish content.
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Independence and Integrity
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our editorial decisions are made independently of any commercial relationships. We adhere to these principles:
          </p>
          <div className="not-prose space-y-3">
            {[
              'Reviews are never influenced by advertising or affiliate relationships',
              'We do not accept payment in exchange for positive coverage',
              'Product ratings reflect objective testing and expert analysis',
              'We disclose any relationships that could affect coverage',
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Source Standards
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We rely on multiple types of sources to inform our content:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Primary Testing:</strong> Hands-on evaluation by our team using standardized methodologies</li>
            <li><strong>Expert Consultation:</strong> Input from industry specialists and technical professionals</li>
            <li><strong>Manufacturer Information:</strong> Official specifications and documentation</li>
            <li><strong>User Feedback:</strong> Real-world experiences from verified purchasers</li>
            <li><strong>Independent Research:</strong> Academic studies and industry reports</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Review Products
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We obtain products for review through several methods:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Retail Purchases:</strong> Our preferred method; we buy products at retail prices</li>
            <li><strong>Manufacturer Loans:</strong> Temporary review units returned after testing</li>
            <li><strong>Review Samples:</strong> Units provided for testing purposes</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Regardless of how we obtain products, our review standards remain identical. We always disclose how we acquired review products.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Accuracy and Corrections
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We strive for accuracy in all our content. When errors occur, we:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Correct factual errors promptly</li>
            <li>Note significant corrections within the article</li>
            <li>Update articles when relevant new information becomes available</li>
            <li>Maintain transparency about what changed and when</li>
          </ul>
          <div className="not-prose mt-4 p-4 bg-muted rounded-lg">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Found an error? Please{' '}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>{' '}
                and we&apos;ll review and correct it promptly.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Content Updates
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Product recommendations and buying guides are regularly reviewed and updated to reflect market changes, new product releases, and price fluctuations. Each article displays its last update date. We aim to review major buying guides at least quarterly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Staff and Contributors
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All TechSelect content is written by experienced technology journalists and subject matter experts. Writers undergo training on our editorial standards and testing methodologies. Freelance contributors must adhere to the same guidelines as full-time staff.
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
