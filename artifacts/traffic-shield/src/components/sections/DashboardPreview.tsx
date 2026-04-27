import { motion } from "framer-motion";
import { Activity, KeyRound, SlidersHorizontal } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";
import { Counter } from "@/components/Counter";

const ICONS = [Activity, KeyRound, SlidersHorizontal];

export function DashboardPreview() {
  const { t } = useI18n();
  const mock = t.dashboard.mock;

  return (
    <SectionWrapper id="dashboard" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>{t.dashboard.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight leading-tight">
              {t.dashboard.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground">
              {t.dashboard.lead}
            </p>
            <div className="mt-10 space-y-4">
              {t.dashboard.tiles.map((tile, i) => {
                const Icon = ICONS[i] ?? Activity;
                return (
                  <div
                    key={tile.title}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-card/40 p-5 hover:border-gold/20 transition"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 flex-shrink-0">
                      <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-display text-base font-medium">
                        {tile.title}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {tile.body}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden glow-gold">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3 bg-black/40">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
                  console.trafficshield.ai
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  {mock.liveLabel}
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5">
                {[
                  {
                    label: mock.keysLabel,
                    value: <Counter value={6_000_000} />,
                  },
                  {
                    label: mock.sessionsLabel,
                    value: <Counter value={142_390} />,
                  },
                  {
                    label: mock.latencyLabel,
                    value: (
                      <>
                        <Counter value={2.4} format={(n) => n.toFixed(1)} />
                        <span className="text-base text-muted-foreground/70 ms-1">
                          ms
                        </span>
                      </>
                    ),
                  },
                  {
                    label: mock.regionsLabel,
                    value: <Counter value={18} />,
                  },
                ].map((cell) => (
                  <div
                    key={cell.label}
                    className="bg-[#070707] p-5"
                  >
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/70">
                      {cell.label}
                    </div>
                    <div className="mt-2 font-display text-2xl font-light text-foreground">
                      {cell.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sparkline / chart area */}
              <div className="px-6 py-7 border-t border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {mock.statusOk}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    OK
                  </div>
                </div>
                <Sparkline />
              </div>

              {/* Recent activity */}
              <div className="border-t border-white/5 px-6 py-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  {mock.recent}
                </div>
                <ul className="divide-y divide-white/5">
                  {mock.events.map((ev) => (
                    <li
                      key={`${ev.region}-${ev.ts}`}
                      className="flex items-center justify-between py-2.5 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
                        <span className="text-foreground/90">{ev.region}</span>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {ev.action}
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground/70">
                        {ev.ts}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function Sparkline() {
  // Stylised, deterministic chart
  const points = [
    20, 28, 22, 36, 30, 45, 38, 52, 44, 60, 56, 70, 64, 78, 72, 88, 80, 92, 86,
    100, 94, 88, 96, 90,
  ];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 100;
  const h = 36;
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sparkfill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#C9A14A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C9A14A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkfill)" />
      <path
        d={path}
        fill="none"
        stroke="#C9A14A"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
