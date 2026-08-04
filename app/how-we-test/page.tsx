import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { Headphones, Monitor, Watch, Laptop, Mic2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How We Test | TechSelect',
  description: 'Learn about TechSelect rigorous product testing methodology and how we evaluate the products we review.',
}

const categories = [
  {
    icon: Headphones,
    name: 'Audio Products',
    tests: [
      'Frequency response measurement',
      'Active noise cancellation effectiveness',
      'Battery life under continuous playback',
      'Microphone quality for calls',
      'Comfort during extended wear',
      'Build quality and durability assessment',
    ],
  },
  {
    icon: Monitor,
    name: 'Monitors & Displays',
    tests: [
      'Color accuracy (Delta E measurement)',
      'Brightness and contrast ratio',
      'Response time and input lag',
      'HDR performance and peak brightness',
      'Viewing angles and uniformity',
      'Gaming performance (VRR, refresh rate)',
    ],
  },
  {
    icon: Laptop,
    name: 'Computers & Laptops',
    tests: [
      'CPU and GPU benchmark suites',
      'Real-world application performance',
      'Battery life under various workloads',
      'Thermal performance and fan noise',
      'Display quality measurement',
      'Keyboard and trackpad evaluation',
    ],
  },
  {
    icon: Watch,
    name: 'Wearables',
    tests: [
      'Heart rate accuracy vs. medical devices',
      'GPS accuracy during outdoor activities',
      'Battery life across use cases',
      'Water resistance verification',
      'Sleep tracking accuracy',
      'App ecosystem and compatibility',
    ],
  },
]

export default function HowWeTestPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'How We Test' }]} />
      
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
          How We Test Products
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Every product we recommend goes through rigorous hands-on testing. Our methodology combines objective measurements with real-world usage to give you a complete picture of each product&apos;s performance.
        </p>

        <section className="mb-10">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Our Testing Philosophy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We believe that meaningful product evaluation requires both measurable data and subjective experience. Our testing process includes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Standardized Benchmarks:</strong> Objective measurements using calibrated equipment</li>
            <li><strong>Real-World Testing:</strong> Extended use in everyday scenarios</li>
            <li><strong>Comparative Analysis:</strong> Direct comparisons with competing products</li>
            <li><strong>Long-Term Evaluation:</strong> Follow-up assessments for durability and reliability</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
            Testing by Category
          </h2>
          <div className="not-prose space-y-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground text-lg">{category.name}</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {category.tests.map((test) => (
                    <li
                      key={test}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      {test}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Our Testing Environment
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We maintain a dedicated testing lab with controlled conditions for consistent, repeatable results:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Acoustically treated room for audio testing</li>
            <li>Calibrated colorimeters and spectrophotometers for display analysis</li>
            <li>Standardized network conditions for connectivity testing</li>
            <li>Climate-controlled environment for battery testing</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Rating System
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our ratings reflect a weighted combination of objective performance and subjective experience:
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold text-foreground">Rating</th>
                  <th className="text-left py-3 font-semibold text-foreground">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 font-medium">9.0 - 10</td>
                  <td className="py-3">Exceptional - Best in class, highly recommended</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 font-medium">8.0 - 8.9</td>
                  <td className="py-3">Excellent - Outstanding performance with minor limitations</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 font-medium">7.0 - 7.9</td>
                  <td className="py-3">Good - Solid choice for most users</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 font-medium">6.0 - 6.9</td>
                  <td className="py-3">Average - Acceptable but better options exist</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Below 6.0</td>
                  <td className="py-3">Below Average - Not recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Testing Duration
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We spend a minimum of one week with each product before publishing a review. Complex products like laptops and wearables undergo extended testing periods of 2-4 weeks to assess long-term performance, durability, and software updates.
          </p>
        </section>

        <section className="not-prose mb-8 bg-muted rounded-lg p-6">
          <div className="flex gap-4">
            <Mic2 className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Questions About Our Testing?</h3>
              <p className="text-sm text-muted-foreground">
                We&apos;re always happy to explain our methodology in more detail.{' '}
                <Link href="/contact" className="text-primary hover:underline">
                  Get in touch
                </Link>{' '}
                if you have questions about how we test specific product categories.
              </p>
            </div>
          </div>
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
