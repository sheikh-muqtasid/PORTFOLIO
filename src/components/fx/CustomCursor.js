"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor — a small dot plus a slower trailing ring, both driven by
 * a single rAF loop with lerp. The ring scales up over interactive
 * elements (a, button, [data-cursor]). Rendered only on fine-pointer,
 * non-reduced-motion devices. Transform-only; no layout work per frame.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reduced) return;

    setEnabled(true);

    // Hide the native cursor while active.
    document.documentElement.classList.add("fx-cursor-none");

    let rafId;
    let mx = -100;
    let my = -100;
    let dotX = mx;
    let dotY = my;
    let ringX = mx;
    let ringY = my;
    let hovering = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onOver = (e) => {
      // Grow the ring when over anything interactive.
      hovering = !!e.target.closest("a, button, [data-cursor], input, textarea, select");
    };

    const loop = () => {
      // Dot tracks fast, ring lags behind for the trailing feel.
      dotX += (mx - dotX) * 0.5;
      dotY += (my - dotY) * 0.5;
      ringX += (mx - ringX) * 0.16;
      ringY += (my - ringY) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        const s = hovering ? 1.9 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${s})`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // mouseover bubbles, so one listener covers the whole document —
    // no per-element handlers needed.
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("fx-cursor-none");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Hide native cursor (and form-control cursors) while the custom one is active */}
      <style>{`
        .fx-cursor-none, .fx-cursor-none * { cursor: none !important; }
      `}</style>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#E06B1F",
          zIndex: 10000,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 34,
          height: 34,
          borderRadius: "50%",
          border: "1px solid rgba(224, 107, 31, 0.65)",
          zIndex: 10000,
          pointerEvents: "none",
          willChange: "transform",
          // Ring scale animates smoothly through the rAF-set scale value;
          // a tiny transition on top softens the step between hover states.
          transition: "border-color 200ms ease",
        }}
      />
    </>
  );
}
