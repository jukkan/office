# offi.ceo Roadmap

**Goal**: Evolve from a waffle-menu replacement into the best possible Microsoft 365 home page — one that shows users what *they* care about, not what Microsoft wants to promote.

**Current version**: 1.3.0 — configurable app launcher with keyboard shortcuts, quick-create links, admin portals, and Power Platform environment switcher. No auth, localStorage only.

---

## The vision

A personal M365 dashboard that loads in seconds, shows your actual work context (recent files, next meeting, unread messages), and gets out of the way. No Copilot push. No upsells. No dark patterns. Built around the principle that the user decides what a homepage is for.

Technically: still a static app hosted on GitHub Pages. Microsoft Graph API runs entirely in the browser via MSAL.js — no server, no backend, no stored credentials. Tokens live in sessionStorage only.

---

## Phase 1 — Better launcher (no auth required) ✅ Done in v1.3.0

### 1.1 Quick-create deep links ✅
Replace pure launch URLs with action-oriented shortcuts where possible:
- New Word document → `https://word.new`
- New Excel sheet → `https://excel.new`
- New PowerPoint → `https://powerpoint.new`
- New Teams meeting → deep link to calendar compose
- Each tile gets an optional secondary "New" badge/button alongside the launch link

### 1.2 Keyboard navigation ✅
- Single-key shortcuts when no input is focused: `O` = Outlook, `T` = Teams, `W` = Word, `E` = Excel, `P` = PowerPoint, `D` = OneDrive, etc.
- `?` opens shortcut cheat-sheet overlay
- Makes the page genuinely faster than clicking the waffle

### 1.3 IT Admin portals section ✅
An optional second tile section for IT pros, hidden by default, toggled on from settings:
- Microsoft 365 Admin Center, Entra ID, Purview, Security & Compliance, Power Platform Admin Center (PPAC), Azure Portal, Intune, Exchange Admin, Teams Admin

### 1.4 Power Platform section ✅
A dedicated tile section for Power Platform makers and admins — one of the most underserved groups when it comes to navigation:
- Quick links to the main makers: Power Apps (`make.powerapps.com`), Power Automate (`make.powerautomate.com`), Power Pages (`make.powerpages.microsoft.com`), Copilot Studio (`copilotstudio.microsoft.com`)
- **Environment switcher**: users can save their named environments (display name + environment URL) in localStorage; selecting one updates all environment-scoped links to that environment's base URL
- Direct editor launch links per environment: canvas app editor, model-driven app list, Dataverse table editor, solution list
- This section is hidden by default, enabled via a toggle for users who identify as makers/admins

### 1.5 Tile context menu
Right-click (desktop) or long-press (mobile) on any tile opens a small context menu. This replaces the `+` hover button (which is not useful on touch and hard to discover on desktop) with a consistent interaction model across all tile types.

Menu items:
- **Open** — same as clicking the tile
- **Copy URL** — writes the tile's URL to clipboard with a brief "Copied!" toast
- **New [app]** — quick-create shortcut (only for tiles that have a `createUrl`)
- **Edit tile** — enters edit state (only when edit mode is active)

Built on a `useTileActions(tile, context)` hook so Phase 2 and Phase 3 can add per-tile actions (recent files, move to section, etc.) without touching the menu component. Architecture note: `docs/architecture-tile-actions.md`

Requested in [issue #5](https://github.com/jukkan/office/issues/5). Spec: `docs/phase1/1.5-tile-context-menu.md`

---

## Phase 2 — Graph API integration (the real homepage)
*This is the strategic moat. Everything from here requires Microsoft sign-in.*

**Technical approach**: MSAL.js (`@azure/msal-browser`) registered as a public client app in Azure AD. Scopes requested on demand (not upfront). All Graph calls run from the browser. No backend, no server, GitHub Pages hosting unchanged.

**Privacy stance**: Nothing leaves the browser. Tokens in sessionStorage, cleared on tab close. No analytics on personal data. This must be stated clearly on the page.

### 2.1 Sign-in and identity
- "Sign in with Microsoft" button — optional, launcher works without it
- On sign-in: show user's name, avatar, tenant name in header
- Graceful fallback: unsigned state = today's v1 launcher experience
- Token refresh handled silently; logout clears all local state

### 2.2 Recent files widget
- Graph: `GET /me/drive/recent` — show last 8–10 files with icon, name, modified time, direct open link
- Filter: Office file types only (Word, Excel, PowerPoint, OneNote) — ignore `.zip`, images, etc.
- One-click open in browser (online editors), optional "open in desktop app" link
- This is the single feature that makes people return daily

### 2.3 Next meeting widget
- Graph: `GET /me/calendarView` — show next 1–3 upcoming events
- Display: title, time, organizer, join link if Teams meeting
- "Join" button for active/imminent meetings — the most useful thing to have on a homepage
- Within 15 min of start: highlight the meeting card

### 2.4 Unread email count
- Graph: `GET /me/mailFolders/inbox` — show unread count only, no email content
- Clicking navigates to Outlook Web
- Intentionally minimal — this is a count, not an inbox preview. Keep the homepage fast and focused.

### 2.5 Pinned SharePoint / Teams sites
- Graph: `GET /me/followedSites` and `GET /me/joinedTeams`
- Show followed sites and Teams as a separate tile section
- User can pin/unpin from the list (stored in localStorage alongside custom tiles)

### 2.6 Power Platform: environment and app discovery (research required)
The goal is to reconstruct a useful "my apps" view for Power Platform — the one that disappeared from the M365 portal and never worked well anyway.

**What to investigate:**
- **Power Apps API** (`api.powerapps.com`) is separate from Microsoft Graph. It exposes environments, canvas apps, and model-driven apps but is undocumented/unofficial in places and has historically been the backend for `make.powerapps.com` itself
- **Graph `GET /me/appCatalogs`** and related endpoints — unlikely to surface Power Apps but worth confirming
- **`/providers/Microsoft.PowerApps/apps`** via Azure Resource Manager — may require `Azure Service Management` scope, which is heavy
- **What's realistically retrievable**: environments list (`GET /providers/Microsoft.PowerApps/environments`), canvas apps per environment, model-driven apps less clear
- **Scope implications**: Power Apps API uses `https://service.powerapps.com/.default` — a different resource from Graph, requiring a second token request; feasible with MSAL but needs to be declared upfront in the app registration

**Target outcome if feasible**: show the user's environments as cards, each expandable to list their apps with direct play/edit links — replacing the fragmented "my apps" experience across make.powerapps.com, the M365 waffle, and the old office.com apps list.

---

## Phase 3 — Personalization and sharing
*Making offi.ceo something people share with colleagues and set as their homepage.*

### 3.1 Dashboard layout control
- Drag-and-drop section ordering: widgets (recent files, calendar, email) vs. tile grid
- Collapsible widget sections
- Compact vs. comfortable tile density toggle
- All layout prefs in localStorage

### 3.2 Org-wide shareable configs (no server needed)
- Generate a URL-encoded config string: `offi.ceo/?config=<base64>` 
- IT admins can distribute a pre-configured launcher to their team via a single link
- On arrival, user is prompted to import the org config or keep their own
- No server required — config lives entirely in the URL

### 3.3 PWA refinement
- Current PWA install already works; add proper offline fallback screen
- Home screen icon, splash screen, standalone display mode
- Encourage "Add to home screen" / "Install app" for desktop and mobile
- Push notification opt-in for meeting reminders (Web Push API)

---

## Technical decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Auth library | `@azure/msal-browser` | Official, maintained, no server needed |
| Graph calls | Fetch via `@microsoft/microsoft-graph-client` | Clean typed interface |
| Token storage | SessionStorage (MSAL default) | Privacy — cleared on tab close |
| Hosting | GitHub Pages (unchanged) | Free, zero infra |
| Azure AD app reg | Single-tenant → multi-tenant | Start single, flip when stable |
| Scopes | Incremental — request per feature | Minimizes permission surface shown to user |

### Azure AD app registration (Phase 2 prerequisite)
- Register at portal.azure.com as a Single-page Application (SPA)
- Redirect URI: `https://offi.ceo` (and `http://localhost:5173` for dev)
- Scopes needed: `User.Read`, `Files.Read`, `Calendars.Read`, `Mail.Read` (read-only throughout)
- No client secret — public client only

---

## What this is not
- Not a Microsoft product or affiliated with Microsoft
- Not storing user data anywhere
- Not a Copilot competitor — Copilot can stay in Teams/M365 where users choose it
- Not trying to replace SharePoint intranets or Viva Connections — this is the personal layer

---

## Success metrics
- People install it as their browser homepage / new tab
- IT admins share org configs with their teams
- Newsletter subscribers discover it and connect the author to the tool
- Gets covered in Power Platform / M365 community media as the "anti-Copilot-homepage"

---

*Last updated: 2026-06-27*
*Maintained by: Jukka Niiranen — [perspectives.plus](https://perspectives.plus)*
