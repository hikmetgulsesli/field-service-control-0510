import {
  STORAGE_KEY,
  STORAGE_VERSION,
  type PersistedData,
  type StorageError,
  type StorageStatus,
  type ServiceRecord,
  type Technician,
  type UserProfileData,
  type AppSettings,
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

    const migrated = migrateData(parsed);
    if (migrated) {
      return { data: migrated, status: 'ok', error: null };
    }

    return {
      data: buildDefaultData(),
      status: 'corrupt',
      error: createError('ERR_STORAGE_SCHEMA', 'Stored data schema is invalid or version mismatch.'),
    };
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

function migrateData(value: unknown): PersistedData | null {
  if (typeof value !== 'object' || value === null) return null;
  const v = value as Record<string, unknown>;

  // Validate core structure regardless of version
  if (!Array.isArray(v.records)) return null;
  if (!Array.isArray(v.technicians)) return null;
  if (typeof v.profile !== 'object' || v.profile === null) return null;
  if (typeof v.settings !== 'object' || v.settings === null) return null;

  const version = typeof v.version === 'number' ? v.version : 0;

  // Future version: we can't safely migrate down, but we can try to read known fields
  if (version > STORAGE_VERSION) {
    // Gracefully read what we understand and save back as current version
    // This preserves user data rather than wiping it
    return {
      version: STORAGE_VERSION,
      records: v.records as ServiceRecord[],
      technicians: v.technicians as Technician[],
      profile: v.profile as UserProfileData,
      settings: v.settings as AppSettings,
      selectedRecordId: (v.selectedRecordId as string | null) ?? null,
    };
  }

  // Current or older version: upgrade on save
  return {
    version: STORAGE_VERSION,
    records: v.records as ServiceRecord[],
    technicians: v.technicians as Technician[],
    profile: v.profile as UserProfileData,
    settings: v.settings as AppSettings,
    selectedRecordId: (v.selectedRecordId as string | null) ?? null,
  };
}
