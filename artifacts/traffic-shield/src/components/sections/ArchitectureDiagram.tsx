import { motion } from "framer-motion";
import { Monitor, ArrowRight, Shield, Server, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

const NODE_ICONS = [Monitor, ArrowRight, Shield, Server];

const NODE_COLORS = [
  "border-gold/30 bg-gold/5",
  "border-white/10 bg-white/3",
  "border-gold/20 bg-gold/8",
  "border-white/10 bg-white/3",
];

export function ArchitectureDiagram() {
  const { t, dir } = useI18n();
  const c = t.architectureDiagram;

  return (
    <SectionWrapper
      id="architecture-diagram"
      className="relative bg-[#070707] py-28 sm:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight leading-tight">
            {c.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">{c.caption}</p>
        </div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          {/* Desktop: horizontal flow */}
          <div className="hidden md:flex items-stretch gap-0">
            {c.nodes.map((node, i) => {
              const Icon = NODE_ICONS[i] ?? Server;
              const isArrow = i === 1;
              return (
                <div key={node.label} className={`flex ${isArrow ? "items-center flex-shrink-0 px-2" : "flex-1"}`}>
                  {isArrow ? (
                    <div className="flex flex-col items-center gap-2 px-4">
                      <div className="h-px w-16 bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" />
                      <ArrowRight
                        className={`h-4 w-4 text-gold/60 ${dir === "rtl" ? "rotate-180" : ""}`}
                        strokeWidth={1.5}
                      />
                      <div className="h-px w-16 bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" />
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.12 }}
                      className={`w-full rounded-2xl border p-6 ${NODE_COLORS[i] ?? "border-white/10 bg-white/3"}`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 mb-4">
                        <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-sm font-semibold leading-snug">
                        {node.label}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        {node.desc}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden space-y-4">
            {c.nodes.map((node, i) => {
              if (i === 1) {
                return (
                  <div key="connector" className="flex justify-center py-1">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4 bg-gold/40" />
                      <ArrowRight
                        className="h-4 w-4 text-gold/60 rotate-90"
                        strokeWidth={1.5}
                      />
                      <div className="w-px h-4 bg-gold/40" />
                    </div>
                  </div>
                );
              }
              const Icon = NODE_ICONS[i] ?? Server;
              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border p-5 ${NODE_COLORS[i] ?? "border-white/10 bg-white/3"}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
                      <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold">{node.label}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Privacy note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-start gap-3 rounded-xl border border-white/8 bg-white/2 px-5 py-4"
        >
          <Info className="flex-shrink-0 h-4 w-4 text-muted-foreground mt-0.5" strokeWidth={1.5} />
          <p className="text-xs leading-relaxed text-muted-foreground">{c.note}</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
