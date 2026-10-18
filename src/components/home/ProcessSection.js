"use client";

import React from "react";
import { processSteps } from "@/resources";
import { FaPhone, FaPenNib, FaCode, FaRocket } from "react-icons/fa6";

const stepIcons = [FaPhone, FaPenNib, FaCode, FaRocket];

export const ProcessSection = () => {
  return (
    <section id="process" className="w-full scroll-mt-24 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4FF3F]">
            Transparent Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Simple, risk-free development process.
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            You always know exactly what is happening next. No tech jargon, no surprises, and zero hidden costs.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || FaCode;
            return (
              <div
                key={step.step}
                className="relative bg-[#121215]/80 hover:bg-[#15161c] border border-white/10 hover:border-[#D4FF3F]/40 rounded-2xl p-7 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4FF3F] group-hover:scale-110 group-hover:border-[#D4FF3F]/40 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-600 group-hover:text-[#D4FF3F]/60 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4FF3F] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Progress bar accent */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D4FF3F]/40 to-[#D4FF3F]"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
