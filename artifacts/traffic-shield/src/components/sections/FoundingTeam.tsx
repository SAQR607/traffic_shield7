import { motion } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionWrapper, Eyebrow } from "@/components/SectionWrapper";
import { teamMembers } from "@/data/team";
import { useState } from "react";

function TeamCard({
  member,
  locale,
  linkedinLabel,
  index,
}: {
  member: (typeof teamMembers)[number];
  locale: "en" | "ar";
  linkedinLabel: string;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl border border-white/8 bg-card/60 overflow-hidden hover:border-gold/25 transition-colors duration-300"
    >
      {/* Avatar */}
      <div className="relative h-56 w-full bg-[#0a0a0a] overflow-hidden">
        {!imgError ? (
          <img
            src={member.image}
            alt={member.name[locale]}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          /* Fallback when photo is not yet uploaded */
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <User className="h-10 w-10 text-muted-foreground/40" strokeWidth={1} />
            </div>
          </div>
        )}
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-medium leading-snug">
          {member.name[locale]}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold/75">
          {member.role[locale]}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {member.bio[locale]}
        </p>

        {/* LinkedIn */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name[locale]} on LinkedIn`}
          className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-white/12 px-4 py-2 text-xs font-medium text-muted-foreground transition hover:border-gold/40 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        >
          <Linkedin className="h-3.5 w-3.5" strokeWidth={1.75} />
          {linkedinLabel}
        </a>
      </div>
    </motion.div>
  );
}

export function FoundingTeam() {
  const { t, locale } = useI18n();
  const c = t.foundingTeam;

  return (
    <SectionWrapper
      id="founding-team"
      className="relative bg-[#070707] py-28 sm:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-light tracking-tight">
            {c.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            {c.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <TeamCard
              key={member.id}
              member={member}
              locale={locale}
              linkedinLabel={c.linkedinLabel}
              index={i}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
