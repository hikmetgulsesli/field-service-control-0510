import {
  STORAGE_KEY,
  STORAGE_VERSION,
  type PersistedData,
  type StorageError,
  type StorageStatus,
  DEFAULT_SETTINGS,
  DEFAULT_PROFILE,
  DEMO_RECORDS,
  DEMO_TECHNICIANS,
} from '../types/domain';

export interface LoadResult {
  data: PersistedData;
  status: StorageStatus;
  error: StorageError | null;
}

function createError(code: string, message: string): StorageError {
  return { code, message, timestamp: new Date().toISOString() };
}

function buildDefaultData(): PersistedData {
  return {
    version: STORAGE_VERSION,
    records: DEMO_RECORDS,
    technicians: DEMO_TECHNICIANS,
    profile: DEFAULT_PROFILE,
    settings: DEFAULT_SETTINGS,
    selectedRecordId: null,
  };
}

export function loadFromStorage(): LoadResult {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const data = buildDefaultData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return { data, status: 'ok', error: null };
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return {
        data: buildDefaultData(),
        status: 'corrupt',
        error: createError('ERR_STORAGE_PARSE', 'Stored data is not valid JSON.'),
      };
    }

    if (!isValidPersistedData(parsed)) {
      return {
        data: buildDefaultData(),
        status: 'corrupt',
        error: createError('ERR_STORAGE_SCHEMA', 'Stored data schema is invalid or version mismatch.'),
      };
    }

    return { data: parsed, status: 'ok', error: null };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown storage access error';
    return {
      data: buildDefaultData(),
      status: 'error',
      error: createError('ERR_STORAGE_ACCESS', message),
    };
  }
}

export function saveToStorage(data: PersistedData): StorageError | null {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return null;
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown storage write error';
    return createError('ERR_STORAGE_WRITE', message);
  }
}

export function clearStorage(): StorageError | null {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown storage clear error';
    return createError('ERR_STORAGE_CLEAR', message);
  }
}

export function retryLoadStorage(): LoadResult {
  clearStorage();
  return loadFromStorage();
}

function isValidPersistedData(value: unknown): value is PersistedData {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  if (v.version !== STORAGE_VERSION) return false;
  if (!Array.isArray(v.records)) return false;
  if (!Array.isArray(v.technicians)) return false;
  if (typeof v.profile !== 'object' || v.profile === null) return false;
  if (typeof v.settings !== 'object' || v.settings === null) return false;
  return true;
}
