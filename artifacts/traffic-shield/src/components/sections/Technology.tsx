import { motion } from "framer-motion";
import { Activity, Zap, Shuffle, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

const ICONS = [Activity, Zap, Shuffle];

export function Technology() {
  const { t } = useI18n();

  return (
    <SectionWrapper id="technology" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>{t.technology.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight leading-tight">
              {t.technology.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-md">
              {t.technology.lead}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {t.technology.items.map((item, i) => {
              const Icon = ICONS[i] ?? Activity;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-start gap-6 bg-card p-7 sm:p-8 hover:bg-[#0d0d0d] transition"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50 self-start mt-2">
                    0{i + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 mx-auto max-w-3xl text-center"
        >
          <Quote
            className="mx-auto h-6 w-6 text-gold/60 mb-6"
            strokeWidth={1.5}
          />
          <blockquote className="font-display text-2xl sm:text-3xl font-light leading-snug tracking-tight text-foreground/95">
            &ldquo;{t.technology.pullquote}&rdquo;
          </blockquote>
        </motion.figure>
      </div>
    </SectionWrapper>
  );
}
