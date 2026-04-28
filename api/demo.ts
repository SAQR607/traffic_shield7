import type { VercelRequest, VercelResponse } from "@vercel/node";

type DemoBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  locale?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NAME_MAX = 200;
const EMAIL_MAX = 320;
const COMPANY_MAX = 200;
const MESSAGE_MAX = 4000;

function isString(v: unknown): v is string {
  return typeof v === "string";
}

function parseBody(req: VercelRequest): DemoBody {
  if (req.body && typeof req.body === "object") return req.body as DemoBody;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as DemoBody;
    } catch {
      return {};
    }
  }
  return {};
}

function validate(body: DemoBody): {
  ok: true;
  data: {
    name: string;
    email: string;
    company: string;
    message: string;
    locale: "en" | "ar";
  };
} | { ok: false; fields: string[] } {
  const fields: string[] = [];

  const name = isString(body.name) ? body.name.trim() : "";
  const email = isString(body.email) ? body.email.trim() : "";
  const company = isString(body.company) ? body.company.trim() : "";
  const message = isString(body.message) ? body.message.trim() : "";
  const localeRaw = isString(body.locale) ? body.locale : "en";
  const locale: "en" | "ar" = localeRaw === "ar" ? "ar" : "en";

  if (!name || name.length > NAME_MAX) fields.push("name");
  if (!email || email.length > EMAIL_MAX || !EMAIL_RE.test(email))
    fields.push("email");
  if (!company || company.length > COMPANY_MAX) fields.push("company");
  if (!message || message.length > MESSAGE_MAX) fields.push("message");

  if (fields.length > 0) return { ok: false, fields };
  return { ok: true, data: { name, email, company, message, locale } };
}

async function notifyTelegram(payload: {
  name: string;
  email: string;
  company: string;
  message: string;
  locale: "en" | "ar";
}): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, error: "telegram_not_configured" };
  }

  const text = [
    "Traffic Shield AI — New Demo Request",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Locale: ${payload.locale}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      },
    );
    if (!res.ok) {
      const detail = (await res.text()).slice(0, 200);
      return { ok: false, error: `telegram_${res.status}: ${detail}` };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "unknown_error",
    };
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }

  const body = parseBody(req);
  const result = validate(body);
  if (!result.ok) {
    res.status(400).json({ error: "invalid_input", fields: result.fields });
    return;
  }

  const notification = await notifyTelegram(result.data);

  if (!notification.ok) {
    console.warn("Telegram notification failed:", notification.error);
  }

  const id = Date.now();
  res.status(201).json({
    id,
    createdAt: new Date(id).toISOString(),
    notified: notification.ok,
  });
}
