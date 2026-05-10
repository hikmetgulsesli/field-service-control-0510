import { useEffect, useMemo } from 'react';
import { AppContext } from './contexts/AppContext';
import { useAppState } from './hooks/useAppState';
import type { AppScreen, AppState, ServiceRecord } from './types/domain';
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
      lastNotice?: string | null;
    };
  }
}

interface HashTarget {
  screen: AppScreen;
  selectedRecordId?: string | null;
}

function normalizeHash(hash: string) {
  return hash.replace(/^#\/?/, '').trim().toLowerCase();
}

function recordForHash(records: ServiceRecord[], value?: string) {
  if (!value) return records[0] ?? null;
  const numericIndex = Number(value);
  if (Number.isInteger(numericIndex) && numericIndex > 0) {
    return records[numericIndex - 1] ?? records[0] ?? null;
  }
  return (
    records.find(record => record.id.toLowerCase() === value || record.serviceId.toLowerCase() === value) ??
    records[0] ??
    null
  );
}

function routeFromHash(hash: string, records: ServiceRecord[]): HashTarget | null {
  const route = normalizeHash(hash);
  if (!route) return null;

  if (route.startsWith('service/')) {
    const record = recordForHash(records, route.split('/')[1]);
    return { screen: 'detail', selectedRecordId: record?.id ?? null };
  }

  switch (route) {
    case 'dashboard':
      return { screen: 'dashboard' };
    case 'create':
      return { screen: 'create', selectedRecordId: null };
    case 'detail': {
      const record = recordForHash(records);
      return { screen: 'detail', selectedRecordId: record?.id ?? null };
    }
    case 'empty':
      return { screen: 'empty' };
    case 'insights':
      return { screen: 'insights' };
    case 'settings':
      return { screen: 'settings' };
    case 'error':
      return { screen: 'error' };
    case 'profile':
      return { screen: 'profile' };
    default:
      return null;
  }
}

function titleize(value: string) {
  return value
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

function filterSummary(state: AppState) {
  const status = state.statusFilter === 'all' ? 'all statuses' : titleize(state.statusFilter);
  const priority = state.priorityFilter === 'all' ? 'all priorities' : titleize(state.priorityFilter);
  const tech =
    state.techFilter === 'all'
      ? 'all technicians'
      : state.technicians.find(item => item.id === state.techFilter)?.name ?? state.techFilter;
  return `Showing ${status}, ${priority}, ${tech}.`;
}

function panelContent(panel: string, state: AppState) {
  switch (panel) {
    case 'notifications':
      return {
        title: 'Notifications',
        message: 'Dispatch alerts are enabled. There are no critical notifications right now.',
      };
    case 'help':
      return {
        title: 'Help',
        message: 'Help desk, workflow tips, and field operations support are available.',
      };
    case 'support':
      return {
        title: 'Support',
        message: 'Support channel is ready for field operations issues.',
      };
    case 'filters':
      return {
        title: 'Filters',
        message: filterSummary(state),
      };
    default:
      return {
        title: titleize(panel),
        message: `${titleize(panel)} panel is ready.`,
      };
  }
}

export default function App() {
  const { state, actions } = useAppState();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const applyHashRoute = () => {
      const target = routeFromHash(window.location.hash, state.records);
      if (!target) return;

      if (
        Object.prototype.hasOwnProperty.call(target, 'selectedRecordId') &&
        state.selectedRecordId !== target.selectedRecordId
      ) {
        actions.selectRecord(target.selectedRecordId ?? null);
      }

      if (state.screen !== target.screen) {
        actions.navigate(target.screen);
      }
    };

    applyHashRoute();
    window.addEventListener('hashchange', applyHashRoute);
    return () => window.removeEventListener('hashchange', applyHashRoute);
  }, [actions, state.records, state.screen, state.selectedRecordId]);

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
        lastNotice: state.lastNotice,
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
  const activePanel = state.activePanel ? panelContent(state.activePanel, state) : null;

  return (
    <AppContext.Provider value={{ state, actions }}>
      <main data-setfarm-root="app" className="min-h-screen bg-background text-on-surface">
        {effectiveScreen}
        {activePanel ? (
          <section
            aria-live="polite"
            className="fixed right-4 top-20 z-[100] max-w-sm rounded-lg border border-outline-variant bg-surface-container-high px-md py-sm text-on-surface shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            data-testid="active-panel"
            role="status"
          >
            <div className="flex items-start justify-between gap-md">
              <div>
                <h2 className="font-label-md text-label-md font-bold text-primary">{activePanel.title}</h2>
                <p className="mt-xs font-body-md text-body-md text-on-surface-variant">{activePanel.message}</p>
              </div>
              <button
                aria-label="Close panel"
                className="rounded p-xs text-on-surface-variant hover:bg-surface-container-highest"
                onClick={actions.closePanel}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </section>
        ) : null}
        {state.lastNotice ? (
          <div
            aria-live="polite"
            className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 rounded-lg border border-primary/30 bg-primary-container px-md py-sm font-label-md text-label-md text-on-primary-container shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            data-testid="app-notice"
            role="status"
          >
            {state.lastNotice}
          </div>
        ) : null}
      </main>
    </AppContext.Provider>
  );
}
