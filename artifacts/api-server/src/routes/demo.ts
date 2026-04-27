import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { CreateDemoRequestBody } from "@workspace/api-zod";
import { db, demoRequestsTable } from "@workspace/db";

const router: IRouter = Router();

async function notifyTelegram(payload: {
  name: string;
  email: string;
  company: string;
  message: string;
  locale?: string;
  id: number;
}): Promise<{ ok: boolean; error?: string }> {
  const token = process.env["TELEGRAM_BOT_TOKEN"];
  const chatId = process.env["TELEGRAM_CHAT_ID"];

  if (!token || !chatId) {
    return { ok: false, error: "telegram_not_configured" };
  }

  const lines = [
    "Traffic Shield AI — New Demo Request",
    "",
    `ID: ${payload.id}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Locale: ${payload.locale ?? "en"}`,
    "",
    "Message:",
    payload.message,
  ];

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: lines.join("\n"),
          disable_web_page_preview: true,
        }),
      },
    );
    if (!res.ok) {
      const text = await res.text();
      return {
        ok: false,
        error: `telegram_${res.status}: ${text.slice(0, 200)}`,
      };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown" };
  }
}

router.post("/demo", async (req, res) => {
  const parsed = CreateDemoRequestBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({
      error: "invalid_input",
      details: parsed.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join("; "),
    });
    return;
  }

  const data = parsed.data;

  try {
    const [row] = await db
      .insert(demoRequestsTable)
      .values({
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
        locale: data.locale ?? null,
      })
      .returning({
        id: demoRequestsTable.id,
        createdAt: demoRequestsTable.createdAt,
      });

    if (!row) {
      throw new Error("Insert returned no row");
    }

    const notification = await notifyTelegram({
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
      locale: data.locale,
      id: row.id,
    });

    if (notification.ok) {
      await db
        .update(demoRequestsTable)
        .set({ notified: true })
        .where(eq(demoRequestsTable.id, row.id));
    } else {
      req.log.warn(
        { error: notification.error, id: row.id },
        "Telegram notification failed",
      );
    }

    res.status(201).json({
      id: row.id,
      createdAt: row.createdAt.toISOString(),
      notified: notification.ok,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to store demo request");
    res.status(500).json({
      error: "internal_error",
      details: "Failed to store demo request",
    });
  }
});

export default router;
