import { company } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ByteInfomedia website inquiries and CRM-ready lead forms.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="premium-shell min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="glass-panel mx-auto max-w-4xl rounded-[2rem] p-6 sm:p-10">
        <a href="/" className="text-sm font-semibold text-cyan-200">
          ← Back to home
        </a>
        <h1 className="mt-8 text-4xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-5 text-slate-300">
          ByteInfomedia collects information submitted through website forms to respond to inquiries, schedule consultations, assess cloud requirements, and improve service communication.
        </p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">Information collected</h2>
            <p className="mt-2">
              Forms may collect name, business email, phone number, company, service interest, and project details. Submissions may be routed to HubSpot, Zoho, or Salesforce when CRM integration variables are configured.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">How information is used</h2>
            <p className="mt-2">
              Information is used for consultation follow-up, quote requests, free cloud/security/cost assessments, newsletter communication, and delivery of relevant IT services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-2">
              {company.legalName}, {company.address}. For official communication, use the contact channel on {company.website}.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
