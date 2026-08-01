const commonParameters = {
  ClientId: process.env.AMAZON_PAAPI_ACCESS_KEY,
  ClientSecret: process.env.AMAZON_PAAPI_SECRET_KEY,
  PartnerTag: process.env.AMAZON_PAAPI_PARTNER_TAG,
  Marketplace: 'www.amazon.in'
}

export type AmazonItemDetails = {
  price?: string
  currency?: string
  isAvailable: boolean
  title?: string
  url?: string
}

let cachedAccessToken: string | null = null
let tokenExpiryTime: number = 0

async function getAccessToken(): Promise<string | null> {
  if (!commonParameters.ClientId || !commonParameters.ClientSecret) {
    return null
  }
  
  if (cachedAccessToken && Date.now() < tokenExpiryTime) {
    return cachedAccessToken
  }

  try {
    const response = await fetch('https://api.amazon.com/auth/o2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: commonParameters.ClientId,
        client_secret: commonParameters.ClientSecret,
        scope: 'creatorsapi::default'
      }),
      next: { revalidate: 3000 } // Cache token fetch for 50 minutes (expires in 60m)
    })

    if (!response.ok) {
      console.error('[Amazon Creator API] Failed to fetch access token:', await response.text())
      return null
    }

    const data = await response.json()
    cachedAccessToken = data.access_token
    // Set expiry 5 minutes before actual expiry to be safe
    tokenExpiryTime = Date.now() + (data.expires_in - 300) * 1000
    return cachedAccessToken
  } catch (error) {
    console.error('[Amazon Creator API] Token error:', error)
    return null
  }
}

export async function getAmazonItemDetails(asin: string): Promise<AmazonItemDetails | null> {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return null
  }

  const payload = {
    itemIds: [asin],
    itemIdType: 'ASIN',
    languagesOfPreference: ['en_IN'],
    marketplace: commonParameters.Marketplace,
    partnerTag: commonParameters.PartnerTag,
    resources: [
      'itemInfo.title',
      'offersV2.listings.price'
    ]
  }

  try {
    const response = await fetch('https://creatorsapi.amazon.in/catalog/v1/getItems', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'x-marketplace': commonParameters.Marketplace
      },
      body: JSON.stringify(payload),
      next: { revalidate: 43200 } // Cache for 12 hours
    })

    if (!response.ok) {
      console.error(`[Amazon Creator API] HTTP ${response.status}: ${await response.text()}`)
      return null
    }

    const data = await response.json()
    
    if (data.itemResults && data.itemResults.items && data.itemResults.items.length > 0) {
      const item = data.itemResults.items[0]
      const listings = item.offersV2?.listings || []
      
      let price = undefined
      let currency = undefined
      let isAvailable = false

      if (listings.length > 0) {
        const listing = listings[0]
        isAvailable = true
        price = listing.price?.money?.displayAmount
        currency = listing.price?.money?.currency
      }

      return {
        price,
        currency,
        isAvailable,
        title: item.itemInfo?.title?.displayValue,
        url: item.detailPageURL
      }
    }
  } catch (error) {
    console.error(`[Amazon Creator API] Failed to fetch data for ASIN ${asin}:`, error)
  }

  return null
}
