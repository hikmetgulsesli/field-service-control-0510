import { describe, it, expect, beforeEach } from 'vitest';
import {
  loadFromStorage,
  saveToStorage,
  clearStorage,
  retryLoadStorage,
} from './storage';
import { STORAGE_KEY, DEMO_RECORDS, DEMO_TECHNICIANS, DEFAULT_PROFILE, DEFAULT_SETTINGS } from '../types/domain';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loads default data when localStorage is empty', () => {
    const result = loadFromStorage();
    expect(result.status).toBe('ok');
    expect(result.error).toBeNull();
    expect(result.data.records).toEqual(DEMO_RECORDS);
    expect(result.data.technicians).toEqual(DEMO_TECHNICIANS);
    expect(result.data.profile).toEqual(DEFAULT_PROFILE);
    expect(result.data.settings).toEqual(DEFAULT_SETTINGS);
  });

  it('saves and reloads data', () => {
    const data = {
      version: 1,
      records: DEMO_RECORDS,
      technicians: DEMO_TECHNICIANS,
      profile: DEFAULT_PROFILE,
      settings: DEFAULT_SETTINGS,
      selectedRecordId: null,
    };
    const saveError = saveToStorage(data);
    expect(saveError).toBeNull();

    const result = loadFromStorage();
    expect(result.status).toBe('ok');
    expect(result.data.records).toEqual(DEMO_RECORDS);
  });

  it('returns corrupt status for invalid JSON', () => {
    localStorage.setItem(STORAGE_KEY, 'not-json');
    const result = loadFromStorage();
    expect(result.status).toBe('corrupt');
    expect(result.error).not.toBeNull();
    expect(result.error?.code).toBe('ERR_STORAGE_PARSE');
  });

  it('returns corrupt status for wrong schema version', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 99 }));
    const result = loadFromStorage();
    expect(result.status).toBe('corrupt');
    expect(result.error?.code).toBe('ERR_STORAGE_SCHEMA');
  });

  it('clears storage and resets', () => {
    saveToStorage({
      version: 1,
      records: [],
      technicians: [],
      profile: DEFAULT_PROFILE,
      settings: DEFAULT_SETTINGS,
      selectedRecordId: null,
    });
    const clearError = clearStorage();
    expect(clearError).toBeNull();
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });

  it('retryLoadStorage clears and loads defaults', () => {
    localStorage.setItem(STORAGE_KEY, 'bad-data');
    const result = retryLoadStorage();
    expect(result.status).toBe('ok');
    expect(result.data.records.length).toBeGreaterThan(0);
  });

  it('persists data across loads', () => {
    const custom = {
      version: 1,
      records: [{ ...DEMO_RECORDS[0], customerName: 'Custom Corp' }],
      technicians: DEMO_TECHNICIANS,
      profile: DEFAULT_PROFILE,
      settings: DEFAULT_SETTINGS,
      selectedRecordId: 'rec-1',
    };
    saveToStorage(custom);
    const result = loadFromStorage();
    expect(result.data.selectedRecordId).toBe('rec-1');
    expect(result.data.records[0].customerName).toBe('Custom Corp');
  });
});
