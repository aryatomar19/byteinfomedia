import { company } from "@/data/site";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for ByteInfomedia cloud, IT, and digital service website inquiries.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="premium-shell min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="glass-panel mx-auto max-w-4xl rounded-[2rem] p-6 sm:p-10">
        <a href="/" className="text-sm font-semibold text-cyan-200">
          ← Back to home
        </a>
        <h1 className="mt-8 text-4xl font-semibold text-white">Terms & Conditions</h1>
        <p className="mt-5 text-slate-300">
          These terms summarize the frontend website experience for ByteInfomedia and align with the company positioning as an IT, cloud, cybersecurity, and digital services provider.
        </p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">Services</h2>
            <p className="mt-2">
              {company.legalName} provides IT solutions including cloud services, website development, software solutions, cybersecurity, managed infrastructure, and digital consulting.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">User responsibilities</h2>
            <p className="mt-2">
              Users should provide accurate inquiry details, avoid unlawful use of the website, and respect all intellectual property and service information shown here.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Governing law</h2>
            <p className="mt-2">
              Terms are governed by the laws of India, with disputes subject to courts in Delhi, consistent with ByteInfomedia's published terms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-2">
              {company.legalName}, {company.address}. Use the official ByteInfomedia website for communication.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
