import { Server, Plus, Copy } from "lucide-react";
const envs = [
  { id:"1", name:"Production", key:"env_prod_89f2j29", flagsActive: 12 },
  { id:"2", name:"Staging", key:"env_stg_4k20xl1", flagsActive: 24 },
  { id:"3", name:"Development", key:"env_dev_9m0p2q", flagsActive: 45 }
];
export default function EnvironmentsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Server style={{color:"var(--color-accent-primary)"}}/> Environments</h1>
      <button className="btn btn-primary"><Plus size={16}/> New Environment</button>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"var(--space-4)"}}>
      {envs.map(env=>(<div key={env.id} className="card" style={{padding:"var(--space-5)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"var(--space-4)"}}>
          <h3 style={{fontSize:"var(--font-size-lg)",fontWeight:700}}>{env.name}</h3>
          <span className="badge badge-red">{env.flagsActive} active flags</span>
        </div>
        <div>
          <label style={{fontSize:"12px",fontWeight:600,color:"var(--color-text-secondary)",marginBottom:4,display:"block"}}>Environment specific SDK Key</label>
          <div style={{display:"flex",gap:"var(--space-2)"}}>
            <input type="text" readOnly value={env.key} className="input mono" style={{fontSize:"13px"}} />
            <button className="btn btn-ghost" style={{padding:"8px"}}><Copy size={16}/></button>
          </div>
        </div>
      </div>))}
    </div>
  </div>);
}
