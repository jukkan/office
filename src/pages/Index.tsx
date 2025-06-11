
const Index = () => {
  // Debug log to confirm React version is running
  console.log('Office App Launcher - React component rendered');

  return (
    <>
      {/* HTML Head equivalent styles */}
      <style>{`
        /* 
        Office App Launcher
        
        All URLs are ready to use for Microsoft 365 web applications.
        */
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          /* Light mode colors only */
          --primary-blue: #0078D4;
          --primary-blue-hover: #106EBE;
          --bg-primary: #FFFFFF;
          --bg-secondary: #F8F9FA;
          --text-primary: #323130;
          --text-secondary: #605E5C;
          --border-color: #EDEBE9;
          --shadow-light: 0 2px 4px rgba(0,0,0,0.1);
          --shadow-hover: 0 4px 12px rgba(0,0,0,0.15);
          --tile-bg: #FFFFFF;
        }

        body {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          background: var(--bg-secondary);
          color: var(--text-primary);
          line-height: 1.5;
          min-height: 100vh;
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
          font-weight: 300;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .apps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 640px) {
          .apps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .apps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .apps-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .app-tile {
          background: var(--tile-bg);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1.3rem 1.2rem;
          text-decoration: none;
          color: var(--text-primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-light);
          position: relative;
          overflow: hidden;
        }

        .app-tile:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
          border-color: var(--primary-blue);
        }

        .app-tile:focus {
          outline: 2px solid var(--primary-blue);
          outline-offset: 2px;
        }

        .app-icon {
          width: 30px;
          height: 30px;
          margin-bottom: 0.6rem;
          color: var(--primary-blue);
        }

        .app-name {
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .app-description {
          font-size: 0.58rem;
          color: var(--text-secondary);
          line-height: 0.96;
        }

        .footer {
          text-align: center;
          padding: 2rem 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 639px) {
          .header h1 {
            font-size: 2rem;
          }
          
          .container {
            padding: 1rem 0.5rem;
          }
          
          .app-tile {
            padding: 0.512rem 0.64rem;
          }
        }
      `}</style>

      <div className="min-h-screen" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          {/* Header */}
          <header className="header">
            <h1>Office App Launcher</h1>
            <p>Access your Microsoft 365 apps quickly and easily - no Copilot needed.</p>
          </header>

          {/* Apps Grid */}
          <main className="apps-grid">
            {/* Word */}
            <a 
              href="https://word.office.com/" 
              className="app-tile"
              aria-label="Open Microsoft Word"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <div className="app-name">Word</div>
              <div className="app-description">Create and edit documents</div>
            </a>

            {/* Excel */}
            <a 
              href="https://excel.office.com/" 
              className="app-tile"
              aria-label="Open Microsoft Excel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <path d="M8 13h2m-2 4h2m4-4h2m-2 4h2"/>
              </svg>
              <div className="app-name">Excel</div>
              <div className="app-description">Create and manage spreadsheets</div>
            </a>

            {/* PowerPoint */}
            <a 
              href="https://powerpoint.office.com/" 
              className="app-tile"
              aria-label="Open Microsoft PowerPoint"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="12" rx="1"/>
                <rect x="7" y="8" width="10" height="8" rx="1"/>
              </svg>
              <div className="app-name">PowerPoint</div>
              <div className="app-description">Create presentations</div>
            </a>

            {/* Outlook */}
            <a 
              href="https://outlook.office.com/mail/" 
              className="app-tile"
              aria-label="Open Microsoft Outlook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div className="app-name">Outlook</div>
              <div className="app-description">Email and calendar</div>
            </a>

            {/* OneNote */}
            <a 
              href="https://www.onenote.com/notebooks" 
              className="app-tile"
              aria-label="Open Microsoft OneNote"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <div className="app-name">OneNote</div>
              <div className="app-description">Digital note-taking</div>
            </a>

            {/* OneDrive */}
            <a 
              href="https://m365.cloud.microsoft/onedrive/" 
              className="app-tile"
              aria-label="Open Microsoft OneDrive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-6l-2-3h-4l-2 3H2"/>
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
              </svg>
              <div className="app-name">OneDrive</div>
              <div className="app-description">Cloud storage and file sharing</div>
            </a>

            {/* Teams */}
            <a 
              href="https://teams.microsoft.com/" 
              className="app-tile"
              aria-label="Open Microsoft Teams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <div className="app-name">Teams</div>
              <div className="app-description">Chat, meetings, and collaboration</div>
            </a>

            {/* Planner */}
            <a 
              href="https://tasks.office.com/" 
              className="app-tile"
              aria-label="Open Microsoft Planner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M8 14h.01"/>
                <path d="M12 14h.01"/>
                <path d="M16 14h.01"/>
                <path d="M8 18h.01"/>
                <path d="M12 18h.01"/>
                <path d="M16 18h.01"/>
              </svg>
              <div className="app-name">Planner</div>
              <div className="app-description">Task management and planning</div>
            </a>

            {/* Power BI */}
            <a 
              href="https://app.powerbi.com/" 
              className="app-tile"
              aria-label="Open Microsoft Power BI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"/>
                <rect x="7" y="10" width="3" height="8"/>
                <rect x="12" y="8" width="3" height="10"/>
                <rect x="17" y="6" width="3" height="12"/>
              </svg>
              <div className="app-name">Power BI</div>
              <div className="app-description">Business intelligence and analytics</div>
            </a>

            {/* Power Apps */}
            <a 
              href="https://make.powerapps.com/" 
              className="app-tile"
              aria-label="Open Microsoft Power Apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="M21 15.5c-1-1.5-3-2.5-5-2.5s-4 1-5 2.5"/>
              </svg>
              <div className="app-name">Power Apps</div>
              <div className="app-description">Build custom business apps</div>
            </a>

            {/* Power Automate */}
            <a 
              href="https://make.powerautomate.com/" 
              className="app-tile"
              aria-label="Open Microsoft Power Automate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4"/>
                <path d="M16 2v4"/>
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M3 10h18"/>
                <path d="M8 14h.01"/>
                <path d="M12 14h.01"/>
                <path d="M16 14h.01"/>
                <path d="M8 18h.01"/>
                <path d="M12 18h.01"/>
                <path d="M16 18h.01"/>
              </svg>
              <div className="app-name">Power Automate</div>
              <div className="app-description">Automate workflows and processes</div>
            </a>

            {/* To Do */}
            <a 
              href="https://to-do.office.com/" 
              className="app-tile"
              aria-label="Open Microsoft To Do"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              <div className="app-name">To Do</div>
              <div className="app-description">Task management and reminders</div>
            </a>

            {/* Loop */}
            <a 
              href="https://loop.cloud.microsoft/" 
              className="app-tile"
              aria-label="Open Microsoft Loop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
                <polyline points="7.5,19.79 7.5,14.6 3,12"/>
                <polyline points="21,12 16.5,14.6 16.5,19.79"/>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <div className="app-name">Loop</div>
              <div className="app-description">Collaborative workspaces</div>
            </a>

            {/* Forms */}
            <a 
              href="https://forms.office.com/" 
              className="app-tile"
              aria-label="Open Microsoft Forms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <div className="app-name">Forms</div>
              <div className="app-description">Create surveys and forms</div>
            </a>

            {/* Bookings */}
            <a 
              href="https://outlook.office.com/bookings/" 
              className="app-tile"
              aria-label="Open Microsoft Bookings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <div className="app-name">Bookings</div>
              <div className="app-description">Schedule and manage appointments</div>
            </a>
          </main>

          {/* Footer */}
          <footer className="footer">
            <p>Unofficial Office App Launcher. Not affiliated with Microsoft in any way.</p>
            <p>
              Go to GitHub for more info:{" "}
              <a
                href="https://github.com/jukkan/office"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary-blue)", textDecoration: "underline" }}
              >
                https://github.com/jukkan/office
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Index;
