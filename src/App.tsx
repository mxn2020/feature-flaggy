import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FlagsPage from "./pages/FlagsPage";
import EnvironmentsPage from "./pages/EnvironmentsPage";
import AuditLogsPage from "./pages/AuditLogsPage";
export default function App() {
  return (<BrowserRouter>
    <div style={{display:"flex"}}>
      <Sidebar />
      <main style={{marginLeft:"var(--sidebar-width)",flex:1,minHeight:"100vh"}}><Routes>
        <Route path="/" element={<FlagsPage />} /> <Route path="/environments" element={<EnvironmentsPage />} />
        <Route path="/audit" element={<AuditLogsPage />} /> <Route path="/settings" element={<AuditLogsPage />} />
      </Routes></main>
    </div>
  </BrowserRouter>);
}
