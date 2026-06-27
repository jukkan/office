import { useEffect } from "react";
import { AppTile } from "../pages/tilesDefault";

export function useKeyboardShortcuts(
  tiles: AppTile[],
  onShowHelp: () => void
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) return;

      const key = e.key;
      if (key === "?") {
        e.preventDefault();
        onShowHelp();
        return;
      }

      const tile = tiles.find(
        (t) => t.shortcut && t.shortcut.toLowerCase() === key.toLowerCase()
      );
      if (tile && tile.url !== "#") {
        window.open(tile.url, "_blank", "noopener,noreferrer");
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [tiles, onShowHelp]);
}
