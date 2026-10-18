"use client";

import React from "react";
import Hero3D from "./Hero3D";

export const HeroSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Studio Lighting Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[500px] bg-[#D4FF3F]/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#6366F1]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Benefit-Led Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20">
              <span className="w-2 h-2 rounded-full bg-[#D4FF3F] shadow-[0_0_10px_#D4FF3F] animate-pulse" />
              <span className="text-xs uppercase font-mono tracking-wider text-slate-300 font-semibold">
                Available for new projects
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-heading">
              I build custom websites that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF3F] via-white to-[#A3E635] drop-shadow-[0_0_30px_rgba(212,255,63,0.3)]">
                win customers
              </span>{" "}
              for your business.
            </h1>

            {/* Benefit Subhead */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Custom-coded with Next.js, React &amp; Node.js for restaurants, local businesses, and startups. No bloated templates — fast, secure, built to convert.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm uppercase tracking-wider font-bold bg-[#D4FF3F] text-[#0A0A0B] hover:bg-[#c6f032] hover:shadow-[0_0_30px_rgba(212,255,63,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm uppercase tracking-wider font-bold bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-white/30 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get a Free Quote</span>
                <span className="text-[#D4FF3F]">→</span>
              </button>
            </div>

            {/* Trust Row */}
            <div className="pt-6 border-t border-white/10 w-full">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3F]" />
                  <strong className="text-white">7+</strong> projects shipped
                </span>
                <span className="text-slate-600 hidden sm:inline">·</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3F]" />
                  Custom code specialist
                </span>
                <span className="text-slate-600 hidden sm:inline">·</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3F]" />
                  Replies within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Scene Centerpiece */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* 3D Canvas with depth glow */}
            <div className="w-full relative">
              <Hero3D />

              {/* Floating Glassmorphic Badges */}
              <div className="hidden sm:flex absolute -bottom-2 -left-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121215]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-[#D4FF3F]" />
                <span className="text-xs font-mono font-medium text-slate-200">Zero Page Builders</span>
              </div>

              <div className="hidden sm:flex absolute top-4 -right-2 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121215]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
                <span className="text-xs text-[#D4FF3F] font-bold">⚡ 95+</span>
                <span className="text-xs font-mono text-slate-200">Lighthouse Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
