---
title: "Profil User"
description: "Pengaturan profil user yang sedang login."
lead: "Pengaturan profil user yang sedang login."
date: 2023-09-07T17:10:00+08:00
lastmod:
draft: false
images: []
type: docs
menu:
  tutorial:
    parent: "settings"
weight: 400
toc: true
---

Profil user adalah halaman informasi user yang sedang login.

## Info Profil User

![Profil User Buku Masjid](images/desktop-view/16-profil-user-01.jpg "Profil User Buku Masjid")

<h4 class="mt-2">Keterangan</h4>

1. Untuk mengatur kategori, klik menu **Pengaturan**.
1. Klik sub menu **Profil User**.
1. Informasi "Nama" dan "Alamat Email" user yang sedang login.
1. Informasi "Role" (bisa disebut jabatan) user.
1. Pilihan Bahasa (Bahasa Indonesia dan Bahasa Inggris).
1. Tombol untuk **Edit Profil**.
1. Tombol untuk **Keluar** atau logout dari sistem.

## Edit Profil User

Untuk mengubah data profil user yang sedang login, lakukan langkah berikut:

![Profil User Buku Masjid](images/desktop-view/16-profil-user-02.jpg "Profil User Buku Masjid")

<h4 class="mt-2">Keterangan</h4>

1. Untuk halaman Profil User, klik tombol **Edit Profil**.
1. Ubah "Nama User" sesuai keperluan.
1. Ubah "Alamat Email" sesuai keperluan.
    - Alamat email tidak harus aktif, yang penting dengan format `aaa@domain.com` (boleh email fiktif).
    - Alamat email ini hanya digunakan untuk login, bukan untuk menerima email pemberitahuan atau semisalnya.
1. Klik tombol **Update Profil**.
1. Jika update profil berhasil, akan tampil pesan: "Update Profil anda berhasil".
    ![Edit profil user berhasil](images/desktop-view/16-profil-user-03.jpg "Edit profil user berhasil")

## Role User

Pada sistem buku masjid, ada 4 role yang tersedia:

1. Administrator:
    - Bisa input, edit, dan hapus semua data dalam sistem.
1. Ketua
    - Bisa input, edit, dan hapus data jadwal pengajian.
    - Tidak bisa input, edit, dan hapus data transaksi dan kategori.
1. Sekretaris
    - Bisa input, edit, dan hapus data jadwal pengajian.
    - Tidak bisa input, edit, dan hapus data transaksi dan kategori.
1. Bendahara
    - Bisa input, edit, dan hapus data transaksi dan kategori.
    - Tidak bisa input, edit, dan hapus data jadwal pengajian.
