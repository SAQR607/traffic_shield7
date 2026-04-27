import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

export function Roadmap() {
  const { t } = useI18n();

  return (
    <SectionWrapper id="roadmap" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>{t.roadmap.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight">
            {t.roadmap.title}
          </h2>
        </div>

        <div className="mt-16 relative">
          <div
            className="absolute inset-x-0 top-7 h-px gold-divider hidden md:block"
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {t.roadmap.stages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="flex justify-center md:justify-start">
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-background ring-1 ring-gold/40 ${
                      i === 0 ? "shadow-[0_0_24px_rgba(201,161,74,0.3)]" : ""
                    }`}
                  >
                    <span
                      className={`h-3 w-3 rounded-full ${
                        i === 0 ? "bg-gold animate-pulse" : "bg-gold/40"
                      }`}
                    />
                  </div>
                </div>
                <div className="mt-6 text-center md:text-start">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80">
                    {stage.phase}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-light tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-sm mx-auto md:mx-0">
                    {stage.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
