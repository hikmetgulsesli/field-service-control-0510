// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <>
      <div className="flex h-screen w-full">
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-label-md text-label-md font-body-md text-body-md border-r border-outline-variant dark:border-outline-variant flat no shadows hidden md:flex flex-col h-full py-lg px-md space-y-sm w-64 shrink-0 relative z-10">
      <div className="flex items-center gap-sm mb-xl px-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container text-[18px]" data-icon="corporate_fare" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>corporate_fare</span>
      </div>
      <div>
      <h1 className="text-headline-sm font-headline-sm font-semibold text-primary dark:text-primary leading-tight">Field Control</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Ops Command</p>
      </div>
      </div>
      <button className="w-full bg-primary-container hover:bg-inverse-primary text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg flex items-center justify-center gap-xs mb-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container-low">
      <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                  New Record
              </button>
      <div className="flex-1 flex flex-col space-y-xs overflow-y-auto">
      <a className="bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container font-bold rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 transition-transform duration-150 group" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="dashboard" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                      Dashboard
                  </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="assignment">assignment</span>
                      Service Records
                  </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="analytics">analytics</span>
                      Insights
                  </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
                      Settings
                  </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="person">person</span>
                      Profile
                  </a>
      </div>
      <div className="pt-md mt-auto border-t border-outline-variant">
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all rounded-lg flex items-center gap-md px-md py-sm scale-95 active:scale-100 duration-150 group" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="contact_support">contact_support</span>
                      Support
                  </a>
      </div>
      </nav>
      <div className="flex-1 flex flex-col min-w-0 bg-background">
      <header className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary font-headline-sm text-headline-sm font-label-md text-label-md border-b border-outline-variant dark:border-outline-variant flat no shadows sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 shrink-0">
      <div className="flex items-center gap-md md:hidden">
      <span className="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-on-surface">ServiceControl</span>
      </div>
      <div className="hidden md:flex flex-1 max-w-md relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" data-icon="search">search</span>
      <input className="w-full bg-surface-container-high text-on-surface placeholder:text-on-surface-variant border-none rounded-lg pl-10 pr-4 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:outline-none transition-shadow" placeholder="Search service ID, customer..." type="text" />
      </div>
      <div className="flex items-center gap-xs ml-auto">
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 transition-opacity">
      <span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 transition-opacity">
      <span className="material-symbols-outlined text-[20px]" data-icon="help_outline">help_outline</span>
      </button>
      <div className="ml-sm w-8 h-8 rounded-full bg-secondary-container border border-outline-variant overflow-hidden cursor-pointer">
      <img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A professional close-up headshot of a dispatcher in a high-tech corporate environment. The lighting is soft and modern, highlighting focus and reliability. The aesthetic aligns with a dark-mode, high-end technical dashboard ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg1pRjqU2OPFbSD8J29NJCWSuT7VxVQYg4EBenH9qOTtReRo2ZD0HBk6OwieguKqj_32ZaUNvH8m8BvVirM-vNMTnjF9y4_oxNsJTrZJiLVBiN4o6emLmJAWYCVGpqWTfyZgeXhWf4i3lzebBpjyg2lB64CHSda7JfX5VYSAYF_uU0tJjACpKToCDVo1Kx0Q6bUrUlImZMS3J-T2pBJUpYZziudPA3QPn7CRZGJrQKBXEd8NBrN-TzCR9TpEoRe4pr90cGdUo7qSDG" />
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
      <input className="w-full bg-surface-container text-on-surface border border-outline-variant rounded-lg pl-10 pr-4 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:outline-none" placeholder="Search..." type="text" />
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
      <div className="font-display-lg text-display-lg text-on-surface font-mono-data">142</div>
      <div className="font-label-sm text-label-sm text-secondary mt-1 flex items-center gap-xs">
      <span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
                                  +12% from yesterday
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
      <div className="font-display-lg text-display-lg text-on-surface font-mono-data">86</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">Awaiting dispatch</div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-high">
      <div className="h-full bg-primary w-[60%]"></div>
      </div>
      </div>
      <div className="col-span-4 md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between min-h-[140px] relative overflow-hidden hover:border-outline transition-colors">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">In Progress</span>
      <span className="material-symbols-outlined text-tertiary" data-icon="sync">sync</span>
      </div>
      <div>
      <div className="font-display-lg text-display-lg text-on-surface font-mono-data">41</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">Techs on site</div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-high">
      <div className="h-full bg-tertiary w-[30%]"></div>
      </div>
      </div>
      <div className="col-span-4 md:col-span-3 bg-surface border border-error/30 rounded-xl p-md flex flex-col justify-between min-h-[140px] relative overflow-hidden bg-gradient-to-br from-surface to-error-container/10 hover:border-error/50 transition-colors">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-error uppercase tracking-wider">Blocked</span>
      <span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
      </div>
      <div>
      <div className="font-display-lg text-display-lg text-error font-mono-data">15</div>
      <div className="font-label-sm text-label-sm text-error mt-1 flex items-center gap-xs">
      <span className="material-symbols-outlined text-[14px]" data-icon="priority_high">priority_high</span>
                                  Requires immediate attention
                              </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-high">
      <div className="h-full bg-error w-[10%]"></div>
      </div>
      </div>
      </div>
      <div className="flex flex-col bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.2)]">
      <div className="bg-surface-container-low p-md border-b border-outline-variant flex flex-wrap gap-sm items-center justify-between">
      <div className="flex flex-wrap gap-sm">
      <button className="bg-surface border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded flex items-center gap-xs hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined text-[16px]" data-icon="filter_list">filter_list</span>
                                  Status
                              </button>
      <button className="bg-surface border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded flex items-center gap-xs hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined text-[16px]" data-icon="flag">flag</span>
                                  Priority
                              </button>
      <button className="bg-surface border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded flex items-center gap-xs hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined text-[16px]" data-icon="engineering">engineering</span>
                                  Assigned Tech
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
      <tr className="border-b border-outline-variant hover:bg-surface-container-high transition-colors group">
      <td className="py-sm px-md text-primary">SRV-8902</td>
      <td className="py-sm px-md">
      <div className="font-body-md text-body-md text-on-surface">Nexus Industries</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Sector 4, Building A</div>
      </td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center gap-xs px-2 py-0.5 rounded-full bg-error-container/20 border border-error/30 text-error font-label-sm text-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                              Blocked
                                          </span>
      </td>
      <td className="py-sm px-md flex items-center gap-sm">
      <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden">
      <img alt="Tech Avatar" className="w-full h-full object-cover" data-alt="Small circular portrait of a field technician in uniform, shot in a high-contrast corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGOI3yneUZ-jy9WCgxIaXu_ycgWqekFiBOY75LgCLgqtzEbcXdqGzi0VtixyNjP6eN2nQU7AQAnMuecIC0sdlih1YFgJfLGAZ-SuQ8H-_Ey5yRxn24uzf_F4HGPd7ybDHxODirENvfcJJsULy6GXnjFgouwXWfKO2mlURm4pvAtGn_qY4rorjyFcmOZBXceI6QmG7PiCHhCNcqCCUwkslTIUEAexvyztSD3Ip7g2pCfcTHYOA-X7YQ-Nxs2kpdBkwGcPhJMfKkUkYT" />
      </div>
      <span>J. Miller</span>
      </td>
      <td className="py-sm px-md text-right text-on-surface-variant">10:42 AM</td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-high transition-colors group">
      <td className="py-sm px-md text-primary">SRV-8905</td>
      <td className="py-sm px-md">
      <div className="font-body-md text-body-md text-on-surface">OmniCorp Logistics</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Distribution Center West</div>
      </td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center gap-xs px-2 py-0.5 rounded-full bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-sm text-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                                              In Progress
                                          </span>
      </td>
      <td className="py-sm px-md flex items-center gap-sm">
      <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden">
      <img alt="Tech Avatar" className="w-full h-full object-cover" data-alt="Small circular portrait of a diverse field technician, professional and focused, high-contrast dark environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkShUieNFbdxh4CUmon1FoBzLzXYmlFiPXa6PyQmL7dMMA3ZCbLbwUG47AHP96NCvx1wIEF2ETKkEmTKYrWz896heEvEKAz2Tju17gmm-OEPI11bySm2Ts22_gjSCUlNJ7QH2u1IHDjOZReLAmbuVMqtoJDjCmpbuchchCAvva3_L0yuTV2GT3WfDQaa3CmCMUWRKMLGE-N0d8lkNUn8Z__VL_cs6RHucCCL5imfUQkv6hjfsgbd6t5Wh5tTfdwYs6AhK2RPPm17MY" />
      </div>
      <span>A. Chen</span>
      </td>
      <td className="py-sm px-md text-right text-on-surface-variant">09:15 AM</td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-high transition-colors group">
      <td className="py-sm px-md text-primary">SRV-8911</td>
      <td className="py-sm px-md">
      <div className="font-body-md text-body-md text-on-surface">Global Dynamics</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Main CampusHQ</div>
      </td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center gap-xs px-2 py-0.5 rounded-full bg-primary-container/20 border border-primary/30 text-primary font-label-sm text-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                              Ready
                                          </span>
      </td>
      <td className="py-sm px-md flex items-center gap-sm text-on-surface-variant italic">
                                          Unassigned
                                      </td>
      <td className="py-sm px-md text-right text-on-surface-variant">08:30 AM</td>
      </tr>
      <tr className="hover:bg-surface-container-high transition-colors group">
      <td className="py-sm px-md text-primary">SRV-8912</td>
      <td className="py-sm px-md">
      <div className="font-body-md text-body-md text-on-surface">Stark Resourcing</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Facility 9</div>
      </td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center gap-xs px-2 py-0.5 rounded-full bg-primary-container/20 border border-primary/30 text-primary font-label-sm text-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                              Ready
                                          </span>
      </td>
      <td className="py-sm px-md flex items-center gap-sm text-on-surface-variant italic">
                                          Unassigned
                                      </td>
      <td className="py-sm px-md text-right text-on-surface-variant">08:05 AM</td>
      </tr>
      </tbody>
      </table>
      </div>
      <div className="bg-surface-container-low p-sm border-t border-outline-variant flex justify-between items-center px-md text-on-surface-variant font-label-sm text-label-sm">
      <span>Showing 1-4 of 142 records</span>
      <div className="flex gap-xs">
      <button className="p-1 hover:bg-surface-container rounded transition-colors disabled:opacity-50"><span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span></button>
      <button className="p-1 hover:bg-surface-container rounded transition-colors"><span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span></button>
      </div>
      </div>
      </div>
      </main>
      </div>
      </div>
    </>
  );
}
