@echo off
echo Stopping LCARS Timeline Development Environment...

:: Kill any running node processes
taskkill /F /IM node.exe
taskkill /F /IM cmd.exe /FI "WINDOWTITLE eq SASS Compiler"
taskkill /F /IM cmd.exe /FI "WINDOWTITLE eq Webpack"

echo Development environment stopped. 