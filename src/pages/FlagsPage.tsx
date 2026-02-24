import { Flag, Plus } from "lucide-react";
const flags = [
  { id:"1", key:"new-onboarding-flow", name:"New Onboarding Flow", enabled:true, type:"boolean", tags:["frontend", "growth"] },
  { id:"2", key:"api-rate-limit-v2", name:"API Rate Limits v2", enabled:false, type:"percentage", rollout:20, tags:["backend", "infra"] },
  { id:"3", key:"dark-mode", name:"Dark Mode Theme", enabled:true, type:"boolean", tags:["frontend"] }
];
export default function FlagsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Flag style={{color:"var(--color-accent-primary)"}}/> Feature Flags</h1>
      <button className="btn btn-primary"><Plus size={16}/> Create Flag</button>
    </div>
    
    <div style={{display:"grid",gap:"var(--space-4)"}}>
      {flags.map(f=>(<div key={f.id} className="card" style={{padding:"var(--space-5)",display:"flex",alignItems:"center",justifyContent:"space-between",borderLeft:f.enabled?"3px solid var(--color-success)":"3px solid var(--color-border)"}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",marginBottom:8}}>
            <h3 style={{fontSize:"var(--font-size-base)",fontWeight:700}}>{f.name}</h3>
            {f.tags.map(t=><span key={t} className="badge badge-gray">{t}</span>)}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)",fontSize:"13px",color:"var(--color-text-secondary)"}}>
            <span className="mono" style={{background:"var(--color-bg-secondary)",padding:"2px 6px",borderRadius:4}}>{f.key}</span>
            {f.type==="percentage" && <span>Rollout: <strong>{f.rollout}%</strong></span>}
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)"}}>
          <span style={{fontSize:"12px",fontWeight:600,color:f.enabled?"var(--color-success)":"var(--color-text-tertiary)"}}>{f.enabled?"ON":"OFF"}</span>
          <label className="toggle"><input type="checkbox" defaultChecked={f.enabled} /><span className="slider"></span></label>
        </div>
      </div>))}
    </div>
  </div>);
}
