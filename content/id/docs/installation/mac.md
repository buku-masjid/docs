---
title: "Mac OS"
description: "Cara menginstall Buku Masjid di Mac OS dengan Laravel Valet."
lead: "Cara menginstall Buku Masjid di Mac OS dengan Laravel Valet."
date: 2023-08-30T10:21:00+08:00
lastmod: 2023-08-31T11:11:00+08:00
draft: false
images: []
menu:
  docs:
    parent: "installation"
weight: 230
toc: true
---

{{< alert icon="👉" context="info" >}}
Untuk menginstall Buku Masjid di Mac OS tanpa menggunakan [Laravel Valet](https://laravel.com/docs/10.x/valet), bisa mengikuti panduan berikut: [Cara Install → Ubuntu/Linux Mint]({{< relref "docs/installation/ubuntu-linux-mint" >}}).
{{< /alert >}}

Untuk menginstall Buku Masjid di Mac OS dengan menggunakan Laravel Valet, bisa mengikuti panduan dibawah ini:

1. Clone the repo : `git clone https://github.com/buku-masjid/buku-masjid.git`
1. Gunakan PHP versi 8.1 : `valet use php@8.1`


   ![composer global update](images/composer-global-update.png "composer global update")


1. Setelah _switch_ versi PHP, sebaiknya jalankan `composer global update`
1. `$ cd buku-masjid`
1. `$ composer install`
1. `$ cp .env.example .env`
1. `$ php artisan key:generate`
1. Buat **database pada mysql** untuk aplikasi ini
1. **Setting database** dan config lainnya pada file `.env`

   ```
   APP_URL=http://buku-masjid.test
   APP_TIMEZONE="Asia/Makassar"

   DB_DATABASE=buku_masjid
   DB_USERNAME=root
   DB_PASSWORD=

   MASJID_NAME="Masjid Ar-Rahman"
   MASJID_DEFAULT_BOOK_ID=1
   AUTH_DEFAULT_PASSWORD=keamanan999
   ```

1. `$ php artisan migrate --seed`
1. `$ php artisan passport:keys`
1. `$ php artisan storage:link`
1. `$ valet link`
1. Akses [http://buku-masjid.test](http://buku-masjid.test), kemudian Login dengan default user:
   ```
   email: admin@example.net
   password: keamanan999
   ```
