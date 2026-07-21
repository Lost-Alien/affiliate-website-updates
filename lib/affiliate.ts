export const AMAZON_TAG = 'techstor0caaf-21'
export const AMAZON_DOMAIN = 'https://www.amazon.in'

/**
 * Generates an Amazon India affiliate URL for a product search term, ASIN, or default home store.
 * @param queryOrAsin Product name, search query, or 10-character ASIN
 */
export function getAmazonAffiliateUrl(queryOrAsin?: string): string {
  if (!queryOrAsin || queryOrAsin.trim() === '') {
    return `${AMAZON_DOMAIN}/?tag=${AMAZON_TAG}`
  }

  const cleanQuery = queryOrAsin.trim()

  // If query is a direct Amazon URL, ensure tag parameter is appended
  if (cleanQuery.startsWith('http://') || cleanQuery.startsWith('https://')) {
    const url = new URL(cleanQuery)
    url.searchParams.set('tag', AMAZON_TAG)
    return url.toString()
  }

  // If string matches 10-character ASIN pattern
  if (/^[A-Z0-9]{10}$/i.test(cleanQuery)) {
    return `${AMAZON_DOMAIN}/dp/${cleanQuery}?tag=${AMAZON_TAG}`
  }

  // Fallback to Amazon India product search with tag
  return `${AMAZON_DOMAIN}/s?k=${encodeURIComponent(cleanQuery)}&tag=${AMAZON_TAG}`
}
