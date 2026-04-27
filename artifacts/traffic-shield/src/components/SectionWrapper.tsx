import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ id, children, className = "" }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-gold/80">
      <span className="h-px w-8 bg-gold/40" />
      <span>{children}</span>
    </div>
  );
}
