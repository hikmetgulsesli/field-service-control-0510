// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty State
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface EmptyStateProps {}

export function EmptyState(props: EmptyStateProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-full py-lg px-md space-y-sm w-64 bg-surface-container-low border-r border-outline-variant flex-shrink-0 z-40">
      {/* Header */}
      <div className="flex items-center gap-sm mb-xl px-sm">
      <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center flex-shrink-0 overflow-hidden">
      <img alt="Organization Logo" className="w-full h-full object-cover" data-alt="A stylized, minimalist 3D rendering of a geometric corporate logo featuring sharp angles and clean lines. The logo is predominantly cool metallic grey with subtle electric blue glowing accents, set against a dark, moody studio background with a single spotlight overhead, exuding professionalism and authoritative tech precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGi8DclAnI61tO60SJInJT2M8jGfNjt_ALFkYMpXOeWHXV1WncZkZJiG9cK3t93ufxFMIvpIgZ7ZwrTPw20zowNMx0fPk6W7VTVH5Sw4JZDzmdzXht0dst7IhdcWEN34cEYF_LZ2BE0BAxfZ7-lvcQjDZo76S9205wmN4Jzyov0GEFlzQKfLqRWqncU7hDbnBQbeYBz3N_XrUa08ERx0zjvdY6nG2d3Crz8qBa8SL610azqor_QD169daowOwvTwyVK_mDgvsLdtSf" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-primary truncate">Field Control</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant truncate">Ops Command</span>
      </div>
      </div>
      {/* CTA */}
      <button className="w-full mb-lg py-md px-md bg-primary-container text-on-primary-container font-label-md text-label-md rounded hover:bg-inverse-primary transition-colors flex items-center justify-center gap-sm shadow-[0px_4px_12px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]">add</span>
                  New Record
              </button>
      {/* Main Nav Links */}
      <div className="flex-1 space-y-xs overflow-y-auto">
      {/* Active Tab: Dashboard */}
      <a className="flex items-center gap-md px-md py-sm bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold rounded-lg scale-95 active:scale-100 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 rounded-lg" href="#">
      <span className="material-symbols-outlined">assignment</span>
                      Service Records
                  </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 rounded-lg" href="#">
      <span className="material-symbols-outlined">analytics</span>
                      Insights
                  </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 rounded-lg" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 rounded-lg" href="#">
      <span className="material-symbols-outlined">person</span>
                      Profile
                  </a>
      </div>
      {/* Footer Nav */}
      <div className="pt-sm border-t border-outline-variant mt-auto">
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-all scale-95 active:scale-100 duration-150 rounded-lg" href="#">
      <span className="material-symbols-outlined">contact_support</span>
                      Support
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 bg-surface-container border-b border-outline-variant flex-shrink-0">
      {/* Left: Brand (Mobile primarily, or desktop search alignment) */}
      <div className="flex items-center gap-md">
      <button className="md:hidden text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded active:opacity-80 transition-opacity">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">ServiceControl</span>
      </div>
      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded active:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-container">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded active:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-container">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <div className="ml-sm w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant cursor-pointer active:opacity-80 transition-opacity">
      <img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A tightly cropped, high-contrast portrait of a male professional in a dimly lit, dark-mode studio setting. The lighting is dramatic, with a subtle rim light defining his features against a deep slate background. The color palette is muted, focusing on deep blues and cool shadows, projecting a serious, focused, and authoritative mood suitable for a corporate dashboard avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkC63EjiCmC7smvcxNWx0X1CJxvT_Dhp4OukyDz2MSAYmbGbTJZHPz7UmoO_qwXpaIc9dnfBrg6gqyEQY9W4E6m2AcopaAK7POYAfCWv7vgMVu15g1WHq5V7_2MQy-HDoYsH72zDvIykTSza0Zwwd4Ig81rkLUw2KB4Yxg5L9iCW2rQXfysm9XiUY3a5iV1sX3SPJhJ6Y9r_ESxmHKARgH4LVs13FzoVy5_ajPcUgG2_XrkH9jycYJpSCBx-5-nVsJ2izNcP3VLEOv" />
      </div>
      </div>
      </header>
      {/* Canvas: Empty State Content */}
      <main className="flex-1 overflow-y-auto flex items-center justify-center p-lg relative z-0">
      {/* Ambient Background Glow (Subtle, professional) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
      <div className="w-96 h-96 bg-primary-container rounded-full blur-[120px]"></div>
      </div>
      {/* Empty State Bento/Glass Card */}
      <div className="relative z-10 max-w-2xl w-full bg-surface/80 backdrop-blur-md border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center shadow-[0px_4px_12px_rgba(0,0,0,0.5)]">
      {/* Illustration Wrapper */}
      <div className="w-48 h-48 mb-xl rounded-xl overflow-hidden bg-surface-container border border-surface-variant shadow-inner relative flex items-center justify-center">
      <img className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" data-alt="A sleek, minimal 3D rendering of an open, empty metallic clipboard or digital tablet floating in a dark, atmospheric void. The object is illuminated by a soft, cool blue rim light that highlights its pristine edges, contrasting with the deep charcoal and obsidian background. Small, abstract glowing particles drift slowly around it, suggesting digital data waiting to be captured. The aesthetic is modern corporate, highly polished, and evokes a sense of readiness and technological precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD-JKe701MfM1avW3l76C-ItbxjOWtVUpHEG0ORoRFJ6Jtz7jCYQ2TqluG5o0mPdPruHBbJfX2hJ2rJRPHuvgIBQo5jjbduiBVMY7j9AYWdZERRYVkDrsrlgoHMsH1jnGaOA6FAu3MntHiOSuXfG-Je2Fj6AYFL2HZ9Ox8fbCX8jpnmJLkTpeAVgca99oBdbBd_bAYm_Onf-IBlECBim_ReFbFPrx7XWHgRGXLAgPbRiDyZtF0qFwGJuey0Ai7PjJ4VQScHZGTKrOX" />
      <div className="relative z-10 w-20 h-20 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center shadow-[0px_4px_12px_rgba(0,0,0,0.5)]">
      <span className="material-symbols-outlined text-[40px] text-on-surface-variant">inbox</span>
      </div>
      </div>
      {/* Text Content */}
      <h2 className="font-display-lg text-display-lg text-on-surface mb-sm">No Records Found</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto mb-xl">
                          Your operations dashboard is currently empty. Initialize your workflow by creating a new service record to track field dispatches and metrics.
                      </p>
      {/* Primary Action */}
      <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-xl py-lg rounded hover:bg-inverse-primary transition-colors flex items-center justify-center gap-md shadow-[0px_4px_12px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background group">
      <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">post_add</span>
                          Create Your First Record
                      </button>
      </div>
      </main>
      </div>
    </>
  );
}
