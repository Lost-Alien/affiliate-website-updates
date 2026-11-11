import { getRedisClient } from '@/lib/redis'
import { parseRelayStatus, RELAY_STATUS_KEY } from '@/lib/relay-status'

export const metadata = { title: 'Deal Relay Status' }
export const revalidate = 30

export default async function RelayStatusPage() {
  const redis = getRedisClient()
  const snapshot = await redis?.get<{ updatedAt?: number }>(RELAY_STATUS_KEY).catch(() => null)
  const status = parseRelayStatus(snapshot)
  const updatedAt = snapshot?.updatedAt

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Deal relay status</h1>
      {status && typeof updatedAt === 'number' ? (
        <>
          <p className="mt-3 text-muted-foreground" role="status">
            {status.telegram && status.whatsapp ? 'Both services connected' : 'Waiting for one or more connections'}
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {[
              ['Telegram', status.telegram ? 'Connected' : 'Disconnected'],
              ['WhatsApp', status.whatsapp ? 'Connected' : 'Disconnected'],
              ['Pending posts', status.pending],
              ['Failed posts', status.failed],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border p-4">
                <dt className="text-sm text-muted-foreground">{label}</dt>
                <dd className="mt-1 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">
            Last reported <time dateTime={new Date(updatedAt).toISOString()}>{new Date(updatedAt).toUTCString()}</time>
          </p>
        </>
      ) : (
        <p className="mt-3 text-muted-foreground" role="status">No recent status from the relay.</p>
      )}
    </main>
  )
}
