const SPLINE_EMBED_URL = "https://my.spline.design/particleshand-TVkSIKqjRm6Z6yqdtCra7fEk/";

export function MarketingHero3D() {
  return (
    <div className="dm-hero-spline-bg spline-bg" aria-hidden>
      <iframe
        src={SPLINE_EMBED_URL}
        title="Interactive particle hand hero background"
        loading="eager"
        frameBorder={0}
        width="100%"
        height="100%"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
