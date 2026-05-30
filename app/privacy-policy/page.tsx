import { company } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for BYTEINFOMEDIA website inquiries and lead forms.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mesh-section px-4 py-16 sm:px-6 lg:px-8">
      <section className="glass-card mx-auto max-w-4xl rounded-[2rem] p-6 sm:p-10">
        <a href="/" className="text-sm font-semibold text-[#FF6B2C]">
          ← Back to home
        </a>
        <h1 className="mt-8 text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="mt-5 text-white/65">
          BYTEINFOMEDIA collects information submitted through website forms to respond to inquiries and improve
          service communication.
        </p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-white/60">
          <section>
            <h2 className="text-xl font-bold text-white">Information collected</h2>
            <p className="mt-2">Forms may collect name, email, phone, company, service interest, and project details.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">Contact</h2>
            <p className="mt-2">
              {company.legalName}, {company.address}.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
