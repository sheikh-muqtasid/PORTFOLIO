"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { testimonials } from "@/resources";

export const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4FF3F]">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            What clients say about working together.
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Delivering high-converting digital products with direct communication and reliable execution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121215]/80 hover:bg-[#15161c] border border-white/10 hover:border-[#D4FF3F]/40 rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between relative group"
            >
              <div className="space-y-6">
                {/* 5-star rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4FF3F]">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <FaQuoteLeft className="w-5 h-5 text-white/10 group-hover:text-[#D4FF3F]/30 transition-colors" />
                </div>

                {/* Clearly marked placeholder quote */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Client Info Placeholder */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center font-bold text-xs text-[#D4FF3F]">
                  {item.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    [{item.clientName} — Client Placeholder]
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
