@echo off
cd /d "%~dp0"
start "" http://127.0.0.1:4321
node scripts/serve-build.mjs
pause
