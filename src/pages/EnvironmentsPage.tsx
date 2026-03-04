import { Server, Plus, Copy } from "lucide-react";
import { Button, Card, Badge, Input, Label } from "@geenius-ui/react-css";

const envs = [
  { id: "1", name: "Production", key: "env_prod_89f2j29", flagsActive: 12 },
  { id: "2", name: "Staging", key: "env_stg_4k20xl1", flagsActive: 24 },
  { id: "3", name: "Development", key: "env_dev_9m0p2q", flagsActive: 45 }
];

export default function EnvironmentsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
      <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Server style={{ color: "var(--color-accent-primary)" }} /> Environments</h1>
      <Button variant="primary" icon={<Plus size={16} />}>New Environment</Button>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--space-4)" }}>
      {envs.map(env => (<Card key={env.id} padding="md">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-4)" }}>
          <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700 }}>{env.name}</h3>
          <Badge variant="error">{env.flagsActive} active flags</Badge>
        </div>
        <div>
          <Label style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 4, display: "block" }}>Environment specific SDK Key</Label>
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <Input type="text" readOnly value={env.key} className="mono" style={{ fontSize: "13px" }} />
            <Button variant="ghost" style={{ padding: "8px" }} icon={<Copy size={16} />} />
          </div>
        </div>
      </Card>))}
    </div>
  </div>);
}
