import Link from 'next/link'

interface BuyingOption {
  name: string
  bestFor: string
  tradeoff: string
  href: string
}

export function BuyingSummary({ options, relatedHref, relatedLabel }: {
  options: BuyingOption[]
  relatedHref: string
  relatedLabel: string
}) {
  return (
    <section aria-label="Quick buying decision" className="my-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
      <h2 className="font-serif text-xl font-bold">Is it right for you?</h2>
      <p className="mt-2 text-xs text-muted-foreground">As an Amazon Associate I earn from qualifying purchases.</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {options.map((option) => (
          <div key={option.name} className="flex flex-col gap-3">
            <h3 className="font-semibold">{option.name}</h3>
            <p className="text-sm"><strong>Consider it for:</strong> {option.bestFor}</p>
            <p className="text-sm text-muted-foreground"><strong>Before buying:</strong> {option.tradeoff}</p>
            <a href={option.href} target="_blank" rel="noopener noreferrer sponsored" className="mt-auto inline-flex justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">Check current price on Amazon</a>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Product prices and availability are accurate as of the date/time indicated and are subject to change. Confirm the exact model, seller, and offer on Amazon before ordering.</p>
      <Link href={relatedHref} className="mt-4 inline-block text-sm font-medium text-accent underline underline-offset-4">{relatedLabel}</Link>
    </section>
  )
}
