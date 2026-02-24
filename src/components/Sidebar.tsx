import { Link, useLocation } from "react-router-dom";
import { Flag, Server, History, Settings, Filter } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
  const loc = useLocation();
  const links = [
    { to: "/", icon: Flag, label: "Feature Flags" },
    { to: "/environments", icon: Server, label: "Environments" },
    { to: "/audit", icon: History, label: "Audit Logs" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];
  return (<aside style={{width:"var(--sidebar-width)",background:"var(--color-bg-card)",borderRight:"1px solid var(--color-border)",height:"100vh",position:"fixed",display:"flex",flexDirection:"column"}}>
    <div style={{padding:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-3)",borderBottom:"1px solid var(--color-border)"}}>
      <div style={{background:"var(--color-accent-primary)",borderRadius:"6px",padding:4}}><Filter size={20} style={{color:"white"}}/></div>
      <strong style={{fontSize:"1.1rem",fontWeight:700}}>Feature Flaggy</strong>
    </div>
    <nav style={{padding:"var(--space-4)",flex:1,display:"flex",flexDirection:"column",gap:"var(--space-2)"}}>
      {links.map(l=><Link key={l.to} to={l.to} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3)",borderRadius:"var(--radius-sm)",color:loc.pathname===l.to?"var(--color-text-primary)":"var(--color-text-secondary)",background:loc.pathname===l.to?"var(--color-bg-hover)":"transparent",fontWeight:600,fontSize:"var(--font-size-sm)",borderLeft:loc.pathname===l.to?"3px solid var(--color-accent-primary)":"3px solid transparent",transition:"all var(--transition-fast)"}}><l.icon size={18} style={{color:loc.pathname===l.to?"var(--color-accent-primary)":"inherit"}}/>{l.label}</Link>)}
    </nav>
    <div style={{padding:"var(--space-4)",borderTop:"1px solid var(--color-border)",display:"flex",justifyContent:"flex-end"}}><ThemeToggle /></div>
  </aside>);
}
