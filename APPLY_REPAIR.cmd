@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is needed. Use the manual instructions in READ_ME_FIRST.txt instead.
  pause
  exit /b 1
)
node "%~dp0apply-repair.mjs"
pause
