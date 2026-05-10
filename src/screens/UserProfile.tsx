// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: User Profile
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface UserProfileProps {}

export function UserProfile(props: UserProfileProps) {
  const { state, actions } = useAppContext();
  const [confirmLogout, setConfirmLogout] = useState(false);

  const profile = state.profile;

  const handleClose = () => {
    actions.goBack();
  };

  const handleLogout = () => {
    if (!confirmLogout) {
      setConfirmLogout(true);
      return;
    }
    actions.clearAndReset();
    setConfirmLogout(false);
  };

  return (
    <>
      {/* Profile Panel Overlay */}
      <div className="w-full max-w-[600px] bg-surface-container rounded-xl border border-outline-variant shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative flex flex-col overflow-hidden">
        {/* Action Header */}
        <div className="flex justify-between items-center px-lg py-md border-b border-outline-variant/50 bg-surface-container-low">
          <span className="font-headline-sm text-headline-sm text-on-surface">Profile Identity</span>
          <button
            onClick={handleClose}
            aria-label="Close Profile"
            className="w-[32px] h-[32px] flex items-center justify-center rounded bg-surface-container-highest hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors border border-outline-variant"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        {/* Identity Hero Section */}
        <div className="flex flex-col md:flex-row items-center p-xl border-b border-outline-variant/30 gap-lg bg-gradient-to-b from-surface-container-low to-surface-container">
          <div className="relative">
            <div className="w-[100px] h-[100px] rounded-full border-2 border-primary-container p-[2px] bg-surface">
              {profile.avatarUrl ? (
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt={profile.name}
                  src={profile.avatarUrl}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-2xl font-semibold">
                  {profile.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
              )}
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-xs right-xs w-[18px] h-[18px] bg-primary rounded-full border-2 border-surface-container" aria-label="Online status"></div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">{profile.name}</h1>
            <div className="flex items-center gap-sm mt-xs">
              <span className="font-label-md text-label-md text-primary bg-primary-container/20 border border-primary-container/30 px-sm py-[2px] rounded">{profile.role}</span>
              <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-[4px]">
                <span className="material-symbols-outlined text-[14px]">location_on</span> {profile.sector}
              </span>
            </div>
          </div>
        </div>
        {/* Settings Bento Grid */}
        <div className="p-lg grid grid-cols-1 sm:grid-cols-2 gap-md bg-surface-container">
          {/* Account Settings */}
          <button
            onClick={() => actions.navigate("settings")}
            className="flex items-start gap-md p-md bg-surface-container-high border border-outline-variant/50 rounded-lg hover:bg-surface-container-highest hover:border-primary-container/50 transition-all text-left group"
          >
            <div className="w-[36px] h-[36px] flex items-center justify-center rounded bg-surface-variant text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
            </div>
            <div className="flex-1">
              <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-[2px]">Account Details</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Credentials &amp; identifiers</p>
            </div>
          </button>
          {/* Security & Access */}
          <button
            onClick={() => actions.navigate("settings")}
            className="flex items-start gap-md p-md bg-surface-container-high border border-outline-variant/50 rounded-lg hover:bg-surface-container-highest hover:border-primary-container/50 transition-all text-left group"
          >
            <div className="w-[36px] h-[36px] flex items-center justify-center rounded bg-surface-variant text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined text-[20px]">shield_person</span>
            </div>
            <div className="flex-1">
              <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-[2px]">Security Config</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">2FA &amp; access logs</p>
            </div>
          </button>
          {/* Notification Preferences */}
          <button
            onClick={() => actions.navigate("settings")}
            className="flex items-start gap-md p-md bg-surface-container-high border border-outline-variant/50 rounded-lg hover:bg-surface-container-highest hover:border-primary-container/50 transition-all text-left group"
          >
            <div className="w-[36px] h-[36px] flex items-center justify-center rounded bg-surface-variant text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications_active</span>
            </div>
            <div className="flex-1">
              <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-[2px]">Alert Protocols</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Dispatch routing rules</p>
            </div>
          </button>
          {/* System Preferences */}
          <button
            onClick={() => actions.navigate("settings")}
            className="flex items-start gap-md p-md bg-surface-container-high border border-outline-variant/50 rounded-lg hover:bg-surface-container-highest hover:border-primary-container/50 transition-all text-left group"
          >
            <div className="w-[36px] h-[36px] flex items-center justify-center rounded bg-surface-variant text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </div>
            <div className="flex-1">
              <h3 className="font-body-md text-body-md font-semibold text-on-surface mb-[2px]">Interface Logic</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Theme &amp; localization</p>
            </div>
          </button>
        </div>
        {/* Footer Actions */}
        <div className="p-lg bg-surface-container-low border-t border-outline-variant">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-sm py-sm rounded border border-error-container bg-surface-container-high text-error hover:bg-error-container hover:text-on-error-container transition-colors font-label-md text-label-md"
          >
            <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>logout</span>
            {confirmLogout ? "Confirm Terminate Session" : "Terminate Session"}
          </button>
          {confirmLogout && (
            <button
              onClick={() => setConfirmLogout(false)}
              className="w-full mt-sm flex items-center justify-center gap-sm py-sm rounded border border-outline-variant bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </>
  );
}
