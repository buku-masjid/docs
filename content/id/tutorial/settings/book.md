---
title: "Buku Kas"
description: "Pemisahan catatan keuangan tiap kegiatan yang berbeda."
lead: "Pemisahan catatan keuangan tiap kegiatan yang berbeda."
date: 2023-09-07T17:10:00+08:00
lastmod:
draft: false
images: []
type: docs
menu:
  tutorial:
    parent: "settings"
weight: 430
toc: true
---

Fitur **Buku** (atau bisa disebut **Buku Kas**), adalah fitur yang memungkinkan pengurus masjid untuk memisahkan catatan keuangan setiap kegiatan yang masjid. Misalnya ada:

1. Buku kas Operasional Masjid,
1. Buku kas Kegiatan Ramadhan 2022,
1. Buku kas Kegiatan Ramadhan 2023,
1. Buku kas Kegiatan Qurban 2022,
1. Buku kas Kegiatan Qurban 2023,
1. Buku kas Konsumsi Buka Puasa Senin/Kamis,
1. Dan lain-lain. Pengurus bendahara dapat membuat buku sesuai kegiatan tanpa dibatasi.

## Daftar Buku

![Buku Kas Masjid](images/desktop-view/19-buku-kas-01.jpg "Buku Kas Masjid")

<h4 class="mt-2">Keterangan</h4>

1. Untuk melihat daftar buku, klik menu **Pengaturan**.
1. Klik sub menu **Buku**.
1. Tampil daftar buku yang ada pada sistem saat ini.
1. Kolom "Status" berisi informasi apakah buku ini masih aktif digunakan (**Aktif**) atau tidak (**Non Aktif**).
1. Kolom "Visibilitas" berisi informasi apakah laporan keuangan pada buku ini dipublikasikan ke publik atau tidak.
    - Pilih **"Publik"** agar laporan keuangan pada buku ini tampil di halaman publik.
    - Pilih **"Internal"** agar laporan keuangan pada buku ini tidak tampil di halaman publik.
1. Kolom "Rek. Bank" berisi informasi rekening bank milik masjid yang digunakan pada kegiatan ini.
1. Kolom "Deskripsi Buku" berisi informasi ketarangan kegiatan yang dilakukan.
1. Tombol **Buka Buku** untuk memilih buku mana yang aktif digunakan saat ini.
1. Tombol **Edit** untuk mengubah data informasi buku.
1. Tombol **Input Buku Baru** untuk menambah buku baru.

## Buku yang sedang Aktif

Ketika kita melakukan input data keuangan, baik transaksi maupun kategori, data tersebut akan tersimpan pada **satu buku yang sedang aktif**. Jika dalam sistem ini ada beberapa buku, maka kita harus menentukan buku mana yang ingin digunakan saat melihat laporan atau saat ingin menginput transaksi kas.

![Buku Aktif](images/desktop-view/19-buku-kas-02.jpg "Buku Aktif")

### Input Data pada Buku Aktif

Contoh kita memiliki 3 buku:

1. Buku Kas Masjid (Aktif)
1. Ramadhan 2023
1. Qurban 2023

Maka:

1. Setiap transaksi, kategori, dan laporan keuangan akan **terikat pada satu buku**.
1. **Secara *default*** buku yang aktif adalah Buku Kas Masjid (buku yang pertama).
1. Setiap input transaksi, kategori, dan laporan akan masuk pada buku tersebut.
1. Ketika ingin input transaksi pada buku lain, misal Qurban 2023, maka buku Qurban 2023 **harus diaktifkan dulu**. Ketika ingin input transaksi pada buku yang lain lagi, maka buku harus diaktifkan dulu.
1. Termasuk juga ketika ingin edit/input kategori pada satu buku, maka buku tersebut **harus diaktifkan dulu**.
1. Ketika ingin melihat laporan pada buku Qurban 2023, maka buku Qurban 2023 harus diaktifkan lagi.
1. Hal yang sama juga dilakukan untuk buku lainnya.
1. Hanya ada 1 buku yang aktif pada satu waktu.

### Cara Mengatifkan Buku

![Buka Buku Kas Masjid](images/desktop-view/19-buku-kas-03.jpg "Buka Buku Kas Masjid")

Untuk mengatifkan buku yang ingin digunakan, lakukan langkah berikut:

1. Klik Nama Buku pada bagian atas layar, misal: "Buku Kas Masjid", akan tampil daftar buku yang bisa diaktifkan.
1. Klik Nama Buku yang ingin diaktifkan, misal: "Qurban 2023".
1. Jika berhasil diaktifkan, akan muncul pemberitahuan *"Pindah buku ke: Qurban 2023"*.
  ![Berhasil aktifkan buku](images/desktop-view/19-buku-kas-04.jpg "Berhasil aktifkan buku")

### Data yang Terikat Buku Aktif

Ketika mengaktifkan satu buku, maka data yang akan dibaca/mengikuti buku tersebut adalah:

1. **Transaksi** (pemasukan dan pengeluaran)
1. **Kategori** (pemasukan dan pengeluaran)
1. **Laporan Keuangan** (Bulanan, Per Kategori, dan per Pekan)

Jadi ketiga data tersebut akan berbeda pada setiap buku.

## Input Buku Baru

Ketika ada kegiatan baru yang perlu dibuatkan buku catatan kas terpisah, maka kita buat buku baru dengan cara:

![Input Buku Baru](images/desktop-view/19-buku-kas-05.jpg "Input Buku Baru")

1. Buka halaman pengaturan buku, dan klik **Input Buku Baru**
1. Isi "Nama Buku".
1. Isi "Deskripsi Buku" (tidak wajib).
1. Pilih "Rekening Bank" (tidak wajib).
1. Klik **Input Buku Baru**.

## Edit Buku

![Edit Buku](images/desktop-view/19-buku-kas-06.jpg "Edit Buku")

<h4 class="mt-2">Keterangan</h4>

1. Untuk edit buku, pada **Daftar Buku**, klik tombol **Edit** pada salah satu buku yang ingin diubah.
1. Muncul kotak dialog edit, ubah data yang diinginkan.
1. Pada pilihan "Status":
    - Pilih **"Non Aktif"** jika buku sudah tidak digunakan lagi.
    - Pilih **"Aktif"** jika buku masih aktif digunakan.
1. Pada pilihan "Visibilitas Laporan":
    - Pilih **"Publik"** jika laporan keuangan buku ini bersifat publik.
    - Pilih **"Internal"** jika laporan keuangan buku ini untuk internal pengurus.
1. Klik tombol **Update Buku**.

## Non-aktifkan Buku

Sedikit kita rincikan tentang buku **"Aktif"** dan **"Non Aktif"**":

1. Jika kita sudah tidak lagi menggunakan salah satu buku, maka sebaiknya buku tersebut cukup di non aktifkan saja (tidak dihapus).
1. Buku yang berstatus non aktif akan tetap dapat dilihat laporan bulanan, ketika kita melihat riwayat laporan bulan yang telah lalu.
1. Buku yang berstatus non aktif tidak dapat dilakukan input transaksi dan input/edit data kategori.

## Visibilitas Buku

Sedikit kita rincikan tentang visibilitas buku **"Publik"** dan **"Internal"**:

1. Buku yang visibilitasnya bersifat **"Publik"** dan berstatus **Aktif**, maka rincian keuangan buku tersebut akan **tampil** pada laporan publik (untuk jamaah dan masyarakat umum).
1. Buku yang visibilitasnya bersifat **"Internal"**, maka laporan keuangan buku tersebut **tidak tampil** pada laporan publik.
1. Setiap input buku yang baru, secara default visibilitasnya bersifat **"Internal"**.

## Hapus Buku

Sistem menyediakan fitur untuk menghapus buku yang sudah tidak digunakan lagi.

{{< alert icon="⚠️" context="warning" >}}
Menghapus buku hanya dilakukan jika memang buku ini sudah tidak digunakan lagi baik untuk riwayat transaksi di waktu lalu dan ke depan.
{{< /alert >}}

![Hapus Buku](images/desktop-view/19-buku-kas-07.jpg "Hapus Buku")

<h4 class="mt-2">Keterangan</h4>

1. Untuk menghapus buku, dimulai dari kotak dialog edit buku, kemudian klik tombol **Hapus**.
1. Muncul kotak dialog **Hapus Buku** sebagai konfirmasi bahwa kita memang ingin menghapus buku tersebut.
1. Klik tombol **Ya, silakan hapus!** untuk menghapus buku.

{{< alert icon="❗" context="danger" >}}
Harap diingat bahwa buku yang telah dihapus tidak dapat dikembalikan lagi.
{{< /alert >}}
