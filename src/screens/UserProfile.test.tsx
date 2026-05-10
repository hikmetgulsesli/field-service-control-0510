import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppContext } from "../contexts/AppContext";
import { UserProfile } from "./UserProfile";
import type { AppState } from "../types/domain";
import type { AppActions } from "../hooks/useAppState";

const mockNavigate = vi.fn();
const mockGoBack = vi.fn();
const mockClearAndReset = vi.fn();

function createMockState(partial?: Partial<AppState>): AppState {
  return {
    screen: "profile",
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
  updateSettings: vi.fn(),
  retryStorage: vi.fn(),
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

describe("UserProfile", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders profile identity heading", () => {
    renderWithContext(<UserProfile />);
    expect(screen.getByText("Profile Identity")).toBeInTheDocument();
  });

  it("renders profile name from state", () => {
    renderWithContext(<UserProfile />);
    expect(screen.getByText("Marcus Vance")).toBeInTheDocument();
  });

  it("renders profile role and sector from state", () => {
    renderWithContext(<UserProfile />);
    expect(screen.getByText("Senior Admin")).toBeInTheDocument();
    expect(screen.getByText(/Sector 7G/)).toBeInTheDocument();
  });

  it("calls goBack when close button is clicked", () => {
    renderWithContext(<UserProfile />);
    const closeBtn = screen.getByLabelText("Close Profile");
    fireEvent.click(closeBtn);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("navigates to settings from Account Details button", () => {
    renderWithContext(<UserProfile />);
    const accountBtn = screen.getByRole("button", { name: /Account Details/i });
    fireEvent.click(accountBtn);
    expect(mockNavigate).toHaveBeenCalledWith("settings");
  });

  it("navigates to settings from Security Config button", () => {
    renderWithContext(<UserProfile />);
    const securityBtn = screen.getByRole("button", { name: /Security Config/i });
    fireEvent.click(securityBtn);
    expect(mockNavigate).toHaveBeenCalledWith("settings");
  });

  it("navigates to settings from Alert Protocols button", () => {
    renderWithContext(<UserProfile />);
    const alertBtn = screen.getByRole("button", { name: /Alert Protocols/i });
    fireEvent.click(alertBtn);
    expect(mockNavigate).toHaveBeenCalledWith("settings");
  });

  it("navigates to settings from Interface Logic button", () => {
    renderWithContext(<UserProfile />);
    const logicBtn = screen.getByRole("button", { name: /Interface Logic/i });
    fireEvent.click(logicBtn);
    expect(mockNavigate).toHaveBeenCalledWith("settings");
  });

  it("shows confirm state when Terminate Session is clicked", () => {
    renderWithContext(<UserProfile />);
    const terminateBtn = screen.getByRole("button", { name: /Terminate Session/i });
    fireEvent.click(terminateBtn);
    expect(screen.getByText("Confirm Terminate Session")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(mockClearAndReset).not.toHaveBeenCalled();
  });

  it("calls clearAndReset on confirmed terminate", () => {
    renderWithContext(<UserProfile />);
    const terminateBtn = screen.getByRole("button", { name: /Terminate Session/i });
    fireEvent.click(terminateBtn);
    const confirmBtn = screen.getByRole("button", { name: /Confirm Terminate Session/i });
    fireEvent.click(confirmBtn);
    expect(mockClearAndReset).toHaveBeenCalled();
  });

  it("cancels logout confirm when Cancel is clicked", () => {
    renderWithContext(<UserProfile />);
    const terminateBtn = screen.getByRole("button", { name: /Terminate Session/i });
    fireEvent.click(terminateBtn);
    const cancelBtn = screen.getByRole("button", { name: /Cancel/i });
    fireEvent.click(cancelBtn);
    expect(screen.queryByText("Confirm Terminate Session")).not.toBeInTheDocument();
    expect(mockClearAndReset).not.toHaveBeenCalled();
  });

  it("renders custom profile name when state changes", () => {
    renderWithContext(<UserProfile />, {
      profile: {
        name: "A. Chen",
        role: "Technician",
        sector: "Sector 2",
        email: "a.chen@fieldcontrol.ops",
        phone: "+1 (555) 019-2848",
        status: "online",
      },
    });
    expect(screen.getByText("A. Chen")).toBeInTheDocument();
    expect(screen.getByText("Technician")).toBeInTheDocument();
    expect(screen.getByText(/Sector 2/)).toBeInTheDocument();
  });

  it("renders fallback initials avatar when avatarUrl is missing", () => {
    renderWithContext(<UserProfile />, {
      profile: {
        name: "A. Chen",
        role: "Technician",
        sector: "Sector 2",
        email: "a.chen@fieldcontrol.ops",
        phone: "+1 (555) 019-2848",
        status: "online",
      },
    });
    expect(screen.getByText("AC")).toBeInTheDocument();
  });

  it("renders online status indicator with aria-label", () => {
    renderWithContext(<UserProfile />);
    expect(screen.getByLabelText("Online status")).toBeInTheDocument();
  });
});
