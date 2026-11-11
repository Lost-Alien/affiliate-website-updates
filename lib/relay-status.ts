export const RELAY_STATUS_KEY = 'techselect:relay-status'
export const RELAY_STATUS_TTL = 180

export function parseRelayStatus(value: unknown) {
  if (!value || typeof value !== 'object') return null
  const { telegram, whatsapp, pending, failed } = value as Record<string, unknown>
  if (typeof telegram !== 'boolean' || typeof whatsapp !== 'boolean' ||
      typeof pending !== 'number' || !Number.isSafeInteger(pending) || pending < 0 ||
      typeof failed !== 'number' || !Number.isSafeInteger(failed) || failed < 0) return null
  return { telegram, whatsapp, pending, failed }
}
