"use client";

import React from "react";
import { FaLaptopCode, FaUtensils, FaServer, FaMobileScreenButton, FaCheck } from "react-icons/fa6";
import { services } from "@/resources";
import { SectionHeader } from "./SectionHeader";

const iconMap = {
  "business-websites": FaLaptopCode,
  "restaurant-websites": FaUtensils,
  "web-apps": FaServer,
  "mobile-apps": FaMobileScreenButton,
};

export const ServicesSection = () => {
  return (
    <section id="services" className="w-full scroll-mt-24 py-20 md:py-28 bg-paper relative overflow-hidden">
      {/* Ambient ember glow */}
      <div
        className="ember-drift absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[380px] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, rgba(232,112,42,0.10) 0%, transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="What I deliver"
          title="Websites and apps built to bring you customers."
          copy="No cookie-cutter templates or bloated page builders. Every project is custom-coded for speed, security, and conversion."
        />

        {/* 4 service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.id] || FaLaptopCode;
            return (
              <article
                key={service.id}
                className="cine-card group relative rounded-3xl p-7 sm:p-9 flex flex-col overflow-hidden"
              >
                <div
                  className="absolute top-0 left-8 right-8 h-px ember-hairline opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
                <div className="space-y-6 flex-1">
                  {/* Icon + tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 p-3.5 rounded-2xl bg-ember-tint border border-ember/20 flex items-center justify-center text-ember group-hover:bg-ember group-hover:text-[#160b03] group-hover:border-ember group-hover:scale-105 transition-all duration-300 shadow-[0_0_24px_rgba(232,112,42,0.15)]">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-cream border border-line text-muted">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title + outcome */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="text-body font-medium leading-relaxed">
                      {service.outcome}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <ul className="space-y-3 pt-5 border-t border-line">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-body">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-ember-tint border border-ember/20 flex items-center justify-center text-ember" aria-hidden="true">
                          <FaCheck className="w-3 h-3" />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-line">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.12em] text-ink hover:text-ember transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                  >
                    <span>Request details</span>
                    <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pricing note */}
        <div className="mt-10 p-6 sm:p-7 rounded-3xl bg-cream border border-line text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-body leading-relaxed">
            <strong className="text-ink font-semibold">Pricing note:</strong> Every project is
            quoted individually based on your requirements —{" "}
            <a href="#contact" className="underline decoration-ember/40 underline-offset-4 text-ember font-semibold hover:decoration-ember transition-all rounded">
              tell me what you need
            </a>{" "}
            and I&rsquo;ll send a tailored estimate and timeline.
          </p>
        </div>
      </div>
    </section>
  );
};
