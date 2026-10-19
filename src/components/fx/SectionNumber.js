"use client";

/**
 * SectionNumber — a big ghost/outlined section number (e.g. "01") with
 * an optional label, styled for the dark cinematic theme. Pure
 * typography, no animation, zero runtime cost.
 */
export default function SectionNumber({
  number,
  label,
  className = "",
  align = "left",
}) {
  return (
    <div
      className={className}
      aria-hidden={label ? undefined : "true"}
      style={{
        textAlign: align,
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 700,
          fontSize: "clamp(4.5rem, 14vw, 11rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
          // Outlined ghost treatment on near-black.
          color: "transparent",
          WebkitTextStroke: "1px rgba(237, 232, 223, 0.22)",
        }}
      >
        {number}
      </span>
      {label && (
        <span
          style={{
            display: "inline-block",
            marginTop: 8,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#E06B1F",
            paddingLeft: "0.32em",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
