import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppContext } from "../contexts/AppContext";
import { CreateEditRecord } from "./CreateEditRecord";
import type { AppState } from "../types/domain";
import type { AppActions } from "../hooks/useAppState";

const mockNavigate = vi.fn();
const mockAddRecord = vi.fn();
const mockOpenPanel = vi.fn();
const mockSetSearchQuery = vi.fn();

function createMockState(partial?: Partial<AppState>): AppState {
  return {
    screen: "create",
    previousScreen: null,
    activePanel: null,
    records: [],
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
  setStatusFilter: vi.fn(),
  setPriorityFilter: vi.fn(),
  setTechFilter: vi.fn(),
  selectRecord: vi.fn(),
  addRecord: mockAddRecord,
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

describe("CreateEditRecord", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the form with all fields", () => {
    renderWithContext(<CreateEditRecord />);
    expect(screen.getByLabelText(/Customer Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Service Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Priority Level/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Issue Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Assigned Technician/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Save Record/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Cancel/i })).toBeInTheDocument();
  });

  it("shows validation error when customer name is empty", () => {
    renderWithContext(<CreateEditRecord />);
    const saveButton = screen.getByRole("button", { name: /Save Record/i });
    fireEvent.click(saveButton);
    expect(screen.getByText(/Customer name is required/i)).toBeInTheDocument();
    expect(mockAddRecord).not.toHaveBeenCalled();
  });

  it("clears validation error when user types in customer name", () => {
    renderWithContext(<CreateEditRecord />);
    const saveButton = screen.getByRole("button", { name: /Save Record/i });
    fireEvent.click(saveButton);
    expect(screen.getByText(/Customer name is required/i)).toBeInTheDocument();

    const customerInput = screen.getByLabelText(/Customer Name/i);
    fireEvent.change(customerInput, { target: { value: "Acme Corp" } });
    expect(screen.queryByText(/Customer name is required/i)).not.toBeInTheDocument();
  });

  it("submits form with valid data and navigates to dashboard", () => {
    renderWithContext(<CreateEditRecord />);
    const customerInput = screen.getByLabelText(/Customer Name/i);
    fireEvent.change(customerInput, { target: { value: "Acme Corp" } });

    const serviceTypeSelect = screen.getByLabelText(/Service Type/i);
    fireEvent.change(serviceTypeSelect, { target: { value: "repair" } });

    const highRadio = screen.getByDisplayValue("high");
    fireEvent.click(highRadio);

    const descriptionInput = screen.getByLabelText(/Issue Description/i);
    fireEvent.change(descriptionInput, { target: { value: "Pump failure on line 3" } });

    const techSelect = screen.getByLabelText(/Assigned Technician/i);
    fireEvent.change(techSelect, { target: { value: "tech-1" } });

    const saveButton = screen.getByRole("button", { name: /Save Record/i });
    fireEvent.click(saveButton);

    expect(mockAddRecord).toHaveBeenCalledTimes(1);
    const submitted = mockAddRecord.mock.calls[0][0];
    expect(submitted.customerName).toBe("Acme Corp");
    expect(submitted.priority).toBe("high");
    expect(submitted.assignedTechId).toBe("tech-1");
    expect(submitted.status).toBe("ready");
    expect(submitted.location).toBe("Pending Site Assignment");
    expect(mockNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("calls navigate to dashboard on cancel", () => {
    renderWithContext(<CreateEditRecord />);
    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    fireEvent.click(cancelButton);
    expect(mockNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("navigates to dashboard when Service Records breadcrumb is clicked", () => {
    renderWithContext(<CreateEditRecord />);
    const breadcrumb = screen.getAllByText("Service Records")[0];
    fireEvent.click(breadcrumb);
    expect(mockNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("navigates to insights from sidebar", () => {
    renderWithContext(<CreateEditRecord />);
    const insightsLink = screen.getByText("Insights");
    fireEvent.click(insightsLink);
    expect(mockNavigate).toHaveBeenCalledWith("insights");
  });

  it("resets form when New Record button is clicked", () => {
    renderWithContext(<CreateEditRecord />);
    const customerInput = screen.getByLabelText(/Customer Name/i);
    fireEvent.change(customerInput, { target: { value: "Test Corp" } });

    const newRecordBtn = screen.getByRole("button", { name: /New Record/i });
    fireEvent.click(newRecordBtn);

    expect(customerInput).toHaveValue("");
  });

  it("includes service type in notes when submitted", () => {
    renderWithContext(<CreateEditRecord />);
    fireEvent.change(screen.getByLabelText(/Customer Name/i), { target: { value: "Global Dynamics" } });
    fireEvent.change(screen.getByLabelText(/Service Type/i), { target: { value: "maintenance" } });
    fireEvent.change(screen.getByLabelText(/Issue Description/i), { target: { value: "Filter replacement" } });

    fireEvent.click(screen.getByRole("button", { name: /Save Record/i }));

    const submitted = mockAddRecord.mock.calls[0][0];
    expect(submitted.notes).toContain("Preventative Maintenance");
    expect(submitted.notes).toContain("Filter replacement");
  });
});
