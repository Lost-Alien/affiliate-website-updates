# Pinterest connection

Connection verified on 1 November 2026 through MCP: `supporttechselectblog`, BUSINESS account, 15 Pins, one public board named `Tech Select` (ID `1084030641498381981`). The current limited access token is stored only in ignored `.pinterest/tokens.json`; it is not committed. Account and board reads succeeded. Write scopes and public publishing are not yet verified.

The local MCP server is `aymandakirgh/pinterest-mcp`, checked out at `vendors/pinterest-mcp` from commit `6cc45f23ceca9f03f6569a274e521aecf00050f6`. The vendor directory is ignored. Codex's global `pinterest` MCP entry launches `node scripts/pinterest.mjs mcp` using an absolute path, so the server can be discovered from any working directory.

App ID: `1633012`. Trial access was approved on 1 November 2026. The app ID, secret, and callback are saved in ignored `.env.local`. The limited token connection is verified. OAuth consent has been reported complete, but the local callback/token exchange has not yet been verified; write access is still unverified.

## Read-only token fallback

In Pinterest's developer dashboard choose **Production Limited**, generate the limited token, and save it in `.env.local`:

```dotenv
PINTEREST_ACCESS_TOKEN=your_generated_token
```

A limited token can test account/board/Pin reads; it cannot create Pins without write scopes. Keep credentials in the ignored local configuration. Test with:

```powershell
node scripts/pinterest.mjs status
node scripts/pinterest.mjs account
node scripts/pinterest.mjs boards
```

The MCP server has been installed and its 35 tools discovered, but discovery alone does not verify Pinterest account access. Reconnect/reload the MCP connection after changing credentials.

## After app approval

Register this exact redirect URI in Pinterest:

```text
http://localhost:8089/callback
```

Save `PINTEREST_APP_SECRET` in `.env.local` and run:

```powershell
node scripts/pinterest.mjs connect
```

Open the printed Pinterest consent URL and authorize the intended scopes. The helper listens only on loopback, checks OAuth state, exchanges the code directly with Pinterest, and saves tokens in ignored `.pinterest/tokens.json` without printing them. Requests use the official production API. The helper times out after ten minutes. The token file is read automatically on the next CLI/MCP launch. Token refresh is not automatic in the helper; expired tokens need reauthorization or the MCP refresh workflow.

Pinterest's current official access-tier documentation says Pins and Boards created with Trial access are visible only to their creator. Do not count a successful Trial API creation as public promotion. Standard access is needed for the documented unrestricted publishing behaviour.

The image feed prepared for Pinterest's separate RSS publishing feature is `/pinterest.xml`. It must be deployed before connecting it in Pinterest. Domain claiming and RSS setup are separate from this API connection.
