import { execFileSync } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages, site } from "../src/content.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

execFileSync(process.execPath, [path.join(root, "scripts", "build.mjs")], {
  cwd: root,
  stdio: "inherit",
});

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const resolveLocalTarget = (htmlFile, rawTarget) => {
  const target = rawTarget.split("#")[0].split("?")[0];
  if (!target) return null;
  const decoded = decodeURIComponent(target);
  const absolute = path.resolve(path.dirname(htmlFile), decoded);
  if (path.extname(absolute)) return absolute;
  return path.join(absolute, "index.html");
};

for (const page of pages) {
  const htmlFile = path.join(dist, page.output);
  let html = "";
  try {
    html = await readFile(htmlFile, "utf8");
  } catch {
    failures.push(`Missing output: ${page.output}`);
    continue;
  }

  assert(html.startsWith("<!doctype html>"), `${page.output}: missing doctype`);
  assert(html.includes("<html lang=\"en\">"), `${page.output}: English must be the default`);
  assert(html.includes('data-lang="uk"'), `${page.output}: Ukrainian content is missing`);
  assert(html.includes("<title>"), `${page.output}: title is missing`);
  assert(html.includes('meta name="description"'), `${page.output}: description is missing`);
  assert(html.includes('property="og:image"'), `${page.output}: Open Graph image is missing`);
  assert(html.includes(`href="${site.url}${page.route}"`), `${page.output}: canonical URL is wrong`);
  assert(!html.includes('lang="ru"'), `${page.output}: Russian language marker found`);
  assert(!html.includes("Lorem ipsum"), `${page.output}: placeholder copy found`);

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(target)) continue;
    const fileTarget = resolveLocalTarget(htmlFile, target);
    if (!fileTarget) continue;
    try {
      await access(fileTarget);
    } catch {
      failures.push(`${page.output}: broken local target ${target}`);
    }
  }
}

for (const asset of [
  "assets/site.css",
  "assets/site.js",
  "assets/rubik-variable.ttf",
  "assets/app-icon.png",
  "assets/brand-mark.png",
  "assets/hero-android.png",
  "assets/hero-mobile.png",
  "assets/og.png",
  "assets/character-01.webp",
  "assets/character-08.webp",
  "assets/character-20.webp",
  "site.webmanifest",
  "robots.txt",
  "sitemap.xml",
  ".nojekyll",
]) {
  try {
    await access(path.join(dist, asset));
  } catch {
    failures.push(`Missing required asset: ${asset}`);
  }
}

const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8").catch(() => "");
for (const page of pages.filter((entry) => !entry.excludeFromSitemap)) {
  assert(sitemap.includes(`${site.url}${page.route}`), `sitemap.xml: missing ${page.route}`);
}

if (failures.length) {
  console.error(`Validation failed (${failures.length}):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Validated ${pages.length} pages, local links and publication assets.`);
