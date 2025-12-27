@echo off
title Kutuphane QR Kod Sistemi - Web Sunucusu
color 0A
echo.
echo ========================================
echo   KUTUPHANE QR KOD SISTEMI
echo   Web Sunucusu Baslatiliyor...
echo ========================================
echo.

REM Python kontrolu
python --version >nul 2>&1
if errorlevel 1 (
    echo [HATA] Python yuklu degil!
    echo.
    echo Lutfen Python'u yukleyin: https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

echo [OK] Python yuklu
echo.

REM Port 8000'i kullanan eski sunucuyu durdur
echo Eski sunucu kontrol ediliyor...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :8000 ^| findstr LISTENING') do (
    echo Eski sunucu bulundu, durduruluyor...
    taskkill /F /PID %%a >nul 2>&1
    timeout /t 1 >nul
)

echo.
echo Sunucu baslatiliyor...
echo.
echo ========================================
echo   ONEMLI BILGILER:
echo ========================================
echo.
echo 1. Tarayicida su adresi acin:
echo    http://localhost:8000
echo.
echo 2. Mobil cihazdan erisim icin:
echo    - IP adresiniz: 192.168.33.248 veya 192.168.54.244
echo    - Telefonunuzda: http://192.168.33.248:8000
echo    - Veya: http://192.168.54.244:8000
echo.
echo 3. Sunucuyu durdurmak icin: Ctrl+C
echo    Veya: DURDUR.bat dosyasini calistirin
echo.
echo ========================================
echo.

REM Sunucuyu baslat
python server.py

pause

