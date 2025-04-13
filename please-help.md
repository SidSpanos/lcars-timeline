# Step into your dev folder
cd D:\xampp\htdocs\apps

# Create and enter project folder
mkdir lcars-timeline && cd lcars-timeline

# Init Node project
npm init -y

# Install core dependencies
npm install express ejs

# Dev tools (optional but useful)
npm install -D nodemon sass

# Create project structure
mkdir -p server views views/partials public/css public/js public/images public/data public/music public/loader

# Main entry point
echo "const express = require('express');\nconst app = express();\napp.set('view engine', 'ejs');\napp.set('views', 'views');\napp.use(express.static('public'));\napp.get('/', (req, res) => res.render('index'));\napp.listen(3000, () => console.log('🚀 LCARS Timeline running at http://localhost:3000'));" > server/index.js

# Create base view
echo "<!DOCTYPE html>\n<html lang='en'>\n<%- include('partials/head') %>\n<body>\n<%- include('partials/main') %>\n</body>\n</html>" > views/index.ejs

# Create partials
echo "<meta charset='UTF-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n<title>LCARS Timeline</title>\n<link rel='stylesheet' href='/css/style.css'>\n<script src='/js/main.js' defer></script>" > views/partials/head.ejs

echo "<header>🎶 LCARS Timeline</header>\n<main id='app'>Loading...</main>" > views/partials/main.ejs

# Touch starter files
echo "console.log('LCARS engaged');" > public/js/main.js
echo "/* LCARS Styles */" > public/css/style.scss
echo "System booting..." > public/loader/loading_intro.txt

# Setup optional start scripts
npm set-script dev "nodemon server/index.js"
npm set-script sass "sass public/css/style.scss public/css/style.css --watch"

echo ✅ All systems initialized. Run \"npm run dev\" and \"npm run sass\" in two terminals to start the LCARS timeline server.