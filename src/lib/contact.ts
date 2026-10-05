export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  kind: string;
  details: string;
  existing: string;
  url: string;
}

/**
 * TODO: the destination is E-Ventures' own email infrastructure, which is still being set up.
 * Nothing is connected on purpose — no temporary address or service is used.
 * To go live: implement `deliver` and make `isContactConfigured` return true
 * (e.g. when the required env vars exist). The form and /api/contact adapt automatically.
 */
export function isContactConfigured(): boolean {
  return false;
}

export async function deliver(payload: ContactPayload): Promise<void> {
  void payload;
  throw new Error("Contact destination is not configured");
}

const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Returns a clean payload, or null when required fields are missing/invalid. */
export function parseContact(raw: unknown): ContactPayload | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const p: ContactPayload = {
    name: text(r.name, 120),
    phone: text(r.phone, 40),
    email: text(r.email, 200),
    kind: text(r.kind, 40),
    details: text(r.details, 4000),
    existing: text(r.existing, 40),
    url: text(r.url, 300),
  };
  if (!p.name || !p.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email) || !p.kind) return null;
  if (p.url && !/^https?:\/\//i.test(p.url)) return null;
  return p;
}
