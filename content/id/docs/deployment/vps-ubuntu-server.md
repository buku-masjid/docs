---
title: "VPS - Ubuntu Server (Apache)"
description: "Cara menginstall Buku Masjid di VPS - Ubuntu Server dengan Apache Web Server."
lead: "Cara menginstall Buku Masjid di VPS - Ubuntu Server dengan Apache Web Server."
date: 2023-08-30T10:21:00+08:00
lastmod: 2024-08-04T11:11:00+08:00
draft: false
images: ["/images/youtube-deploy-vps-ubuntu-server.png"]
menu:
  docs:
    parent: "deployment"
weight: 300
toc: true
---

<a href="https://www.youtube.com/watch?v=JYfRzlYLgM8" target="_blank" title="Cara menginstall Buku Masjid di VPS - Ubuntu Server dengan Apache Web Server">
  <img class="img-fluid blur-up ls-is-cached lazyloaded" srcset="/images/youtube-deploy-vps-ubuntu-server_hu99fcb03fe99dadb4a8d7358b42a1a6b4_404387_688bbbb2c14112d49dba66cdcb5ea3a9.webp 480w, /images/youtube-deploy-vps-ubuntu-server_hu99fcb03fe99dadb4a8d7358b42a1a6b4_404387_f5b25242561149678909d0b1532c8fa8.webp 720w, /images/youtube-deploy-vps-ubuntu-server_hu99fcb03fe99dadb4a8d7358b42a1a6b4_404387_f9bcebf4f68f71acdb9dc02c97e112f7.webp 1080w, /images/youtube-deploy-vps-ubuntu-server_hu99fcb03fe99dadb4a8d7358b42a1a6b4_404387_d4c7935f9bc75c02e403537c4ead5016.webp 1280w" sizes="80vw" src="/images/youtube-deploy-vps-ubuntu-server_hu99fcb03fe99dadb4a8d7358b42a1a6b4_404387_1280x0_resize_q75_h2_box_3.webp" alt="Cara menginstall Buku Masjid di VPS - Ubuntu Server dengan Apache Web Server" title="Cara menginstall Buku Masjid di VPS - Ubuntu Server dengan Apache Web Server" width="1280" height="720">
</a>
(<a href="https://www.youtube.com/watch?v=JYfRzlYLgM8" target="_blank">Klik untuk melihat video tutorial</a>)

## Install MariaDB

Update dan upgrade Ubuntu terlebih dahulu:

```
sudo apt update
sudo apt upgrade -y
```

Install MariaDB:

```
sudo apt install mariadb-server -y
```

Login ke MariaDB:

```
sudo mariadb -u root
```

Membuat database dan user database:

```
CREATE DATABASE bukumasjid;
CREATE USER 'bukumasjid'@'localhost' IDENTIFIED BY 'rahasia';
GRANT ALL PRIVILEGES ON bukumasjid.* TO 'bukumasjid'@'localhost';
FLUSH PRIVILEGES;
exit
```

## Install Apache

Install Apache:

```
sudo apt install apache2 -y
```

Membuat file konfigurasi virtual host untuk subdomain `bm.namamasjid.com`, silakan sesuaikan dengan domain/subdomain yang digunakan:

```
sudo nano /etc/apache2/sites-available/bm.namamasjid.com.conf
```

Masukkan konfigurasinya:

```
<VirtualHost *:80>
    ServerName bm.namamasjid.com
    DocumentRoot /var/www/bm.namamasjid.com/public

    <Directory /var/www/bm.namamasjid.com/public>
        Options -Indexes +FollowSymLinks +MultiViews
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog /var/log/apache2/bm.namamasjid.com_error.log
    CustomLog /var/log/apache2/bm.namamasjid.com_access.log combined
</VirtualHost>
```

Mengaktifkan virtual host dan restart Apache:

```
sudo a2ensite bm.namamasjid.com.conf
sudo systemctl restart apache2
```

## Install SSL

{{< alert icon="👉" context="warning" >}}
Sebelum melanjutkan proses install SSL, pastikan domain/subdomain sudah diarahkan ke IP Address VPS terlebih dahulu.
{{< /alert >}}

Install certbot:

```
sudo apt install certbot python3-certbot-apache -y
```

Request SSL untuk subdomain `bm.namamasjid.com`:

```
sudo certbot --non-interactive \
-m admin@namamasjid.com \
--agree-tos \
--no-eff-email \
--apache \
-d bm.namamasjid.com \
--redirect
```

## Install PHP 8.1 dan composer

Memasang repository PPA untuk PHP:

```
sudo add-apt-repository ppa:ondrej/php -y
```

Install PHP dan extension:

```
sudo apt install libapache2-mod-php8.1 php8.1 php8.1-cli php8.1-common php8.1-mbstring php8.1-gd php8.1-intl php8.1-xml php8.1-mysql php8.1-zip php8.1-curl php8.1-tidy php8.1-imagick -y
```

Restart Apache:

```
sudo systemctl restart apache2
```

Install Composer:

```
sudo apt install unzip curl -y
curl https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
sudo chown root:root /usr/local/bin/composer
sudo chmod a+x /usr/local/bin/composer
```

## Install Buku Masjid

Install Git:

```
sudo apt install git -y
```

Clone repository GitHub Buku Masjid:

```
git clone https://github.com/buku-masjid/buku-masjid.git
```

Beralih ke direktori `buku-masjid`:

```
cd buku-masjid
```

Install dependensi aplikasi dengan Composer:

```
composer install
```

Copy file `.env`:

```
cp .env.example .env
```

Generate key:

```
php artisan key:generate
```

Membuka file `.env`:

```
nano .env
```

Sesuaikan konfigurasinya, seperti nama masjid, URL, timezone, dan database:

```
APP_NAME="Buku Masjid"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://bm.namamasjid.com
APP_TIMEZONE="Asia/Jakarta"

DB_DATABASE=bukumasjid
DB_USERNAME=bukumasjid
DB_PASSWORD=rahasia

MASJID_NAME="Nama Masjid"
MASJID_DEFAULT_BOOK_ID=1
AUTH_DEFAULT_PASSWORD=rahasia

MONEY_CURRENCY_CODE="Rp"
MONEY_PRECISION=2
MONEY_DECIMAL_SEPARATOR=","
MONEY_THOUSANDS_SEPARATOR="."
```

Jalankan migrasi database:

```
php artisan migrate --seed
```

Ada pertanyaan APPLICATION IN PRODUCTION, jawab `yes`:

```
Do you really wish to run this command? (yes/no) [no] yes
```

Membuat passport key:

```
php artisan passport:keys
```

Membuat link storage:

```
php artisan storage:link
```

Memindahkan direktori `buku-masjid` ke document root:

```
cd
sudo mv buku-masjid /var/www/bm.namamasjid.com
```

Mengubah ownership direktori:

```
sudo chown -R www-data:www-data /var/www/bm.namamasjid.com
```

Buku Masjid sudah dapat diakses melalui `https://bm.namamasjid.com`.

Login dengan menggunakan default user:

```
username = admin@example.net
password = rahasia
```
