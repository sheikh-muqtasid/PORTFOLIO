"use client";

export default function SkipLink() {
  return (
    <a
      href="#main"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "0.5rem",
        zIndex: 100,
        background: "#c9a24b",
        color: "#0e0c0a",
        padding: "0.6rem 1rem",
        fontWeight: 600,
      }}
      onFocus={(e) => {
        e.currentTarget.style.left = "0.5rem";
      }}
      onBlur={(e) => {
        e.currentTarget.style.left = "-9999px";
      }}
    >
      Skip to content
    </a>
  );
}
