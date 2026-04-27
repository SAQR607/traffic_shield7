# Traffic Shield AI — Marketing Site

## Overview
Production-ready, single-page bilingual (English / Arabic, RTL-aware) marketing site for **Traffic Shield AI**, a cybersecurity company offering dynamic encryption with live entropy.

## Stack
- **Monorepo:** pnpm workspace
- **Frontend artifact:** `artifacts/traffic-shield` — React 19 + Vite + Tailwind v4 + shadcn UI
- **API artifact:** `artifacts/api-server` — Express + Drizzle ORM
- **Database:** Postgres (Replit-managed `DATABASE_URL`)
- **3D / motion:** `@react-three/fiber`, `@react-three/drei`, `three`, `framer-motion`
- **Forms:** `react-hook-form`
- **i18n:** lightweight in-house provider (`src/lib/i18n.tsx`) using local content registry, persisted to `localStorage`. Arabic auto-switches to IBM Plex Sans Arabic and `dir="rtl"`.

## Brand
- Palette: deep black background (`hsl(0 0% 4%)`), warm white text, gold accent `#C9A14A`
- Typography is the brand — no logo. Wordmark `TRAFFIC SHIELD AI` stays Latin in both locales.
- Display font: Space Grotesk. Body: Inter. Mono: JetBrains Mono. Arabic: IBM Plex Sans Arabic.

## Sections (top → bottom)
Hero (with optional 3D node-network on WebGL-enabled clients) · Problem · Solution · Technology · Performance (animated counters) · Architecture · Use Cases · Dashboard Preview · Why Us · Roadmap · Contact

## Demo capture flow
- `POST /api/demo` accepts `{ name, email, company, message, locale }` (validated via shared Zod schema).
- Persists to `demo_requests` table (`lib/db/src/schema/demoRequests.ts`).
- Sends a Telegram notification when `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are configured AND the bot has access to the chat. Notification failures are logged but never fail the request — the row is always stored.

## Required secrets
- `DATABASE_URL` (auto-provisioned)
- `TELEGRAM_BOT_TOKEN` — from @BotFather
- `TELEGRAM_CHAT_ID` — must be a chat the bot can post to. For private chats, send `/start` to your bot first; for groups, add the bot to the group.

## Key files
- `artifacts/traffic-shield/src/config/content.ts` — all EN/AR copy, single source of truth
- `artifacts/traffic-shield/src/config/media.ts` — brand strings, social URLs, contact info
- `artifacts/traffic-shield/src/lib/i18n.tsx` — `LanguageProvider` + `useI18n()`
- `artifacts/traffic-shield/src/components/Hero.tsx`, `SafeHeroScene.tsx`, `HeroScene.tsx` — hero with WebGL fallback
- `artifacts/traffic-shield/src/components/sections/*` — one file per section
- `artifacts/traffic-shield/src/components/DemoModal.tsx` — the request-demo modal (form + success state)
- `artifacts/api-server/src/routes/demo.ts` — POST /api/demo handler with Telegram notify
- `lib/db/src/schema/demoRequests.ts` — Drizzle schema
- `lib/api-spec/openapi.yaml` — source of truth for API surface, regenerates clients

## Local dev
- `pnpm --filter @workspace/traffic-shield run dev` — frontend
- `pnpm --filter @workspace/api-server run dev` — backend
- `pnpm --filter @workspace/db run push` — apply schema changes

## Notes / caveats
- The hero 3D scene is gracefully disabled when WebGL is unavailable (e.g. inside the workspace preview iframe sandbox). Real visitors with WebGL will see the gold node-network. A subtle CSS gradient is always layered behind it.
- Smooth scroll uses native `scroll-behavior: smooth` on `<html>`. Anchor links use plain `#section-id`.
