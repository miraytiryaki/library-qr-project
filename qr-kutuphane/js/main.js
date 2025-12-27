/* ============================================
   Kütüphane QR Kod Sistemi - Ana JavaScript Dosyası
   ============================================ */

// ========== Particle Background System ==========
(function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    // Canvas boyutunu ayarla
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle sınıfı
    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.color = `rgba(255, 255, 255, ${this.opacity})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Sınırları kontrol et
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            
            // Sınırları aşarsa reset
            if (this.x < 0) this.x = 0;
            if (this.x > canvas.width) this.x = canvas.width;
            if (this.y < 0) this.y = 0;
            if (this.y > canvas.height) this.y = canvas.height;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    // Parçacıkları bağlayan çizgiler
    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Parçacıkları oluştur
    function initParticles() {
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Animasyon döngüsü
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Parçacıkları güncelle ve çiz
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Çizgileri çiz
        drawLines();
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Başlat
    initParticles();
    animate();
})();

// ========== Kitaplar Veritabanı ==========
const kitaplar = {
    'kinyas-ve-kayra': {
        id: 'kinyas-ve-kayra',
        baslik: 'Kinyas ve Kayra',
        yazar: 'Hakan Günday',
        resim: 'images/kinyas-ve-kayra.jpg',
        yayin: 'İstanbul : Doğan Kitap, 2017',
        sayfa: '531 sayfa ; 20 cm',
        kutuphane: 'Merkez Kütüphanesi',
        bolum: '1. Kat Kitap Salonu',
        oduncSayisi: 28,
        tur: 'Kitap',
        altTur: 'Edebiyat',
        sekil: 'Basılı',
        ortam: 'Kağıt',
        siniflama: 'PL248.G8633 K56 2017',
        durum: 'Rafta',
        demirbas: '0085481',
        kopya: 'k.1'
    },
    'bilgisayar-sistemleri-mimarisi': {
        id: 'bilgisayar-sistemleri-mimarisi',
        baslik: 'Bilgisayar sistemleri mimarisi',
        yazar: 'M. Morris Mano',
        resim: 'images/bilgisayar-sistemleri-mimarisi.jpg',
        cevirmenler: 'Abdüssamet Marşoğlu, Nurşen Suçsuz',
        yayin: 'İstanbul : Literatür Yayınları, 2007',
        sayfa: 'xviii, 494 sayfa : tablolu ; 24 cm.',
        kutuphane: 'Merkez Kütüphanesi',
        bolum: '1. Kat Kitap Salonu',
        oduncSayisi: 13,
        tur: 'Kitap',
        altTur: 'Bilgisayar',
        sekil: 'Basılı',
        ortam: 'Kağıt',
        siniflama: 'QA76.9.A73.M36 2007',
        durum: 'İade',
        durumTarihi: '23.12.2025',
        demirbas: '0051086',
        kopya: 'k.2'
    },
    'osmancik': {
        id: 'osmancik',
        baslik: 'Osmancık: Cihan devrini kuran irade, şuur ve karakter',
        yazar: 'Tarık Buğra',
        resim: 'images/osmancik.jpg',
        yayin: 'İstanbul: Ötüken, 2004',
        sayfa: '356 s.',
        kutuphane: 'Merkez Kütüphanesi',
        bolum: '1. Kat Kitap Salonu',
        oduncSayisi: 4,
        tur: 'Kitap',
        altTur: 'Roman',
        sekil: 'Basılı',
        ortam: 'Kağıt',
        siniflama: 'PL248.8847 O86 2004',
        durum: 'Rafta',
        demirbas: '0000712',
        kopya: 'k.2',
        isbn: '975-437-079-6',
        konu: 'Türk edebiyatı--Romanlar.',
        dil: 'Türkçe',
        yayinGelisTarihi: '04.04.2008'
    },
    'roma-hukuku-dersleri': {
        id: 'roma-hukuku-dersleri',
        baslik: 'Roma hukuku dersleri',
        yazar: 'Bülent Tahiroğlu',
        resim: 'images/roma-hukuku-dersleri.jpg',
        sorumlular: 'Belgin Erdoğmuş',
        yayin: 'İstanbul: Der Yayınları, 2013',
        sayfa: '298 s.; 24 cm.',
        kutuphane: 'Merkez Kütüphanesi',
        bolum: '1. Kat Kitap Salonu',
        oduncSayisi: 21,
        tur: 'Kitap',
        altTur: 'Hukuk',
        sekil: 'Basılı',
        ortam: 'Kağıt',
        siniflama: 'KJA1030. T342',
        durum: 'Rafta',
        demirbas: '0034240',
        kopya: 'k.1',
        isbn: '9789753531887',
        konu: 'Roma hukuku.',
        dil: 'Türkçe',
        notlar: 'Kaynakça ve dizin var.'
    },
    'foundations-of-medical-imaging': {
        id: 'foundations-of-medical-imaging',
        baslik: 'Foundations of medical imaging',
        yazar: 'Z. H. (Zang-Hee) Cho, Joie P. Jones, Manbir Singh',
        resim: 'images/foundations-of-medical-imaging.jpg',
        yayin: 'New York : Wiley, 1993',
        sayfa: 'xiii, 586 p. : ill. ; 25 cm.',
        kutuphane: 'Merkez Kütüphanesi',
        bolum: '1. Kat Tıp Kitaplığı',
        oduncSayisi: 1,
        tur: 'Kitap',
        altTur: 'Tıp',
        sekil: 'Basılı',
        ortam: 'Kağıt',
        siniflama: 'RC78.7.D53 C48 1993',
        durum: 'Rafta',
        demirbas: '0002268',
        kopya: 'k.1'
    },
    'hz-muhammedin-hayati': {
        id: 'hz-muhammedin-hayati',
        baslik: 'Hz. Muhammed\'in hayatı',
        yazar: 'Casim Avcı',
        resim: 'images/hz-muhammedin-hayati.jpg',
        sorumlular: 'Casim Avcı, Mevlana İdris; editör Ali Erbaş, Ulviye Özkan',
        yayin: 'Ankara: Diyanet İşleri Başkanlığı Yayınları, 2021',
        sayfa: '217 s.; 24 cm.',
        kutuphane: 'İlahiyat Fakültesi Kütüphanesi',
        bolum: 'KİTAP',
        oduncSayisi: 0,
        tur: 'Kitap',
        altTur: 'Din',
        sekil: 'Basılı',
        ortam: 'Kağıt',
        siniflama: '297.92 AVC.M 2021',
        durum: 'Rafta',
        demirbas: 'D0032334',
        kopya: 'k.1',
        isbn: '9789751966278',
        konu: 'Muhammed, Hz. Biyografya, Siyer-i Nebevi',
        dil: 'Türkçe',
        diziKaydi: 'Diyanet İşleri Başkanlığı Yayınları; 1286. Çocuk Kitapları; 302.',
        baskı: '2. baskı'
    }
};

// ========== Kitap Arama Fonksiyonu ==========
function goToBook() {
    let bookName = document.getElementById('bookId');
    if (!bookName) return;
    
    bookName = bookName.value.trim();
    
    if (!bookName) {
        alert('Lütfen bir kitap adı girin!');
        return;
    }
    
    // Kitap adına göre ara (büyük/küçük harf duyarsız)
    let foundBook = null;
    for (const [id, kitap] of Object.entries(kitaplar)) {
        if (kitap.baslik.toLowerCase() === bookName.toLowerCase() || 
            kitap.baslik.toLowerCase().includes(bookName.toLowerCase())) {
            foundBook = { id, kitap };
            break;
        }
    }
    
    if (foundBook) {
        window.location.href = `kitap.html?id=${foundBook.id}`;
    } else {
        alert('Kitap bulunamadı! Lütfen kitap adını kontrol edin veya aşağıdaki listeden bir kitap seçin.');
    }
}

// ========== QR Kod Otomatik Yönlendirme ==========
(function() {
    function checkAndRedirect() {
        const urlParams = new URLSearchParams(window.location.search);
        const bookId = urlParams.get('book');
        
        if (bookId && typeof kitaplar !== 'undefined' && kitaplar[bookId]) {
            console.log('Kitap bulundu, yönlendiriliyor:', bookId);
            window.location.href = `kitap.html?id=${bookId}`;
            return true;
        }
        return false;
    }
    
    // Sayfa yüklendikten sonra kontrol et
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(checkAndRedirect, 100);
        });
    } else {
        setTimeout(checkAndRedirect, 100);
    }
    
    window.addEventListener('load', function() {
        setTimeout(checkAndRedirect, 200);
    });
})();

// ========== Enter Tuşu ile Arama ==========
document.addEventListener('DOMContentLoaded', function() {
    const bookInput = document.getElementById('bookId');
    if (bookInput) {
        bookInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                goToBook();
            }
        });
    }
});

// ========== Kategori İşlemleri ==========
function getCategories() {
    const categories = {};
    Object.values(kitaplar).forEach(kitap => {
        const kategori = kitap.altTur;
        if (!categories[kategori]) {
            categories[kategori] = [];
        }
        categories[kategori].push(kitap);
    });
    return categories;
}

function showCategories() {
    const grid = document.getElementById('booksGrid');
    const sectionTitle = document.getElementById('sectionTitle');
    const backButton = document.getElementById('backToCategories');
    
    if (!grid || !sectionTitle) return;
    
    grid.innerHTML = '';
    sectionTitle.textContent = 'Kategoriler';
    if (backButton) backButton.style.display = 'none';
    
    const categories = getCategories();
    const categoryIcons = {
        'Edebiyat': '📖',
        'Bilgisayar': '💻',
        'Roman': '📚',
        'Hukuk': '⚖️',
        'Tıp': '🏥',
        'Din': '🕌'
    };
    
    Object.keys(categories).forEach(kategori => {
        const kitaplar = categories[kategori];
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('data-category', kategori);
        card.onclick = () => showBooksByCategory(kategori);
        
        const icon = categoryIcons[kategori] || '📚';
        const count = kitaplar.length;
        
        card.innerHTML = `
            <div class="category-card-icon-wrapper">
                <div class="category-card-icon">${icon}</div>
            </div>
            <h3>${kategori}</h3>
            <div class="book-count">${count} ${count === 1 ? 'Kitap' : 'Kitap'}</div>
        `;
        
        grid.appendChild(card);
    });
}

function showBooksByCategory(kategori) {
    const grid = document.getElementById('booksGrid');
    const sectionTitle = document.getElementById('sectionTitle');
    const backButton = document.getElementById('backToCategories');
    
    if (!grid || !sectionTitle) return;
    
    grid.innerHTML = '';
    sectionTitle.textContent = `${kategori} Kategorisi`;
    if (backButton) backButton.style.display = 'block';
    
    const categories = getCategories();
    const kitaplar = categories[kategori] || [];
    
    kitaplar.forEach(kitap => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.onclick = () => window.location.href = `kitap.html?id=${kitap.id}`;
        
        let resimHTML;
        if (kitap.resim) {
            resimHTML = `<img src="${kitap.resim}" alt="${kitap.baslik}" class="book-card-image" loading="lazy" onerror="this.onerror=null; this.style.display='none'; const fallback = this.nextElementSibling; if(fallback) fallback.style.display='flex';">
                         <div class="book-card-image" style="background: linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%); display: none; align-items: center; justify-content: center; color: #3b82f6; font-size: 3em;">📚</div>`;
        } else {
            resimHTML = `<div class="book-card-image" style="background: linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%); display: flex; align-items: center; justify-content: center; color: #3b82f6; font-size: 3em;">📚</div>`;
        }
        
        card.innerHTML = `
            ${resimHTML}
            <h3>${kitap.baslik}</h3>
            <div class="author">${kitap.yazar}</div>
            <div class="category">${kitap.altTur}</div>
            <div class="info-box" style="margin-top: 15px;">
                <p><strong>Demirbaş:</strong> ${kitap.demirbas}</p>
                <p><strong>Durum:</strong> ${kitap.durum}</p>
            </div>
            <button class="qr-btn" onclick="event.stopPropagation(); showQRCode('${kitap.id}', '${kitap.baslik}', '${kitap.demirbas}')">QR Kod Oluştur & Yazdır</button>
        `;
        
        grid.appendChild(card);
    });
}

// Sayfa yüklendiğinde kategorileri göster
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('booksGrid')) {
        showCategories();
    }
});

// ========== QR Kod İşlemleri ==========
let currentBookId = '';
let currentDemirbas = '';

function showQRCode(bookId, bookTitle, demirbas) {
    currentBookId = bookId;
    currentDemirbas = demirbas;
    
    const modal = document.getElementById('qrModal');
    const modalTitle = document.getElementById('modalBookTitle');
    const qrContainer = document.getElementById('modalQrcode');
    
    if (!modal || !modalTitle || !qrContainer) {
        console.error('Modal elementleri bulunamadı');
        return;
    }
    
    modalTitle.textContent = bookTitle;
    qrContainer.innerHTML = '<p style="padding: 20px; color: #666;">QR kod oluşturuluyor...</p>';
    
    // Modal'ı önce göster
    modal.style.display = 'block';
    
    // QR kod içine tam URL koy (mobil uyumlu)
    let qrUrl;
    const currentHost = window.location.hostname;
    
    if (currentHost === 'localhost' || currentHost === '127.0.0.1') {
        // localhost kullanılıyorsa - IP adresini al
        fetch('/get-ip')
            .then(response => response.text())
            .then(ip => {
                if (ip && ip !== 'BULUNAMADI' && ip.trim() !== '') {
                    qrUrl = `http://${ip.trim()}:8000/index.html?book=${bookId}`;
                    console.log('QR kod URL (IP ile):', qrUrl);
                } else {
                    qrUrl = `http://localhost:8000/index.html?book=${bookId}`;
                    console.log('QR kod URL (localhost - mobilde çalışmaz):', qrUrl);
                    const warning = document.createElement('div');
                    warning.style.cssText = 'background: #fff3cd; color: #856404; padding: 10px; border-radius: 5px; margin: 10px 0; font-size: 0.85em;';
                    warning.innerHTML = '⚠️ <strong>Mobil/Internet için:</strong> Telefonunuzdan IP adresi ile siteyi açın (örn: http://192.168.1.100:8000)';
                    qrContainer.parentNode.insertBefore(warning, qrContainer.nextSibling);
                }
                createModalQRCode(qrUrl, qrContainer);
            })
            .catch(error => {
                console.warn('IP adresi alınamadı:', error);
                qrUrl = `http://localhost:8000/index.html?book=${bookId}`;
                const warning = document.createElement('div');
                warning.style.cssText = 'background: #fff3cd; color: #856404; padding: 10px; border-radius: 5px; margin: 10px 0; font-size: 0.85em;';
                warning.innerHTML = '⚠️ <strong>Mobil/Internet için:</strong> Telefonunuzdan IP adresi ile siteyi açın';
                qrContainer.parentNode.insertBefore(warning, qrContainer.nextSibling);
                createModalQRCode(qrUrl, qrContainer);
            });
        return;
    } else {
        // IP adresi veya ngrok URL zaten kullanılıyor
        const baseUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
        qrUrl = `${baseUrl}index.html?book=${bookId}`;
        console.log('QR kod URL (tam URL):', qrUrl);
        createModalQRCode(qrUrl, qrContainer);
    }
}

function createModalQRCode(qrUrl, qrContainer) {
    if (typeof QRCode === 'undefined') {
        qrContainer.innerHTML = '<p style="color: red; padding: 20px;">QR kod kütüphanesi yüklenemedi!</p>';
        return;
    }
    
    QRCode.toDataURL(qrUrl, {
        width: 250,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        }
    }, function (error, url) {
        if (error) {
            console.error('QR kod oluşturma hatası:', error);
            qrContainer.innerHTML = '<p style="color: red; padding: 20px;">QR kod oluşturulamadı: ' + error.message + '</p>';
        } else {
            const qrImg = document.createElement('img');
            qrImg.src = url;
            qrImg.alt = 'QR Kod';
            qrImg.style.cssText = 'max-width: 100%; height: auto; display: block; margin: 0 auto;';
            
            const urlInfo = document.createElement('div');
            urlInfo.style.cssText = 'margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px; font-size: 0.85em;';
            
            const isLocalhost = qrUrl.includes('localhost') || qrUrl.includes('127.0.0.1');
            const warningHtml = isLocalhost ? 
                '<div style="background: #fff3cd; color: #856404; padding: 10px; border-radius: 6px; margin-bottom: 10px; font-size: 0.9em;">⚠️ <strong>UYARI:</strong> Bu URL mobil cihazlarda çalışmaz!<br>Telefonunuzdan IP adresi ile siteyi açıp QR kod oluşturun.</div>' : 
                '<div style="background: #d4edda; color: #155724; padding: 10px; border-radius: 6px; margin-bottom: 10px; font-size: 0.9em;">✅ Bu URL mobil cihazlarda çalışır!</div>';
            
            urlInfo.innerHTML = `
                ${warningHtml}
                <div style="margin-bottom: 8px; color: #666; font-weight: 600;">QR Kod İçindeki URL:</div>
                <div style="word-break: break-all; color: #333; margin-bottom: 10px; font-family: monospace; font-size: 0.9em; background: white; padding: 8px; border-radius: 4px; border: 1px solid #ddd;">${qrUrl}</div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <a href="${qrUrl}" target="_blank" style="display: inline-block; padding: 8px 16px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; font-size: 0.9em; margin-top: 5px;">🔗 URL'yi Test Et</a>
                    <button onclick="navigator.clipboard.writeText('${qrUrl}').then(() => alert('URL kopyalandı!')).catch(() => alert('Kopyalama başarısız'))" style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 6px; font-size: 0.9em; margin-top: 5px; cursor: pointer;">📋 URL'yi Kopyala</button>
                </div>
            `;
            
            qrContainer.innerHTML = '';
            qrContainer.appendChild(qrImg);
            qrContainer.appendChild(urlInfo);
        }
    });
}

function closeModal() {
    const modal = document.getElementById('qrModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function printQRCode(bookId, bookTitle, demirbas) {
    let qrUrl;
    const currentHost = window.location.hostname;
    
    if (currentHost === 'localhost' || currentHost === '127.0.0.1') {
        qrUrl = `http://localhost:8000/index.html?book=${bookId}`;
    } else {
        const baseUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
        qrUrl = `${baseUrl}index.html?book=${bookId}`;
    }
    
    const printContainer = document.getElementById('printQrcode');
    if (!printContainer) return;
    
    printContainer.innerHTML = '<p>QR kod oluşturuluyor...</p>';
    
    if (typeof QRCode === 'undefined') {
        printContainer.innerHTML = '<p style="color: red;">QR kod kütüphanesi yüklenemedi!</p>';
        return;
    }
    
    QRCode.toDataURL(qrUrl, {
        width: 400,
        margin: 3,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        },
        errorCorrectionLevel: 'H'
    }, function (error, url) {
        if (error) {
            console.error('QR kod oluşturma hatası:', error);
            printContainer.innerHTML = '<p style="color: red;">QR kod oluşturulamadı: ' + error.message + '</p>';
        } else {
            printContainer.innerHTML = '<img src="' + url + '" alt="QR Kod" style="max-width: 100%; height: auto;">';
            
            const printBookTitle = document.getElementById('printBookTitle');
            const printDemirbas = document.getElementById('printDemirbas');
            if (printBookTitle) printBookTitle.textContent = bookTitle;
            if (printDemirbas) printDemirbas.textContent = demirbas;
            
            const printPage = document.getElementById('qrPrintPage');
            if (printPage) {
                printPage.style.display = 'block';
                
                setTimeout(() => {
                    window.print();
                    setTimeout(() => {
                        printPage.style.display = 'none';
                    }, 100);
                }, 200);
            }
        }
    });
}

function printQRCodeFromModal() {
    const modalTitle = document.getElementById('modalBookTitle');
    if (modalTitle) {
        const bookTitle = modalTitle.textContent;
        printQRCode(currentBookId, bookTitle, currentDemirbas);
    }
}

// Modal dışına tıklandığında kapat
window.onclick = function(event) {
    const modal = document.getElementById('qrModal');
    if (event.target == modal && modal) {
        modal.style.display = 'none';
    }
}

// ========== Mobil Menü Toggle ==========
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

