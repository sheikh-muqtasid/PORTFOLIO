"use client";

import { useState } from "react";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservations", label: "Reservations" },
  { href: "#visit", label: "Visit" },
];

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2c1.2 3.2-.6 5.4-2.4 7.2C7.8 11 6 12.8 6 15.5A6 6 0 0 0 12 21.5a6 6 0 0 0 6-6c0-2.2-1-4.1-2.2-5.9-.4 1.1-1 2-2 2.7.4-3.2-.4-6.7-1.8-10.3z"
        fill="#fff8ec"
      />
      <path
        d="M12 8.5c.5 1.7-.3 2.9-1.3 3.9-.9.9-1.7 1.8-1.7 3a3.6 3.6 0 0 0 3 3.5 3.6 3.6 0 0 0 3-3.5c0-1.1-.5-2-1.1-2.9-.2.5-.5 1-1 1.3.2-1.6-.2-3.3-.9-4.3z"
        fill="#c0392b"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="cf-nav">
      <div className="cf-nav-inner">
        <a className="cf-logo" href="#top" aria-label="Casa Fuego — back to top">
          <span className="cf-logo-mark">
            <FlameIcon />
          </span>
          <span className="cf-display cf-logo-text">
            Casa Fuego
            <small>Taqueria &amp; Cantina</small>
          </span>
        </a>

        <button
          className="cf-menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="cf-mobile-nav"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <nav aria-label="Primary">
          <ul id="cf-mobile-nav" className={`cf-nav-links${open ? " cf-open" : ""}`}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="cf-btn cf-nav-cta" href="#reservations">
          Reserve a Table
        </a>
      </div>
    </header>
  );
}
