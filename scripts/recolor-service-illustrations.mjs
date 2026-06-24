import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const tmpDir = "/tmp/svc-svg";
const outDir = join(root, "public/images/dm-landing/services");

const GREEN = /#92E3A9/gi;
const LIGHT_ORANGE = "#FFF4E8";
const ACCENT_ORANGE = "#FF9500";

const files = [
  "seo",
  "google-ads",
  "social-media",
  "content-marketing",
  "website-development",
  "analytics",
];

function recolorSvg(svg) {
  let result = svg.replace(
    /<g id="background-simple">([\s\S]*?)<\/g>/gi,
    (_match, inner) =>
      `<g id="background-simple">${inner.replace(GREEN, LIGHT_ORANGE)}</g>`,
  );

  result = result.replace(GREEN, ACCENT_ORANGE);
  return result;
}

mkdirSync(outDir, { recursive: true });

for (const name of files) {
  const svgPath = join(tmpDir, `${name}.svg`);
  const svg = readFileSync(svgPath, "utf8");
  const recolored = recolorSvg(svg);

  writeFileSync(join(outDir, `${name}.svg`), recolored);

  const pngBuffer = await sharp(Buffer.from(recolored), { density: 200 })
    .resize(600, 600, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  writeFileSync(join(outDir, `${name}.png`), pngBuffer);
  console.log(`Recolored ${name}: ${pngBuffer.length} bytes PNG`);
}
