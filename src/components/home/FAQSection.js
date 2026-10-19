"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { faqs } from "@/resources";
import { SectionHeader } from "./SectionHeader";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="w-full py-20 md:py-28 bg-paper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Common questions"
          title="Questions, answered."
          copy="Everything you need to know before we start working together."
        />

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-button-${idx}`;
            const panelId = `faq-panel-${idx}`;
            return (
              <div
                key={idx}
                className={`bg-surface border rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_8px_28px_rgba(0,0,0,0.35)] ${
                  isOpen ? "border-accent/40 shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_28px_rgba(139,124,255,0.08)]" : "border-line hover:border-white/20"
                }`}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                  >
                    <span className="text-base sm:text-lg font-semibold text-ink">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-accent-deep text-white border-accent-deep shadow-[0_0_16px_rgba(109,93,246,0.5)]"
                          : "bg-cream border-line text-muted"
                      }`}
                      aria-hidden="true"
                    >
                      <FaChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-body text-sm sm:text-base leading-relaxed"
                >
                  <p className="pt-4 border-t border-line m-0">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Have a different question?{" "}
          <a
            href="#contact"
            className="text-accent font-semibold underline decoration-accent/40 underline-offset-4 hover:decoration-accent rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Send a quick message
          </a>{" "}
          — I reply within 24 hours.
        </p>
      </div>
    </section>
  );
};
