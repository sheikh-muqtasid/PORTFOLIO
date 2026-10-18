"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

const techList = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
];

export const TechStackSection = () => {
  return (
    <section className="w-full py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4FF3F]">
            Tech &amp; Tools
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-heading">
            Battle-tested engineering stack.
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
            The modern frameworks, languages, and cloud infrastructure used to build fast, secure digital products.
          </p>
        </div>

        {/* 16 Technologies — Rendered Exactly Once */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
          {techList.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group p-4 rounded-2xl bg-[#121215]/80 hover:bg-[#15161c] border border-white/10 hover:border-[#D4FF3F]/40 backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center gap-2.5 shadow-md hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(212,255,63,0.1)]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-[#D4FF3F] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors text-center tracking-tight">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
