
import React from "react";

/**
 * Separated style tag for Office App Launcher.
 * Use as <OfficeLauncherStyles /> at the root of the page.
 */
const OfficeLauncherStyles = () => (
  <style>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      /* Light theme */
      --accent: #0078D4;
      --accent-hover: #106EBE;
      --card-bg: #FFFFFF;
      --text: #323130;
      --text-secondary: #605E5C;
      --shadow: 0px 8px 16px rgba(0, 0, 0, 0.14);
      --shadow-hover: 0 4px 12px rgba(0,0,0,0.15);
      --bg-primary: #FFFFFF;
      --bg-secondary: #F8F8F8;
    }

    [data-theme="dark"] {
      /* Dark theme */
      --accent: #479EF5;
      --accent-hover: #6BB6FF;
      --card-bg: #252526;
      --text: #FFFFFF;
      --text-secondary: #CCCCCC;
      --shadow: 0px 8px 16px rgba(0, 0, 0, 0.64);
      --shadow-hover: 0 4px 12px rgba(0,0,0,0.4);
      --bg-primary: #1E1E1E;
      --bg-secondary: #2D2D30;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
      min-height: 100vh;
      color: var(--text);
    }
    .theme-toggle {
      position: fixed;
      top: 1rem;
      right: 1rem;
      background: var(--card-bg);
      border: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: var(--shadow);
      transition: all 0.2s ease;
      z-index: 1000;
    }
    .theme-toggle:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-hover);
    }
    .theme-toggle svg {
      width: 20px;
      height: 20px;
      color: var(--accent);
    }
    .edit-toggle {
      position: fixed;
      top: 1rem;
      right: 5rem;
      background: var(--card-bg);
      border: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: var(--shadow);
      transition: all 0.2s ease;
      z-index: 1000;
    }
    .edit-toggle:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-hover);
    }
    .edit-toggle.active {
      background: var(--accent);
    }
    .edit-toggle svg {
      width: 20px;
      height: 20px;
      color: var(--accent);
    }
    .edit-toggle.active svg {
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    .header {
      text-align: center;
      margin-bottom: 3rem;
    }
    .header h1 {
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 0.5rem;
    }
    .header p {
      font-size: 1.125rem;
      color: var(--text-secondary);
    }
    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1.5rem;
      max-width: 800px;
      margin: 0 auto;
    }
    .app-tile {
      background: var(--card-bg);
      border-radius: 8px;
      padding: clamp(1rem, 2vw, 1.5rem);
      text-decoration: none;
      color: var(--text);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition: all 0.2s ease;
      box-shadow: var(--shadow);
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    .app-tile:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-hover);
    }
    .app-tile:focus {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
    .app-icon {
      width: 32px;
      height: 32px;
      margin-bottom: 0.6rem;
      color: var(--accent);
    }
    .app-name {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    .app-tile::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    .app-tile:hover::before {
      left: 100%;
    }
    .add-tile {
      border: 2px dashed var(--accent);
      background: transparent;
    }
    .add-tile:hover {
      background: var(--card-bg);
    }
    .footer {
      margin-top: 3rem;
    }
    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
    .download-apps-button {
      display: flex;
      justify-content: center;
    }
    .download-apps-btn {
      background: var(--card-bg);
      color: var(--text);
      border: 1px solid var(--accent);
      box-shadow: var(--shadow);
      transition: all 0.2s ease;
    }
    .download-apps-btn:hover {
      background: var(--accent);
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-hover);
    }
    .footer-text {
      text-align: center;
      font-size: 0.875rem;
      color: var(--text-secondary);
    }
    .edit-form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
    }
    .edit-input {
      padding: 0.5rem;
      border: 1px solid var(--accent);
      border-radius: 4px;
      background: var(--card-bg);
      color: var(--text);
      font-size: 0.875rem;
    }
    .edit-buttons {
      display: flex;
      gap: 0.5rem;
    }
    .edit-btn {
      padding: 0.25rem 0.5rem;
      border: none;
      border-radius: 4px;
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .save-btn {
      background: var(--accent);
      color: white;
    }
    .cancel-btn {
      background: var(--text-secondary);
      color: white;
    }
    .edit-btn:hover {
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      .apps-grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1rem;
      }
      .container {
        padding: 1rem 0.5rem;
        padding-top: 6.5rem;
      }
    }
    @media (min-width: 769px) {
      .container {
        padding-top: 2rem;
      }
    }

    /* Narrow panel layout — Vivaldi web panels and similar sidebars */
    @media (max-width: 480px) {
      .header {
        margin-bottom: 1.25rem;
      }
      .header h1 {
        font-size: 1.5rem;
      }
      .header p {
        font-size: 0.875rem;
      }
      .container {
        padding: 0.75rem 0.5rem;
        padding-top: 5.5rem;
      }
      .apps-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 0.75rem;
      }
      .app-tile {
        padding: 0.875rem 0.5rem;
      }
      .optional-section {
        margin-top: 1.25rem;
      }
      .section-tiles-grid {
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
        gap: 0.75rem;
        padding: 0.75rem 0;
      }
      .footer {
        margin-top: 1.5rem;
      }
      .shortcut-overlay-card {
        min-width: 0;
        width: 95vw;
        padding: 1rem;
      }
      .shortcut-overlay-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Very narrow — panels narrower than ~320px */
    @media (max-width: 320px) {
      .header h1 {
        font-size: 1.2rem;
      }
      .apps-grid {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      }
      .section-tiles-grid {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      }
    }

    /* Always show quick-create button on touch/no-hover devices (web panels) */
    @media (hover: none) {
      .create-btn {
        opacity: 0.85;
      }
    }

    /* Export/Import buttons Fluent accent style */
    .fluent-accent-btn {
      background: var(--accent);
      color: #fff;
      border: none;
      border-radius: 50px;
      box-shadow: var(--shadow);
      transition: background 0.15s, box-shadow 0.15s;
      font-weight: 500;
    }
    .fluent-accent-btn:hover, .fluent-accent-btn:focus {
      background: var(--accent-hover);
      box-shadow: var(--shadow-hover);
    }
    .export-import-row {
      width: 100%;
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
      margin-top: 84px; /* Large enough to ensure always below toggles */
    }
    @media (max-width: 500px) {
      .export-import-row {
        flex-direction: column;
        align-items: stretch;
        gap: 0.4rem;
        margin-top: 90px;
      }
    }

    /* Quick-create button */
    .create-btn {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--accent);
      color: #fff;
      border: none;
      font-size: 16px;
      line-height: 1;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.15s;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }
    .app-tile:hover .create-btn { opacity: 1; }

    /* Keyboard shortcut overlay */
    .shortcut-overlay-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
    }
    .shortcut-overlay-card {
      background: var(--card-bg);
      border-radius: 12px;
      box-shadow: var(--shadow);
      padding: 1.5rem;
      min-width: 320px;
      max-width: 520px;
      width: 90vw;
    }
    .shortcut-overlay-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 1.25rem;
    }
    .shortcut-overlay-close {
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      color: var(--text-secondary);
      line-height: 1;
      padding: 0.25rem;
    }
    .shortcut-overlay-close:hover { color: var(--text); }
    .shortcut-overlay-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.625rem 1.5rem;
    }
    .shortcut-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      color: var(--text);
    }
    kbd.shortcut-key {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 28px;
      height: 28px;
      padding: 0 6px;
      border: 1.5px solid var(--text-secondary);
      border-radius: 5px;
      font-size: 0.8rem;
      font-weight: 700;
      background: var(--bg-secondary);
      color: var(--text);
      font-family: monospace;
    }
    .shortcut-icon { font-size: 1rem; }
    .shortcut-name { color: var(--text-secondary); }

    /* Collapsible optional sections */
    .optional-section {
      max-width: 800px;
      margin: 2rem auto 0;
    }
    .section-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.625rem 0.75rem;
      border-radius: 8px;
      color: var(--text-secondary);
      font-size: 0.95rem;
      font-weight: 600;
      transition: background 0.15s, color 0.15s;
      text-align: left;
    }
    .section-header:hover {
      background: var(--card-bg);
      color: var(--text);
    }
    .section-header-icon { font-size: 1rem; }
    .section-header-label { flex: 1; }
    .section-chevron {
      font-size: 1.1rem;
      transition: transform 0.2s;
      display: inline-block;
    }
    .section-chevron.open { transform: rotate(180deg); }
    .section-tiles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      padding: 1rem 0;
    }
    .section-tile {
      text-decoration: none;
      font-size: 0.875rem;
      padding: 0.875rem 0.75rem;
    }
    .section-tile .app-name { font-size: 0.875rem; }

    /* Environment switcher */
    .env-switcher {
      padding: 0.75rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .env-label {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .env-controls {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .env-select {
      flex: 1;
      padding: 0.4rem 0.6rem;
      border: 1px solid var(--accent);
      border-radius: 6px;
      background: var(--card-bg);
      color: var(--text);
      font-size: 0.875rem;
    }
    .env-add-btn {
      padding: 0.4rem 0.75rem;
      background: var(--accent);
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.15s;
    }
    .env-add-btn:hover { background: var(--accent-hover); }
    .env-add-form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.75rem;
      background: var(--card-bg);
      border-radius: 8px;
      box-shadow: var(--shadow);
    }
    .env-hint {
      font-size: 0.78rem;
      color: var(--text-secondary);
    }
    .env-hint a { color: var(--accent); }
  `}</style>
);

export default OfficeLauncherStyles;
