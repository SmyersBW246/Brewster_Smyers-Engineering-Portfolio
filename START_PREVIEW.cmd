@echo off
cd /d "%~dp0"
start "" http://localhost:4321
node scripts/serve-build.mjs
pause
