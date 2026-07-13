"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const projectTypes = [
  "Premium website",
  "Business website",
  "Custom web app",
  "SaaS MVP",
  "Automation tool",
  "Redesign or improvement",
];

const budgets = [
  "Need guidance",
  "Small starter scope",
  "Medium business build",
  "Full custom product",
  "Ongoing support",
];

const timelines = [
  "As soon as possible",
  "Within 2 weeks",
  "This month",
  "1-3 months",
  "Planning ahead",
];

export function LeadForm() {
  const [status, setStatus] = useState("Ready to shape your project.");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setIsSubmitting(true);
    setStatus("Sending your project brief...");

    const form = new FormData(formElement);
    const payload = {
      access_key: accessKey,
      subject: `New Shihaab Tech project enquiry from ${String(form.get("name") || "a client")}`,
      from_name: "Shihaab Tech Website",
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      "Business / company": String(form.get("company") || ""),
      "Project type": String(form.get("projectType") || ""),
      "Scope level": String(form.get("budget") || ""),
      Timeline: String(form.get("timeline") || ""),
      message: String(form.get("message") || ""),
      botcheck: false,
    };

    const website = String(form.get("website") || "");

    if (website) {
      setStatus("Thanks. Your project brief has been sent.");
      setIsSubmitting(false);
      formElement.reset();
      return;
    }

    if (!accessKey) {
      setStatus("Web3Forms is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "The message could not be sent.");
      }

      setStatus("Thanks. Your project brief has been sent.");
      formElement.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The message could not be sent.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <span>Project brief</span>
        <strong>Get a clear next step</strong>
      </div>

      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
      </div>

      <label>
        Business or company
        <input name="company" type="text" placeholder="Your business name" />
      </label>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-grid">
        <label>
          Project type
          <select name="projectType" defaultValue={projectTypes[0]}>
            {projectTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          Timeline
          <select name="timeline" defaultValue={timelines[0]}>
            {timelines.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Scope level
        <select name="budget" defaultValue={budgets[0]}>
          {budgets.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>

      <label>
        What do you want to build?
        <textarea
          name="message"
          placeholder="Tell us about the website, app, automation, or business problem."
          rows={5}
          required
        />
      </label>

      <button type="submit" className="primary-button form-submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send project brief"}
        {isSubmitting ? (
          <Loader2 aria-hidden="true" size={18} className="spin-icon" />
        ) : (
          <ArrowRight aria-hidden="true" size={18} />
        )}
      </button>

      <p className="form-status">
        <CheckCircle2 aria-hidden="true" size={16} />
        {status}
      </p>
    </form>
  );
}
