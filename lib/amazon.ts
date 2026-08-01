/**
 * Amazon Creators API client for TechSelect.
 * Ported from houtini-ai/amazon-creators-mcp (MIT) — adapted for Next.js server components.
 *
 * Region → token endpoint mapping (from official marketplaces.ts):
 *   3.1 = NA  → https://api.amazon.com/auth/o2/token
 *   3.2 = EU  → https://api.amazon.co.uk/auth/o2/token  ← www.amazon.in is EU
 *   3.3 = FE  → https://api.amazon.co.jp/auth/o2/token
 */

type Region = 'NA' | 'EU' | 'FE'

const TOKEN_ENDPOINTS: Record<Region, string> = {
  NA: 'https://api.amazon.com/auth/o2/token',
  EU: 'https://api.amazon.co.uk/auth/o2/token',
  FE: 'https://api.amazon.co.jp/auth/o2/token',
}

const VERSION_TO_REGION: Record<string, Region> = {
  '3.1': 'NA',
  '3.2': 'EU',
  '3.3': 'FE',
}

// Single global endpoint — Amazon owns the .amazon TLD (houtini-ai/amazon-creators-mcp)
const CREATORS_API_HOST = 'https://creatorsapi.amazon'

const REFRESH_WINDOW_MS = 60_000
const CREATORS_SCOPE = 'creatorsapi::default'

function getConfig() {
  return {
    clientId: process.env.AMAZON_CLIENT_ID,
    clientSecret: process.env.AMAZON_CLIENT_SECRET,
    partnerTag: process.env.AMAZON_PARTNER_TAG || 'techstor0caaf-21',
    credentialVersion: process.env.AMAZON_CREDENTIAL_VERSION || '3.2',
    marketplace: 'www.amazon.in',
    debug: process.env.DEBUG === '1',
  }
}

// ----------- Token cache (single-flight, process-scoped) -----------

interface CachedToken {
  accessToken: string
  expiresAtMs: number
}

let cached: CachedToken | null = null
let inflight: Promise<string> | null = null

async function fetchToken(tokenEndpoint: string): Promise<string> {
  const config = getConfig()
  const body = JSON.stringify({
    grant_type: 'client_credentials',
    client_id: config.clientId,
    client_secret: config.clientSecret,
    scope: CREATORS_SCOPE,
  })

  if (config.debug) {
    console.log(`[amazon-creators] POST ${tokenEndpoint}`)
  }

  const res = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })

  const text = await res.text()
  if (!res.ok) {
    throw new Error(`[amazon-creators] Token fetch failed: ${res.status} ${res.statusText} — ${text.slice(0, 500)}`)
  }

  const parsed = JSON.parse(text) as { access_token: string; expires_in: number }
  if (!parsed.access_token || typeof parsed.expires_in !== 'number') {
    throw new Error(`[amazon-creators] Token endpoint returned unexpected shape: ${text.slice(0, 300)}`)
  }

  cached = {
    accessToken: parsed.access_token,
    expiresAtMs: Date.now() + parsed.expires_in * 1000,
  }

  if (config.debug) {
    console.log(`[amazon-creators] Token cached, expires in ${parsed.expires_in}s`)
  }

  return parsed.access_token
}

async function getToken(): Promise<string | null> {
  const config = getConfig()
  if (!config.clientId || !config.clientSecret) return null

  const region = VERSION_TO_REGION[config.credentialVersion]
  if (!region) {
    console.error(`[amazon-creators] Unknown credential version: ${config.credentialVersion}`)
    return null
  }

  const tokenEndpoint = TOKEN_ENDPOINTS[region]
  const now = Date.now()

  if (cached && cached.expiresAtMs - REFRESH_WINDOW_MS > now) {
    return cached.accessToken
  }

  if (inflight) return inflight

  inflight = fetchToken(tokenEndpoint).finally(() => {
    inflight = null
  })

  try {
    return await inflight
  } catch (err) {
    console.error('[amazon-creators] Token error:', err)
    return null
  }
}

// ----------- Creators API HTTP call with retry logic -----------

async function callCreatorsApi<T = unknown>(
  operation: 'getItems' | 'searchItems',
  payload: unknown,
  did401Refresh = false,
  did5xxRetry = false,
): Promise<T | null> {
  const config = getConfig()
  const token = await getToken()
  if (!token) return null

  const url = `${CREATORS_API_HOST}/catalog/v1/${operation}`

  if (config.debug) {
    console.log(`[amazon-creators] POST ${url}`)
  }

  let res: Response
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'x-marketplace': config.marketplace,
      },
      body: JSON.stringify(payload),
      // Next.js ISR: cache for 12 hours
      next: { revalidate: 43200 },
    })
  } catch (netErr) {
    if (!did5xxRetry) {
      if (config.debug) console.log(`[amazon-creators] Network error, retrying once: ${String(netErr)}`)
      await new Promise((r) => setTimeout(r, 500))
      return callCreatorsApi<T>(operation, payload, did401Refresh, true)
    }
    console.error(`[amazon-creators] Network error calling ${operation}: ${String(netErr)}`)
    return null
  }

  if (res.status === 429) {
    const retryAfter = res.headers.get('retry-after')
    const waitMs = retryAfter ? Number.parseInt(retryAfter, 10) * 1000 : 1000
    if (config.debug) console.log(`[amazon-creators] 429 rate-limited, waiting ${waitMs}ms`)
    await new Promise((r) => setTimeout(r, waitMs))
    return callCreatorsApi<T>(operation, payload, did401Refresh, did5xxRetry)
  }

  if (res.status === 401 && !did401Refresh) {
    if (config.debug) console.log('[amazon-creators] 401, invalidating token and retrying')
    cached = null
    return callCreatorsApi<T>(operation, payload, true, did5xxRetry)
  }

  const text = await res.text()
  let body: unknown
  try {
    body = text === '' ? {} : JSON.parse(text)
  } catch {
    console.error(`[amazon-creators] Non-JSON response from ${operation}: ${text.slice(0, 300)}`)
    return null
  }

  if (res.status >= 500 && !did5xxRetry) {
    if (config.debug) console.log(`[amazon-creators] ${res.status}, retrying once after 500ms`)
    await new Promise((r) => setTimeout(r, 500))
    return callCreatorsApi<T>(operation, payload, did401Refresh, true)
  }

  if (!res.ok) {
    console.error(`[amazon-creators] HTTP ${res.status} from ${operation}:`, body)
    return null
  }

  return body as T
}

// ----------- Public API -----------

export type AmazonItemDetails = {
  price?: string
  currency?: string
  isAvailable: boolean
  title?: string
  url?: string
}

export async function getAmazonItemDetails(asin: string): Promise<AmazonItemDetails | null> {
  const config = getConfig()

  const payload = {
    itemIds: [asin],
    itemIdType: 'ASIN',
    languagesOfPreference: ['en_IN'],
    marketplace: config.marketplace,
    partnerTag: config.partnerTag,
    resources: ['itemInfo.title', 'offersV2.listings.price'],
  }

  const data = await callCreatorsApi<{
    itemResults?: { items?: Array<{
      asin: string
      detailPageURL?: string
      itemInfo?: { title?: { displayValue?: string } }
      offersV2?: { listings?: Array<{ price?: { money?: { displayAmount?: string; currency?: string } } }> }
    }> }
  }>('getItems', payload)

  if (!data?.itemResults?.items?.length) return null

  const item = data.itemResults.items[0]
  const listings = item.offersV2?.listings ?? []
  let price: string | undefined
  let currency: string | undefined
  let isAvailable = false

  if (listings.length > 0) {
    isAvailable = true
    price = listings[0].price?.money?.displayAmount
    currency = listings[0].price?.money?.currency
  }

  return {
    price,
    currency,
    isAvailable,
    title: item.itemInfo?.title?.displayValue,
    url: item.detailPageURL,
  }
}
