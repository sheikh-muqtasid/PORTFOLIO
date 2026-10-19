"use client";

// Animation primitives for the dark cinematic portfolio rebuild.
// Each module is a client component (or hook) and is performance-first:
// transform/opacity only, rAF-throttled handlers, reduced-motion aware.

export { default as SmoothScroll } from "./SmoothScroll";
export { default as Preloader } from "./Preloader";
export { default as CustomCursor } from "./CustomCursor";
export { default as MagneticButton } from "./MagneticButton";
export { default as Reveal } from "./Reveal";
export { default as Marquee } from "./Marquee";
export { default as ScrollProgress } from "./ScrollProgress";
export { default as SectionNumber } from "./SectionNumber";
export { default as usePrefersReducedMotion } from "./usePrefersReducedMotion";
