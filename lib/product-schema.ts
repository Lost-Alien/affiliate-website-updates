interface EditorialReview {
  ratingValue: number
  authorName: string
  authorType: 'Person' | 'Organization'
  url: string
}

/** Affiliate review pages describe our review, not an offer sold by TechSelect. */
export function createEditorialProductSchema(product: Record<string, unknown>, review: EditorialReview) {
  if (!Number.isFinite(review.ratingValue) || review.ratingValue < 1 || review.ratingValue > 10) {
    throw new Error('Editorial rating must match a visible score between 1 and 10')
  }
  const result = { ...product }
  // Never emit incomplete prices, stale stock/shipping claims, or a one-person aggregate.
  delete result.offers
  delete result.aggregateRating
  return {
    ...result,
    '@context': 'https://schema.org',
    '@type': 'Product',
    url: review.url,
    review: {
      '@type': 'Review',
      name: `${String(product.name)} review`,
      url: review.url,
      author: { '@type': review.authorType, name: review.authorName },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: 10,
        worstRating: 1,
      },
    },
  }
}
