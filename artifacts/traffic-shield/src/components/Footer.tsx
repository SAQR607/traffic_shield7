import { Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { media } from "@/config/media";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-sm font-semibold tracking-[0.2em]">
            {media.brand.wordmark}
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            {t.footer.tagline}
          </p>
        </div>
        <div className="md:text-center">
          <a
            href={`mailto:${media.contact.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            {media.contact.email}
          </a>
          <div className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/70">
            {media.contact.website}
          </div>
        </div>
        <div className="flex md:justify-end items-start gap-3">
          <a
            href={media.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.links.linkedin}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground hover:text-gold hover:border-gold/40 transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={media.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.links.twitter}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground hover:text-gold hover:border-gold/40 transition"
          >
            <span className="font-display text-base font-semibold">X</span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground/70 text-center md:text-start">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
