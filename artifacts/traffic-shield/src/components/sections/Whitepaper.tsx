import { motion } from "framer-motion";
import { ShieldAlert, KeyRound, Layers, Lock, AlertTriangle, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

const CONCEPT_ICONS = [ShieldAlert, KeyRound, Layers, Lock];

export function Whitepaper() {
  const { t } = useI18n();
  const c = t.whitepaper;

  return (
    <SectionWrapper id="whitepaper" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight leading-tight">
            {c.title}
          </h2>
          <p className="mt-4 text-base text-gold/80 font-medium">{c.subtitle}</p>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {c.overview}
          </p>
        </div>

        {/* Concepts grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {c.concepts.map((concept, i) => {
            const Icon = CONCEPT_ICONS[i] ?? Lock;
            return (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/8 bg-card/60 p-7 hover:border-gold/20 transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 mb-5">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-medium">{concept.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{concept.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Threat model */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-2xl border border-white/8 bg-card/40 overflow-hidden"
        >
          <div className="flex items-center gap-3 px-7 py-5 border-b border-white/5">
            <AlertTriangle className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <h3 className="font-display text-lg font-medium">{c.threatModel.title}</h3>
          </div>
          <div className="divide-y divide-white/5">
            {c.threatModel.items.map((item) => (
              <div key={item.threat} className="grid grid-cols-1 sm:grid-cols-4 gap-3 px-7 py-5">
                <div className="sm:col-span-1">
                  <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-mono text-gold/90 tracking-wide">
                    {item.threat}
                  </span>
                </div>
                <p className="sm:col-span-3 text-sm leading-relaxed text-muted-foreground">
                  {item.mitigation}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Kill-switch callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 rounded-2xl border border-gold/15 bg-gold/5 p-7 flex gap-5"
        >
          <div className="flex-shrink-0 mt-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 ring-1 ring-gold/25">
              <Zap className="h-5 w-5 text-gold" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 className="font-display text-base font-medium text-gold/90">
              {c.killswitch.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.killswitch.body}</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
