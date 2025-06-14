
/**
 * Default list of Microsoft Office App Tiles.
 * Used initially for the app launcher grid.
 */
export interface AppTile {
  name: string;
  icon: string;
  url: string;
  isEditing?: boolean;
}

export const defaultTiles: AppTile[] = [
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
