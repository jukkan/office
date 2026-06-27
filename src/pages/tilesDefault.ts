
/**
 * Default list of Microsoft Office App Tiles.
 * Used initially for the app launcher grid.
 */
export interface AppTile {
  name: string;
  icon: string;
  url: string;
  createUrl?: string;
  shortcut?: string;
  isEditing?: boolean;
}

export const defaultTiles: AppTile[] = [
  { name: 'Outlook', icon: '📧', url: 'https://outlook.office.com', shortcut: 'O' },
  { name: 'Teams', icon: '👥', url: 'https://teams.microsoft.com', createUrl: 'https://teams.microsoft.com/l/meeting/new', shortcut: 'T' },
  { name: 'Word', icon: '📝', url: 'https://office.com/launch/word', createUrl: 'https://word.new', shortcut: 'W' },
  { name: 'Excel', icon: '🧮', url: 'https://office.com/launch/excel', createUrl: 'https://excel.new', shortcut: 'E' },
  { name: 'PowerPoint', icon: '📈', url: 'https://office.com/launch/powerpoint', createUrl: 'https://powerpoint.new', shortcut: 'P' },
  { name: 'OneDrive', icon: '☁️', url: 'https://m365.cloud.microsoft/onedrive/', shortcut: 'D' },
  { name: 'OneNote', icon: '📔', url: 'https://onenote.com', createUrl: 'https://onenote.new', shortcut: 'N' },
  { name: 'Power BI', icon: '📊', url: 'https://app.powerbi.com/', shortcut: 'B' },
  { name: 'Power Apps', icon: '⚡', url: 'https://make.powerapps.com/', shortcut: 'A' },
  { name: 'Power Automate', icon: '🔄', url: 'https://make.powerautomate.com/', shortcut: 'F' },
  { name: 'To Do', icon: '✅', url: 'https://to-do.office.com/' },
  { name: 'Planner', icon: '⌛', url: 'https://planner.cloud.microsoft/' },
  { name: 'Loop', icon: '➰', url: 'https://loop.cloud.microsoft/' },
  { name: 'Forms', icon: '📋', url: 'https://forms.office.com/' },
  { name: 'Bookings', icon: '📅', url: 'https://outlook.office.com/bookings/' }
];
