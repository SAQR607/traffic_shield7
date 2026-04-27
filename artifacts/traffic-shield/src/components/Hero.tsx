import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SafeHeroScene } from "@/components/SafeHeroScene";
import { useDemoModal } from "@/components/DemoModal";

export function Hero() {
  const { t, dir } = useI18n();
  const { open } = useDemoModal();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-background min-h-[100svh] flex items-center"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-60 radial-fade pointer-events-none" />
      <div className="absolute inset-0 radial-fade opacity-90 pointer-events-none">
        <SafeHeroScene />
      </div>
      {/* CSS-only fallback glow when WebGL is unavailable */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(201,161,74,0.14), transparent 55%), radial-gradient(circle at 30% 70%, rgba(201,161,74,0.08), transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] font-mono text-gold/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            {t.hero.kicker}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-foreground"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={open}
              data-testid="hero-cta-demo"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-[#d6b15a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.hero.ctaPrimary}
              <ArrowRight
                className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                  dir === "rtl" ? "rotate-180" : ""
                }`}
              />
            </button>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-gold/40 hover:text-white"
            >
              <FileText className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground/80"
          >
            <span className="h-px w-8 bg-white/20" />
            {t.hero.tag}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
