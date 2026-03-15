---
title: "VPS - Ubuntu Server (Docker)"
description: "Cara menginstall Buku Masjid di VPS - Ubuntu Server dengan Docker."
lead: "Cara menginstall Buku Masjid di VPS - Ubuntu Server dengan Docker."
date: 2023-08-30T10:21:00+08:00
lastmod: 2026-03-16T00:00:00+08:00
draft: false
images: []
menu:
  docs:
    parent: "deployment"
weight: 305
toc: true
---

{{< alert icon="👉" context="info" >}}
Disarankan menggunakan Ubuntu LTS terbaru, misalnya Ubuntu 22.04
{{< /alert >}}

## Install Docker

Update dan upgrade Ubuntu terlebih dahulu:

```
sudo apt update
sudo apt upgrade -y
```

Install paket yang dibutuhkan:

```
sudo apt-get install -y ca-certificates curl nano vim git
```

Menambahkan GPG key dan repository Docker:

```
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

Install Docker Engine:

```
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Mengaktifkan dan menjalankan servis Docker:

```
sudo systemctl enable docker
sudo systemctl start docker
```

## Install Nginx dan SSL

{{< alert icon="👉" context="warning" >}}
Sebelum melanjutkan proses install SSL, pastikan domain/subdomain sudah diarahkan ke IP Address VPS terlebih dahulu.
{{< /alert >}}

Install Nginx:

```
sudo apt install nginx -y
```

Membuat file konfigurasi reverse proxy untuk subdomain `bm.namamasjid.com`, silahkan sesuaikan dengan domain/subdomain yang digunakan:

```
sudo nano /etc/nginx/sites-available/bm.namamasjid.com
```

Masukkan konfigurasinya:

```
server {
    listen 80;
    server_name bm.namamasjid.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

{{< alert icon="👉" context="info" >}}
Sesuaikan port `8000` dengan port yang digunakan pada file `docker-compose.yml`.
{{< /alert >}}

Mengaktifkan konfigurasi dan restart Nginx:

```
sudo ln -s /etc/nginx/sites-available/bm.namamasjid.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

Install certbot:

```
sudo apt install certbot python3-certbot-nginx -y
```

Request SSL untuk subdomain `bm.namamasjid.com`:

```
sudo certbot --non-interactive \
-m admin@namamasjid.com \
--agree-tos \
--no-eff-email \
--nginx \
-d bm.namamasjid.com \
--redirect
```

## Install Buku Masjid dengan Docker

Membuat folder dan masuk ke direktori:

```
sudo mkdir -p /var/www
cd /var/www
```

Clone repository Buku Masjid:

```
sudo git clone https://github.com/buku-masjid/buku-masjid.git
cd buku-masjid
```

Build Docker image dari Dockerfile:

```
sudo docker build -t buku-masjid:latest .
```

{{< alert icon="👉" context="info" >}}
Proses build memerlukan waktu beberapa menit karena akan mengunduh base image dan menginstall dependensi PHP.
{{< /alert >}}

Copy file `.env`:

```
cp .env.example .env
```

Generate application key:

```
php_key=$(sudo docker run --rm buku-masjid:latest php artisan key:generate --show)
sed -i "s|APP_KEY=|APP_KEY=${php_key}|" .env
```

Membuka file `.env`:

```
nano .env
```

Sesuaikan konfigurasinya, seperti nama masjid, URL, dan timezone:

```
APP_NAME="Buku Masjid"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://bm.namamasjid.com
APP_TIMEZONE="Asia/Jakarta"

MASJID_NAME="Nama Masjid"
MASJID_DEFAULT_BOOK_ID=1
AUTH_DEFAULT_PASSWORD=rahasia

MONEY_CURRENCY_CODE="Rp"
MONEY_PRECISION=2
MONEY_DECIMAL_SEPARATOR=","
MONEY_THOUSANDS_SEPARATOR="."
```

{{< alert icon="👉" context="info" >}}
Konfigurasi database tidak perlu diubah pada file `.env` karena sudah diatur melalui `docker-compose.yml`. File `docker-compose.yml` sudah menyediakan container MySQL beserta konfigurasi koneksi database-nya.
{{< /alert >}}

Update file `docker-compose.yml` agar menggunakan image yang sudah di-build:

```
nano docker-compose.yml
```

Ubah baris `image` pada service `server`:

```yaml
services:
  server:
    image: buku-masjid:latest
```

Jalankan Docker:

```
sudo docker compose up -d
```

Tunggu sekitar 30 detik agar MySQL selesai melakukan inisialisasi, kemudian jalankan migrasi database:

```
sudo docker compose exec server php artisan migrate --seed --force
```

Mengatur permission pada direktori storage:

```
sudo docker compose exec -u root server chmod -R 777 storage bootstrap/cache
```

Membuat passport key:

```
sudo docker compose exec server php artisan passport:keys --force
```

Buku Masjid sudah dapat diakses melalui `https://bm.namamasjid.com`.

Login dengan menggunakan default user:

```
username = admin@example.net
password = rahasia
```
