export const site = {
  name: "Habit Duel",
  url: "https://denyshv1.github.io/habit-tracker-landing",
};

const tx = (en, uk) =>
  `<span data-lang="en">${en}</span><span data-lang="uk" hidden>${uk}</span>`;

const publication = {
  operator: tx("Denys Harkusha", "Денис Гаркуша"),
  contact: '<a href="mailto:gardenix@ukr.net">gardenix@ukr.net</a>',
  minimumAge: "18",
};

const icon = (name) => {
  const icons = {
    timer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M9 2h6M12 2v3"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5.5v13l10-6.5-10-6.5Z"/></svg>',
  };
  return icons[name] || "";
};

export const ui = {
  navigation: {
    home: { en: "Home", uk: "Головна" },
    features: { en: "Features", uk: "Можливості" },
    privacy: { en: "Privacy", uk: "Конфіденційність" },
    support: { en: "Support", uk: "Підтримка" },
    terms: { en: "Terms", uk: "Умови" },
    deletion: { en: "Delete account", uk: "Видалення акаунта" },
    community: { en: "Community", uk: "Спільнота" },
  },
  footer: {
    summary: {
      en: "A flexible habit tracker for time, counts, steady progress and shared rooms.",
      uk: "Гнучкий трекер звичок для часу, кількості, стабільного прогресу та спільних кімнат.",
    },
    product: { en: "Product", uk: "Продукт" },
    legal: { en: "Legal", uk: "Правові документи" },
    help: { en: "Help", uk: "Допомога" },
  },
};

const renderHome = ({ prefix }) => `<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">${tx("A clearer way to stay consistent", "Зрозумілий спосіб зберігати сталість")}</p>
      <h1>${tx('Build the habit.<br><span class="gradient-text">Keep the momentum.</span>', 'Створи звичку.<br><span class="gradient-text">Збережи ритм.</span>')}</h1>
      <p class="hero-lead">${tx(
        "Track routines by time or simple counts, see each day in context, and keep moving without turning progress into pressure.",
        "Відстежуй звички за часом або кількістю, бач кожен день у контексті й рухайся далі без зайвого тиску.",
      )}</p>
      <div class="hero-actions">
        <span class="button button-primary" aria-disabled="true">${icon("play")}${tx("Google Play · Coming soon", "Google Play · Незабаром")}</span>
        <a class="button button-secondary" href="#features">${tx("Explore features", "Переглянути можливості")}${icon("arrow")}</a>
      </div>
      <p class="hero-note">${tx("Adults 18+ · Available in English and Ukrainian · Android release is being prepared", "Лише для повнолітніх 18+ · Доступно англійською та українською · Android-версія готується до випуску")}</p>
    </div>
    <div class="hero-art" aria-hidden="true">
      <picture>
        <source media="(max-width: 820px)" srcset="${prefix}assets/hero-mobile.png" width="1448" height="1086" />
        <img src="${prefix}assets/hero-android.png" width="1717" height="916" alt="" fetchpriority="high" />
      </picture>
    </div>
  </div>
</section>

<section class="section section-white" id="features">
  <div class="container">
    <div class="section-header reveal">
      <div>
        <p class="section-kicker">${tx("Made for everyday progress", "Створено для щоденного прогресу")}</p>
        <h2 class="section-title">${tx("Everything you need to turn an intention into a rhythm.", "Усе необхідне, щоб перетворити намір на звичний ритм.")}</h2>
      </div>
      <p class="section-copy">${tx(
        "Habit Duel keeps the important parts close: a clear goal, a calm timer, a useful history and just enough motivation to return tomorrow.",
        "Habit Duel тримає головне поруч: зрозумілу ціль, спокійний таймер, корисну історію та достатньо мотивації, щоб повернутися завтра.",
      )}</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card reveal">
        <span class="feature-index">01</span><span class="feature-icon">${icon("timer")}</span>
        <h3>${tx("Time or count", "Час або кількість")}</h3>
        <p>${tx("Choose the format that fits the routine. Use the built-in timer or add a simple numeric result.", "Обирай формат під свою звичку: користуйся вбудованим таймером або додавай числовий результат.")}</p>
      </article>
      <article class="feature-card reveal">
        <span class="feature-index">02</span><span class="feature-icon">${icon("chart")}</span>
        <h3>${tx("Progress at a glance", "Прогрес з першого погляду")}</h3>
        <p>${tx("See daily activity, history, streaks and summaries without digging through complicated reports.", "Переглядай активність за день, історію, серії та підсумки без складних звітів.")}</p>
      </article>
      <article class="feature-card reveal">
        <span class="feature-index">03</span><span class="feature-icon">${icon("people")}</span>
        <h3>${tx("Friends and rooms", "Друзі та кімнати")}</h3>
        <p>${tx("Connect with people you know, join a room and follow shared progress when a little company helps.", "Додавай знайомих, приєднуйся до кімнат і стеж за спільним прогресом, коли разом легше.")}</p>
      </article>
      <article class="feature-card reveal">
        <span class="feature-index">04</span><span class="feature-icon">${icon("bell")}</span>
        <h3>${tx("Helpful reminders", "Корисні нагадування")}</h3>
        <p>${tx("Set a local reminder and choose sound or vibration. You stay in control of when the app gets your attention.", "Налаштовуй локальні нагадування, звук і вібрацію. Ти сам вирішуєш, коли застосунок привертає увагу.")}</p>
      </article>
    </div>
  </div>
</section>

<section class="section showcase">
  <div class="container showcase-grid">
    <div class="showcase-copy reveal">
      <p class="section-kicker">${tx("Your week, made visible", "Твій тиждень — наочно")}</p>
      <h2 class="section-title">${tx("Understand the pattern, not just today’s number.", "Помічай закономірність, а не лише число за сьогодні.")}</h2>
      <p class="section-copy">${tx("A compact chart shows active days, completed results and the current goal together, so the next action stays obvious.", "Компактний графік поєднує активні дні, виконані результати та поточну ціль — наступний крок завжди зрозумілий.")}</p>
      <ul class="product-points">
        <li>${tx("Daily and historical progress", "Щоденний прогрес та історія")}</li>
        <li>${tx("Clear required and optional days", "Зрозумілі обов’язкові та необов’язкові дні")}</li>
        <li>${tx("Flexible goals for everyday routines", "Гнучкі цілі для щоденних справ")}</li>
      </ul>
    </div>
    <div class="app-panel reveal" aria-label="Habit progress preview">
      <div class="app-panel-header">
        <div><span class="app-panel-label">${tx("This week", "Цього тижня")}</span><div class="app-panel-total">42 ${tx("min.", "хв.")}</div></div>
        <span class="date-pill">25.08–31.08</span>
      </div>
      <div class="week-row" aria-hidden="true">
        ${[
          ["8", "Mon", "Пн", 42],
          ["12", "Tue", "Вт", 64],
          ["5", "Wed", "Ср", 30],
          ["0", "Thu", "Чт", 8],
          ["7", "Fri", "Пт", 38],
          ["10", "Sat", "Сб", 55],
          ["0", "Sun", "Нд", 8],
        ]
          .map(
            ([value, en, uk, height], index) => `<div class="day${index === 5 ? " is-today" : ""}"><span class="day-value">${value}</span><span class="bar-track"><span class="bar-fill" style="height:${height}%"></span></span><span class="day-name">${tx(en, uk)}</span></div>`,
          )
          .join("")}
      </div>
      <div class="today-row">
        <div class="today-copy"><strong>${tx("Today", "Сьогодні")}</strong><span>${tx("10 of 14 minutes", "10 із 14 хвилин")}</span></div>
        <div class="today-progress"><span class="mini-track"><span></span></span><strong>72%</strong></div>
      </div>
    </div>
  </div>
</section>

<section class="section character-section">
  <div class="container">
    <div class="section-header reveal">
      <div>
        <p class="section-kicker">${tx("A companion that grows", "Персонаж, який росте")}</p>
        <h2 class="section-title">${tx("Let consistency change what you see.", "Нехай сталість змінює те, що ти бачиш.")}</h2>
      </div>
      <p class="section-copy">${tx("Your habit character develops as the habit advances — a visual reminder of the work already done.", "Персонаж звички розвивається разом із нею — наочне нагадування про вже виконану роботу.")}</p>
    </div>
    <div class="character-grid">
      <article class="character-stage reveal"><img src="${prefix}assets/character-01.webp" width="768" height="768" loading="lazy" alt="Early-stage Habit Duel character" /><div class="stage-copy"><small>${tx("Stage 01", "Етап 01")}</small><strong>${tx("Start with one day", "Почни з одного дня")}</strong></div></article>
      <article class="character-stage reveal"><img src="${prefix}assets/character-08.webp" width="768" height="768" loading="lazy" alt="Developing Habit Duel character" /><div class="stage-copy"><small>${tx("Stage 08", "Етап 08")}</small><strong>${tx("See the momentum", "Відчуй набраний ритм")}</strong></div></article>
      <article class="character-stage reveal"><img src="${prefix}assets/character-20.webp" width="768" height="768" loading="lazy" alt="Advanced Habit Duel character" /><div class="stage-copy"><small>${tx("Stage 20", "Етап 20")}</small><strong>${tx("Make it unmistakably yours", "Зроби звичку по-справжньому своєю")}</strong></div></article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="rooms-panel reveal">
      <div class="rooms-copy">
        <p class="section-kicker">${tx("Social only when it helps", "Спілкування лише тоді, коли воно допомагає")}</p>
        <h2 class="section-title">${tx("Bring the right people into the room.", "Збери потрібних людей в одній кімнаті.")}</h2>
        <p class="section-copy">${tx("Create or join rooms, follow progress inside the room, and choose who can see your profile and habits. Public, friends-only and private visibility controls stay close.", "Створюй кімнати або приєднуйся до них, стеж за прогресом усередині та обирай, хто бачить твій профіль і звички. Налаштування публічної, доступної лише друзям і приватної видимості завжди поруч.")}</p>
        <div class="trust-strip">
          <div class="trust-item"><strong>${tx("Visibility controls", "Налаштування видимості")}</strong><span>${tx("Profile, contacts and habits", "Профіль, контакти та звички")}</span></div>
          <div class="trust-item"><strong>${tx("Report and block", "Скарги й блокування")}</strong><span>${tx("Available on social surfaces", "Доступні в соціальних розділах")}</span></div>
          <div class="trust-item"><strong>${tx("Room access", "Доступ до кімнат")}</strong><span>${tx("Open or PIN-protected", "Відкритий або захищений PIN-кодом")}</span></div>
        </div>
      </div>
      <div class="room-stack" aria-hidden="true">
        <div class="room-card"><div class="room-head"><span class="room-avatar">✦</span><div><strong>${tx("Morning focus", "Ранковий фокус")}</strong><span>${tx("Friends-only room", "Кімната лише для друзів")}</span></div></div><div class="room-members"><span class="member-dot">AK</span><span class="member-dot">LM</span><span class="member-dot">+3</span></div></div>
        <div class="room-card"><div class="room-head"><span class="room-avatar">◈</span><div><strong>${tx("Creative hour", "Творча година")}</strong><span>${tx("Friends", "Друзі")}</span></div></div><div class="room-members"><span class="member-dot">ND</span><span class="member-dot">OS</span><span class="member-dot">+5</span></div></div>
        <div class="room-card"><div class="room-head"><span class="room-avatar">✓</span><div><strong>${tx("Daily reading", "Щоденне читання")}</strong><span>${tx("PIN protected", "Захищено PIN-кодом")}</span></div></div><div class="room-members"><span class="member-dot">IV</span><span class="member-dot">DK</span><span class="member-dot">+2</span></div></div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <div class="cta-panel reveal">
      <div><h2>${tx("A better routine can begin with one clear action.", "Кращий ритм може початися з однієї зрозумілої дії.")}</h2><p>${tx("Habit Duel is being prepared for Google Play. The final store link will appear here before release.", "Habit Duel готується до виходу в Google Play. Остаточне посилання з’явиться тут перед релізом.")}</p></div>
      <span class="button button-primary" aria-disabled="true">${tx("Google Play · Coming soon", "Google Play · Незабаром")}</span>
    </div>
  </div>
</section>`;

const homePage = {
  id: "home",
  route: "/",
  output: "index.html",
  title: {
    en: "Habit Duel — Build habits. Keep your momentum.",
    uk: "Habit Duel — Створюй звички. Зберігай ритм.",
  },
  description: {
    en: "Track habits by time or count, follow your progress, use reminders and grow together in rooms with Habit Duel.",
    uk: "Відстежуй звички за часом або кількістю, стеж за прогресом, користуйся нагадуваннями та розвивайся разом у кімнатах Habit Duel.",
  },
  render: renderHome,
};

const renderLegalPage = (page) => ({ prefix }) => `<section class="legal-hero">
  <div class="container legal-hero-inner">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="${prefix}">${tx("Home", "Головна")}</a><span aria-hidden="true">/</span><span>${tx(page.label.en, page.label.uk)}</span>
    </nav>
    <h1>${tx(page.heading.en, page.heading.uk)}</h1>
    <p class="legal-hero-lead">${tx(page.lead.en, page.lead.uk)}</p>
    <div class="legal-meta-grid">
      ${page.meta
        .map(
          (item) => `<div class="meta-item"><small>${tx(item.label.en, item.label.uk)}</small><strong>${item.value}</strong></div>`,
        )
        .join("")}
    </div>
  </div>
</section>
<div class="container legal-shell">
  <aside class="legal-toc">
    <strong>${tx("On this page", "На цій сторінці")}</strong>
    <ol class="toc-list">
      ${page.sections.map((section) => `<li><a href="#${section.id}">${tx(section.title.en, section.title.uk)}</a></li>`).join("")}
    </ol>
  </aside>
  <article class="legal-content">
    <p class="legal-intro">${tx(page.intro.en, page.intro.uk)}</p>
    ${page.sections
      .map(
        (section) => `<section class="legal-section" id="${section.id}"><h2>${tx(section.title.en, section.title.uk)}</h2>${section.body}</section>`,
      )
      .join("")}
  </article>
</div>`;

const privacyPage = {
  id: "privacy-policy",
  route: "/privacy-policy/",
  output: "privacy-policy/index.html",
  label: { en: "Privacy Policy", uk: "Політика конфіденційності" },
  heading: { en: "Privacy Policy", uk: "Політика конфіденційності" },
  lead: {
    en: "What Habit Duel processes, why it is needed, who may receive it and what choices remain yours.",
    uk: "Які дані обробляє Habit Duel, навіщо вони потрібні, хто може їх отримувати та які права залишаються за тобою.",
  },
  title: {
    en: "Privacy Policy — Habit Duel",
    uk: "Політика конфіденційності — Habit Duel",
  },
  description: {
    en: "Habit Duel Privacy Policy covering account, habit, room, advertising and diagnostic data, retention and account deletion.",
    uk: "Політика конфіденційності Habit Duel щодо даних акаунта, звичок, кімнат, реклами, діагностики, зберігання та видалення.",
  },
  meta: [
    { label: { en: "Effective date", uk: "Дата набрання чинності" }, value: tx("August 31, 2026", "31 серпня 2026") },
    { label: { en: "Controller", uk: "Контролер" }, value: publication.operator },
    { label: { en: "Privacy contact", uk: "Контакт із питань конфіденційності" }, value: publication.contact },
  ],
  intro: {
    en: "This Privacy Policy explains how the operator of Habit Duel processes personal data when you use the mobile application, this website and related support channels. It must be read together with the Terms of Service and Community Guidelines.",
    uk: "Ця Політика конфіденційності пояснює, як оператор Habit Duel обробляє персональні дані під час використання мобільного застосунку, цього сайту та пов’язаних каналів підтримки. Її слід читати разом з Умовами користування та Правилами спільноти.",
  },
  sections: [
    {
      id: "who-we-are",
      title: { en: "1. Who we are", uk: "1. Хто ми" },
      body: `<p>${tx("The operator and privacy contact are shown above. Privacy requests can also be started through the Support page.", "Дані оператора та контакт із питань конфіденційності наведені вище. Запит щодо конфіденційності також можна розпочати через сторінку підтримки.")}</p>
      <p>${tx("The Android application identifier is ", "Ідентифікатор Android-застосунку: ")}<code>com.denysharkusha.habitduel</code>. ${tx("The application is available in English and Ukrainian and is intended only for adults aged 18 or older.", "Застосунок доступний англійською та українською мовами й призначений лише для повнолітніх користувачів віком від 18 років.")}</p>`,
    },
    {
      id: "data-we-process",
      title: { en: "2. Data we process", uk: "2. Дані, які ми обробляємо" },
      body: `<p>${tx("We process only the data needed to provide, protect and improve the service. The exact data depends on the features you use.", "Ми обробляємо лише дані, необхідні для надання, захисту та вдосконалення сервісу. Точний склад залежить від функцій, якими ти користуєшся.")}</p>
      <div class="policy-table-wrap"><table class="policy-table">
        <thead><tr><th>${tx("Category", "Категорія")}</th><th>${tx("Examples", "Приклади")}</th><th>${tx("Source", "Джерело")}</th></tr></thead>
        <tbody>
          <tr><td><strong>${tx("Account and authentication", "Акаунт і автентифікація")}</strong></td><td>${tx("Internal account ID, login email, display name, email verification and authentication-provider identifiers. Passwords are handled by Supabase Auth and are not stored in the application database.", "Внутрішній ID акаунта, email для входу, ім’я, підтвердження email та ідентифікатори провайдера входу. Паролі обробляє Supabase Auth; вони не зберігаються в базі застосунку.")}</td><td>${tx("You, Supabase Auth and Google OAuth when chosen", "Ти, Supabase Auth і Google OAuth, якщо його обрано")}</td></tr>
          <tr><td><strong>${tx("Eligibility and legal acceptance", "Повноліття та прийняття документів")}</strong></td><td>${tx("Confirmation that you are at least 18, the accepted Terms and Privacy Policy versions, and acceptance timestamps. Habit Duel does not require your date of birth for this confirmation.", "Підтвердження, що тобі виповнилося 18 років, версії прийнятих Умов користування й Політики конфіденційності та час прийняття. Для цього підтвердження Habit Duel не вимагає дату народження.")}</td><td>${tx("You and application records", "Ти та записи застосунку")}</td></tr>
          <tr><td><strong>${tx("Profile", "Профіль")}</strong></td><td>${tx("Avatar, name, bio, time zone, gender, contact details, language, theme, notification choices, level, achievements and visibility settings.", "Аватар, ім’я, опис, часовий пояс, стать, контактні дані, мова, тема, налаштування сповіщень, рівень, досягнення та видимість.")}</td><td>${tx("You and the device", "Ти та пристрій")}</td></tr>
          <tr><td><strong>${tx("Habits and activity", "Звички та активність")}</strong></td><td>${tx("Habit title, time or count goal, schedule, reminder time, icon, color, character, visibility, streak, completion history, timer sessions, count results and optional notes.", "Назва звички, ціль за часом або кількістю, розклад, час нагадування, іконка, колір, персонаж, видимість, серія, історія виконання, сесії таймера, числові результати й необов’язкові нотатки.")}</td><td>${tx("You and app-generated records", "Ти та записи, створені застосунком")}</td></tr>
          <tr><td><strong>${tx("Social and user content", "Соціальні дані й контент користувачів")}</strong></td><td>${tx("Friends, requests, rooms, room descriptions, memberships, invitations, likes, room progress, blocks, reports, report descriptions and moderation decisions.", "Друзі, запити, кімнати, описи кімнат, участь, запрошення, вподобання, прогрес у кімнатах, блокування, скарги, описи скарг та рішення модерації.")}</td><td>${tx("You, other users and moderators", "Ти, інші користувачі та модератори")}</td></tr>
          <tr><td><strong>${tx("Technical and diagnostic", "Технічні та діагностичні дані")}</strong></td><td>${tx("App version, device and OS information, time zone, request identifiers, limited server log metadata and crash diagnostics with sensitive fields removed when Sentry is enabled.", "Версія застосунку, дані про пристрій і ОС, часовий пояс, ідентифікатори запитів, обмежені метадані серверних журналів і діагностика збоїв із видаленими чутливими полями, якщо увімкнено Sentry.")}</td><td>${tx("Device, infrastructure and Sentry", "Пристрій, інфраструктура та Sentry")}</td></tr>
          <tr><td><strong>${tx("Google Play purchases", "Покупки Google Play")}</strong></td><td>${tx("Product identifier, purchase and order status, purchase time, a one-way purchase-token identifier, an account-bound verification identifier and the Premium or virtual-coin grant. Google Play processes your payment method; Habit Duel does not receive payment-card details.", "Ідентифікатор товару, статус покупки й замовлення, час покупки, односторонній ідентифікатор токена покупки, прив’язаний до акаунта ідентифікатор перевірки та наданий Premium або віртуальні монети. Платіжний засіб обробляє Google Play; Habit Duel не отримує реквізити платіжної картки.")}</td><td>${tx("Google Play, you and application records", "Google Play, ти та записи застосунку")}</td></tr>
          <tr><td><strong>${tx("Advertising", "Реклама")}</strong></td><td>${tx("Advertising identifiers, IP-derived approximate location, ad interactions and diagnostics that Google Mobile Ads may process. Habit Duel requests non-personalized ads in the current configuration.", "Рекламні ідентифікатори, приблизне місцезнаходження за IP, взаємодія з рекламою та діагностика, які може обробляти Google Mobile Ads. У поточній конфігурації Habit Duel запитує неперсоналізовану рекламу.")}</td><td>${tx("Google Mobile Ads and your consent choices", "Google Mobile Ads і твої налаштування згоди")}</td></tr>
        </tbody>
      </table></div>
      <p>${tx("The current release does not intentionally request precise GPS, address-book contacts, camera or microphone recordings, storage access, activity recognition, body sensors, Health Connect data or payment-card details.", "Поточна версія навмисно не запитує точну геолокацію, контакти з адресної книги, записи камери чи мікрофона, доступ до сховища, розпізнавання активності, датчики тіла, дані Health Connect або платіжні дані картки.")}</p>`,
    },
    {
      id: "how-we-use-data",
      title: { en: "3. Why we use data", uk: "3. Навіщо ми використовуємо дані" },
      body: `<ul>
        <li>${tx("Create, verify and secure your account; provide sign-in and password recovery.", "Створювати, підтверджувати й захищати акаунт; забезпечувати вхід і відновлення пароля.")}</li>
        <li>${tx("Confirm adult-only eligibility and record the legal documents accepted for the account.", "Підтверджувати право повнолітнього користувача на доступ і фіксувати прийняті для акаунта правові документи.")}</li>
        <li>${tx("Operate habits, timers, count results, reminders, progress, streaks, achievements and offline synchronization.", "Забезпечувати роботу звичок, таймерів, числових результатів, нагадувань, прогресу, серій, досягнень та офлайн-синхронізації.")}</li>
        <li>${tx("Provide profiles, friendships, rooms, invitations, likes and the visibility choices you select.", "Надавати профілі, дружбу, кімнати, запрошення, вподобання та обрані налаштування видимості.")}</li>
        <li>${tx("Verify Google Play purchases, prevent duplicate grants, provide Premium or virtual coins and reconcile cancellations or refunds.", "Перевіряти покупки Google Play, запобігати повторним нарахуванням, надавати Premium або віртуальні монети та враховувати скасування чи повернення коштів.")}</li>
        <li>${tx("Prevent abuse, enforce Community Guidelines, review reports and protect users and the service.", "Запобігати зловживанням, забезпечувати виконання Правил спільноти, розглядати скарги та захищати користувачів і сервіс.")}</li>
        <li>${tx("Show consent-aware advertising, diagnose failures, answer support requests and comply with legal obligations.", "Показувати рекламу з урахуванням згоди, діагностувати збої, відповідати на звернення до підтримки та виконувати юридичні обов’язки.")}</li>
      </ul>
      <p>${tx("Where applicable data-protection law requires a legal basis, processing relies on performance of the service contract, consent, legitimate interests in operating and securing the service, or a legal obligation, depending on the purpose.", "Коли законодавство про захист даних вимагає правової підстави, обробка залежно від мети ґрунтується на виконанні договору про надання сервісу, згоді, законних інтересах щодо роботи й захисту сервісу або юридичному обов’язку.")}</p>`,
    },
    {
      id: "sharing",
      title: { en: "4. Service providers and sharing", uk: "4. Постачальники послуг і передавання даних" },
      body: `<p>${tx("We do not sell personal data. We may disclose the minimum necessary data to providers acting for us, other users according to your visibility settings, professional advisers, a successor in a lawful business transaction, or authorities where required by law.", "Ми не продаємо персональні дані. Ми можемо передавати мінімально необхідні дані постачальникам, що діють від нашого імені, іншим користувачам відповідно до твоїх налаштувань видимості, професійним радникам, правонаступнику в законній бізнес-операції або органам влади, якщо цього вимагає закон.")}</p>
      <div class="policy-table-wrap"><table class="policy-table">
        <thead><tr><th>${tx("Provider", "Постачальник")}</th><th>${tx("Purpose", "Призначення")}</th></tr></thead>
        <tbody>
          <tr><td><strong>Supabase</strong></td><td>${tx("Authentication and PostgreSQL data storage", "Автентифікація та зберігання даних PostgreSQL")}</td></tr>
          <tr><td><strong>${tx("Application hosting and email providers", "Постачальники хостингу застосунку та email")}</strong></td><td>${tx("Backend API, operational infrastructure, verification, password recovery and service messages", "Backend API, операційна інфраструктура, підтвердження, відновлення пароля та сервісні повідомлення")}</td></tr>
          <tr><td><strong>Google</strong></td><td>${tx("Google sign-in, Google Play Billing purchase processing and Google Mobile Ads/UMP", "Вхід через Google, обробка покупок Google Play Billing та Google Mobile Ads/UMP")}</td></tr>
          <tr><td><strong>Sentry</strong></td><td>${tx("Optional crash diagnostics with sensitive fields removed; default PII and performance tracing are disabled", "Необов’язкова діагностика збоїв із видаленими чутливими полями; стандартне передавання PII та трасування продуктивності вимкнені")}</td></tr>
        </tbody>
      </table></div>
      <p>${tx("Provider privacy information is available from ", "Інформація постачальників про конфіденційність доступна на сайтах ")}<a href="https://supabase.com/privacy" rel="noopener noreferrer">Supabase</a>, <a href="https://policies.google.com/privacy" rel="noopener noreferrer">Google</a> ${tx("and", "та")} <a href="https://sentry.io/privacy/" rel="noopener noreferrer">Sentry</a>.</p>`,
    },
    {
      id: "visibility",
      title: { en: "5. Visibility and community features", uk: "5. Видимість і функції спільноти" },
      body: `<p>${tx("Your login email is not visible to other users, but authorized administrators or support personnel may access it when needed to operate, secure or support the service. Your display name, avatar, bio, time zone, gender and level may appear on your profile. Profile fields and habits follow the public, friends-only or private visibility choices available in the product. Rooms may be public, friends-only or invitation-only, and their access may also be protected by a PIN.", "Email для входу не бачать інші користувачі, але уповноважені адміністратори або працівники підтримки можуть мати до нього доступ, коли це потрібно для роботи, захисту чи підтримки сервісу. Ім’я, аватар, опис, часовий пояс, стать і рівень можуть відображатися у профілі. Поля профілю та звички показуються відповідно до публічних, доступних лише друзям або приватних налаштувань видимості. Кімнати можуть бути публічними, доступними лише друзям або лише за запрошенням, а доступ до них також може захищатися PIN-кодом.")}</p>
      <p>${tx("Other users can report a user, a visible habit card or a room and can block another user. A report may include a limited snapshot of the reported profile, card or room so moderators can review the event even if the content later changes. Moderation evidence is restricted and kept only as long as reasonably needed for safety, dispute handling or legal obligations.", "Інші користувачі можуть поскаржитися на користувача, видиму картку звички чи кімнату та заблокувати іншого користувача. Скарга може містити обмежений знімок профілю, картки чи кімнати, щоб модератори могли розглянути подію, навіть якщо контент пізніше змінять. Матеріали модерації мають обмежений доступ і зберігаються лише стільки, скільки обґрунтовано потрібно для безпеки, вирішення спорів або виконання юридичних обов’язків.")}</p>`,
    },
    {
      id: "advertising",
      title: { en: "6. Advertising", uk: "6. Реклама" },
      body: `<p>${tx("Habit Duel may show Google Mobile Ads banners and uses Google’s consent tools where required. Google may process device or advertising identifiers, IP-derived approximate location, ad interactions and diagnostics. You can review or withdraw applicable advertising consent through the controls provided in the app or by the platform.", "Habit Duel може показувати банери Google Mobile Ads і використовує інструменти згоди Google там, де це потрібно. Google може обробляти ідентифікатори пристрою чи реклами, приблизне місцезнаходження за IP, взаємодію з рекламою та діагностику. Переглянути або відкликати відповідну згоду можна через елементи керування в застосунку чи на платформі.")}</p>`,
    },
    {
      id: "retention",
      title: { en: "7. Retention", uk: "7. Строки зберігання" },
      body: `<p>${tx("We keep data only for as long as needed for the purposes described above, to meet legal obligations and to protect the service. Confirmed and unresolved periods are listed below.", "Ми зберігаємо дані лише стільки, скільки потрібно для описаних вище цілей, виконання юридичних обов’язків і захисту сервісу. Підтверджені та ще не визначені строки наведено нижче.")}</p>
      <div class="policy-table-wrap"><table class="policy-table">
        <thead><tr><th>${tx("Data", "Дані")}</th><th>${tx("Current retention", "Поточний строк")}</th></tr></thead>
        <tbody>
          <tr><td>${tx("Active account, profile, habits, rooms and related records", "Активний акаунт, профіль, звички, кімнати та пов’язані записи")}</td><td>${tx("While the account is active; deletion processing as described below", "Поки акаунт активний; видалення — як описано нижче")}</td></tr>
          <tr><td>${tx("Unfinished email-registration consent record", "Запис згоди для незавершеної email-реєстрації")}</td><td>${tx("Up to 7 days, or removed sooner when the registration is completed", "До 7 днів або раніше після завершення реєстрації")}</td></tr>
          <tr><td>${tx("Adult confirmation and accepted legal-document versions", "Підтвердження повноліття та версії прийнятих правових документів")}</td><td>${tx("While the account is active and, only where necessary, for a limited period needed to resolve disputes or meet legal obligations", "Поки акаунт активний і, лише за потреби, протягом обмеженого строку для вирішення спорів або виконання юридичних обов’язків")}</td></tr>
          <tr><td>${tx("Purchase verification, entitlement and virtual-balance records", "Записи перевірки покупок, прав доступу та віртуального балансу")}</td><td>${tx("While needed to provide or restore the purchase, prevent duplicate grants, process cancellations or refunds, resolve disputes and meet tax, accounting or legal duties", "Доки це потрібно для надання чи відновлення покупки, запобігання повторним нарахуванням, обробки скасувань або повернень, вирішення спорів і виконання податкових, облікових чи юридичних обов’язків")}</td></tr>
          <tr><td>${tx("Completed or terminal timer-session operational records", "Завершені операційні записи сесій таймера")}</td><td>${tx("30 days", "30 днів")}</td></tr>
          <tr><td>${tx("Completed account-deletion tombstone", "Завершений технічний запис про видалення акаунта")}</td><td>${tx("7 days", "7 днів")}</td></tr>
          <tr><td>${tx("Backups, API or hosting logs, optional diagnostics, moderation evidence and security records", "Резервні копії, журнали API чи хостингу, необов’язкова діагностика, матеріали модерації та записи безпеки")}</td><td>${tx("Only as long as reasonably needed for recovery, security, dispute handling or legal obligations, then deleted or anonymized", "Лише стільки, скільки обґрунтовано потрібно для відновлення, безпеки, вирішення спорів або юридичних обов’язків, після чого дані видаляються чи анонімізуються")}</td></tr>
          <tr><td>${tx("Advertising-provider data", "Дані постачальника реклами")}</td><td>${tx("According to Google’s current policies and your consent settings", "Відповідно до чинних правил Google і налаштувань згоди")}</td></tr>
        </tbody>
      </table></div>`,
    },
    {
      id: "deletion-rights",
      title: { en: "8. Deletion, choices and rights", uk: "8. Видалення, вибір і права" },
      body: `<p>${tx("You can update many profile, visibility, reminder, language, sound and vibration choices in the application. You can delete your account in Settings or use the public ", "У застосунку можна змінити багато налаштувань профілю, видимості, нагадувань, мови, звуку й вібрації. Видалити акаунт можна в Налаштуваннях або через публічну ")}<a href="../account-deletion/">${tx("Account Deletion page", "сторінку видалення акаунта")}</a>.</p>
      <p>${tx("Depending on your location, you may have rights to access, correct, delete or receive a copy of personal data; object to or restrict certain processing; withdraw consent without affecting earlier lawful processing; and complain to a data-protection authority. Use the privacy contact shown above or the ", "Залежно від місця проживання ти можеш мати право на доступ, виправлення, видалення чи отримання копії персональних даних; заперечення проти певної обробки або її обмеження; відкликання згоди без впливу на попередню законну обробку; та подання скарги до органу захисту даних. Скористайся контактом із питань конфіденційності вище або ")}<a href="../support/">${tx("Support page", "сторінкою підтримки")}</a>.</p>
      <div class="callout"><strong>${tx("Account deletion", "Видалення акаунта")}</strong><p>${tx("The local application record and most linked product data are deleted after confirmation. Supabase identity deletion is attempted immediately and retried if the provider is temporarily unavailable. Backups, security evidence and legally required records may expire later according to the periods above.", "Локальний запис застосунку та більшість пов’язаних даних видаляються після підтвердження. Видалення ідентичності Supabase виконується одразу та повторюється, якщо постачальник тимчасово недоступний. Резервні копії, матеріали безпеки й обов’язкові за законом записи можуть бути видалені пізніше відповідно до наведених строків.")}</p></div>`,
    },
    {
      id: "adult-only",
      title: { en: "9. Adults-only service", uk: "9. Сервіс лише для повнолітніх" },
      body: `<p>${tx("Habit Duel is intended only for people aged 18 or older. Account creation requires an explicit adult confirmation and acceptance of the current Terms of Service and Privacy Policy. We record that confirmation and the accepted document versions, but we do not require your date of birth.", "Habit Duel призначений лише для осіб віком від 18 років. Для створення акаунта потрібно прямо підтвердити повноліття та прийняти чинні Умови користування й Політику конфіденційності. Ми фіксуємо це підтвердження та версії прийнятих документів, але не вимагаємо дату народження.")}</p>
      <p>${tx("Google Play may additionally restrict discovery, installation and purchases for accounts it identifies as belonging to minors. If we learn that an account belongs to a person under 18, we may restrict or close the account and delete its data, subject to limited safety, dispute and legal preservation duties. Contact us through the ", "Google Play також може обмежувати пошук, установлення та покупки для акаунтів, які система визначає як акаунти неповнолітніх. Якщо ми дізнаємося, що акаунт належить особі молодше 18 років, ми можемо обмежити або закрити його й видалити дані з урахуванням обмежених обов’язків щодо безпеки, спорів і збереження за законом. Звернися через ")}<a href="../support/">${tx("Support page", "сторінку підтримки")}</a>.</p>`,
    },
    {
      id: "security-transfers",
      title: { en: "10. Security and international transfers", uk: "10. Безпека та міжнародні передачі" },
      body: `<p>${tx("We use measures designed to protect data, including TLS in transit, access controls, secure local token storage, hashed room PIN verification, encrypted owner PIN recovery data and redaction of sensitive crash details. No method is completely secure, so we cannot guarantee absolute security.", "Ми застосовуємо заходи для захисту даних, зокрема TLS під час передавання, контроль доступу, безпечне локальне зберігання токенів, хешовану перевірку PIN-кодів кімнат, шифровані дані для відновлення PIN власником і приховування чутливих деталей у звітах про збої. Жоден метод не є абсолютно безпечним, тому ми не можемо гарантувати повну безпеку.")}</p>
      <p>${tx("Providers may process data outside your country. Where required, international transfers are protected by the provider’s applicable contractual and legal safeguards.", "Постачальники можуть обробляти дані за межами твоєї країни. Коли це потрібно, міжнародні передачі захищаються відповідними договірними та правовими гарантіями постачальника.")}</p>`,
    },
    {
      id: "changes-contact",
      title: { en: "11. Changes and contact", uk: "11. Зміни та контакти" },
      body: `<p>${tx("We may update this Policy when the product, law or providers change. Material changes will be communicated through the application, this page or another appropriate channel before they take effect where required.", "Ми можемо оновлювати цю Політику, коли змінюються продукт, законодавство або постачальники. Про суттєві зміни буде повідомлено через застосунок, цю сторінку або інший належний канал до набрання ними чинності, якщо це потрібно.")}</p>
      <p>${tx("Use the operator and privacy contact shown at the top of this page, or visit the ", "Скористайся даними оператора й контактом із питань конфіденційності у верхній частині сторінки або відкрий ")}<a href="../support/">${tx("Support page", "сторінку підтримки")}</a>.</p>`,
    },
  ],
};
privacyPage.render = renderLegalPage(privacyPage);

const deletionPage = {
  id: "account-deletion",
  route: "/account-deletion/",
  output: "account-deletion/index.html",
  label: { en: "Account deletion", uk: "Видалення акаунта" },
  heading: { en: "Delete your account", uk: "Видалення акаунта" },
  lead: {
    en: "Delete your Habit Duel account in the app or submit a request without reinstalling it.",
    uk: "Видали акаунт Habit Duel у застосунку або подай запит без повторного встановлення.",
  },
  title: {
    en: "Delete your Habit Duel account",
    uk: "Видалення акаунта Habit Duel",
  },
  description: {
    en: "How to delete a Habit Duel account, what data is deleted, what may be retained and how to submit a web request.",
    uk: "Як видалити акаунт Habit Duel, які дані видаляються, що може зберігатися та як подати запит через вебсторінку.",
  },
  meta: [
    { label: { en: "Effective date", uk: "Дата набрання чинності" }, value: tx("August 31, 2026", "31 серпня 2026") },
    { label: { en: "Application", uk: "Застосунок" }, value: "Habit Duel" },
    { label: { en: "Operator", uk: "Оператор" }, value: publication.operator },
    { label: { en: "Deletion contact", uk: "Контакт для видалення" }, value: publication.contact },
  ],
  intro: {
    en: "You can permanently delete your Habit Duel account and associated product data. Deletion cannot currently be cancelled after the three-second confirmation is completed.",
    uk: "Ти можеш назавжди видалити акаунт Habit Duel і пов’язані дані продукту. Після завершення трисекундного підтвердження скасувати видалення наразі неможливо.",
  },
  sections: [
    {
      id: "in-app",
      title: { en: "1. Delete in the app", uk: "1. Видалення в застосунку" },
      body: `<ol class="step-list"><li>${tx("Open Habit Duel and go to Settings.", "Відкрий Habit Duel і перейди до Налаштувань.")}</li><li>${tx("Scroll to the bottom and choose Delete account.", "Прокрути вниз і вибери «Видалити акаунт».")}</li><li>${tx("Read the warning, then press and hold Delete for three seconds.", "Прочитай попередження, а потім натисни й утримуй «Видалити» протягом трьох секунд.")}</li></ol>
      <div class="callout callout-danger"><strong>${tx("Permanent action", "Незворотна дія")}</strong><p>${tx("After the hold completes, the app signs you out, clears local tokens, reminders, saved room PINs and offline activity, and sends the deletion request to the service. There is no cancellation window in the current version.", "Після завершення утримання застосунок виходить з акаунта, очищає локальні токени, нагадування, збережені PIN-коди кімнат та офлайн-активність і надсилає запит на видалення сервісу. У поточній версії немає періоду для скасування.")}</p></div>`,
    },
    {
      id: "web-request",
      title: { en: "2. Request deletion without the app", uk: "2. Запит без застосунку" },
      body: `<p>${tx("If you cannot access the app, use the secure request method below. The request must identify the Habit Duel account while avoiding passwords, one-time codes and identity documents in ordinary email.", "Якщо немає доступу до застосунку, скористайся безпечним способом нижче. Запит має ідентифікувати акаунт Habit Duel, але не надсилай пароль, одноразові коди чи документи звичайною електронною поштою.")}</p>
      <div class="support-grid"><div class="support-card"><small>${tx("Deletion email or secure form", "Email або безпечна форма для видалення")}</small><strong>${tx("Use the deletion contact shown above", "Скористайся контактом для видалення вище")}</strong></div></div>
      <p>${tx("Send the request from the email connected to the Habit Duel account whenever possible. We may ask you to confirm control of that address, but we will never ask for your password or one-time code.", "За можливості надішли запит з email, пов’язаного з акаунтом Habit Duel. Ми можемо попросити підтвердити контроль над цією адресою, але ніколи не проситимемо пароль або одноразовий код.")}</p>`,
    },
    {
      id: "deleted-data",
      title: { en: "3. Data deleted", uk: "3. Дані, які видаляються" },
      body: `<p>${tx("The service removes the local application account record and data linked through normal account relationships, including:", "Сервіс видаляє локальний запис акаунта та дані, пов’язані звичайними зв’язками акаунта, зокрема:")}</p>
      <ul><li>${tx("profile details, settings and visibility choices;", "дані профілю, налаштування та параметри видимості;")}</li><li>${tx("adult confirmation, accepted legal-document versions and acceptance timestamps;", "підтвердження повноліття, версії прийнятих правових документів і час прийняття;")}</li><li>${tx("habits, completion history, timer sessions, count results and notes;", "звички, історію виконання, сесії таймера, числові результати й нотатки;")}</li><li>${tx("friendships, requests, room ownership, memberships, invitations and related room data;", "дружбу, запити, володіння кімнатами, участь, запрошення та пов’язані дані кімнат;")}</li><li>${tx("rewards, levels, achievements and user-linked virtual balances;", "нагороди, рівні, досягнення та пов’язані з користувачем віртуальні баланси;")}</li><li>${tx("blocks, reports and other records deleted through the configured database relationships, except records that must be detached or preserved as described below.", "блокування, скарги та інші записи, що видаляються через налаштовані зв’язки бази даних, крім записів, які потрібно від’єднати або зберегти, як описано нижче.")}</li></ul>
      <p>${tx("Supabase authentication identity deletion is attempted immediately. If Supabase is temporarily unavailable, the service retries with increasing delays of up to 24 hours between attempts.", "Ідентичність автентифікації Supabase намагаємося видалити одразу. Якщо Supabase тимчасово недоступний, сервіс повторює спроби зі збільшенням інтервалу до 24 годин між спробами.")}</p>`,
    },
    {
      id: "retained-data",
      title: { en: "4. Data that may remain", uk: "4. Дані, які можуть залишитися" },
      body: `<div class="policy-table-wrap"><table class="policy-table"><thead><tr><th>${tx("Record", "Запис")}</th><th>${tx("Reason", "Причина")}</th><th>${tx("Retention", "Строк")}</th></tr></thead><tbody>
        <tr><td>${tx("Completed deletion tombstone", "Завершений технічний запис видалення")}</td><td>${tx("Prevent conflicting retries and confirm completion", "Запобігання конфліктним повторам і підтвердження завершення")}</td><td>${tx("7 days", "7 днів")}</td></tr>
        <tr><td>${tx("Detached Google Play purchase-verification record", "Від’єднаний запис перевірки покупки Google Play")}</td><td>${tx("Prevent duplicate grants, reconcile cancellations or refunds, resolve payment disputes and meet accounting or legal duties", "Запобігання повторним нарахуванням, обробка скасувань чи повернень, вирішення платіжних спорів і виконання облікових або юридичних обов’язків")}</td><td>${tx("Only as long as needed for those purposes or as required by law", "Лише стільки, скільки потрібно для цих цілей або вимагає закон")}</td></tr>
        <tr><td>${tx("Backups, provider/API logs and diagnostics", "Резервні копії, журнали постачальників/API та діагностика")}</td><td>${tx("Disaster recovery, security and service reliability", "Відновлення після збою, безпека та надійність сервісу")}</td><td>${tx("Only as long as reasonably needed for those purposes, then deleted or anonymized", "Лише стільки, скільки обґрунтовано потрібно для цих цілей, після чого дані видаляються чи анонімізуються")}</td></tr>
        <tr><td>${tx("Moderation or security evidence", "Матеріали модерації чи безпеки")}</td><td>${tx("Safety, abuse prevention, dispute handling or legal duties", "Безпека, запобігання зловживанням, спори або юридичні обов’язки")}</td><td>${tx("Only as long as reasonably needed for the applicable purpose", "Лише стільки, скільки обґрунтовано потрібно для відповідної мети")}</td></tr>
      </tbody></table></div>
      <p>${tx("Retained records are access-restricted, used only for the preservation purpose shown above and are not used to recreate an active Habit Duel profile. They are deleted or anonymized when that purpose ends unless a longer period is required by law. Deleting a Habit Duel account does not itself cancel or refund a Google Play order. It permanently removes the account entitlement and virtual balance, and the same purchase cannot be transferred to or granted again on a new Habit Duel account. Use Google Play’s purchase and refund controls where applicable and contact support before deletion if a purchase is unresolved.", "Доступ до збережених записів обмежений; вони використовуються лише для зазначеної вище мети й не застосовуються для відновлення активного профілю Habit Duel. Після завершення цієї мети записи видаляються або анонімізуються, якщо закон не вимагає довшого строку. Видалення акаунта Habit Duel саме по собі не скасовує замовлення Google Play і не повертає кошти. Воно назавжди видаляє право доступу та віртуальний баланс цього акаунта, а ту саму покупку не можна перенести чи повторно надати новому акаунту Habit Duel. За потреби скористайся інструментами покупок і повернень Google Play та звернися до підтримки до видалення, якщо питання з покупкою ще не вирішено.")}</p>`,
    },
    {
      id: "timing",
      title: { en: "5. Timing and confirmation", uk: "5. Строки та підтвердження" },
      body: `<p>${tx("The primary application record is removed after the confirmed request is accepted. Supabase identity deletion is attempted immediately and retried if the provider is temporarily unavailable. Restricted backup, security or legal records expire later as described above.", "Основний запис застосунку видаляється після прийняття підтвердженого запиту. Видалення ідентичності Supabase виконується одразу та повторюється, якщо постачальник тимчасово недоступний. Обмежені резервні, безпекові чи юридичні записи припиняють зберігатися пізніше, як описано вище.")}</p>
      <p>${tx("For an external request, we respond through the same verified channel used to receive or confirm the request.", "Для зовнішнього запиту ми відповідаємо через той самий перевірений канал, який використовувався для отримання або підтвердження запиту.")}</p>`,
    },
    {
      id: "help",
      title: { en: "6. Need help?", uk: "6. Потрібна допомога?" },
      body: `<p>${tx("Use the deletion contact shown above or visit the ", "Скористайся контактом для видалення вище або відкрий ")}<a href="../support/">${tx("Support page", "сторінку підтримки")}</a>.</p>
      <div class="callout callout-warning"><strong>${tx("Do not send secrets", "Не надсилай секретні дані")}</strong><p>${tx("Support will never ask you to send a password or one-time code by ordinary email.", "Підтримка ніколи не проситиме надіслати пароль або одноразовий код звичайною електронною поштою.")}</p></div>`,
    },
  ],
};
deletionPage.render = renderLegalPage(deletionPage);

const supportPage = {
  id: "support",
  route: "/support/",
  output: "support/index.html",
  label: { en: "Support", uk: "Підтримка" },
  heading: { en: "How can we help?", uk: "Як ми можемо допомогти?" },
  lead: {
    en: "Find the right contact and quick answers for accounts, reminders, rooms and safety.",
    uk: "Знайди потрібний контакт і короткі відповіді про акаунти, нагадування, кімнати та безпеку.",
  },
  title: { en: "Support — Habit Duel", uk: "Підтримка — Habit Duel" },
  description: {
    en: "Habit Duel help center for account access, notifications, rooms, reports, privacy and account deletion.",
    uk: "Центр допомоги Habit Duel щодо доступу до акаунта, сповіщень, кімнат, скарг, конфіденційності та видалення.",
  },
  meta: [
    { label: { en: "Support email", uk: "Email підтримки" }, value: publication.contact },
  ],
  intro: {
    en: "Use the monitored contact below for product support, privacy, account deletion, safety reports and appeals.",
    uk: "Скористайся контактом нижче для підтримки продукту, питань конфіденційності, видалення акаунта, скарг щодо безпеки та оскаржень.",
  },
  sections: [
    {
      id: "contacts",
      title: { en: "1. Contact us", uk: "1. Зв’язатися з нами" },
      body: `<div class="support-grid"><div class="support-card"><small>${tx("Support, privacy, deletion and safety", "Підтримка, конфіденційність, видалення та безпека")}</small><strong>${tx("Use the monitored support contact shown above", "Скористайся контактом підтримки вище")}</strong></div></div>
      <p>${tx("Include the email used for Habit Duel, app version, device model, Android version and a short description of what happened. Screenshots are useful if they do not expose another person’s private information.", "Укажи email, який використовується в Habit Duel, версію застосунку, модель пристрою, версію Android і короткий опис події. Знімки екрана корисні, якщо вони не розкривають приватні дані іншої людини.")}</p>`,
    },
    {
      id: "account",
      title: { en: "2. Account and sign-in", uk: "2. Акаунт і вхід" },
      body: `<div class="faq-list">
        <details><summary>${tx("I did not receive the email code", "Я не отримав код на email")}</summary><p>${tx("Check spam and promotions, confirm the email spelling, wait a few minutes, then request a new code. Do not share the code with anyone. If it still does not arrive, contact support.", "Перевір спам і промоакції, написання адреси, зачекай кілька хвилин і запроси новий код. Не передавай код нікому. Якщо листа досі немає, звернися до підтримки.")}</p></details>
        <details><summary>${tx("I forgot my password", "Я забув пароль")}</summary><p>${tx("Use Forgot password on the sign-in screen. Habit Duel sends a verification code to the account email before allowing a new password.", "Скористайся пунктом «Забули пароль?» на екрані входу. Habit Duel надішле код підтвердження на email акаунта перед створенням нового пароля.")}</p></details>
        <details><summary>${tx("I used Google sign-in", "Я входив через Google")}</summary><p>${tx("On supported Android builds, choose Continue with Google and select the same Google account. If the option is unavailable in your release, contact support rather than creating a duplicate account.", "У підтримуваних Android-збірках вибери «Продовжити з Google» і той самий Google-акаунт. Якщо опція недоступна у твоїй версії, звернися до підтримки, а не створюй дубль акаунта.")}</p></details>
      </div>`,
    },
    {
      id: "notifications",
      title: { en: "3. Timer and reminders", uk: "3. Таймер і нагадування" },
      body: `<div class="faq-list"><details><summary>${tx("A reminder did not appear on time", "Нагадування не з’явилося вчасно")}</summary><p>${tx("Check notification permission, the habit schedule, battery restrictions and exact-alarm access. Android may delay notifications after force-stop, with aggressive battery saving or when exact-alarm access is denied. Delivery cannot be guaranteed in every device state.", "Перевір дозвіл на сповіщення, розклад звички, обмеження батареї та доступ до точних будильників. Android може затримувати сповіщення після примусової зупинки, за агресивного енергозбереження або без доступу до точних будильників. Доставку неможливо гарантувати в кожному стані пристрою.")}</p></details><details><summary>${tx("How do I turn vibration off?", "Як вимкнути вібрацію?")}</summary><p>${tx("Open Settings → General and turn off app vibration. Timer start and timer completion keep their dedicated feedback so an active session remains clear.", "Відкрий Налаштування → Загальні та вимкни вібрацію застосунку. Старт і завершення таймера зберігають окремий відгук, щоб активна сесія залишалася зрозумілою.")}</p></details></div>`,
    },
    {
      id: "rooms-safety",
      title: { en: "4. Rooms, people and safety", uk: "4. Кімнати, люди та безпека" },
      body: `<div class="faq-list"><details><summary>${tx("How do I report a user, habit card or room?", "Як поскаржитися на користувача, картку звички чи кімнату?")}</summary><p>${tx("Open the actions for the user, visible habit card or room, choose Report, select the reason and add only the details needed for review. You can also block the user. For an urgent safety concern, use the support contact above.", "Відкрий дії користувача, видимої картки звички чи кімнати, вибери «Поскаржитися», укажи причину й додай лише потрібні для розгляду деталі. Також можна заблокувати користувача. Для термінового питання безпеки скористайся контактом підтримки вище.")}</p></details><details><summary>${tx("I lost a room PIN", "Я втратив PIN-код кімнати")}</summary><p>${tx("A room owner can use the recovery flow available in the room settings. Never publish a room PIN in a report or public profile.", "Власник кімнати може скористатися відновленням у налаштуваннях кімнати. Не публікуй PIN-код кімнати у скарзі чи публічному профілі.")}</p></details></div>`,
    },
    {
      id: "age-requirement",
      title: { en: "5. Age requirement", uk: "5. Вікове обмеження" },
      body: `<div class="faq-list"><details><summary>${tx("Who can use Habit Duel?", "Хто може користуватися Habit Duel?")}</summary><p>${tx("Habit Duel is available only to adults aged 18 or older. Do not create an account if you are under 18. If an account was created in error, contact support so it can be restricted and deleted.", "Habit Duel доступний лише повнолітнім особам віком від 18 років. Не створюй акаунт, якщо тобі ще немає 18 років. Якщо акаунт створено помилково, звернися до підтримки, щоб його обмежили та видалили.")}</p></details></div>`,
    },
    {
      id: "deletion",
      title: { en: "6. Account deletion", uk: "6. Видалення акаунта" },
      body: `<div class="faq-list"><details><summary>${tx("How do I delete my account?", "Як видалити акаунт?")}</summary><p>${tx("Open Settings, choose Delete account and hold the confirmation for three seconds, or follow the public ", "Відкрий Налаштування, вибери «Видалити акаунт» і утримуй підтвердження три секунди або скористайся публічною ")}<a href="../account-deletion/">${tx("Account Deletion page", "сторінкою видалення акаунта")}</a>.</p></details></div>`,
    },
  ],
};
supportPage.render = renderLegalPage(supportPage);

const termsPage = {
  id: "terms",
  route: "/terms/",
  output: "terms/index.html",
  label: { en: "Terms of Service", uk: "Умови користування" },
  heading: { en: "Terms of Service", uk: "Умови користування" },
  lead: {
    en: "The rules for using Habit Duel, accounts, community features and advertising.",
    uk: "Правила використання Habit Duel, акаунтів, функцій спільноти та реклами.",
  },
  title: { en: "Terms of Service — Habit Duel", uk: "Умови користування — Habit Duel" },
  description: {
    en: "Habit Duel Terms of Service for accounts, habits, rooms, user content, advertising and account termination.",
    uk: "Умови користування Habit Duel щодо акаунтів, звичок, кімнат, контенту користувачів, реклами й припинення доступу.",
  },
  meta: [
    { label: { en: "Effective date", uk: "Дата набрання чинності" }, value: tx("August 31, 2026", "31 серпня 2026") },
    { label: { en: "Operator", uk: "Оператор" }, value: publication.operator },
  ],
  intro: {
    en: "These Terms form an agreement between you and the Habit Duel operator. By creating an account or using the service, you agree to these Terms, the Privacy Policy and the Community Guidelines.",
    uk: "Ці Умови є угодою між тобою та оператором Habit Duel. Створюючи акаунт або користуючись сервісом, ти погоджуєшся з цими Умовами, Політикою конфіденційності та Правилами спільноти.",
  },
  sections: [
    {
      id: "operator-acceptance",
      title: { en: "1. Operator and acceptance", uk: "1. Оператор і прийняття умов" },
      body: `<p>${tx("The operator is shown above. Support is available through the ", "Дані оператора наведені вище. Підтримка доступна через ")}<a href="../support/">${tx("Support page", "сторінку підтримки")}</a>.</p>
      <p>${tx("If you do not agree, do not create an account or use the service. We may ask you to accept a new version before continuing to publish or access social content.", "Якщо ти не погоджуєшся, не створюй акаунт і не користуйся сервісом. Ми можемо попросити прийняти нову версію перед подальшою публікацією або доступом до соціального контенту.")}</p>`,
    },
    {
      id: "eligibility",
      title: { en: "2. Eligibility and accounts", uk: "2. Вік і акаунти" },
      body: `<p>${tx("The minimum age for creating an account or using Habit Duel is ", "Мінімальний вік для створення акаунта або використання Habit Duel: ")}${publication.minimumAge}${tx(". By registering, including through Google sign-in, you explicitly confirm that you are at least 18 and accept the current Terms of Service and Privacy Policy. Habit Duel may record the confirmation, accepted versions and timestamps.", ". Реєструючись, зокрема через вхід Google, ти прямо підтверджуєш, що тобі виповнилося 18 років, і приймаєш чинні Умови користування та Політику конфіденційності. Habit Duel може фіксувати підтвердження, прийняті версії та час.")}</p>
      <ul><li>${tx("Do not create or use an account if you are under 18, and do not provide a false adult confirmation.", "Не створюй і не використовуй акаунт, якщо тобі немає 18 років, і не надавай неправдиве підтвердження повноліття.")}</li><li>${tx("Provide accurate information and keep it current.", "Надавай точну інформацію та оновлюй її.")}</li><li>${tx("Protect account credentials and verification codes; notify support of suspected misuse.", "Захищай облікові дані та коди підтвердження; повідомляй підтримку про підозріле використання.")}</li><li>${tx("Do not impersonate another person, create accounts to evade enforcement or transfer an account without permission.", "Не видавай себе за іншу особу, не створюй акаунти для обходу санкцій і не передавай акаунт без дозволу.")}</li><li>${tx("You are responsible for activity under your account to the extent allowed by law.", "Ти відповідаєш за активність у своєму акаунті в межах, дозволених законом.")}</li></ul>
      <p>${tx("If we reasonably determine that an account belongs to a person under 18 or that the adult confirmation was false, we may restrict or terminate the account and process deletion as described in the Privacy Policy.", "Якщо ми обґрунтовано встановимо, що акаунт належить особі молодше 18 років або підтвердження повноліття було неправдивим, ми можемо обмежити чи припинити акаунт і виконати видалення відповідно до Політики конфіденційності.")}</p>`,
    },
    {
      id: "service",
      title: { en: "3. The service", uk: "3. Сервіс" },
      body: `<p>${tx("Habit Duel is a general-purpose habit tracker. It lets users create routines measured by time or count, use a timer and local reminders, view progress and achievements, connect with people and participate in rooms.", "Habit Duel — універсальний трекер звичок. Він дає змогу створювати звички з обліком часу або кількості, користуватися таймером і локальними нагадуваннями, переглядати прогрес і досягнення, додавати людей та брати участь у кімнатах.")}</p>
      <p>${tx("Habit Duel is not a medical, health, fitness, therapy or emergency service and does not provide professional advice. You choose your activities and remain responsible for using the service appropriately.", "Habit Duel не є медичним, оздоровчим, фітнес-, терапевтичним чи екстреним сервісом і не надає професійних порад. Ти сам обираєш активності й відповідаєш за належне використання сервісу.")}</p>
      <p>${tx("Background reminders and timer alerts may be delayed or blocked by operating-system settings, battery controls, network loss or force-stop. We do not guarantee delivery at an exact moment or uninterrupted availability.", "Фонові нагадування та сигнали таймера можуть затримуватися або блокуватися налаштуваннями системи, керуванням батареєю, втратою мережі чи примусовою зупинкою. Ми не гарантуємо доставку в точний момент або безперервну доступність.")}</p>`,
    },
    {
      id: "virtual-features",
      title: { en: "4. Progress, Premium and purchases", uk: "4. Прогрес, Premium і покупки" },
      body: `<p>${tx("Streaks, levels, points, achievements, characters, freezes, bonuses and virtual coins are product features intended for motivation. They are not money, wages, property, investments or guaranteed rewards; they have no cash value and may not be sold or transferred unless Habit Duel explicitly provides a lawful feature for doing so.", "Серії, рівні, очки, досягнення, персонажі, заморожування, бонуси та віртуальні монети — функції продукту для мотивації. Вони не є грошима, оплатою праці, майном, інвестицією чи гарантованою винагородою, не мають грошової вартості й не можуть продаватися або передаватися, якщо Habit Duel прямо не надасть законну функцію для цього.")}</p>
      <p>${tx("Optional Android purchases are offered and charged through Google Play at the price shown before confirmation. Lifetime Premium is a non-consumable entitlement for the purchasing Habit Duel account. Discipline Coin packs are consumable virtual items credited in the amount shown for that product. A purchase is granted only after server verification with Google Play.", "Необов’язкові покупки на Android пропонує та оплачує Google Play за ціною, показаною до підтвердження. Довічний Premium — невитратне право доступу для акаунта Habit Duel, з якого здійснено покупку. Набори Discipline Coins — витратні віртуальні предмети, що нараховуються в кількості, зазначеній для відповідного товару. Покупка надається лише після серверної перевірки через Google Play.")}</p>
      <p>${tx("Premium can be restored for the same active Habit Duel and Google Play account when Google Play makes the purchase available. It cannot be transferred to a different Habit Duel account, and deleting the purchasing account permanently removes its entitlement. Consumed coin packs are reflected in the server balance rather than restored as an unconsumed Play purchase. Cancellations, refunds and payment disputes are handled under Google Play rules and applicable consumer law; a refunded or reversed purchase may cause the related entitlement or unused virtual value to be removed where lawful.", "Premium можна відновити для того самого активного акаунта Habit Duel і Google Play, коли Google Play повертає інформацію про покупку. Його не можна перенести до іншого акаунта Habit Duel, а видалення акаунта, з якого зроблено покупку, назавжди припиняє це право доступу. Використані набори монет відображаються в серверному балансі, а не відновлюються як невикористана покупка Play. Скасування, повернення коштів і платіжні спори регулюються правилами Google Play та застосовним законодавством про захист споживачів; у разі повернення чи скасування покупки пов’язане право доступу або невикористана віртуальна цінність можуть бути вилучені, якщо це дозволено законом.")}</p>
      <p>${tx("We may correct balances or progress affected by a bug, duplicate grant, manipulation or abuse.", "Ми можемо виправляти баланс або прогрес, на який вплинули помилка, повторне нарахування, маніпуляція чи зловживання.")}</p>`,
    },
    {
      id: "user-content",
      title: { en: "5. User content and community", uk: "5. Контент користувачів і спільнота" },
      body: `<p>${tx("You retain ownership of content you submit, such as profile details, habit names, room names and descriptions, notes and report descriptions. You grant the operator a non-exclusive, worldwide, royalty-free licence limited to hosting, storing, reproducing, displaying, moderating and otherwise processing that content as needed to operate, secure and improve Habit Duel according to your visibility settings.", "Ти зберігаєш права на контент, який додаєш: дані профілю, назви звичок, назви й описи кімнат, нотатки та описи скарг. Ти надаєш оператору невиключну, всесвітню, безоплатну ліцензію, обмежену розміщенням, зберіганням, відтворенням, показом, модерацією та іншою обробкою, необхідною для роботи, захисту й вдосконалення Habit Duel відповідно до налаштувань видимості.")}</p>
      <p>${tx("You must have the rights needed to submit content and must follow the ", "Ти повинен мати потрібні права на контент і дотримуватися ")}<a href="../community-guidelines/">${tx("Community Guidelines", "Правил спільноти")}</a>. ${tx("Habit Duel provides reporting and blocking tools. We may reject, limit, preserve or remove content and may restrict accounts when reasonably needed for safety, compliance or enforcement.", "Habit Duel надає інструменти скарг і блокування. Ми можемо відхиляти, обмежувати, зберігати чи видаляти контент і обмежувати акаунти, якщо це обґрунтовано потрібно для безпеки, виконання закону чи правил.")}</p>`,
    },
    {
      id: "prohibited-use",
      title: { en: "6. Prohibited use", uk: "6. Заборонене використання" },
      body: `<p>${tx("You may not:", "Заборонено:")}</p><ul>
        <li>${tx("break the law, violate another person’s rights or use the service to facilitate harm;", "порушувати закон чи права інших або використовувати сервіс для сприяння шкоді;")}</li>
        <li>${tx("harass, threaten, exploit, groom, dox, impersonate, defraud or spam others;", "переслідувати, погрожувати, експлуатувати, схиляти до небезпечної поведінки, розкривати приватні дані, видавати себе за інших, шахраювати чи розсилати спам;")}</li>
        <li>${tx("upload prohibited sexual, violent, hateful, illegal, infringing or privacy-violating content;", "додавати заборонений сексуальний, насильницький, ворожий, незаконний контент або матеріали, що порушують права чи приватність;")}</li>
        <li>${tx("automate, scrape, reverse engineer, overload, disrupt or bypass security or access controls except where law expressly permits;", "автоматизувати, збирати дані, здійснювати реверс-інжиніринг, перевантажувати, порушувати роботу чи обходити безпеку й контроль доступу, крім прямо дозволених законом випадків;")}</li>
        <li>${tx("falsify time, replay offline operations, manipulate progress, exploit a bug or obtain virtual items without authorization;", "підробляти час, повторно відтворювати офлайн-операції, маніпулювати прогресом, використовувати помилки чи отримувати віртуальні предмети без дозволу;")}</li>
        <li>${tx("evade a block, suspension, room PIN or moderation decision.", "обходити блокування, призупинення, PIN-код кімнати або рішення модерації.")}</li>
      </ul>`,
    },
    {
      id: "advertising-terms",
      title: { en: "7. Advertising", uk: "7. Реклама" },
      body: `<p>${tx("The service may show consent-aware advertising. Ads are provided by third parties and may be governed by their terms and privacy policies. We do not endorse an advertised product merely by displaying an ad.", "Сервіс може показувати рекламу з урахуванням згоди. Її надають треті сторони, і на неї можуть поширюватися їхні умови та політики конфіденційності. Показ реклами не означає, що ми рекомендуємо рекламований продукт.")}</p>`,
    },
    {
      id: "enforcement",
      title: { en: "8. Suspension, termination and deletion", uk: "8. Призупинення, припинення й видалення" },
      body: `<p>${tx("We may reject content, remove access to a room, limit features, suspend or terminate an account when reasonably necessary to address a violation, safety risk, fraud, legal request or threat to the service. Urgent risks may require action before notice. You may appeal through the ", "Ми можемо відхилити контент, закрити доступ до кімнати, обмежити функції, призупинити або припинити акаунт, якщо це обґрунтовано потрібно через порушення, ризик для безпеки, шахрайство, юридичний запит чи загрозу сервісу. Невідкладні ризики можуть вимагати дій до повідомлення. Оскарження можна подати через ")}<a href="../support/">${tx("Support page", "сторінку підтримки")}</a>.</p>
      <p>${tx("You may stop using the service or delete your account at any time through the ", "Ти можеш припинити користування сервісом або видалити акаунт у будь-який момент через ")}<a href="../account-deletion/">${tx("Account Deletion process", "процес видалення акаунта")}</a>. ${tx("Sections that by their nature should survive — including intellectual property, preserved safety records, disclaimers and dispute terms — remain in effect where lawful.", "Розділи, які за своєю природою мають діяти далі, зокрема про інтелектуальну власність, збережені матеріали безпеки, застереження та вирішення спорів, залишаються чинними, якщо це законно.")}</p>`,
    },
    {
      id: "intellectual-property",
      title: { en: "9. Intellectual property", uk: "9. Інтелектуальна власність" },
      body: `<p>${tx("Habit Duel, its software, visual design, brand assets, characters and non-user content are owned by the operator or its licensors and protected by applicable law. These Terms grant only a limited, personal, revocable, non-exclusive and non-transferable right to use the service as intended.", "Habit Duel, його програмне забезпечення, дизайн, бренд-матеріали, персонажі та контент, що не належить користувачам, належать оператору чи ліцензіарам і захищені законом. Ці Умови надають лише обмежене, особисте, відкличне, невиключне й непередаване право користуватися сервісом за призначенням.")}</p>
      <p>${tx("Send copyright or trademark notices through the Support page.", "Надсилай повідомлення про авторське право чи торговельні марки через сторінку підтримки.")}</p>`,
    },
    {
      id: "disclaimers",
      title: { en: "10. Availability, warranty and liability", uk: "10. Доступність, гарантії та відповідальність" },
      body: `<p>${tx("To the maximum extent permitted by applicable law, the service is provided on an “as is” and “as available” basis. We do not promise uninterrupted operation, permanent availability of a feature, a particular personal result or error-free synchronization. Mandatory statutory guarantees remain unaffected.", "У максимальному обсязі, дозволеному законом, сервіс надається «як є» та «за наявності». Ми не обіцяємо безперервну роботу, постійну доступність функції, конкретний особистий результат або синхронізацію без помилок. Обов’язкові законні гарантії не обмежуються.")}</p>
      <p>${tx("Nothing in these Terms excludes or limits rights or liability that cannot lawfully be excluded or limited.", "Ніщо в цих Умовах не виключає й не обмежує права або відповідальність, які за законом не можна виключити чи обмежити.")}</p>`,
    },
    {
      id: "law-changes-contact",
      title: { en: "11. Law, changes and contact", uk: "11. Право, зміни та контакти" },
      body: `<p>${tx("These Terms are governed by the law applicable to the operator and user, including mandatory consumer protections. Nothing here removes mandatory consumer rights or the right to use a competent local forum where the law provides it.", "Ці Умови регулюються законодавством, застосовним до оператора й користувача, включно з обов’язковим захистом споживачів. Ніщо тут не скасовує обов’язкові права споживача або право звернутися до компетентного місцевого органу, якщо це передбачено законом.")}</p>
      <p>${tx("We may update these Terms. Material changes will be communicated in an appropriate way, and renewed acceptance may be required before continued use of social features.", "Ми можемо оновлювати ці Умови. Про суттєві зміни буде повідомлено належним способом, а для подальшого використання соціальних функцій може знадобитися повторне прийняття.")}</p>
      <p>${tx("The operator is identified at the top of this page. Send support and legal notices through the ", "Оператора вказано у верхній частині цієї сторінки. Надсилай звернення до підтримки та юридичні повідомлення через ")}<a href="../support/">${tx("Support page", "сторінку підтримки")}</a>.</p>`,
    },
  ],
};
termsPage.render = renderLegalPage(termsPage);

const communityPage = {
  id: "community-guidelines",
  route: "/community-guidelines/",
  output: "community-guidelines/index.html",
  label: { en: "Community Guidelines", uk: "Правила спільноти" },
  heading: { en: "Community Guidelines", uk: "Правила спільноти" },
  lead: {
    en: "Clear standards for profiles, habits visible to others, rooms, invitations and every shared surface.",
    uk: "Зрозумілі правила для профілів, видимих звичок, кімнат, запрошень і всіх спільних розділів.",
  },
  title: {
    en: "Community Guidelines — Habit Duel",
    uk: "Правила спільноти — Habit Duel",
  },
  description: {
    en: "Habit Duel rules for user-generated content, safety, reports, blocking, moderation and appeals.",
    uk: "Правила Habit Duel щодо контенту користувачів, безпеки, скарг, блокування, модерації та оскарження.",
  },
  meta: [
    { label: { en: "Effective date", uk: "Дата набрання чинності" }, value: tx("July 26, 2026", "26 липня 2026") },
    { label: { en: "Safety contact", uk: "Контакт із безпеки" }, value: publication.contact },
  ],
  intro: {
    en: "Habit Duel should be useful, respectful and safe. These Guidelines apply to names, avatars, profile text, visible habit content, room names and descriptions, invitations, reports and other content shared with at least one other person.",
    uk: "Habit Duel має бути корисним, поважним і безпечним. Ці Правила стосуються імен, аватарів, тексту профілю, видимого контенту звичок, назв і описів кімнат, запрошень, скарг та іншого контенту, доступного хоча б одній іншій людині.",
  },
  sections: [
    {
      id: "principles",
      title: { en: "1. Our principles", uk: "1. Наші принципи" },
      body: `<ul><li>${tx("Respect people and their privacy.", "Поважай людей і їхню приватність.")}</li><li>${tx("Share only content you have the right to use.", "Поширюй лише контент, на який маєш право.")}</li><li>${tx("Use rooms and social tools for genuine habit support, not manipulation or harm.", "Використовуй кімнати й соціальні інструменти для справжньої підтримки звичок, а не для маніпуляцій чи шкоди.")}</li><li>${tx("Do not exploit safety, reporting, virtual rewards or visibility controls.", "Не зловживай інструментами безпеки, скарг, віртуальними нагородами чи налаштуваннями видимості.")}</li></ul>
      <p>${tx("Read these Guidelines together with the ", "Ці Правила слід читати разом з ")}<a href="../terms/">${tx("Terms of Service", "Умовами користування")}</a>.</p>`,
    },
    {
      id: "not-allowed",
      title: { en: "2. Content and conduct not allowed", uk: "2. Заборонений контент і поведінка" },
      body: `<h3>${tx("Child exploitation and sexual harm", "Експлуатація дітей і сексуальна шкода")}</h3><p>${tx("Child sexual abuse or exploitation material, grooming, sexualization of minors, trafficking, sextortion, non-consensual intimate content, predatory behavior or links that facilitate such conduct are strictly prohibited.", "Матеріали сексуального насильства чи експлуатації дітей, грумінг, сексуалізація неповнолітніх, торгівля людьми, сексуальне вимагання, інтимний контент без згоди, хижацька поведінка або посилання, що сприяють таким діям, суворо заборонені.")}</p>
      <h3>${tx("Violence and dangerous conduct", "Насильство й небезпечна поведінка")}</h3><p>${tx("Do not make credible threats, praise terrorism, incite violence, provide instructions for serious harm or use Habit Duel to organize illegal activity.", "Не погрожуй реальною шкодою, не прославляй тероризм, не підбурюй до насильства, не надавай інструкцій для серйозної шкоди й не використовуй Habit Duel для організації незаконних дій.")}</p>
      <h3>${tx("Harassment, hate and privacy abuse", "Переслідування, ненависть і порушення приватності")}</h3><p>${tx("Harassment, bullying, stalking, doxxing, unwanted sexual conduct, attacks based on protected characteristics or disclosure of another person’s private information are not allowed.", "Переслідування, цькування, стеження, доксинг, небажана сексуальна поведінка, напади за захищеними ознаками або розкриття приватної інформації іншої людини заборонені.")}</p>
      <h3>${tx("Fraud, spam and manipulation", "Шахрайство, спам і маніпуляції")}</h3><p>${tx("Do not impersonate, scam, phish, distribute malicious links, send repetitive or unwanted invitations, coordinate fake engagement, manipulate room progress or evade moderation.", "Не видавай себе за інших, не шахраюй, не збирай дані через фішинг, не поширюй шкідливі посилання, не надсилай повторні небажані запрошення, не координуй фальшиву активність, не маніпулюй прогресом кімнати й не обходь модерацію.")}</p>
      <h3>${tx("Illegal or infringing content", "Незаконний контент і порушення прав")}</h3><p>${tx("Do not upload or link to illegal material or content that infringes copyright, trademarks, publicity, privacy or other rights.", "Не додавай і не поширюй посилання на незаконні матеріали або контент, що порушує авторське право, торговельні марки, право на ім’я, приватність чи інші права.")}</p>`,
    },
    {
      id: "report-block",
      title: { en: "3. Report and block", uk: "3. Скарги й блокування" },
      body: `<p>${tx("You can report a user, a visible habit card or a room from its action menu. Choose the most relevant reason and provide concise context. Available report categories include harassment, hate speech, sexual content, violence, spam, impersonation, privacy and other violations.", "На користувача, видиму картку звички або кімнату можна поскаржитися через меню дій. Обери найбільш відповідну причину й коротко опиши контекст. Категорії включають переслідування, мову ворожнечі, сексуальний контент, насильство, спам, видавання себе за іншу особу, порушення приватності та інші порушення.")}</p>
      <p>${tx("You can block another user. Blocking removes friendship and pending social requests and hides affected discovery or contact surfaces. When reporting a room, you may leave that room as part of the safety flow.", "Можна заблокувати іншого користувача. Блокування видаляє дружбу й незавершені соціальні запити та приховує відповідні розділи пошуку чи контакту. Під час скарги на кімнату можна вийти з неї в межах процесу безпеки.")}</p>
      <div class="callout callout-danger"><strong>${tx("Immediate danger", "Негайна небезпека")}</strong><p>${tx("Habit Duel is not an emergency service. If someone is in immediate danger, contact the local emergency services or competent authority first, then report the account or room when it is safe to do so.", "Habit Duel не є екстреним сервісом. Якщо комусь загрожує безпосередня небезпека, спершу звернися до місцевих екстрених служб або компетентного органу, а потім поскаржся на акаунт чи кімнату, коли це безпечно.")}</p></div>`,
    },
    {
      id: "moderation",
      title: { en: "4. Review and enforcement", uk: "4. Розгляд і заходи" },
      body: `<p>${tx("Authorized moderators can review reported user, visible habit-card or room information, the report reason and description, and a limited snapshot of the relevant profile, card or room details. Depending on context, actions may include content rejection or removal, warnings, room or invitation restrictions, temporary suspension, permanent account suspension, preservation of evidence and legally required reporting.", "Уповноважені модератори можуть переглядати дані користувача, видимої картки звички чи кімнати, на які поскаржилися, причину та опис скарги й обмежений знімок відповідного профілю, картки або кімнати. Залежно від обставин заходи можуть включати відхилення або видалення контенту, попередження, обмеження кімнати чи запрошень, тимчасове або постійне призупинення акаунта, збереження доказів і обов’язкове повідомлення компетентним органам.")}</p>
      <p>${tx("We consider severity, context, repetition, intent, risk and prior enforcement. An urgent safety risk may lead to immediate restriction before notice.", "Ми враховуємо серйозність, контекст, повторюваність, намір, ризик і попередні заходи. Невідкладна загроза безпеці може спричинити негайне обмеження до повідомлення.")}</p>`,
    },
    {
      id: "appeals",
      title: { en: "5. Appeals and mistakes", uk: "5. Оскарження й помилки" },
      body: `<p>${tx("If you believe an enforcement decision was wrong, submit an appeal through the ", "Якщо вважаєш рішення помилковим, подай оскарження через ")}<a href="../support/">${tx("Support page", "сторінку підтримки")}</a>. ${tx("Include the account email, relevant room or report details and why you believe the decision should change. Do not resend prohibited content through ordinary email.", "Укажи email акаунта, відповідні дані кімнати чи скарги та поясни, чому рішення слід змінити. Не пересилай заборонений контент звичайною електронною поштою.")}</p>`,
    },
    {
      id: "child-safety-community",
      title: { en: "6. Child safety", uk: "6. Безпека дітей" },
      body: `<p>${tx("Habit Duel has zero tolerance for child sexual abuse and exploitation. Child sexual abuse or exploitation material—real, generated, altered or illustrated—plus grooming, sexualization of minors, sextortion, trafficking, solicitation, requests, offers, links or instructions that facilitate such conduct are strictly prohibited. Do not upload, request, store, share or link to this material, including through profiles, habit names, rooms or invitations. We may immediately remove content, restrict rooms, suspend accounts, preserve necessary evidence and report apparent offences to competent authorities where required by law.", "Habit Duel має нульову толерантність до сексуального насильства та експлуатації дітей. Суворо заборонені матеріали сексуального насильства чи експлуатації дітей — реальні, згенеровані, змінені або ілюстровані, — а також грумінг, сексуалізація неповнолітніх, сексуальне вимагання, торгівля людьми, схиляння, запити, пропозиції, посилання чи інструкції, що сприяють таким діям. Заборонено завантажувати, запитувати, зберігати, поширювати чи додавати посилання на такі матеріали, зокрема у профілях, назвах звичок, кімнатах або запрошеннях. Ми можемо негайно видалити контент, обмежити кімнати, призупинити акаунти, зберегти необхідні докази та повідомити компетентні органи, якщо цього вимагає закон.")}</p>`,
    },
    {
      id: "privacy-evidence",
      title: { en: "7. Privacy and evidence", uk: "7. Приватність і докази" },
      body: `<p>${tx("Reports should contain only information needed for review. Do not publicly investigate, redistribute or save illegal material. Habit Duel may preserve a limited report snapshot and related records only as long as reasonably needed for safety, dispute handling and legal compliance.", "Скарги мають містити лише інформацію, потрібну для розгляду. Не розслідуй публічно, не поширюй і не зберігай незаконні матеріали. Habit Duel може зберігати обмежений знімок скарги та пов’язані записи лише стільки, скільки обґрунтовано потрібно для безпеки, вирішення спорів і виконання закону.")}</p>
      <p>${tx("For more information, read the ", "Докладніше дивись у ")}<a href="../privacy-policy/">${tx("Privacy Policy", "Політиці конфіденційності")}</a>.</p>`,
    },
    {
      id: "contact-community",
      title: { en: "8. Contact", uk: "8. Контакти" },
      body: `<p>${tx("Use the safety contact shown at the top of this page or the ", "Скористайся контактом із безпеки у верхній частині сторінки або ")}<a href="../support/">${tx("Support page", "сторінкою підтримки")}</a> ${tx("for safety reports and appeals.", "для скарг щодо безпеки й оскаржень.")}</p>`,
    },
  ],
};
communityPage.render = renderLegalPage(communityPage);

const notFoundPage = {
  id: "not-found",
  route: "/404.html",
  output: "404.html",
  standalone: true,
  excludeFromSitemap: true,
  title: { en: "Page not found — Habit Duel", uk: "Сторінку не знайдено — Habit Duel" },
  description: {
    en: "The requested Habit Duel page could not be found.",
    uk: "Не вдалося знайти запитану сторінку Habit Duel.",
  },
  render: ({ prefix }) => `<section class="not-found">
    <div class="not-found-card">
      <img src="${prefix}assets/brand-mark.png" width="92" height="92" alt="" style="margin:0 auto 28px" />
      <p class="not-found-code">404</p>
      <h1>${tx("This page slipped out of the streak.", "Ця сторінка випала із серії.")}</h1>
      <p>${tx("The address may be outdated or incomplete. Return home and continue from there.", "Адреса може бути застарілою або неповною. Повернися на головну й продовж звідти.")}</p>
      <a class="button button-primary" href="${prefix}">${tx("Back to home", "На головну")}${icon("arrow")}</a>
      <div class="language-switcher" style="width:max-content;margin:22px auto 0" aria-label="Language"><button class="language-button" type="button" data-language-option="en" aria-pressed="true">EN</button><button class="language-button" type="button" data-language-option="uk" aria-pressed="false">UA</button></div>
    </div>
  </section>`,
};

export const pages = [
  homePage,
  privacyPage,
  deletionPage,
  supportPage,
  termsPage,
  communityPage,
  notFoundPage,
];
