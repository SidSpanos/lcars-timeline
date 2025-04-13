Step-by-Step Build Plan
🔥 Bootstrap App

Run the makefiles.bat

Install Express:
npm init -y && npm install express ejs

Run: node server/index.js

🧠 Modular EJS Layout

Move <head> code into partials/head.ejs

Main layout into partials/main.ejs

💅 SCSS + Build Tool

Optionally use vite or sass CLI to compile your SCSS:

bash
Copy
npm install -D sass
npx sass public/css/style.scss public/css/style.css --watch
📜 Move JS to main.js

Move all animation, event binding, and loading logic

Modularize functions like loadScene(), zoomIn(), etc.

🧬 Component-Driven Layout

Top: <section id="console">

Middle: <section id="timeline">

Bottom: <section id="info-panel">

Animate grid-row transitions using anime.js or GSAP

📁 Data Structure for Genres

Use public/data/hiphop.json, etc.

Or public/music/hiphop/article.txt and images folder as now

🧪 Hooking Data

Use fetch() in JS to load genre JSON/article content/images

