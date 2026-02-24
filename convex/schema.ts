import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  flags: defineTable({ key: v.string(), name: v.string(), type: v.string(), description: v.optional(v.string()) }).index("by_key", ["key"]),
  environments: defineTable({ name: v.string(), sdkKey: v.string() }),
  flagValues: defineTable({ flagId: v.id("flags"), envId: v.id("environments"), enabled: v.boolean(), rolloutPct: v.optional(v.number()) }).index("by_env", ["envId"]),
  auditLogs: defineTable({ action: v.string(), target: v.string(), user: v.string(), envId: v.id("environments"), timestamp: v.string() })
});
