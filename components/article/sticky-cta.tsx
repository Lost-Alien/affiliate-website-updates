'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, X } from 'lucide-react'

interface StickyCTAProps {
  productName: string
  href: string
}

export function StickyCTA({ productName, href }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible || isDismissed) return null

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg z-50">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground truncate">{productName}</p>
          <p className="text-sm text-muted-foreground">Our Top Pick</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
        >
          View on Amazon.in
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
