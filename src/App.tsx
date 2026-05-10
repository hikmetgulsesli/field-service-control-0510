import { useEffect, useMemo } from 'react';
import { AppContext } from './contexts/AppContext';
import { useAppState } from './hooks/useAppState';
import { Dashboard } from './screens/Dashboard';
import { CreateEditRecord } from './screens/CreateEditRecord';
import { ServiceDetail } from './screens/ServiceDetail';
import { InsightsAnalytics } from './screens/InsightsAnalytics';
import { Settings } from './screens/Settings';
import { UserProfile } from './screens/UserProfile';
import { EmptyState } from './screens/EmptyState';
import { SystemErrorState } from './screens/SystemErrorState';
import './App.css';

declare global {
  interface Window {
    app?: {
      state: Record<string, unknown>;
      screen: string;
      lastError: unknown;
      storageStatus: string;
      itemCount: number;
      activePanel: string | null;
    };
  }
}

export default function App() {
  const { state, actions } = useAppState();

  // Expose deterministic state for smoke tests (dev only)
  useEffect(() => {
    if ((import.meta as any).env?.DEV) {
      window.app = {
        state: state as unknown as Record<string, unknown>,
        screen: state.screen,
        lastError: state.lastError,
        storageStatus: state.storageStatus,
        itemCount: state.records.length,
        activePanel: state.activePanel,
      };
    }
  }, [state]);

  const screenComponent = useMemo(() => {
    switch (state.screen) {
      case 'dashboard':
        return <Dashboard />;
      case 'create':
        return <CreateEditRecord />;
      case 'detail':
        return <ServiceDetail />;
      case 'insights':
        return <InsightsAnalytics />;
      case 'settings':
        return <Settings />;
      case 'profile':
        return <UserProfile />;
      case 'empty':
        return <EmptyState />;
      case 'error':
        return <SystemErrorState />;
      default:
        return <Dashboard />;
    }
  }, [state.screen]);

  // If no records and not on error screen, show empty state instead of dashboard
  const effectiveScreen =
    state.screen === 'dashboard' && state.records.length === 0 && state.storageStatus === 'ok'
      ? <EmptyState />
      : screenComponent;

  return (
    <AppContext.Provider value={{ state, actions }}>
      <main data-setfarm-root="app" className="min-h-screen bg-background text-on-surface">
        {effectiveScreen}
      </main>
    </AppContext.Provider>
  );
}
