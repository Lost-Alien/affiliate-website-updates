export interface DealContent {
  title: string
  description: string
}

const amazonProductUrl = /https?:\/\/(?:www\.)?amazon\.in\/(?:[^\s<>/?#]+\/)*(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})(?![A-Z0-9.])[^\s<>]*/gi
const offerLine = /^(?:apply\b|use\s+(?:code|coupon)\b|coupon\b|bank\s+offer\b|with\s+\w+\s+card\b|(?:flat\s+)?[₹\d][₹\d,.\s]*%?\s+(?:off|cashback)\b)/i
const instructionLine = /^(?:\d+[.)]\s+)?(?:check\s+(?:(?:latest|the)\s+)?price\b|(?:then\s+)?buy\s+(?:now|from|here|max|using)\b|collect\b|note\s*:|reg(?:ular)?\s+\d)/i
const priceOnly = /^(?:(?:fast\s+)?at\s+|loot\s+|now\s+)?(?:@\s*)?(?:(?:₹|rs\.?|inr)\s*)?[\d,.]+[\s*:/!.-]*$/i
const variantPrefix = /^\(\s*[^)]*(?:\d+\s*(?:gb|tb)\b|\b(?:ram|rom)\b|\bstorage\b|\bssd\b)[^)]*\)/i

function cleanLine(line: string): string {
  return line.replace(/https?:\/\/\S+/g, '')
    .replace(/(?:🔥|🛍️|⚡|🏷️|🛒|✨)/gu, '')
    .replace(/^[\s:*•]+/, '')
    .replace(/^loot\s*:\s*/i, '')
    .replace(/₹{2,}/g, '₹')
    .trim()
}

/**
 * A parenthesized RAM/storage variant with no product name around it, such as
 * "(8GB RAM, 256GB) @36,499", is a second-configuration line, not a headline.
 * It must not become the title of the product URL that follows it.
 */
function isVariantFragment(line: string): boolean {
  const prefix = line.match(variantPrefix)
  if (!prefix) return false
  const rest = line.slice(prefix[0].length).replace(/^[\s:@*-]+|[\s:]+$/g, '')
  return !rest || priceOnly.test(rest)
}

function isHeadline(line: string): boolean {
  return /\p{L}/u.test(line) && !priceOnly.test(line) && !offerLine.test(line) && !instructionLine.test(line) && !isVariantFragment(line)
}

/** Associate a headline and offer conditions with their own product URL. */
export function getDealContent(text: string, asin: string): DealContent {
  const fallback = `Amazon deal · ${asin}`
  const matches = [...text.matchAll(amazonProductUrl)]
  const index = matches.findIndex((match) => match[1].toUpperCase() === asin.toUpperCase())
  if (index < 0 && matches.length > 0) return { title: fallback, description: 'See Amazon for the current offer and availability.' }

  if (index >= 0) {
    const match = matches[index]
    const previousEnd = index > 0 ? matches[index - 1].index! + matches[index - 1][0].length : 0
    const heading = text.slice(previousEnd, match.index).split('\n').map(cleanLine)
    const title = heading.findLast(isHeadline) || fallback
    const after = text.slice(match.index! + match[0].length, matches[index + 1]?.index ?? text.length)
    const conditions: string[] = []
    for (const raw of after.split('\n')) {
      const line = cleanLine(raw)
      if (!line) continue
      if (!offerLine.test(line)) break
      conditions.push(line)
    }
    return { title, description: conditions.join(' ') }
  }

  const lines = text.split('\n').map(cleanLine).filter(Boolean)
  const heading = lines.findIndex(isHeadline)
  if (heading < 0) return { title: fallback, description: '' }
  return { title: lines[heading], description: lines.slice(heading + 1).join(' ') }
}

export function isTechDeal(title: string): boolean {
  return /\b(?:laptop|macbook|notebook|phone|smartphone|galaxy|iphone|ipad|tablet|headphone|earbud|earphone|speaker|soundbar|monitor|keyboard|mouse|gaming|geforce|rtx|gpu|ssd|nvme|router|wi-?fi|smart\s+(?:plug|watch|tv)|smartwatch|tapo|robot\s+vacuum|deebot|dreame|television|qled|oled|charger|power\s*bank|usb|webcam|microphone|projector|air\s+conditioner|inverter\s+ac)\b/i.test(title)
}
