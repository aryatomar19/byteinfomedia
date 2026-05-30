import { company } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for BYTEINFOMEDIA website inquiries and lead forms.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-[#0A0F1C]/8 bg-white p-6 shadow-lg sm:p-10">
        <a href="/" className="text-sm font-semibold text-[#FF6B2C]">
          ← Back to home
        </a>
        <h1 className="mt-8 text-4xl font-extrabold text-[#0A0F1C]">Privacy Policy</h1>
        <p className="mt-5 text-[#52647a]">
          BYTEINFOMEDIA collects information submitted through website forms to respond to inquiries, schedule
          consultations, assess cloud requirements, and improve service communication.
        </p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-[#52647a]">
          <section>
            <h2 className="text-xl font-bold text-[#0A0F1C]">Information collected</h2>
            <p className="mt-2">
              Forms may collect name, business email, phone number, company, service interest, and project details.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#0A0F1C]">How information is used</h2>
            <p className="mt-2">
              Information is used for consultation follow-up, assessments, and delivery of relevant IT services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#0A0F1C]">Contact</h2>
            <p className="mt-2">
              {company.legalName}, {company.address}.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
