const SPLINE_EMBED_URL = "https://my.spline.design/distortingtypography-F5otuWlkFseIC0lCp2ZbKUfF/";

export function MarketingHero3D() {
  return (
    <div className="marketing-hero-3d h-[400px] w-full overflow-hidden rounded-3xl md:h-[500px] lg:h-[650px]">
      <iframe
        src={SPLINE_EMBED_URL}
        title="Interactive 3D marketing typography"
        loading="lazy"
        frameBorder={0}
        width="100%"
        height="100%"
        className="h-full w-full border-0"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
