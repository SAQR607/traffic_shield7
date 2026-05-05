import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

export function RealUseCase() {
  const { t } = useI18n();
  const c = t.realUseCase;

  return (
    <SectionWrapper id="real-use-case" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight leading-tight">
              {c.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {c.lead}
            </p>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute start-[22px] top-8 bottom-8 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden sm:block" />

              <div className="space-y-6">
                {c.steps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex gap-5"
                  >
                    {/* Step badge */}
                    <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/8 z-10">
                      <span className="font-mono text-[11px] text-gold font-semibold tracking-widest">
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-2xl border border-white/8 bg-card/50 px-6 py-5 hover:border-gold/20 transition">
                      <h3 className="font-display text-base font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
