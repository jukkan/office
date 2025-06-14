
import React, { useState } from "react";
import { Delete } from "lucide-react";

export interface TileEditFormProps {
  tile: {
    name: string;
    url: string;
    icon: string;
  };
  onSave: (name: string, url: string, icon: string) => void;
  onCancel: () => void;
  onDelete: () => void;
}

const TileEditForm: React.FC<TileEditFormProps> = ({
  tile,
  onSave,
  onCancel,
  onDelete,
}) => {
  const [name, setName] = useState(tile.name);
  const [url, setUrl] = useState(tile.url);
  const [icon, setIcon] = useState(tile.icon || "🆕");
  const [iconError, setIconError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!icon || icon.length === 0) {
      setIconError("Please provide an emoji.");
      return;
    }
    if (icon.length > 2) {
      setIconError("Please enter just one emoji.");
      return;
    }
    setIconError("");
    onSave(name, url, icon);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tile name"
        className="edit-input"
        autoFocus
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL"
        className="edit-input"
      />
      <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        placeholder="Emoji icon"
        className="edit-input"
        maxLength={2}
        style={{ width: "4rem" }}
        aria-label="Emoji icon"
      />
      {iconError && (
        <div style={{ color: "red", fontSize: "0.8rem" }}>{iconError}</div>
      )}
      <div className="edit-buttons">
        <button type="submit" className="edit-btn save-btn">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="edit-btn cancel-btn"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="edit-btn"
          style={{
            background: "#ef4444",
            color: "#fff",
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
          aria-label="Delete tile"
        >
          <Delete size={16} /> Delete
        </button>
      </div>
    </form>
  );
};

export default TileEditForm;
