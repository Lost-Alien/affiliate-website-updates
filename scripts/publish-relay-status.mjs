import { setTimeout } from 'node:timers/promises'

const secret = process.env.WEBSITE_WEBHOOK_SECRET
if (!secret) throw new Error('Set WEBSITE_WEBHOOK_SECRET or use --env-file=.env.local')

async function publish() {
  const local = await fetch('http://127.0.0.1:3100/api/status', { signal: AbortSignal.timeout(5000) })
  if (!local.ok) throw new Error(`Local dashboard returned ${local.status}`)
  const status = await local.json()
  const result = await fetch('https://techselect.blog/api/relay-status', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${secret}` },
    redirect: 'error',
    signal: AbortSignal.timeout(10000),
    body: JSON.stringify({
      telegram: status.telegram.status === 'connected',
      whatsapp: status.whatsapp.status === 'connected',
      pending: status.queue.pending,
      failed: status.queue.failed,
    }),
  })
  if (!result.ok) throw new Error(`Public status receiver returned ${result.status}`)
}

if (process.argv.includes('--once')) {
  await publish()
  console.log('Published relay status')
} else {
  for (;;) {
    try {
      await publish()
    } catch (error) {
      console.warn(error.message)
    }
    await setTimeout(60000)
  }
}
