import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages, site, ui } from "../src/content.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const escapeAttribute = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const languagePair = (english, ukrainian) =>
  `<span data-lang="en">${english}</span><span data-lang="uk" hidden>${ukrainian}</span>`;

const navLink = ({ href, label, active = false }) =>
  `<a class="nav-link" href="${href}"${active ? ' aria-current="page"' : ""}>${languagePair(
    label.en,
    label.uk,
  )}</a>`;

const renderHeader = (page, prefix) => {
  const homeHref = prefix || "./";
  const featuresHref = `${prefix || "./"}#features`;
  const links = [
    { href: homeHref, label: ui.navigation.home, active: page.id === "home" },
    { href: featuresHref, label: ui.navigation.features },
    {
      href: `${prefix}privacy-policy/`,
      label: ui.navigation.privacy,
      active: page.id === "privacy-policy",
    },
    {
      href: `${prefix}support/`,
      label: ui.navigation.support,
      active: page.id === "support",
    },
  ];
  const renderedLinks = links.map(navLink).join("");

  return `<header class="site-header" data-site-header>
    <div class="header-inner">
      <a class="brand" href="${homeHref}" aria-label="Habit Duel home">
        <img src="${prefix}assets/brand-mark.png" width="42" height="42" alt="" />
        <span>Habit Duel</span>
      </a>
      <nav class="nav" aria-label="Primary navigation">${renderedLinks}</nav>
      <div class="header-actions">
        <div class="language-switcher" aria-label="Language">
          <button class="language-button" type="button" data-language-option="en" aria-pressed="true">EN</button>
          <button class="language-button" type="button" data-language-option="uk" aria-pressed="false">UA</button>
        </div>
        <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-navigation" data-menu-button data-label-en="Open menu" data-label-uk="Відкрити меню">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <nav class="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation" data-mobile-menu>${renderedLinks}</nav>
    </div>
  </header>`;
};

const renderFooter = (prefix) => `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="${prefix || "./"}">
          <img src="${prefix}assets/brand-mark.png" width="42" height="42" alt="" />
          <span>Habit Duel</span>
        </a>
        <p>${languagePair(ui.footer.summary.en, ui.footer.summary.uk)}</p>
      </div>
      <div class="footer-column">
        <strong>${languagePair(ui.footer.product.en, ui.footer.product.uk)}</strong>
        <ul class="footer-links">
          <li><a href="${prefix || "./"}">${languagePair(ui.navigation.home.en, ui.navigation.home.uk)}</a></li>
          <li><a href="${prefix || "./"}#features">${languagePair(ui.navigation.features.en, ui.navigation.features.uk)}</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <strong>${languagePair(ui.footer.legal.en, ui.footer.legal.uk)}</strong>
        <ul class="footer-links">
          <li><a href="${prefix}privacy-policy/">${languagePair(ui.navigation.privacy.en, ui.navigation.privacy.uk)}</a></li>
          <li><a href="${prefix}terms/">${languagePair(ui.navigation.terms.en, ui.navigation.terms.uk)}</a></li>
          <li><a href="${prefix}account-deletion/">${languagePair(ui.navigation.deletion.en, ui.navigation.deletion.uk)}</a></li>
          <li><a href="${prefix}community-guidelines/">${languagePair(ui.navigation.community.en, ui.navigation.community.uk)}</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <strong>${languagePair(ui.footer.help.en, ui.footer.help.uk)}</strong>
        <ul class="footer-links">
          <li><a href="${prefix}support/">${languagePair(ui.navigation.support.en, ui.navigation.support.uk)}</a></li>
          <li><a href="${prefix}account-deletion/">${languagePair(ui.navigation.deletion.en, ui.navigation.deletion.uk)}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span data-current-year></span> Habit Duel. ${languagePair("All rights reserved.", "Усі права захищено.")}</span>
      <span>${languagePair("English is the default language. Ukrainian is available above.", "Мова за замовчуванням — англійська. Українську можна вибрати вище.")}</span>
    </div>
  </div>
</footer>`;

const renderDocument = (page) => {
  const isRoot = page.output === "index.html";
  const isNotFound = page.output === "404.html";
  const prefix = isNotFound ? `${site.url}/` : isRoot ? "" : "../";
  const canonical = `${site.url}${page.route}`;
  const body = page.render({ prefix, languagePair });
  const header = page.standalone ? "" : renderHeader(page, prefix);
  const footer = page.standalone ? "" : renderFooter(prefix);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#10152e" />
  <meta name="description" content="${escapeAttribute(page.description.en)}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Habit Duel" />
  <meta property="og:title" content="${escapeAttribute(page.title.en)}" />
  <meta property="og:description" content="${escapeAttribute(page.description.en)}" />
  <meta property="og:url" content="${escapeAttribute(canonical)}" />
  <meta property="og:image" content="${site.url}/assets/og.png" />
  <meta property="og:image:width" content="1730" />
  <meta property="og:image:height" content="909" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttribute(page.title.en)}" />
  <meta name="twitter:description" content="${escapeAttribute(page.description.en)}" />
  <meta name="twitter:image" content="${site.url}/assets/og.png" />
  <link rel="canonical" href="${escapeAttribute(canonical)}" />
  <link rel="icon" type="image/png" href="${prefix}assets/app-icon.png" />
  <link rel="manifest" href="${prefix}site.webmanifest" />
  <link rel="stylesheet" href="${prefix}assets/site.css" />
  <title>${escapeAttribute(page.title.en)}</title>
</head>
<body data-page="${page.id}" data-title-en="${escapeAttribute(page.title.en)}" data-title-uk="${escapeAttribute(page.title.uk)}" data-description-en="${escapeAttribute(page.description.en)}" data-description-uk="${escapeAttribute(page.description.uk)}">
  <a class="skip-link" href="#main-content">${languagePair("Skip to content", "Перейти до вмісту")}</a>
  ${header}
  <main id="main-content">${body}</main>
  ${footer}
  <script src="${prefix}assets/site.js" defer></script>
</body>
</html>`;
};

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, "src", "assets"), path.join(dist, "assets"), { recursive: true });
await cp(path.join(root, "src", "static"), dist, { recursive: true });
await writeFile(path.join(dist, ".nojekyll"), "", "utf8");

for (const page of pages) {
  const destination = path.join(dist, page.output);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, renderDocument(page), "utf8");
}

const sitemapPages = pages.filter((page) => !page.excludeFromSitemap);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages.map((page) => `  <url><loc>${site.url}${page.route}</loc></url>`).join("\n")}
</urlset>\n`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");

const manifestPath = path.join(dist, "site.webmanifest");
const manifest = await readFile(manifestPath, "utf8");
JSON.parse(manifest);

console.log(`Built ${pages.length} pages in ${dist}`);
