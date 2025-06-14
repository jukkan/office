
import React, { useEffect, useState } from "react";
import TileGrid from "../components/TileGrid";
import OfficeLauncherStyles from "./OfficeLauncherStyles";
import OfficeLauncherControls from "./OfficeLauncherControls";
import { defaultTiles, AppTile } from "./tilesDefault";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isEditMode, setIsEditMode] = useState(false);
  const [tiles, setTiles] = useState<AppTile[]>(defaultTiles);

  useEffect(() => {
    // Get theme from localStorage or fallback to system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    // Load tiles from localStorage
    const savedTiles = localStorage.getItem("tiles");
    if (savedTiles) {
      try {
        const parsedTiles = JSON.parse(savedTiles);
        setTiles(parsedTiles);
      } catch (error) {
        console.error("Error parsing saved tiles:", error);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const saveTiles = (newTiles: AppTile[]) => {
    setTiles(newTiles);
    localStorage.setItem("tiles", JSON.stringify(newTiles));
  };

  const addNewTile = () => {
    const newTile: AppTile = {
      name: "New Tile",
      icon: "🆕",
      url: "#",
      isEditing: true,
    };
    const newTiles = [...tiles, newTile];
    saveTiles(newTiles);
  };

  const updateTile = (index: number, updates: Partial<AppTile>) => {
    const newTiles = tiles.map((tile, i) =>
      i === index ? { ...tile, ...updates } : tile
    );
    saveTiles(newTiles);
  };

  const deleteTile = (index: number) => {
    const newTiles = tiles.filter((_, i) => i !== index);
    saveTiles(newTiles);
  };

  // Tile handlers for the grid
  const handleTileClick = (tile: AppTile, index: number) => {
    if (isEditMode) {
      updateTile(index, { isEditing: true });
    } else if (tile.url !== "#") {
      window.open(tile.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleTileSubmit = (
    index: number,
    name: string,
    url: string,
    icon: string
  ) => {
    updateTile(index, { name, url, icon: icon || "🆕", isEditing: false });
  };

  // Export/Import Handlers ---
  const handleExport = async () => {
    const json = JSON.stringify(tiles);
    await navigator.clipboard.writeText(json);
    alert("Tiles JSON copied to clipboard");
  };

  const handleImport = () => {
    const input = prompt("Paste tiles JSON to import:");
    if (!input) return;
    try {
      const parsed = JSON.parse(input);
      setTiles(parsed);
      localStorage.setItem("tiles", input);
      // forcibly reload, like the template
      window.location.reload();
    } catch {
      alert("Invalid JSON – import failed");
    }
  };

  return (
    <>
      <OfficeLauncherStyles />
      <OfficeLauncherControls
        theme={theme}
        isEditMode={isEditMode}
        onToggleTheme={toggleTheme}
        onToggleEditMode={toggleEditMode}
        onExport={handleExport}
        onImport={handleImport}
      />
      <div className="container">
        <header className="header">
          <h1>Office App Launcher</h1>
          <p>
            Quick access to your Microsoft Office applications, no Copilot detour needed.
          </p>
        </header>

        <TileGrid
          tiles={tiles}
          isEditMode={isEditMode}
          onTileClick={handleTileClick}
          onTileSave={handleTileSubmit}
          onTileCancel={(idx) => updateTile(idx, { isEditing: false })}
          onTileDelete={deleteTile}
          onAddTile={addNewTile}
        />

        <footer
          className="footer"
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
          }}
        >
          Not affiliated with Microsoft. See{" "}
          <a
            href="https://github.com/jukkan/office"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--accent)",
              textDecoration: "underline",
            }}
          >
            GitHub
          </a>{" "}
          for more info.
        </footer>
      </div>
    </>
  );
};

export default Index;
