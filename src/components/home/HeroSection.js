"use client";

import React, { useEffect, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Hero3D from "./Hero3D";
import MagneticButton from "@/components/fx/MagneticButton";
import { home, person } from "@/resources/content";

const EASE = [0.22, 1, 0.36, 1];

// Headline split into words for the staggered mask reveal.
// Meaning kept from the original: restaurant websites that drive orders + reservations.
const HEADLINE_WORDS = [
  { t: "I" },
  { t: "build" },
  { t: "websites" },
  { t: "for" },
  { t: "restaurants" },
  { t: "that" },
  { t: "bring" },
  { t: "in" },
  { t: "more", accent: true },
  { t: "orders", accent: true },
  { t: "and", accent: true },
  { t: "reservations.", accent: true },
];

/**
 * Choreography gate: the text reveal starts when the preloader dispatches
 * `window` event "preloader:done". A 2.5s timeout starts the animation anyway
 * so the hero never stays hidden if the event never fires. Reduced-motion
 * users skip the wait entirely and see everything statically.
 */
function usePreloaderGate(disabled) {
  const [show, setShow] = useState(disabled);
  useEffect(() => {
    if (disabled) {
      setShow(true);
      return;
    }
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      setShow(true);
    };
    window.addEventListener("preloader:done", done, { once: true });
    const t = window.setTimeout(done, 2500);
    return () => {
      window.removeEventListener("preloader:done", done);
      window.clearTimeout(t);
    };
  }, [disabled]);
  return show;
}

export const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const show = usePreloaderGate(reduceMotion);
  const animateState = show ? "visible" : "hidden";

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reduced motion: no stagger, no offsets, zero-duration — fully static.
  const list = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.055,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };
  const wordAnim = {
    hidden: { y: reduceMotion ? "0%" : "118%" },
    visible: {
      y: "0%",
      transition: { duration: reduceMotion ? 0 : 0.8, ease: EASE },
    },
  };
  const rise = (delay) => ({
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.9,
        ease: EASE,
        delay: reduceMotion ? 0 : delay,
      },
    },
  });

  return (
    <section
      aria-label="Introduction"
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#0A0908] text-stone-100"
    >
      {/* 3D spectacle behind the copy (aria-hidden: decorative) */}
      <Hero3D />

      {/* cinematic vignette + legibility shades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 42%, transparent 40%, rgba(10,9,8,0.5) 78%, #0A0908 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-black/60 to-transparent"
      />
      {/* dissolve into the light sections below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-b from-transparent to-[#0A0908]"
      />

      <MotionConfig reducedMotion="user">
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
          {/* eyebrow badge */}
          <motion.div
            initial="hidden"
            animate={animateState}
            variants={rise(0)}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff7a1a] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff7a1a]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-300">
              Available for new projects
            </span>
          </motion.div>

          {/* name line */}
          <motion.p
            initial="hidden"
            animate={animateState}
            variants={rise(0.08)}
            className="mb-5 font-heading text-xl italic text-stone-400 sm:text-2xl"
          >
            Hi, I&rsquo;m {person.name}.
          </motion.p>

          {/* massive split-text headline */}
          <motion.h1
            initial="hidden"
            animate={animateState}
            variants={list}
            aria-label="I build websites for restaurants that bring in more orders and reservations."
            className="max-w-5xl font-heading font-semibold leading-[1.04] tracking-[-0.02em] text-stone-50 text-[clamp(2.55rem,9vw,6.25rem)] [text-shadow:0_2px_40px_rgba(0,0,0,0.55)]"
          >
            {HEADLINE_WORDS.map((w, i) => (
              <React.Fragment key={`${w.t}-${i}`}>
                <span
                  aria-hidden="true"
                  className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]"
                >
                  <motion.span
                    variants={wordAnim}
                    className={`inline-block will-change-transform ${w.accent ? "italic" : ""}`}
                    style={
                      w.accent
                        ? {
                            background:
                              "linear-gradient(100deg,#ffb15e 0%,#f97316 55%,#c2490f 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                          }
                        : undefined
                    }
                  >
                    {w.t}
                  </motion.span>
                </span>
                {i < HEADLINE_WORDS.length - 1 ? " " : ""}
              </React.Fragment>
            ))}
          </motion.h1>

          {/* benefit-led subcopy (from content.js — meaning preserved) */}
          <motion.p
            initial="hidden"
            animate={animateState}
            variants={rise(0.55)}
            className="mt-7 max-w-2xl text-base leading-relaxed text-stone-300/90 sm:text-lg"
          >
            {home.subline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate={animateState}
            variants={rise(0.7)}
            className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center"
          >
            <MagneticButton>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#c2490f] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_44px_rgba(194,73,15,0.4)] transition-colors duration-300 hover:bg-[#a63a0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0908] sm:w-auto"
              >
                <span>Get a Free Quote</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-stone-100 backdrop-blur transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0908] sm:w-auto"
              >
                <span>View My Work</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </MagneticButton>
          </motion.div>

          {/* trust row */}
          <motion.div
            initial="hidden"
            animate={animateState}
            variants={rise(0.9)}
            className="mt-12 border-t border-white/10 pt-6"
          >
            <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-stone-400 sm:text-sm">
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#ff7a1a]"
                  aria-hidden="true"
                />
                <strong className="font-semibold text-stone-200">7+</strong>&nbsp;projects
                shipped
              </span>
              <span className="text-white/20" aria-hidden="true">
                |
              </span>
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#ff7a1a]"
                  aria-hidden="true"
                />
                Custom code specialist
              </span>
              <span className="text-white/20" aria-hidden="true">
                |
              </span>
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#ff7a1a]"
                  aria-hidden="true"
                />
                Replies within 24 hours
              </span>
            </p>
          </motion.div>
        </div>
      </MotionConfig>

      {/* scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
          Scroll
        </span>
        <span className="block h-10 w-px overflow-hidden bg-white/10">
          <span className="block h-4 w-px bg-[#ff7a1a] motion-safe:animate-bounce" />
        </span>
      </div>
    </section>
  );
};
