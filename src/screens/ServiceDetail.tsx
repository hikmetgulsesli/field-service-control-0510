// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Service Detail
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface ServiceDetailProps {}

function formatDateTime(isoString: string): string {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return isoString;
  }
}

function statusConfig(status: string) {
  switch (status) {
    case "ready":
      return {
        label: "Ready",
        colorClass: "text-primary",
        dotClass: "bg-primary",
      };
    case "in-progress":
      return {
        label: "In Progress",
        colorClass: "text-tertiary",
        dotClass: "bg-tertiary",
      };
    case "blocked":
      return {
        label: "Blocked",
        colorClass: "text-error",
        dotClass: "bg-error",
      };
    case "completed":
      return {
        label: "Completed",
        colorClass: "text-secondary",
        dotClass: "bg-secondary",
      };
    default:
      return {
        label: status,
        colorClass: "text-on-surface",
        dotClass: "bg-on-surface",
      };
  }
}

function priorityConfig(priority: string) {
  switch (priority) {
    case "low":
      return {
        label: "Low - Routine",
        colorClass: "text-on-surface",
        iconClass: "text-on-surface-variant",
      };
    case "medium":
      return {
        label: "Medium - Standard",
        colorClass: "text-on-surface",
        iconClass: "text-primary",
      };
    case "high":
      return {
        label: "High - Critical",
        colorClass: "text-error",
        iconClass: "text-error",
      };
    case "critical":
      return {
        label: "Critical - Production Impact",
        colorClass: "text-error",
        iconClass: "text-error",
      };
    default:
      return {
        label: priority,
        colorClass: "text-on-surface",
        iconClass: "text-on-surface-variant",
      };
  }
}

interface ServiceDetailLayoutProps {
  children: React.ReactNode;
}

function ServiceDetailLayout({ children }: ServiceDetailLayoutProps) {
  const { state, actions } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col h-screen left-0 w-64 py-lg px-md space-y-sm shrink-0">
        <div className="mb-lg px-sm">
          <h1 className="text-headline-sm font-headline-sm font-semibold text-primary">Field Control</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">Ops Command</p>
        </div>
        <button
          className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg mb-md flex items-center justify-center gap-sm hover:opacity-90 transition-opacity"
          onClick={() => actions.navigate("create")}
          aria-label="New Record"
        >
          <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add</span>
          New Record
        </button>
        <div className="flex-1 space-y-xs">
          <button
            className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150 w-full text-left"
            onClick={() => actions.navigate("dashboard")}
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </button>
          <button
            className="flex items-center gap-sm px-md py-sm bg-secondary-container text-on-secondary-container font-bold rounded-lg scale-95 active:scale-100 duration-150 w-full text-left"
            onClick={() => actions.navigate("dashboard")}
          >
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
            <span className="font-label-md text-label-md">Service Records</span>
          </button>
          <button
            className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150 w-full text-left"
            onClick={() => actions.navigate("insights")}
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-md text-label-md">Insights</span>
          </button>
          <button
            className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150 w-full text-left"
            onClick={() => actions.navigate("settings")}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </button>
          <button
            className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150 w-full text-left"
            onClick={() => actions.navigate("profile")}
          >
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-md text-label-md">Profile</span>
          </button>
        </div>
        <div className="mt-auto pt-sm border-t border-outline-variant">
          <button
            className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150 w-full text-left"
            onClick={() => actions.openPanel("support")}
          >
            <span className="material-symbols-outlined">contact_support</span>
            <span className="font-label-md text-label-md">Support</span>
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-surface-container-low p-lg space-y-sm">
          <div className="flex justify-between items-center mb-md">
            <span className="text-headline-sm font-headline-sm font-bold text-on-surface">Menu</span>
            <button
              className="text-on-surface-variant p-xs rounded-lg hover:bg-surface-container-high transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <button
            className="w-full flex items-center gap-sm bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg mb-lg"
            onClick={() => { actions.navigate("create"); setMobileMenuOpen(false); }}
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Record
          </button>
          <button
            className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg w-full text-left"
            onClick={() => { actions.navigate("dashboard"); setMobileMenuOpen(false); }}
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </button>
          <button
            className="flex items-center gap-sm px-sm py-sm bg-secondary-container text-on-secondary-container font-bold rounded-lg w-full text-left"
            onClick={() => { actions.navigate("dashboard"); setMobileMenuOpen(false); }}
          >
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
            <span className="font-label-md text-label-md">Service Records</span>
          </button>
          <button
            className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg w-full text-left"
            onClick={() => { actions.navigate("insights"); setMobileMenuOpen(false); }}
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-md text-label-md">Insights</span>
          </button>
          <button
            className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg w-full text-left"
            onClick={() => { actions.navigate("settings"); setMobileMenuOpen(false); }}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </button>
          <button
            className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg w-full text-left"
            onClick={() => { actions.navigate("profile"); setMobileMenuOpen(false); }}
          >
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-md text-label-md">Profile</span>
          </button>
        </div>
      )}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* TopAppBar */}
        <header className="bg-surface-container sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 border-b border-outline-variant shrink-0">
          <div className="flex items-center gap-md">
            <button
              className="md:hidden text-on-surface-variant hover:bg-surface-container-high p-xs rounded-lg transition-colors cursor-pointer active:opacity-80"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="text-headline-sm font-headline-sm font-bold text-on-surface">ServiceControl</div>
          </div>
          <div className="flex items-center gap-sm text-on-surface-variant">
            <button
              className="p-xs rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80"
              onClick={() => actions.openPanel("notifications")}
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button
              className="p-xs rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80"
              onClick={() => actions.openPanel("help")}
              aria-label="Help"
            >
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div
              className="ml-sm h-8 w-8 rounded-full bg-secondary-container overflow-hidden border border-outline-variant cursor-pointer"
              onClick={() => actions.navigate("profile")}
            >
              <img
                alt="User profile avatar"
                className="w-full h-full object-cover"
                data-alt="A small, circular user profile avatar with a dark blue background and light blue initials, designed for a modern corporate application header."
                src={state.profile.avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuD6aCXPU2Acr99k7oHnicXF2kKhG-YPJVHHb34iaxx2zygfF4WQJfPJYdXnV0s6H_5LZvzmH_2_ZQpYTznre6NShu8qva7484Gml1YfIT0v_-2VsSEPg_7ehTYBpa1AnXi4aAVQDd2LBseqo0I9mK45K0VIeD5L6tOu3YCj3icwfX2bueeQZPXfrQFMmKcjJXYwz4SoPisIBybFQ25y2V3Dwoe_ZXYpEbBvzVO5LntO1hQMk16nL4ip3E84zVI4Xt0qlrPueZ6y6CdG"}
              />
            </div>
          </div>
        </header>
        {children}
      </main>
    </>
  );
}

export function ServiceDetail(props: ServiceDetailProps) {
  const { state, actions } = useAppContext();

  const record = state.records.find((r) => r.id === state.selectedRecordId);
  const technician = record?.assignedTechId
    ? state.technicians.find((t) => t.id === record.assignedTechId)
    : null;

  function handleMarkComplete() {
    if (record) {
      actions.updateRecord(record.id, { status: "completed" });
    }
  }

  function handleDelete() {
    if (record) {
      actions.deleteRecord(record.id);
      actions.navigate("dashboard");
    }
  }

  function handleEdit() {
    actions.navigate("create");
  }

  function getTimelineItems() {
    if (!record) return [];
    const items: Array<{
      label?: string;
      title: string;
      time: string;
      isCurrent?: boolean;
    }> = [];

    items.push({
      label: "CURRENT",
      title: `Status: ${statusConfig(record.status).label}`,
      time: formatDateTime(record.lastUpdate),
      isCurrent: true,
    });

    if (record.assignedTechId && technician) {
      items.push({
        title: `Assigned to ${technician.name}`,
        time: formatDateTime(record.updatedAt),
      });
    }

    items.push({
      title: "Service Request Created",
      time: formatDateTime(record.createdAt),
    });

    return items;
  }

  if (!record) {
    return (
      <ServiceDetailLayout>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-sm">No Record Selected</h2>
            <button
              className="px-md py-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary-fixed transition-colors"
              onClick={() => actions.navigate("dashboard")}
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </ServiceDetailLayout>
    );
  }

  const sConfig = statusConfig(record.status);
  const pConfig = priorityConfig(record.priority);
  const timelineItems = getTimelineItems();

  return (
    <ServiceDetailLayout>
      <div className="flex-1 overflow-y-auto p-gutter lg:p-margin-desktop bg-background text-on-background">
        {/* Page Header / Actions */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-md mb-lg">
          <div>
            <button
              className="inline-flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md mb-sm"
              onClick={actions.goBack}
            >
              <span className="material-symbols-outlined" style={{fontSize: "16px"}}>arrow_back</span>
              Back to Service Records
            </button>
            <div className="flex items-center gap-md flex-wrap">
              <h2 className="font-display-lg text-display-lg text-on-surface m-0">{record.serviceId}</h2>
              <span className={`inline-flex items-center px-sm py-xs rounded-full bg-surface-container-high border border-outline-variant font-label-sm text-label-sm gap-xs ${sConfig.colorClass}`}>
                <span className={`w-2 h-2 rounded-full ${sConfig.dotClass}`}></span>
                {sConfig.label}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-sm w-full lg:w-auto">
            <button
              className="flex-1 lg:flex-none flex items-center justify-center gap-xs px-md py-sm rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"
              onClick={handleDelete}
            >
              <span className="material-symbols-outlined" style={{fontSize: "18px"}}>delete</span>
              Delete
            </button>
            <button
              className="flex-1 lg:flex-none flex items-center justify-center gap-xs px-md py-sm rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"
              onClick={handleEdit}
            >
              <span className="material-symbols-outlined" style={{fontSize: "18px"}}>edit</span>
              Edit
            </button>
            {record.status !== "completed" && (
              <button
                className="flex-1 lg:flex-none flex items-center justify-center gap-xs px-md py-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary-fixed transition-colors"
                onClick={handleMarkComplete}
              >
                <span className="material-symbols-outlined" style={{fontSize: "18px"}}>check_circle</span>
                Mark Complete
              </button>
            )}
          </div>
        </div>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Left Column (Primary Details) */}
          <div className="lg:col-span-8 flex flex-col gap-lg">
            {/* Customer Info Card */}
            <section className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-xs m-0 border-b border-outline-variant pb-sm">
                <span className="material-symbols-outlined text-primary">person</span>
                Customer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">CLIENT NAME</span>
                  <p className="font-body-md text-body-md text-on-surface m-0">{record.customerName}</p>
                </div>
                <div className="space-y-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">CONTACT PERSON</span>
                  <p className="font-body-md text-body-md text-on-surface m-0">—</p>
                </div>
                <div className="space-y-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">PHONE</span>
                  <p className="font-mono-data text-mono-data text-primary m-0">—</p>
                </div>
                <div className="space-y-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">EMAIL</span>
                  <p className="font-body-md text-body-md text-on-surface m-0">—</p>
                </div>
                <div className="md:col-span-2 space-y-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">SERVICE LOCATION</span>
                  <div className="flex items-start gap-sm bg-surface-container-low p-sm rounded-lg border border-outline-variant mt-xs">
                    <span className="material-symbols-outlined text-on-surface-variant mt-xs" style={{fontSize: "20px"}}>location_on</span>
                    <p className="font-body-md text-body-md text-on-surface m-0">{record.location}</p>
                  </div>
                </div>
              </div>
            </section>
            {/* Technical Notes Card */}
            <section className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-xs m-0 border-b border-outline-variant pb-sm">
                <span className="material-symbols-outlined text-primary">build</span>
                Technical Notes &amp; Scope
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-sm">
                <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block mb-xs">EQUIPMENT TYPE</span>
                  <p className="font-body-md text-body-md text-on-surface m-0">—</p>
                </div>
                <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block mb-xs">PRIORITY LEVEL</span>
                  <div className="flex items-center gap-xs">
                    <span className={`material-symbols-outlined ${pConfig.iconClass}`} style={{fontSize: "16px"}}>warning</span>
                    <p className={`font-body-md text-body-md font-semibold m-0 ${pConfig.colorClass}`}>{pConfig.label}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-sm">
                <span className="font-label-sm text-label-sm text-on-surface-variant block">INITIAL DIAGNOSIS</span>
                <p className="font-body-md text-body-md text-on-surface m-0 bg-surface-container-low p-sm rounded-lg border border-outline-variant min-h-[100px]">
                  {record.notes || "No notes recorded."}
                </p>
              </div>
            </section>
          </div>
          {/* Right Column (Meta & Timeline) */}
          <div className="lg:col-span-4 flex flex-col gap-lg">
            {/* Meta Data Card */}
            <section className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface m-0 pb-sm border-b border-outline-variant">Record Details</h3>
              <div className="space-y-md">
                <div className="flex justify-between items-center border-b border-surface-container-high pb-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">ASSIGNED TECHNICIAN</span>
                  <span className="font-body-md text-body-md text-on-surface font-medium flex items-center gap-xs">
                    {technician ? (
                      <>
                        {technician.avatarUrl ? (
                          <img alt={technician.name} className="w-5 h-5 rounded-full" src={technician.avatarUrl} />
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">
                            {technician.initials}
                          </span>
                        )}
                        {technician.name}
                      </>
                    ) : (
                      <span className="text-on-surface-variant italic">Unassigned</span>
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-surface-container-high pb-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">SCHEDULED START</span>
                  <span className="font-mono-data text-mono-data text-on-surface">—</span>
                </div>
                <div className="flex justify-between items-center border-b border-surface-container-high pb-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">ESTIMATED DURATION</span>
                  <span className="font-body-md text-body-md text-on-surface">—</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">CREATED ON</span>
                  <span className="font-mono-data text-mono-data text-on-surface-variant">{formatDateTime(record.createdAt)}</span>
                </div>
              </div>
            </section>
            {/* Timeline Card */}
            <section className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-md flex-1">
              <h3 className="font-headline-sm text-headline-sm text-on-surface m-0 pb-sm border-b border-outline-variant flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary">history</span>
                Activity Timeline
              </h3>
              <div className="relative pl-sm mt-sm">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-outline-variant"></div>
                <ul className="space-y-lg m-0 p-0 list-none">
                  {timelineItems.map((item, index) => (
                    <li key={index} className="relative pl-xl">
                      <div className={`absolute left-0 top-1 w-2 h-2 rounded-full ring-4 ring-surface ${item.isCurrent ? "bg-primary" : "bg-outline-variant"}`}></div>
                      <div className="flex flex-col gap-xs">
                        {item.label && <span className="font-label-sm text-label-sm text-primary">{item.label}</span>}
                        <p className="font-body-md text-body-md text-on-surface m-0 font-medium">{item.title}</p>
                        <span className="font-mono-data text-mono-data text-on-surface-variant">{item.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ServiceDetailLayout>
  );
}
