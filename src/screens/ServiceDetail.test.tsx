import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppContext } from "../contexts/AppContext";
import { ServiceDetail } from "./ServiceDetail";
import type { AppState } from "../types/domain";
import type { AppActions } from "../hooks/useAppState";
import type { ServiceRecord } from "../types/domain";

const mockNavigate = vi.fn();
const mockGoBack = vi.fn();
const mockUpdateRecord = vi.fn();
const mockDeleteRecord = vi.fn();
const mockOpenPanel = vi.fn();

function createMockRecord(partial?: Partial<ServiceRecord>): ServiceRecord {
  return {
    id: "rec-1",
    serviceId: "SRV-8902",
    customerName: "Nexus Industries",
    location: "Sector 4, Building A",
    status: "in-progress",
    assignedTechId: "tech-1",
    priority: "high",
    lastUpdate: "10:42 AM",
    createdAt: "2024-05-10T08:00:00Z",
    updatedAt: "2024-05-10T10:42:00Z",
    notes: "Hydraulic pump failure on Line 3. Replacement part on order.",
    ...partial,
  };
}

function createMockState(partial?: Partial<AppState>): AppState {
  return {
    screen: "detail",
    previousScreen: null,
    activePanel: null,
    records: [createMockRecord()],
    technicians: [
      { id: "tech-1", name: "J. Miller", initials: "JM", sector: "Sector 4", isAvailable: true },
      { id: "tech-2", name: "A. Chen", initials: "AC", sector: "Sector 2", isAvailable: true },
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
    selectedRecordId: "rec-1",
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
  openPanel: mockOpenPanel,
  closePanel: vi.fn(),
  setSearchQuery: vi.fn(),
  setStatusFilter: vi.fn(),
  setPriorityFilter: vi.fn(),
  setTechFilter: vi.fn(),
  selectRecord: vi.fn(),
  addRecord: vi.fn(),
  updateRecord: mockUpdateRecord,
  deleteRecord: mockDeleteRecord,
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

describe("ServiceDetail", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders record details when a record is selected", () => {
    renderWithContext(<ServiceDetail />);
    expect(screen.getByText("SRV-8902")).toBeInTheDocument();
    expect(screen.getByText("Nexus Industries")).toBeInTheDocument();
    expect(screen.getByText("In Progress")).toBeInTheDocument();
    expect(screen.getByText(/Hydraulic pump failure/i)).toBeInTheDocument();
  });

  it("shows technician name when assigned", () => {
    renderWithContext(<ServiceDetail />);
    expect(screen.getByText("J. Miller")).toBeInTheDocument();
  });

  it("shows 'Unassigned' when no technician is assigned", () => {
    renderWithContext(<ServiceDetail />, {
      records: [createMockRecord({ assignedTechId: null })],
    });
    expect(screen.getByText(/Unassigned/i)).toBeInTheDocument();
  });

  it("calls updateRecord with status completed when Mark Complete is clicked", () => {
    renderWithContext(<ServiceDetail />);
    const markCompleteBtn = screen.getByRole("button", { name: /Mark Complete/i });
    fireEvent.click(markCompleteBtn);
    expect(mockUpdateRecord).toHaveBeenCalledWith("rec-1", { status: "completed" });
  });

  it("does not render Mark Complete when status is already completed", () => {
    renderWithContext(<ServiceDetail />, {
      records: [createMockRecord({ status: "completed" })],
    });
    expect(screen.queryByRole("button", { name: /Mark Complete/i })).not.toBeInTheDocument();
  });

  it("calls deleteRecord and navigates to dashboard when Delete is clicked", () => {
    renderWithContext(<ServiceDetail />);
    const deleteBtn = screen.getByRole("button", { name: /Delete/i });
    fireEvent.click(deleteBtn);
    expect(mockDeleteRecord).toHaveBeenCalledWith("rec-1");
    expect(mockNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("navigates to create screen when Edit is clicked", () => {
    renderWithContext(<ServiceDetail />);
    const editBtn = screen.getByRole("button", { name: /Edit/i });
    fireEvent.click(editBtn);
    expect(mockNavigate).toHaveBeenCalledWith("create");
  });

  it("calls goBack when Back to Service Records is clicked", () => {
    renderWithContext(<ServiceDetail />);
    const backBtn = screen.getByText("Back to Service Records");
    fireEvent.click(backBtn);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("shows 'No Record Selected' when selectedRecordId is null", () => {
    renderWithContext(<ServiceDetail />, { selectedRecordId: null });
    expect(screen.getByText("No Record Selected")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Return to Dashboard/i })).toBeInTheDocument();
  });

  it("shows 'No Record Selected' when selected record does not exist", () => {
    renderWithContext(<ServiceDetail />, {
      records: [],
      selectedRecordId: "missing-id",
    });
    expect(screen.getByText("No Record Selected")).toBeInTheDocument();
  });

  it("navigates to dashboard from no-record fallback", () => {
    renderWithContext(<ServiceDetail />, { selectedRecordId: null });
    const returnBtn = screen.getByRole("button", { name: /Return to Dashboard/i });
    fireEvent.click(returnBtn);
    expect(mockNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("displays correct priority label for high priority", () => {
    renderWithContext(<ServiceDetail />);
    expect(screen.getByText(/High - Critical/i)).toBeInTheDocument();
  });

  it("displays correct priority label for low priority", () => {
    renderWithContext(<ServiceDetail />, {
      records: [createMockRecord({ priority: "low" })],
    });
    expect(screen.getByText(/Low - Routine/i)).toBeInTheDocument();
  });

  it("displays 'No notes recorded' when notes are empty", () => {
    renderWithContext(<ServiceDetail />, {
      records: [createMockRecord({ notes: undefined })],
    });
    expect(screen.getByText("No notes recorded.")).toBeInTheDocument();
  });

  it("displays correct status label for blocked status", () => {
    renderWithContext(<ServiceDetail />, {
      records: [createMockRecord({ status: "blocked" })],
    });
    expect(screen.getByText("Blocked")).toBeInTheDocument();
  });
});
