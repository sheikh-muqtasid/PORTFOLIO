"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { person, social } from "@/resources";

export const Footer = () => {
  const pathname = usePathname() || "";
  if (
    ["/ember-oak", "/casa-fuego", "/saffron-smoke"].some((r) =>
      pathname.startsWith(r),
    )
  )
    return null;
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const github = social.find((s) => s.name === "GitHub")?.link || "https://github.com/sheikh-muqtasid";
  const linkedin =
    social.find((s) => s.name === "LinkedIn")?.link || "https://www.linkedin.com/in/sheikhmuqtasid";

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
    <footer className="w-full border-t border-line bg-white relative z-10 pt-14 pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-line">
          {/* Brand */}
          <div className="space-y-3 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 rounded-lg w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-ember">
              <span className="w-9 h-9 rounded-xl bg-ember-tint border border-ember/20 flex items-center justify-center font-heading font-semibold text-sm text-ember">
                SM.
              </span>
              <span className="text-lg font-heading font-semibold tracking-tight text-ink">
                {person.name}
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Custom websites, web apps, and mobile solutions engineered for restaurants, local businesses, and modern startups.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-body font-medium" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-ember transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ember rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-line text-body hover:text-ember hover:border-ember/40 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <FaGithub className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-line text-body hover:text-ember hover:border-ember/40 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <FaLinkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${person.email}`}
              className="p-3 rounded-xl bg-white border border-line text-body hover:text-ember hover:border-ember/40 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              aria-label={`Email ${person.email}`}
            >
              <FaEnvelope className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>© {currentYear} {person.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next.js</span>
            <span aria-hidden="true">·</span>
            <span>100% custom code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
