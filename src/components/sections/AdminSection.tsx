import React, { useState } from "react";

const ADMIN_PORTALS = [
  { name: "M365 Admin", icon: "🏢", url: "https://admin.microsoft.com" },
  { name: "Entra ID", icon: "🔑", url: "https://entra.microsoft.com" },
  { name: "Exchange Admin", icon: "📬", url: "https://admin.exchange.microsoft.com" },
  { name: "Teams Admin", icon: "👥", url: "https://admin.teams.microsoft.com" },
  { name: "Intune", icon: "📱", url: "https://intune.microsoft.com" },
  { name: "Purview", icon: "🛡️", url: "https://purview.microsoft.com" },
  { name: "Security", icon: "🔒", url: "https://security.microsoft.com" },
  { name: "Azure Portal", icon: "☁️", url: "https://portal.azure.com" },
  { name: "Power Platform", icon: "⚙️", url: "https://admin.powerplatform.microsoft.com" },
];

const AdminSection: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    return localStorage.getItem("section_admin_collapsed") !== "false";
  });

  const toggle = () => {
    const next = !collapsed;
    setCollapsed(next);
    localStorage.setItem("section_admin_collapsed", String(next));
  };

  return (
    <div className="optional-section">
      <button className="section-header" onClick={toggle} aria-expanded={!collapsed}>
        <span className="section-header-icon">🛡️</span>
        <span className="section-header-label">Admin portals</span>
        <span className={`section-chevron${collapsed ? "" : " open"}`}>▾</span>
      </button>
      {!collapsed && (
        <div className="section-tiles-grid">
          {ADMIN_PORTALS.map((portal) => (
            <a
              key={portal.name}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="app-tile section-tile"
            >
              <div className="app-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <text x="12" y="16" textAnchor="middle" fontSize="14">
                    {portal.icon}
                  </text>
                </svg>
              </div>
              <div className="app-name">{portal.name}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSection;
