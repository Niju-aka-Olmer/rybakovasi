// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  clientId: process.env.TINA_CLIENT_ID || void 0,
  token: process.env.TINA_TOKEN || void 0,
  branch: process.env.TINA_BRANCH || "master",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─────────────────────────────────────────────
      // ГЛАВНАЯ СТРАНИЦА (одиночный документ)
      // ─────────────────────────────────────────────
      {
        name: "homepage",
        label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/"
        },
        match: { include: "homepage" },
        fields: [
          // --- HERO ---
          {
            type: "object",
            name: "hero",
            label: "Hero \u2014 \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",
            fields: [
              { type: "string", name: "eyebrow", label: "\u041D\u0430\u0434\u043F\u0438\u0441\u044C \u043D\u0430\u0434 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C", required: true },
              { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (HTML \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043D)", required: true, ui: { component: "textarea" } },
              { type: "string", name: "subtitle", label: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "\u041A\u043D\u043E\u043F\u043A\u0430 CTA: \u0442\u0435\u043A\u0441\u0442", required: true },
              { type: "string", name: "ctaUrl", label: "\u041A\u043D\u043E\u043F\u043A\u0430 CTA: \u0441\u0441\u044B\u043B\u043A\u0430", required: true },
              { type: "string", name: "waUrl", label: "WhatsApp \u0441\u0441\u044B\u043B\u043A\u0430" },
              { type: "string", name: "tgUrl", label: "Telegram \u0441\u0441\u044B\u043B\u043A\u0430" }
            ]
          },
          // --- ABOUT ---
          {
            type: "object",
            name: "about",
            label: "\u041E\u0431\u043E \u043C\u043D\u0435",
            fields: [
              { type: "string", name: "sectionLabel", label: "\u041C\u0435\u0442\u043A\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0430" },
              { type: "rich-text", name: "body", label: "\u0422\u0435\u043A\u0441\u0442 (rich-text)" },
              {
                type: "object",
                name: "stats",
                label: "\u0424\u0430\u043A\u0442\u044B \u0432 \u0446\u0438\u0444\u0440\u0430\u0445",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "\u0424\u0430\u043A\u0442" }) },
                fields: [
                  { type: "string", name: "value", label: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 (\u043D\u0430\u043F\u0440. 80+)" },
                  { type: "string", name: "label", label: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C" }
                ]
              }
            ]
          },
          // --- PORTFOLIO ---
          {
            type: "object",
            name: "portfolio",
            label: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
            fields: [
              { type: "string", name: "sectionLabel", label: "\u041C\u0435\u0442\u043A\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0430" },
              { type: "string", name: "heading", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0440\u0430\u0437\u0434\u0435\u043B\u0430" },
              {
                type: "object",
                name: "items",
                label: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "\u041F\u0440\u043E\u0435\u043A\u0442" }) },
                fields: [
                  { type: "string", name: "title", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430", required: true },
                  { type: "string", name: "area", label: "\u041F\u043B\u043E\u0449\u0430\u0434\u044C (\u043D\u0430\u043F\u0440. 120 \u043C\xB2)" },
                  { type: "string", name: "style", label: "\u0421\u0442\u0438\u043B\u044C \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430" },
                  { type: "image", name: "image", label: "\u0424\u043E\u0442\u043E" }
                ]
              }
            ]
          },
          // --- PROCESS ---
          {
            type: "object",
            name: "process",
            label: "\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0434\u0438\u0437\u0430\u0439\u043D-\u043F\u0440\u043E\u0435\u043A\u0442 (\u0448\u0430\u0433\u0438)",
            fields: [
              { type: "string", name: "heading", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0431\u043B\u043E\u043A\u0430" },
              {
                type: "object",
                name: "steps",
                label: "\u0428\u0430\u0433\u0438",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "\u0428\u0430\u0433" }) },
                fields: [
                  { type: "string", name: "num", label: "\u041D\u043E\u043C\u0435\u0440 (01, 02...)" },
                  { type: "string", name: "title", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0448\u0430\u0433\u0430", required: true },
                  { type: "string", name: "desc", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "extrasHeading", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \xAB\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\xBB" },
              {
                type: "object",
                name: "extras",
                label: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "\u0423\u0441\u043B\u0443\u0433\u0430" }) },
                fields: [
                  { type: "string", name: "title", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" },
                  { type: "string", name: "desc", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // --- PRICES ---
          {
            type: "object",
            name: "prices",
            label: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0438 \u0446\u0435\u043D\u044B",
            fields: [
              { type: "string", name: "heading", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "note", label: "\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435 \u043F\u043E\u0434 \u043F\u0440\u0430\u0439\u0441\u043E\u043C" },
              { type: "string", name: "ctaLabel", label: "\u041A\u043D\u043E\u043F\u043A\u0430: \u0442\u0435\u043A\u0441\u0442" },
              { type: "string", name: "ctaUrl", label: "\u041A\u043D\u043E\u043F\u043A\u0430: \u0441\u0441\u044B\u043B\u043A\u0430" },
              {
                type: "object",
                name: "items",
                label: "\u041F\u043E\u0437\u0438\u0446\u0438\u0438 \u043F\u0440\u0430\u0439\u0441\u0430",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "\u041F\u043E\u0437\u0438\u0446\u0438\u044F" }) },
                fields: [
                  { type: "string", name: "title", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438", required: true },
                  { type: "string", name: "price", label: "\u0426\u0435\u043D\u0430 (\u043D\u0430\u043F\u0440. 3 500)", required: true },
                  { type: "string", name: "unit", label: "\u0415\u0434\u0438\u043D\u0438\u0446\u0430 (\u20BD/\u043C\xB2, \u20BD/\u043C\u0435\u0441...)" },
                  { type: "boolean", name: "featured", label: "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C (\u0430\u043A\u0446\u0435\u043D\u0442)" }
                ]
              }
            ]
          },
          // --- CONTACTS ---
          {
            type: "object",
            name: "contacts",
            label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
            fields: [
              { type: "string", name: "name", label: "\u0418\u043C\u044F (\u043D\u0430\u043F\u0440. \u0420\u044B\u0431\u0430\u043A\u043E\u0432\u0430 \u0421\u0432\u0435\u0442\u043B\u0430\u043D\u0430)" },
              { type: "string", name: "phone", label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "address", label: "\u0410\u0434\u0440\u0435\u0441 / \u0433\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F" },
              { type: "string", name: "waUrl", label: "WhatsApp \u0441\u0441\u044B\u043B\u043A\u0430" },
              { type: "string", name: "tgUrl", label: "Telegram \u0441\u0441\u044B\u043B\u043A\u0430" },
              { type: "string", name: "waCtaText", label: "WhatsApp \u2014 \u0442\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438" },
              { type: "string", name: "tgCtaText", label: "Telegram \u2014 \u0442\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438" }
            ]
          },
          // --- SEO ---
          {
            type: "object",
            name: "seo",
            label: "SEO / \u041C\u0435\u0442\u0430-\u0442\u0435\u0433\u0438",
            fields: [
              { type: "string", name: "title", label: "Title \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B" },
              { type: "string", name: "description", label: "Meta description", ui: { component: "textarea" } },
              { type: "string", name: "keywords", label: "Keywords" },
              { type: "image", name: "ogImage", label: "OG Image (\u043F\u0440\u0435\u0432\u044C\u044E \u043F\u0440\u0438 \u0448\u0435\u0440\u0438\u043D\u0433\u0435)" }
            ]
          }
        ]
      },
      // ─────────────────────────────────────────────
      // ПАРТНЁРЫ
      // ─────────────────────────────────────────────
      {
        name: "partners",
        label: "\u041F\u0430\u0440\u0442\u043D\u0451\u0440\u044B",
        path: "content/pages",
        format: "json",
        match: { include: "partners" },
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { type: "string", name: "heading", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0440\u0430\u0437\u0434\u0435\u043B\u0430" },
          {
            type: "object",
            name: "items",
            label: "\u041F\u0430\u0440\u0442\u043D\u0451\u0440\u044B",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "\u041F\u0430\u0440\u0442\u043D\u0451\u0440" }) },
            fields: [
              { type: "string", name: "name", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0430" },
              { type: "image", name: "logo", label: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F" },
              { type: "string", name: "url", label: "\u0421\u0441\u044B\u043B\u043A\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)" }
            ]
          }
        ]
      },
      // ─────────────────────────────────────────────
      // НАСТРОЙКИ САЙТА (хедер, футер)
      // ─────────────────────────────────────────────
      {
        name: "settings",
        label: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0430\u0439\u0442\u0430",
        path: "content/pages",
        format: "json",
        match: { include: "settings" },
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { type: "string", name: "siteName", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 (\u043B\u043E\u0433\u043E)" },
          { type: "string", name: "siteTagline", label: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043B\u043E\u0433\u043E" },
          { type: "string", name: "footerCopyright", label: "\u041A\u043E\u043F\u0438\u0440\u0430\u0439\u0442 \u0432 \u0444\u0443\u0442\u0435\u0440\u0435" },
          {
            type: "object",
            name: "nav",
            label: "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "\u041F\u0443\u043D\u043A\u0442" }) },
            fields: [
              { type: "string", name: "label", label: "\u0422\u0435\u043A\u0441\u0442" },
              { type: "string", name: "href", label: "\u0421\u0441\u044B\u043B\u043A\u0430 (\u043D\u0430\u043F\u0440. /#about)" }
            ]
          },
          { type: "string", name: "whatsappNumber", label: "\u041D\u043E\u043C\u0435\u0440 WhatsApp (\u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B)" },
          { type: "string", name: "whatsappMessage", label: "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 WA" },
          { type: "string", name: "telegramHandle", label: "Telegram handle (\u0431\u0435\u0437 @)" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
