# Portal Website OSIM MTsN 3 Tulungagung 2025

![OSIM Logo](https://zrivzo.github.io/assets/og-image.png)

Portal resmi untuk rekrutmen Organisasi Siswa Intra Madrasah (OSIM) MTsN 3 Tulungagung tahun 2025.

## 🚀 Fitur Utama

- **Website Utama**: Informasi lengkap tentang rekrutmen OSIM
- **Cek Data Peserta**: Portal untuk mengecek data pendaftaran
- **Pengumuman Hasil**: Sistem pengumuman kelolosan
- **Timeline Interaktif**: Jadwal seleksi yang mudah diikuti
- **Countdown Timer**: Hitung mundur menuju wawancara
- **Responsive Design**: Optimal di semua perangkat

## 📁 Struktur Project

```

osim-recruitment/
├──index.html                 # Halaman utama
├──check-data.html           # Portal cek data peserta
├──pengumuman.html           # Halaman pengumuman hasil
├──styles/
│├── globals.css           # Styles global
│└── components.css        # Komponen UI
├──js/
│├── main.js               # JavaScript utama
│└── countdown.js          # Timer countdown
├──assets/
│└── images/               # Asset gambar
├──tailwind.config.js        # Konfigurasi Tailwind
├──manifest.json             # PWA manifest
├──sitemap.xml              # Sitemap SEO
├──robots.txt               # Robot instructions
└──README.md                # Dokumentasi

```

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur website
- **Tailwind CSS** - Framework CSS utility-first
- **Vanilla JavaScript** - Interaktivitas tanpa framework
- **Font Awesome** - Ikon
- **Google Fonts** - Typography (Inter)
- **PWA Ready** - Dapat diinstall sebagai aplikasi

## 🎨 Warna dan Branding

- **Primary Color**: `#13265C` (Biru Tua)
- **Secondary Color**: `#3B82F6` (Biru Cerah)
- **Accent Color**: `#10B981` (Hijau Success)
- **Font**: Inter (Google Fonts)

## 📱 Fitur Responsif

- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized images

## 🔧 Instalasi dan Penggunaan

1. **Clone repository**
   ```bash
   git clone https://github.com/username/osim-recruitment.git
   cd osim-recruitment
```

1. Jalankan di local server
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Menggunakan Node.js
   npx serve .
   
   # Menggunakan PHP
   php -S localhost:8000
   ```
2. Akses di browser
   ```
   http://localhost:8000
   ```

📊 Halaman yang Tersedia

🏠 Halaman Utama (index.html)

· Informasi rekrutmen
· Timeline seleksi
· Countdown wawancara
· Gallery OSIM
· Link portal lainnya

📋 Cek Data Peserta (check-data.html)

· Pencarian berdasarkan ID
· Pencarian berdasarkan nama
· Filter berdasarkan kelas
· Tampilan data dalam tabel

📢 Pengumuman Hasil (pengumuman.html)

· Input username/NIS
· Tampilan hasil lolos/tidak lolos
· Efek konfeti untuk yang lolos
· Pesan motivasi

🎯 Timeline Rekrutmen

Tahap Tanggal Status
Pendaftaran 29 Sep - 4 Okt 2024 ❌ Ditutup
Wawancara 1 6 Okt 2024 🟢 Aktif
Wawancara 2 8 Okt 2024 ⏳ Menunggu
Wawancara 3 9 Okt 2024 ⏳ Menunggu

🔐 Data Testing

Data peserta tersedia dalam format JSON di file JavaScript masing-masing halaman. Untuk production, data dapat diambil dari database atau API.

📞 Kontak

· Sie Media dan IT: pengembangan sistem
· Kak Yusfi: +62 857-9029-7754 (konfirmasi data)
· Email: sie.media.it@mtsn3tulungagung.sch.id

🤝 Kontribusi

1. Fork repository
2. Buat feature branch (git checkout -b feature/namafitur)
3. Commit changes (git commit -m 'Menambah fitur X')
4. Push ke branch (git push origin feature/namafitur)
5. Buat Pull Request

📄 Lisensi

Dibuat untuk internal MTsN 3 Tulungagung © Sie Media dan IT 2025

🚀 Deployment

Static Hosting

· Netlify
· Vercel
· GitHub Pages
· Firebase Hosting

Requirements

· Web server dengan support HTML5
· HTTPS untuk PWA features
· Compression untuk optimal loading

---

Dikembangkan dengan ❤️ oleh Sie Media dan IT OSIM MTsN 3 Tulungagung

```
