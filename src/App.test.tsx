import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { clearStorage } from './utils/storage';

describe('App shell', () => {
  beforeEach(() => {
    clearStorage();
    delete (window as any).app;
  });

  it('renders without crashing', () => {
    render(<App />);
    expect(document.querySelector('[data-setfarm-root="app"]')).toBeInTheDocument();
  });

  it('exposes window.app with required keys', () => {
    render(<App />);
    expect(window.app).toBeDefined();
    expect(window.app).toHaveProperty('state');
    expect(window.app).toHaveProperty('screen');
    expect(window.app).toHaveProperty('lastError');
    expect(window.app).toHaveProperty('storageStatus');
    expect(window.app).toHaveProperty('itemCount');
    expect(window.app).toHaveProperty('activePanel');
  });

  it('starts on dashboard screen when data exists', () => {
    render(<App />);
    expect(window.app?.screen).toBe('dashboard');
  });

  it('exposes itemCount matching records length', () => {
    render(<App />);
    expect(window.app?.itemCount).toBeGreaterThan(0);
  });
});
