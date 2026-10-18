"use client";

import React from "react";
import Image from "next/image";
import { FaUserCheck, FaCode, FaBolt, FaHeadset, FaLocationDot } from "react-icons/fa6";
import { person } from "@/resources";

export const AboutSection = () => {
  const valueProps = [
    {
      title: "Direct communication with the developer",
      description:
        "No middlemen, account managers, or junior handoffs. You work directly with the engineer writing every line of code.",
      icon: FaUserCheck,
    },
    {
      title: "100% custom code — zero page builder bloat",
      description:
        "No sluggish WordPress plugins, Wix templates, or locked-in platforms. Pure, clean Next.js and React built for lightning speed and security.",
      icon: FaCode,
    },
    {
      title: "Fast, predictable turnaround",
      description:
        "Agile delivery with interactive mockups and milestone check-ins, launching your website in weeks, not months.",
      icon: FaBolt,
    },
    {
      title: "Post-launch support included",
      description:
        "Your project is fully covered after go-live with bug warranties, speed audits, and available monthly retainers.",
      icon: FaHeadset,
    },
  ];

  return (
    <section id="about" className="w-full scroll-mt-24 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121215]/80 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D4FF3F]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Professional Portrait & Monogram */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start space-y-6">
              <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#161720] group">
                <Image
                  src={person.avatar}
                  alt="Sheikh Muqtasid - Full-Stack & Custom Website Developer"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "50% 16%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#0A0A0B]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4FF3F] animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">Sheikh Muqtasid</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D4FF3F]">FULL-STACK</span>
                </div>
              </div>

              {/* Location Tag */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 border border-white/5 px-4 py-2 rounded-full">
                <FaLocationDot className="w-3.5 h-3.5 text-[#D4FF3F]" />
                <span>Islamabad, Pakistan · Available for US &amp; Global Clients</span>
              </div>
            </div>

            {/* Right: Bio & Why Work With Me */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4FF3F]">
                  About Sheikh Muqtasid
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
                  Engineering high-performance web experiences that grow businesses.
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  I am a full-stack web developer who builds with custom code (MERN stack, Next.js, Flutter). I specialize in helping restaurants, local businesses, and modern startups establish a dominant online presence that captures attention and converts visitors into loyal paying customers.
                </p>
              </div>

              {/* "Why Work With Me" Bullets */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Why work with me
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {valueProps.map((prop, idx) => {
                    const Icon = prop.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#D4FF3F]/30 transition-all space-y-2 group"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-[#D4FF3F] group-hover:scale-110 transition-transform">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#D4FF3F] transition-colors leading-snug">
                            {prop.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pl-9">
                          {prop.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
