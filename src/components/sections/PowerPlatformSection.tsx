import React, { useState } from "react";
import {
  PP_STATIC_TILES,
  PP_ENV_SCOPED_LINKS,
  PPEnvironment,
} from "../../data/tilesPowerPlatform";

const loadEnvs = (): PPEnvironment[] => {
  try {
    return JSON.parse(localStorage.getItem("pp_environments") || "[]");
  } catch {
    return [];
  }
};

const PowerPlatformSection: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    return localStorage.getItem("section_pp_collapsed") !== "false";
  });
  const [environments, setEnvironments] = useState<PPEnvironment[]>(loadEnvs);
  const [activeEnvId, setActiveEnvId] = useState<string>(
    () => localStorage.getItem("pp_active_environment") || ""
  );
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEnvName, setNewEnvName] = useState("");
  const [newEnvId, setNewEnvId] = useState("");
  const [newEnvUrl, setNewEnvUrl] = useState("");

  const toggle = () => {
    const next = !collapsed;
    setCollapsed(next);
    localStorage.setItem("section_pp_collapsed", String(next));
  };

  const selectEnv = (id: string) => {
    setActiveEnvId(id);
    localStorage.setItem("pp_active_environment", id);
  };

  const addEnv = () => {
    if (!newEnvName.trim() || !newEnvId.trim()) return;
    const env: PPEnvironment = {
      id: newEnvId.trim(),
      name: newEnvName.trim(),
      url: newEnvUrl.trim(),
    };
    const updated = [...environments, env];
    setEnvironments(updated);
    localStorage.setItem("pp_environments", JSON.stringify(updated));
    setActiveEnvId(env.id);
    localStorage.setItem("pp_active_environment", env.id);
    setNewEnvName("");
    setNewEnvId("");
    setNewEnvUrl("");
    setShowAddForm(false);
  };

  const resolveUrl = (template: string) =>
    template.replace("{envId}", activeEnvId);

  return (
    <div className="optional-section">
      <button className="section-header" onClick={toggle} aria-expanded={!collapsed}>
        <span className="section-header-icon">⚡</span>
        <span className="section-header-label">Power Platform</span>
        <span className={`section-chevron${collapsed ? "" : " open"}`}>▾</span>
      </button>
      {!collapsed && (
        <>
          <div className="section-tiles-grid">
            {PP_STATIC_TILES.map((tile) => (
              <a
                key={tile.name}
                href={tile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="app-tile section-tile"
              >
                <div className="app-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <text x="12" y="16" textAnchor="middle" fontSize="14">
                      {tile.icon}
                    </text>
                  </svg>
                </div>
                <div className="app-name">{tile.name}</div>
              </a>
            ))}
          </div>

          <div className="env-switcher">
            <label className="env-label" htmlFor="pp-env-select">
              Environment
            </label>
            <div className="env-controls">
              <select
                id="pp-env-select"
                className="env-select"
                value={activeEnvId}
                onChange={(e) => selectEnv(e.target.value)}
              >
                <option value="">— No environment selected —</option>
                {environments.map((env) => (
                  <option key={env.id} value={env.id}>
                    {env.name}
                  </option>
                ))}
              </select>
              <button
                className="env-add-btn"
                onClick={() => setShowAddForm((v) => !v)}
                aria-label="Add environment"
              >
                + Add
              </button>
            </div>

            {showAddForm && (
              <div className="env-add-form">
                <input
                  className="edit-input"
                  placeholder="Display name (e.g. Production)"
                  value={newEnvName}
                  onChange={(e) => setNewEnvName(e.target.value)}
                  autoFocus
                />
                <input
                  className="edit-input"
                  placeholder="Environment ID (GUID)"
                  value={newEnvId}
                  onChange={(e) => setNewEnvId(e.target.value)}
                />
                <input
                  className="edit-input"
                  placeholder="Org URL (e.g. https://org1234.crm.dynamics.com)"
                  value={newEnvUrl}
                  onChange={(e) => setNewEnvUrl(e.target.value)}
                />
                <p className="env-hint">
                  Find the Environment ID in{" "}
                  <a
                    href="https://admin.powerplatform.microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PPAC
                  </a>{" "}
                  → Environments → select environment → Settings.
                </p>
                <div className="edit-buttons">
                  <button className="edit-btn save-btn" onClick={addEnv}>
                    Save
                  </button>
                  <button
                    className="edit-btn cancel-btn"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {activeEnvId && (
            <div className="section-tiles-grid">
              {PP_ENV_SCOPED_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={resolveUrl(link.urlTemplate)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-tile section-tile"
                >
                  <div className="app-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <text x="12" y="16" textAnchor="middle" fontSize="14">
                        {link.icon}
                      </text>
                    </svg>
                  </div>
                  <div className="app-name">{link.name}</div>
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PowerPlatformSection;
