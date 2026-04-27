import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";
import { Counter } from "@/components/Counter";

export function Performance() {
  const { t } = useI18n();

  return (
    <SectionWrapper
      id="performance"
      className="relative bg-[#070707] py-28 sm:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute inset-x-0 -top-px h-px gold-divider"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 -bottom-px h-px gold-divider"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>{t.performance.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight">
            {t.performance.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {t.performance.stats.map((stat, i) => {
            const custom = "custom" in stat ? stat.custom : undefined;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="border-t border-white/10 pt-8">
                  <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                    {custom ? (
                      <span className="gold-gradient">{custom}</span>
                    ) : (
                      <span className="gold-gradient">
                        <Counter value={stat.value} />
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 font-display text-base sm:text-lg font-medium text-foreground">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-14 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/60 max-w-2xl">
          {t.performance.footnote}
        </p>
      </div>
    </SectionWrapper>
  );
}
