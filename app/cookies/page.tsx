import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Cookie Policy | TechSelect',
  description: 'Learn how TechSelect uses cookies and similar technologies to improve your browsing experience.',
}

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Cookie Policy' }]} />
      
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-2">
          Cookie Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: January 15, 2026
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            What Are Cookies?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit, making your next visit easier and the site more useful to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            How We Use Cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TechSelect uses cookies for the following purposes:
          </p>

          <h3 className="font-semibold text-foreground mb-2 mt-6">Essential Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
          </p>

          <h3 className="font-semibold text-foreground mb-2 mt-6">Analytics Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience. Data collected includes pages visited, time on site, and traffic sources.
          </p>

          <h3 className="font-semibold text-foreground mb-2 mt-6">Preference Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These cookies remember your preferences, such as dark mode settings, to provide a more personalized experience.
          </p>

          <h3 className="font-semibold text-foreground mb-2 mt-6">Affiliate Cookies</h3>
          <p className="text-muted-foreground leading-relaxed">
            When you click on affiliate links, third-party retailers may set cookies to track your purchase. These cookies allow us to earn commissions that support our free content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Third-Party Cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Some cookies on our site are set by third parties, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Google Analytics</strong> &ndash; Website traffic analysis</li>
            <li><strong>Amazon Associates</strong> &ndash; Affiliate tracking</li>
            <li><strong>Social Media Platforms</strong> &ndash; Share buttons and embedded content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Managing Cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Browser Settings:</strong> Most browsers allow you to view, manage, and delete cookies through their settings.</li>
            <li><strong>Opt-Out Tools:</strong> Many analytics providers offer opt-out mechanisms.</li>
            <li><strong>Do Not Track:</strong> We honor Do Not Track browser signals.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Note that disabling certain cookies may affect website functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Cookie Retention
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Different cookies have different lifespans. Session cookies are deleted when you close your browser, while persistent cookies remain for a set period (typically 30 days to 2 years) or until you delete them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Updates to This Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this cookie policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about our use of cookies, please contact us at{' '}
            <a href="mailto:privacy@techselect.com" className="text-primary hover:underline">
              privacy@techselect.com
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
