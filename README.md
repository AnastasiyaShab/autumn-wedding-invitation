# Свадебный сайт — Ангелина и Евгений

Сайт-приглашение на свадьбу Ангелины и Евгения в теплых осенних оттенках.

## Сайт

[Открыть сайт](https://angelina-evgeny-wedding.surge.sh/)

## Возможности

- Адаптивный дизайн для всех устройств.
- Таймер обратного отсчета.
- Программа и место проведения свадьбы.
- Карта с расположением площадки.
- Форма RSVP для подтверждения присутствия.
- Сохранение ответов в Google Sheets.

## Технологии

- React
- JavaScript
- CSS
- Create React App
- Google Apps Script
- Google Sheets
- Surge

## Структура проекта

```text
autumn_wedding_invitation/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── Story/
│   │   ├── Countdown/
│   │   ├── Schedule/
│   │   ├── Location/
│   │   ├── Details/
│   │   ├── RSVP/
│   │   └── Final/
│   ├── App.js
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```

## Запуск проекта

Необходимы Node.js и npm.

**1. Клонировать репозиторий**

```bash
git clone https://github.com/YOUR_USERNAME/autumn-wedding-invitation.git
```

**2. Перейти в папку проекта**

```bash
cd autumn-wedding-invitation
```

**3. Установить зависимости**

```bash
npm install
```

**4. Запустить локально**

```bash
npm start
```

Открыть сайт: [http://localhost:3000](http://localhost:3000)

Для остановки сервера нажать `Ctrl + C` в терминале.

## Сборка и публикация

**1. Создать production-сборку**

```bash
npm run build
```

Готовые файлы появятся в папке `build`.

**2. Опубликовать через Surge**

```bash
surge ./build angelina-evgeny-wedding.surge.sh
```

После публикации сайт будет доступен по адресу:

[https://angelina-evgeny-wedding.surge.sh/](https://angelina-evgeny-wedding.surge.sh/)

---

# Wedding Website — Angelina & Evgeny

A wedding invitation website for Angelina and Evgeny, designed in warm autumn tones.

## Website

[Visit the website](https://angelina-evgeny-wedding.surge.sh/)

## Features

- Responsive design for all devices.
- Wedding countdown.
- Wedding schedule and venue details.
- Location map.
- RSVP form.
- Responses saved to Google Sheets.

## Technologies

- React
- JavaScript
- CSS
- Create React App
- Google Apps Script
- Google Sheets
- Surge

## Project Structure

```text
autumn_wedding_invitation/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── App.js
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```

## Installation and Local Development

Requirements: Node.js and npm.

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/autumn-wedding-invitation.git
```

**2. Open the project folder**

```bash
cd autumn-wedding-invitation
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Press `Ctrl + C` in the terminal to stop the server.

## Build and Deployment

**1. Create a production build**

```bash
npm run build
```

The production files will be generated in the `build` folder.

**2. Deploy with Surge**

```bash
surge ./build angelina-evgeny-wedding.surge.sh
```

Website: [https://angelina-evgeny-wedding.surge.sh/](https://angelina-evgeny-wedding.surge.sh/)

