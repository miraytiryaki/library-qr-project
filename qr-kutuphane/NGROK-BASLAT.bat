@echo off
title Ngrok - Internet Uzerinden Erisim
color 0B
echo.
echo ========================================
echo   NGROK - INTERNET UZERINDEN ERISIM
echo ========================================
echo.

REM Ngrok'un yuklu olup olmadigini kontrol et
if not exist "ngrok.exe" (
    echo [HATA] ngrok.exe dosyasi bulunamadi!
    echo.
    echo ========================================
    echo   NGROK KURULUMU GEREKLI
    echo ========================================
    echo.
    echo LUTFEN ASAGIDAKI ADIMLARI IZLEYIN:
    echo.
    echo 1. https://ngrok.com adresinden ngrok indirin
    echo 2. Ucretsiz hesap olusturun
    echo 3. ngrok.exe dosyasini bu klasore kopyalayin:
    echo    C:\Users\Asus\Desktop\qr-kutuphane\ngrok.exe
    echo 4. https://dashboard.ngrok.com adresinden token alin
    echo 5. Komut satirinda su komutu calistirin:
    echo    ngrok config add-authtoken [TOKEN]
    echo.
    echo DETAYLI KILAVUZ: NGROK-ADIM-ADIM.md dosyasini okuyun
    echo.
    echo ========================================
    echo.
    pause
    exit /b 1
)

echo [OK] ngrok.exe bulundu
echo.

REM Port 8000'i kullanan eski ngrok'u durdur
taskkill /F /IM ngrok.exe >nul 2>&1
timeout /t 1 >nul

echo Sunucu baslatiliyor...
echo.

REM Once Python sunucusunu baslat (arka planda)
start /B python server.py

REM Kisa bir bekleme
timeout /t 2 >nul

echo.
echo ========================================
echo   NGROK BASLATILIYOR
echo ========================================
echo.
echo Sunucu calisiyor: http://localhost:8000
echo.
echo Ngrok URL'si asagida gorunecek...
echo Bu URL'yi kullanarak her yerden erisebilirsiniz!
echo.
echo ========================================
echo.

REM Ngrok'u baslat
ngrok http 8000

pause

