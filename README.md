# Музей шахматных часов

Статический многостраничный сайт на Vite. Подходит для Cloudflare Pages.

## Страницы
- `/` — главная
- `/collection.html` — коллекция
- `/contacts.html` — контакты и форма, которая открывает почтовое приложение посетителя

## Публикация на Cloudflare Pages
В настройках Pages укажите:
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (корень репозитория)

Cloudflare автоматически установит зависимости из `package.json`.

## Локальный запуск
```bash
npm install
npm run dev
```

Проверка production-сборки:
```bash
npm run build
npm run preview
```

## Как заменить изображения
Положите фотографии в `public/images/` и замените пути в массиве `pieces` в `src/main.js`.
Сейчас используются локальные SVG-иллюстрации-заглушки, чтобы сайт сразу работал без сторонних изображений.

## Перед публикацией
1. В `src/main.js` замените `hello@chessclockmuseum.example` на действующий адрес музея (в двух местах).
2. Уточните адрес и часы посещения в `contacts.html`-разметке функции `contactsPage()` в `src/main.js`.
3. Замените демонстрационные иллюстрации на реальные фотографии экспонатов.
