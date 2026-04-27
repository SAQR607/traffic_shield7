import { motion } from "framer-motion";
import { Banknote, Antenna, Shield } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

const ICONS = [Banknote, Antenna, Shield];

export function UseCases() {
  const { t } = useI18n();

  return (
    <SectionWrapper
      id="use-cases"
      className="relative bg-[#070707] py-28 sm:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 radial-fade pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>{t.useCases.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight">
            {t.useCases.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl">
            {t.useCases.lead}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.useCases.sectors.map((sector, i) => {
            const Icon = ICONS[i] ?? Banknote;
            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl border border-white/8 bg-gradient-to-b from-card/80 to-card/40 p-8 hover:border-gold/30 transition"
              >
                <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-medium">
                    {sector.name}
                  </h3>
                </div>
                <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                  {sector.points.map((point, idx) => (
                    <li key={point} className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] text-gold/70">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
