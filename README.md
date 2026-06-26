# 🚀 Readter (Simple README Builder)

Readter adalah aplikasi berbasis web yang dirancang untuk membantu developer menyusun file `README.md` secara cepat dan interaktif. Dengan fitur *live preview* berbasis Markdown serta potongan template siap pakai, Anda dapat membuat dokumentasi proyek yang simple hanya dalam hitungan menit.

Aplikasi ini dibangun menggunakan **Next.js 15 (App Router)**, **TypeScript**, dan **Tailwind CSS**.

---

## ✨ Fitur Utama

* **⚡ Live Markdown Preview:** Lihat hasil akhir format Markdown Anda secara langsung (*real-time*) saat mengetik.
* **📦 Template Sekali Klik:** Tambahkan bagian umum README (Header, Instalasi, Penggunaan, Kontribusi, Lisensi) secara instan lewat sidebar.
* **🎨 Syntax Highlighting:** Dokumentasi kode di dalam preview otomatis berwarna rapi berkat integrasi `react-syntax-highlighter` (tema VS Code Dark Plus).
* **💾 Unduh Instan:** Unduh hasil kerja Anda langsung menjadi file `README.md` ke komputer Anda.
* **📱 Clean Layout:** Desain antarmuka dua kolom (Editor & Preview) yang bersih dan minimalis menggunakan Tailwind CSS.

---

## 🛠️ Teknologi yang Digunakan

* **Framework:** Next.js 15 (App Router)
* **Bahasa:** TypeScript
* **Styling:** Tailwind CSS & @tailwindcss/typography (untuk preview markdown)
* **Library Markdown:** `react-markdown` & `react-syntax-highlighter`

---

## 🚀 Cara Instalasi Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek Readter di komputer lokal Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstal **Node.js** (versi 18.x atau yang terbaru disarankan) dan **npm** (atau yarn/pnpm).

### 2. Kloning Repositori
Buka terminal Anda dan jalankan perintah berikut:
```bash
git clone https://github.com/username-anda/readter.git
cd readter
```

### 3. Instal Dependensi

Instal semua library yang dibutuhkan proyek ini (termasuk Tailwind, Markdown parser, dan compiler TypeScript):

```bash
npm install

```

### 4. Jalankan Server Pengembangan

Setelah proses instalasi selesai, jalankan server lokal dengan perintah:

```bash
npm run dev

```

### 5. Buka di Browser

Buka browser favorit Anda dan akses alamat berikut:

```text
http://localhost:3000

```

---

## 📂 Struktur Proyek

```text
└── 📁readter
    └── 📁app
        ├── globals.css      # Konfigurasi Tailwind global
        ├── layout.tsx       # Root layout & setup font (Geist)
        ├── page.tsx         # Logika utama Editor, Sidebar, dan Preview
    └── 📁public             # File aset statis (SVG/Icons)
    ├── next.config.ts       # Konfigurasi Next.js
    ├── tailwind.config.ts   # Konfigurasi tema Tailwind
    └── package.json         # Daftar dependensi & script proyek

```

---

## 🤝 Kontribusi

Kontribusi selalu terbuka! Jika Anda ingin meningkatkan fitur, memperbaiki bug, atau mempercantik tampilan UI:

1. Fork repositori ini.
2. Buat branch fitur baru (`git checkout -b fitur/FiturKeren`).
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur keren baru'`).
4. Push ke branch tersebut (`git push origin fitur/FiturKeren`).
5. Buat Pull Request (PR) baru.

---

## 📜 Lisensi

Proyek ini didistribusikan di bawah **MIT License**. Lihat file `LICENSE` untuk informasi lebih lanjut.
