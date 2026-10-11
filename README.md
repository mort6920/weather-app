# 🌤 weather app

App cuaca sederhana buat ngecek kondisi cuaca di beberapa lokasi sekitar Jakarta dan sekitarnya. Dibuat sebagai bagian dari lab freeCodeCamp.

---

## link

0

---

## Lokasi yang Tersedia

- Lenteng Agung
- Blok M
- Palmerah
- Pasar Rebo
- Puncak Bogor
- Depok

Kalau mau tambah lokasi baru, tinggal tambah koordinatnya di objek `locationCoords` di `script.js` dan tambah option baru di `index.html`
fyi:lokasi ini berdasarkan tempat biasa saya main.

---

## Data yang Ditampilkan

| Info | Keterangan |
|------|------------|
| Suhu | Dalam satuan °C |
| Terasa seperti | Suhu yang dirasakan tubuh |
| Kelembapan | Persentase kelembapan udara |
| Angin | Kecepatan angin (m/s) |
| Tiupan | Kecepatan hembusan angin (m/s) |
| Ikon | Gambar kondisi cuaca saat ini |

---

## API

Data cuaca diambil dari **OpenWeatherMap** lewat endpoint:

```
https://api.openweathermap.org/data/2.5/weather?lat=<lat>&lon=<lon>&units=metric&appid=<key>
```

Pakai sistem **koordinat (lat/lon)** bukan nama kota, supaya lokasi-lokasi kecil yang nggak dikenal API tetap bisa kebaca datanya.

Ikon cuaca diambil dari:
```
https://openweathermap.org/img/wn/<kode>@2x.png
```

---

## Struktur File

```
challange 5 build a Weather App/
├── index.html   — struktur halaman & dropdown lokasi
├── style.css    — tampilan dark theme dengan gradasi biru
└── script.js    — logika fetch API & render data ke halaman
```

---

## Catatan

- Kalau muncul alert "Something went wrong" biasanya karena koneksi putus atau API key expired
- API key sudah tertanam langsung di `script.js` — kalau mau deploy publik sebaiknya disembunyikan di backend atau environment variable
- Nametag di bawah kartu posisinya random tiap refresh, sengaja

---