import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import FlagsPage from "../pages/FlagsPage"; import EnvironmentsPage from "../pages/EnvironmentsPage"; import AuditLogsPage from "../pages/AuditLogsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
  it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("Feature Flaggy")).toBeInTheDocument(); });
  it("FlagsPage renders", () => { wrap(<FlagsPage />); expect(screen.getByText("New Onboarding Flow")).toBeInTheDocument(); });
  it("EnvironmentsPage renders", () => { wrap(<EnvironmentsPage />); expect(screen.getByText("Production")).toBeInTheDocument(); });
  it("AuditLogsPage renders", () => { wrap(<AuditLogsPage />); expect(screen.getByText("Flag toggled ON")).toBeInTheDocument(); });
});
