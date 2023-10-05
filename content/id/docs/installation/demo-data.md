---
title: "Data Demo"
description: "Generate data demo untuk simulasi buku masjid."
lead: "Generate data demo untuk simulasi buku masjid."
date: 2023-08-30T10:21:00+08:00
lastmod: 2023-08-31T11:11:00+08:00
draft: false
images: []
menu:
  docs:
    parent: "installation"
weight: 240
toc: true
---

{{< alert icon="💡" context="warning" >}}
Fitur ini hanya berlaku untuk non-production. Cek di file `.env`, nilai `APP_ENV` bukan `production`.
{{< /alert >}}

Setelah selesai proses install di localhost, kita dapat membuat beberapa data dummy/demo untuk kebutuhan simulasi.

## Generate Data Demo

Data dummy/demo yang akan di-generate adalah: buku, rekening bank, riwayat saldo rekening bank, jadwal pengajian, jadwal khatib, dan transaksi kas.

### 3 bulan terakhir

Untuk meng-generate data 3 bulan terakhir (bulan ini, bulan lalu, dan 2 bulan yang lalu):

```
php artisan buku-masjid:demo-data
```

###  Tentukan Rentang Tanggal

Untuk meng-generate data pada rentang tanggal `start_date` dan `end_date`:

```
php artisan buku-masjid:generate-demo-data --start_date=2023-07-01 --end_date=2023-10-31
```

### Reset Isi Database

Untuk melakukan reset isi database (dikosongkan semua) sebelum generate data demo:

```bash
php artisan buku-masjid:generate-demo-data --reset-all
```

## Hapus Data Demo

Perintah untuk menghapus semua data demo:

```bash
php artisan buku-masjid:remove-demo-data
```

Keterangan:

1. Semua record yang di-generate untuk data demo, `created_at` nya berisi `NULL`.
2. Pada perintah ini, semua record dengan `created_at=NULL` akan dihapus.
  ![Demo record created_at null](images/demo-record-created_at-null.jpg "Demo record created_at null")
