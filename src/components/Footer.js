"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { person } from "@/resources";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#0A0A0B] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="space-y-3 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center font-bold text-sm text-[#D4FF3F]">
                SM.
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {person.name}
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Custom websites, web apps, and mobile solutions engineered for restaurants, local businesses, and modern startups.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-medium" aria-label="Footer Navigation">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-[#D4FF3F] transition-colors focus:outline-none focus-visible:underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sheikh-muqtasid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#D4FF3F]/50 hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sheikhmuqtasid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#D4FF3F]/50 hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${person.email}`}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#D4FF3F]/50 hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
              aria-label="Send direct email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {person.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with Next.js & Custom Code</span>
            <span>·</span>
            <span className="text-[#D4FF3F] font-mono">Lighthouse 90+ Target</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
