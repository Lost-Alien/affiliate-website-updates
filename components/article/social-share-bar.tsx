'use client'

import { useState, useEffect } from 'react'
import { Share2, Check, Copy, ExternalLink } from 'lucide-react'

interface SocialShareBarProps {
  title?: string
  url?: string
}

export function SocialShareBar({ title: initialTitle, url: initialUrl }: SocialShareBarProps) {
  const [copied, setCopied] = useState(false)
  const [currentUrl, setCurrentUrl] = useState(initialUrl || '')
  const [articleTitle, setArticleTitle] = useState(initialTitle || '')
  const [canNativeShare, setCanNativeShare] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const activeUrl = initialUrl || window.location.href
      setCurrentUrl(activeUrl)

      const detectedTitle =
        initialTitle ||
        document.querySelector('h1')?.textContent?.trim() ||
        document.title.replace(' | TechSelect', '').trim() ||
        'TechSelect Review & Buying Guide'

      setArticleTitle(detectedTitle)

      if ('share' in navigator) {
        setCanNativeShare(true)
      }
    }
  }, [initialTitle, initialUrl])

  // Base encoded URL used by all share links
  const encodedUrl = encodeURIComponent(currentUrl)

  // --- Platform-specific share text helpers ---
  // X/Twitter: 280 chars total. URL counts as 23 chars. Reserve 20 chars for " via @techselect_blog"
  // So title text budget = 280 - 23 - 20 - 1 (space) = 236 chars
  const X_TITLE_LIMIT = 236
  const twitterTitle = articleTitle.length > X_TITLE_LIMIT
    ? articleTitle.slice(0, X_TITLE_LIMIT - 1) + '…'
    : articleTitle
  const twitterText = encodeURIComponent(`${twitterTitle} via @techselect_blog`)

  // WhatsApp: No hard limit, but include a contextual intro for better CTR
  // Format: "📖 <title>\n\nRead the full review on TechSelect:\n<url>"
  const whatsappText = encodeURIComponent(
    `📖 ${articleTitle}\n\nRead the full review on TechSelect:\n${currentUrl}`
  )

  // Pinterest: 500 char description limit. Append hashtag for discoverability.
  const PINTEREST_DESC_LIMIT = 490 // leave room for hashtag
  const pinterestDesc = articleTitle.length > PINTEREST_DESC_LIMIT
    ? articleTitle.slice(0, PINTEREST_DESC_LIMIT - 1) + '…'
    : articleTitle
  const pinterestText = encodeURIComponent(`${pinterestDesc} #TechSelect`)

  // Native Share: Keep text concise for mobile — 100 char limit on text field
  const NATIVE_SHARE_LIMIT = 100
  const nativeShareText = `📖 ${articleTitle}`.length > NATIVE_SHARE_LIMIT
    ? `📖 ${articleTitle}`.slice(0, NATIVE_SHARE_LIMIT - 1) + '…'
    : `📖 ${articleTitle}`

  const handleNativeShare = async () => {
    if (typeof window !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({
          title: articleTitle,
          text: nativeShareText,
          url: currentUrl,
        })
      } catch {
        // User cancelled or share failed
      }
    }
  }

  const handleCopyLink = async () => {
    try {
      if (typeof window !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      }
    } catch {
      // Fallback
    }
  }

  const shareLinks = [
    {
      name: 'X (Twitter)',
      // text = "<title> via @techselect_blog" (≤257 chars) + url (23 chars) = within 280
      href: `https://x.com/intent/tweet?text=${twitterText}&url=${encodedUrl}`,
      bg: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      // LinkedIn sharing pulls og:title / og:description automatically from the URL
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bg: 'hover:bg-[#0A66C2] hover:text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      // description = "<title> #TechSelect" (≤500 chars) & media = valid PNG image
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodeURIComponent('https://techselect.blog/logo.png')}&description=${pinterestText}`,
      bg: 'hover:bg-[#E60023] hover:text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.6 0 12.017 0z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      // Full contextual message: emoji + title + intro phrase + URL
      href: `https://api.whatsapp.com/send?text=${whatsappText}`,
      bg: 'hover:bg-[#25D366] hover:text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      // Facebook pulls og:title, og:description, og:image automatically from the URL
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: 'hover:bg-[#1877F2] hover:text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ]

  const officialSocials = [
    {
      name: 'Pinterest',
      href: 'https://www.pinterest.com/supporttechselectblog/',
      bg: 'hover:bg-[#E60023] hover:text-white',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.6 0 12.017 0z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/support.techselect.blog/',
      bg: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'X',
      href: 'https://x.com/techselect_blog',
      bg: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@TechSelect_blog',
      bg: 'hover:bg-[#FF0000] hover:text-white',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="my-6 p-4 bg-card border border-border/80 rounded-2xl shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Share Article */}
        <div className="flex items-center flex-wrap gap-2.5">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1">
            <Share2 className="w-3.5 h-3.5 text-primary" />
            Share Post:
          </span>

          {canNativeShare && (
            <button
              onClick={handleNativeShare}
              title="Share via device apps"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-primary/30 bg-primary/10 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-2xs cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Share Post</span>
            </button>
          )}

          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Share post on ${item.name}`}
              className={`p-2 rounded-xl border border-border bg-background text-muted-foreground transition-all duration-200 hover:scale-105 shadow-2xs ${item.bg}`}
            >
              {item.icon}
            </a>
          ))}

          <button
            onClick={handleCopyLink}
            title="Copy Post Link"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-background text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all shadow-2xs cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 font-semibold">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Right Side: Follow Official Channels */}
        <div className="flex items-center flex-wrap gap-2.5 pt-3 border-t border-border/50 md:pt-0 md:border-t-0">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1">
            Follow Us:
          </span>
          <div className="flex items-center gap-2">
            {officialSocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Follow TechSelect on ${social.name}`}
                className={`p-2 rounded-xl border border-border bg-muted/50 text-muted-foreground transition-all duration-200 hover:scale-105 ${social.bg}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
