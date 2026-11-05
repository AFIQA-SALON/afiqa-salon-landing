# 🌸 AFIQA SALON - Landing Page & Appointment Booking System

Landing page modern, interaktif, dan mudah dimengerti pelanggan untuk **AFIQA SALON by AERYN** (Meruyung, Depok).

Web ini didesain khusus dengan sistem **Reservasi & Konsultasi Langsung via Admin WhatsApp**. Karena di salon kecantikan kondisi rambut (panjang, ketebalan, dan riwayat perawatan) sangat menentukan penggunaan produk dan durasi pengerjaan, seluruh harga pada website difungsikan sebagai **tarif patokan/referensi**, dan seluruh booking diarahkan langsung ke WhatsApp resmi **0812 1418 4546** agar dicek serta dikonfirmasi secara akurat oleh admin & stylist.

---

## ✨ Fitur Utama (Mudah Dimengerti Customer)

1. **Formulir Janji Temu & Konsultasi 3 Langkah**:
   - **Langkah 1**: Pilih satu atau beberapa treatment yang diminati (dengan filter 10 kategori dan pencarian instan).
   - **Langkah 2**: Tentukan rencana tanggal dan jam kedatangan (slot 10:00 - 19:00 WIB).
   - **Langkah 3**: Masukkan nama, nomor WhatsApp, serta catatan kondisi rambut, lalu kirim ke WhatsApp admin dengan template pesan yang sudah terisi rapi otomatis.

2. **Transparansi Tarif & Cek Rambut Langsung**:
   - Menampilkan kisaran patokan tarif referensi.
   - Dilengkapi banner edukasi ramah: *"Harga pasti disesuaikan dengan kondisi, panjang & ketebalan rambut setelah dicek langsung oleh stylist di salon atau via foto bersama Admin WhatsApp."*

3. **Integrasi WhatsApp One-Click Direct**:
   - Menghubungkan langsung ke WhatsApp resmi **0812 1418 4546** (`+6281214184546`).
   - Format pesan otomatis mencakup daftar layanan yang diminati, kisaran referensi, tanggal, jam, dan catatan kondisi rambut.
   - Tersedia tombol cadangan **"Salin Format Pesan"** jika pelanggan ingin menyalin teks secara manual.

4. **Pricelist Lengkap 100% Sesuai Brosur Asli**:
   - Mencakup seluruh menu dari lembar daftar harga fisik:
     - **Hair Cut & Styling**: Bangs Trim, Women Haircut, Butterfly/French Layer, Catok, Curly, Blow.
     - **Hair Treatment**: Creambath Makarizo/Tradisional, Hairspa L'Oréal, Hairmask Keratin Booster, Serum, Scrub Kulit Kepala.
     - **Hair Straightening**: Smoothing Matrix, Diamond, Collagen, Keratin Smoothing Glass Hair, Keratin Filler Therapy.
     - **Hair Coloring**: Toning, Peek A Boo, Highlight, Balayage, Fashion Color, Extra Olaplex & Smartplex.
     - **Wave Permanent & Down Perm**.
     - **Hair Extension**: Pasang Ring, Kepang, Remove.
     - **Nail Care**: Manicure, Pedicure Spa, Gel Polish, Nail Art.
     - **Face & Eye Spa**: Therapy Mata, Cleansing & Masker, Masker Vit C, Anti Aging, Brow Shaping.
     - **Body Spa & Reflexy**: Back Massage, Kerik, Foot Spa Complete, Reflexy Full Body, Lulur & Body Mask.
     - **Make Up & Styling**: Wisuda/Party, Hairdo.

5. **Popup Foto Brosur Asli**:
   - Pelanggan dapat menekan tombol **"Lihat Foto Brosur Asli"** untuk melihat foto pricelist resmi AFIQA SALON secara langsung.

6. **Status Buka Salon Otomatis (Live Badge)**:
   - Mendeteksi jam lokal Indonesia (WIB) secara real-time:
     - Pukul 10.00 – 20.00 WIB: `🟢 Buka Sekarang (Tutup 20.00 WIB)`
     - Di luar jam tersebut: `🟡 Sedang Istirahat (Buka besok 10.00 WIB)`

7. **Petunjuk Arah & Google Maps**:
   - Tombol satu klik untuk membuka rute ke **Jl. Limo raya meruyung No.K15 Depok**.

8. **Mobile-First & Responsif**:
   - Nyaman dibuka di semua ukuran layar smartphone, tablet, maupun laptop/PC.
   - Dilengkapi sticky floating bar di layar bawah HP saat ada layanan terpilih.

---

## 📁 Struktur File Proyek

```
afiqa-salon-booking/
├── assets/
│   ├── pricelist_official.jpg   # Foto pricelist asli dari salon
│   ├── logo.png                 # Logo avatar resmi AFIQA SALON
│   └── afiqa_watermark_white.png
├── index.html                   # Halaman web landing page utama
├── styles.css                   # Styling desain modern & responsive
├── script.js                    # Logika kalkulator booking, pencarian, & generator WA
├── manifest.webmanifest         # Konfigurasi PWA (Web App)
└── README.md                    # Dokumentasi ini
```

---

## 🚀 Cara Menjalankan & Membuka Halaman

1. **Buka Langsung di Browser**:
   - Buka file `index.html` dengan klik ganda atau klik kanan -> *Open with Chrome / Edge / Firefox*.
2. **Atau Melalui Local Server**:
   ```bash
   npx serve .
   # atau
   python -m http.server 8000
   ```
   Lalu buka `http://localhost:8000` di peramban.

---

## 🌐 Cara Deploy ke GitHub / Cloudflare Pages

Untuk menghubungkan atau memperbarui repositori `https://github.com/AFIQA-SALON/afiqa-salon-landing`:

```bash
cd "C:\Users\Aeryn\.gemini\antigravity\scratch\afiqa-salon-booking"
git init
git add .
git commit -m "feat: landing page booking appointment interaktif AFIQA SALON"
git branch -M main
git remote add origin https://github.com/AFIQA-SALON/afiqa-salon-landing.git
git push -u origin main --force
```

Setelah di-push, Cloudflare Pages (`https://afiqasalon.pages.dev/`) atau GitHub Pages akan langsung mendeploy versi terbaru secara otomatis!
