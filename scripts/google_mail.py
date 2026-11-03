"""Local TechSelect Gmail OAuth connection. Credentials and tokens stay ignored."""
import argparse
import hmac
import json
import os
import secrets
import time
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

from google.auth.transport.requests import AuthorizedSession, Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow

ROOT = Path(__file__).resolve().parent.parent
TOKEN = ROOT / '.google' / 'gmail-token.json'
REDIRECT = 'http://localhost:8091/callback'
ACCOUNT = 'support.techselect.blog@gmail.com'
SCOPES = ['https://www.googleapis.com/auth/gmail.modify',
          'https://www.googleapis.com/auth/gmail.settings.basic']


def save_token(credentials):
    TOKEN.parent.mkdir(exist_ok=True)
    temporary = TOKEN.with_suffix('.tmp')
    descriptor = os.open(temporary, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(descriptor, 'w', encoding='utf-8') as output:
        output.write(credentials.to_json())
    temporary.replace(TOKEN)


def profile(credentials):
    session = AuthorizedSession(credentials)
    result = session.get('https://gmail.googleapis.com/gmail/v1/users/me/profile', timeout=30)
    if not result.ok:
        raise RuntimeError(f'Gmail profile request returned HTTP {result.status_code}')
    data = result.json()
    if data.get('emailAddress', '').lower() != ACCOUNT:
        raise RuntimeError('The authorized mailbox is not the TechSelect account')
    return data


def connect(client_file):
    state = secrets.token_urlsafe(32)
    flow = Flow.from_client_secrets_file(str(client_file), scopes=SCOPES,
                                        state=state, autogenerate_code_verifier=True)
    flow.redirect_uri = REDIRECT
    url, _ = flow.authorization_url(access_type='offline', prompt='consent',
                                     login_hint=ACCOUNT, include_granted_scopes='true')
    connected = False

    class Callback(BaseHTTPRequestHandler):
        def log_message(self, *_):
            pass  # Callback URLs contain authorization codes; do not log them.

        def reply(self, status, message):
            self.send_response(status)
            self.send_header('Content-Type', 'text/plain; charset=utf-8')
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            self.wfile.write(message.encode('utf-8'))

        def do_GET(self):
            nonlocal connected
            callback = urlsplit(self.path)
            if callback.path != '/callback':
                self.reply(404, 'Not found.')
                return
            query = parse_qs(callback.query)
            if not hmac.compare_digest(query.get('state', [''])[0], state):
                self.reply(400, 'Invalid authorization state. Use the latest consent link.')
                return
            code = query.get('code', [''])[0]
            if not code:
                self.reply(400, 'Google authorization was not granted.')
                return
            try:
                flow.fetch_token(code=code, timeout=30)
                info = profile(flow.credentials)
                if not flow.credentials.refresh_token:
                    raise RuntimeError('Google did not return an offline refresh token')
                if not set(SCOPES).issubset(set(flow.credentials.granted_scopes or flow.credentials.scopes or [])):
                    raise RuntimeError('The required Gmail permissions were not all granted')
                save_token(flow.credentials)
                connected = True
                self.reply(200, 'TechSelect Gmail connected. Tokens saved locally. You can close this tab.')
                print(json.dumps({'connected': True, 'account': info['emailAddress'],
                                  'refresh_token_saved': True}), flush=True)
            except Exception as error:
                # Do not expose authorization responses, codes, or token values.
                self.reply(502, 'Connection failed. Check the local CLI status.')
                print(json.dumps({'connected': False, 'error_type': type(error).__name__,
                                  'message': str(error) if isinstance(error, RuntimeError) else 'OAuth exchange or profile verification failed.'}), flush=True)

    with HTTPServer(('127.0.0.1', 8091), Callback) as server:
        server.timeout = 1
        print('Registered redirect must be: ' + REDIRECT, flush=True)
        print('Open this Google consent URL:\n' + url, flush=True)
        deadline = time.monotonic() + 600
        while not connected and time.monotonic() < deadline:
            server.handle_request()
    if not connected:
        raise RuntimeError('Connection timed out; run connect again for a fresh link')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('command', choices=['connect', 'status', 'profile'])
    parser.add_argument('--client', type=Path)
    args = parser.parse_args()
    if args.command == 'connect':
        files = [p for p in ROOT.glob('client_secret*.json')
                 if json.loads(p.read_text()).get('web', {}).get('project_id') == 'techselect-search-console']
        client_file = args.client or (files[0] if len(files) == 1 else None)
        if not client_file:
            raise RuntimeError('Specify the Google OAuth client file with --client')
        connect(client_file)
    elif args.command == 'status':
        data = json.loads(TOKEN.read_text()) if TOKEN.exists() else {}
        print(json.dumps({'token_saved': TOKEN.exists(), 'refresh_token_saved': bool(data.get('refresh_token')),
                          'scopes': data.get('scopes', []), 'expected_account': ACCOUNT,
                          'redirect_uri': REDIRECT}))
    else:
        if not TOKEN.exists():
            raise RuntimeError('Run connect first')
        credentials = Credentials.from_authorized_user_file(str(TOKEN))
        if credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
            save_token(credentials)
        print(json.dumps(profile(credentials)))


if __name__ == '__main__':
    try:
        main()
    except RuntimeError as error:
        raise SystemExit(str(error)) from None
