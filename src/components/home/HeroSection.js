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
    <section className="relative w-full pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-paper">
      {/* Soft ambient wash */}
      <div
        className="absolute inset-x-0 top-0 h-[480px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(166,58,10,0.07) 0%, rgba(253,252,251,0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Glassmorphic availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 border border-line backdrop-blur-xl shadow-[0_8px_24px_rgba(28,25,23,0.06)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
              </span>
              <span className="text-xs uppercase font-semibold tracking-[0.12em] text-body">
                Available for new projects
              </span>
            </div>

            {/* Name, prominent */}
            <p className="font-heading italic text-xl sm:text-2xl text-muted">
              Hi, I&rsquo;m Sheikh Muqtasid.
            </p>

            {/* H1 */}
            <h1 className="font-heading font-semibold tracking-tight text-ink text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.08] max-w-2xl">
              I build websites for restaurants that bring in{" "}
              <em className="text-ember font-heading italic">
                more orders and reservations
              </em>
              .
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg lg:text-xl text-body max-w-2xl leading-relaxed">
              Custom-coded with Next.js, React &amp; Node.js for restaurants, local businesses,
              and startups. No bloated templates — fast, secure, built to convert.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm uppercase tracking-wider font-bold bg-ember text-white hover:bg-ember-dark transition-all duration-300 hover:-translate-y-0.5 shadow-[0_12px_28px_rgba(166,58,10,0.28)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember"
              >
                <span>Get a Free Quote</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm uppercase tracking-wider font-bold bg-white text-ink border border-line hover:border-ink/30 shadow-[0_8px_20px_rgba(28,25,23,0.06)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Trust row */}
            <div className="pt-6 border-t border-line w-full">
              <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-muted font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
                  <strong className="text-ink font-semibold">7+</strong>&nbsp;projects shipped
                </span>
                <span className="text-line" aria-hidden="true">|</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
                  Custom code specialist
                </span>
                <span className="text-line" aria-hidden="true">|</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
                  Replies within 24 hours
                </span>
              </p>
            </div>
          </div>

          {/* Right: interactive 3D visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative max-w-[520px]">
              <Hero3D />

              {/* Floating glass badges */}
              <div className="hidden sm:flex absolute bottom-6 -left-2 items-center gap-2 px-3.5 py-2 rounded-xl bg-white/75 border border-line backdrop-blur-xl shadow-[0_10px_28px_rgba(28,25,23,0.08)]">
                <span className="w-2 h-2 rounded-full bg-ember" aria-hidden="true" />
                <span className="text-xs font-medium text-body">Hand-coded · No page builders</span>
              </div>

              <div className="hidden sm:flex absolute top-6 -right-1 items-center gap-2 px-3.5 py-2 rounded-xl bg-white/75 border border-line backdrop-blur-xl shadow-[0_10px_28px_rgba(28,25,23,0.08)]">
                <span className="text-xs font-semibold text-ember">Next.js · React · Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
