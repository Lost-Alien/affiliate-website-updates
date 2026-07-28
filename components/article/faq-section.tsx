import React from 'react'
import { HelpCircle } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  faqs: FAQItem[]
}

export function FAQSection({ title = 'Frequently Asked Questions', faqs }: FAQSectionProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="my-10 bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
          <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h3 className="font-serif font-bold text-xl text-foreground">{title}</h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-border/60 pb-5 last:border-0 last:pb-0">
              <h4 className="font-semibold text-base text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">Q{idx + 1}:</span>
                {faq.question}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
