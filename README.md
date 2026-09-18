# DopamineEats — Versi WEB

Proyek website DopamineEats berbasis React + Vite + Tailwind CSS.

## Menjalankan di komputer

Pastikan Node.js sudah terpasang, lalu buka Terminal/CMD di folder proyek ini.

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite, biasanya:

```text
http://localhost:5173/
```

## Membuat versi siap deploy

```bash
npm run build
```

Hasil website berada di folder:

```text
dist/
```

Folder `dist` tersebut dapat di-upload ke layanan hosting statis yang mendukung website Vite.

## Preview hasil build

```bash
npm run preview
```

## Catatan

- Versi ini khusus WEB.
- Konfigurasi Android/Capacitor dan Windows/Electron sudah dihapus agar proyek lebih sederhana.
- Fitur yang memakai gambar eksternal atau layanan browser tertentu memerlukan koneksi internet.
