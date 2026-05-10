import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { AppContext } from "../contexts/AppContext";
import { Dashboard } from "./Dashboard";
import type { AppState } from "../types/domain";
import type { AppActions } from "../hooks/useAppState";

const mockNavigate = vi.fn();
const mockSetSearchQuery = vi.fn();
const mockSetStatusFilter = vi.fn();
const mockSetPriorityFilter = vi.fn();
const mockSetTechFilter = vi.fn();
const mockSelectRecord = vi.fn();
const mockOpenPanel = vi.fn();

function createMockState(partial?: Partial<AppState>): AppState {
  return {
    screen: "dashboard",
    previousScreen: null,
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
        notes: "Hydraulic pump failure on Line 3.",
        partsRequired: ["HP-4400-X"],
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
        notes: "Conveyor belt misalignment.",
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
        notes: "HVAC filter replacement scheduled.",
      },
      {
        id: "rec-4",
        serviceId: "SRV-8912",
        customerName: "Stark Resourcing",
        location: "Facility 9",
        status: "ready",
        assignedTechId: null,
        priority: "low",
        lastUpdate: "08:05 AM",
        createdAt: "2024-05-10T08:05:00Z",
        updatedAt: "2024-05-10T08:05:00Z",
        notes: "Quarterly preventive maintenance check.",
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
  setSearchQuery: mockSetSearchQuery,
  setStatusFilter: mockSetStatusFilter,
  setPriorityFilter: mockSetPriorityFilter,
  setTechFilter: mockSetTechFilter,
  selectRecord: mockSelectRecord,
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

describe("Dashboard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders KPIs based on record counts", () => {
    const utils = renderWithContext(<Dashboard />);
    const text = utils.container.textContent || "";
    expect(text).toContain("Total Active");
    expect(text).toContain("Ready");
    expect(text).toContain("In Progress");
    expect(text).toContain("Blocked");
  });

  it("renders records in the table", () => {
    const utils = renderWithContext(<Dashboard />);
    expect(utils.getByText("SRV-8902")).toBeInTheDocument();
    expect(utils.getByText("Nexus Industries")).toBeInTheDocument();
    expect(utils.getByText("OmniCorp Logistics")).toBeInTheDocument();
  });

  it("filters records by search query", () => {
    const utils = renderWithContext(<Dashboard />);
    const searchInput = utils.getAllByPlaceholderText(/Search/i)[0];
    fireEvent.change(searchInput, { target: { value: "Nexus" } });
    expect(mockSetSearchQuery).toHaveBeenCalledWith("Nexus");
  });

  it("cycles status filter when Status button is clicked", () => {
    const utils = renderWithContext(<Dashboard />);
    const statusBtn = utils.getByRole("button", { name: /Status/i });
    fireEvent.click(statusBtn);
    expect(mockSetStatusFilter).toHaveBeenCalledWith("ready");
  });

  it("cycles priority filter when Priority button is clicked", () => {
    const utils = renderWithContext(<Dashboard />);
    const priorityBtn = utils.getByRole("button", { name: /Priority/i });
    fireEvent.click(priorityBtn);
    expect(mockSetPriorityFilter).toHaveBeenCalledWith("low");
  });

  it("cycles tech filter when Assigned Tech button is clicked", () => {
    const utils = renderWithContext(<Dashboard />);
    const techBtn = utils.getByRole("button", { name: /Assigned Tech/i });
    fireEvent.click(techBtn);
    expect(mockSetTechFilter).toHaveBeenCalledWith("tech-1");
  });

  it("navigates to detail when a table row is clicked", () => {
    const utils = renderWithContext(<Dashboard />);
    const row = utils.getByText("SRV-8902").closest("tr");
    fireEvent.click(row!);
    expect(mockSelectRecord).toHaveBeenCalledWith("rec-1");
    expect(mockNavigate).toHaveBeenCalledWith("detail");
  });

  it("navigates to create when New Record is clicked", () => {
    const utils = renderWithContext(<Dashboard />);
    const newRecordBtn = utils.getAllByText("New Record")[0];
    fireEvent.click(newRecordBtn);
    expect(mockNavigate).toHaveBeenCalledWith("create");
  });

  it("navigates to insights from sidebar", () => {
    const utils = renderWithContext(<Dashboard />);
    const insightsLink = utils.getByText("Insights");
    fireEvent.click(insightsLink);
    expect(mockNavigate).toHaveBeenCalledWith("insights");
  });

  it("shows empty message when no records match filters", () => {
    const utils = renderWithContext(<Dashboard />, { records: [] });
    expect(utils.getByText(/No records match the current filters/i)).toBeInTheDocument();
  });

  it("disables previous page button on first page", () => {
    const utils = renderWithContext(<Dashboard />);
    const prevBtn = utils.getByLabelText("Previous page");
    expect(prevBtn).toBeDisabled();
  });
});
