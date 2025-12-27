# Ngrok Kurulum ve Kullanım Kılavuzu

## Ngrok Nedir?

Ngrok, yerel sunucunuzu internet üzerinden erişilebilir hale getiren bir araçtır. Bu sayede:
- ✅ Farklı internet ağlarından erişebilirsiniz
- ✅ QR kodlar her yerden çalışır
- ✅ Aynı Wi-Fi ağında olmanıza gerek yok

## Kurulum Adımları

### 1. Ngrok İndirin
1. https://ngrok.com adresine gidin
2. "Sign up" ile ücretsiz hesap oluşturun
3. "Download" bölümünden Windows için ngrok indirin
4. İndirdiğiniz `ngrok.exe` dosyasını proje klasörüne kopyalayın:
   ```
   C:\Users\Asus\Desktop\qr-kutuphane\ngrok.exe
   ```

### 2. Token Alın
1. https://dashboard.ngrok.com adresine gidin
2. Giriş yapın
3. "Your Authtoken" bölümünden token'ınızı kopyalayın

### 3. Token'ı Yapılandırın
Komut satırında (cmd) şu komutu çalıştırın:
```bash
cd C:\Users\Asus\Desktop\qr-kutuphane
ngrok config add-authtoken [TOKEN-BURAYA]
```
(TOKEN-BURAYA yerine aldığınız token'ı yazın)

### 4. Kullanım
1. `BASLAT.bat` dosyasını çalıştırın (Python sunucusu)
2. `NGROK-BASLAT.bat` dosyasını çalıştırın
3. Konsolda bir URL göreceksiniz (örn: `https://xxxx.ngrok.io`)
4. Bu URL'yi kullanarak her yerden erişebilirsiniz!

## QR Kod Oluşturma

### Önemli:
QR kodları oluştururken ngrok URL'sini kullanın:

1. `NGROK-BASLAT.bat` çalıştırıldıktan sonra
2. Konsolda gösterilen URL'yi kopyalayın (örn: `https://xxxx.ngrok.io`)
3. Kitap detay sayfasında "Mobil için IP Adresi" alanına bu URL'yi girin
4. QR kod oluşturun
5. Bu QR kod her yerden çalışacak!

## Avantajlar

- ✅ Farklı internet ağlarından erişilebilir
- ✅ QR kodlar her yerden çalışır
- ✅ Aynı Wi-Fi ağında olmanıza gerek yok
- ✅ Ücretsiz

## Dezavantajlar

- ⚠️ Ücretsiz versiyonda URL her başlatmada değişir
- ⚠️ İnternet bağlantısı gerektirir
- ⚠️ Ücretsiz versiyonda bazı limitler var

## Alternatif: Ücretli Ngrok

Ücretli ngrok ile:
- Sabit URL (her zaman aynı)
- Daha fazla özellik
- Daha hızlı

## Sorun Giderme

### "ngrok.exe bulunamadı" hatası
- `ngrok.exe` dosyasını proje klasörüne kopyaladığınızdan emin olun

### "authtoken" hatası
- Token'ı doğru yapılandırdığınızdan emin olun
- `ngrok config add-authtoken [TOKEN]` komutunu çalıştırın

### URL çalışmıyor
- Python sunucusunun çalıştığından emin olun (`BASLAT.bat`)
- Ngrok'un çalıştığından emin olun (`NGROK-BASLAT.bat`)

