import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const demoRequestsTable = pgTable("demo_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  message: text("message").notNull(),
  locale: text("locale"),
  notified: boolean("notified").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type DemoRequest = typeof demoRequestsTable.$inferSelect;
export type InsertDemoRequest = typeof demoRequestsTable.$inferInsert;
