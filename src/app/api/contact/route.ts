import { NextResponse } from "next/server";
import { deliver, isContactConfigured, parseContact } from "@/lib/contact";

export async function POST(req: Request) {
  if (!isContactConfigured()) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }
  const body = await req.json().catch(() => null);
  // Honeypot: bots fill the hidden field; pretend success.
  if (body && typeof body === "object" && (body as Record<string, unknown>).company) {
    return NextResponse.json({ ok: true });
  }
  const payload = parseContact(body);
  if (!payload) return NextResponse.json({ error: "invalid" }, { status: 400 });
  try {
    await deliver(payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
