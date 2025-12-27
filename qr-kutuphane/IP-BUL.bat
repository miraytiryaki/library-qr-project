@echo off
echo.
echo ========================================
echo   BILGISAYARINIZIN IP ADRESI
echo ========================================
echo.
echo Wi-Fi veya Ethernet baglantinizin IP adresi:
echo.
ipconfig | findstr /i "IPv4"
echo.
echo ========================================
echo.
echo Bu IP adresini mobil cihazinizda kullanin:
echo http://[IP-ADRESI]:8000
echo.
echo Ornek: http://192.168.1.100:8000
echo.
pause

