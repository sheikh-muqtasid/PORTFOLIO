"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { testimonials } from "@/resources";
import { SectionHeader } from "./SectionHeader";

export const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-cream/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client feedback"
          title="What clients say."
          copy="Client testimonials will appear here — the placeholders below mark exactly where real quotes will go."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((item, idx) => (
            <figure
              key={idx}
              className="bg-surface border border-dashed border-ember/30 rounded-3xl p-7 sm:p-8 shadow-[0_10px_36px_rgba(28,25,23,0.05)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-ember" role="img" aria-label="Rated 5 out of 5 stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" aria-hidden="true" />
                  ))}
                </div>
                <FaQuoteLeft className="w-5 h-5 text-ember/20" aria-hidden="true" />
              </div>

              <blockquote className="text-body leading-relaxed italic flex-1">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="pt-5 mt-5 border-t border-line flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-ember-tint border border-ember/20 flex items-center justify-center font-heading font-semibold text-sm text-ember" aria-hidden="true">
                  {item.clientName.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    [{item.clientName} — placeholder]
                  </span>
                  <span className="block text-xs text-muted">
                    {item.role}, {item.company} [placeholder]
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
