import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppContext, useAppContext } from './AppContext';
import { useAppState } from '../hooks/useAppState';

describe('AppContext', () => {
  it('throws when useAppContext is used outside provider', () => {
    function BadConsumer() {
      useAppContext();
      return null;
    }
    expect(() => render(<BadConsumer />)).toThrow(
      'useAppContext must be used within an AppProvider'
    );
  });

  it('provides state and actions to children', () => {
    function Consumer() {
      const ctx = useAppContext();
      return (
        <div>
          <span data-testid="screen">{ctx.state.screen}</span>
          <button data-testid="btn" onClick={() => ctx.actions.navigate('settings')}>
            Go
          </button>
        </div>
      );
    }

    function Wrapper() {
      const { state, actions } = useAppState();
      return (
        <AppContext.Provider value={{ state, actions }}>
          <Consumer />
        </AppContext.Provider>
      );
    }

    render(<Wrapper />);
    expect(screen.getByTestId('screen').textContent).toBe('dashboard');
  });
});
