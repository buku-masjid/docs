---
title: "Localhost Linux"
description: "Cara menginstall Buku Masjid di PC/Laptop Linux."
lead: "Cara menginstall Buku Masjid di PC/Laptop Linux."
date: 2023-08-30T10:21:00+08:00
lastmod: 2023-08-30T10:21:00+08:00
draft: false
images: []
menu:
  docs:
    parent: "installation"
weight: 110
toc: true
---

1. Clone the repo : `git clone https://github.com/buku-masjid/buku-masjid.git`
1. `$ cd buku-masjid`
1. `$ composer install`
1. `$ cp .env.example .env`
1. `$ php artisan key:generate`
1. Buat **database pada mysql** untuk aplikasi ini
1. **Setting database** dan config lainnya pada file `.env`
    ```
    APP_URL=http://localhost
    APP_TIMEZONE="Asia/Makassar"

    DB_DATABASE=homestead
    DB_USERNAME=homestead
    DB_PASSWORD=secret

    MASJID_NAME="Masjid Ar-Rahman"
    MASJID_DEFAULT_BOOK_ID=1
    AUTH_DEFAULT_PASSWORD=keamanan999
    ```
1. `$ php artisan migrate --seed`
1. `$ php artisan passport:keys`
1. `$ php artisan storage:link`
1. `$ php artisan serve`
1. Login dengan default user:
    ```
    email: admin@example.net
    password: keamanan999
    ```
