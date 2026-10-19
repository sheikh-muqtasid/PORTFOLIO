"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { testimonials } from "@/resources";
import { SectionHeader } from "./SectionHeader";

export const TestimonialsSection = () => {
  return (
    <section className="grain w-full py-20 md:py-28 bg-cream/60 relative overflow-hidden">
      {/* Ambient accent glows */}
      <div
        className="accent-drift absolute -top-32 right-1/4 w-[560px] h-[360px] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, rgba(139,124,255,0.09) 0%, transparent 70%)" }}
      />
      <div
        className="accent-drift absolute -bottom-40 left-1/5 w-[520px] h-[360px] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, rgba(109,93,246,0.12) 0%, transparent 70%)", animationDelay: "-4.5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Client feedback"
          title="Restaurant owners, in their own words."
          copy="Real outcomes from real dining rooms — more reservations, more online orders, more regulars."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((item, idx) => (
            <figure
              key={idx}
              className="cine-card group relative rounded-3xl p-7 sm:p-8 flex flex-col overflow-hidden"
            >
              <div
                className="absolute top-0 left-8 right-8 h-px accent-hairline opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between mb-5">
                <div
                  className="flex items-center gap-1 text-accent drop-shadow-[0_0_8px_rgba(139,124,255,0.45)]"
                  role="img"
                  aria-label={`Rated ${item.rating} out of 5 stars`}
                >
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" aria-hidden="true" />
                  ))}
                </div>
                <FaQuoteLeft className="w-6 h-6 text-accent/20 group-hover:text-accent/35 transition-colors duration-300" aria-hidden="true" />
              </div>

              <blockquote className="text-body leading-relaxed text-[15px] flex-1">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="pt-5 mt-6 border-t border-line flex items-center gap-3.5">
                <span
                  className="w-11 h-11 rounded-full bg-accent-tint border border-accent/25 flex items-center justify-center font-heading font-semibold text-base text-accent flex-shrink-0 shadow-[0_0_20px_rgba(139,124,255,0.15)]"
                  aria-hidden="true"
                >
                  {item.clientName.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink">
                    {item.clientName}
                  </span>
                  <span className="block text-xs text-muted mt-0.5">
                    {item.role} · {item.company} · {item.city}
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
