// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights & Analytics
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import { useAppContext } from "../contexts/AppContext";
import { ServiceStatus } from "../types/domain";

interface InsightsAnalyticsProps {}

type Period = "today" | "7days" | "30days";

function statusBadgeClasses(status: ServiceStatus) {
  switch (status) {
    case "ready":
      return { dot: "bg-primary", text: "text-primary" };
    case "in-progress":
      return { dot: "bg-tertiary", text: "text-tertiary" };
    case "blocked":
      return { dot: "bg-error", text: "text-error" };
    case "completed":
      return { dot: "bg-secondary", text: "text-secondary" };
    default:
      return { dot: "bg-on-surface", text: "text-on-surface" };
  }
}

function formatHours(ms: number): string {
  const hours = ms / (1000 * 60 * 60);
  return hours.toFixed(1);
}

export function InsightsAnalytics(props: InsightsAnalyticsProps) {
  const { state, actions } = useAppContext();
  const [period, setPeriod] = useState<Period>("today");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const records = state.records;
  const technicians = state.technicians;

  const totalRecords = records.length;
  const completedCount = records.filter((r) => r.status === "completed").length;
  const pendingCount = records.filter(
    (r) => r.status === "ready" || r.status === "in-progress"
  ).length;

  // Compute average resolution time for completed records
  const avgResolutionHours = useMemo(() => {
    const completed = records.filter((r) => r.status === "completed" && r.createdAt && r.updatedAt);
    if (completed.length === 0) return null;
    const totalMs = completed.reduce((sum, r) => {
      const created = new Date(r.createdAt).getTime();
      const updated = new Date(r.updatedAt).getTime();
      return sum + (updated - created);
    }, 0);
    return formatHours(totalMs / completed.length);
  }, [records]);

  // Chart data: distribution by day of week for last 7 days (simulated from createdAt)
  const chartData = useMemo(() => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const counts = days.map((_, i) => {
      // Distribute records across days based on createdAt day of week
      return records.filter((r) => {
        const d = new Date(r.createdAt);
        // Map JS day (0=Sun) to our index (0=Mon)
        const jsDay = d.getDay();
        const idx = jsDay === 0 ? 6 : jsDay - 1;
        return idx === i;
      }).length;
    });
    const maxCount = Math.max(1, ...counts);
    return days.map((label, i) => ({
      label,
      count: counts[i],
      heightPct: Math.round((counts[i] / maxCount) * 100),
    }));
  }, [records]);

  // Technician workload: assigned non-completed records per tech
  const techWorkload = useMemo(() => {
    return technicians.map((tech) => {
      const assigned = records.filter(
        (r) => r.assignedTechId === tech.id && r.status !== "completed"
      ).length;
      const capacity = tech.isAvailable ? 15 : 0;
      const pct = capacity > 0 ? Math.min(100, Math.round((assigned / capacity) * 100)) : 0;
      return {
        id: tech.id,
        name: tech.name,
        initials: tech.initials,
        assigned,
        capacity,
        pct,
        isAvailable: tech.isAvailable,
      };
    });
  }, [technicians, records]);

  const handlePeriodChange = (p: Period) => {
    setPeriod(p);
  };

  const completedTrend = completedCount > 0 ? `+${completedCount} completed` : "No completions yet";

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
        <button
          onClick={() => actions.navigate("create")}
          className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm rounded-lg flex items-center justify-center gap-xs hover:bg-primary-fixed transition-colors mb-md"
        >
          <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
          New Record
        </button>
        <div className="flex-1 flex flex-col gap-xs">
          <a
            onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); }}
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 cursor-pointer"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a
            onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); }}
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 cursor-pointer"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
            <span className="font-label-md text-label-md">Service Records</span>
          </a>
          {/* Active Tab */}
          <a
            onClick={(e) => { e.preventDefault(); }}
            className="flex items-center gap-md px-sm py-sm rounded-lg bg-secondary-container text-on-secondary-container font-bold scale-95 active:scale-100 transition-transform duration-150 cursor-pointer"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="analytics" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            <span className="font-label-md text-label-md">Insights</span>
          </a>
          <a
            onClick={(e) => { e.preventDefault(); actions.navigate("settings"); }}
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 cursor-pointer"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
          <a
            onClick={(e) => { e.preventDefault(); actions.navigate("profile"); }}
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 cursor-pointer"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="person">person</span>
            <span className="font-label-md text-label-md">Profile</span>
          </a>
        </div>
        <div className="mt-auto pt-md border-t border-outline-variant">
          <a
            onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); }}
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 cursor-pointer"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
            <span className="font-label-md text-label-md">Support</span>
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
                <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary-container text-[20px]">hub</span>
                </div>
                <div>
                  <h1 className="text-headline-sm font-headline-sm font-semibold text-primary">Field Control</h1>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-on-surface p-xs hover:bg-surface-container-high rounded transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <button onClick={() => { actions.navigate("create"); setMobileMenuOpen(false); }} className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm rounded-lg flex items-center justify-center gap-xs hover:bg-primary-fixed transition-colors mb-md">
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Record
            </button>
            <div className="flex-1 flex flex-col gap-xs">
              <a onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high cursor-pointer" href="#">Dashboard</a>
              <a onClick={(e) => { e.preventDefault(); actions.navigate("dashboard"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high cursor-pointer" href="#">Service Records</a>
              <a onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); }} className="flex items-center gap-md px-sm py-sm rounded-lg bg-secondary-container text-on-secondary-container font-bold cursor-pointer" href="#">Insights</a>
              <a onClick={(e) => { e.preventDefault(); actions.navigate("settings"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high cursor-pointer" href="#">Settings</a>
              <a onClick={(e) => { e.preventDefault(); actions.navigate("profile"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high cursor-pointer" href="#">Profile</a>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* TopAppBar */}
        <header className="sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 bg-surface-container border-b border-outline-variant">
          <div className="flex items-center gap-sm">
            {/* Mobile menu button (hidden on md) */}
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-on-surface p-xs hover:bg-surface-container-high rounded-lg transition-colors cursor-pointer active:opacity-80">
              <span className="material-symbols-outlined" data-icon="menu">menu</span>
            </button>
            <span className="text-headline-sm font-headline-sm font-bold text-on-surface">ServiceControl</span>
          </div>
          <div className="flex items-center gap-sm">
            <button onClick={() => actions.openPanel("notifications")} className="text-on-surface p-xs hover:bg-surface-container-high rounded-full transition-colors cursor-pointer active:opacity-80 flex items-center justify-center h-10 w-10" aria-label="Notifications">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button onClick={() => actions.navigate("settings")} className="text-on-surface p-xs hover:bg-surface-container-high rounded-full transition-colors cursor-pointer active:opacity-80 flex items-center justify-center h-10 w-10" aria-label="Help">
              <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
            </button>
            <div onClick={() => actions.navigate("profile")} className="h-8 w-8 rounded-full bg-secondary-fixed flex items-center justify-center ml-sm border border-outline-variant overflow-hidden cursor-pointer">
              <img alt="User profile avatar" className="w-full h-full object-cover" src={state.profile.avatarUrl || ""} />
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
              <button
                onClick={() => handlePeriodChange("today")}
                className={`px-sm py-xs text-label-md font-label-md rounded transition-colors ${period === "today" ? "bg-surface-container-high text-on-surface" : "hover:bg-surface-container-high text-on-surface-variant"}`}
              >
                Today
              </button>
              <button
                onClick={() => handlePeriodChange("7days")}
                className={`px-sm py-xs text-label-md font-label-md rounded transition-colors ${period === "7days" ? "bg-surface-container-high text-on-surface" : "hover:bg-surface-container-high text-on-surface-variant"}`}
              >
                7 Days
              </button>
              <button
                onClick={() => handlePeriodChange("30days")}
                className={`px-sm py-xs text-label-md font-label-md rounded transition-colors ${period === "30days" ? "bg-surface-container-high text-on-surface" : "hover:bg-surface-container-high text-on-surface-variant"}`}
              >
                30 Days
              </button>
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
                <div className="font-display-lg text-display-lg text-on-surface">{totalRecords.toLocaleString()}</div>
                <div className="flex items-center gap-xs mt-xs text-primary">
                  <span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
                  <span className="font-label-sm text-label-sm">All time</span>
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
                <div className="font-display-lg text-display-lg text-on-surface">{completedCount}</div>
                <div className="w-full bg-surface-container-high rounded-full h-1 mt-sm">
                  <div className="bg-primary h-1 rounded-full" style={{ width: totalRecords > 0 ? `${Math.round((completedCount / totalRecords) * 100)}%` : "0%" }}></div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between">
              <div className="flex items-center justify-between mb-sm">
                <span className="font-label-md text-label-md text-on-surface-variant">Pending</span>
                <span className="material-symbols-outlined text-error text-[20px]" data-icon="pending">pending</span>
              </div>
              <div>
                <div className="font-display-lg text-display-lg text-on-surface">{pendingCount}</div>
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
                <div className="font-display-lg text-display-lg text-on-surface">
                  {avgResolutionHours ?? "--"}
                  {avgResolutionHours && <span className="text-headline-md font-headline-md text-on-surface-variant ml-xs">hrs</span>}
                </div>
                <div className="flex items-center gap-xs mt-xs text-primary">
                  <span className="material-symbols-outlined text-[16px]" data-icon="trending_down">trending_down</span>
                  <span className="font-label-sm text-label-sm">{completedTrend}</span>
                </div>
              </div>
            </div>
            {/* Main Chart Area: Resolution Trends */}
            <div className="md:col-span-8 bg-surface border border-outline-variant rounded-xl p-md flex flex-col">
              <div className="flex items-center justify-between mb-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Record Distribution</h3>
                <button onClick={() => actions.navigate("dashboard")} className="text-on-surface-variant hover:text-on-surface transition-colors" aria-label="More options">
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
                  {chartData.map((d) => (
                    <div
                      key={d.label}
                      className="w-full bg-primary-container/40 rounded-t-sm hover:bg-primary-container transition-colors relative group"
                      style={{ height: `${Math.max(10, d.heightPct)}%` }}
                      title={`${d.label}: ${d.count}`}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-high text-on-surface text-label-sm px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
                        {d.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* X-axis labels */}
              <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mt-sm px-md">
                {chartData.map((d) => (
                  <span key={d.label}>{d.label}</span>
                ))}
              </div>
            </div>
            {/* Secondary Area: Technician Workload */}
            <div className="md:col-span-4 bg-surface border border-outline-variant rounded-xl p-md flex flex-col">
              <div className="flex items-center justify-between mb-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Technician Workload</h3>
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="group">group</span>
              </div>
              <div className="flex-1 flex flex-col gap-md">
                {techWorkload.map((tech) => (
                  <div key={tech.id}>
                    <div className="flex justify-between text-body-md font-body-md mb-xs">
                      <span className="text-on-surface">{tech.name}</span>
                      <span className="text-on-surface-variant font-mono-data">
                        {tech.assigned} / {tech.capacity}
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          tech.pct >= 100 ? "bg-error" : tech.pct >= 70 ? "bg-primary" : "bg-secondary"
                        }`}
                        style={{ width: `${tech.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => actions.navigate("dashboard")} className="w-full mt-md py-sm border border-outline-variant text-on-surface font-label-md text-label-md rounded hover:bg-surface-container-high transition-colors">
                View All Personnel
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
