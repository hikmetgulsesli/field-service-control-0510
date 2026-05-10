import { useState, useCallback, useEffect } from 'react';
import {
  type AppScreen,
  type AppState,
  type ServiceRecord,
  type Technician,
  type UserProfileData,
  type AppSettings,
  type StorageError,
  type PersistedData,
  DEFAULT_SETTINGS,
  DEFAULT_PROFILE,
} from '../types/domain';
import { loadFromStorage, saveToStorage, clearStorage, retryLoadStorage } from '../utils/storage';

export interface AppActions {
  navigate: (screen: AppScreen) => void;
  goBack: () => void;
  openPanel: (panel: string) => void;
  closePanel: () => void;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: AppState['statusFilter']) => void;
  setPriorityFilter: (priority: string) => void;
  setTechFilter: (tech: string) => void;
  selectRecord: (id: string | null) => void;
  addRecord: (record: Omit<ServiceRecord, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateRecord: (id: string, patch: Partial<ServiceRecord>) => void;
  deleteRecord: (id: string) => void;
  updateProfile: (patch: Partial<UserProfileData>) => void;
  updateSettings: (patch: Partial<AppSettings>) => void;
  retryStorage: () => void;
  clearAndReset: () => void;
  dismissError: () => void;
}

export interface UseAppStateResult {
  state: AppState;
  actions: AppActions;
}

const INITIAL_STATE: AppState = {
  screen: 'dashboard',
  previousScreen: null,
  activePanel: null,
  records: [],
  technicians: [],
  profile: DEFAULT_PROFILE,
  settings: DEFAULT_SETTINGS,
  selectedRecordId: null,
  searchQuery: '',
  statusFilter: 'all',
  priorityFilter: 'all',
  techFilter: 'all',
  lastError: null,
  storageStatus: 'loading',
};

function buildPersistedData(state: AppState): PersistedData {
  return {
    version: 1,
    records: state.records,
    technicians: state.technicians,
    profile: state.profile,
    settings: state.settings,
    selectedRecordId: state.selectedRecordId,
  };
}

export function useAppState(): UseAppStateResult {
  const [state, setState] = useState<AppState>(INITIAL_STATE);

  // Initial load from storage
  useEffect(() => {
    const result = loadFromStorage();
    setState(prev => ({
      ...prev,
      records: result.data.records,
      technicians: result.data.technicians,
      profile: result.data.profile,
      settings: result.data.settings,
      selectedRecordId: result.data.selectedRecordId,
      storageStatus: result.status,
      lastError: result.error,
      screen: result.status === 'error' || result.status === 'corrupt' ? 'error' : prev.screen,
    }));
  }, []);

  // Auto-save on state changes (debounced slightly by React batching)
  useEffect(() => {
    if (state.storageStatus === 'loading') return;
    const data = buildPersistedData(state);
    const error = saveToStorage(data);
    if (error) {
      setState(prev => ({ ...prev, lastError: error, storageStatus: 'error' }));
    }
  }, [state.records, state.technicians, state.profile, state.settings, state.selectedRecordId]);

  const navigate = useCallback((screen: AppScreen) => {
    setState(prev => ({
      ...prev,
      previousScreen: prev.screen,
      screen,
      activePanel: null,
    }));
  }, []);

  const goBack = useCallback(() => {
    setState(prev => {
      const target = prev.previousScreen ?? 'dashboard';
      return {
        ...prev,
        screen: target,
        previousScreen: null,
        activePanel: null,
      };
    });
  }, []);

  const openPanel = useCallback((panel: string) => {
    setState(prev => ({ ...prev, activePanel: panel }));
  }, []);

  const closePanel = useCallback(() => {
    setState(prev => ({ ...prev, activePanel: null }));
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setState(prev => ({ ...prev, searchQuery: query }));
  }, []);

  const setStatusFilter = useCallback((status: AppState['statusFilter']) => {
    setState(prev => ({ ...prev, statusFilter: status }));
  }, []);

  const setPriorityFilter = useCallback((priority: string) => {
    setState(prev => ({ ...prev, priorityFilter: priority }));
  }, []);

  const setTechFilter = useCallback((tech: string) => {
    setState(prev => ({ ...prev, techFilter: tech }));
  }, []);

  const selectRecord = useCallback((id: string | null) => {
    setState(prev => ({ ...prev, selectedRecordId: id }));
  }, []);

  const addRecord = useCallback((record: Omit<ServiceRecord, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    const newRecord: ServiceRecord = {
      ...record,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };
    setState(prev => {
      const next = { ...prev, records: [newRecord, ...prev.records] };
      return next;
    });
  }, []);

  const updateRecord = useCallback((id: string, patch: Partial<ServiceRecord>) => {
    setState(prev => {
      const records = prev.records.map(r =>
        r.id === id ? { ...r, ...patch, updatedAt: new Date().toISOString() } : r
      );
      return { ...prev, records };
    });
  }, []);

  const deleteRecord = useCallback((id: string) => {
    setState(prev => {
      const records = prev.records.filter(r => r.id !== id);
      return { ...prev, records, selectedRecordId: prev.selectedRecordId === id ? null : prev.selectedRecordId };
    });
  }, []);

  const updateProfile = useCallback((patch: Partial<UserProfileData>) => {
    setState(prev => ({ ...prev, profile: { ...prev.profile, ...patch } }));
  }, []);

  const updateSettings = useCallback((patch: Partial<AppSettings>) => {
    setState(prev => ({ ...prev, settings: { ...prev.settings, ...patch } }));
  }, []);

  const retryStorage = useCallback(() => {
    const result = retryLoadStorage();
    setState(prev => ({
      ...prev,
      records: result.data.records,
      technicians: result.data.technicians,
      profile: result.data.profile,
      settings: result.data.settings,
      selectedRecordId: result.data.selectedRecordId,
      storageStatus: result.status,
      lastError: result.error,
      screen: result.status === 'error' || result.status === 'corrupt' ? 'error' : 'dashboard',
    }));
  }, []);

  const clearAndReset = useCallback(() => {
    clearStorage();
    const result = loadFromStorage();
    setState(prev => ({
      ...prev,
      records: result.data.records,
      technicians: result.data.technicians,
      profile: result.data.profile,
      settings: result.data.settings,
      selectedRecordId: result.data.selectedRecordId,
      storageStatus: result.status,
      lastError: result.error,
      screen: 'dashboard',
      searchQuery: '',
      statusFilter: 'all',
      priorityFilter: 'all',
      techFilter: 'all',
    }));
  }, []);

  const dismissError = useCallback(() => {
    setState(prev => ({ ...prev, lastError: null }));
  }, []);

  const actions: AppActions = {
    navigate,
    goBack,
    openPanel,
    closePanel,
    setSearchQuery,
    setStatusFilter,
    setPriorityFilter,
    setTechFilter,
    selectRecord,
    addRecord,
    updateRecord,
    deleteRecord,
    updateProfile,
    updateSettings,
    retryStorage,
    clearAndReset,
    dismissError,
  };

  return { state, actions };
}
