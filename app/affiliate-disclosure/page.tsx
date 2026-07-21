import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { Info, DollarSign, ShieldCheck, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | TechSelect',
  description: 'Learn how TechSelect earns money through affiliate partnerships and how this affects our editorial independence.',
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Affiliate Disclosure' }]} />
      
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
          Affiliate Disclosure
        </h1>

        <div className="not-prose bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-6 mb-8">
          <div className="flex gap-4">
            <Info className="h-6 w-6 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                Transparency Notice
              </h2>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                TechSelect earns commissions from qualifying purchases made through links on our website. This support allows us to continue providing free, in-depth reviews and guides.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            How We Earn Money
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TechSelect is a participant in various affiliate advertising programs designed to provide a means for sites to earn advertising fees by linking to retail websites. Our primary affiliate partners include:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Amazon Associates Program</li>
            <li>Best Buy Affiliate Program</li>
            <li>B&H Photo Affiliate Program</li>
            <li>Manufacturer direct affiliate programs</li>
          </ul>
        </section>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-5">
            <DollarSign className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Commission-Based</h3>
            <p className="text-sm text-muted-foreground">
              We earn a small percentage when you purchase through our links at no extra cost to you.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <ShieldCheck className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Editorially Independent</h3>
            <p className="text-sm text-muted-foreground">
              Affiliate relationships never influence our reviews, ratings, or recommendations.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <FileText className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Always Disclosed</h3>
            <p className="text-sm text-muted-foreground">
              Every article with affiliate links includes a clear disclosure notice.
            </p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            What This Means for You
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you click on a product link and make a purchase:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>You pay the same price</strong> &ndash; Our affiliate partnerships never increase the price you pay.</li>
            <li><strong>We receive a commission</strong> &ndash; The retailer pays us a small percentage of your purchase.</li>
            <li><strong>You support our work</strong> &ndash; This revenue helps us maintain our testing lab, pay our writers, and keep our content free.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Our Editorial Independence
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We take editorial independence seriously. Here&apos;s how we maintain integrity:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Affiliate relationships are never a factor in product selection or ratings</li>
            <li>We recommend products even when no affiliate program exists</li>
            <li>Negative reviews are published regardless of affiliate status</li>
            <li>Our testing methodology is standardized and documented</li>
            <li>Writers and reviewers are not aware of commission rates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Questions?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about our affiliate relationships or editorial policies, please{' '}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>. We&apos;re committed to transparency and happy to explain our practices.
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
