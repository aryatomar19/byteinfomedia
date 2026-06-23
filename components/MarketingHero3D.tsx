const SPLINE_EMBED_URL = "https://my.spline.design/boxeshover-gNs9Fil0MtnLFNiYEdMLQZ8v/";

export function MarketingHero3D() {
  return (
    <div className="dm-hero-spline-bg spline-bg" aria-hidden>
      <iframe
        src={SPLINE_EMBED_URL}
        title="Boxes hover 3D hero background"
        loading="eager"
        frameBorder={0}
        width="100%"
        height="100%"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
