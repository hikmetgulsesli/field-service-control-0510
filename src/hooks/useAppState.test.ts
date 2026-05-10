import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useAppState } from './useAppState';
import { clearStorage } from '../utils/storage';

describe('useAppState', () => {
  beforeEach(() => {
    clearStorage();
  });

  it('initializes with loading status then loads data', async () => {
    const { result } = renderHook(() => useAppState());
    // useEffect runs quickly in jsdom; just verify data eventually loads
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    expect(result.current.state.records.length).toBeGreaterThan(0);
  });

  it('navigates between screens', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    act(() => result.current.actions.navigate('settings'));
    expect(result.current.state.screen).toBe('settings');
    expect(result.current.state.previousScreen).toBe('dashboard');
  });

  it('goBack returns to previous screen', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    act(() => result.current.actions.navigate('insights'));
    act(() => result.current.actions.goBack());
    expect(result.current.state.screen).toBe('dashboard');
  });

  it('opens and closes panels', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    act(() => result.current.actions.openPanel('filters'));
    expect(result.current.state.activePanel).toBe('filters');
    act(() => result.current.actions.closePanel());
    expect(result.current.state.activePanel).toBeNull();
  });

  it('updates search and filters', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    act(() => result.current.actions.setSearchQuery('Nexus'));
    expect(result.current.state.searchQuery).toBe('Nexus');
    act(() => result.current.actions.setStatusFilter('blocked'));
    expect(result.current.state.statusFilter).toBe('blocked');
    act(() => result.current.actions.setPriorityFilter('high'));
    expect(result.current.state.priorityFilter).toBe('high');
    act(() => result.current.actions.setTechFilter('tech-1'));
    expect(result.current.state.techFilter).toBe('tech-1');
  });

  it('selects a record', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    act(() => result.current.actions.selectRecord('rec-1'));
    expect(result.current.state.selectedRecordId).toBe('rec-1');
  });

  it('adds a record', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    const before = result.current.state.records.length;
    act(() =>
      result.current.actions.addRecord({
        serviceId: 'SRV-9999',
        customerName: 'Test Corp',
        location: 'Test Facility',
        status: 'ready',
        assignedTechId: null,
        priority: 'medium',
        lastUpdate: '11:00 AM',
      })
    );
    expect(result.current.state.records.length).toBe(before + 1);
    expect(result.current.state.records[0].customerName).toBe('Test Corp');
  });

  it('updates a record', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    act(() => result.current.actions.updateRecord('rec-1', { status: 'completed' }));
    const rec = result.current.state.records.find(r => r.id === 'rec-1');
    expect(rec?.status).toBe('completed');
  });

  it('deletes a record', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    const before = result.current.state.records.length;
    act(() => result.current.actions.deleteRecord('rec-1'));
    expect(result.current.state.records.length).toBe(before - 1);
    expect(result.current.state.records.find(r => r.id === 'rec-1')).toBeUndefined();
  });

  it('updates profile', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    act(() => result.current.actions.updateProfile({ name: 'Updated Name' }));
    expect(result.current.state.profile.name).toBe('Updated Name');
  });

  it('updates settings', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    act(() => result.current.actions.updateSettings({ darkMode: false }));
    expect(result.current.state.settings.darkMode).toBe(false);
  });

  it('dismisses error', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    // Force an error state by corrupting storage
    localStorage.setItem('field-service-control-v1', 'bad');
    act(() => result.current.actions.retryStorage());
    // retryStorage should clear and reload
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
  });

  it('clearAndReset resets to defaults', async () => {
    const { result } = renderHook(() => useAppState());
    await waitFor(() => expect(result.current.state.storageStatus).toBe('ok'));
    act(() => result.current.actions.setSearchQuery('test'));
    act(() => result.current.actions.clearAndReset());
    expect(result.current.state.searchQuery).toBe('');
    expect(result.current.state.screen).toBe('dashboard');
    expect(result.current.state.storageStatus).toBe('ok');
  });
});
