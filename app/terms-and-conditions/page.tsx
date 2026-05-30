import { company } from "@/data/site";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for BYTEINFOMEDIA cloud and IT services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-[#0A0F1C]/8 bg-white p-6 shadow-lg sm:p-10">
        <a href="/" className="text-sm font-semibold text-[#FF6B2C]">
          ← Back to home
        </a>
        <h1 className="mt-8 text-4xl font-extrabold text-[#0A0F1C]">Terms & Conditions</h1>
        <p className="mt-5 text-[#52647a]">
          These terms summarize the website experience for BYTEINFOMEDIA as an IT, cloud, cybersecurity, and digital
          services provider.
        </p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-[#52647a]">
          <section>
            <h2 className="text-xl font-bold text-[#0A0F1C]">Services</h2>
            <p className="mt-2">
              {company.legalName} provides cloud services, cybersecurity, managed infrastructure, DevOps, and AI
              consulting.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#0A0F1C]">Governing law</h2>
            <p className="mt-2">Terms are governed by the laws of India.</p>
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
