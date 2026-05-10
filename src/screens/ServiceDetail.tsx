// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Service Detail
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ServiceDetailProps {}

export function ServiceDetail(props: ServiceDetailProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col h-screen left-0 w-64 py-lg px-md space-y-sm shrink-0">
      <div className="mb-lg px-sm">
      <h1 className="text-headline-sm font-headline-sm font-semibold text-primary">Field Control</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">Ops Command</p>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg mb-md flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add</span>
                  New Record
              </button>
      <div className="flex-1 space-y-xs">
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm bg-secondary-container text-on-secondary-container font-bold rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
      <span className="font-label-md text-label-md">Service Records</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">analytics</span>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-label-md text-label-md">Profile</span>
      </a>
      </div>
      <div className="mt-auto pt-sm border-t border-outline-variant">
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* TopAppBar */}
      <header className="bg-surface-container sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 border-b border-outline-variant shrink-0">
      <div className="flex items-center gap-md">
      {/* Mobile Menu Button (Visible only on small screens) */}
      <button className="md:hidden text-on-surface-variant hover:bg-surface-container-high p-xs rounded-lg transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="text-headline-sm font-headline-sm font-bold text-on-surface">ServiceControl</div>
      </div>
      <div className="flex items-center gap-sm text-on-surface-variant">
      <button className="p-xs rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-xs rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <div className="ml-sm h-8 w-8 rounded-full bg-secondary-container overflow-hidden border border-outline-variant">
      <img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A small, circular user profile avatar with a dark blue background and light blue initials, designed for a modern corporate application header." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6aCXPU2Acr99k7oHnicXF2kKhG-YPJVHHb34iaxx2zygfF4WQJfPJYdXnV0s6H_5LZvzmH_2_ZQpYTznre6NShu8qva7484Gml1YfIT0v_-2VsSEPg_7ehTYBpa1AnXi4aAVQDd2LBseqo0I9mK45K0VIeD5L6tOu3YCj3icwfX2bueeQZPXfrQFMmKcjJXYwz4SoPisIBybFQ25y2V3Dwoe_ZXYpEbBvzVO5LntO1hQMk16nL4ip3E84zVI4Xt0qlrPueZ6y6CdG" />
      </div>
      </div>
      </header>
      {/* Scrollable Canvas */}
      <div className="flex-1 overflow-y-auto p-gutter lg:p-margin-desktop bg-background text-on-background">
      {/* Page Header / Actions */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-md mb-lg">
      <div>
      <a className="inline-flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md mb-sm" href="#">
      <span className="material-symbols-outlined" style={{fontSize: "16px"}}>arrow_back</span>
                              Back to Service Records
                          </a>
      <div className="flex items-center gap-md flex-wrap">
      <h2 className="font-display-lg text-display-lg text-on-surface m-0">SR-2023-8942</h2>
      <span className="inline-flex items-center px-sm py-xs rounded-full bg-surface-container-high border border-outline-variant text-primary font-label-sm text-label-sm gap-xs">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
                                  In Progress
                              </span>
      </div>
      </div>
      <div className="flex items-center gap-sm w-full lg:w-auto">
      <button className="flex-1 lg:flex-none flex items-center justify-center gap-xs px-md py-sm rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>delete</span>
                              Delete
                          </button>
      <button className="flex-1 lg:flex-none flex items-center justify-center gap-xs px-md py-sm rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>edit</span>
                              Edit
                          </button>
      <button className="flex-1 lg:flex-none flex items-center justify-center gap-xs px-md py-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary-fixed transition-colors">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>check_circle</span>
                              Mark Complete
                          </button>
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
      <p className="font-body-md text-body-md text-on-surface m-0">Apex Industrial Corp.</p>
      </div>
      <div className="space-y-xs">
      <span className="font-label-sm text-label-sm text-on-surface-variant">CONTACT PERSON</span>
      <p className="font-body-md text-body-md text-on-surface m-0">Sarah Jenkins (Site Manager)</p>
      </div>
      <div className="space-y-xs">
      <span className="font-label-sm text-label-sm text-on-surface-variant">PHONE</span>
      <p className="font-mono-data text-mono-data text-primary m-0">+1 (555) 019-8372</p>
      </div>
      <div className="space-y-xs">
      <span className="font-label-sm text-label-sm text-on-surface-variant">EMAIL</span>
      <p className="font-body-md text-body-md text-on-surface m-0">s.jenkins@apexind.com</p>
      </div>
      <div className="md:col-span-2 space-y-xs">
      <span className="font-label-sm text-label-sm text-on-surface-variant">SERVICE LOCATION</span>
      <div className="flex items-start gap-sm bg-surface-container-low p-sm rounded-lg border border-outline-variant mt-xs">
      <span className="material-symbols-outlined text-on-surface-variant mt-xs" style={{fontSize: "20px"}}>location_on</span>
      <p className="font-body-md text-body-md text-on-surface m-0">Building 4, Sector 7G<br />1400 Industrial Parkway<br />Detroit, MI 48202</p>
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
      <p className="font-body-md text-body-md text-on-surface m-0">HVAC Chiller Unit (Model X-900)</p>
      </div>
      <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant">
      <span className="font-label-sm text-label-sm text-on-surface-variant block mb-xs">PRIORITY LEVEL</span>
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-tertiary-container" style={{fontSize: "16px"}}>warning</span>
      <p className="font-body-md text-body-md text-tertiary-container font-semibold m-0">High - Production Impact</p>
      </div>
      </div>
      </div>
      <div className="space-y-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant block">INITIAL DIAGNOSIS</span>
      <p className="font-body-md text-body-md text-on-surface m-0 bg-surface-container-low p-sm rounded-lg border border-outline-variant min-h-[100px]">
                                      Client reports primary cooling circuit failure leading to temperature spikes in Server Room B. Initial telemetry indicates a pressure drop in line 4. Suspect faulty expansion valve or minor leak in the manifold assembly. Requires immediate pressure testing and potential part replacement. Ensure all safety protocols for high-pressure coolant handling are active.
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
      <img alt="Mike Ross" className="w-5 h-5 rounded-full" data-alt="A small circular avatar placeholder for technician Mike Ross, featuring a dark blue background with light blue letters MR, matching the corporate dark mode application style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYP8LrDwvzMiBr2EdqlkpL5HjlRIy8f6A86k13-8o4we4YalnnrkyiB8sdQ1QwHry9M0kpjgQhQoJM2IJm8xL0G8EcGA78yPHtwxPifoFa2LZ3p5F-MHdC2YI3DTU1R2aCR0_xFG86nuTQ9CXMAbC-_8RaFxUSI4yB-jnnMy-oddGPM7Baq_KnUjuqpgNdVfQm21Q8i4N-leKe9gAY1zVzo-E33zKDSWq_ayHWmhFPmYZoGl54Tzt_-1JxSDT_h7G9AaEpTrJG8XUY" />
                                          Mike Ross
                                      </span>
      </div>
      <div className="flex justify-between items-center border-b border-surface-container-high pb-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant">SCHEDULED START</span>
      <span className="font-mono-data text-mono-data text-on-surface">Oct 24, 08:00 AM</span>
      </div>
      <div className="flex justify-between items-center border-b border-surface-container-high pb-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant">ESTIMATED DURATION</span>
      <span className="font-body-md text-body-md text-on-surface">4.5 Hours</span>
      </div>
      <div className="flex justify-between items-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant">CREATED ON</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant">Oct 23, 14:32 PM</span>
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
      {/* Timeline Item 1 */}
      <li className="relative pl-xl">
      <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-surface"></div>
      <div className="flex flex-col gap-xs">
      <span className="font-label-sm text-label-sm text-primary">CURRENT</span>
      <p className="font-body-md text-body-md text-on-surface m-0 font-medium">Technician En Route</p>
      <span className="font-mono-data text-mono-data text-on-surface-variant">Oct 24, 07:45 AM</span>
      </div>
      </li>
      {/* Timeline Item 2 */}
      <li className="relative pl-xl">
      <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-outline-variant ring-4 ring-surface"></div>
      <div className="flex flex-col gap-xs">
      <p className="font-body-md text-body-md text-on-surface m-0">Parts Dispatched from Warehouse</p>
      <span className="font-mono-data text-mono-data text-on-surface-variant">Oct 24, 06:30 AM</span>
      </div>
      </li>
      {/* Timeline Item 3 */}
      <li className="relative pl-xl">
      <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-outline-variant ring-4 ring-surface"></div>
      <div className="flex flex-col gap-xs">
      <p className="font-body-md text-body-md text-on-surface m-0">Assigned to Mike Ross</p>
      <span className="font-mono-data text-mono-data text-on-surface-variant">Oct 23, 15:10 PM</span>
      </div>
      </li>
      {/* Timeline Item 4 */}
      <li className="relative pl-xl">
      <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-outline-variant ring-4 ring-surface"></div>
      <div className="flex flex-col gap-xs">
      <p className="font-body-md text-body-md text-on-surface m-0">Service Request Created via Portal</p>
      <span className="font-mono-data text-mono-data text-on-surface-variant">Oct 23, 14:32 PM</span>
      </div>
      </li>
      </ul>
      </div>
      </section>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
