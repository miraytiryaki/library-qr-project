@echo off
echo.
echo ========================================
echo   FIREWALL AYARLARI
echo   Port 8000 icin izin veriliyor...
echo ========================================
echo.

REM Windows Firewall'da port 8000'i ac
netsh advfirewall firewall add rule name="Kutuphane QR Kod Sistemi" dir=in action=allow protocol=TCP localport=8000

if errorlevel 1 (
    echo [HATA] Firewall kurali eklenemedi!
    echo Yonetici olarak calistirmayi deneyin.
) else (
    echo [OK] Firewall kurali eklendi!
    echo Port 8000 artik acik.
)

echo.
echo ========================================
echo   TEST
echo ========================================
echo.
echo Simdi su adresi deneyin:
echo http://[IP-ADRESINIZ]:8000
echo.
echo IP adresinizi ogrenmek icin: IP-BUL.bat
echo.
pause

