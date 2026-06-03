# rybakovasi.ru — Astro + TinaCMS

Сайт дизайнера интерьеров Светланы Рыбаковой.
Контент управляется через **TinaCMS** (локальная админка на `/admin`).

## Быстрый старт

```bash
npm install
npm run dev
```

Откроется:
- **Сайт** → http://localhost:4321
- **Админка TinaCMS** → http://localhost:4321/admin

## Структура

```
content/pages/
  homepage.json   ← весь контент главной страницы
  settings.json   ← шапка, навигация, футер
  partners.json   ← блок «Мои партнёры»

tina/
  config.ts       ← схема полей TinaCMS

src/
  components/     ← Header, Hero, About, Portfolio, Services, Partners, Contacts
  layouts/        ← BaseLayout.astro
  lib/content.ts  ← читает JSON-файлы
  styles/         ← global.css
  pages/          ← index, privacy, 404
```

## Что редактируется в админке

| Раздел | Поля |
|---|---|
| Hero | Eyebrow, заголовок, подзаголовок, CTA, соцсети |
| Обо мне | Rich-text текст, факты в цифрах |
| Портфолио | Проекты (фото, название, площадь, стиль) |
| Процесс | 7 шагов + дополнительные услуги |
| Услуги и цены | 6 ценовых карточек |
| Контакты | Телефон, email, адрес, ссылки WA/TG |
| Партнёры | Логотипы с ссылками |
| Настройки | Навигация, лого, копирайт |
| SEO | Title, description, keywords, OG-image |

## Добавить фото в портфолио

1. Залить фото в `/public/images/portfolio/`
2. В TinaCMS открыть **Главная страница → Портфолио → Проекты**
3. Выбрать проект, нажать поле «Фото» → загрузить файл

## Команды

```bash
npm run dev      # сайт + TinaCMS локально
npm run build    # продакшн-сборка → ./dist/
npm run preview  # предпросмотр сборки
```
