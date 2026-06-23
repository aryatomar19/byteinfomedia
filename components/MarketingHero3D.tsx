const SPLINE_EMBED_URL = "https://my.spline.design/distortingtypography-F5otuWlkFseIC0lCp2ZbKUfF/";

export function MarketingHero3D() {
  return (
    <div className="marketing-hero-3d" aria-hidden>
      <iframe
        src={SPLINE_EMBED_URL}
        title="Interactive 3D marketing typography"
        loading="lazy"
        frameBorder={0}
        className="marketing-hero-3d__frame"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
