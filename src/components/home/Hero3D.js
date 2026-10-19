"use client";

import React, { useState, useEffect, Component } from "react";
import dynamic from "next/dynamic";

// Error boundary: any WebGL context loss or init failure falls back to a static visual.
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.warn("Hero 3D Canvas fallback activated:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Static gradient fallback — light, refined, no animation when `simplified`.
export function Hero3DFallback({ simplified = false }) {
  const ringCls = simplified ? "" : "spin-slower";
  const pulseCls = simplified ? "" : "motion-safe:animate-pulse";
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center overflow-hidden select-none pointer-events-none">
      {/* Warm ambient glow */}
      <div
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(166,58,10,0.14) 0%, rgba(166,58,10,0.05) 50%, transparent 70%)",
        }}
      />

      {/* Outer ring */}
      <div
        className={`absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-ember/25 ${ringCls}`}
        aria-hidden="true"
        style={{ borderStyle: "dashed" }}
      />

      {/* Glass ring */}
      <div
        className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-ink/10 bg-white/40 backdrop-blur-md"
        aria-hidden="true"
        style={{ transform: "rotateX(60deg) rotateY(15deg)" }}
      />

      {/* Core faceted mark */}
      <div
        className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl flex items-center justify-center bg-white/80 backdrop-blur-xl border border-line shadow-[0_24px_50px_rgba(28,25,23,0.10)]"
        style={{ transform: "rotate(-8deg)" }}
      >
        <div className="text-center p-3">
          <div className="w-10 h-10 mx-auto mb-1.5 rounded-xl bg-ember-tint border border-ember/25 flex items-center justify-center text-ember font-heading font-semibold text-sm">
            SM
          </div>
          <span className="text-[11px] tracking-[0.14em] text-muted font-semibold">
            CUSTOM CODE
          </span>
        </div>
      </div>

      {/* Orbital accents */}
      <div className={`absolute w-2 h-2 rounded-full bg-ember ${pulseCls}`} style={{ top: "25%", right: "28%" }} aria-hidden="true" />
      <div className={`absolute w-1.5 h-1.5 rounded-full bg-ink/30 ${pulseCls}`} style={{ bottom: "28%", left: "30%" }} aria-hidden="true" />
    </div>
  );
}

// Lazy-load the Three.js scene — no SSR, so it never blocks first paint.
const DynamicScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <Hero3DFallback simplified={true} />,
});

export default function Hero3D() {
  const [useFallback, setUseFallback] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    })();

    // Reduced motion, small screens, or no WebGL → static fallback.
    if (prefersReducedMotion || isMobile || !hasWebGL) {
      setUseFallback(true);
    }
  }, []);

  if (!mounted) {
    return <Hero3DFallback simplified={true} />;
  }

  if (useFallback) {
    return <Hero3DFallback simplified={true} />;
  }

  return (
    <WebGLErrorBoundary fallback={<Hero3DFallback />}>
      <DynamicScene />
    </WebGLErrorBoundary>
  );
}
