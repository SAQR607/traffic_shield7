import { createContext, useContext, useMemo, type ReactNode } from "react";
import { content, type ContentShape, type Locale } from "@/config/content";

type I18nContextValue = {
  locale: Locale;
  t: ContentShape;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Site is currently English-only. This provider intentionally has no
 * locale-switching logic — if multi-language support is reintroduced later,
 * add additional keys to `content.ts` and restore switching logic here.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const value = useMemo<I18nContextValue>(
    () => ({
      locale: "en",
      t: content.en,
      dir: "ltr",
    }),
    [],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}
