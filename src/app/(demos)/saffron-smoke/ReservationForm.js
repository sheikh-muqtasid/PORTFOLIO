"use client";

/*
 * ReservationForm — DEMO ONLY.
 * This is a front-end-only concept: there is no backend, no API route,
 * and no data is transmitted anywhere. On submit the form validates
 * locally and shows a confirmation state purely in the browser.
 */

import { useMemo, useState } from "react";
import styles from "./saffron-smoke.module.css";

const TIME_SLOTS = [
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

const PARTY_SIZES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

function Field({ id, label, error, children, full }) {
  return (
    <div className={`${styles.field} ${full ? styles.fieldFull : ""} ${error ? styles.fieldInvalid : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p className={styles.fieldError} role="alert" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ReservationForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    party: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  const today = useMemo(() => {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }, []);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function validate() {
    const next = {};

    if (!values.name.trim()) {
      next.name = "Please tell us the name for the reservation.";
    }

    const digits = values.phone.replace(/\D/g, "");
    if (!values.phone.trim()) {
      next.phone = "Please add a phone number so we can confirm.";
    } else if (digits.length < 7 || digits.length > 15) {
      next.phone = "That phone number doesn't look complete — please check it.";
    }

    if (!values.date) {
      next.date = "Please choose a date.";
    } else {
      const chosen = new Date(`${values.date}T12:00:00`);
      if (Number.isNaN(chosen.getTime())) {
        next.date = "That date doesn't look valid.";
      } else if (chosen.getDay() === 1) {
        // The kitchen is dark on Mondays.
        next.date = "We're closed on Mondays — please pick another day.";
      } else if (values.date < today) {
        next.date = "Please choose today or a future date.";
      }
    }

    if (!values.time) {
      next.time = "Please pick a seating time.";
    }

    if (!values.party) {
      next.party = "How many guests should we expect?";
    }

    return next;
  }

  function onSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstError = document.querySelector('[role="alert"]');
      if (firstError) firstError.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    // DEMO: no network call — confirmation is rendered locally only.
    setConfirmed({ ...values });
  }

  function reset() {
    setConfirmed(null);
    setValues({ name: "", phone: "", date: "", time: "", party: "", notes: "" });
    setErrors({});
  }

  if (confirmed) {
    const prettyDate = new Date(`${confirmed.date}T12:00:00`).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return (
      <div className={styles.successCard} aria-live="polite">
        <span className={styles.successIcon} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className={styles.successTitle}>Table requested, {confirmed.name.split(" ")[0]}.</h3>
        <p className={styles.successText}>
          In a live restaurant site this would go straight to the host stand. For this
          concept demo, nothing was sent anywhere — but your table is ready below.
        </p>
        <ul className={styles.successDetails}>
          <li>
            <strong>Date</strong> {prettyDate}
          </li>
          <li>
            <strong>Time</strong> {confirmed.time}
          </li>
          <li>
            <strong>Party</strong> {confirmed.party} {Number(confirmed.party) === 1 ? "guest" : "guests"}
          </li>
          <li>
            <strong>Phone</strong> {confirmed.phone}
          </li>
          {confirmed.notes.trim() ? (
            <li>
              <strong>Notes</strong> {confirmed.notes.trim()}
            </li>
          ) : null}
        </ul>
        <button type="button" className={`${styles.btn} ${styles.btnGhost} ${styles.formSubmit}`} onClick={reset}>
          Make another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Table reservation request">
      <div className={styles.fieldGrid}>
        <Field id="res-name" label="Full name" error={errors.name}>
          <input
            id="res-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ayesha Khan"
            value={values.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "res-name-error" : undefined}
          />
        </Field>
        <Field id="res-phone" label="Phone" error={errors.phone}>
          <input
            id="res-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(713) 555-0147"
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "res-phone-error" : undefined}
          />
        </Field>
        <Field id="res-date" label="Date" error={errors.date}>
          <input
            id="res-date"
            name="date"
            type="date"
            min={today}
            value={values.date}
            onChange={set("date")}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "res-date-error" : undefined}
          />
        </Field>
        <Field id="res-time" label="Time" error={errors.time}>
          <select
            id="res-time"
            name="time"
            value={values.time}
            onChange={set("time")}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? "res-time-error" : undefined}
          >
            <option value="">Select a seating…</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field id="res-party" label="Party size" error={errors.party}>
          <select
            id="res-party"
            name="party"
            value={values.party}
            onChange={set("party")}
            aria-invalid={Boolean(errors.party)}
            aria-describedby={errors.party ? "res-party-error" : undefined}
          >
            <option value="">Select guests…</option>
            {PARTY_SIZES.map((n) => (
              <option key={n} value={n}>
                {n} {n === "1" ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </Field>
        <Field id="res-notes" label="Special requests (optional)" full>
          <textarea
            id="res-notes"
            name="notes"
            rows={3}
            placeholder="Anniversary, wheelchair access, extra-spicy karahi…"
            value={values.notes}
            onChange={set("notes")}
          />
        </Field>
      </div>
      <button type="submit" className={`${styles.btn} ${styles.btnGold} ${styles.formSubmit}`}>
        Request Table
      </button>
      <p className={styles.formNote}>
        Closed Mondays — the calendar will flag them. For parties over 12, please
        call (713) 555-0312.
      </p>
    </form>
  );
}
