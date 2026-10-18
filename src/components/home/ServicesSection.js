"use client";

import React from "react";
import { FaLaptopCode, FaUtensils, FaServer, FaMobileScreenButton, FaCheck } from "react-icons/fa6";
import { services } from "@/resources";

const iconMap = {
  "business-websites": FaLaptopCode,
  "restaurant-websites": FaUtensils,
  "web-apps": FaServer,
  "mobile-apps": FaMobileScreenButton,
};

export const ServicesSection = () => {
  return (
    <section id="services" className="w-full scroll-mt-24 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4FF3F]">
            What I Deliver
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Tailored digital solutions built to drive revenue.
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            No cookie-cutter templates or bloated page builders. Every solution is custom-coded for maximum speed, security, and conversion.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.id] || FaLaptopCode;
            return (
              <div
                key={service.id}
                className="group relative bg-[#121215]/80 hover:bg-[#15161c] border border-white/10 hover:border-[#D4FF3F]/40 rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(212,255,63,0.12)] flex flex-col justify-between"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FF3F]/5 rounded-full blur-2xl group-hover:bg-[#D4FF3F]/10 transition-colors pointer-events-none" />

                <div className="space-y-6">
                  {/* Top row with icon & tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4FF3F] group-hover:scale-110 group-hover:border-[#D4FF3F]/40 transition-all duration-300 shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & 1-line outcome */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#D4FF3F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                      {service.outcome}
                    </p>
                  </div>

                  {/* 3 Bullet Deliverables */}
                  <ul className="space-y-3 pt-2 border-t border-white/5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400">
                        <span className="mt-1 flex-shrink-0 text-[#D4FF3F]">
                          <FaCheck className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider font-bold text-slate-300 group-hover:text-[#D4FF3F] transition-colors"
                  >
                    <span>Request Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note under the grid */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-3xl mx-auto backdrop-blur-md">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            <span className="text-[#D4FF3F] font-semibold">Pricing Note:</span> Every project is quoted individually based on your requirements —{" "}
            <a href="#contact" className="underline text-white hover:text-[#D4FF3F] transition-colors font-medium">
              tell me what you need
            </a>{" "}
            to receive a tailored estimate and timeline.
          </p>
        </div>
      </div>
    </section>
  );
};
