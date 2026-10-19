"use client";

import { useEffect, useRef } from "react";

/**
 * MagneticButton — wrapper that pulls its child toward the cursor
 * (capped at `strength` px) with rAF-lerped smoothing, then springs
 * back on mouseleave. Transform-only; cheap enough for many instances.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 8,
  style = {},
}) {
  const wrapRef = useRef(null);
  const state = useRef({
    targetX: 0,
    targetY: 0,
    x: 0,
    y: 0,
    raf: 0,
    running: false,
  });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const s = state.current;

    const loop = () => {
      s.x += (s.targetX - s.x) * 0.2;
      s.y += (s.targetY - s.y) * 0.2;
      // Snap to zero when close to avoid an infinite micro-jitter loop.
      if (Math.abs(s.x) < 0.05 && Math.abs(s.y) < 0.05 && s.targetX === 0 && s.targetY === 0) {
        s.x = 0;
        s.y = 0;
        el.style.transform = "translate3d(0,0,0)";
        s.running = false;
        return;
      }
      el.style.transform = `translate3d(${s.x.toFixed(2)}px, ${s.y.toFixed(2)}px, 0)`;
      s.raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!s.running) {
        s.running = true;
        s.raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      // Offset capped at `strength` px at the element edge.
      s.targetX = Math.max(-strength, Math.min(strength, (relX / (rect.width / 2)) * strength));
      s.targetY = Math.max(-strength, Math.min(strength, (relY / (rect.height / 2)) * strength));
      start();
    };

    const onLeave = () => {
      s.targetX = 0;
      s.targetY = 0;
      start(); // ease back to center, then the loop self-stops
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(s.raf);
      s.running = false;
    };
  }, [strength]);

  return (
    <span
      ref={wrapRef}
      className={className}
      style={{
        display: "inline-block",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
