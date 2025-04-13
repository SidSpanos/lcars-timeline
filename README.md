# LCARS Timeline

An interactive timeline interface inspired by the LCARS (Library Computer Access/Retrieval System) design from Star Trek. Built with React, Node.js, and SQLite.

## 🚀 Features

- LCARS-inspired UI/UX design
- Interactive timeline visualization
- Smooth animations using anime.js
- React-based frontend
- Express.js backend
- SQLite database for data persistence
- SCSS styling with hot reload
- Webpack bundling with hot module replacement

## 🛠️ Tech Stack

- Frontend:
  - React
  - anime.js for animations
  - SCSS for styling
- Backend:
  - Node.js
  - Express
  - SQLite with Sequelize ORM
- Development Tools:
  - Webpack
  - Babel
  - Nodemon
  - SASS compiler

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/lcars-timeline.git
   cd lcars-timeline
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create necessary directories:
   ```bash
   mkdir -p src/styles public/dist
   ```

## 🔧 Development

To start the development environment:

1. Windows:
   - Double-click `start-dev.bat`
   - This will start:
     - Node.js server with hot reload
     - SASS compiler in watch mode
     - Webpack in watch mode

2. Manual start:
   ```bash
   # Terminal 1
   npm run dev
   
   # Terminal 2
   npm run sass
   
   # Terminal 3
   npm run watch
   ```

To stop the development environment:
- Windows: Double-click `stop-dev.bat`
- Manual: Use Ctrl+C in each terminal window

## 🏗️ Project Structure

```
lcars-timeline/
├── src/                    # React source files
│   ├── components/         # React components
│   └── styles/            # Component-specific styles
├── server/                 # Backend files
│   ├── config/            # Configuration files
│   └── index.js           # Server entry point
├── public/                # Static files
│   ├── css/              # Compiled CSS
│   ├── dist/             # Webpack output
│   └── images/           # Image assets
├── views/                 # EJS templates
└── webpack.config.js      # Webpack configuration
```

## 🚀 Production Build

To create a production build:

```bash
npm run build
```

## 📝 License

[MIT License](LICENSE)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 