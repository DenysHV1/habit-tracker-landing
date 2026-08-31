(() => {
  const storageKey = "habit-duel-site-language";
  const supportedLanguages = new Set(["en", "uk"]);
  const root = document.documentElement;
  const body = document.body;
  const languageButtons = [...document.querySelectorAll("[data-language-option]")];
  const languageNodes = [...document.querySelectorAll("[data-lang]")];
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const openGraphTitle = document.querySelector('meta[property="og:title"]');
  const openGraphDescription = document.querySelector('meta[property="og:description"]');

  const readSavedLanguage = () => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      return supportedLanguages.has(saved) ? saved : "en";
    } catch {
      return "en";
    }
  };

  const saveLanguage = (language) => {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch {
      // The site still works when storage is blocked.
    }
  };

  const localizedValue = (element, key, language) =>
    element?.dataset?.[`${key}${language === "uk" ? "Uk" : "En"}`] || "";

  const applyLanguage = (language, persist = false) => {
    const nextLanguage = supportedLanguages.has(language) ? language : "en";
    root.lang = nextLanguage;
    body.dataset.language = nextLanguage;

    for (const node of languageNodes) {
      node.hidden = node.dataset.lang !== nextLanguage;
    }

    for (const button of languageButtons) {
      const isCurrent = button.dataset.languageOption === nextLanguage;
      button.setAttribute("aria-pressed", String(isCurrent));
    }

    const pageTitle = localizedValue(body, "title", nextLanguage);
    const pageDescription = localizedValue(body, "description", nextLanguage);

    if (pageTitle) {
      document.title = pageTitle;
      openGraphTitle?.setAttribute("content", pageTitle);
    }

    if (pageDescription) {
      descriptionMeta?.setAttribute("content", pageDescription);
      openGraphDescription?.setAttribute("content", pageDescription);
    }

    for (const element of document.querySelectorAll("[data-label-en]")) {
      const label = localizedValue(element, "label", nextLanguage);
      if (label) element.setAttribute("aria-label", label);
    }

    if (persist) saveLanguage(nextLanguage);
  };

  for (const button of languageButtons) {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.languageOption, true);
    });
  }

  applyLanguage(readSavedLanguage());

  const header = document.querySelector("[data-site-header]");
  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 16);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  const closeMenu = () => {
    menuButton?.setAttribute("aria-expanded", "false");
    mobileMenu?.classList.remove("is-open");
    body.classList.remove("menu-open");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu?.classList.toggle("is-open", !isOpen);
    body.classList.toggle("menu-open", !isOpen);
  });

  mobileMenu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  for (const year of document.querySelectorAll("[data-current-year]")) {
    year.textContent = String(new Date().getFullYear());
  }

  const revealNodes = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.1 },
    );

    revealNodes.forEach((node) => revealObserver.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }

  const tocLinks = [...document.querySelectorAll(".toc-list a[href^='#']")];
  const sections = tocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        for (const link of tocLinks) {
          const active = link.getAttribute("href") === `#${visible.target.id}`;
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        }
      },
      { rootMargin: "-20% 0px -68%", threshold: [0, 0.1, 0.4] },
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
