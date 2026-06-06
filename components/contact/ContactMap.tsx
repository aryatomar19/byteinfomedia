import { company } from "@/data/site";
import { cn } from "@/lib/utils";

const mapQuery = encodeURIComponent(
  "Byte Infomedia, First Floor, Plot No. 27, Sector 19, Nanda Enclave, Dwarka, Delhi 110075",
);

const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&hl=en&z=15&output=embed`;

export function ContactMap({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-[#0A0F1C]/8 bg-white shadow-[0_20px_56px_rgba(10,15,28,0.08)]",
        className,
      )}
    >
      <iframe
        title={`${company.displayName} office location map`}
        src={mapEmbedSrc}
        className="h-[min(350px,50vw)] min-h-[280px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
