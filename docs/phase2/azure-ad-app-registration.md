# Azure AD app registration

Prerequisite for all Phase 2 features. Must be done manually in the Azure portal before writing any auth code.

## Steps

1. Go to [portal.azure.com](https://portal.azure.com) → Entra ID → App registrations → New registration
2. Name: `offi.ceo`
3. Supported account types: **Accounts in any organizational directory and personal Microsoft accounts** (multi-tenant + MSA) — this covers both work/school and personal accounts
4. Redirect URI: **Single-page application (SPA)** → `https://offi.ceo`
5. After creation, add second redirect URI for local dev: `http://localhost:5173`
6. Note the **Application (client) ID** — this goes in `src/auth/msalConfig.ts`
7. No client secret needed — public client SPA

## API permissions to add

All delegated (user-context), all read-only:

| Permission | Scope | Used by |
|-----------|-------|---------|
| `User.Read` | Microsoft Graph | Sign-in, display name, avatar |
| `Files.Read` | Microsoft Graph | Recent files widget |
| `Calendars.Read` | Microsoft Graph | Next meeting widget |
| `Mail.Read` | Microsoft Graph | Unread count widget |
| `Sites.Read.All` | Microsoft Graph | Followed SharePoint sites |
| `https://service.powerapps.com/user_impersonation` | Power Apps API | PP environment/app discovery (Phase 2.6, if feasible) |

**Do not request all scopes upfront.** MSAL supports incremental consent — request `User.Read` at sign-in, add others only when the user activates the relevant widget.

## Notes
- The app registration is multi-tenant, but there is no admin consent requirement for delegated read-only scopes — individual users can consent
- Power Apps API scope (`service.powerapps.com`) may trigger an admin consent prompt in some tenants — document this clearly on the sign-in screen
- Keep the client ID in a `.env` file locally (`VITE_MSAL_CLIENT_ID`); for GitHub Pages deployment use a GitHub Actions secret or just commit it (client IDs for public SPAs are not secrets)
