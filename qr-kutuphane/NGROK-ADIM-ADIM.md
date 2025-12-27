# Ngrok Kurulum - Adım Adım Kılavuz

## 🎯 Amaç
Farklı internet ağlarından QR kodlara erişebilmek için ngrok kullanacağız.

## 📥 Adım 1: Ngrok İndirin

1. Tarayıcınızda şu adresi açın: **https://ngrok.com**
2. Sağ üstte **"Sign up"** butonuna tıklayın
3. Ücretsiz hesap oluşturun (e-posta ile kayıt olun)
4. Giriş yaptıktan sonra **"Download"** bölümüne gidin
5. **Windows** için ngrok indirin
6. İndirdiğiniz ZIP dosyasını açın
7. İçindeki **`ngrok.exe`** dosyasını kopyalayın

## 📁 Adım 2: Ngrok'u Proje Klasörüne Kopyalayın

1. `ngrok.exe` dosyasını şu klasöre kopyalayın:
   ```
   C:\Users\Asus\Desktop\qr-kutuphane\ngrok.exe
   ```
2. Dosyanın orada olduğundan emin olun

## 🔑 Adım 3: Token Alın

1. Tarayıcınızda şu adresi açın: **https://dashboard.ngrok.com**
2. Giriş yapın
3. Sol menüden **"Your Authtoken"** seçeneğine tıklayın
4. Token'ınızı kopyalayın (uzun bir metin olacak)

## ⚙️ Adım 4: Token'ı Yapılandırın

1. Komut satırını açın (cmd veya PowerShell)
2. Şu komutları sırayla çalıştırın:

```bash
cd C:\Users\Asus\Desktop\qr-kutuphane
ngrok config add-authtoken [TOKEN-BURAYA]
```

**ÖNEMLİ:** `[TOKEN-BURAYA]` yerine kopyaladığınız token'ı yazın!

Örnek:
```bash
cd C:\Users\Asus\Desktop\qr-kutuphane
ngrok config add-authtoken 2abc123def456ghi789jkl012mno345pqr678
```

## ✅ Adım 5: Test Edin

1. `BASLAT.bat` dosyasını çalıştırın (Python sunucusu başlasın)
2. `NGROK-BASLAT.bat` dosyasını çalıştırın
3. Konsolda bir URL göreceksiniz, örneğin:
   ```
   Forwarding  https://abc123.ngrok.io -> http://localhost:8000
   ```
4. Bu URL'yi kopyalayın (örn: `https://abc123.ngrok.io`)

## 📱 Adım 6: QR Kod Oluşturun

1. Tarayıcıda `http://localhost:8000` adresini açın
2. Bir kitabın detay sayfasına gidin
3. "Mobil/Internet için URL" alanına ngrok URL'sini girin:
   - Örnek: `https://abc123.ngrok.io`
   - VEYA sadece: `abc123.ngrok.io` (otomatik https:// eklenir)
4. "QR Kod Oluştur" butonuna tıklayın
5. QR kodu yazdırın ve kitabın üzerine yapıştırın

## 🎉 Sonuç

Artık QR kodlar **her yerden** çalışacak:
- ✅ Aynı Wi-Fi ağında
- ✅ Farklı Wi-Fi ağında
- ✅ Mobil veri ile
- ✅ İnternet bağlantısı olan her yerden!

## ⚠️ Önemli Notlar

- Ngrok ücretsiz versiyonunda URL her başlatmada değişir
- Her seferinde yeni URL'yi QR kod oluştururken girmeniz gerekir
- Ücretli ngrok ile sabit URL alabilirsiniz

## 🆘 Sorun Giderme

### "ngrok.exe bulunamadı" hatası
- `ngrok.exe` dosyasını proje klasörüne kopyaladığınızdan emin olun
- Dosya adının tam olarak `ngrok.exe` olduğundan emin olun

### "authtoken" hatası
- Token'ı doğru kopyaladığınızdan emin olun
- `ngrok config add-authtoken [TOKEN]` komutunu tekrar çalıştırın

### URL çalışmıyor
- Python sunucusunun çalıştığından emin olun (`BASLAT.bat`)
- Ngrok'un çalıştığından emin olun (`NGROK-BASLAT.bat`)

