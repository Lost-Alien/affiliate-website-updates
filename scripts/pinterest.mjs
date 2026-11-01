import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import { parseEnv } from 'node:util'
import { spawn } from 'node:child_process'
import { createServer } from 'node:http'
import { randomBytes, timingSafeEqual } from 'node:crypto'
import { Buffer } from 'node:buffer'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const vendor = resolve(root, 'vendors/pinterest-mcp')
const tokenFile = resolve(root, '.pinterest/tokens.json')
const envFile = resolve(root, '.env.local')
const config = existsSync(envFile) ? parseEnv(readFileSync(envFile, 'utf8')) : {}
for (const [key, value] of Object.entries(config)) {
  if (key.startsWith('PINTEREST_') && !process.env[key]) process.env[key] = value
}
if (existsSync(tokenFile) && !process.env.PINTEREST_ACCESS_TOKEN) {
  process.env.PINTEREST_ACCESS_TOKEN = JSON.parse(readFileSync(tokenFile, 'utf8')).access_token
}

const command = process.argv[2] || 'status'
if (command === 'status') {
  console.log(JSON.stringify({ installed: existsSync(resolve(vendor, 'dist/index.js')), appConfigured: Boolean(process.env.PINTEREST_APP_ID && process.env.PINTEREST_APP_SECRET), tokenConfigured: Boolean(process.env.PINTEREST_ACCESS_TOKEN), redirectUri: process.env.PINTEREST_REDIRECT_URI || 'http://localhost:8089/callback' }, null, 2))
} else if (command === 'mcp') {
  if (!existsSync(resolve(vendor, 'dist/index.js'))) throw new Error('Install vendors/pinterest-mcp dependencies and run npm run build first.')
  const child = spawn(process.execPath, [resolve(vendor, 'dist/index.js')], { cwd: vendor, env: process.env, stdio: 'inherit', windowsHide: true })
  child.on('exit', (code) => process.exit(code ?? 1))
} else if (command === 'connect') {
  const appId = process.env.PINTEREST_APP_ID
  const appSecret = process.env.PINTEREST_APP_SECRET
  if (!appId || !appSecret) {
    console.error('Create a Pinterest developer app and save PINTEREST_APP_ID and PINTEREST_APP_SECRET in .env.local. Register http://localhost:8089/callback as its redirect URI.')
    process.exitCode = 2
  } else {
    const redirect = new URL(process.env.PINTEREST_REDIRECT_URI || 'http://localhost:8089/callback')
    if (redirect.protocol !== 'http:' || !['localhost', '127.0.0.1'].includes(redirect.hostname)) throw new Error('The local connection helper requires a loopback HTTP redirect URI.')
    const state = randomBytes(32).toString('hex')
    const url = new URL('https://www.pinterest.com/oauth/')
    url.search = new URLSearchParams({ client_id: appId, redirect_uri: redirect.href, response_type: 'code', scope: 'user_accounts:read,boards:read,boards:write,pins:read,pins:write', state }).toString()
    const server = createServer(async (request, response) => {
      const callback = new URL(request.url, redirect.origin)
      if (callback.pathname !== redirect.pathname) { response.writeHead(404).end(); return }
      const returned = Buffer.from(callback.searchParams.get('state') || '')
      const expected = Buffer.from(state)
      if (returned.length !== expected.length || !timingSafeEqual(returned, expected)) { response.writeHead(400).end('Invalid OAuth state.'); return }
      const code = callback.searchParams.get('code')
      if (!code) { response.writeHead(400).end('Authorization was not granted.'); return }
      try {
        const result = await fetch('https://api.pinterest.com/v5/oauth/token', { method: 'POST', headers: { Authorization: `Basic ${Buffer.from(`${appId}:${appSecret}`).toString('base64')}`, 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'authorization_code', code, redirect_uri: redirect.href }), signal: globalThis.AbortSignal.timeout(30000) })
        if (!result.ok) throw new Error(`Pinterest token exchange returned HTTP ${result.status}`)
        const tokens = await result.json()
        if (!tokens.access_token) throw new Error('Pinterest did not return an access token')
        mkdirSync(dirname(tokenFile), { recursive: true })
        writeFileSync(tokenFile, JSON.stringify({ ...tokens, obtained_at: new Date().toISOString() }), { mode: 0o600 })
        response.writeHead(200, { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' }).end('Pinterest connected. Tokens saved locally. You can close this tab.')
        console.log('Pinterest connected. Tokens saved in ignored .pinterest/tokens.json; no token printed.')
        clearTimeout(timeout)
        server.close()
      } catch (error) {
        response.writeHead(502).end('Connection failed. Check the terminal for the HTTP status.')
        console.error(error.message)
      }
    })
    const timeout = setTimeout(() => { console.error('Connection timed out. Run connect again.'); server.close() }, 600000)
    server.listen(Number(redirect.port) || 80, '127.0.0.1', () => console.log(`Open this Pinterest consent URL:\n${url.href}`))
  }
} else {
  const tools = { account: ['pinterest_get_user_account', {}], boards: ['pinterest_list_boards', {}], pins: ['pinterest_list_pins', {}], websites: ['pinterest_list_claimed_websites', {}] }
  if (command !== 'tools' && !tools[command]) throw new Error('Commands: status, connect, tools, account, boards, pins, websites, mcp')
  const { Client } = await import('../vendors/pinterest-mcp/node_modules/@modelcontextprotocol/sdk/dist/esm/client/index.js')
  const { StdioClientTransport } = await import('../vendors/pinterest-mcp/node_modules/@modelcontextprotocol/sdk/dist/esm/client/stdio.js')
  const client = new Client({ name: 'techselect-pinterest-cli', version: '1.0.0' })
  const transport = new StdioClientTransport({ command: process.execPath, args: [resolve(vendor, 'dist/index.js')], env: Object.fromEntries(Object.entries(process.env).filter(([, value]) => typeof value === 'string')), stderr: 'pipe' })
  try {
    await client.connect(transport)
    const result = command === 'tools' ? (await client.listTools()).tools.map((tool) => ({ name: tool.name, description: tool.description })) : await client.callTool({ name: tools[command][0], arguments: tools[command][1] })
    console.log(JSON.stringify(result, null, 2))
    if (result.isError) process.exitCode = 2
  } finally { await client.close() }
}
