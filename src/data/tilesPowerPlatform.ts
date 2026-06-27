export const PP_STATIC_TILES = [
  { name: "Power Apps", icon: "⚡", url: "https://make.powerapps.com" },
  { name: "Power Automate", icon: "🔄", url: "https://make.powerautomate.com" },
  { name: "Power Pages", icon: "🌐", url: "https://make.powerpages.microsoft.com" },
  { name: "Copilot Studio", icon: "🤖", url: "https://copilotstudio.microsoft.com" },
  { name: "Power BI", icon: "📊", url: "https://app.powerbi.com" },
  { name: "PPAC", icon: "⚙️", url: "https://admin.powerplatform.microsoft.com" },
];

export interface PPEnvironment {
  id: string;
  name: string;
  url: string;
}

export const PP_ENV_SCOPED_LINKS = [
  { name: "Solutions", icon: "📦", urlTemplate: "https://make.powerapps.com/environments/{envId}/solutions" },
  { name: "Apps", icon: "🖼️", urlTemplate: "https://make.powerapps.com/environments/{envId}/apps" },
  { name: "Dataverse tables", icon: "🗄️", urlTemplate: "https://make.powerapps.com/environments/{envId}/entities" },
  { name: "Flows", icon: "🔄", urlTemplate: "https://make.powerautomate.com/environments/{envId}/flows" },
  { name: "Env settings", icon: "⚙️", urlTemplate: "https://admin.powerplatform.microsoft.com/manage/environments/environment/{envId}/hub" },
];
