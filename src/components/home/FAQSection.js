"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { faqs } from "@/resources";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="w-full py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4FF3F]">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Frequently asked questions.
          </h2>
          <p className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed">
            Everything you need to know before starting your project.
          </p>
        </div>

        {/* 4 FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#121215]/80 border border-white/10 hover:border-[#D4FF3F]/30 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F] cursor-pointer"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transform transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#D4FF3F] bg-[#D4FF3F]/10 border-[#D4FF3F]/30" : ""
                    }`}
                  >
                    <FaChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More questions prompt */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-400">
            Have a different question?{" "}
            <a href="#contact" className="text-[#D4FF3F] font-semibold hover:underline">
              Send a quick message
            </a>{" "}
            and I will answer within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};
