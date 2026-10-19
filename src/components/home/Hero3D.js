"use client";

import React, { Component, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Error boundary: any WebGL context loss or init failure falls back to a
// static visual — the hero is never blank.
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

/**
 * Static layered CSS gradient fallback — ember glow on near-black.
 * Pure CSS, zero GPU cost, never a blank hero.
 */
export function Hero3DFallback({ simplified = false }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* near-black base */}
      <div className="absolute inset-0" style={{ background: "#0A0908" }} />
      {/* ember core glow, offset right where the 3D form would sit */}
      <div
        className={`absolute -right-[10%] top-1/2 h-[80vmin] w-[80vmin] -translate-y-1/2 rounded-full blur-3xl ${
          simplified ? "" : "motion-safe:animate-pulse"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(166,58,10,0.42) 0%, rgba(166,58,10,0.14) 45%, transparent 70%)",
        }}
      />
      {/* faint amber wash, upper left */}
      <div
        className="absolute left-[6%] top-[10%] h-[52vmin] w-[52vmin] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217,130,43,0.16) 0%, transparent 65%)",
        }}
      />
      {/* ember horizon hairline */}
      <div
        className="absolute inset-x-0 bottom-[20%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,130,43,0.35), transparent)",
        }}
      />
    </div>
  );
}

// Lazy-load the Three.js scene — no SSR, so it never blocks first paint.
const DynamicScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <Hero3DFallback simplified />,
});

function detectWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

export default function Hero3D() {
  const [mode, setMode] = useState("loading"); // loading | scene | fallback
  const [mobile, setMobile] = useState(false);
  const [staticFrame, setStaticFrame] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setMobile(window.matchMedia("(max-width: 767px)").matches);
    // Reduced motion: render one static 3D frame (frameloop="never"), never animate.
    setStaticFrame(reducedMotion);
    setMode(detectWebGL() ? "scene" : "fallback");
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <WebGLErrorBoundary fallback={<Hero3DFallback />}>
        {mode === "fallback" ? (
          <Hero3DFallback />
        ) : mode === "scene" ? (
          <DynamicScene mobile={mobile} staticFrame={staticFrame} />
        ) : (
          <Hero3DFallback simplified />
        )}
      </WebGLErrorBoundary>
    </div>
  );
}
