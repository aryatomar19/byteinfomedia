"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { serviceFormOptions } from "@/data/site";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-2xl border border-[#0A0F1C]/12 bg-[#FAFBFD] px-4 py-3.5 text-sm font-medium text-[#0A0F1C] outline-none transition placeholder:text-[#94a3b8] hover:border-[#0A0F1C]/20 focus:border-[#FF6B2C]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,107,44,0.1)]";

const labelClass = "text-xs font-bold uppercase tracking-[0.14em] text-[#52647a]";

export function AssessmentForm({
  className,
  idPrefix = "assessment",
}: {
  className?: string;
  idPrefix?: string;
}) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const lead = {
      source: "BYTEINFOMEDIA Website",
      submittedAt: new Date().toISOString(),
      pageUri: typeof window !== "undefined" ? window.location.href : "",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const savedLeads = JSON.parse(window.localStorage.getItem("byteinfomedia_leads") || "[]");
      window.localStorage.setItem("byteinfomedia_leads", JSON.stringify([...savedLeads, lead]));
      setState("success");
      setMessage("Thanks. Our consulting team will review your request and contact you shortly.");
      form.reset();
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again or contact us directly.");
    }
  }

  return (
    <form
      onSubmit={submitLead}
      id="assessment"
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-[#0A0F1C]/8 bg-white p-6 shadow-[0_24px_80px_rgba(10,15,28,0.08)] sm:p-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FF6B2C]/8 blur-3xl" />
      <div className="relative mb-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
          <ShieldCheck className="h-3.5 w-3.5" />
          Priority response
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-3xl">Request Free Cloud Assessment</h3>
        <p className="mt-3 text-sm leading-6 text-[#52647a]">
          Tell us about your environment and business goals. Our consultants will respond with a practical cloud,
          DevOps, security, or cost optimization direction.
        </p>
      </div>

      <div className="relative grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2" htmlFor={`${idPrefix}-name`}>
          <span className={labelClass}>Full Name</span>
          <input id={`${idPrefix}-name`} name="name" required placeholder="Your full name" className={inputClass} />
        </label>
        <label className="grid gap-2" htmlFor={`${idPrefix}-email`}>
          <span className={labelClass}>Work Email</span>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            className={inputClass}
          />
        </label>
        <label className="grid gap-2" htmlFor={`${idPrefix}-phone`}>
          <span className={labelClass}>Phone Number</span>
          <input id={`${idPrefix}-phone`} name="phone" placeholder="+91 98765 43210" className={inputClass} />
        </label>
        <label className="grid gap-2" htmlFor={`${idPrefix}-company`}>
          <span className={labelClass}>Company Name</span>
          <input id={`${idPrefix}-company`} name="company" placeholder="Company or organization" className={inputClass} />
        </label>
        <label className="grid gap-2 sm:col-span-2" htmlFor={`${idPrefix}-service`}>
          <span className={labelClass}>Service Required</span>
          <select id={`${idPrefix}-service`} name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select service
            </option>
            {serviceFormOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 sm:col-span-2" htmlFor={`${idPrefix}-message`}>
          <span className={labelClass}>Project Requirements</span>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={4}
            placeholder="Tell us about your AWS, DevOps, cloud migration, cybersecurity, or managed services requirement."
            className={inputClass}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#FF6B2C] via-[#ff8f5c] to-[#FF6B2C] px-5 py-4 text-sm font-black uppercase tracking-[0.1em] text-[#0A0F1C] shadow-[0_20px_50px_rgba(255,107,44,0.28)] transition hover:-translate-y-0.5 disabled:opacity-70"
      >
        {state === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        Request Free Cloud Assessment
      </button>

      {message && (
        <p
          className={cn(
            "mt-4 rounded-2xl border px-4 py-3 text-sm",
            state === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-rose-200 bg-rose-50 text-rose-800",
          )}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
