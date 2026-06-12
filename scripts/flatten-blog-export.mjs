import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const blogSlug = "digital-marketing-key-to-online-business-growth";
const source = join("out", "blogs", blogSlug, "index.html");
const destination = join("out", "blogs", `${blogSlug}.html`);

if (!existsSync(source)) {
  console.error(`Blog export missing: ${source}`);
  process.exit(1);
}

mkdirSync(dirname(destination), { recursive: true });
copyFileSync(source, destination);
console.log(`Created static blog article: ${destination}`);
