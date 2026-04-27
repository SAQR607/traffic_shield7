import { motion } from "framer-motion";
import { AlertTriangle, KeyRound, ShieldOff } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

const ICONS = [KeyRound, ShieldOff, AlertTriangle];

export function Problem() {
  const { t } = useI18n();

  return (
    <SectionWrapper id="problem" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>{t.problem.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight">
            {t.problem.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl">
            {t.problem.lead}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
          {t.problem.cards.map((card, i) => {
            const Icon = ICONS[i] ?? KeyRound;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-card p-8 sm:p-10 hover:bg-[#0d0d0d] transition"
              >
                <div className="flex items-center justify-between mb-8">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
                <div className="absolute inset-x-8 bottom-0 h-px gold-divider opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-xl border border-gold/20 bg-gradient-to-r from-gold/5 via-gold/[0.02] to-transparent px-8 py-6 sm:py-8 flex items-center gap-5"
        >
          <span className="h-10 w-px bg-gold/40" />
          <p className="font-display text-base sm:text-2xl tracking-[0.05em] text-foreground/95">
            {t.problem.banner}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
