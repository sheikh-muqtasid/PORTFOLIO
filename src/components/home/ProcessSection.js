"use client";

import React from "react";
import { processSteps } from "@/resources";
import { FaPhone, FaPenNib, FaCode, FaRocket } from "react-icons/fa6";
import { SectionHeader } from "./SectionHeader";

const stepIcons = [FaPhone, FaPenNib, FaCode, FaRocket];

export const ProcessSection = () => {
  return (
    <section id="process" className="w-full scroll-mt-24 py-20 md:py-28 bg-paper relative overflow-hidden">
      {/* Ambient ember glow */}
      <div
        className="ember-drift absolute -bottom-40 -left-40 w-[600px] h-[420px] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, rgba(232,112,42,0.07) 0%, transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="How it works"
          title="A simple, no-surprises process."
          copy="You always know what happens next — no jargon, no hidden costs, no waiting in the dark."
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 list-none m-0 p-0">
          {stepIcons.map((Icon, idx) => {
            const step = processSteps[idx];
            if (!step) return null;
            return (
              <li
                key={step.step}
                className="cine-card relative rounded-3xl p-7 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-ember-tint border border-ember/20 flex items-center justify-center text-ember shadow-[0_0_24px_rgba(232,112,42,0.15)]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-3xl font-semibold text-ember/25" aria-hidden="true">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-ink tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-body leading-relaxed flex-1">
                  {step.description}
                </p>
                <div className="mt-6 pt-5 border-t border-line" aria-hidden="true">
                  <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-ember-deep to-ember shadow-[0_0_12px_rgba(232,112,42,0.5)]"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
