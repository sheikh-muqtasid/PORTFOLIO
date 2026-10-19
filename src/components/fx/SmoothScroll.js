"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll — mounts Lenis for buttery inertial scrolling.
 * Drives it with a single requestAnimationFrame loop; destroys on unmount.
 * Skips entirely when the user prefers reduced motion.
 */
export default function SmoothScroll() {
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion.current) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });

    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
