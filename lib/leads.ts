import { promises as fs } from "fs";
import path from "path";
import type { Lead } from "@/types";

/**
 * Lead storage path — serverless-safe for Vercel.
 * On Vercel, only /tmp is writable (ephemeral between invocations).
 * TODO: Replace with a persistent store (Supabase, Resend email, Google Sheets, etc.)
 */
function getLeadsFilePath(): string {
  if (process.env.VERCEL === "1") {
    return path.join("/tmp", "virat-ramnivas-leads.json");
  }
  return path.join(process.cwd(), "data", "leads.json");
}

async function ensureLeadsFile(): Promise<void> {
  const leadsFile = getLeadsFilePath();
  const dir = path.dirname(leadsFile);
  await fs.mkdir(dir, { recursive: true });

  try {
    await fs.access(leadsFile);
  } catch {
    await fs.writeFile(leadsFile, "[]", "utf-8");
  }
}

export async function saveLead(
  lead: Omit<Lead, "id" | "createdAt">
): Promise<Lead> {
  const newLead: Lead = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    createdAt: new Date().toISOString(),
  };

  // Always log on serverless so leads appear in Vercel/hosting logs even if file write fails
  console.info("[lead]", JSON.stringify(newLead));

  try {
    await ensureLeadsFile();
    const leadsFile = getLeadsFilePath();
    const content = await fs.readFile(leadsFile, "utf-8");
    const leads: Lead[] = JSON.parse(content);
    leads.push(newLead);
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2), "utf-8");
  } catch (error) {
    console.error("Lead file write failed (lead still logged above):", error);
  }

  return newLead;
}

export async function getLeads(): Promise<Lead[]> {
  await ensureLeadsFile();
  const content = await fs.readFile(getLeadsFilePath(), "utf-8");
  return JSON.parse(content) as Lead[];
}
