import { motion } from "framer-motion";
import { ArrowRight, Mail, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { media } from "@/config/media";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";
import { useDemoModal } from "@/components/DemoModal";

export function Contact() {
  const { t, dir } = useI18n();
  const { open } = useDemoModal();

  return (
    <SectionWrapper
      id="contact"
      className="relative overflow-hidden py-28 sm:py-36 bg-gradient-to-b from-[#070707] via-background to-background"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 radial-fade pointer-events-none" />
      <div
        className="absolute inset-x-0 top-0 h-px gold-divider"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Eyebrow>{t.contact.eyebrow}</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight"
        >
          {t.contact.title}
        </motion.h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.contact.lead}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={open}
            data-testid="contact-cta-demo"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-black transition hover:bg-[#d6b15a]"
          >
            {t.contact.ctaPrimary}
            <ArrowRight
              className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                dir === "rtl" ? "rotate-180" : ""
              }`}
            />
          </button>
          <a
            href={`mailto:${media.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/90 transition hover:border-gold/40 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {media.contact.email}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/5">
          <div className="bg-card p-6 text-start">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <Mail className="h-3.5 w-3.5 text-gold" />
              {t.contact.contactLabel}
            </div>
            <a
              href={`mailto:${media.contact.email}`}
              className="mt-3 block font-display text-lg text-foreground hover:text-gold transition"
            >
              {media.contact.email}
            </a>
          </div>
          <div className="bg-card p-6 text-start">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <Globe className="h-3.5 w-3.5 text-gold" />
              {t.contact.websiteLabel}
            </div>
            <div className="mt-3 font-display text-lg text-foreground">
              {media.contact.website}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
