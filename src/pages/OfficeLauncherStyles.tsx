
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
      fontSize: 0.875rem;
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
        margin-top: 90px; /* Extra for mobile */
      }
    }
  `}</style>
);

export default OfficeLauncherStyles;
