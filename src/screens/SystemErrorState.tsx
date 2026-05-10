// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: System Error State
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SystemErrorStateProps {}

export function SystemErrorState(props: SystemErrorStateProps) {
  return (
    <>
      {/* Error Canvas Container */}
      <main className="w-full max-w-[480px]">
      {/* Surface Card for Error State */}
      <div className="bg-surface-container border border-surface-variant rounded-xl p-xl flex flex-col items-center text-center shadow-[0px_4px_12px_rgba(0,0,0,0.5)]">
      {/* Alert Icon Container */}
      <div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center mb-lg ring-4 ring-background">
      <span className="material-symbols-outlined text-[32px] text-on-error-container" style={{fontVariationSettings: "'FILL' 1"}}>
                          error
                      </span>
      </div>
      {/* Error Messaging */}
      <h1 className="font-headline-md text-headline-md text-on-surface mb-sm">
                      Failed to load data
                  </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-sm">
                      A critical storage or runtime error has prevented the application from retrieving the necessary operational data. 
                  </p>
      {/* Action Group */}
      <div className="flex flex-col w-full sm:flex-row items-center justify-center gap-md">
      {/* Secondary Action */}
      <button className="w-full sm:w-auto px-lg py-[10px] rounded-lg border border-outline-variant bg-transparent text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none focus:ring-offset-2 focus:ring-offset-background">
                          Clear Storage &amp; Reset
                      </button>
      {/* Primary Action */}
      <button className="w-full sm:w-auto px-lg py-[10px] rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-inverse-primary transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">refresh</span>
                          Retry
                      </button>
      </div>
      {/* Technical Detail Toggle (Optional standard UX pattern for corporate errors) */}
      <div className="mt-lg pt-lg border-t border-surface-variant w-full">
      <p className="font-mono-data text-mono-data text-outline flex items-center justify-center gap-xs cursor-not-allowed">
      <span className="material-symbols-outlined text-[14px]">terminal</span>
                          ERR_STORAGE_TIMEOUT_0x9B
                      </p>
      </div>
      </div>
      </main>
    </>
  );
}
