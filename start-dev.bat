@echo off
echo Starting LCARS Timeline Development Environment...

:: Start SASS compiler in a new window
start "SASS Compiler" cmd /k "npm run sass"

:: Start webpack in watch mode in a new window
start "Webpack" cmd /k "npm run watch"

:: Start development server in this window
npm run dev 