# Product structured data

TechSelect publishes affiliate reviews; purchases take place at Amazon. Google restricts merchant-listing experiences to pages where a shopper can purchase the product, and excludes pages that merely link to other sellers:

https://developers.google.com/search/docs/appearance/structured-data/merchant-listing

The product pages now use editorial `Product` + `Review` markup. Product snippets require at least one of `review`, `aggregateRating`, or `offers`; a genuine editorial review does not require an offer:

https://developers.google.com/search/docs/appearance/structured-data/product-snippet

All 16 product pages use their existing visible TechSelect score and reviewer. Single-editor scores are no longer represented as aggregate customer ratings. The 11 incomplete offers and the remaining hardcoded price/stock offers have been removed. No price or review count was invented. Visible review content, product images, shopping links, and the live-price component are unchanged.

After deployment, run Google's Rich Results Test on representative product URLs, then use Validate Fix in the Search Console Product snippets report. Google must recrawl the pages before its old errors can clear. This change targets editorial product-snippet eligibility; it does not claim merchant-listing eligibility for affiliate landing pages.
