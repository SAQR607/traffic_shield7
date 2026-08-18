import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { media } from "@/config/media";
import { useDemoModal } from "@/components/DemoModal";

const SECTIONS: Array<{ id: string; key: keyof ReturnType<typeof useI18n>["t"]["nav"] }> = [
  { id: "problem", key: "problem" },
  { id: "solution", key: "solution" },
  { id: "technology", key: "technology" },
  { id: "use-cases", key: "useCases" },
  { id: "founding-team", key: "foundingTeam" },
];

export function Navbar() {
  const { t } = useI18n();
  const { open: openDemo } = useDemoModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-background/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 h-16">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-[0.18em] text-foreground hover:text-gold transition"
          data-testid="brand-wordmark"
        >
          {media.brand.wordmark}
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-muted-foreground">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="transition hover:text-foreground"
            >
              {t.nav[s.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openDemo}
            className="hidden sm:inline-flex items-center rounded-full bg-gold px-4 py-1.5 text-xs font-medium text-black transition hover:bg-[#d6b15a]"
            data-testid="nav-cta-demo"
          >
            {t.nav.cta}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/5 bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground transition py-1"
              >
                {t.nav[s.key]}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openDemo();
              }}
              className="col-span-2 mt-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-black"
            >
              {t.nav.cta}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
