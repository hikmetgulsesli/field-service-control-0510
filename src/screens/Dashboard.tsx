// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Dashboard
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import { useAppContext } from "../contexts/AppContext";
import { ServiceRecord, ServiceStatus } from "../types/domain";

interface DashboardProps {}

function statusBadgeClasses(status: ServiceStatus) {
  switch (status) {
    case "ready":
      return {
        wrapper: "bg-primary-container/20 border border-primary/30 text-primary",
        dot: "bg-primary",
        label: "Ready",
      };
    case "in-progress":
      return {
        wrapper: "bg-tertiary-container/20 border border-tertiary/30 text-tertiary",
        dot: "bg-tertiary",
        label: "In Progress",
      };
    case "blocked":
      return {
        wrapper: "bg-error-container/20 border border-error/30 text-error",
        dot: "bg-error",
        label: "Blocked",
      };
    case "completed":
      return {
        wrapper: "bg-secondary-container/20 border border-secondary/30 text-secondary",
        dot: "bg-secondary",
        label: "Completed",
      };
    default:
      return {
        wrapper: "bg-surface-container/20 border border-outline/30 text-on-surface",
        dot: "bg-on-surface",
        label: status,
      };
  }
}

const PAGE_SIZE = 10;

export function Dashboard(props: DashboardProps) {
  const { state, actions } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const records = state.records;

  const filteredRecords = useMemo(() => {
    let result = [...records];
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.serviceId.toLowerCase().includes(q) ||
          r.customerName.toLowerCase().includes(q) ||
          r.location.toLowerCase().includes(q)
      );
    }
    if (state.statusFilter !== "all") {
      result = result.filter((r) => r.status === state.statusFilter);
    }
    if (state.priorityFilter !== "all") {
      result = result.filter((r) => r.priority === state.priorityFilter);
    }
    if (state.techFilter !== "all") {
      result = result.filter((r) => r.assignedTechId === state.techFilter);
    }
    return result;
  }, [records, state.searchQuery, state.statusFilter, state.priorityFilter, state.techFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedRecords = filteredRecords.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const totalActive = records.length;
  const readyCount = records.filter((r) => r.status === "ready").length;
  const inProgressCount = records.filter((r) => r.status === "in-progress").length;
  const blockedCount = records.filter((r) => r.status === "blocked").length;

  const readyPct = totalActive > 0 ? Math.round((readyCount / totalActive) * 100) : 0;
  const inProgressPct = totalActive > 0 ? Math.round((inProgressCount / totalActive) * 100) : 0;
  const blockedPct = totalActive > 0 ? Math.round((blockedCount / totalActive) * 100) : 0;

  const handleSearch = (value: string) => {
    actions.setSearchQuery(value);
    setCurrentPage(1);
  };

  const cycleStatusFilter = () => {
    const order: ServiceStatus[] = ["ready", "in-progress", "blocked", "completed"];
    if (state.statusFilter === "all") {
      actions.setStatusFilter("ready");
    } else {
      const idx = order.indexOf(state.statusFilter as ServiceStatus);
      const next = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;
      actions.setStatusFilter(next ?? "all");
    }
    setCurrentPage(1);
  };

  const cyclePriorityFilter = () => {
    const order = ["low", "medium", "high", "critical"];
    if (state.priorityFilter === "all") {
      actions.setPriorityFilter("low");
    } else {
      const idx = order.indexOf(state.priorityFilter);
      const next = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;
      actions.setPriorityFilter(next ?? "all");
    }
    setCurrentPage(1);
  };

  const cycleTechFilter = () => {
    const techs = state.technicians.map((t) => t.id);
    if (state.techFilter === "all") {
      actions.setTechFilter(techs[0] ?? "all");
    } else {
      const idx = techs.indexOf(state.techFilter);
      const next = idx >= 0 && idx < techs.length - 1 ? techs[idx + 1] : null;
      actions.setTechFilter(next ?? "all");
    }
    setCurrentPage(1);
  };

  const handleRowClick = (record: ServiceRecord) => {
    actions.selectRecord(record.id);
    actions.navigate("detail");
  };

  const getTechName = (techId: string | null) => {
    if (!techId) return null;
    const tech = state.technicians.find((t) => t.id === techId);
    return tech?.name ?? techId;
  };

  const getTechAvatar = (techId: string | null) => {
    if (!techId) return null;
    const tech = state.technicians.find((t) => t.id === techId);
    return tech?.avatarUrl ?? null;
  };

  return (
    <>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <nav className={`bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-label-md text-label-md font-body-md text-body-md border-r border-outline-variant dark:border-outline-variant flat no shadows hidden md:flex flex-col h-full py-lg px-md space-y-sm w-64 shrink-0 relative z-10`}>
          <div className="flex items-center gap-sm mb-xl px-sm">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary-container text-[18px]" data-icon="corporate_fare" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>corporate_fare</span>
            </div>
            <div>
              <h1 className="text-headline-sm font-headline-sm font-semibold text-primary dark:text-primary leading-tight">Field Control</h1>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Ops Command</p>
            </div>
          </div>
          <button
            onClick={() => actions.navigate("create")}
            className="w-full bg-primary-container hover:bg-inverse-primary text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg flex items-center justify-center gap-xs mb-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container-low"
          >
            <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
            New Record
          </button>
          <div className="flex-1 flex flex-col space-y-xs overflow-y-auto">
            <a
              onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); }}
              className="bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container font-bold rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 transition-transform duration-150 group cursor-pointer"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="dashboard" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
              Dashboard
            </a>
            <a
              onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); }}
              className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group cursor-pointer"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="assignment">assignment</span>
              Service Records
            </a>
            <a
              onClick={(e) => { e.preventDefault(); actions.navigate("insights"); }}
              className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group cursor-pointer"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="analytics">analytics</span>
              Insights
            </a>
            <a
              onClick={(e) => { e.preventDefault(); actions.navigate("settings"); }}
              className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group cursor-pointer"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
              Settings
            </a>
            <a
              onClick={(e) => { e.preventDefault(); actions.navigate("profile"); }}
              className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group cursor-pointer"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="person">person</span>
              Profile
            </a>
          </div>
          <div className="pt-md mt-auto border-t border-outline-variant">
            <a
              onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); }}
              className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group cursor-pointer"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="contact_support">contact_support</span>
              Support
            </a>
          </div>
        </nav>

        {/* Mobile overlay menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <nav className="absolute left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant flex flex-col py-lg px-md space-y-sm">
              <div className="flex items-center justify-between mb-xl px-sm">
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-primary-container text-[18px]">corporate_fare</span>
                  </div>
                  <div>
                    <h1 className="text-headline-sm font-headline-sm font-semibold text-primary leading-tight">Field Control</h1>
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-on-surface p-xs hover:bg-surface-container-high rounded transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <button onClick={() => { actions.navigate("create"); setMobileMenuOpen(false); }} className="w-full bg-primary-container hover:bg-inverse-primary text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg flex items-center justify-center gap-xs mb-lg transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                New Record
              </button>
              <div className="flex-1 flex flex-col space-y-xs overflow-y-auto">
                <a onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); setMobileMenuOpen(false); }} className="bg-secondary-container text-on-secondary-container font-bold rounded-lg flex items-center gap-md px-md py-sm cursor-pointer" href="#">Dashboard</a>
                <a onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); setMobileMenuOpen(false); }} className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-md px-md py-sm cursor-pointer" href="#">Service Records</a>
                <a onClick={(e) => { e.preventDefault(); actions.navigate("insights"); setMobileMenuOpen(false); }} className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-md px-md py-sm cursor-pointer" href="#">Insights</a>
                <a onClick={(e) => { e.preventDefault(); actions.navigate("settings"); setMobileMenuOpen(false); }} className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-md px-md py-sm cursor-pointer" href="#">Settings</a>
                <a onClick={(e) => { e.preventDefault(); actions.navigate("profile"); setMobileMenuOpen(false); }} className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-md px-md py-sm cursor-pointer" href="#">Profile</a>
              </div>
            </nav>
          </div>
        )}

        <div className="flex-1 flex flex-col min-w-0 bg-background">
          <header className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary font-headline-sm text-headline-sm font-label-md text-label-md border-b border-outline-variant dark:border-outline-variant flat no shadows sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 shrink-0">
            <div className="flex items-center gap-md md:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="text-on-surface p-xs hover:bg-surface-container-high rounded-lg transition-colors cursor-pointer active:opacity-80">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <span className="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-on-surface">ServiceControl</span>
            </div>
            <div className="hidden md:flex flex-1 max-w-md relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" data-icon="search">search</span>
              <input
                className="w-full bg-surface-container-high text-on-surface placeholder:text-on-surface-variant border-none rounded-lg pl-10 pr-4 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:outline-none transition-shadow"
                placeholder="Search service ID, customer..."
                type="text"
                value={state.searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-xs ml-auto">
              <button onClick={() => actions.openPanel("notifications")} className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 transition-opacity" aria-label="Notifications">
                <span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
              </button>
              <button onClick={() => actions.navigate("settings")} className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 transition-opacity" aria-label="Help">
                <span className="material-symbols-outlined text-[20px]" data-icon="help_outline">help_outline</span>
              </button>
              <div onClick={() => actions.navigate("profile")} className="ml-sm w-8 h-8 rounded-full bg-secondary-container border border-outline-variant overflow-hidden cursor-pointer">
                <img alt="User profile avatar" className="w-full h-full object-cover" src={state.profile.avatarUrl || ""} />
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-gutter md:p-margin-desktop bg-background">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md mb-lg">
              <div>
                <h2 className="font-display-lg text-display-lg text-on-surface">Operations Overview</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Live metrics and active service queue.</p>
              </div>
              <div className="flex gap-sm w-full sm:w-auto">
                <div className="md:hidden flex-1 relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" data-icon="search">search</span>
                  <input
                    className="w-full bg-surface-container text-on-surface border border-outline-variant rounded-lg pl-10 pr-4 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:outline-none"
                    placeholder="Search..."
                    type="text"
                    value={state.searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter md:gap-lg mb-xl">
              <div className="col-span-4 md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between min-h-[140px] relative overflow-hidden group hover:border-outline transition-colors">
                <div className="flex justify-between items-start">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Active</span>
                  <span className="material-symbols-outlined text-on-surface-variant" data-icon="monitoring">monitoring</span>
                </div>
                <div>
                  <div className="font-display-lg text-display-lg text-on-surface font-mono-data">{totalActive}</div>
                  <div className="font-label-sm text-label-sm text-secondary mt-1 flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
                    Live queue
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-high">
                  <div className="h-full bg-secondary w-[100%]"></div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between min-h-[140px] relative overflow-hidden hover:border-outline transition-colors">
                <div className="flex justify-between items-start">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Ready</span>
                  <span className="material-symbols-outlined text-primary" data-icon="pending_actions">pending_actions</span>
                </div>
                <div>
                  <div className="font-display-lg text-display-lg text-on-surface font-mono-data">{readyCount}</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">Awaiting dispatch</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-high">
                  <div className="h-full bg-primary" style={{ width: `${readyPct}%` }}></div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between min-h-[140px] relative overflow-hidden hover:border-outline transition-colors">
                <div className="flex justify-between items-start">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">In Progress</span>
                  <span className="material-symbols-outlined text-tertiary" data-icon="sync">sync</span>
                </div>
                <div>
                  <div className="font-display-lg text-display-lg text-on-surface font-mono-data">{inProgressCount}</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">Techs on site</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-high">
                  <div className="h-full bg-tertiary" style={{ width: `${inProgressPct}%` }}></div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-3 bg-surface border border-error/30 rounded-xl p-md flex flex-col justify-between min-h-[140px] relative overflow-hidden bg-gradient-to-br from-surface to-error-container/10 hover:border-error/50 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="font-label-md text-label-md text-error uppercase tracking-wider">Blocked</span>
                  <span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
                </div>
                <div>
                  <div className="font-display-lg text-display-lg text-error font-mono-data">{blockedCount}</div>
                  <div className="font-label-sm text-label-sm text-error mt-1 flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[14px]" data-icon="priority_high">priority_high</span>
                    Requires immediate attention
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-high">
                  <div className="h-full bg-error" style={{ width: `${blockedPct}%` }}></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.2)]">
              <div className="bg-surface-container-low p-md border-b border-outline-variant flex flex-wrap gap-sm items-center justify-between">
                <div className="flex flex-wrap gap-sm">
                  <button onClick={cycleStatusFilter} className="bg-surface border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded flex items-center gap-xs hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
                    <span className="material-symbols-outlined text-[16px]" data-icon="filter_list">filter_list</span>
                    Status {state.statusFilter !== "all" ? `(${state.statusFilter})` : ""}
                  </button>
                  <button onClick={cyclePriorityFilter} className="bg-surface border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded flex items-center gap-xs hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
                    <span className="material-symbols-outlined text-[16px]" data-icon="flag">flag</span>
                    Priority {state.priorityFilter !== "all" ? `(${state.priorityFilter})` : ""}
                  </button>
                  <button onClick={cycleTechFilter} className="bg-surface border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded flex items-center gap-xs hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
                    <span className="material-symbols-outlined text-[16px]" data-icon="engineering">engineering</span>
                    Assigned Tech {state.techFilter !== "all" ? `(${getTechName(state.techFilter)})` : ""}
                  </button>
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]" data-icon="refresh">refresh</span>
                  Updated just now
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant">
                      <th className="py-3 px-md font-medium w-[120px]">Service ID</th>
                      <th className="py-3 px-md font-medium">Customer / Location</th>
                      <th className="py-3 px-md font-medium w-[160px]">Status</th>
                      <th className="py-3 px-md font-medium w-[200px]">Assigned Tech</th>
                      <th className="py-3 px-md font-medium w-[150px] text-right">Last Update</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono-data text-mono-data text-on-surface">
                    {paginatedRecords.map((record) => {
                      const badge = statusBadgeClasses(record.status);
                      const techName = getTechName(record.assignedTechId);
                      const techAvatar = getTechAvatar(record.assignedTechId);
                      return (
                        <tr
                          key={record.id}
                          onClick={() => handleRowClick(record)}
                          className="border-b border-outline-variant hover:bg-surface-container-high transition-colors group cursor-pointer"
                        >
                          <td className="py-sm px-md text-primary">{record.serviceId}</td>
                          <td className="py-sm px-md">
                            <div className="font-body-md text-body-md text-on-surface">{record.customerName}</div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">{record.location}</div>
                          </td>
                          <td className="py-sm px-md">
                            <span className={`inline-flex items-center gap-xs px-2 py-0.5 rounded-full font-label-sm text-label-sm ${badge.wrapper}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${badge.dot} ${record.status === "in-progress" ? "animate-pulse" : ""}`}></span>
                              {badge.label}
                            </span>
                          </td>
                          <td className="py-sm px-md flex items-center gap-sm">
                            {techAvatar ? (
                              <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden">
                                <img alt="Tech Avatar" className="w-full h-full object-cover" src={techAvatar} />
                              </div>
                            ) : null}
                            <span className={techName ? "text-on-surface" : "text-on-surface-variant italic"}>
                              {techName ?? "Unassigned"}
                            </span>
                          </td>
                          <td className="py-sm px-md text-right text-on-surface-variant">{record.lastUpdate}</td>
                        </tr>
                      );
                    })}
                    {paginatedRecords.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-xl px-md text-center text-on-surface-variant font-body-md">
                          No records match the current filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="bg-surface-container-low p-sm border-t border-outline-variant flex justify-between items-center px-md text-on-surface-variant font-label-sm text-label-sm">
                <span>
                  Showing {filteredRecords.length > 0 ? (safePage - 1) * PAGE_SIZE + 1 : 0}-{Math.min(safePage * PAGE_SIZE, filteredRecords.length)} of {filteredRecords.length} records
                </span>
                <div className="flex gap-xs">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={safePage <= 1}
                    className="p-1 hover:bg-surface-container rounded transition-colors disabled:opacity-50"
                    aria-label="Previous page"
                  >
                    <span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={safePage >= totalPages}
                    className="p-1 hover:bg-surface-container rounded transition-colors disabled:opacity-50"
                    aria-label="Next page"
                  >
                    <span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
