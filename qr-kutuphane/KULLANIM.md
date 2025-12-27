# QR Kod Kullanım Kılavuzu

## Mobil Cihazlarda QR Kod Çalıştırma

### ⚠️ ÖNEMLİ: Doğru Yöntem

QR kodların mobil cihazlarda çalışması için **mobil cihazdan QR kod oluşturmanız** gerekiyor!

### Adım Adım Kullanım

#### 1. Bilgisayarınızda:
- `BASLAT.bat` dosyasını çalıştırın
- Sunucu çalışıyor olmalı

#### 2. Telefonunuzda:
- Safari veya Chrome'u açın
- Şu adresi açın: `http://192.168.33.248:8000`
  - (IP adresinizi `IP-BUL.bat` ile öğrenebilirsiniz)
- Site açılmalı

#### 3. QR Kod Oluşturma:
- Telefonunuzdan siteyi açtıktan sonra
- Bir kitabın detay sayfasına gidin
- "QR Kod Oluştur" butonuna tıklayın
- **VEYA** ana sayfada kitap kartındaki "QR Kod Oluştur & Yazdır" butonuna tıklayın
- IP adresi alanına IP adresinizi girin (opsiyonel, zaten mobil cihazdan açtıysanız otomatik olur)
- QR kod oluşturulacak

#### 4. QR Kod Okutma:
- Oluşturulan QR kodu başka bir cihazla okutun
- Otomatik olarak kitap bilgileri görünecek

## ❌ YANLIŞ Yöntem (Çalışmaz!)

- Bilgisayardan `http://localhost:8000` açıp QR kod oluşturmak
- QR kod içinde `localhost` olur, mobilde çalışmaz

## ✅ DOĞRU Yöntem (Çalışır!)

- Telefondan `http://192.168.33.248:8000` açıp QR kod oluşturmak
- QR kod içinde IP adresi olur, mobilde çalışır

## Hızlı Test

1. Telefonunuzda: `http://192.168.33.248:8000` açın
2. Bir kitaba tıklayın
3. "QR Kod Oluştur" butonuna tıklayın
4. QR kodu başka bir cihazla okutun
5. Kitap bilgileri görünmeli!

## Sorun Giderme

### QR kod okutulduğunda Google'da arama yapılıyor
- QR kod bilgisayardan oluşturulmuş olabilir
- **Çözüm:** Telefondan siteyi açıp oradan QR kod oluşturun

### QR kod okutulduğunda "sunucuya bağlanamadı" hatası
- IP adresi yanlış olabilir
- **Çözüm:** `IP-BUL.bat` ile IP adresinizi kontrol edin

### QR kod okutulduğunda kitap bilgileri görünmüyor
- Yönlendirme çalışmıyor olabilir
- **Çözüm:** Sayfayı yenileyin (F5) ve tekrar deneyin

