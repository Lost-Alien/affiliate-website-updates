import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { Mail, MessageSquare, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | TechSelect',
  description: 'Get in touch with the TechSelect team. We welcome your questions, feedback, and product suggestions.',
}

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Contact' }]} />
      
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
        Contact Us
      </h1>
      
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Have a question, suggestion, or feedback? We&apos;d love to hear from you. Our team reads every message and responds as quickly as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-card border border-border rounded-lg p-6">
          <Mail className="h-8 w-8 text-primary mb-4" />
          <h2 className="font-semibold text-foreground mb-2">Email Us</h2>
          <p className="text-sm text-muted-foreground mb-3">
            General inquiries and feedback
          </p>
          <a
            href="mailto:shivangi2lost@gmail.com"
            className="text-sm text-primary hover:underline"
          >
            shivangi2lost@gmail.com
          </a>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <MessageSquare className="h-8 w-8 text-primary mb-4" />
          <h2 className="font-semibold text-foreground mb-2">Press Inquiries</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Media and partnership requests
          </p>
          <a
            href="mailto:shivangi2lost@gmail.com"
            className="text-sm text-primary hover:underline"
          >
            shivangi2lost@gmail.com
          </a>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <Clock className="h-8 w-8 text-primary mb-4" />
          <h2 className="font-semibold text-foreground mb-2">Response Time</h2>
          <p className="text-sm text-muted-foreground">
            We typically respond within 2-3 business days
          </p>
        </div>
      </div>

      <section className="bg-card border border-border rounded-lg p-8 mb-8">
        <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select a topic</option>
              <option value="feedback">General Feedback</option>
              <option value="correction">Report an Error</option>
              <option value="suggestion">Product Suggestion</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

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
