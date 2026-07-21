import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { Users, Award, Shield, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | TechSelect',
  description: 'Learn about TechSelect - our mission, values, and the team behind our trusted product reviews and buying guides.',
}

const values = [
  {
    icon: Shield,
    title: 'Independence',
    description: 'We never accept payment for reviews. Our recommendations are based solely on rigorous testing and expert analysis.',
  },
  {
    icon: Target,
    title: 'Accuracy',
    description: 'Every product we review goes through our standardized testing methodology to ensure consistent, comparable results.',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Our team includes specialists in audio engineering, display technology, and consumer electronics with decades of combined experience.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We listen to our readers. Your feedback helps us improve our content and focus on the products that matter most to you.',
  },
]

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'About Us' }]} />
      
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
          About TechSelect
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          TechSelect is your trusted source for in-depth product reviews, comprehensive buying guides, and honest comparisons. We help you make informed purchasing decisions by cutting through marketing noise and delivering real-world insights.
        </p>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe everyone deserves access to reliable product information. Our mission is to empower consumers with the knowledge they need to choose products that truly fit their needs and budget. We achieve this through hands-on testing, transparent methodologies, and clear, actionable recommendations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-lg p-6"
              >
                <value.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every product we recommend has been personally tested by our team. We purchase products at retail prices whenever possible to ensure our experience matches yours. When manufacturers provide review units, we disclose this clearly and maintain the same rigorous standards.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our testing process includes standardized benchmarks, real-world usage scenarios, and long-term reliability assessments. We update our recommendations regularly as new products emerge and market conditions change.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Affiliate Relationships
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            TechSelect earns commissions through affiliate partnerships when you purchase products through our links. This never influences our recommendations or review scores. We recommend the best products regardless of affiliate status, and clearly disclose our relationships on every page. Learn more in our{' '}
            <Link href="/affiliate-disclosure" className="text-primary hover:underline">
              affiliate disclosure
            </Link>.
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
