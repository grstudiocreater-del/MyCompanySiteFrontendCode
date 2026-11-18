import { brand } from "@/lib/brand";
import { normalizeContact, validateContact, type ContactInput } from "@/lib/validation";

/*
 * Contact form endpoint.
 * Delivery is configured with environment variables (see .env.example):
 *  - RESEND_API_KEY + CONTACT_TO_EMAIL  → sends an email through Resend
 *  - CONTACT_WEBHOOK_URL                → POSTs JSON to any webhook
 * If neither is configured the endpoint returns 503 so the form never
 * shows a success message for a message nobody will receive.
 */

type ContactResponse =
  | { ok: true }
  | { ok: false; message: string; errors?: Partial<Record<keyof ContactInput, string>> };

const json = (body: ContactResponse, status: number) => Response.json(body, { status });

// Basic in-memory rate limit: fine for a single instance; use a shared store if you scale out.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_REQUESTS;
}

async function deliver(data: ContactInput): Promise<"sent" | "not-configured"> {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, CONTACT_WEBHOOK_URL } = process.env;

  if (RESEND_API_KEY && CONTACT_TO_EMAIL) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL || `${brand.name} Website <onboarding@resend.dev>`,
        to: [CONTACT_TO_EMAIL],
        reply_to: data.email,
        subject: `[Website] ${data.subject}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`,
      }),
    });
    if (!response.ok) throw new Error(`Email provider responded with ${response.status}`);
    return "sent";
  }

  if (CONTACT_WEBHOOK_URL) {
    const response = await fetch(CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: brand.website, receivedAt: new Date().toISOString() }),
    });
    if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
    return "sent";
  }

  return "not-configured";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: "We couldn't read that request. Please try again." }, 400);
  }

  // Honeypot: real visitors never see or fill this field.
  if (body && typeof body === "object" && "company" in body && (body as { company?: unknown }).company) {
    return json({ ok: true }, 200);
  }

  const data = normalizeContact(body);
  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, message: "Please check the highlighted fields.", errors }, 422);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return json({ ok: false, message: "You've sent a few messages in a short time. Please wait a little and try again." }, 429);
  }

  try {
    const result = await deliver(data);
    if (result === "not-configured") {
      console.warn("[contact] No delivery method configured. Set RESEND_API_KEY + CONTACT_TO_EMAIL or CONTACT_WEBHOOK_URL.");
      return json(
        { ok: false, message: `Our contact form isn't available right now. Please email us directly at ${brand.email}.` },
        503,
      );
    }
    return json({ ok: true }, 200);
  } catch (error) {
    console.error("[contact] Delivery failed:", error);
    return json(
      { ok: false, message: `Something went wrong while sending your message. Please try again or email ${brand.email}.` },
      502,
    );
  }
}
