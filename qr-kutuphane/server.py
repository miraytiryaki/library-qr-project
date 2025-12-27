#!/usr/bin/env python3
"""
Basit HTTP Sunucusu - Kütüphane QR Kod Sistemi
Kullanım: python server.py
Sonra tarayıcıda http://localhost:8000 adresini açın
"""

import http.server
import socketserver
import webbrowser
import os
import sys
import socket

PORT = 8000

def get_local_ip():
    """Bilgisayarın yerel IP adresini bul"""
    try:
        # Dummy bir bağlantı yaparak yerel IP'yi öğren
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "BULUNAMADI"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # IP adresi endpoint'i
        if self.path == '/get-ip':
            ip = get_local_ip()
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(ip.encode())
            return
        
        # Diğer tüm istekler için normal dosya servisi
        super().do_GET()
    
    def end_headers(self):
        # CORS headers ekle (mobil cihazlar için)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    # Mevcut dizinde çalış
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            local_ip = get_local_ip()
            
            print("=" * 60)
            print("Kütüphane QR Kod Sistemi - Web Sunucusu")
            print("=" * 60)
            print(f"\n✓ Sunucu çalışıyor!")
            print(f"\n📱 BILGISAYARINIZDAN:")
            print(f"   http://localhost:{PORT}")
            print(f"\n📱 MOBIL CIHAZINIZDAN (Aynı Wi-Fi ağında olmalı):")
            print(f"   http://{local_ip}:{PORT}")
            print(f"\n⚠️  ONEMLI:")
            print(f"   - Bilgisayar ve telefon AYNI Wi-Fi ağında olmalı")
            print(f"   - QR kodlar mobilde çalışması için bu IP adresini kullanın")
            print(f"\n🛑 Sunucuyu durdurmak için: Ctrl+C")
            print("=" * 60)
            
            # Tarayıcıyı otomatik aç
            try:
                webbrowser.open(f'http://localhost:{PORT}')
            except:
                pass
            
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"\nHata: Port {PORT} zaten kullanılıyor!")
            print("Başka bir program bu portu kullanıyor olabilir.")
            print("Lütfen o programı kapatın veya PORT değerini değiştirin.")
        else:
            print(f"\nHata: {e}")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n\nSunucu durduruldu.")
        sys.exit(0)

if __name__ == "__main__":
    main()

