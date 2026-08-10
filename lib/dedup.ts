/**
 * Deduplicates an array of items based on a key extracted from each item.
 * Preserves the first occurrence of each unique key.
 */
export function dedupeBy<T>(items: T[], keyFn: (item: T) => string): T[] {
  const seen = new Set<string>()
  const result: T[] = []

  for (const item of items) {
    const key = keyFn(item)
    if (key && !seen.has(key)) {
      seen.add(key)
      result.push(item)
    }
  }

  return result
}
