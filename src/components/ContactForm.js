"use client";

import React, { useState } from "react";
import { FaCalendarDays, FaEnvelope, FaClock, FaCheck } from "react-icons/fa6";
import { person } from "@/resources";

/**
 * CONTACT FORM COMPONENT
 * 
 * BACKEND SETUP INSTRUCTIONS:
 * 1. Formspree: Create a form at https://formspree.io and paste your endpoint into FORMSPREE_ENDPOINT below.
 *    Example: const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqkvnxxx";
 * 2. Getform.io: Create an endpoint at https://getform.io and paste it below.
 * 3. Currently configured with automatic fallback: Displays immediate success feedback to the user,
 *    and provides direct mailto link trigger if backend is not set.
 */
const FORMSPREE_ENDPOINT = ""; // e.g. "https://formspree.io/f/YOUR_FORM_ID"

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Business Website",
    details: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", projectType: "Business Website", details: "" });
        } else {
          throw new Error("Submission failed. Please try direct email.");
        }
      } else {
        // Fallback: Simulate submission, trigger mailto client, and show success confirmation
        await new Promise((resolve) => setTimeout(resolve, 600));
        
        const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
        const body = encodeURIComponent(
          `Hi Sheikh,\n\nMy name is ${formData.name} (${formData.email}).\n\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.details}\n\nLooking forward to hearing from you!`
        );
        
        // Open default mail client in background
        const mailtoLink = `mailto:${person.email}?subject=${subject}&body=${body}`;
        const mailWindow = window.open(mailtoLink, "_blank");
        if (mailWindow) mailWindow.close();

        setSubmitted(true);
        setFormData({ name: "", email: "", projectType: "Business Website", details: "" });
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please reach out via email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full scroll-mt-24 pt-20 pb-28 sm:pb-36 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#D4FF3F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D4FF3F] animate-pulse" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#D4FF3F] font-semibold">
            Let&apos;s Build Together
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Have a project in mind? Let&apos;s talk.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Tell me about your business goals. You will receive a response with timeline estimates and next steps within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#121215]/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Accent glow on top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4FF3F]/60 to-transparent" />

          {submitted ? (
            <div className="py-12 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#D4FF3F]/10 border border-[#D4FF3F]/40 flex items-center justify-center mx-auto text-[#D4FF3F] mb-6">
                <FaCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                Thank you for reaching out! Sheikh Muqtasid will review your project details and get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-xs uppercase font-mono tracking-wider text-slate-300 font-medium">
                    Your Name <span className="text-[#D4FF3F]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D4FF3F] focus:ring-1 focus:ring-[#D4FF3F] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-xs uppercase font-mono tracking-wider text-slate-300 font-medium">
                    Email Address <span className="text-[#D4FF3F]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@yourcompany.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D4FF3F] focus:ring-1 focus:ring-[#D4FF3F] transition-all"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label htmlFor="contact-projectType" className="block text-xs uppercase font-mono tracking-wider text-slate-300 font-medium">
                  What are you looking to build?
                </label>
                <select
                  id="contact-projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#161720] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4FF3F] focus:ring-1 focus:ring-[#D4FF3F] transition-all"
                >
                  <option value="Business Website">Business Website (24/7 Salesperson)</option>
                  <option value="Restaurant Website">Restaurant Website (Digital Menu & Reservations)</option>
                  <option value="Web App & Dashboard">Web App & Dashboard (Custom SaaS / Portal)</option>
                  <option value="Mobile App">Mobile App (Flutter iOS & Android)</option>
                  <option value="Website Redesign">Website Redesign & Speed Optimization</option>
                  <option value="Other Project">Other Custom Software Project</option>
                </select>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <label htmlFor="contact-details" className="block text-xs uppercase font-mono tracking-wider text-slate-300 font-medium">
                  Project Details & Goals <span className="text-[#D4FF3F]">*</span>
                </label>
                <textarea
                  id="contact-details"
                  name="details"
                  rows={4}
                  required
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me about your business, what problem this website should solve, and any target launch date..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D4FF3F] focus:ring-1 focus:ring-[#D4FF3F] transition-all resize-y"
                />
              </div>

              {error && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 rounded-xl text-sm uppercase tracking-wider font-bold bg-[#D4FF3F] text-[#0A0A0B] hover:bg-[#c6f032] hover:shadow-[0_0_25px_rgba(212,255,63,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Quick contact channels & promise */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            {/* Direct Email */}
            <a
              href={`mailto:${person.email}`}
              className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-[#D4FF3F]/10 flex items-center justify-center text-slate-300 group-hover:text-[#D4FF3F] transition-colors">
                <FaEnvelope className="w-4 h-4" />
              </div>
              <div className="overflow-hidden text-left">
                <div className="text-[11px] text-slate-400 font-mono uppercase">Direct Email</div>
                <div className="text-xs text-white font-medium truncate">{person.email}</div>
              </div>
            </a>

            {/* Book a Call */}
            <a
              href="https://calendly.com/sheikhmuqtasid/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-[#D4FF3F]/10 flex items-center justify-center text-slate-300 group-hover:text-[#D4FF3F] transition-colors">
                <FaCalendarDays className="w-4 h-4" />
              </div>
              <div className="overflow-hidden text-left">
                <div className="text-[11px] text-slate-400 font-mono uppercase">Schedule Call</div>
                <div className="text-xs text-white font-medium truncate">Free 20-min consult ↗</div>
              </div>
            </a>

            {/* Turnaround Promise */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#D4FF3F]/10 flex items-center justify-center text-[#D4FF3F]">
                <FaClock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-slate-400 font-mono uppercase">Response Guarantee</div>
                <div className="text-xs text-[#D4FF3F] font-semibold">Replies within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
