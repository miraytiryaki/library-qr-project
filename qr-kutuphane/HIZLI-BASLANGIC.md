# 🚀 Hızlı Başlangıç - Farklı Ağlardan Erişim

## 🎯 Amacınız
QR kod okutulduğunda, **hangi internet ağından olursa olsun** kitap bilgileri görünsün.

## ✅ Çözüm: Ngrok Kullanımı

### Adım 1: Ngrok İndirin ve Kurun

1. **https://ngrok.com** adresine gidin
2. **"Sign up"** ile ücretsiz hesap oluşturun
3. **Windows** için ngrok indirin
4. ZIP dosyasını açın, **`ngrok.exe`** dosyasını şu klasöre kopyalayın:
   ```
   C:\Users\Asus\Desktop\qr-kutuphane\ngrok.exe
   ```

### Adım 2: Token Yapılandırın

1. **https://dashboard.ngrok.com** adresine gidin
2. **"Your Authtoken"** bölümünden token'ınızı kopyalayın
3. Komut satırında şu komutları çalıştırın:

```bash
cd C:\Users\Asus\Desktop\qr-kutuphane
ngrok config add-authtoken [TOKEN-BURAYA]
```

(TOKEN-BURAYA yerine kopyaladığınız token'ı yazın)

### Adım 3: Sunucuları Başlatın

1. **`BASLAT.bat`** dosyasını çalıştırın (Python sunucusu)
2. **`NGROK-BASLAT.bat`** dosyasını çalıştırın (Ngrok)
3. Konsolda bir URL göreceksiniz, örneğin:
   ```
   Forwarding  https://abc123.ngrok.io -> http://localhost:8000
   ```
4. Bu URL'yi kopyalayın: **`https://abc123.ngrok.io`**

### Adım 4: QR Kod Oluşturun

1. Tarayıcıda `http://localhost:8000` adresini açın
2. Bir kitabın detay sayfasına gidin
3. **"Mobil/Internet için URL"** alanına ngrok URL'sini girin:
   - Örnek: `https://abc123.ngrok.io`
   - VEYA sadece: `abc123.ngrok.io` (otomatik https:// eklenir)
4. **"QR Kod Oluştur"** butonuna tıklayın
5. QR kodu yazdırın

### Adım 5: Test Edin

1. QR kodu **farklı bir internet ağından** okutun
2. Kitap bilgileri görünmeli! ✅

## 🎉 Sonuç

Artık QR kodlar:
- ✅ Aynı Wi-Fi ağında çalışır
- ✅ Farklı Wi-Fi ağında çalışır
- ✅ Mobil veri ile çalışır
- ✅ İnternet bağlantısı olan **her yerden** çalışır!

## ⚠️ Önemli Notlar

- Ngrok ücretsiz versiyonunda URL **her başlatmada değişir**
- Her seferinde yeni URL'yi QR kod oluştururken girmeniz gerekir
- Ücretli ngrok ile sabit URL alabilirsiniz (isteğe bağlı)

## 🆘 Sorun Giderme

### Ngrok kurulumu ile ilgili
- `NGROK-ADIM-ADIM.md` dosyasını okuyun
- Tüm adımları takip ettiğinizden emin olun

### QR kod çalışmıyor
- Ngrok URL'sini doğru girdiğinizden emin olun
- Ngrok'un çalıştığından emin olun (`NGROK-BASLAT.bat`)
- Python sunucusunun çalıştığından emin olun (`BASLAT.bat`)

