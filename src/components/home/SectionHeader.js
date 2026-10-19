"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Shared section header: eyebrow chip, serif headline, supporting copy.
 * Keeps typography rhythm identical across all homepage sections.
 * Fades/slides in once on scroll (transform + opacity only).
 */
export const SectionHeader = ({ eyebrow, title, copy, align = "center" }) => {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${alignCls} mb-12 md:mb-16 space-y-4 max-w-3xl`}
    >
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-tint border border-accent/20 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent shadow-[0_0_28px_rgba(139,124,255,0.18)]">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-heading font-semibold tracking-tight text-ink text-[clamp(1.9rem,4vw,3rem)] leading-[1.12]">
        {title}
      </h2>
      {copy && (
        <p className="text-body text-base sm:text-lg leading-relaxed max-w-2xl">
          {copy}
        </p>
      )}
    </motion.div>
  );
};
