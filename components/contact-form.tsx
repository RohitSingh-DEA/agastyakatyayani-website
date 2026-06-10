"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

// The form composes a pre-filled email to contact@agastyakatyayani.com via the
// visitor's mail client. To capture submissions server-side instead, point the
// form at a service like Formspree/Resend and replace handleSubmit.
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Enquiry: ${interest || "General"} — ${name}`;
    const body = [
      `Name: ${name}`,
      company && `Company: ${company}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `Area of interest: ${interest}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-slate-700">Name *</span>
          <input name="name" required autoComplete="name" placeholder="Your full name" className={inputClass} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-slate-700">Company / Organisation</span>
          <input name="company" autoComplete="organization" placeholder="Optional" className={inputClass} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-slate-700">Email *</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-slate-700">Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+91" className={inputClass} />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-sm font-medium text-slate-700">Area of interest *</span>
        <select name="interest" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-medium text-slate-700">Message *</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or requirement…"
          className={inputClass}
        />
      </label>

      <button
        type="submit"
        className="mt-1 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-amber-400"
      >
        Send Enquiry
      </button>

      {submitted && (
        <p className="text-sm text-emerald-700" role="status">
          Your email app should have opened with the enquiry pre-filled. If it
          didn&apos;t, write to us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
