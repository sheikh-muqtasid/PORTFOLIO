"use client";

import React from "react";
import { processSteps } from "@/resources";
import { FaPhone, FaPenNib, FaCode, FaRocket } from "react-icons/fa6";
import { SectionHeader } from "./SectionHeader";

const stepIcons = [FaPhone, FaPenNib, FaCode, FaRocket];

export const ProcessSection = () => {
  return (
    <section id="process" className="w-full scroll-mt-24 py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="relative bg-surface border border-line rounded-3xl p-7 shadow-[0_10px_36px_rgba(28,25,23,0.05)] hover:shadow-[0_18px_48px_rgba(28,25,23,0.10)] hover:-translate-y-1 hover:border-ember/25 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-ember-tint border border-ember/15 flex items-center justify-center text-ember">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-3xl font-semibold text-line" aria-hidden="true">
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
                  <div className="w-full h-1 bg-cream rounded-full overflow-hidden">
                    <div
                      className="h-full bg-ember/70 rounded-full"
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
