import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy | TechSelect',
  description: 'Learn how TechSelect collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
      
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: January 15, 2026
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Introduction
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            TechSelect (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Information We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sources.</li>
            <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers.</li>
            <li><strong>Contact Information:</strong> If you contact us or subscribe to our newsletter, we collect your email address and any information you provide.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>To provide and maintain our website</li>
            <li>To analyze and improve our content and user experience</li>
            <li>To send newsletters and updates (with your consent)</li>
            <li>To respond to your inquiries and requests</li>
            <li>To detect and prevent fraud or abuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Affiliate Links and Third Parties
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website contains affiliate links to third-party retailers. When you click these links, those third parties may collect information about you according to their own privacy policies. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Data Security
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Your Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this privacy policy or our data practices, please contact us at{' '}
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
