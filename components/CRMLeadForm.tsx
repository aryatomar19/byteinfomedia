"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type LeadIntent = "consultation" | "assessment" | "pricing" | "contact" | "newsletter";

type CRMLeadFormProps = {
  intent: LeadIntent;
  compact?: boolean;
  title?: string;
  description?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const crmProvider = process.env.NEXT_PUBLIC_CRM_PROVIDER?.toLowerCase() || "hubspot";
const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const hubspotFormId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
const zohoWebformUrl = process.env.NEXT_PUBLIC_ZOHO_WEBFORM_URL;
const salesforceWebToLeadUrl = process.env.NEXT_PUBLIC_SALESFORCE_WEB_TO_LEAD_URL;
const salesforceOrgId = process.env.NEXT_PUBLIC_SALESFORCE_ORG_ID;

const intentLabels: Record<LeadIntent, string> = {
  consultation: "Book Free Consultation",
  assessment: "Get Free Cloud Assessment",
  pricing: "Request Pricing",
  contact: "Contact Us",
  newsletter: "Subscribe",
};

export function CRMLeadForm({ intent, compact = false, title, description }: CRMLeadFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const crmLabel = useMemo(() => {
    if (crmProvider.includes("zoho")) return "Zoho CRM";
    if (crmProvider.includes("salesforce")) return "Salesforce";
    return "HubSpot CRM";
  }, []);

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const lead = {
      intent,
      source: "ByteInfomedia Website",
      submittedAt: new Date().toISOString(),
      pageUri: typeof window !== "undefined" ? window.location.href : "",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || intentLabels[intent]),
      message: String(formData.get("message") || ""),
    };

    try {
      if (crmProvider.includes("zoho") && zohoWebformUrl) {
        const payload = new FormData();
        Object.entries(lead).forEach(([key, value]) => payload.append(key, value));
        await fetch(zohoWebformUrl, { method: "POST", mode: "no-cors", body: payload });
      } else if (crmProvider.includes("salesforce") && salesforceWebToLeadUrl && salesforceOrgId) {
        const payload = new FormData();
        payload.append("oid", salesforceOrgId);
        payload.append("retURL", lead.pageUri || "https://www.byteinfomedia.com/");
        payload.append("first_name", lead.name);
        payload.append("email", lead.email);
        payload.append("phone", lead.phone);
        payload.append("company", lead.company || "Website Lead");
        payload.append("description", `${lead.service}\n${lead.message}\nIntent: ${lead.intent}`);
        await fetch(salesforceWebToLeadUrl, { method: "POST", mode: "no-cors", body: payload });
      } else if (hubspotPortalId && hubspotFormId) {
        const response = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              submittedAt: Date.now(),
              fields: [
                { name: "firstname", value: lead.name },
                { name: "email", value: lead.email },
                { name: "phone", value: lead.phone },
                { name: "company", value: lead.company },
                { name: "service_interest", value: lead.service },
                { name: "message", value: lead.message },
                { name: "lead_source", value: lead.source },
              ],
              context: {
                pageUri: lead.pageUri,
                pageName: "ByteInfomedia Cloud & DevOps Website",
              },
            }),
          },
        );

        if (!response.ok) {
          throw new Error("CRM submission failed");
        }
      } else {
        const savedLeads = JSON.parse(window.localStorage.getItem("byteinfomedia_leads") || "[]");
        window.localStorage.setItem("byteinfomedia_leads", JSON.stringify([...savedLeads, lead]));
      }

      setState("success");
      setMessage(
        hubspotPortalId || zohoWebformUrl || salesforceOrgId
          ? `Thanks. Your request is ready in ${crmLabel}.`
          : "Thanks. Your request has been captured locally; connect CRM environment variables to send it directly.",
      );
      form.reset();
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again or contact ByteInfomedia through the official website.");
    }
  }

  return (
    <form
      onSubmit={submitLead}
      className="glass-panel rounded-[2rem] p-5 sm:p-6"
      data-crm-provider={crmLabel}
      data-lead-intent={intent}
    >
      {(title || description) && (
        <div className="mb-5">
          {title && <h3 className="text-2xl font-semibold text-white">{title}</h3>}
          {description && <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>}
        </div>
      )}

      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="sr-only" htmlFor={`${intent}-name`}>
          Full name
        </label>
        <input
          id={`${intent}-name`}
          name="name"
          required
          placeholder="Full name"
          autoComplete="name"
          className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-white/[0.09]"
        />

        <label className="sr-only" htmlFor={`${intent}-email`}>
          Business email
        </label>
        <input
          id={`${intent}-email`}
          name="email"
          type="email"
          required
          placeholder="Business email"
          autoComplete="email"
          className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-white/[0.09]"
        />

        {intent !== "newsletter" && (
          <>
            <label className="sr-only" htmlFor={`${intent}-phone`}>
              Phone
            </label>
            <input
              id={`${intent}-phone`}
              name="phone"
              placeholder="Phone"
              autoComplete="tel"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-white/[0.09]"
            />

            <label className="sr-only" htmlFor={`${intent}-company`}>
              Company
            </label>
            <input
              id={`${intent}-company`}
              name="company"
              placeholder="Company"
              autoComplete="organization"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-white/[0.09]"
            />

            <label className="sr-only" htmlFor={`${intent}-service`}>
              Service interest
            </label>
            <select
              id={`${intent}-service`}
              name="service"
              className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70 sm:col-span-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select service interest
              </option>
              <option>AWS Cloud Consulting</option>
              <option>Cloud Migration</option>
              <option>DevOps / CI/CD</option>
              <option>Kubernetes / Docker</option>
              <option>Cybersecurity / VAPT</option>
              <option>Managed Cloud Services</option>
              <option>Cloud Cost Optimization</option>
            </select>

            <label className="sr-only" htmlFor={`${intent}-message`}>
              Message
            </label>
            <textarea
              id={`${intent}-message`}
              name="message"
              rows={4}
              placeholder="Tell us about your infrastructure goals"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-white/[0.09] sm:col-span-2"
            />
          </>
        )}
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_50px_rgba(53,215,255,0.22)] transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        {intentLabels[intent]}
      </button>

      <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-400">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
        CRM-ready for HubSpot, Zoho, or Salesforce using public frontend integration settings.
      </p>

      {message && (
        <p
          className={`mt-3 rounded-2xl border px-4 py-3 text-sm ${
            state === "success"
              ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
              : "border-rose-300/20 bg-rose-300/10 text-rose-100"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
