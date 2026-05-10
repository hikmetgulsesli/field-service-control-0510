import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppContext } from "../contexts/AppContext";
import { EmptyState } from "./EmptyState";
import type { AppState } from "../types/domain";
import type { AppActions } from "../hooks/useAppState";

const mockNavigate = vi.fn();
const mockOpenPanel = vi.fn();

function createMockState(partial?: Partial<AppState>): AppState {
  return {
    screen: "empty",
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
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDs6uE81zDY65NhdTVBG5E9GIjZToTYLO9bU8rS9BT3MT3TK4-MwsIl8lDAYa-IBHlXZqmLHIEjr0ARskeICJQQuGPOYo-I2-XaePpNIgziB1fXPEVSAMERIl28oy43WLjhEWIvBw26HsN7R_wvUuZxId6Y949RVOxry82z-SXcADkEdJN2Ml4sczjfYH24onbd5SbwJJ3hFHllSZZV3IY1T6s2l4OkS8uxNiZTzYhyU0Mz_sFybyPDMqbl_cs7UGY-nwYELT3feUHo",
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
    lastError: null,
    storageStatus: "ok",
    ...partial,
  };
}

const mockActions: AppActions = {
  navigate: mockNavigate,
  goBack: vi.fn(),
  openPanel: mockOpenPanel,
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
  retryStorage: vi.fn(),
  clearAndReset: vi.fn(),
  dismissError: vi.fn(),
};

function renderWithContext(ui: React.ReactNode, state?: Partial<AppState>) {
  return render(
    <AppContext.Provider value={{ state: createMockState(state), actions: mockActions }}>
      {ui}
    </AppContext.Provider>
  );
}

describe("EmptyState", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders empty state messaging", () => {
    renderWithContext(<EmptyState />);
    expect(screen.getByText("No Records Found")).toBeInTheDocument();
    expect(
      screen.getByText(/Your operations dashboard is currently empty/i)
    ).toBeInTheDocument();
  });

  it("navigates to create when primary action is clicked", () => {
    renderWithContext(<EmptyState />);
    const createBtn = screen.getByRole("button", { name: /Create Your First Record/i });
    fireEvent.click(createBtn);
    expect(mockNavigate).toHaveBeenCalledWith("create");
  });

  it("navigates to create from New Record sidebar button", () => {
    renderWithContext(<EmptyState />);
    const newRecordBtn = screen.getAllByText("New Record")[0];
    fireEvent.click(newRecordBtn);
    expect(mockNavigate).toHaveBeenCalledWith("create");
  });

  it("navigates to insights from sidebar", () => {
    renderWithContext(<EmptyState />);
    const insightsLink = screen.getByText("Insights");
    fireEvent.click(insightsLink);
    expect(mockNavigate).toHaveBeenCalledWith("insights");
  });

  it("navigates to settings from help button", () => {
    renderWithContext(<EmptyState />);
    const helpBtn = screen.getByLabelText("Help");
    fireEvent.click(helpBtn);
    expect(mockNavigate).toHaveBeenCalledWith("settings");
  });
});
