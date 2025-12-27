# Kütüphane QR Kod Sistemi

Kütüphanelerde kitapların QR kodlu arşiv etiketleri için web uygulaması.

## 📋 Proje Bilgileri

Bu proje bir **Sosyal Sorumluluk Projesi** olarak geliştirilmiştir.

- **Yürütücü:** Miray Tiryaki
- **Danışman Hoca:** Arş. Gör. Ayça Akkan ÇAVDAR

## 🌐 GitHub Pages ile Canlı Kullanım

Bu proje GitHub Pages üzerinden canlı olarak kullanılabilir! 

### GitHub Pages Kurulumu

1. **Repository Ayarları:**
   - GitHub repository'nize gidin
   - **Settings** → **Pages** bölümüne gidin
   - **Source** kısmından **Deploy from a branch** seçin
   - **Branch** olarak `main` (veya `master`) seçin
   - **Folder** olarak `/qr-kutuphane` seçin (veya root klasörü seçin)
   - **Save** butonuna tıklayın

2. **Deploy Süresi:**
   - İlk deploy genellikle 1-2 dakika sürer
   - Sonraki güncellemeler birkaç saniye içinde yayınlanır
   - Site URL'niz: `https://[kullanici-adi].github.io/[repo-adi]/qr-kutuphane/`

3. **QR Kodlar:**
   - GitHub Pages'te yayınlandıktan sonra, QR kodlar otomatik olarak doğru URL'yi kullanır
   - Artık herhangi bir internet bağlantısından QR kodları okutabilirsiniz
   - Local server'a gerek yok! 🎉

### ⚠️ Önemli Notlar

- GitHub Pages **statik dosyalar** için çalışır (HTML, CSS, JS)
- `server.py` dosyası GitHub Pages'te çalışmaz (sadece local development için)
- QR kodlar GitHub Pages URL'nizi otomatik kullanır
- Mobil cihazlarda internet bağlantısı olan her yerden erişilebilir

## Kurulum ve Kullanım (Local Development)

### 1. Web Sunucusu Olmadan (Sadece Bilgisayarda Test)

1. `index.html` dosyasını tarayıcıda açın
2. QR kodları oluşturun
3. **Not:** Bu yöntem mobil cihazlarda çalışmaz!

### 2. Web Sunucusu ile (Mobil Cihazlarda Çalışır)

#### Windows için:

1. `server.bat` dosyasına çift tıklayın
2. Tarayıcıda `http://localhost:8000` adresini açın
3. Bilgisayarınızın IP adresini öğrenin:
   - Windows: Komut satırında `ipconfig` yazın
   - "IPv4 Address" değerini not edin (örn: 192.168.1.100)
4. Mobil cihazınızda aynı Wi-Fi ağına bağlanın
5. Mobil cihazınızda tarayıcıda şu adresi açın: `http://[IP-ADRESI]:8000`
   - Örnek: `http://192.168.1.100:8000`
6. QR kodları oluşturun ve okutun

#### Python ile (Tüm Platformlar):

1. Terminal/Komut satırında proje klasörüne gidin
2. Şu komutu çalıştırın:
   ```bash
   python server.py
   ```
3. Tarayıcıda `http://localhost:8000` adresini açın
4. Mobil cihazınızda aynı Wi-Fi ağına bağlanın
5. Bilgisayarınızın IP adresini öğrenin ve mobil cihazda açın

## Özellikler

- ✅ Kitap bilgilerini görüntüleme
- ✅ QR kod oluşturma ve yazdırma
- ✅ Mobil cihazlarda QR kod okutma
- ✅ Otomatik yönlendirme
- ✅ Farklı internet ağlarından erişim (ngrok ile)

## Sorun Giderme

### QR kod okutulduğunda Google'da arama yapılıyor

**Çözüm:** Web sunucusu kullanmanız gerekiyor. `BASLAT.bat` dosyasını çalıştırın.

### Port 8000 zaten kullanılıyor

`DURDUR.bat` dosyasını çalıştırarak eski sunucuyu durdurun, sonra `BASLAT.bat` ile tekrar başlatın.

### Mobil cihazda sayfa açılmıyor

**Adım 1: Firewall Kontrolü**
- `FIREWALL-AC.bat` dosyasına **sağ tıklayın**
- **"Yönetici olarak çalıştır"** seçeneğini seçin
- Bu, Windows Firewall'da port 8000'i açar

**Adım 2: Ağ Kontrolü**
- Bilgisayar ve telefon **aynı Wi-Fi ağında** olmalı
- Ethernet yerine Wi-Fi kullanın

**Adım 3: IP Adresi Kontrolü**
- `IP-BUL.bat` dosyasını çalıştırın
- Wi-Fi bağlantısının IP adresini kullanın (genellikle 192.168.x.x)

**Adım 4: Test**
- Bilgisayarda: `http://localhost:8000` çalışıyor mu?
- Telefonda: `http://[IP-ADRESI]:8000` deneyin

**Detaylı çözüm için:** `COZUM.md` dosyasına bakın.

## Farklı Ağlardan Erişim (Ngrok)

Farklı internet ağlarından QR kodlara erişmek için:

1. `NGROK-ADIM-ADIM.md` dosyasını okuyun
2. Ngrok'u kurun ve yapılandırın
3. `NGROK-BASLAT.bat` dosyasını çalıştırın
4. Verilen URL'yi QR kod oluştururken kullanın

**Hızlı başlangıç için:** `HIZLI-BASLANGIC.md` dosyasını okuyun

## Dosyalar

- `index.html` - Ana sayfa
- `kitap.html` - Kitap detay sayfası
- `server.py` - Python web sunucusu (sadece local development için)
- `BASLAT.bat` - Windows için başlatma scripti
- `NGROK-BASLAT.bat` - Ngrok başlatma scripti
- `NGROK-ADIM-ADIM.md` - Ngrok kurulum kılavuzu
- `HIZLI-BASLANGIC.md` - Hızlı başlangıç kılavuzu

## 📦 Proje Yapısı

```
qr-kutuphane/
├── index.html          # Ana sayfa
├── kitap.html          # Kitap detay sayfası
├── kitaplar.html       # Kitaplar listesi
├── hakkinda.html       # Hakkında sayfası
├── sss.html            # Sık Sorulan Sorular
├── iletisim.html       # İletişim sayfası
├── css/
│   └── styles.css      # Stil dosyası
├── js/
│   └── main.js         # Ana JavaScript dosyası
├── images/             # Kitap görselleri
└── server.py           # Local development sunucusu
```

## 🔧 Teknik Detaylar

- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **QR Kod Kütüphanesi:** [qrcode.js](https://github.com/davidshimjs/qrcodejs)
- **Local Server:** Python HTTP Server (development için)
- **Deployment:** GitHub Pages (production için)

## 📝 Lisans

Bu proje açık kaynak kodludur ve özgürce kullanılabilir.

