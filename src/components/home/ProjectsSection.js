"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { FaArrowUpRightFromSquare, FaBookOpen } from "react-icons/fa6";

const projects = [
  {
    id: "mental-wellbeing-app",
    title: "Serenity Speak – Mental Wellbeing App",
    isFeatured: true,
    outcome:
      "Cross-platform wellness app providing guided sessions, stress-level tracking, and personalized habit routines to support daily mental health.",
    mockup: "/images/projects/project-01/mental-wellbeing-app.png",
    alt: "Serenity Speak Mental Wellbeing cross-platform mobile application interface mockup",
    tags: ["Flutter", "Dart", "Firebase", "Cross-Platform"],
    liveUrl: "https://github.com/sheikh-muqtasid/mental-wellbeing-app/releases/tag/apk",
    liveLabel: "Live App (APK)",
    isLive: true,
    caseStudyUrl: "/work/mental-wellbeing-app",
  },
  {
    id: "qrplate",
    title: "QRPlate – Digital Menu Platform",
    isFeatured: false,
    outcome:
      "Digital menu platform that lets restaurants replace paper menus with instant QR codes customers scan at the table.",
    mockup: "/images/projects/project-02/qr-plate-mockup.png",
    alt: "QRPlate digital restaurant menu and table ordering dashboard mockup",
    tags: ["Next.js", "MERN Stack", "Cloudinary", "B2B SaaS"],
    liveUrl: null,
    isLive: false,
    caseStudyUrl: "/work/qrplate",
  },
  {
    id: "dr-oduntan-medical",
    title: "Doctor Medical Portal",
    isFeatured: false,
    outcome:
      "Production healthcare web platform enabling patients to schedule online consultations and access medical guidance with ease.",
    mockup: "/images/projects/dr-oduntan/mockup.jpg",
    alt: "Doctor Medical Portal appointment scheduling and patient consultation interface mockup",
    tags: ["React", "Next.js", "Node.js", "Healthcare"],
    liveUrl: "https://drod.petalwebdev.com/",
    liveLabel: "Live Site (Offline)",
    isLive: false, // marked clearly since 503 was returned on verification
    caseStudyUrl: "/work/dr-oduntan-medical",
  },
  {
    id: "uaprop",
    title: "UAEprop – Real Estate Marketplace",
    isFeatured: false,
    outcome:
      "High-performance real estate marketplace connecting buyers and renters across the UAE with instant search and visual media optimization.",
    mockup: "/images/projects/project-03/ua-prop-mockup.png",
    alt: "UAEprop modern real estate marketplace and property discovery platform mockup",
    tags: ["Next.js 16", "React 19", "MongoDB", "Cloudinary"],
    liveUrl: "https://pak-prop-user-frontend.vercel.app/",
    liveLabel: "Live Site",
    isLive: true,
    caseStudyUrl: "/work/uaprop",
  },
  {
    id: "dental-suite",
    title: "Dental Suite – Clinic Management System",
    isFeatured: false,
    outcome:
      "Centralized clinic workflow platform helping dental practices organize patient records, appointments, and treatment history securely.",
    mockup: "/images/projects/dental-suite/clinic-mockup.png",
    alt: "Dental Suite dental clinic workflow and patient management dashboard mockup",
    tags: ["React.js", "Express", "MongoDB", "Clinic ERP"],
    liveUrl: null,
    isLive: false,
    caseStudyUrl: "/work/dental-suite",
  },
  {
    id: "visage-dashboard",
    title: "Visage – Enterprise Management Dashboard",
    isFeatured: false,
    outcome:
      "Enterprise ERP dashboard that centralizes operations, logistics, and revenue tracking into real-time interactive business analytics.",
    mockup: "/images/projects/visage/dashboard-mockup.png",
    alt: "Visage enterprise ERP management and business analytics dashboard mockup",
    tags: ["React.js", "PrimeReact", "REST APIs", "Analytics"],
    liveUrl: "https://visage-soap.vercel.app/",
    liveLabel: "Live Site",
    isLive: true,
    caseStudyUrl: "/work/visage-dashboard",
  },
  {
    id: "royal-snooker",
    title: "Royal Snooker – Club Management SaaS",
    isFeatured: false,
    outcome:
      "All-in-one club management SaaS featuring a live table occupancy grid, integrated POS system, and automated membership tracking.",
    mockup: "/images/projects/snooker/cover.png",
    alt: "Royal Snooker club management SaaS live table grid and POS dashboard mockup",
    tags: ["React", "Next.js", "Redux", "POS SaaS"],
    liveUrl: "https://saa-s-snooker-front-end.vercel.app",
    liveLabel: "Live Site",
    isLive: true,
    caseStudyUrl: "/work/royal-snooker",
  },
];

export const ProjectsSection = () => {
  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <section id="work" className="w-full scroll-mt-24 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4FF3F]">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Proven results shipped to production.
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            7 real-world projects built with custom architecture — fast loading, mobile-first, and engineered for conversion.
          </p>
        </div>

        {/* 1. Featured Project Card (Large Display) */}
        <div className="mb-12">
          <Tilt
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            perspective={1200}
            transitionSpeed={1200}
            scale={1.01}
            glareEnable={true}
            glareMaxOpacity={0.12}
            glareColor="#ffffff"
            glareBorderRadius="1.5rem"
            className="w-full"
          >
            <div className="relative bg-[#121215]/90 border border-white/10 hover:border-[#D4FF3F]/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl transition-all duration-300 shadow-2xl overflow-hidden group">
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4FF3F]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D4FF3F]/15 transition-colors" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left: Project Image (16/10 aspect ratio) */}
                <div className="lg:col-span-7">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-500 bg-[#161720]">
                    <Image
                      src={featuredProject.mockup}
                      alt={featuredProject.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#D4FF3F] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#D4FF3F] animate-pulse" />
                      Featured Project
                    </div>
                  </div>
                </div>

                {/* Right: Project Details & CTAs */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#D4FF3F] transition-colors">
                      {featuredProject.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {featuredProject.outcome}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    <Link
                      href={featuredProject.caseStudyUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all"
                    >
                      <FaBookOpen className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </Link>

                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider bg-[#D4FF3F] text-[#0A0A0B] hover:bg-[#c6f032] shadow-[0_0_15px_rgba(212,255,63,0.3)] transition-all"
                      >
                        <span>{featuredProject.liveLabel}</span>
                        <FaArrowUpRightFromSquare className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* 2. Grid of 6 Remaining Projects (Rendered Exactly Once) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {gridProjects.map((project) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.01}
              glareEnable={true}
              glareMaxOpacity={0.12}
              glareColor="#ffffff"
              glareBorderRadius="1rem"
              className="h-full"
            >
              <div className="h-full bg-[#121215]/80 hover:bg-[#15161c] border border-white/10 hover:border-[#D4FF3F]/40 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(212,255,63,0.1)] flex flex-col justify-between group">
                <div className="space-y-4">
                  {/* Mockup Image at 16/10 aspect ratio */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#161720]">
                    <Image
                      src={project.mockup}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Live indicator if active */}
                    {project.isLive && (
                      <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md border border-[#22c55e]/30 text-[10px] font-mono text-[#4ade80] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                        Live
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Outcome */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4FF3F] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    href={project.caseStudyUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <FaBookOpen className="w-3 h-3 text-slate-400" />
                    <span>Case Study</span>
                  </Link>

                  {project.liveUrl && project.isLive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#D4FF3F] text-[#0A0A0B] hover:bg-[#c6f032] shadow-[0_0_12px_rgba(212,255,63,0.25)] transition-all"
                    >
                      <span>{project.liveLabel || "Live Site"}</span>
                      <FaArrowUpRightFromSquare className="w-2.5 h-2.5" />
                    </a>
                  ) : project.liveUrl && !project.isLive ? (
                    <span
                      title="Production deployment undergoing server maintenance"
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 text-slate-500 border border-white/5 cursor-help"
                    >
                      {project.liveLabel}
                    </span>
                  ) : null}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};
