import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID || undefined,
  token: process.env.TINA_TOKEN || undefined,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [

      // ─────────────────────────────────────────────
      // ГЛАВНАЯ СТРАНИЦА (одиночный документ)
      // ─────────────────────────────────────────────
      {
        name: "homepage",
        label: "Главная страница",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/",
        },
        match: { include: "homepage" },
        fields: [

          // --- HERO ---
          {
            type: "object",
            name: "hero",
            label: "Hero — первый экран",
            fields: [
              { type: "string",  name: "eyebrow",     label: "Надпись над заголовком",   required: true },
              { type: "string",  name: "title",       label: "Заголовок (HTML разрешён)", required: true, ui: { component: "textarea" } },
              { type: "string",  name: "subtitle",    label: "Подзаголовок",             ui: { component: "textarea" } },
              { type: "string",  name: "ctaLabel",    label: "Кнопка CTA: текст",        required: true },
              { type: "string",  name: "ctaUrl",      label: "Кнопка CTA: ссылка",       required: true },
              { type: "string",  name: "waUrl",       label: "WhatsApp ссылка" },
              { type: "string",  name: "tgUrl",       label: "Telegram ссылка" },
            ],
          },

          // --- ABOUT ---
          {
            type: "object",
            name: "about",
            label: "Обо мне",
            fields: [
              { type: "string", name: "sectionLabel", label: "Метка раздела" },
              { type: "rich-text", name: "body",      label: "Текст (rich-text)" },
              {
                type: "object",
                name: "stats",
                label: "Факты в цифрах",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Факт" }) },
                fields: [
                  { type: "string", name: "value", label: "Значение (напр. 80+)" },
                  { type: "string", name: "label", label: "Подпись" },
                ],
              },
            ],
          },

          // --- PORTFOLIO ---
          {
            type: "object",
            name: "portfolio",
            label: "Портфолио",
            fields: [
              { type: "string", name: "sectionLabel", label: "Метка раздела" },
              { type: "string", name: "heading",      label: "Заголовок раздела" },
              {
                type: "object",
                name: "items",
                label: "Проекты",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Проект" }) },
                fields: [
                  { type: "string", name: "title",  label: "Название проекта",  required: true },
                  { type: "string", name: "area",   label: "Площадь (напр. 120 м²)" },
                  { type: "string", name: "style",  label: "Стиль интерьера" },
                  { type: "image",  name: "image",  label: "Фото" },
                ],
              },
            ],
          },

          // --- PROCESS ---
          {
            type: "object",
            name: "process",
            label: "Что входит в дизайн-проект (шаги)",
            fields: [
              { type: "string", name: "heading",    label: "Заголовок блока" },
              {
                type: "object",
                name: "steps",
                label: "Шаги",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Шаг" }) },
                fields: [
                  { type: "string", name: "num",   label: "Номер (01, 02...)" },
                  { type: "string", name: "title", label: "Название шага",    required: true },
                  { type: "string", name: "desc",  label: "Описание", ui: { component: "textarea" } },
                ],
              },
              { type: "string", name: "extrasHeading", label: "Заголовок «Дополнительно»" },
              {
                type: "object",
                name: "extras",
                label: "Дополнительные услуги",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Услуга" }) },
                fields: [
                  { type: "string", name: "title", label: "Название" },
                  { type: "string", name: "desc",  label: "Описание", ui: { component: "textarea" } },
                ],
              },
            ],
          },

          // --- PRICES ---
          {
            type: "object",
            name: "prices",
            label: "Услуги и цены",
            fields: [
              { type: "string", name: "heading", label: "Заголовок" },
              { type: "string", name: "note",    label: "Примечание под прайсом" },
              { type: "string", name: "ctaLabel", label: "Кнопка: текст" },
              { type: "string", name: "ctaUrl",   label: "Кнопка: ссылка" },
              {
                type: "object",
                name: "items",
                label: "Позиции прайса",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Позиция" }) },
                fields: [
                  { type: "string",  name: "title",    label: "Название услуги",   required: true },
                  { type: "string",  name: "price",    label: "Цена (напр. 3 500)", required: true },
                  { type: "string",  name: "unit",     label: "Единица (₽/м², ₽/мес...)" },
                  { type: "boolean", name: "featured", label: "Выделить (акцент)" },
                ],
              },
            ],
          },

          // --- CONTACTS ---
          {
            type: "object",
            name: "contacts",
            label: "Контакты",
            fields: [
              { type: "string", name: "name",      label: "Имя (напр. Рыбакова Светлана)" },
              { type: "string", name: "phone",     label: "Телефон" },
              { type: "string", name: "email",     label: "Email" },
              { type: "string", name: "address",   label: "Адрес / география" },
              { type: "string", name: "waUrl",     label: "WhatsApp ссылка" },
              { type: "string", name: "tgUrl",     label: "Telegram ссылка" },
              { type: "string", name: "waCtaText", label: "WhatsApp — текст кнопки" },
              { type: "string", name: "tgCtaText", label: "Telegram — текст кнопки" },
            ],
          },

          // --- SEO ---
          {
            type: "object",
            name: "seo",
            label: "SEO / Мета-теги",
            fields: [
              { type: "string", name: "title",       label: "Title страницы" },
              { type: "string", name: "description", label: "Meta description", ui: { component: "textarea" } },
              { type: "string", name: "keywords",    label: "Keywords" },
              { type: "image",  name: "ogImage",     label: "OG Image (превью при шеринге)" },
            ],
          },
        ],
      },

      // ─────────────────────────────────────────────
      // ПАРТНЁРЫ
      // ─────────────────────────────────────────────
      {
        name: "partners",
        label: "Партнёры",
        path: "content/pages",
        format: "json",
        match: { include: "partners" },
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "heading", label: "Заголовок раздела" },
          {
            type: "object",
            name: "items",
            label: "Партнёры",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Партнёр" }) },
            fields: [
              { type: "string", name: "name", label: "Название партнёра" },
              { type: "image",  name: "logo", label: "Логотип" },
              { type: "string", name: "url",  label: "Ссылка (необязательно)" },
            ],
          },
        ],
      },

      // ─────────────────────────────────────────────
      // НАСТРОЙКИ САЙТА (хедер, футер)
      // ─────────────────────────────────────────────
      {
        name: "settings",
        label: "Настройки сайта",
        path: "content/pages",
        format: "json",
        match: { include: "settings" },
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "siteName",       label: "Название сайта (лого)" },
          { type: "string", name: "siteTagline",    label: "Подзаголовок лого" },
          { type: "string", name: "footerCopyright", label: "Копирайт в футере" },
          {
            type: "object",
            name: "nav",
            label: "Навигация",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Пункт" }) },
            fields: [
              { type: "string", name: "label", label: "Текст" },
              { type: "string", name: "href",  label: "Ссылка (напр. /#about)" },
            ],
          },
          { type: "string", name: "whatsappNumber", label: "Номер WhatsApp (только цифры)" },
          { type: "string", name: "whatsappMessage", label: "Приветственное сообщение WA" },
          { type: "string", name: "telegramHandle",  label: "Telegram handle (без @)" },
        ],
      },

    ],
  },
});
