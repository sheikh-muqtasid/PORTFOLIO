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
        "No middlemen or junior handoffs — you work directly with the person writing every line of code.",
      icon: FaUserCheck,
    },
    {
      title: "100% custom code",
      description:
        "No sluggish page builders or locked-in templates. Clean Next.js and React built for speed and security.",
      icon: FaCode,
    },
    {
      title: "Fast, predictable turnaround",
      description:
        "Design mockups first, then agile delivery with check-ins — launched in weeks, not months.",
      icon: FaBolt,
    },
    {
      title: "Post-launch support",
      description:
        "Covered after go-live with bug fixes, speed checkups, and maintenance when you need it.",
      icon: FaHeadset,
    },
  ];

  return (
    <section id="about" className="w-full scroll-mt-24 py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface border border-line rounded-[2rem] p-7 sm:p-12 lg:p-16 shadow-[0_24px_70px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div
            className="accent-drift absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "radial-gradient(circle, rgba(139,124,255,0.12) 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-0 left-12 right-12 h-px accent-hairline opacity-70"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative">
            {/* Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start gap-5">
              <div className="relative w-60 sm:w-72 aspect-[4/5] rounded-3xl overflow-hidden border border-line shadow-[0_24px_60px_rgba(0,0,0,0.55)] bg-cream">
                <Image
                  src={person.avatar}
                  alt="Portrait of Sheikh Muqtasid, custom website and full-stack developer"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-cover"
                  style={{ objectPosition: "50% 16%" }}
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-sm">
                  <span className="text-xs font-semibold text-ink">Sheikh Muqtasid</span>
                  <span className="text-[10px] font-bold tracking-[0.12em] text-accent uppercase">Full-stack</span>
                </div>
              </div>

              <p className="inline-flex items-center gap-2 text-xs font-medium text-muted bg-cream border border-line px-4 py-2 rounded-full">
                <FaLocationDot className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                Islamabad, Pakistan · Working with US &amp; global clients
              </p>
            </div>

            {/* Bio + why work with me */}
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-tint border border-accent/15 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  About Sheikh Muqtasid
                </span>
                <h2 className="font-heading font-semibold tracking-tight text-ink text-[clamp(1.9rem,4vw,2.9rem)] leading-[1.12]">
                  A developer who treats your website like his own business.
                </h2>
                <div className="space-y-4 text-body leading-relaxed text-base sm:text-lg max-w-2xl">
                  <p>
                    I&rsquo;m <strong className="text-ink font-semibold">Sheikh Muqtasid</strong>, a
                    full-stack developer specializing in custom websites for restaurants, local
                    businesses, and startups. I write every line of code myself — Next.js, React,
                    Node.js, and Flutter — so nothing is outsourced and nothing is templated.
                  </p>
                  <p>
                    My focus is simple: websites that look premium, load fast, and turn visitors
                    into paying customers — online orders, booked tables, and booked calls.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-line">
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  Why work with me
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0">
                  {valueProps.map((prop) => {
                    const Icon = prop.icon;
                    return (
                      <li
                        key={prop.title}
                        className="p-5 rounded-2xl bg-cream/70 border border-line hover:border-accent/30 hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-accent shadow-sm" aria-hidden="true">
                            <Icon className="w-4 h-4" />
                          </span>
                          <h4 className="text-sm font-semibold text-ink leading-snug">
                            {prop.title}
                          </h4>
                        </div>
                        <p className="text-[13px] text-body leading-relaxed">
                          {prop.description}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
