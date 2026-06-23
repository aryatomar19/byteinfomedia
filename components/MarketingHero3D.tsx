const SPLINE_EMBED_URL = "https://my.spline.design/web3agencysaasherosection-sQb88mFs59KUzxn476QixZBQ/";

export function MarketingHero3D() {
  return (
    <div className="dm-hero-spline-bg spline-bg">
      <iframe
        src={SPLINE_EMBED_URL}
        title="Web3 agency SaaS hero 3D scene"
        loading="lazy"
        frameBorder={0}
        width="100%"
        height="100%"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
