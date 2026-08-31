# Habit Duel website

Official landing page, support center and legal documents for Habit Duel. The
site is static, has no runtime dependencies and is built for GitHub Pages.

## Pages

- `/` — product landing page;
- `/privacy-policy/` — Privacy Policy;
- `/account-deletion/` — in-app and external account-deletion instructions;
- `/support/` — support contacts and FAQ;
- `/terms/` — Terms of Service;
- `/community-guidelines/` — user-generated content and community standards;
- `/404.html` — branded error page;

Every page contains English and Ukrainian. English is used on the first visit;
the language changes only after the visitor chooses it manually.

## Run locally

Node.js 20 or newer is required.

```text
npm install
npm run check
npm run serve
```

Open `http://127.0.0.1:4173`. `npm run check` rebuilds the site and validates
all generated pages, local links, metadata and required publication files.

## Publish with GitHub Pages

1. Commit and push the files to the `main` branch.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for **Deploy website to GitHub Pages** to
   finish.

The expected project URL is:

```text
https://denyshv1.github.io/habit-tracker-landing/
```

The workflow builds and validates the site before every deployment. A custom
domain can be connected later in **Settings → Pages**.

## Required placeholders

`{***}` means that the information is not confirmed in the application
repositories. Find all placeholders with:

```text
rg -n "ph\(\)|\{\*\*\*\}" src scripts README.md
```

The `publication` object near the top of `src/content.mjs` holds the shared
operator, contact and minimum-age values. Every legal page uses those same
values. The operator and monitored contact are confirmed; the generated `dist`
pages retain `{***}` only for the pending minimum-age decision.

Before giving these URLs to Google Play, replace the remaining minimum-age
placeholder and keep it consistent with the Google Play target-audience
declaration.

The site intentionally does not advertise Premium or in-app purchases because
the current production application does not yet contain a complete Google Play
Billing flow.

## Connect the website to the app

After the site is published, configure the production application with URLs for:

```text
EXPO_PUBLIC_PRIVACY_POLICY_URL
EXPO_PUBLIC_TERMS_OF_SERVICE_URL
EXPO_PUBLIC_ACCOUNT_DELETION_URL
EXPO_PUBLIC_COMMUNITY_GUIDELINES_URL
EXPO_PUBLIC_SUPPORT_URL
EXPO_PUBLIC_SUPPORT_EMAIL
```

Use the final HTTPS addresses and a monitored email. The account-deletion page
must offer a working request method outside the installed application.

`app-ads.txt` is intentionally not published from this project path. AdMob
checks the root hostname, while a GitHub project site would expose the file only
under `/habit-tracker-landing/`. Add a real publisher declaration only after an
AdMob account exists and the file can be served from a custom domain or GitHub
user site root.

## Project structure

- `src/content.mjs` — bilingual page content and page list;
- `src/assets/site.css` — responsive visual system;
- `src/assets/site.js` — language, navigation and motion behavior;
- `src/static` — files copied to the publication root;
- `scripts/build.mjs` — static page generator;
- `scripts/check.mjs` — publication validation;
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment.

The generated `dist` directory is not committed; GitHub Actions creates it for
each deployment.
