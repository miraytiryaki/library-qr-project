@echo off
echo.
echo ========================================
echo   SUNUCU DURDURULUYOR
echo ========================================
echo.

REM Port 8000'i kullanan Python süreçlerini bul ve durdur
for /f "tokens=2" %%a in ('netstat -ano ^| findstr :8000 ^| findstr LISTENING') do (
    echo Port 8000'i kullanan surec bulundu: %%a
    taskkill /F /PID %%a >nul 2>&1
    if errorlevel 1 (
        echo Hata: Surec durdurulamadi
    ) else (
        echo [OK] Surec durduruldu
    )
)

REM Python süreçlerini de kontrol et
taskkill /F /IM python.exe >nul 2>&1
if errorlevel 1 (
    echo Python sureci bulunamadi veya zaten durdurulmus
) else (
    echo [OK] Python surecleri durduruldu
)

echo.
echo Sunucu durduruldu. Simdi BASLAT.bat dosyasini calistirabilirsiniz.
echo.
pause

