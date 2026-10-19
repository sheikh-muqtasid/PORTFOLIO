"use client";

import { useMemo, useState } from "react";
import styles from "./ember.module.css";

/* DEMO NOTE: this form is front-end only. It validates locally and shows a
   confirmation state, but nothing is sent anywhere — there is no backend. */

const TIME_SLOTS = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

function todayISO() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function formatDate(iso) {
  // Parse as local noon to avoid timezone day-shifts.
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ReservationForm() {
  const [values, setValues] = useState({
    date: "",
    time: "",
    party: "2",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  const minDate = useMemo(() => todayISO(), []);

  function set(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};

    if (!values.date) {
      next.date = "Please choose a date.";
    } else if (values.date < minDate) {
      next.date = "Please choose a date in the future.";
    } else if (new Date(`${values.date}T12:00:00`).getDay() === 1) {
      next.date = "We are closed on Mondays — please pick another day.";
    }

    if (!values.time) {
      next.time = "Please choose a time.";
    }

    if (!values.party || Number(values.party) < 1) {
      next.party = "Please choose your party size.";
    }

    if (!values.name.trim()) {
      next.name = "Please enter your name.";
    } else if (values.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }

    const digits = values.phone.replace(/\D/g, "");
    if (!values.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (digits.length !== 10) {
      next.phone = "Please enter a valid 10-digit US phone number.";
    }

    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Front-end only: build a confirmation code locally. Nothing is sent.
    const code = `EO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setConfirmed({
      code,
      ...values,
      name: values.name.trim(),
      phone: values.phone.trim(),
    });
  }

  function handleReset() {
    setValues({ date: "", time: "", party: "2", name: "", phone: "" });
    setErrors({});
    setConfirmed(null);
  }

  if (confirmed) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <p className={styles.eyebrow}>Table Reserved</p>
        <h3>You&apos;re on the books, {confirmed.name.split(" ")[0]}.</h3>
        <p>
          We look forward to hosting you. A confirmation text will be sent to{" "}
          {confirmed.phone} shortly.
        </p>
        <div>
          <span className={styles.confirmCode}>{confirmed.code}</span>
        </div>
        <div className={styles.successDetails}>
          <p>
            <strong>Date:</strong> {formatDate(confirmed.date)}
          </p>
          <p>
            <strong>Time:</strong> {confirmed.time}
          </p>
          <p>
            <strong>Party:</strong> {confirmed.party}{" "}
            {Number(confirmed.party) === 1 ? "guest" : "guests"}
          </p>
          <p>
            <strong>Reserved for:</strong> {confirmed.name}
          </p>
        </div>
        <p style={{ marginTop: "1.5rem" }}>
          <button type="button" className={styles.btnOutline} onClick={handleReset}>
            Make another reservation
          </button>
        </p>
      </div>
    );
  }

  const invalid = (field) => (errors[field] ? "true" : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="eo-date">Date</label>
          <input
            id="eo-date"
            type="date"
            min={minDate}
            value={values.date}
            onChange={(e) => set("date", e.target.value)}
            aria-invalid={invalid("date")}
            aria-describedby={errors.date ? "eo-date-err" : undefined}
          />
          <span className={styles.err} id="eo-date-err" role="alert">
            {errors.date || ""}
          </span>
        </div>

        <div className={styles.field}>
          <label htmlFor="eo-time">Time</label>
          <select
            id="eo-time"
            value={values.time}
            onChange={(e) => set("time", e.target.value)}
            aria-invalid={invalid("time")}
            aria-describedby={errors.time ? "eo-time-err" : undefined}
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <span className={styles.err} id="eo-time-err" role="alert">
            {errors.time || ""}
          </span>
        </div>

        <div className={styles.field}>
          <label htmlFor="eo-party">Party size</label>
          <select
            id="eo-party"
            value={values.party}
            onChange={(e) => set("party", e.target.value)}
            aria-invalid={invalid("party")}
            aria-describedby={errors.party ? "eo-party-err" : undefined}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
            <option value="9">9+ (private dining)</option>
          </select>
          <span className={styles.err} id="eo-party-err" role="alert">
            {errors.party || ""}
          </span>
        </div>

        <div className={styles.field}>
          <label htmlFor="eo-name">Full name</label>
          <input
            id="eo-name"
            type="text"
            autoComplete="name"
            placeholder="Jordan Mitchell"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={invalid("name")}
            aria-describedby={errors.name ? "eo-name-err" : undefined}
          />
          <span className={styles.err} id="eo-name-err" role="alert">
            {errors.name || ""}
          </span>
        </div>

        <div className={`${styles.field} ${styles.span2}`}>
          <label htmlFor="eo-phone">Phone</label>
          <input
            id="eo-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(713) 555-0142"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={invalid("phone")}
            aria-describedby={errors.phone ? "eo-phone-err" : undefined}
          />
          <span className={styles.err} id="eo-phone-err" role="alert">
            {errors.phone || ""}
          </span>
        </div>
      </div>

      <button type="submit" className={`${styles.btn} ${styles.formSubmit}`}>
        Reserve my table
      </button>
      <p className={styles.formHint}>
        Parties of 9 or more: call (713) 555-0184 for private dining.
      </p>
    </form>
  );
}
