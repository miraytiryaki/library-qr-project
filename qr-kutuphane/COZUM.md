# QR Kod Mobil Erişim Sorunu - Çözüm

## Sorun
Mobil cihazdan `http://192.168.x.x:8000` adresine erişilemiyor.

## Olası Nedenler ve Çözümler

### 1. Firewall Engelliyor
**Çözüm:**
- `FIREWALL-AC.bat` dosyasına **sağ tıklayın**
- **"Yönetici olarak çalıştır"** seçeneğini seçin
- Bu, Windows Firewall'da port 8000'i açar

### 2. Bilgisayar ve Telefon Farklı Ağlarda
**Kontrol:**
- Bilgisayarınız Wi-Fi'ye bağlı mı? (Ethernet değil)
- Telefonunuz aynı Wi-Fi ağına bağlı mı?
- Farklı ağlardaysanız, aynı Wi-Fi'ye bağlayın

### 3. IP Adresi Yanlış
**Kontrol:**
- `IP-BUL.bat` dosyasını çalıştırın
- Aktif IP adresinizi kontrol edin
- Wi-Fi bağlantısının IP'sini kullanın (genellikle 192.168.x.x)

### 4. Alternatif Çözüm: ngrok (İnternet Üzerinden Erişim)

Eğer yukarıdaki çözümler işe yaramazsa, ngrok kullanabilirsiniz:

1. https://ngrok.com adresinden ngrok indirin
2. Hesap oluşturun (ücretsiz)
3. `ngrok http 8000` komutunu çalıştırın
4. Verilen URL'yi (örn: https://xxxx.ngrok.io) kullanın
5. Bu URL her yerden çalışır (aynı ağda olmanıza gerek yok)

**Avantaj:** Aynı Wi-Fi ağında olmanıza gerek yok, internet üzerinden erişilebilir.

### 5. En Basit Çözüm: USB ile Mobil Erişim

Eğer hiçbiri çalışmıyorsa:
1. Telefonunuzu USB ile bilgisayara bağlayın
2. Telefonunuzda "USB Debugging" veya "USB Tethering" açın
3. Bilgisayarınızın IP adresini kullanın
4. Bu yöntemle aynı ağda olmanıza gerek yok

## Adım Adım Test

1. ✅ Sunucu çalışıyor mu?
   - `BASLAT.bat` çalıştırıldı mı?
   - Konsolda "Sunucu çalışıyor" yazıyor mu?

2. ✅ Firewall açık mı?
   - `FIREWALL-AC.bat` yönetici olarak çalıştırıldı mı?

3. ✅ Aynı ağda mı?
   - Bilgisayar ve telefon aynı Wi-Fi'ye bağlı mı?

4. ✅ IP adresi doğru mu?
   - `IP-BUL.bat` ile kontrol edin
   - Wi-Fi bağlantısının IP'sini kullanın

5. ✅ Test edin:
   - Bilgisayarda: `http://localhost:8000` çalışıyor mu?
   - Telefonda: `http://[IP]:8000` çalışıyor mu?

## Hızlı Test Komutu

Telefonunuzdan şu adresi deneyin (IP adresinizi değiştirin):
```
http://192.168.33.248:8000
```

Eğer hala çalışmıyorsa, `FIREWALL-AC.bat` dosyasını **yönetici olarak** çalıştırın.

