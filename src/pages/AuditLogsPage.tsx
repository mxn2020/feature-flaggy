import { History } from "lucide-react";
const logs = [
  { id:"1", action:"Flag toggled ON", target:"new-onboarding-flow", user:"mehdi@openclaw.dev", env:"Production", time:"10 mins ago" },
  { id:"2", action:"Rollout changed 0% -> 20%", target:"api-rate-limit-v2", user:"system@openclaw.dev", env:"Staging", time:"2 hours ago" },
  { id:"3", action:"Flag created", target:"dark-mode", user:"john@openclaw.dev", env:"Development", time:"Yesterday" }
];
export default function AuditLogsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,marginBottom:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><History style={{color:"var(--color-accent-primary)"}}/> Audit Logs</h1>
    <div className="card">
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead>
          <tr style={{borderBottom:"1px solid var(--color-border)",background:"var(--color-bg-secondary)"}}>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Action</th>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Flag Key</th>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Environment</th>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>User</th>
            <th style={{textAlign:"right",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log=>(<tr key={log.id} style={{borderBottom:"1px solid var(--color-border)"}}>
            <td style={{padding:"12px 16px",fontSize:"14px",fontWeight:500}}>{log.action}</td>
            <td style={{padding:"12px 16px"}}><span className="mono badge badge-gray" style={{textTransform:"none"}}>{log.target}</span></td>
            <td style={{padding:"12px 16px",fontSize:"13px"}}>{log.env}</td>
            <td style={{padding:"12px 16px",fontSize:"13px",color:"var(--color-text-secondary)"}}>{log.user}</td>
            <td style={{padding:"12px 16px",fontSize:"13px",color:"var(--color-text-tertiary)",textAlign:"right"}}>{log.time}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  </div>);
}
