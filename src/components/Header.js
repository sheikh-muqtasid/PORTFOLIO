"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "";
  const isHomePage = pathname === "/";

  // Add subtle background shadow/blur increase on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
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

  const navLinks = [
    { name: "Work", href: isHomePage ? "#work" : "/#work" },
    { name: "Services", href: isHomePage ? "#services" : "/#services" },
    { name: "Process", href: isHomePage ? "#process" : "/#process" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-[#0A0A0B]/70 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F] rounded-lg p-1"
            aria-label="Sheikh Muqtasid Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center font-bold text-base text-[#D4FF3F] group-hover:border-[#D4FF3F]/50 group-hover:shadow-[0_0_15px_rgba(212,255,63,0.3)] transition-all duration-300">
              SM.
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#D4FF3F] transition-colors">
                Sheikh Muqtasid
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Custom Web Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-lg shadow-inner"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => handleLinkClick(e, isHomePage ? "#contact" : "/#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold bg-[#D4FF3F] text-[#0A0A0B] hover:bg-[#c6f032] hover:shadow-[0_0_20px_rgba(212,255,63,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4FF3F]"
            >
              <span>Start a Project</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => handleLinkClick(e, isHomePage ? "#contact" : "/#contact")}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#D4FF3F] text-[#0A0A0B]"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-left ${
                    mobileMenuOpen ? "rotate-45 translate-x-0.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-left ${
                    mobileMenuOpen ? "-rotate-45 translate-x-0.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0A0A0B]/98 backdrop-blur-2xl px-5 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-600">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-white/10">
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => handleLinkClick(e, isHomePage ? "#contact" : "/#contact")}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm uppercase tracking-wider font-bold bg-[#D4FF3F] text-[#0A0A0B] shadow-[0_0_20px_rgba(212,255,63,0.3)]"
            >
              <span>Start a Project</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D4FF3F] animate-pulse" />
              Available for new projects
            </span>
            <span>·</span>
            <span>Replies &lt; 24h</span>
          </div>
        </div>
      )}
    </header>
  );
};
