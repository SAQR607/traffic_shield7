import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";

export function Benchmarks() {
  const { t } = useI18n();
  const c = t.benchmarks;

  return (
    <SectionWrapper
      id="benchmarks"
      className="relative bg-[#070707] py-28 sm:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight">
            {c.title}
          </h2>
        </div>

        {/* Metrics */}
        <div className="mt-16 space-y-8">
          {c.metrics.map((metric, mi) => (
            <motion.div
              key={metric.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: mi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/8 bg-card/40 overflow-hidden"
            >
              {/* Category header */}
              <div className="px-6 py-4 border-b border-white/5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold/70">
                  {metric.category}
                </h3>
              </div>

              {/* Comparison rows */}
              <div className="divide-y divide-white/5">
                {metric.items.map((item, ii) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 px-6 py-4 transition ${
                      item.highlight ? "bg-gold/4 hover:bg-gold/6" : "hover:bg-white/2"
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      {item.highlight ? (
                        <CheckCircle2 className="h-5 w-5 text-gold" strokeWidth={1.5} />
                      ) : (
                        <XCircle className="h-5 w-5 text-muted-foreground/40" strokeWidth={1.5} />
                      )}
                    </div>

                    {/* Bar + label */}
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-medium truncate ${
                          item.highlight ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </p>

                      {/* Visual bar */}
                      <div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.highlight ? "85%" : `${20 + ii * 8}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + ii * 0.1, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            item.highlight ? "bg-gold/60" : "bg-white/15"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Value */}
                    <div className="flex-shrink-0 text-end">
                      <span
                        className={`text-sm font-mono font-medium ${
                          item.highlight ? "text-gold" : "text-muted-foreground/60"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-start gap-3 rounded-xl border border-white/8 bg-white/2 px-5 py-4"
        >
          <Info className="flex-shrink-0 h-4 w-4 text-muted-foreground mt-0.5" strokeWidth={1.5} />
          <p className="text-xs leading-relaxed text-muted-foreground">{c.disclaimer}</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
