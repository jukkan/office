import React, { useEffect } from "react";
import { AppTile } from "../pages/tilesDefault";

interface Props {
  tiles: AppTile[];
  onClose: () => void;
}

const KeyboardShortcutOverlay: React.FC<Props> = ({ tiles, onClose }) => {
  const shortcuts = tiles.filter((t) => t.shortcut);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="shortcut-overlay-backdrop" onClick={onClose}>
      <div
        className="shortcut-overlay-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shortcut-overlay-header">
          <span>Keyboard shortcuts</span>
          <button
            className="shortcut-overlay-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="shortcut-overlay-grid">
          {shortcuts.map((tile) => (
            <div key={tile.name} className="shortcut-row">
              <kbd className="shortcut-key">{tile.shortcut}</kbd>
              <span className="shortcut-icon">{tile.icon}</span>
              <span className="shortcut-name">{tile.name}</span>
            </div>
          ))}
          <div className="shortcut-row">
            <kbd className="shortcut-key">?</kbd>
            <span className="shortcut-icon">⌨️</span>
            <span className="shortcut-name">Show shortcuts</span>
          </div>
          <div className="shortcut-row">
            <kbd className="shortcut-key">Esc</kbd>
            <span className="shortcut-icon">✕</span>
            <span className="shortcut-name">Close overlay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutOverlay;
