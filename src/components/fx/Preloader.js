"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1600; // counter 0 -> 100
const EXIT_MS = 700; // choreographed exit
const HARD_TIMEOUT_MS = 3000; // never trap the user

/**
 * Preloader — full-screen dark overlay with an eased 0→100 counter,
 * brand mark, then a choreographed exit. Dispatches `preloader:done`
 * on window when finished. Hard-timeout fallback guarantees the event
 * fires within 3s even if the animation path fails.
 */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("run"); // run | exit | gone
  const done = useRef(false);
  const reduced = useRef(false);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    window.dispatchEvent(new Event("preloader:done"));
  };

  useEffect(() => {
    reduced.current =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Hard fallback: always resolve within 3s.
    const watchdog = setTimeout(() => {
      setPhase("gone");
      finish();
    }, HARD_TIMEOUT_MS);

    if (reduced.current) {
      // Skip animation entirely; unblock immediately.
      setPhase("gone");
      finish();
      clearTimeout(watchdog);
      return () => {};
    }

    // Lock scroll while the preloader is visible.
    document.body.style.overflow = "hidden";

    let rafId;
    const start = performance.now();

    // easeOutExpo gives a snappy start and a soft landing at 100.
    const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      setCount(Math.round(easeOutExpo(t) * 100));
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Choreographed exit: counter settles, overlay lifts away.
        setPhase("exit");
        setTimeout(() => {
          setPhase("gone");
          document.body.style.overflow = "";
          finish();
        }, EXIT_MS);
      }
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(watchdog);
      document.body.style.overflow = "";
      finish(); // guarantee the event on unmount too
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "gone") return null;

  const exiting = phase === "exit";

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0A0908",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
        // Choreographed exit: split-lift — the whole sheet rises away
        // with a quick ease-in, clipped from the bottom.
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
        transition: exiting
          ? `transform ${EXIT_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`
          : "none",
        willChange: exiting ? "transform" : "auto",
        pointerEvents: "none",
      }}
    >
      {/* Brand mark */}
      <div
        style={{
          opacity: exiting ? 0 : 1,
          transform: exiting ? "translateY(-16px)" : "translateY(0)",
          transition: exiting ? "opacity 300ms ease, transform 300ms ease" : "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: 20,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#EDE8DF",
            paddingLeft: "0.32em",
          }}
        >
          Sheikh Muqtasid
        </span>
        <span
          style={{
            width: 48,
            height: 2,
            background: "linear-gradient(90deg, #4F46E5, #8B7CFF)",
            borderRadius: 2,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Counter */}
      <div
        style={{
          opacity: exiting ? 0 : 1,
          transition: exiting ? "opacity 300ms ease" : "none",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(3rem, 10vw, 5.5rem)",
          fontWeight: 600,
          color: "#EDE8DF",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {count}
        <span style={{ fontSize: "0.45em", color: "#8B7CFF" }}>%</span>
      </div>
    </div>
  );
}
