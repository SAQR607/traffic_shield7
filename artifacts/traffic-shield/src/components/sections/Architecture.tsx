import { motion } from "framer-motion";
import { Cpu, Plug, Server, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

const ICONS = [Cpu, Plug, Server];

export function Architecture() {
  const { t } = useI18n();

  return (
    <SectionWrapper id="architecture" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>{t.architecture.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight">
            {t.architecture.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.architecture.groups.map((group, i) => {
            const Icon = ICONS[i] ?? Cpu;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl border border-white/8 bg-card/40 p-8 hover:border-gold/30 hover:bg-card transition flex flex-col"
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-medium">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 flex-1">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <Check
                        className="mt-1 h-3.5 w-3.5 text-gold flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      <span>{item}</span>
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
