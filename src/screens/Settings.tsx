// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useRef, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

interface SettingsProps {}

interface NavItem {
  label: string;
  icon: string;
  screen: import("../types/domain").AppScreen;
  active?: boolean;
}

function NavLink({
  item,
  onNavigate,
  mobile = false,
}: {
  item: NavItem;
  onNavigate: (screen: import("../types/domain").AppScreen) => void;
  mobile?: boolean;
}) {
  const baseClasses = mobile
    ? "flex items-center gap-md px-sm py-sm rounded-lg cursor-pointer"
    : "flex items-center gap-md px-sm py-sm rounded-lg cursor-pointer transition-all scale-95 active:scale-100 duration-150";
  const activeClasses = mobile
    ? "bg-secondary-container text-on-secondary-container font-bold"
    : "bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container font-bold";
  const inactiveClasses = mobile
    ? "text-on-surface-variant hover:bg-surface-container-highest"
    : "text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest";

  return (
    <button
      onClick={() => onNavigate(item.screen)}
      className={`${baseClasses} ${item.active ? activeClasses : inactiveClasses}`}
      aria-label={item.label}
    >
      <span
        className="material-symbols-outlined"
        style={item.active ? { fontVariationSettings: "'FILL' 1" } : undefined}
      >
        {item.icon}
      </span>
      <span className="font-label-md text-label-md">{item.label}</span>
    </button>
  );
}

export function Settings(props: SettingsProps) {
  const { state, actions } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState("https://api.fieldcontrol.corp/v3/prod");
  const [syncIntervalMinutes, setSyncIntervalMinutes] = useState<number | "manual">(15);
  const [connectionTested, setConnectionTested] = useState<string | null>(null);
  const connectionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (connectionTimeoutRef.current) {
        clearTimeout(connectionTimeoutRef.current);
      }
    };
  }, []);

  const profile = state.profile;
  const settings = state.settings;

  const handleToggle = (key: "notificationsEnabled" | "autoRefresh") => {
    actions.updateSettings({ [key]: !settings[key] });
  };

  const handleSyncIntervalChange = (value: string) => {
    if (value === "manual") {
      setSyncIntervalMinutes("manual");
      actions.updateSettings({ autoRefresh: false, refreshIntervalSeconds: 0 });
    } else {
      const minutes = parseInt(value, 10);
      setSyncIntervalMinutes(minutes);
      actions.updateSettings({ autoRefresh: true, refreshIntervalSeconds: minutes * 60 });
    }
  };

  const handleTestConnection = () => {
    setConnectionTested("Connection established successfully.");
    if (connectionTimeoutRef.current) {
      clearTimeout(connectionTimeoutRef.current);
    }
    connectionTimeoutRef.current = setTimeout(() => setConnectionTested(null), 3000);
  };

  const navItems: NavItem[] = [
    { label: "Dashboard", icon: "dashboard", screen: "dashboard" },
    { label: "Service Records", icon: "assignment", screen: "dashboard" },
    { label: "Insights", icon: "analytics", screen: "insights" },
    { label: "Settings", icon: "settings", screen: "settings", active: true },
    { label: "Profile", icon: "person", screen: "profile" },
  ];

  return (
    <>
      {/* SideNavBar (Web Only) */}
      <nav className="hidden md:flex flex-col h-full py-lg px-md space-y-sm bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant dark:border-outline-variant w-64 flex-shrink-0 z-10">
        <div className="flex items-center gap-sm mb-xl px-xs">
          <span className="material-symbols-outlined text-primary text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>
            local_shipping
          </span>
          <div>
            <h1 className="text-headline-sm font-headline-sm font-semibold text-primary dark:text-primary leading-tight">Field Control</h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Ops Command</p>
          </div>
        </div>
        <button
          onClick={() => actions.navigate("create")}
          className="bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg flex items-center justify-center gap-xs mb-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Record
        </button>
        <div className="flex-1 space-y-xs">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} onNavigate={actions.navigate} />
          ))}
        </div>
        <div className="mt-auto">
          <button
            onClick={() => {}}
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 cursor-pointer w-full text-left"
            aria-label="Support"
          >
            <span className="material-symbols-outlined">contact_support</span>
            <span className="font-label-md text-label-md">Support</span>
          </button>
        </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-background relative overflow-hidden">
        {/* TopAppBar */}
        <header className="sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant">
          <div className="flex items-center gap-md">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-on-surface hover:bg-surface-container-high transition-colors p-sm rounded-full"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-on-surface md:hidden">ServiceControl</span>
          </div>
          <div className="flex-1 max-w-md mx-md hidden md:block">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full bg-surface-container-high border-outline-variant text-on-surface placeholder-on-surface-variant rounded-full py-sm pl-xl pr-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                placeholder="Search settings..."
                type="text"
                value={state.searchQuery}
                onChange={(e) => actions.setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-sm">
            <button
              onClick={() => actions.navigate("dashboard")}
              className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-sm rounded-full cursor-pointer active:opacity-80 relative"
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button
              onClick={() => actions.navigate("settings")}
              className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-sm rounded-full cursor-pointer active:opacity-80"
              aria-label="Help"
            >
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <button
              onClick={() => actions.navigate("profile")}
              className="ml-xs hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-[2px] rounded-full cursor-pointer active:opacity-80 border border-outline-variant"
              aria-label="Open profile"
            >
              {profile.avatarUrl ? (
                <img alt="User profile avatar" className="w-8 h-8 rounded-full object-cover" src={profile.avatarUrl} />
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-sm font-semibold">
                  {profile.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
              )}
            </button>
          </div>
        </header>
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 z-40 bg-surface-container border-b border-outline-variant p-md space-y-xs shadow-lg">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} onNavigate={(screen) => { actions.navigate(screen); setMobileMenuOpen(false); }} mobile />
            ))}
            <button
              onClick={() => { actions.navigate("create"); setMobileMenuOpen(false); }}
              className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg flex items-center justify-center gap-xs mt-sm"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Record
            </button>
          </div>
        )}
        {/* Canvas */}
        <main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop">
          <div className="max-w-4xl mx-auto space-y-lg pb-xl">
            {/* Page Header */}
            <div className="flex items-start justify-between flex-wrap gap-md">
              <div>
                <h2 className="font-display-lg text-display-lg text-on-surface">Application Settings</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">Manage your operational preferences and system configurations.</p>
              </div>
              <div className="flex gap-sm">
                <button
                  onClick={() => actions.retryStorage()}
                  className="px-md py-sm rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md flex items-center gap-xs hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none"
                >
                  <span className="material-symbols-outlined text-[18px]">refresh</span>
                  Retry Sync
                </button>
                <button
                  onClick={() => actions.clearAndReset()}
                  className="px-md py-sm rounded-lg bg-surface-container-high border border-outline-variant text-error font-label-md text-label-md flex items-center gap-xs hover:bg-error-container hover:border-error transition-colors focus:ring-2 focus:ring-error focus:outline-none"
                >
                  <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                  Reset All
                </button>
              </div>
            </div>
            {/* Bento Grid Layout for Settings */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Notifications & Alerts (Spans 8 cols) */}
              <section className="col-span-1 md:col-span-8 bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-md">
                <div className="flex items-center gap-sm pb-sm border-b border-surface-container-high">
                  <span className="material-symbols-outlined text-primary">notifications_active</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Alert Configuration</h3>
                </div>
                <div className="space-y-sm flex-1">
                  <div className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container-low transition-colors">
                    <div>
                      <div className="font-label-md text-label-md text-on-surface">Critical System Alerts</div>
                      <div className="font-body-md text-body-md text-on-surface-variant mt-unit">Dispatch failures and offline mode warnings.</div>
                    </div>
                    {/* Toggle Switch */}
                    <button
                      onClick={() => handleToggle("notificationsEnabled")}
                      aria-checked={settings.notificationsEnabled}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background ${
                        settings.notificationsEnabled ? "bg-primary-container" : "bg-surface-container-highest"
                      }`}
                      role="switch"
                      type="button"
                    >
                      <span
                        aria-hidden={true}
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out ${
                          settings.notificationsEnabled ? "translate-x-5 bg-on-primary-container" : "translate-x-0 bg-outline"
                        }`}
                      ></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container-low transition-colors">
                    <div>
                      <div className="font-label-md text-label-md text-on-surface">Background Data Sync</div>
                      <div className="font-body-md text-body-md text-on-surface-variant mt-unit">Automatically refresh service records at the configured interval.</div>
                    </div>
                    <button
                      onClick={() => handleToggle("autoRefresh")}
                      aria-checked={settings.autoRefresh}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background ${
                        settings.autoRefresh ? "bg-primary-container" : "bg-surface-container-highest"
                      }`}
                      role="switch"
                      type="button"
                    >
                      <span
                        aria-hidden={true}
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out ${
                          settings.autoRefresh ? "translate-x-5 bg-on-primary-container" : "translate-x-0 bg-outline"
                        }`}
                      ></span>
                    </button>
                  </div>
                </div>
              </section>
              {/* Theme & Appearance (Spans 4 cols) */}
              <section className="col-span-1 md:col-span-4 bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-md">
                <div className="flex items-center gap-sm pb-sm border-b border-surface-container-high">
                  <span className="material-symbols-outlined text-primary">palette</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Appearance</h3>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-sm">
                  <label className="relative flex items-center p-sm rounded-lg border-2 border-primary bg-surface-container-low cursor-pointer">
                    <input checked={settings.darkMode} className="sr-only" name="theme" type="radio" value="dark" readOnly />
                    <span className="material-symbols-outlined text-primary mr-sm">dark_mode</span>
                    <div className="flex-1">
                      <div className="font-label-md text-label-md text-on-surface">Dark Mode (Forced)</div>
                      <div className="font-label-sm text-label-sm text-primary mt-unit">Required for field ops</div>
                    </div>
                    <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  </label>
                  <label className="relative flex items-center p-sm rounded-lg border border-surface-container-high bg-surface-container-lowest opacity-50 cursor-not-allowed">
                    <input className="sr-only" disabled={true} name="theme" type="radio" value="light" />
                    <span className="material-symbols-outlined text-on-surface-variant mr-sm">light_mode</span>
                    <div className="flex-1">
                      <div className="font-label-md text-label-md text-on-surface-variant">Light Mode</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant mt-unit">Unavailable</div>
                    </div>
                  </label>
                </div>
              </section>
              {/* API Configuration (Spans 6 cols) */}
              <section className="col-span-1 md:col-span-6 bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-md">
                <div className="flex items-center gap-sm pb-sm border-b border-surface-container-high">
                  <span className="material-symbols-outlined text-primary">api</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Environment Setup</h3>
                </div>
                <div className="space-y-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="api-endpoint">Primary Endpoint URL</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">link</span>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg py-sm pl-xl pr-md font-mono-data text-mono-data focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                        id="api-endpoint"
                        type="url"
                        value={apiEndpoint}
                        onChange={(e) => setApiEndpoint(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="sync-interval">Background Sync Interval</label>
                    <select
                      className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg py-sm px-md font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all appearance-none"
                      id="sync-interval"
                      value={syncIntervalMinutes}
                      onChange={(e) => handleSyncIntervalChange(e.target.value)}
                    >
                      <option value="5">Every 5 minutes (High Drain)</option>
                      <option value="15">Every 15 minutes (Standard)</option>
                      <option value="30">Every 30 minutes (Eco)</option>
                      <option value="manual">Manual Only</option>
                    </select>
                  </div>
                  <div className="pt-sm">
                    <button
                      onClick={handleTestConnection}
                      className="w-full bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-label-md text-label-md py-sm px-md rounded-lg transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none flex justify-center items-center gap-xs"
                    >
                      <span className="material-symbols-outlined text-[18px]">network_check</span>
                      Test Connection
                    </button>
                    {connectionTested && (
                      <p className="mt-xs font-label-sm text-label-sm text-primary text-center">{connectionTested}</p>
                    )}
                  </div>
                </div>
              </section>
              {/* Storage & Cache (Spans 6 cols) */}
              <section className="col-span-1 md:col-span-6 bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-md">
                <div className="flex items-center gap-sm pb-sm border-b border-surface-container-high">
                  <span className="material-symbols-outlined text-primary">storage</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Data Management</h3>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-sm">
                    <div className="flex justify-between items-center bg-surface-container-low p-sm rounded-lg border border-surface-container-high">
                      <div>
                        <span className="font-label-md text-label-md text-on-surface block">Offline Payload Cache</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">Pending sync records</span>
                      </div>
                      <span className="font-mono-data text-mono-data text-primary">12.4 MB</span>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container-low p-sm rounded-lg border border-surface-container-high">
                      <div>
                        <span className="font-label-md text-label-md text-on-surface block">Asset Storage</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">Maps &amp; schematics</span>
                      </div>
                      <span className="font-mono-data text-mono-data text-on-surface-variant">245.1 MB</span>
                    </div>
                  </div>
                  <div className="mt-md pt-md border-t border-surface-container-high">
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-sm">Clearing local storage will sign you out and remove all unsynced field data. Proceed with caution.</p>
                    <button
                      onClick={() => actions.clearAndReset()}
                      className="w-full bg-error-container/20 hover:bg-error-container border border-error text-error font-label-md text-label-md py-sm px-md rounded-lg transition-colors focus:ring-2 focus:ring-error focus:outline-none flex justify-center items-center gap-xs"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete_forever</span>
                      Clear Local Storage
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
