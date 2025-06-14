
import React from "react";
import { Plus } from "lucide-react";
import TileEditForm from "./TileEditForm";

interface AppTile {
  name: string;
  icon: string;
  url: string;
  isEditing?: boolean;
}

interface TileGridProps {
  tiles: AppTile[];
  isEditMode: boolean;
  onTileClick: (tile: AppTile, idx: number) => void;
  onTileSave: (idx: number, name: string, url: string, icon: string) => void;
  onTileCancel: (idx: number) => void;
  onTileDelete: (idx: number) => void;
  onAddTile: () => void;
}

const TileGrid: React.FC<TileGridProps> = ({
  tiles,
  isEditMode,
  onTileClick,
  onTileSave,
  onTileCancel,
  onTileDelete,
  onAddTile,
}) => (
  <div className="apps-grid">
    {tiles.map((tile, index) => (
      <div key={index}>
        {tile.isEditing ? (
          <div className="app-tile">
            <TileEditForm
              tile={tile}
              onSave={(name, url, icon) =>
                onTileSave(index, name, url, icon)
              }
              onCancel={() => onTileCancel(index)}
              onDelete={() => onTileDelete(index)}
            />
          </div>
        ) : (
          <div
            className="app-tile"
            onClick={() => onTileClick(tile, index)}
          >
            <div className="app-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <text
                  x="12"
                  y="16"
                  textAnchor="middle"
                  fontSize="14"
                >
                  {tile.icon}
                </text>
              </svg>
            </div>
            <div className="app-name">{tile.name}</div>
          </div>
        )}
      </div>
    ))}
    {isEditMode && (
      <div className="app-tile add-tile" onClick={onAddTile}>
        <div className="app-icon">
          <Plus size={32} />
        </div>
        <div className="app-name">Add</div>
      </div>
    )}
  </div>
);

export default TileGrid;
