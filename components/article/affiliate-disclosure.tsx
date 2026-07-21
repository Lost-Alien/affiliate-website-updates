import { Info } from 'lucide-react'

export function AffiliateDisclosure() {
  return (
    <div className="flex gap-3 p-4 bg-muted/50 rounded-lg border border-border">
      <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
      <p className="text-sm text-muted-foreground leading-relaxed">
        <span className="font-medium text-foreground">Affiliate Disclosure:</span> We may earn a commission when you purchase through links on our site. This does not influence our reviews — we test every product ourselves and only recommend what we genuinely believe in.{' '}
        <a href="/affiliate-disclosure" className="text-accent hover:underline">
          Learn more
        </a>
      </p>
    </div>
  )
}
