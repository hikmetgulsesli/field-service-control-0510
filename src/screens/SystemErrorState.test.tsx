import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppContext } from "../contexts/AppContext";
import { SystemErrorState } from "./SystemErrorState";
import type { AppState } from "../types/domain";
import type { AppActions } from "../hooks/useAppState";

const mockRetryStorage = vi.fn();
const mockClearAndReset = vi.fn();

function createMockState(partial?: Partial<AppState>): AppState {
  return {
    screen: "error",
    previousScreen: null,
    activePanel: null,
    records: [],
    technicians: [],
    profile: {
      name: "Marcus Vance",
      role: "Senior Admin",
      sector: "Sector 7G",
      email: "m.vance@fieldcontrol.ops",
      phone: "+1 (555) 019-2847",
      status: "online",
    },
    settings: {
      notificationsEnabled: true,
      darkMode: true,
      autoRefresh: true,
      refreshIntervalSeconds: 60,
      defaultFilterStatus: "all",
    },
    selectedRecordId: null,
    searchQuery: "",
    statusFilter: "all",
    priorityFilter: "all",
    techFilter: "all",
    lastError: {
      code: "ERR_STORAGE_TIMEOUT",
      message: "Storage read timed out after 5000ms.",
      timestamp: "2024-05-10T12:00:00Z",
    },
    storageStatus: "error",
    ...partial,
  };
}

const mockActions: AppActions = {
  navigate: vi.fn(),
  goBack: vi.fn(),
  openPanel: vi.fn(),
  closePanel: vi.fn(),
  setSearchQuery: vi.fn(),
  setStatusFilter: vi.fn(),
  setPriorityFilter: vi.fn(),
  setTechFilter: vi.fn(),
  selectRecord: vi.fn(),
  addRecord: vi.fn(),
  updateRecord: vi.fn(),
  deleteRecord: vi.fn(),
  updateProfile: vi.fn(),
  updateSettings: vi.fn(),
  retryStorage: mockRetryStorage,
  clearAndReset: mockClearAndReset,
  dismissError: vi.fn(),
};

function renderWithContext(ui: React.ReactNode, state?: Partial<AppState>) {
  return render(
    <AppContext.Provider value={{ state: createMockState(state), actions: mockActions }}>
      {ui}
    </AppContext.Provider>
  );
}

describe("SystemErrorState", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders error message from state", () => {
    renderWithContext(<SystemErrorState />);
    expect(screen.getByText("Failed to load data")).toBeInTheDocument();
    expect(screen.getByText("Storage read timed out after 5000ms.")).toBeInTheDocument();
    expect(screen.getByText("ERR_STORAGE_TIMEOUT")).toBeInTheDocument();
  });

  it("calls retryStorage when Retry is clicked", () => {
    renderWithContext(<SystemErrorState />);
    const retryBtn = screen.getByRole("button", { name: /Retry/i });
    fireEvent.click(retryBtn);
    expect(mockRetryStorage).toHaveBeenCalled();
  });

  it("calls clearAndReset when Clear Storage & Reset is clicked", () => {
    renderWithContext(<SystemErrorState />);
    const clearBtn = screen.getByRole("button", { name: /Clear Storage & Reset/i });
    fireEvent.click(clearBtn);
    expect(mockClearAndReset).toHaveBeenCalled();
  });

  it("shows generic error code when lastError is null", () => {
    renderWithContext(<SystemErrorState />, { lastError: null });
    expect(screen.getByText("ERR_UNKNOWN")).toBeInTheDocument();
    expect(screen.getByText("An unknown error occurred.")).toBeInTheDocument();
  });
});
