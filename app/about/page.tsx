import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Users, Award, Shield, CheckCircle } from 'lucide-react'

function LinkedinIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About Us | TechSelect',
  description: 'Learn about TechSelect - our mission, values, and the team behind our trusted product reviews and buying guides.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
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
          <p className="text-muted-foreground leading-relaxed mb-4">
            In a market flooded with sponsored content and unverified reviews, our mission is simple: to provide trustworthy, transparent product evaluations. We test every product we recommend, analyze its real-world performance, and evaluate whether it offers genuine value for money.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We focus on key consumer tech categories including laptops, smartphones, audio equipment, and smart home appliances, tailoring our recommendations specifically for Indian consumers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Core Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
            <div className="bg-card border border-border rounded-lg p-6">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-base mb-2">Editorial Independence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our review scores and recommendations are never for sale. Manufacturers cannot pay for favorable reviews or placement on our site.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-base mb-2">Rigorous Testing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every product undergoes standardized testing protocols alongside real-world daily use before receiving a rating.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-base mb-2">Consumer-First Focus</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We prioritize practical value, long-term durability, and actual user experience over spec-sheet marketing claims.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <Award className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-base mb-2">Transparent Disclosure</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We clearly disclose our affiliate relationships and testing methodologies on every review page across our platform.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            How We Test
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every product we recommend has been personally tested by our team. We purchase products at retail prices whenever possible to ensure our experience matches yours. When manufacturers provide review units, we disclose this clearly and maintain the same rigorous standards.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our testing process includes standardized benchmarks, real-world usage scenarios, and long-term reliability assessments. We update our recommendations regularly as new products emerge and market conditions change.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            TechSelect is based in Jabalpur, Madhya Pradesh, India. Our small team of specialist editors brings deep domain expertise to every review.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose">
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">Abhay Gupta</h3>
                <p className="text-sm text-primary font-medium mb-2">Hardware Editor</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Covers laptops, monitors, and PC hardware. Focuses on developer compilation benchmarks and thermal evaluation.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/abhay-gupta-197b17264/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-border/60"
              >
                <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn Profile
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">Dev Kumar Sharma</h3>
                <p className="text-sm text-primary font-medium mb-2">Audio Editor</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Specialises in headphones, earbuds, and speaker systems. Tests active noise cancellation and soundstage dynamics.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/dev-kumar-sharma-38a300286/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-border/60"
              >
                <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn Profile
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">Aditya Patwa</h3>
                <p className="text-sm text-primary font-medium mb-2">Mobile &amp; Smart Home Editor</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Covers smartphones, tablets, smart appliances, and home automation products for Indian homes.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/adityapatwa07/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-border/60"
              >
                <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn Profile
              </a>
            </div>
          </div>
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
      <section className="mt-12 p-6 sm:p-8 bg-muted/30 rounded-2xl border border-border text-center">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Our Location
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto">
          Our editorial and testing team operates out of Bengaluru, India's technology hub.
        </p>
        <div className="text-foreground/90 font-medium">
          TechSelect India<br />
          Level 3, Prestige Tech Park<br />
          Kadubeesanahalli, Bengaluru<br />
          Karnataka 560103, India
        </div>
      </section>
    </main>
      <Footer />
    </>
  )
}
