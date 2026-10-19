"use client";

import { useState } from "react";

/*
 * DEMO ONLY — front-end validation and a local success state.
 * There is no backend here: no fetch, no API route, no data is sent anywhere.
 */

const TIME_SLOTS = [
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function prettyDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ReservationForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    party: "2",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  function set(key, value) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next = {};
    if (values.name.trim().length < 2) {
      next.name = "Please enter your name (at least 2 characters).";
    }
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      next.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!values.date) {
      next.date = "Please choose a date.";
    } else if (values.date < todayISO()) {
      next.date = "That date has already passed — pick today or later.";
    }
    if (!values.time) {
      next.time = "Please pick a time.";
    }
    const party = Number(values.party);
    if (!Number.isInteger(party) || party < 1 || party > 12) {
      next.party = "Party size must be between 1 and 12.";
    }
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      // Move focus to the first invalid field so screen-reader and keyboard
      // users land where the problem is.
      const first = ["name", "phone", "date", "time", "party"].find((k) => next[k]);
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    // Demo only: hold the booking in local state instead of sending it anywhere.
    setConfirmed({ ...values });
  }

  function handleAgain() {
    setConfirmed(null);
    setValues({ name: "", phone: "", date: "", time: values.time, party: "2", notes: "" });
    setErrors({});
  }

  if (confirmed) {
    return (
      <output className="cf-success" aria-live="polite">
        <span className="cf-success-badge" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Reservation confirmed</title>
            <path d="M4 12.5l5 5L20 6.5" />
          </svg>
        </span>
        <h3 className="cf-display">¡Nos vemos pronto!</h3>
        <p>
          Thanks, {confirmed.name.trim()} — your table request is in. A host will text{" "}
          <strong>{confirmed.phone}</strong> to confirm.
        </p>
        <dl>
          <dt>Date</dt>
          <dd>{prettyDate(confirmed.date)}</dd>
          <dt>Time</dt>
          <dd>{confirmed.time}</dd>
          <dt>Party</dt>
          <dd>
            {confirmed.party} {Number(confirmed.party) === 1 ? "guest" : "guests"}
          </dd>
          {confirmed.notes.trim() && (
            <>
              <dt>Notes</dt>
              <dd>{confirmed.notes.trim()}</dd>
            </>
          )}
        </dl>
        <p className="cf-demo-note">
          Concept demo: this form runs entirely in your browser and doesn&apos;t send your details
          anywhere — no real reservation was made.
        </p>
        <button type="button" className="cf-again" onClick={handleAgain}>
          Make another request
        </button>
      </output>
    );
  }

  return (
    <form
      className="cf-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Table reservation request"
    >
      <div className="cf-form-grid">
        <div className="cf-field" aria-invalid={Boolean(errors.name)}>
          <label htmlFor="cf-name">
            Full name{" "}
            <span className="cf-req" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="María García"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          <p className="cf-error" id="cf-name-err" role={errors.name ? "alert" : undefined}>
            {errors.name || ""}
          </p>
        </div>

        <div className="cf-field" aria-invalid={Boolean(errors.phone)}>
          <label htmlFor="cf-phone">
            Phone number{" "}
            <span className="cf-req" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(713) 555-0100"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-describedby={errors.phone ? "cf-phone-err" : undefined}
          />
          <p className="cf-error" id="cf-phone-err" role={errors.phone ? "alert" : undefined}>
            {errors.phone || ""}
          </p>
        </div>

        <div className="cf-field" aria-invalid={Boolean(errors.date)}>
          <label htmlFor="cf-date">
            Date{" "}
            <span className="cf-req" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="cf-date"
            type="date"
            min={todayISO()}
            value={values.date}
            onChange={(e) => set("date", e.target.value)}
            aria-describedby={errors.date ? "cf-date-err" : undefined}
          />
          <p className="cf-error" id="cf-date-err" role={errors.date ? "alert" : undefined}>
            {errors.date || ""}
          </p>
        </div>

        <div className="cf-field" aria-invalid={Boolean(errors.time)}>
          <label htmlFor="cf-time">
            Time{" "}
            <span className="cf-req" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id="cf-time"
            value={values.time}
            onChange={(e) => set("time", e.target.value)}
            aria-describedby={errors.time ? "cf-time-err" : undefined}
          >
            <option value="">Choose a time…</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <p className="cf-error" id="cf-time-err" role={errors.time ? "alert" : undefined}>
            {errors.time || ""}
          </p>
        </div>

        <div className="cf-field" aria-invalid={Boolean(errors.party)}>
          <label htmlFor="cf-party">
            Party size{" "}
            <span className="cf-req" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id="cf-party"
            value={values.party}
            onChange={(e) => set("party", e.target.value)}
            aria-describedby={errors.party ? "cf-party-err" : undefined}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          <p className="cf-error" id="cf-party-err" role={errors.party ? "alert" : undefined}>
            {errors.party || ""}
          </p>
        </div>

        <div className="cf-field">
          <label htmlFor="cf-notes">Special requests (optional)</label>
          <input
            id="cf-notes"
            type="text"
            placeholder="Birthday, high chair, patio seating…"
            value={values.notes}
            onChange={(e) => set("notes", e.target.value)}
          />
          <p className="cf-error" aria-hidden="true" />
        </div>

        <div className="cf-field-full">
          <button type="submit" className="cf-btn">
            Request my table
          </button>
        </div>
      </div>
    </form>
  );
}
