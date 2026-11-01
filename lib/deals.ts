export interface DealContent {
  title: string
  description: string
}

const amazonProductUrl = /https?:\/\/(?:www\.)?amazon\.in\/[^\s<>]*?(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})[^\s<>]*/gi
const offerLine = /^(?:apply|use\s+(?:code|coupon)|coupon|bank\s+offer|with\s+\w+\s+card|check\s+price|buy\s+now|https?:\/\/)/i

function cleanLine(line: string): string {
  return line.replace(/https?:\/\/\S+/g, '').replace(/(?:🔥|🛍️|⚡|🏷️|🛒|✨)/gu, '').replace(/^[\s:*]+/, '').replace(/^loot\s*:\s*/i, '').trim()
}

/** Associate a headline and offer conditions with their own product URL. */
export function getDealContent(text: string, asin: string): DealContent {
  const matches = [...text.matchAll(amazonProductUrl)]
  const index = matches.findIndex((match) => match[1].toUpperCase() === asin.toUpperCase())
  if (index < 0 && matches.length > 0) return { title: `Amazon deal · ${asin}`, description: 'See Amazon for the current offer and availability.' }

  if (index >= 0) {
    const match = matches[index]
    const previousEnd = index > 0 ? matches[index - 1].index! + matches[index - 1][0].length : 0
    const heading = text.slice(previousEnd, match.index).split('\n').map(cleanLine)
      .filter((line) => line.length > 3 && !offerLine.test(line))
    const title = heading.at(-1) || `Amazon deal · ${asin}`
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
  return { title: lines[0] || `Amazon deal · ${asin}`, description: lines.slice(1).join(' ') }
}

export function isTechDeal(title: string): boolean {
  return /\b(?:laptop|macbook|notebook|phone|smartphone|galaxy|iphone|ipad|tablet|headphone|earbud|earphone|speaker|soundbar|monitor|keyboard|mouse|gaming|geforce|rtx|gpu|ssd|nvme|router|wi-?fi|smart\s+(?:plug|watch|tv)|smartwatch|tapo|robot\s+vacuum|deebot|dreame|television|qled|oled|charger|power\s*bank|usb|webcam|microphone|projector|air\s+conditioner|inverter\s+ac)\b/i.test(title)
}
