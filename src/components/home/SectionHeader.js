"use client";

import React from "react";

/**
 * Shared section header: eyebrow chip, serif headline, supporting copy.
 * Keeps typography rhythm identical across all homepage sections.
 */
export const SectionHeader = ({ eyebrow, title, copy, align = "center" }) => {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignCls} mb-12 md:mb-16 space-y-4 max-w-3xl`}>
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-tint border border-ember/15 text-[11px] font-semibold uppercase tracking-[0.14em] text-ember">
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
    </div>
  );
};
