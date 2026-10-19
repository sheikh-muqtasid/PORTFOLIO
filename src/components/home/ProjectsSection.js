"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { FaArrowUpRightFromSquare, FaBookOpen, FaFlask } from "react-icons/fa6";
import { SectionHeader } from "./SectionHeader";

/**
 * Live URLs are taken verbatim from each project's MDX frontmatter (`link:` field).
 * A "Live Site" button is rendered ONLY where a real URL exists in the MDX.
 */
const projects = [
  {
    id: "qrplate",
    title: "QRPlate – Digital Menu Platform",
    isFeatured: true,
    outcome:
      "QR-based digital menus built for restaurants: owners update dishes and prices instantly, diners scan a code and browse the full menu from their phones.",
    mockup: "/images/projects/project-02/qr-plate-mockup.png",
    alt: "QRPlate restaurant digital menu platform — QR code menus and restaurant owner dashboard mockup",
    tags: ["Next.js", "MERN Stack", "Cloudinary", "B2B SaaS"],
    liveUrl: null,
    isLive: false,
    caseStudyUrl: "/work/qrplate",
  },
  {
    id: "mental-wellbeing-app",
    title: "Serenity Speak – Mental Wellbeing App",
    isFeatured: false,
    outcome:
      "Cross-platform wellness app with guided sessions, stress-level tracking, and daily habit routines that support mental health.",
    mockup: "/images/projects/project-01/mental-wellbeing-app.png",
    alt: "Serenity Speak mental wellbeing cross-platform mobile app interface mockup",
    tags: ["Flutter", "Dart", "Firebase", "Cross-Platform"],
    liveUrl: "https://github.com/sheikh-muqtasid/mental-wellbeing-app/releases/tag/apk",
    liveLabel: "Live App (APK)",
    isLive: true,
    caseStudyUrl: "/work/mental-wellbeing-app",
  },
  {
    id: "dr-oduntan-medical",
    title: "Doctor Medical Portal",
    isFeatured: false,
    outcome:
      "Production healthcare platform where patients book online consultations and explore medical services in a clean, reassuring interface.",
    mockup: "/images/projects/dr-oduntan/mockup.jpg",
    alt: "Doctor medical portal — online consultation booking and patient information interface mockup",
    tags: ["React", "Next.js", "Node.js", "Healthcare"],
    liveUrl: "https://drod.petalwebdev.com/",
    liveLabel: "Live Site",
    isLive: true,
    caseStudyUrl: "/work/dr-oduntan-medical",
  },
  {
    id: "uaprop",
    title: "UAEprop – Real Estate Marketplace",
    isFeatured: false,
    outcome:
      "High-performance property marketplace connecting buyers and renters with instant search, rich listings, and automated image optimization.",
    mockup: "/images/projects/project-03/ua-prop-mockup.png",
    alt: "UAEprop real estate marketplace — property search and listing interface mockup",
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
      "Centralized clinic platform helping dental practices organize patient records, appointments, and treatment history securely.",
    mockup: "/images/projects/dental-suite/clinic-mockup.png",
    alt: "Dental Suite clinic management system — patient records and appointment scheduling dashboard mockup",
    tags: ["React", "Express", "MongoDB", "Clinic ERP"],
    liveUrl: null,
    isLive: false,
    caseStudyUrl: "/work/dental-suite",
  },
  {
    id: "visage-dashboard",
    title: "Visage – Enterprise Management Dashboard",
    isFeatured: false,
    outcome:
      "Enterprise ERP dashboard centralizing operations, logistics, and revenue tracking into real-time interactive analytics.",
    mockup: "/images/projects/visage/dashboard-mockup.png",
    alt: "Visage enterprise management dashboard — business analytics and operations overview mockup",
    tags: ["React", "PrimeReact", "REST APIs", "Analytics"],
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
      "All-in-one club management SaaS with a live table occupancy grid, integrated POS, and automated membership tracking.",
    mockup: "/images/projects/snooker/cover.png",
    alt: "Royal Snooker club management SaaS — live table grid and point-of-sale dashboard mockup",
    tags: ["React", "Next.js", "Redux", "POS SaaS"],
    liveUrl: "https://saa-s-snooker-front-end.vercel.app",
    liveLabel: "Live Site",
    isLive: true,
    caseStudyUrl: "/work/royal-snooker",
  },
];

// Fictional restaurant demo sites — concept builds that show what a finished
// restaurant website can look like. Thumbnails live in public/demos/*/hero.jpg.
const conceptBuilds = [
  {
    id: "ember-oak",
    name: "Ember & Oak",
    route: "/ember-oak",
    thumb: "/demos/ember-oak/hero.jpg",
    alt: "Ember and Oak modern American steakhouse concept website — dining room hero image",
    blurb: "Modern American steakhouse concept: full menu, online reservations, gallery, hours & location.",
    features: ["Full menu", "Online reservations", "Gallery", "Hours & location"],
  },
  {
    id: "casa-fuego",
    name: "Casa Fuego",
    route: "/casa-fuego",
    thumb: "/demos/casa-fuego/hero.jpg",
    alt: "Casa Fuego Mexican taqueria and cantina concept website — vibrant interior hero image",
    blurb: "Mexican taqueria & cantina concept: full menu, reservations, hours & location.",
    features: ["Full menu", "Reservations", "Hours & location"],
  },
  {
    id: "saffron-smoke",
    name: "Saffron & Smoke",
    route: "/saffron-smoke",
    thumb: "/demos/saffron-smoke/hero.jpg",
    alt: "Saffron and Smoke Pakistani and Indian fine dining concept website — elegant plating hero image",
    blurb: "Pakistani/Indian fine dining concept: full menu, reservations, gallery.",
    features: ["Full menu", "Reservations", "Gallery"],
  },
];

const tiltProps = {
  tiltMaxAngleX: 5,
  tiltMaxAngleY: 5,
  perspective: 1100,
  transitionSpeed: 1100,
  scale: 1.01,
  glareEnable: true,
  glareMaxOpacity: 0.08,
  glareColor: "#ffffff",
  glareBorderRadius: "1.5rem",
};

function ProjectButtons({ project, compact = false }) {
  const btn = compact ? "px-4 py-2 text-[11px]" : "px-5 py-2.5 text-xs";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={project.caseStudyUrl}
        className={`inline-flex items-center gap-2 ${btn} rounded-full font-bold uppercase tracking-wider bg-white/[0.06] text-ink border border-line hover:border-ember/50 hover:text-ember shadow-sm transition-all`}
      >
        <FaBookOpen className="w-3.5 h-3.5 text-ember" aria-hidden="true" />
        <span>Case Study</span>
      </Link>
      {project.liveUrl && project.isLive && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${btn} rounded-full font-bold uppercase tracking-wider bg-ember-deep text-white hover:bg-ember-dark shadow-[0_8px_20px_rgba(166,58,10,0.35)] transition-all`}
        >
          <span>{project.liveLabel || "Live Site"}</span>
          <FaArrowUpRightFromSquare className="w-3 h-3" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

export const ProjectsSection = () => {
  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <section id="work" className="w-full scroll-mt-24 py-20 md:py-28 bg-cream/60 relative overflow-hidden">
      {/* Ambient ember glow */}
      <div
        className="ember-drift absolute top-24 -right-40 w-[640px] h-[420px] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, rgba(232,112,42,0.08) 0%, transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Selected work"
          title="Real projects, shipped to production."
          copy="Seven custom-built products — fast-loading, mobile-first, and engineered to convert visitors into customers."
        />

        {/* Featured project (large) */}
        <Tilt {...tiltProps} className="w-full mb-6 lg:mb-8">
          <article className="cine-card relative rounded-[2rem] p-6 sm:p-10 overflow-hidden">
            <div
              className="absolute top-0 left-10 right-10 h-px ember-hairline"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-cream">
                  <Image
                    src={featuredProject.mockup}
                    alt={featuredProject.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold uppercase tracking-[0.1em] text-ember shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-ember animate-pulse" aria-hidden="true" />
                    Featured
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-cream border border-line text-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-body leading-relaxed">
                  {featuredProject.outcome}
                </p>
                <div className="pt-4 border-t border-line">
                  <ProjectButtons project={featuredProject} />
                </div>
              </div>
            </div>
          </article>
        </Tilt>

        {/* Remaining 6 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {gridProjects.map((project) => (
            <Tilt key={project.id} {...tiltProps} glareBorderRadius="1rem" className="h-full">
              <article className="cine-card h-full rounded-3xl p-5 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-cream">
                    <Image
                      src={project.mockup}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {project.isLive && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-ember shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" aria-hidden="true" />
                        Live
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-cream border border-line text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-semibold text-ink tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-line">
                  <ProjectButtons project={project} compact />
                </div>
              </article>
            </Tilt>
          ))}
        </div>

        {/* Concept builds — fictional restaurant demo sites */}
        <div className="mt-16 lg:mt-20">
          <div className="flex flex-col items-center text-center mb-10 space-y-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-line text-[11px] font-semibold uppercase tracking-[0.14em] text-ember shadow-sm">
              <FaFlask className="w-3 h-3" aria-hidden="true" />
              Concept builds
            </span>
            <h3 className="font-heading font-semibold tracking-tight text-ink text-[clamp(1.5rem,3vw,2.2rem)] leading-tight">
              Imagine your restaurant here.
            </h3>
            <p className="text-body text-base leading-relaxed">
              Three fictional restaurant websites showing exactly what I can build for you —
              menus, reservations, galleries, and locations, all custom-coded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {conceptBuilds.map((demo) => (
              <Tilt key={demo.id} {...tiltProps} glareBorderRadius="1rem" className="h-full">
                <Link
                  href={demo.route}
                  className="cine-card group h-full rounded-3xl overflow-hidden flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-cream">
                    <Image
                      src={demo.thumb}
                      alt={demo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/65 text-ember backdrop-blur-md border border-white/10 text-[10px] font-semibold uppercase tracking-[0.1em]">
                      Concept demo — fictional restaurant
                    </span>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col">
                    <h4 className="font-heading text-xl font-semibold text-ink tracking-tight group-hover:text-ember transition-colors">
                      {demo.name}
                    </h4>
                    <p className="text-sm text-body leading-relaxed flex-1">
                      {demo.blurb}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {demo.features.map((f) => (
                        <span key={f} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-ember-tint border border-ember/15 text-ember">
                          {f}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 pt-2 text-xs uppercase font-bold tracking-[0.12em] text-ink group-hover:text-ember transition-colors">
                      <span>Explore the demo</span>
                      <FaArrowUpRightFromSquare className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
