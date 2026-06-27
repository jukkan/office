# Tile action model — architecture note

## The problem

Every time a new per-tile feature is added, there are two places it could live:
1. A new button on the tile card surface (hover state, corner badge, etc.)
2. A context menu item

Option 1 doesn't scale — tiles already have a `+` quick-create button, and adding more surface controls makes the card noisy. Option 2 is the right direction, but only if the context menu is designed as an extensible system rather than a hardcoded list of `if` statements.

## The model: tile action registry

Each tile has an **actions array** derived at render time from its data and the current app state. The context menu renders whatever's in that array — no knowledge of individual features.

```ts
interface TileAction {
  id: string;
  label: string;
  icon?: string;
  handler: () => void;
  group?: 'primary' | 'edit' | 'graph';  // for visual grouping/dividers
}
```

A `useTileActions(tile, context)` hook assembles the list:

```ts
function useTileActions(tile: AppTile, ctx: TileActionContext): TileAction[] {
  const actions: TileAction[] = [];

  // Always available
  actions.push({ id: 'open', label: 'Open', group: 'primary', ... });
  actions.push({ id: 'copy-url', label: 'Copy URL', group: 'primary', ... });

  // Conditional on tile data
  if (tile.createUrl) {
    actions.push({ id: 'create-new', label: `New ${tile.name}`, group: 'primary', ... });
  }

  // Conditional on app state
  if (ctx.isEditMode) {
    actions.push({ id: 'edit', label: 'Edit tile', group: 'edit', ... });
    actions.push({ id: 'delete', label: 'Delete tile', group: 'edit', ... });
  }

  // Phase 2: Graph API — conditional on auth state
  if (ctx.isSignedIn && tile.graphResource) {
    actions.push({ id: 'recent-files', label: 'Recent files', group: 'graph', ... });
  }

  return actions;
}
```

`TileActionContext` carries shared state the actions need:
```ts
interface TileActionContext {
  isEditMode: boolean;
  isSignedIn: boolean;       // Phase 2
  onEdit: (tile) => void;
  onDelete: (tile) => void;
  onMove: (tile, section) => void;  // Phase 3
}
```

## Tile types and default action sets

Not all tiles are the same. Currently there are four kinds:

| Type | Where | Current interactivity |
|------|-------|----------------------|
| `main` | Main tile grid | Click to open, hover `+` for createUrl, edit form |
| `admin` | Admin portals section | `<a>` tag only |
| `pp-static` | PP section — static links | `<a>` tag only |
| `pp-env` | PP section — env-scoped links | `<a>` tag only |

For a consistent context menu, section tiles (`admin`, `pp-static`, `pp-env`) need to become interactive `div`s or `button`s too (with `onClick` for navigation, same as main tiles). This is a prerequisite.

A `type` field on the tile interface makes action assembly explicit:

```ts
type TileType = 'main' | 'admin' | 'pp-static' | 'pp-env';

interface AppTile {
  // ... existing fields
  type?: TileType;  // defaults to 'main' if absent
}
```

Admin and PP tiles would get a reduced action set (Open, Copy URL) — no edit/delete since they're static in v1.

## How this connects to the roadmap phases

### Phase 1.5 — context menu (immediate)
Actions: Open, Copy URL, New [app] (if createUrl), Edit/Delete (if edit mode).  
This establishes the infrastructure.

### Phase 2 — Graph API
The `recent-files` action appears on Office app tiles when signed in.  
The `join-meeting` action appears on the Teams tile when a meeting is imminent.  
These are just new entries in `useTileActions` — the menu renders them automatically.

### Phase 3 — personalization
`move-to-section` action lets users drag tiles between main grid and optional sections.  
`pin-to-top` action reorders without entering edit mode.  
Again: new entries, same menu.

## What stays outside the context menu

Some actions don't belong in a per-tile menu:
- Export/Import JSON — operates on all tiles, lives in the controls bar
- Theme toggle — global, controls bar
- Shortcut overlay — global, controls bar
- Add new tile — grid-level, the dashed "Add" card

## Key decisions before building 1.5

1. **Retire the `+` hover button or keep it?**  
   The context menu makes quick-create discoverable. The `+` button is faster for desktop power users who know it exists. A reasonable compromise: keep the `+` button but also include "New [app]" in the context menu for mobile/touch parity.

2. **Convert section tiles to interactive divs now or later?**  
   Doing it in 1.5 gives the whole page a consistent interaction model. Deferring means section tiles stay as `<a>` tags with no context menu. Recommend: convert in 1.5, it's low effort and removes the inconsistency.

3. **`useTileActions` hook vs. inline in the context menu component?**  
   The hook approach is the right call — it keeps the menu component dumb (just renders a list) and makes action logic testable and reusable. Worth the small upfront investment.
