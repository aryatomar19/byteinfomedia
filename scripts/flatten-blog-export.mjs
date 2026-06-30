import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const blogSlugs = [
  "digital-marketing-key-to-online-business-growth",
  "move-beyond-limits-unlock-the-power-of-cloud-services",
  "aeo-vs-geo-vs-axo-vs-aio-2026",
  "multi-cloud-vs-hybrid-cloud-2026",
];

for (const blogSlug of blogSlugs) {
  const source = join("out", "blogs", blogSlug, "index.html");
  const destination = join("out", "blogs", `${blogSlug}.html`);

  if (!existsSync(source)) {
    console.error(`Blog export missing: ${source}`);
    process.exit(1);
  }

  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(source, destination);
  console.log(`Created static blog article: ${destination}`);
}
