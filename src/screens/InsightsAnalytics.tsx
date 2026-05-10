// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights & Analytics
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface InsightsAnalyticsProps {}

export function InsightsAnalytics(props: InsightsAnalyticsProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-screen left-0 w-64 border-r border-outline-variant bg-surface-container-low py-lg px-md space-y-sm sticky top-0 shrink-0">
      <div className="flex items-center gap-sm mb-lg px-sm">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container text-[20px]" data-icon="hub">hub</span>
      </div>
      <div>
      <h1 className="text-headline-sm font-headline-sm font-semibold text-primary">Field Control</h1>
      <p className="text-label-md font-label-md text-on-surface-variant">Ops Command</p>
      </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm rounded-lg flex items-center justify-center gap-xs hover:bg-primary-fixed transition-colors mb-md">
      <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                  New Record
              </button>
      <div className="flex-1 flex flex-col gap-xs">
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span className="font-label-md text-label-md">Service Records</span>
      </a>
      {/* Active Tab */}
      <a className="flex items-center gap-md px-sm py-sm rounded-lg bg-secondary-container text-on-secondary-container font-bold scale-95 active:scale-100 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="analytics" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>analytics</span>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      <span className="font-label-md text-label-md">Profile</span>
      </a>
      </div>
      <div className="mt-auto pt-md border-t border-outline-variant">
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 bg-surface-container border-b border-outline-variant">
      <div className="flex items-center gap-sm">
      {/* Mobile menu button (hidden on md) */}
      <button className="md:hidden text-on-surface p-xs hover:bg-surface-container-high rounded-lg transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="menu">menu</span>
      </button>
      <span className="text-headline-sm font-headline-sm font-bold text-on-surface">ServiceControl</span>
      </div>
      <div className="flex items-center gap-sm">
      <button className="text-on-surface p-xs hover:bg-surface-container-high rounded-full transition-colors cursor-pointer active:opacity-80 flex items-center justify-center h-10 w-10">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-on-surface p-xs hover:bg-surface-container-high rounded-full transition-colors cursor-pointer active:opacity-80 flex items-center justify-center h-10 w-10">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      </button>
      <div className="h-8 w-8 rounded-full bg-secondary-fixed flex items-center justify-center ml-sm border border-outline-variant overflow-hidden">
      <img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a person wearing a dark corporate uniform, set against a neutral dark grey background. The lighting is studio quality, emphasizing a serious and competent expression suited for a technical dashboard environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNH9qFZXxmWeeYPksO8C-ViHjovXkdoc20bg1wfWM3XJV2sw43DFQdWNDhJmbJM6NgjO1dZxll5fS-B06ES7G-57eLInok1TwstNAhPX6zZrarS_Wu9zNiUHjxpdNq_u9fiM9zYhcy6B-QnKqvtBic8XawgfXCgDA2yHBEOxaS3UtQKThM4Xo5AedBKEdUwKb0f-Au1zUqKRYO8nKRmFPhdB1NFB4-3NxI3PGJgD7BP7j-G4gSG4AXNurUApp-rqZIFlDvWhBYkfIP" />
      </div>
      </div>
      </header>
      {/* Dashboard Canvas */}
      <div className="flex-1 overflow-auto p-gutter">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
      <div>
      <h2 className="font-headline-md text-headline-md text-on-surface">Operational Insights</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Real-time metrics and historical performance data.</p>
      </div>
      <div className="flex items-center gap-sm bg-surface rounded-lg border border-outline-variant p-xs">
      <button className="px-sm py-xs text-label-md font-label-md rounded bg-surface-container-high text-on-surface">Today</button>
      <button className="px-sm py-xs text-label-md font-label-md rounded hover:bg-surface-container-high text-on-surface-variant transition-colors">7 Days</button>
      <button className="px-sm py-xs text-label-md font-label-md rounded hover:bg-surface-container-high text-on-surface-variant transition-colors">30 Days</button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* KPI Cards Row */}
      <div className="md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between">
      <div className="flex items-center justify-between mb-sm">
      <span className="font-label-md text-label-md text-on-surface-variant">Total Records</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="assignment">assignment</span>
      </div>
      <div>
      <div className="font-display-lg text-display-lg text-on-surface">1,248</div>
      <div className="flex items-center gap-xs mt-xs text-primary">
      <span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
      <span className="font-label-sm text-label-sm">+12% vs last period</span>
      </div>
      </div>
      </div>
      <div className="md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent pointer-events-none"></div>
      <div className="flex items-center justify-between mb-sm relative z-10">
      <span className="font-label-md text-label-md text-on-surface-variant">Completed</span>
      <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
      </div>
      <div className="relative z-10">
      <div className="font-display-lg text-display-lg text-on-surface">892</div>
      <div className="w-full bg-surface-container-high rounded-full h-1 mt-sm">
      <div className="bg-primary h-1 rounded-full" style={{width: "71%"}}></div>
      </div>
      </div>
      </div>
      <div className="md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between">
      <div className="flex items-center justify-between mb-sm">
      <span className="font-label-md text-label-md text-on-surface-variant">Pending</span>
      <span className="material-symbols-outlined text-error text-[20px]" data-icon="pending">pending</span>
      </div>
      <div>
      <div className="font-display-lg text-display-lg text-on-surface">356</div>
      <div className="flex items-center gap-xs mt-xs text-on-surface-variant">
      <span className="font-label-sm text-label-sm">Requires dispatch</span>
      </div>
      </div>
      </div>
      <div className="md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between">
      <div className="flex items-center justify-between mb-sm">
      <span className="font-label-md text-label-md text-on-surface-variant">Avg Resolution Time</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="timer">timer</span>
      </div>
      <div>
      <div className="font-display-lg text-display-lg text-on-surface">2.4<span className="text-headline-md font-headline-md text-on-surface-variant ml-xs">hrs</span></div>
      <div className="flex items-center gap-xs mt-xs text-primary">
      <span className="material-symbols-outlined text-[16px]" data-icon="trending_down">trending_down</span>
      <span className="font-label-sm text-label-sm">-0.5 hrs improvement</span>
      </div>
      </div>
      </div>
      {/* Main Chart Area: Resolution Trends */}
      <div className="md:col-span-8 bg-surface border border-outline-variant rounded-xl p-md flex flex-col">
      <div className="flex items-center justify-between mb-md">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Resolution Trends</h3>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors">
      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
      </button>
      </div>
      {/* Abstract Line Chart Placeholder via CSS */}
      <div className="flex-1 min-h-[240px] relative border-b border-l border-outline-variant/50 pt-md pr-md pb-xs pl-xs flex items-end gap-2">
      {/* Y-axis labels */}
      <div className="absolute left-[-28px] top-0 bottom-0 flex flex-col justify-between text-label-sm font-label-sm text-on-surface-variant items-end pr-2">
      <span>100</span>
      <span>50</span>
      <span>0</span>
      </div>
      {/* Grid lines */}
      <div className="absolute left-0 right-0 top-[10%] h-px bg-outline-variant/20"></div>
      <div className="absolute left-0 right-0 top-[50%] h-px bg-outline-variant/20"></div>
      {/* Data Points (Bars simulating area/line) */}
      <div className="w-full flex items-end justify-between h-full px-sm pb-1 gap-1">
      <div className="w-full bg-primary-container/40 rounded-t-sm h-[40%] hover:bg-primary-container transition-colors relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-high text-on-surface text-label-sm px-2 py-1 rounded hidden group-hover:block">40</div></div>
      <div className="w-full bg-primary-container/40 rounded-t-sm h-[55%] hover:bg-primary-container transition-colors relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-high text-on-surface text-label-sm px-2 py-1 rounded hidden group-hover:block">55</div></div>
      <div className="w-full bg-primary-container/60 rounded-t-sm h-[45%] hover:bg-primary-container transition-colors"></div>
      <div className="w-full bg-primary-container/80 rounded-t-sm h-[70%] hover:bg-primary-container transition-colors"></div>
      <div className="w-full bg-primary rounded-t-sm h-[85%] hover:bg-primary-container transition-colors"></div>
      <div className="w-full bg-primary-container/60 rounded-t-sm h-[60%] hover:bg-primary-container transition-colors"></div>
      <div className="w-full bg-primary-container/40 rounded-t-sm h-[50%] hover:bg-primary-container transition-colors"></div>
      </div>
      </div>
      {/* X-axis labels */}
      <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mt-sm px-md">
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>
      </div>
      </div>
      {/* Secondary Area: Technician Workload */}
      <div className="md:col-span-4 bg-surface border border-outline-variant rounded-xl p-md flex flex-col">
      <div className="flex items-center justify-between mb-md">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Technician Workload</h3>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="group">group</span>
      </div>
      <div className="flex-1 flex flex-col gap-md">
      {/* Tech 1 */}
      <div>
      <div className="flex justify-between text-body-md font-body-md mb-xs">
      <span className="text-on-surface">J. Smith</span>
      <span className="text-on-surface-variant font-mono-data">12 / 15</span>
      </div>
      <div className="w-full bg-surface-container-high rounded-full h-2">
      <div className="bg-primary h-2 rounded-full" style={{width: "80%"}}></div>
      </div>
      </div>
      {/* Tech 2 */}
      <div>
      <div className="flex justify-between text-body-md font-body-md mb-xs">
      <span className="text-on-surface">A. Chen</span>
      <span className="text-on-surface-variant font-mono-data">8 / 10</span>
      </div>
      <div className="w-full bg-surface-container-high rounded-full h-2">
      <div className="bg-secondary h-2 rounded-full" style={{width: "80%"}}></div>
      </div>
      </div>
      {/* Tech 3 */}
      <div>
      <div className="flex justify-between text-body-md font-body-md mb-xs">
      <span className="text-on-surface">M. Davis</span>
      <span className="text-on-surface-variant font-mono-data">14 / 14</span>
      </div>
      <div className="w-full bg-surface-container-high rounded-full h-2">
      <div className="bg-error h-2 rounded-full" style={{width: "100%"}}></div>
      </div>
      </div>
      {/* Tech 4 */}
      <div>
      <div className="flex justify-between text-body-md font-body-md mb-xs">
      <span className="text-on-surface">R. Taylor</span>
      <span className="text-on-surface-variant font-mono-data">3 / 10</span>
      </div>
      <div className="w-full bg-surface-container-high rounded-full h-2">
      <div className="bg-tertiary h-2 rounded-full" style={{width: "30%"}}></div>
      </div>
      </div>
      </div>
      <button className="w-full mt-md py-sm border border-outline-variant text-on-surface font-label-md text-label-md rounded hover:bg-surface-container-high transition-colors">
                              View All Personnel
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
