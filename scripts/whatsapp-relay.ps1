[CmdletBinding()]
param(
    [string]$RelayPath,
    [string]$EnvPath,
    [switch]$Start
)

$ErrorActionPreference = 'Stop'
$hub = Join-Path $PSScriptRoot '../../Dev_WA_Boot_hub'
if (-not $RelayPath) { $RelayPath = Join-Path $hub 'TelegramWhatsAppRelay' }
if (-not $EnvPath) { $EnvPath = Join-Path $hub 'env' }
$relay = (Resolve-Path -LiteralPath $RelayPath).ProviderPath
$settings = (Resolve-Path -LiteralPath $EnvPath).ProviderPath
$node = (Get-Command node -CommandType Application | Select-Object -First 1).Source

$check = @'
import { readConfig } from './src/config.js';

try {
  const [major, minor] = process.versions.node.split('.').map(Number);
  if (major < 22 || (major === 22 && minor < 13)) throw new Error('Use Node.js 22.13 or later');
  if (!process.env.WHATSAPP_TARGET_JID?.trim()) throw new Error('Set WHATSAPP_TARGET_JID');
  const config = readConfig();
  if (!config.apiId || !/^[a-f0-9]{32}$/i.test(config.apiHash)) {
    throw new Error('Set TELEGRAM_API_ID and TELEGRAM_API_HASH');
  }
  if (!config.sources.length) throw new Error('Set TELEGRAM_SOURCE_CHANNELS');
  console.log(`Relay config OK: ${config.sources.length} Telegram source(s), one WhatsApp channel, dashboard on http://${config.host}:${config.port}`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
'@

$previousHost = [Environment]::GetEnvironmentVariable('HOST', 'Process')
Push-Location -LiteralPath $relay
try {
    $env:HOST = '127.0.0.1'
    & $node "--env-file=$settings" --input-type=module -e $check
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

    if ($Start) {
        & $node "--env-file=$settings" --max-old-space-size=112 src/main.js
        exit $LASTEXITCODE
    }
} finally {
    if ($null -eq $previousHost) {
        Remove-Item Env:HOST -ErrorAction SilentlyContinue
    } else {
        $env:HOST = $previousHost
    }
    Pop-Location
}
