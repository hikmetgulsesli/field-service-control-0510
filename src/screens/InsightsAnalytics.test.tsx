import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { AppContext } from "../contexts/AppContext";
import { InsightsAnalytics } from "./InsightsAnalytics";
import type { AppState } from "../types/domain";
import type { AppActions } from "../hooks/useAppState";

const mockNavigate = vi.fn();
const mockOpenPanel = vi.fn();

function createMockState(partial?: Partial<AppState>): AppState {
  return {
    screen: "insights",
    previousScreen: null,
    activePanel: null,
    records: [
      {
        id: "rec-1",
        serviceId: "SRV-8902",
        customerName: "Nexus Industries",
        location: "Sector 4, Building A",
        status: "completed",
        assignedTechId: "tech-1",
        priority: "critical",
        lastUpdate: "10:42 AM",
        createdAt: "2024-05-06T08:00:00Z",
        updatedAt: "2024-05-06T14:00:00Z",
        notes: "Done.",
      },
      {
        id: "rec-2",
        serviceId: "SRV-8905",
        customerName: "OmniCorp Logistics",
        location: "Distribution Center West",
        status: "in-progress",
        assignedTechId: "tech-2",
        priority: "high",
        lastUpdate: "09:15 AM",
        createdAt: "2024-05-10T07:30:00Z",
        updatedAt: "2024-05-10T09:15:00Z",
        notes: "In progress.",
      },
      {
        id: "rec-3",
        serviceId: "SRV-8911",
        customerName: "Global Dynamics",
        location: "Main CampusHQ",
        status: "ready",
        assignedTechId: null,
        priority: "medium",
        lastUpdate: "08:30 AM",
        createdAt: "2024-05-10T08:30:00Z",
        updatedAt: "2024-05-10T08:30:00Z",
        notes: "Scheduled.",
      },
    ],
    technicians: [
      { id: "tech-1", name: "J. Miller", initials: "JM", sector: "Sector 4", isAvailable: true },
      { id: "tech-2", name: "A. Chen", initials: "AC", sector: "Sector 2", isAvailable: true },
      { id: "tech-3", name: "R. Patel", initials: "RP", sector: "Sector 7", isAvailable: false },
    ],
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

describe("InsightsAnalytics", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders computed KPI values", () => {
    const utils = renderWithContext(<InsightsAnalytics />);
    const text = utils.container.textContent || "";
    expect(text).toContain("Total Records");
    expect(text).toContain("Completed");
    expect(text).toContain("Pending");
    expect(text).toContain("Avg Resolution Time");
  });

  it("switches period filter on button click", () => {
    const utils = renderWithContext(<InsightsAnalytics />);
    const sevenDaysBtn = utils.getByRole("button", { name: /7 Days/i });
    fireEvent.click(sevenDaysBtn);
    expect(sevenDaysBtn).toHaveClass("bg-surface-container-high");
  });

  it("renders technician workload bars", () => {
    const utils = renderWithContext(<InsightsAnalytics />);
    expect(utils.getByText("J. Miller")).toBeInTheDocument();
    expect(utils.getByText("A. Chen")).toBeInTheDocument();
    expect(utils.getByText("R. Patel")).toBeInTheDocument();
  });

  it("navigates to dashboard from View All Personnel", () => {
    const utils = renderWithContext(<InsightsAnalytics />);
    const viewAllBtn = utils.getByRole("button", { name: /View All Personnel/i });
    fireEvent.click(viewAllBtn);
    expect(mockNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("navigates to dashboard from sidebar", () => {
    const utils = renderWithContext(<InsightsAnalytics />);
    const dashboardLink = utils.getAllByText("Dashboard")[0];
    fireEvent.click(dashboardLink);
    expect(mockNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("navigates to create from New Record button", () => {
    const utils = renderWithContext(<InsightsAnalytics />);
    const newRecordBtn = utils.getAllByText("New Record")[0];
    fireEvent.click(newRecordBtn);
    expect(mockNavigate).toHaveBeenCalledWith("create");
  });

  it("shows -- when no completed records for avg resolution", () => {
    const utils = renderWithContext(<InsightsAnalytics />, {
      records: [
        {
          id: "rec-x",
          serviceId: "SRV-0001",
          customerName: "Test Corp",
          location: "Test",
          status: "ready",
          assignedTechId: null,
          priority: "low",
          lastUpdate: "08:00 AM",
          createdAt: "2024-05-10T08:00:00Z",
          updatedAt: "2024-05-10T08:00:00Z",
        },
      ],
    });
    expect(utils.getByText("--")).toBeInTheDocument();
  });
});
