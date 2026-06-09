# Source architecture

## Directory map

```
src/
├── pages/                  # Route-level components only
│   ├── Index.tsx           # Main dashboard page
│   └── NotFound.tsx
│
├── components/
│   ├── ui/                 # shadcn primitives — do not edit directly
│   ├── tiles/              # Tile grid, tile card, tile edit form
│   ├── sections/           # Named collapsible sections: AdminSection, PowerPlatformSection
│   └── widgets/            # Graph API data widgets: RecentFiles, NextMeeting, EmailCount, SitesList
│
├── data/                   # Static data and config — no logic
│   ├── tilesDefault.ts     # Default M365 app tiles (moved from pages/)
│   ├── tilesAdmin.ts       # IT admin portal links
│   └── tilesPowerPlatform.ts  # Power Platform maker/admin links
│
├── auth/                   # MSAL authentication (Phase 2)
│   ├── msalConfig.ts       # PublicClientApplication config
│   ├── AuthProvider.tsx    # Context provider wrapping the app
│   └── useAuth.ts          # Hook: { account, signIn, signOut, getToken }
│
├── graph/                  # Microsoft Graph API calls (Phase 2)
│   ├── graphClient.ts      # Authenticated fetch wrapper
│   ├── useRecentFiles.ts   # Hook: recent OneDrive/SPO files
│   ├── useNextMeeting.ts   # Hook: upcoming calendar events
│   ├── useEmailCount.ts    # Hook: unread inbox count
│   └── useFollowedSites.ts # Hook: followed SharePoint sites + joined Teams
│
├── powerplatform/          # Power Platform API calls (Phase 2, pending research)
│   ├── ppClient.ts         # Authenticated fetch wrapper (service.powerapps.com)
│   ├── useEnvironments.ts  # Hook: list of PP environments
│   └── useApps.ts          # Hook: canvas + model-driven apps per environment
│
├── hooks/                  # General-purpose hooks
│   ├── use-mobile.tsx      # Existing
│   ├── use-toast.ts        # Existing
│   └── useLocalStorage.ts  # Typed localStorage get/set with JSON parse
│
└── lib/
    └── utils.ts            # Existing shadcn utility
```

## Key conventions

- **Graph hooks** return `{ data, isLoading, error }` — same shape as TanStack Query (use it underneath)
- **Sections** are self-contained: own their toggle state, read from localStorage for enabled/collapsed
- **Widgets** gracefully degrade: if not signed in, they render nothing or a "sign in to see X" prompt
- **data/** files are pure config — arrays and constants only, no React, no imports from other src folders
- **auth/** is the only place that touches MSAL — nothing else imports from `@azure/msal-browser` directly

## Current code that needs moving (when touching those files)

| File now | Should be |
|----------|-----------|
| `src/pages/OfficeLauncherControls.tsx` | `src/components/OfficeLauncherControls.tsx` |
| `src/pages/OfficeLauncherStyles.tsx` | `src/components/OfficeLauncherStyles.tsx` |
| `src/pages/tilesDefault.ts` | `src/data/tilesDefault.ts` |
