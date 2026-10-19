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
import { SectionHeader } from "./SectionHeader";

// Each technology appears exactly once in this single strip.
const techList = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
];

export const TechStackSection = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-paper border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tech & tools"
          title="A modern, battle-tested stack."
          copy="The frameworks, languages, and infrastructure behind every fast, secure build."
        />

        {/* Single clean strip — each technology exactly once */}
        <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 list-none m-0 p-0 max-w-5xl mx-auto">
          {techList.map((tech) => {
            const Icon = tech.icon;
            return (
              <li
                key={tech.name}
                className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-surface border border-line shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:border-ember/40 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.45),0_0_20px_rgba(232,112,42,0.12)] transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-ember" aria-hidden="true" />
                <span className="text-sm font-medium text-ink whitespace-nowrap">
                  {tech.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
