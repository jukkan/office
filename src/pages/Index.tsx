
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Index = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Get theme from localStorage or fallback to system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const apps = [
    { name: 'Outlook', icon: '📧', url: 'https://outlook.office.com' },
    { name: 'Teams', icon: '👥', url: 'https://teams.microsoft.com' },
    { name: 'Word', icon: '📝', url: 'https://office.com/launch/word' },
    { name: 'Excel', icon: '🧮', url: 'https://office.com/launch/excel' },
    { name: 'PowerPoint', icon: '📈', url: 'https://office.com/launch/powerpoint' },
    { name: 'OneDrive', icon: '☁️', url: 'https://m365.cloud.microsoft/onedrive/' },
    { name: 'OneNote', icon: '📔', url: 'https://onenote.com' },
    { name: 'Power BI', icon: '📊', url: 'https://app.powerbi.com/' },
    { name: 'Power Apps', icon: '⚡', url: 'https://make.powerapps.com/' },
    { name: 'Power Automate', icon: '🔄', url: 'https://make.powerautomate.com/' },
    { name: 'To Do', icon: '✅', url: 'https://to-do.office.com/' },
    { name: 'Planner', icon: '⌛', url: 'https://planner.cloud.microsoft/' },
    { name: 'Loop', icon: '➰', url: 'https://loop.cloud.microsoft/' },
    { name: 'Forms', icon: '📋', url: 'https://forms.office.com/' },
    { name: 'Bookings', icon: '📅', url: 'https://outlook.office.com/bookings/' }
  ];

  return (
    <>
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

        @media (max-width: 768px) {
          .apps-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 1rem;
          }
          
          .container {
            padding: 1rem 0.5rem;
          }
        }
      `}</style>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>

      <div className="container">
        <header className="header">
          <h1>Office App Launcher</h1>
          <p>Quick access to your Microsoft Office applications, no Copilot detour needed.</p>
        </header>

        <div className="apps-grid">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              className="app-tile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="app-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <text x="12" y="16" textAnchor="middle" fontSize="14">
                    {app.icon}
                  </text>
                </svg>
              </div>
              <div className="app-name">{app.name}</div>
            </a>
          ))}
        </div>
<footer className="footer" style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
          Not affiliated with Microsoft. See <a href="https://github.com/jukkan/office" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>GitHub</a> for more info.
        </footer>
      </div>
    </>
  );
};

export default Index;
