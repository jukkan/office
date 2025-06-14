
import React from "react";
import { Moon, Sun, Edit3, FileDown, FileUp } from "lucide-react";
import { Button } from "../components/ui/button";

interface AppTile {
  name: string;
  icon: string;
  url: string;
  isEditing?: boolean;
}

interface OfficeLauncherControlsProps {
  theme: "light" | "dark";
  isEditMode: boolean;
  onToggleTheme: () => void;
  onToggleEditMode: () => void;
  onExport: () => void;
  onImport: () => void;
}

const OfficeLauncherControls: React.FC<OfficeLauncherControlsProps> = ({
  theme,
  isEditMode,
  onToggleTheme,
  onToggleEditMode,
  onExport,
  onImport,
}) => (
  <div className="fixed top-4 right-4 flex flex-col items-end w-max z-50 pointer-events-none">
    <div className="flex flex-row gap-3 w-full pointer-events-auto">
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label="Toggle theme"
        tabIndex={0}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
      <button
        className={`edit-toggle${isEditMode ? " active" : ""}`}
        onClick={onToggleEditMode}
        aria-label="Toggle edit mode"
        tabIndex={0}
      >
        <Edit3 />
      </button>
    </div>
    {isEditMode && (
      <div className="export-import-row pointer-events-auto">
        <Button
          id="exportBtn"
          onClick={onExport}
          variant="default"
          className="fluent-accent-btn flex items-center gap-2 px-4 py-2 h-10 shadow"
          aria-label="Export JSON"
        >
          <FileDown className="w-4 h-4" />
          <span className="hidden sm:inline">Export JSON</span>
        </Button>
        <Button
          id="importBtn"
          onClick={onImport}
          variant="default"
          className="fluent-accent-btn flex items-center gap-2 px-4 py-2 h-10 shadow"
          aria-label="Import JSON"
        >
          <FileUp className="w-4 h-4" />
          <span className="hidden sm:inline">Import JSON</span>
        </Button>
      </div>
    )}
  </div>
);

export default OfficeLauncherControls;
