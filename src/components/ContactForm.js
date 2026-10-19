"use client";

import React, { useState } from "react";
import { FaCalendarDays, FaEnvelope, FaClock, FaCheck, FaPaperPlane } from "react-icons/fa6";
import { person } from "@/resources";

/* ============================================================================
   CONTACT FORM — HOW TO WIRE UP FORMSPREE (2 minutes, no other code changes)
   ----------------------------------------------------------------------------
   1. Go to https://formspree.io/forms, create a free account, click "New Form".
   2. Formspree gives you an endpoint that looks like:
         https://formspree.io/f/xqkrndgw
   3. Replace the YOUR_FORM_ID below with your real form ID:
         const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqkrndgw";
      That's it — submissions will POST straight to your Formspree inbox.

   UNTIL YOU DO THIS: the form is NOT dead. It falls back to opening the
   visitor's email app with their message pre-filled (see handleSubmit below),
   so no inquiry is ever silently lost.
   ========================================================================== */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

/* ============================================================================
   "BOOK A FREE CALL" LINK — PLACEHOLDER
   ----------------------------------------------------------------------------
   Paste your scheduling link (Calendly, Cal.com, etc.) here. While this is
   empty, the card below renders as a clearly-marked placeholder instead of a
   dead link.
   Example: const BOOKING_LINK = "https://calendly.com/your-handle/30min";
   ========================================================================== */
const BOOKING_LINK = "";

const isFormspreeConfigured = !FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Business Website",
    details: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [usedEmailFallback, setUsedEmailFallback] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} — from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Sheikh,\n\nMy name is ${formData.name} (${formData.email}).\n\nProject type: ${formData.projectType}\n\nProject details:\n${formData.details}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      if (isFormspreeConfigured) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            projectType: formData.projectType,
            details: formData.details,
          }),
        });

        if (!response.ok) {
          throw new Error(
            "Something went wrong sending your message. Please email me directly instead."
          );
        }
        setUsedEmailFallback(false);
      } else {
        // Formspree not configured yet — hand the message to the visitor's
        // email app so the inquiry still reaches sheikhmuqtasid@gmail.com.
        openMailtoFallback();
        setUsedEmailFallback(true);
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", projectType: "Business Website", details: "" });
    } catch (err) {
      setError(err.message || "Something went wrong. Please email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full scroll-mt-24 pt-20 md:pt-28 pb-24 md:pb-32 bg-cream/60 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs uppercase font-semibold tracking-[0.14em] text-accent">
            Let&rsquo;s build together
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-heading font-semibold tracking-tight text-ink text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.1] mb-4">
            Have a project in mind? Let&rsquo;s talk.
          </h2>
          <p className="text-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Tell me about your goals and I&rsquo;ll reply with next steps and a tailored
            estimate — <strong className="text-ink font-semibold">within 24 hours</strong>.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-surface border border-line rounded-[1.75rem] p-6 sm:p-10 shadow-[0_24px_70px_rgba(28,25,23,0.10)] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-1"
            aria-hidden="true"
            style={{ background: "linear-gradient(90deg, transparent, #6d5df6 30%, #6d5df6 70%, transparent)" }}
          />

          {submitted ? (
            <div className="py-10 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent-tint border border-accent/25 flex items-center justify-center mx-auto text-accent mb-4">
                <FaCheck className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-ink">
                {usedEmailFallback ? "Opening your email app…" : "Message sent!"}
              </h3>
              <p className="text-body max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                {usedEmailFallback
                  ? "Your email app should now open with your message pre-filled — just hit send and it lands directly in my inbox. I reply within 24 hours."
                  : "Thanks for reaching out! I'll review your project details and get back to you within 24 hours."}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider bg-cream border border-line text-ink hover:border-accent/40 transition-all cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-xs uppercase font-semibold tracking-[0.1em] text-body">
                    Your name <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3.5 rounded-xl bg-paper border border-line text-ink placeholder:text-muted text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-xs uppercase font-semibold tracking-[0.1em] text-body">
                    Email address <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@yourrestaurant.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-paper border border-line text-ink placeholder:text-muted text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-projectType" className="block text-xs uppercase font-semibold tracking-[0.1em] text-body">
                  What are you looking to build?
                </label>
                <select
                  id="contact-projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-paper border border-line text-ink text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25 transition-all"
                >
                  <option value="Restaurant Website">Restaurant Website (menu, reservations &amp; more)</option>
                  <option value="Business Website">Business Website</option>
                  <option value="Web App & Dashboard">Web App &amp; Dashboard</option>
                  <option value="Mobile App">Mobile App (Flutter iOS &amp; Android)</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Other Project">Something else</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-details" className="block text-xs uppercase font-semibold tracking-[0.1em] text-body">
                  Project details &amp; goals <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-details"
                  name="details"
                  rows={5}
                  required
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me about your restaurant or business, what the website should do (online menu, reservations, takeaway orders…), and any target launch date."
                  className="w-full px-4 py-3.5 rounded-xl bg-paper border border-line text-ink placeholder:text-muted text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25 transition-all resize-y min-h-[120px]"
                />
              </div>

              {error && (
                <p role="alert" className="p-4 rounded-xl bg-red-950/60 border border-red-500/30 text-red-200 text-sm">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 rounded-full text-sm uppercase tracking-wider font-bold bg-accent-deep text-white hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 shadow-[0_12px_28px_rgba(109,93,246,0.28)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
              >
                <FaPaperPlane className="w-4 h-4" aria-hidden="true" />
                {submitting ? <span>Sending…</span> : <span>Send project inquiry</span>}
              </button>

              <p className="text-center text-xs text-muted">
                Prefer email? Write to{" "}
                <a
                  href={`mailto:${person.email}`}
                  className="text-accent font-semibold underline decoration-accent/40 underline-offset-4 hover:decoration-accent rounded"
                >
                  {person.email}
                </a>
              </p>
            </form>
          )}

          {/* Direct channels */}
          <div className="mt-8 pt-8 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`mailto:${person.email}`}
              className="p-4 rounded-2xl bg-paper border border-line hover:border-accent/40 transition-all flex items-center gap-3 group"
            >
              <span className="w-10 h-10 rounded-xl bg-accent-tint flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                <FaEnvelope className="w-4 h-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] text-muted font-semibold uppercase tracking-wider">Direct email</span>
                <span className="block text-xs text-ink font-medium truncate">{person.email}</span>
              </span>
            </a>

            {BOOKING_LINK ? (
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-paper border border-line hover:border-accent/40 transition-all flex items-center gap-3 group"
              >
                <span className="w-10 h-10 rounded-xl bg-accent-tint flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <FaCalendarDays className="w-4 h-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] text-muted font-semibold uppercase tracking-wider">Book a free call</span>
                  <span className="block text-xs text-ink font-medium">Pick a time that suits you ↗</span>
                </span>
              </a>
            ) : (
              <div
                className="p-4 rounded-2xl bg-paper border border-dashed border-accent/30 flex items-center gap-3"
                title="Add your scheduling URL in ContactForm.js → BOOKING_LINK"
              >
                <span className="w-10 h-10 rounded-xl bg-accent-tint flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <FaCalendarDays className="w-4 h-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] text-muted font-semibold uppercase tracking-wider">Book a free call</span>
                  <span className="block text-xs text-accent font-semibold">[scheduling link placeholder]</span>
                </span>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-paper border border-line flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-accent-tint flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                <FaClock className="w-4 h-4" />
              </span>
              <span>
                <span className="block text-[11px] text-muted font-semibold uppercase tracking-wider">Response promise</span>
                <span className="block text-xs text-accent font-semibold">Replies within 24 hours</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
