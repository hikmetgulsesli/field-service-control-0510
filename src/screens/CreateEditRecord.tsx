// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Create / Edit Record
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface CreateEditRecordProps {}

export function CreateEditRecord(props: CreateEditRecordProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-screen left-0 w-64 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant dark:border-outline-variant py-lg px-md space-y-sm sticky top-0 z-40">
      <div className="flex items-center gap-sm mb-xl px-sm">
      <span className="material-symbols-outlined text-primary dark:text-primary" style={{fontVariationSettings: "'FILL' 1"}}>hexagon</span>
      <div>
      <h1 className="text-headline-sm font-headline-sm font-semibold text-primary dark:text-primary leading-tight">Field Control</h1>
      <p className="text-label-sm font-label-sm text-on-surface-variant">Ops Command</p>
      </div>
      </div>
      <button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg mb-lg hover:bg-inverse-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">add</span>
                  New Record
              </button>
      <div className="flex-1 space-y-xs">
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container font-bold rounded-lg scale-95 active:scale-100 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
      <span className="font-label-md text-label-md">Service Records</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">analytics</span>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-label-md text-label-md">Profile</span>
      </a>
      </div>
      <div className="mt-auto pt-sm border-t border-outline-variant">
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg scale-95 active:scale-100 duration-150" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full min-w-0">
      {/* TopAppBar (Mobile & Desktop) */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant">
      <div className="flex items-center gap-sm md:hidden">
      <button className="text-on-surface-variant p-xs rounded-lg hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <span className="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-on-surface">ServiceControl</span>
      </div>
      <div className="hidden md:flex items-center">
      <span className="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-on-surface">ServiceControl</span>
      </div>
      <div className="flex items-center gap-sm">
      <div className="relative hidden sm:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
      <input className="bg-surface-container-highest border-none text-on-surface font-body-md text-body-md rounded-lg pl-xl pr-sm py-[6px] focus:ring-2 focus:ring-primary-container focus:outline-none w-48 placeholder-on-surface-variant" placeholder="Search..." type="text" />
      </div>
      <button className="text-on-surface-variant p-xs rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant p-xs rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <img alt="User profile avatar" className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-xs cursor-pointer" data-alt="A small circular profile avatar showing a professional person against a neutral background. The lighting is soft and corporate, fitting a dark mode administrative dashboard interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD23ttr7vvAM5iDm_l2XeaGpT2dDKzqzZReKTcqI2Zu1ExTHu5nsIMS0wHicrBPLOmyZApgS7SrRwK0UwJpYHr79Qs8GvyFUhryugGoeBuPiP1APYYhn9RNcJbzJ84HcLaFffhS2oU6qfbpNWvT-6BSGJ_gTkCg9kCNmvyhuIX48DSDudgRMM4ZA8OGsV4zNOBe6ndtKQlXc-3PlzsohgMYu57yKsqRMS-65d9SvTuinaXGRzuxJjzsnz1CHs3XGGjl3IA7sVPjp4Iv" />
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-y-auto">
      {/* Breadcrumb & Header */}
      <div className="max-w-4xl mx-auto mb-lg">
      <div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md mb-xs">
      <a className="hover:text-primary transition-colors" href="#">Service Records</a>
      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      <span className="text-on-surface">Create Record</span>
      </div>
      <h2 className="font-display-lg text-display-lg text-on-surface">New Service Record</h2>
      </div>
      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-surface border border-outline-variant rounded-xl overflow-hidden">
      <form action="#" method="POST">
      {/* Form Section: Details */}
      <div className="p-lg md:p-xl space-y-lg border-b border-outline-variant">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Client &amp; Service Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Customer Name */}
      <div className="space-y-sm">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="customer_name">Customer Name <span className="text-error">*</span></label>
      <input className="w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-lg px-md py-sm font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none transition-shadow" id="customer_name" name="customer_name" placeholder="e.g. Acme Corp" type="text" />
      <p className="text-error font-label-sm text-label-sm flex items-center gap-xs mt-xs">
      <span className="material-symbols-outlined text-[14px]">error</span>
                                          Customer name is required.
                                      </p>
      </div>
      {/* Service Type */}
      <div className="space-y-sm">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="service_type">Service Type <span className="text-error">*</span></label>
      <div className="relative">
      <select className="w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-lg px-md py-sm font-body-md text-body-md appearance-none focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none transition-shadow" id="service_type" name="service_type">
      <option disabled={true} selected={true} value="">Select service type</option>
      <option value="maintenance">Preventative Maintenance</option>
      <option value="repair">Emergency Repair</option>
      <option value="installation">New Installation</option>
      <option value="inspection">Site Inspection</option>
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">arrow_drop_down</span>
      </div>
      </div>
      </div>
      {/* Priority Radio Buttons */}
      <div className="space-y-sm pt-sm">
      <label className="block font-label-md text-label-md text-on-surface mb-xs">Priority Level</label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
      <label className="relative flex items-center gap-sm p-sm rounded-lg border border-outline-variant bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors focus-within:ring-2 focus-within:ring-primary-container">
      <input className="peer sr-only" name="priority" type="radio" value="low" />
      <div className="w-4 h-4 rounded-full border border-outline-variant flex items-center justify-center peer-checked:border-primary-container peer-checked:bg-primary-container transition-colors">
      <div className="w-1.5 h-1.5 rounded-full bg-surface hidden peer-checked:block"></div>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Routine</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">SLA: 48 hours</span>
      </div>
      </label>
      <label className="relative flex items-center gap-sm p-sm rounded-lg border border-primary bg-surface-container cursor-pointer focus-within:ring-2 focus-within:ring-primary-container">
      <input checked={true} className="peer sr-only" name="priority" type="radio" value="medium" />
      <div className="w-4 h-4 rounded-full border border-primary-container bg-primary-container flex items-center justify-center transition-colors">
      <div className="w-1.5 h-1.5 rounded-full bg-surface block"></div>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Standard</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">SLA: 24 hours</span>
      </div>
      </label>
      <label className="relative flex items-center gap-sm p-sm rounded-lg border border-outline-variant bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors focus-within:ring-2 focus-within:ring-primary-container">
      <input className="peer sr-only" name="priority" type="radio" value="high" />
      <div className="w-4 h-4 rounded-full border border-outline-variant flex items-center justify-center peer-checked:border-error peer-checked:bg-error transition-colors">
      <div className="w-1.5 h-1.5 rounded-full bg-surface hidden peer-checked:block"></div>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-error">Critical</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">SLA: 4 hours</span>
      </div>
      </label>
      </div>
      </div>
      {/* Description Textarea */}
      <div className="space-y-sm pt-sm">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="description">Issue Description</label>
      <textarea className="w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-lg px-md py-sm font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none transition-shadow resize-y" id="description" name="description" placeholder="Provide detailed context for the field technician..." rows={4}></textarea>
      </div>
      </div>
      {/* Form Section: Assignment */}
      <div className="p-lg md:p-xl bg-surface-container-lowest space-y-lg">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Dispatch Assignment</h3>
      {/* Assigned Technician */}
      <div className="space-y-sm max-w-md">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="technician">Assigned Technician</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">engineering</span>
      <select className="w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-lg pl-[40px] pr-md py-sm font-body-md text-body-md appearance-none focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none transition-shadow" id="technician" name="technician">
      <option disabled={true} selected={true} value="">Unassigned (Queue)</option>
      <option value="tech_1">Sarah Jenkins (Available)</option>
      <option value="tech_2">Michael Chang (On Route)</option>
      <option value="tech_3">David Rodriguez (Available)</option>
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">arrow_drop_down</span>
      </div>
      </div>
      </div>
      {/* Form Actions */}
      <div className="px-lg py-md bg-surface border-t border-outline-variant flex items-center justify-end gap-sm">
      <button className="px-md py-sm rounded-lg border border-surface-variant text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none" type="button">
                                  Cancel
                              </button>
      <button className="px-md py-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-inverse-primary transition-colors focus:ring-2 focus:ring-primary-fixed-dim focus:outline-none flex items-center gap-xs shadow-[0_4px_12px_rgba(0,0,0,0.2)]" type="submit">
      <span className="material-symbols-outlined text-[18px]">save</span>
                                  Save Record
                              </button>
      </div>
      </form>
      </div>
      <div className="h-xl"></div> {/* Bottom padding */}
      </main>
      </div>
    </>
  );
}
