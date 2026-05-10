// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SettingsProps {}

export function Settings(props: SettingsProps) {
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
      <button className="bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg flex items-center justify-center gap-xs mb-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]">add</span>
                  New Record
              </button>
      <div className="flex-1 space-y-xs">
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">assignment</span>
      <span className="font-label-md text-label-md">Service Records</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">analytics</span>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm rounded-lg bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container font-bold scale-95 active:scale-100 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-label-md text-label-md">Profile</span>
      </a>
      </div>
      <div className="mt-auto">
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-background relative overflow-hidden">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant">
      <div className="flex items-center gap-md">
      {/* Mobile Menu Button */}
      <button className="md:hidden text-on-surface hover:bg-surface-container-high transition-colors p-sm rounded-full">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <span className="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-on-surface md:hidden">ServiceControl</span>
      </div>
      <div className="flex-1 max-w-md mx-md hidden md:block">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full bg-surface-container-high border-outline-variant text-on-surface placeholder-on-surface-variant rounded-full py-sm pl-xl pr-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" placeholder="Search settings..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-sm rounded-full cursor-pointer active:opacity-80 relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-sm rounded-full cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <button className="ml-xs hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-[2px] rounded-full cursor-pointer active:opacity-80 border border-outline-variant">
      <img alt="User profile avatar" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARx1HHTiRQIlxd8uVNzDjilmzGTkd0sZNqw6hg24ym7yUmP6hrm125PfFQdcsBvJEMcmjpbRyB7H_81augNynbLBuOv9i7cXLZCFboFEZ3ftaEzLDd3V9k-DcPDgi0wClHuW1umYHOI9yFEirnsZ-JANes0qOG2Z6GXTM85oz4H1-0V-R2RlkFYR-a51UPgRLYVk7BQw9K1xybWGaVqfMwuYK1bC2D5tutKhc6LZLvK1Kxz38CElSFZDpwlBoBtp-jVTrG1HbZE5j5" />
      </button>
      </div>
      </header>
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
      <button className="px-md py-sm rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md flex items-center gap-xs hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined text-[18px]">refresh</span>
                                  Retry Sync
                              </button>
      <button className="px-md py-sm rounded-lg bg-surface-container-high border border-outline-variant text-error font-label-md text-label-md flex items-center gap-xs hover:bg-error-container hover:border-error transition-colors focus:ring-2 focus:ring-error focus:outline-none">
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
      <button aria-checked={true} className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" role="switch" type="button">
      <span aria-hidden={true} className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-on-primary-container shadow ring-0 transition duration-200 ease-in-out"></span>
      </button>
      </div>
      <div className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container-low transition-colors">
      <div>
      <div className="font-label-md text-label-md text-on-surface">Routine Service Updates</div>
      <div className="font-body-md text-body-md text-on-surface-variant mt-unit">Standard job completion and sync notifications.</div>
      </div>
      <button aria-checked={false} className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-surface-container-highest transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" role="switch" type="button">
      <span aria-hidden={true} className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-outline shadow ring-0 transition duration-200 ease-in-out"></span>
      </button>
      </div>
      <div className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container-low transition-colors">
      <div>
      <div className="font-label-md text-label-md text-on-surface">Audible Pings</div>
      <div className="font-body-md text-body-md text-on-surface-variant mt-unit">Play sounds for incoming priority tasks.</div>
      </div>
      <button aria-checked={true} className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" role="switch" type="button">
      <span aria-hidden={true} className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-on-primary-container shadow ring-0 transition duration-200 ease-in-out"></span>
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
      <input checked={true} className="sr-only" name="theme" type="radio" value="dark" />
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
      <input className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg py-sm pl-xl pr-md font-mono-data text-mono-data focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" id="api-endpoint" type="url" value="https://api.fieldcontrol.corp/v3/prod" />
      </div>
      </div>
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="sync-interval">Background Sync Interval</label>
      <select className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg py-sm px-md font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all appearance-none" id="sync-interval">
      <option value="5">Every 5 minutes (High Drain)</option>
      <option selected={true} value="15">Every 15 minutes (Standard)</option>
      <option value="30">Every 30 minutes (Eco)</option>
      <option value="manual">Manual Only</option>
      </select>
      </div>
      <div className="pt-sm">
      <button className="w-full bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-label-md text-label-md py-sm px-md rounded-lg transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none flex justify-center items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">network_check</span>
                                          Test Connection
                                      </button>
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
      <button className="w-full bg-error-container/20 hover:bg-error-container border border-error text-error font-label-md text-label-md py-sm px-md rounded-lg transition-colors focus:ring-2 focus:ring-error focus:outline-none flex justify-center items-center gap-xs">
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
