# TechSelect Gmail connection

The local helper uses Google's OAuth library and the existing Web application client in the `techselect-search-console` project. Cloud project ownership does not authorize mailbox access.

1. Register `http://localhost:8091/callback` under Google Auth Platform → Clients → Authorized redirect URIs. No JavaScript origin is required for this helper.
2. If the OAuth app is in Testing, add `support.techselect.blog@gmail.com` under Audience → Test users.
3. Run `python scripts/google_mail.py connect` and approve the printed consent link using the TechSelect mailbox.
4. Run `python scripts/google_mail.py profile` to verify account access.

The requested scopes are `gmail.modify` (reading, drafts, sending, labels, and trash) and `gmail.settings.basic` (basic mail settings and filters). There is no Gmail root role. This connection does not grant account-password, recovery, or Workspace administrator access. No messages are sent or modified by connection/profile verification.

The helper validates OAuth state, uses PKCE and an offline refresh token, and verifies the mailbox identity before storing tokens. All OAuth client JSON files and `.google/` token files are ignored by Git. Tokens are refreshed when the profile command needs it. The helper is a local CLI and is not imported by the website or deployed as a web route.

Google may require reauthorization when testing-mode authorizations expire or permissions are changed. If the callback reports a redirect mismatch, check the exact registered URI in Google's client configuration; editing only the downloaded JSON does not update Google's registration.

References:
- https://developers.google.com/identity/protocols/oauth2/web-server
- https://developers.google.com/workspace/gmail/api/auth/scopes
