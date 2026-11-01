'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import type { Measurement, TrafficSource } from '@/lib/measurement'

function trafficSource(): TrafficSource {
  const utm = new URLSearchParams(window.location.search).get('utm_source')?.toLowerCase()
  const aliases: Record<string, TrafficSource> = { wa: 'whatsapp', whatsapp: 'whatsapp', tg: 'telegram', telegram: 'telegram', pinterest: 'pinterest', twitter: 'x', x: 'x', google: 'google' }
  let source: TrafficSource = utm ? aliases[utm] || 'other' : 'direct'
  if (!utm && document.referrer) {
    try {
      const host = new URL(document.referrer).hostname
      if (host !== window.location.hostname) {
        source = /(^|\.)whatsapp\.com$/.test(host) ? 'whatsapp'
          : /(^|\.)(t\.me|telegram\.org)$/.test(host) ? 'telegram'
          : /(^|\.)(google\.[a-z.]+)$/.test(host) ? 'google'
          : /(^|\.)pinterest\.[a-z.]+$/.test(host) ? 'pinterest'
          : /(^|\.)(t\.co|x\.com|twitter\.com)$/.test(host) ? 'x' : 'other'
      }
    } catch { /* Invalid referrers do not affect navigation. */ }
  }
  try {
    if (utm || (source !== 'direct' && !sessionStorage.getItem('ts_source'))) sessionStorage.setItem('ts_source', source)
    return (sessionStorage.getItem('ts_source') as TrafficSource) || source
  } catch { return source }
}

function send(measurement: Measurement) {
  // A direct link stays direct; measurement never delays the shopping navigation.
  const body = JSON.stringify(measurement)
  if (navigator.sendBeacon?.('/api/events', new Blob([body], { type: 'application/json' }))) return
  void fetch('/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
}

export function TrafficTracker() {
  const path = usePathname()
  useEffect(() => {
    if (navigator.doNotTrack === '1' || !path) return
    const source = trafficSource()
    send({ event: 'page_view', path, source, asin: '', tag: '' })
    const handleClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null
      if (!(link instanceof HTMLAnchorElement)) return
      const url = new URL(link.href)
      if (url.hostname === 'amazon.in' || url.hostname.endsWith('.amazon.in')) {
        send({ event: 'affiliate_click', path, source, asin: url.pathname.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i)?.[1] || '', tag: url.searchParams.get('tag') || '' })
      } else if (url.hostname === 't.me' || url.hostname === 'whatsapp.com' || url.hostname.endsWith('.whatsapp.com')) {
        send({ event: 'community_click', path, source, asin: '', tag: '' })
      }
    }
    document.addEventListener('click', handleClick)
    document.addEventListener('auxclick', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('auxclick', handleClick)
    }
  }, [path])
  return null
}
