"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "";
  const isHomePage = pathname === "/";

  // Add subtle shadow once the user scrolls past the hero
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu when resizing up to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Standalone demo restaurant sites render their own chrome; hide portfolio nav there.
  const isDemoRoute = ["/ember-oak", "/casa-fuego", "/saffron-smoke"].some((r) =>
    pathname.startsWith(r),
  );
  if (isDemoRoute) return null;

  const navLinks = [
    { name: "Work", href: isHomePage ? "#work" : "/#work" },
    { name: "Services", href: isHomePage ? "#services" : "/#services" },
    { name: "Process", href: isHomePage ? "#process" : "/#process" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const contactHref = isHomePage ? "#contact" : "/#contact";

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#") && isHomePage) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-line transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgba(28,25,23,0.08)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group rounded-xl p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
            aria-label="Sheikh Muqtasid — home"
          >
            <span className="w-10 h-10 rounded-xl bg-ember-tint border border-ember/20 flex items-center justify-center font-heading font-semibold text-lg text-ember group-hover:bg-ember group-hover:text-white transition-colors duration-300">
              SM.
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                Sheikh Muqtasid
              </span>
              <span className="text-[11px] text-muted font-medium">
                Custom Web Engineer
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex items-center gap-1 bg-cream/70 border border-line px-2 py-1.5 rounded-full"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-body hover:text-ink rounded-full transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={contactHref}
              onClick={(e) => handleLinkClick(e, contactHref)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold bg-ember text-white hover:bg-ember-dark transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(166,58,10,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember"
            >
              <span>Start a Project</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile: compact CTA + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={contactHref}
              onClick={(e) => handleLinkClick(e, contactHref)}
              className="px-3.5 py-2 rounded-full text-xs font-bold bg-ember text-white"
            >
              Get a Quote
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-line text-ink shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="block w-5 h-4 relative" aria-hidden="true">
                <span
                  className={`absolute top-0 left-0 block h-0.5 w-full bg-current rounded transition-all duration-300 ${
                    mobileMenuOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute top-[7px] left-0 block h-0.5 w-full bg-current rounded transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 block h-0.5 w-full bg-current rounded transition-all duration-300 ${
                    mobileMenuOpen ? "bottom-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel — in normal flow below the bar, never floating over content */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-line bg-white/98 backdrop-blur-2xl px-5 pt-4 pb-[calc(2rem+env(safe-area-inset-bottom))] shadow-[0_20px_40px_rgba(28,25,23,0.10)]"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 text-base font-medium text-body hover:text-ink hover:bg-cream rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-muted" aria-hidden="true">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 mt-3 border-t border-line">
            <a
              href={contactHref}
              onClick={(e) => handleLinkClick(e, contactHref)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm uppercase tracking-wider font-bold bg-ember text-white shadow-[0_8px_20px_rgba(166,58,10,0.25)]"
            >
              <span>Start a Project</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <p className="flex items-center justify-center gap-2 pt-4 text-xs text-muted">
            <span className="w-2 h-2 rounded-full bg-ember animate-pulse" aria-hidden="true" />
            Available for new projects · Replies within 24 hours
          </p>
        </div>
      )}
    </header>
  );
};
