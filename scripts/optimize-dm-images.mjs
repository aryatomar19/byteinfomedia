import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.join(process.cwd(), "public/images/dm-landing");

const targets = [
  { input: "why-byte-growth.jpg", width: 1200, quality: 82 },
  { input: "services/seo.png", width: 600, quality: 85 },
  { input: "services/google-ads.png", width: 600, quality: 85 },
  { input: "services/social-media.png", width: 600, quality: 85 },
  { input: "services/content-marketing.png", width: 600, quality: 85 },
  { input: "services/website-development.png", width: 600, quality: 85 },
  { input: "services/analytics.png", width: 600, quality: 85 },
];

async function optimize({ input, width, quality }) {
  const source = path.join(root, input);
  const output = source.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  await mkdir(path.dirname(output), { recursive: true });

  const before = (await stat(source)).size;

  await sharp(source)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(output);

  const after = (await stat(output)).size;
  console.log(`${input} -> ${path.basename(output)} (${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB)`);
}

for (const target of targets) {
  await optimize(target);
}
