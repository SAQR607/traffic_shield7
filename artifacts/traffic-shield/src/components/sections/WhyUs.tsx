import { motion } from "framer-motion";
import { Fingerprint, TrendingUp, LayoutGrid } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

const ICONS = [Fingerprint, TrendingUp, LayoutGrid];

export function WhyUs() {
  const { t } = useI18n();

  return (
    <SectionWrapper
      id="why-us"
      className="relative bg-[#070707] py-28 sm:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>{t.whyUs.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight">
            {t.whyUs.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.whyUs.cards.map((card, i) => {
            const Icon = ICONS[i] ?? Fingerprint;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl border border-white/8 bg-card/60 p-8 hover:border-gold/30 transition"
              >
                <Icon
                  className="h-7 w-7 text-gold mb-7"
                  strokeWidth={1.25}
                />
                <h3 className="font-display text-xl font-medium">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
