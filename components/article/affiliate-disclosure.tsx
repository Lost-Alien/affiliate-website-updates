import { Info } from 'lucide-react'

export function AffiliateDisclosure() {
  return (
    <div className="flex gap-3 p-4 bg-amber-500/10 dark:bg-amber-500/20 rounded-xl border border-amber-500/30 text-amber-900 dark:text-amber-200">
      <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
      <p className="text-sm leading-relaxed">
        <strong className="font-semibold">Disclosure:</strong> TechSelect is reader-supported. As an Amazon Associate I earn from qualifying purchases. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.{' '}
        <a href="/affiliate-disclosure" className="underline font-medium hover:text-amber-700 dark:hover:text-amber-100">
          Read full disclosure
        </a>
      </p>
    </div>
  )
}
