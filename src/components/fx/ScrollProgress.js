"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollProgress — fixed accent-gradient progress bar pinned to the top
 * of the viewport. scaleX is driven by a passive, rAF-throttled scroll
 * listener; transform-only so it never triggers layout.
 */
export default function ScrollProgress({ height = 3, className = "" }) {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? doc.scrollTop / max : 0;
      bar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update(); // paint initial position (handles reload mid-page)
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className={className}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height,
        zIndex: 9000,
        transform: "scaleX(0)",
        transformOrigin: "0 50%",
        background: "linear-gradient(90deg, #4F46E5 0%, #7C6CFF 55%, #A78BFA 100%)",
        willChange: "transform",
        pointerEvents: "none",
      }}
    />
  );
}
