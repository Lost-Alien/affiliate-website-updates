import { getAmazonItemDetails } from '@/lib/amazon'
import { Tag } from 'lucide-react'

export async function LiveAmazonPrice({ asin, fallbackUrl: _fallbackUrl }: { asin?: string, fallbackUrl: string }) {
  if (!asin) {
    return <FallbackPrice />
  }

  // Next.js fetch cache configuration can be set inside getAmazonItemDetails 
  // or managed via route segment config. For Server Components calling external 
  // non-fetch async functions, we can rely on standard ISR (revalidate) at the page level.
  const details = await getAmazonItemDetails(asin)

  if (!details || !details.price) {
    return <FallbackPrice />
  }

  return (
    <div className="bg-muted/50 rounded-xl p-4 border border-border">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <Tag className="h-3 w-3" />
          Live Amazon.in Price
        </p>
        {details.isAvailable ? (
          <span className="text-[10px] uppercase font-bold tracking-wider text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
            In Stock
          </span>
        ) : (
          <span className="text-[10px] uppercase font-bold tracking-wider text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400 px-2 py-0.5 rounded-full">
            Out of Stock
          </span>
        )}
      </div>
      
      <p className="text-2xl font-bold text-foreground">{details.price}</p>
      
      <p className="text-[10px] text-muted-foreground mt-2">
        Price and availability are accurate as of the date/time indicated and are subject to change.
      </p>
    </div>
  )
}

function FallbackPrice() {
  return (
    <div className="bg-muted/50 rounded-xl p-4 border border-border">
      <p className="text-xs text-muted-foreground mb-1">Price & Availability on Amazon India</p>
      <p className="text-xl font-bold text-foreground">Check Latest Price</p>
      <p className="text-[10px] text-muted-foreground mt-2">
        Click below to view the current price on Amazon.
      </p>
    </div>
  )
}
