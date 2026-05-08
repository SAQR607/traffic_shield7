import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";
import { teamMembers } from "@/data/team";

/* ─── TeamAvatar ──────────────────────────────────────────────────────────── */

function TeamAvatar({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-[#0d0d0d]" style={{ aspectRatio: "4/5" }}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setError(true)}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/8 bg-white/4">
            <User className="h-12 w-12 text-muted-foreground/30" strokeWidth={1} />
          </div>
        </div>
      )}
      {/* Bottom fade into card surface */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--card)) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

/* ─── TeamCard ────────────────────────────────────────────────────────────── */

function TeamCard({
  member,
  locale,
  linkedinLabel,
  index,
  className = "",
}: {
  member: (typeof teamMembers)[number];
  locale: "en" | "ar";
  linkedinLabel: string;
  index: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-card
        shadow-[0_2px_32px_rgba(0,0,0,0.5)]
        transition-all duration-300
        hover:border-gold/20 hover:shadow-[0_4px_48px_rgba(201,161,74,0.07)]
        ${className}`}
    >
      {/* Photo */}
      <TeamAvatar src={member.image} alt={member.name[locale]} />

      {/* Text body */}
      <div className="flex flex-1 flex-col px-6 pt-5 pb-0">
        {/* Role — above name for visual rhythm (label → subject) */}
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold/70">
          {member.role[locale]}
        </p>

        {/* Name */}
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight">
          {member.name[locale]}
        </h3>

        {/* Divider */}
        <div className="mt-4 h-px w-10 bg-gold/20" />

        {/* Bio */}
        <p className="mt-4 flex-1 text-sm leading-[1.75] text-muted-foreground">
          {member.bio[locale]}
        </p>
      </div>

      {/* LinkedIn CTA — anchored at bottom, full-width */}
      <div className="mt-6 border-t border-white/[0.06]">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name[locale]} — LinkedIn`}
          className="flex w-full items-center justify-center gap-2.5 px-6 py-4 text-xs font-medium tracking-wide text-muted-foreground
            transition-colors duration-200
            hover:bg-gold/[0.06] hover:text-gold
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold/40"
        >
          <Linkedin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
          <span>{linkedinLabel}</span>
        </a>
      </div>
    </motion.article>
  );
}

/* ─── FoundingTeam section ────────────────────────────────────────────────── */

export function FoundingTeam() {
  const { t, locale } = useI18n();
  const c = t.foundingTeam;

  return (
    <SectionWrapper
      id="founding-team"
      className="relative overflow-hidden bg-[#060606] py-28 sm:py-36"
    >
      {/* Subtle radial accent behind the header */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #C9A14A 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="max-w-2xl">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight">
            {c.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            {c.subtitle}
          </p>
        </div>

        {/*
          5-member grid:
          · mobile:  1 column
          · tablet:  2 columns  (rows: [0,1] / [2,3] / [4])
          · desktop: 3 columns, first row [0,1,2], second row centred via col-start-2 → [_,3,4]
        */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <TeamCard
              key={member.id}
              member={member}
              locale={locale}
              linkedinLabel={c.linkedinLabel}
              index={i}
              className={i === 3 ? "lg:col-start-2" : ""}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
