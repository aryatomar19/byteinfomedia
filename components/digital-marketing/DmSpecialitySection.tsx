"use client";

type SpecialityVariant = "orange" | "white";

type SpecialityItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  variant: SpecialityVariant;
};

function SpecialityCard({ item }: { item: SpecialityItem }) {
  return (
    <article className={`dm-speciality-card dm-speciality-card--${item.variant}`}>
      <div className="dm-speciality-card__art">
        <div className={`dm-speciality-card__art-frame dm-speciality-card__art-frame--${item.variant}`}>
          <img
            src={item.image}
            alt={item.imageAlt}
            className="dm-speciality-card__illustration"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="dm-speciality-card__body">
        <h3 className="dm-speciality-card__title">{item.title}</h3>
        <p className="dm-speciality-card__desc">{item.description}</p>
      </div>
    </article>
  );
}

export function DmSpecialitySection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly SpecialityItem[];
}) {
  return (
    <section
      id="dm-speciality"
      className="dm-section dm-speciality-section relative bg-white"
      aria-labelledby="dm-speciality-heading"
    >
      <div className="dm-container relative">
        <header className="dm-speciality-header mx-auto mb-4 max-w-3xl text-center lg:mb-5">
          <span className="dm-speciality-eyebrow">{eyebrow}</span>
          <h2 id="dm-speciality-heading" className="dm-speciality-heading">
            {title}
            <span className="dm-speciality-heading__underline" aria-hidden />
          </h2>
        </header>

        <div className="dm-speciality-grid">
          {items.map((item) => (
            <SpecialityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
