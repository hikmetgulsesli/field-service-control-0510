import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppContext } from "../contexts/AppContext";
import { Settings } from "./Settings";
import type { AppState } from "../types/domain";
import type { AppActions } from "../hooks/useAppState";

const mockNavigate = vi.fn();
const mockGoBack = vi.fn();
const mockUpdateSettings = vi.fn();
const mockRetryStorage = vi.fn();
const mockClearAndReset = vi.fn();

function createMockState(partial?: Partial<AppState>): AppState {
  return {
    screen: "settings",
    previousScreen: "dashboard",
    activePanel: null,
    records: [
      {
        id: "rec-1",
        serviceId: "SRV-8902",
        customerName: "Nexus Industries",
        location: "Sector 4, Building A",
        status: "blocked",
        assignedTechId: "tech-1",
        priority: "critical",
        lastUpdate: "10:42 AM",
        createdAt: "2024-05-10T08:00:00Z",
        updatedAt: "2024-05-10T10:42:00Z",
        notes: "Hydraulic pump failure.",
        partsRequired: ["HP-4400-X"],
      },
    ],
    technicians: [
      { id: "tech-1", name: "J. Miller", initials: "JM", sector: "Sector 4", isAvailable: true },
    ],
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
      refreshIntervalSeconds: 900,
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
  goBack: mockGoBack,
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
  updateSettings: mockUpdateSettings,
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

describe("Settings", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders application settings heading", () => {
    renderWithContext(<Settings />);
    expect(screen.getByText("Application Settings")).toBeInTheDocument();
    expect(screen.getByText(/Manage your operational preferences/i)).toBeInTheDocument();
  });

  it("navigates to dashboard from sidebar", () => {
    renderWithContext(<Settings />);
    const dashboardLink = screen.getByText("Dashboard");
    fireEvent.click(dashboardLink);
    expect(mockNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("navigates to insights from sidebar", () => {
    renderWithContext(<Settings />);
    const insightsLink = screen.getByText("Insights");
    fireEvent.click(insightsLink);
    expect(mockNavigate).toHaveBeenCalledWith("insights");
  });

  it("navigates to profile from sidebar", () => {
    renderWithContext(<Settings />);
    const profileLink = screen.getByText("Profile");
    fireEvent.click(profileLink);
    expect(mockNavigate).toHaveBeenCalledWith("profile");
  });

  it("navigates to create from New Record button", () => {
    renderWithContext(<Settings />);
    const newRecordBtn = screen.getAllByText("New Record")[0];
    fireEvent.click(newRecordBtn);
    expect(mockNavigate).toHaveBeenCalledWith("create");
  });

  it("toggles notificationsEnabled when Critical System Alerts switch is clicked", () => {
    renderWithContext(<Settings />);
    const switches = screen.getAllByRole("switch");
    // First switch is Critical System Alerts
    fireEvent.click(switches[0]);
    expect(mockUpdateSettings).toHaveBeenCalledWith({ notificationsEnabled: false });
  });

  it("toggles autoRefresh when Background Data Sync switch is clicked", () => {
    renderWithContext(<Settings />);
    const switches = screen.getAllByRole("switch");
    // Second switch is Background Data Sync
    fireEvent.click(switches[1]);
    expect(mockUpdateSettings).toHaveBeenCalledWith({ autoRefresh: false });
  });

  it("calls retryStorage when Retry Sync is clicked", () => {
    renderWithContext(<Settings />);
    const retryBtn = screen.getByRole("button", { name: /Retry Sync/i });
    fireEvent.click(retryBtn);
    expect(mockRetryStorage).toHaveBeenCalled();
  });

  it("calls clearAndReset when Reset All is clicked", () => {
    renderWithContext(<Settings />);
    const resetBtn = screen.getByRole("button", { name: /Reset All/i });
    fireEvent.click(resetBtn);
    expect(mockClearAndReset).toHaveBeenCalled();
  });

  it("calls clearAndReset when Clear Local Storage is clicked", () => {
    renderWithContext(<Settings />);
    const clearBtn = screen.getByRole("button", { name: /Clear Local Storage/i });
    fireEvent.click(clearBtn);
    expect(mockClearAndReset).toHaveBeenCalled();
  });

  it("shows connection test success message when Test Connection is clicked", () => {
    renderWithContext(<Settings />);
    const testBtn = screen.getByRole("button", { name: /Test Connection/i });
    fireEvent.click(testBtn);
    expect(screen.getByText("Connection established successfully.")).toBeInTheDocument();
  });

  it("updates sync interval when select changes", () => {
    renderWithContext(<Settings />);
    const select = screen.getByLabelText(/Background Sync Interval/i);
    fireEvent.change(select, { target: { value: "30" } });
    expect(mockUpdateSettings).toHaveBeenCalledWith({ autoRefresh: true, refreshIntervalSeconds: 1800 });
  });

  it("sets manual sync when Manual Only is selected", () => {
    renderWithContext(<Settings />);
    const select = screen.getByLabelText(/Background Sync Interval/i);
    fireEvent.change(select, { target: { value: "manual" } });
    expect(mockUpdateSettings).toHaveBeenCalledWith({ autoRefresh: false, refreshIntervalSeconds: 0 });
  });

  it("updates global search query when search input changes", () => {
    renderWithContext(<Settings />);
    const searchInput = screen.getByPlaceholderText(/Search settings/i);
    fireEvent.change(searchInput, { target: { value: "notifications" } });
    expect(mockActions.setSearchQuery).toHaveBeenCalledWith("notifications");
  });

  it("navigates to profile from avatar button", () => {
    renderWithContext(<Settings />);
    const avatarBtn = screen.getByLabelText("Open profile");
    fireEvent.click(avatarBtn);
    expect(mockNavigate).toHaveBeenCalledWith("profile");
  });

  it("renders profile name from state", () => {
    renderWithContext(<Settings />);
    expect(screen.getByAltText("User profile avatar")).toHaveAttribute(
      "src",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDs6uE81zDY65NhdTVBG5E9GIjZToTYLO9bU8rS9BT3MT3TK4-MwsIl8lDAYa-IBHlXZqmLHIEjr0ARskeICJQQuGPOYo-I2-XaePpNIgziB1fXPEVSAMERIl28oy43WLjhEWIvBw26HsN7R_wvUuZxId6Y949RVOxry82z-SXcADkEdJN2Ml4sczjfYH24onbd5SbwJJ3hFHllSZZV3IY1T6s2l4OkS8uxNiZTzYhyU0Mz_sFybyPDMqbl_cs7UGY-nwYELT3feUHo"
    );
  });
});
