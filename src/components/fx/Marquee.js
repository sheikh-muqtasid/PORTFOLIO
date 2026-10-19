"use client";

/**
 * Marquee — seamless infinite translateX strip. `children` is rendered
 * twice inside a flex track that loops at -50%, so the loop point is
 * invisible. Pure CSS keyframes (GPU-composited transform). Under
 * reduced motion the row renders statically.
 */
export default function Marquee({
  children,
  speed = 30, // seconds per loop
  direction = "left", // "left" | "right"
  className = "",
  trackClassName = "",
  ariaLabel,
}) {
  return (
    <div
      className={className}
      aria-label={ariaLabel}
      role={ariaLabel ? "marquee" : undefined}
      style={{
        overflow: "hidden",
        width: "100%",
        // Edge fade so items glide in/out of frame.
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        userSelect: "none",
      }}
    >
      <div
        className={`fx-marquee-track ${trackClassName}`}
        style={{
          display: "flex",
          width: "max-content",
          alignItems: "center",
          animation: `fx-marquee-${direction} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          {children}
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
      <style>{`
        @keyframes fx-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes fx-marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fx-marquee-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
