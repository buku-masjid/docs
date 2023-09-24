---
title: "Windows (TODO)"
description: "Cara menginstall Buku Masjid di PC/Laptop Windows."
lead: "Cara menginstall Buku Masjid di PC/Laptop Windows."
date: 2023-08-30T10:21:00+08:00
lastmod: 2023-08-31T11:11:00+08:00
draft: false
images: []
menu:
  docs:
    parent: "installation"
weight: 220
toc: true
---

Berikut adalah langkah-langkah untuk menginstall aplikasi Buku Masjid di PC atau Laptop dengan sistem operasi Windows:
1.  Pastikan Anda memiliki **_setup_** yang sesuai untuk Laravel, yaitu PHP, Composer, dan MySQL. Anda dapat mengunduh dan menginstalnya secara manual atau menggunakan paket seperti **XAMPP** yang mencakup komponen-komponen ini.
2.  Buka **Command Prompt** atau **PowerShell** di Windows. Anda dapat melakukannya dengan mencari "cmd" atau "PowerShell" di menu Start.
3.  Masuk ke direktori htdocs di XAMPP dengan perintah: `cd C:\xampp\htdocs`
4.  Clone repository Buku Masjid dari GitHub dengan perintah: `git clone https://github.com/buku-masjid/buku-masjid.git`
5.  Setelah selesai, masuk ke direktori proyek: `cd buku-masjid`
6.  `composer install`
7.  Salin berkas .env.example dan simpan sebagai .env. Sesuaikan konfigurasi database dan pengaturan lain yang diperlukan dalam berkas .env.
    ```
    APP_URL=http://localhost
    APP_TIMEZONE="Asia/Makassar"

    DB_DATABASE=masjid
    DB_USERNAME=root
    DB_PASSWORD=

    MASJID_NAME="Masjid Ar-Rahman"
    MASJID_DEFAULT_BOOK_ID=1
    AUTH_DEFAULT_PASSWORD=keamanan999
    ```
8.  `php artisan key:generate`
9.  `php artisan migrate --seed`
10.  `php artisan passport:keys`
11.  `php artisan storage:link`
12.  `php artisan serve`
13.  Login dengan default user:
     ```
     email: admin@example.net
     password: keamanan999
     ```
