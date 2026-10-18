"use client";

import React, { useState, useEffect, Component } from "react";
import dynamic from "next/dynamic";

// Error Boundary to catch any WebGL context loss or initialization issues
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

// Fallback visual: Premium CSS 3D Glass Geometric Orb
export function Hero3DFallback({ simplified = false }) {
  return (
    <div className="relative w-full h-[320px] sm:h-[420px] flex items-center justify-center overflow-hidden select-none pointer-events-none">
      {/* Ambient background glow */}
      <div
        className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 255, 63, 0.4) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 70%)",
        }}
      />

      {/* Outer rotating ring */}
      <div
        className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-lime-400/25 animate-spin"
        style={{
          animationDuration: "35s",
          borderStyle: "dashed",
          boxShadow: "0 0 40px rgba(212, 255, 63, 0.12)",
        }}
      />

      {/* Middle glass ring with perspective */}
      <div
        className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-white/20 backdrop-blur-md"
        style={{
          transform: "rotateX(60deg) rotateY(15deg)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01))",
          boxShadow: "inset 0 0 20px rgba(212, 255, 63, 0.15)",
        }}
      />

      {/* Core faceted glass crystal icon */}
      <div
        className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl transition-transform duration-700 hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, rgba(22, 23, 34, 0.85) 0%, rgba(10, 10, 11, 0.95) 100%)",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(212, 255, 63, 0.18), inset 0 1px 0 rgba(255,255,255,0.2)",
          transform: "rotate(-12deg)",
        }}
      >
        <div className="text-center p-3">
          <div className="w-10 h-10 mx-auto mb-1.5 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 font-bold text-sm tracking-wider">
            SM
          </div>
          <span className="text-[11px] font-mono tracking-wider text-slate-300 font-medium">
            CUSTOM CODE
          </span>
        </div>
      </div>

      {/* Floating orbital accents */}
      <div
        className="absolute w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_12px_#D4FF3F] animate-pulse"
        style={{ top: "25%", right: "28%" }}
      />
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_#6366F1]"
        style={{ bottom: "28%", left: "30%" }}
      />
    </div>
  );
}

// Dynamically import Three.js scene without SSR
const DynamicScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <Hero3DFallback simplified={true} />,
});

export default function Hero3D() {
  const [useFallback, setUseFallback] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 2. Check mobile screens (cap complexity on small devices)
    const isMobile = window.innerWidth < 768;

    // 3. Check WebGL support
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    })();

    if (prefersReducedMotion || isMobile || !hasWebGL) {
      setUseFallback(true);
    }
  }, []);

  if (!mounted) {
    return <Hero3DFallback simplified={true} />;
  }

  if (useFallback) {
    return <Hero3DFallback />;
  }

  return (
    <WebGLErrorBoundary fallback={<Hero3DFallback />}>
      <DynamicScene />
    </WebGLErrorBoundary>
  );
}
