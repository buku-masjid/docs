---
title: "Kategori"
description: "Pengaturan kategori transaksi pemasukan dan pengeluaran."
lead: "Pengaturan kategori transaksi pemasukan dan pengeluaran."
date: 2023-09-07T17:10:00+08:00
lastmod: 2023-09-20T17:05:00+08:00
draft: false
images: []
type: docs
menu:
  tutorial:
    parent: "settings"
weight: 420
toc: true
---
Setiap transaksi keuangan yang diinput ke dalam sistem Buku Masjid dapat dimasukkan ke dalam kategori pemasukan atau pengeluaran. Pada laporan keuangan, sistem akan merangkum total transaksi pada setiap kategori ini.

## Kategori Default

Saat pertama kali digunakan, sistem ini memiliki beberapa kategori *default* sebagai pengaturan awal (nanti bisa diubah oleh user). Di antara yang kategori tersebut adalah:

### Kategori Pemasukan

1. Kotak Infaq Hari Jumat
1. Kotak Infaq Kajian Subuh
1. Kotak Infaq Harian
1. Pemasukan Infaq Lain-lain

### Kategori Pengeluaran

1. Gaji Karyawan
1. Insentif Hari Jumat
1. Insentif Kajian
1. Konsumsi Kajian Subuh
1. Tagihan Air
1. Tagihan Listrik
1. Tagihan Internet
1. Biaya Lain-lain
1. Pengambilan Di BANK

## Daftar Kategori

![Daftar Kategori](images/desktop-view/14-kategori-01.jpg "Daftar Kategori")

<h4 class="mt-2">Keterangan</h4>

1. Untuk mengatur kategori, klik menu **Pengaturan**.
1. Klik sub menu **Kategori**.
1. Tampil daftar kategori untuk satu Buku (setiap buku akan berbeda kategori).
1. Pada kolom nama kategori:
    - {{< badge text="Hijau" backgroundColor="#00AABB" >}} untuk kategori **pemasukan**.
    - {{< badge text="Merah" backgroundColor="#F16867" >}} untuk kategori **pengeluaran**.
1. Kolom **Visibilitas** untuk mengatur apakah transaksi pada kategori ini:
    - Hanya untuk **"internal"** pengurus.
    - Atau bersifat **"publik"** untuk diketahui masyarakat umum.
1. Tombol untuk melihat daftar seluruh transaksi pada kategori tersebut.
1. Tombol untuk melakukan **Edit** data kategori.
1. Tombol untuk **Input** kategori baru.

## Input Kategori

![Input Kategori](images/desktop-view/14-kategori-02.jpg "Input Kategori")

<h4 class="mt-2">Keterangan</h4>

1. Untuk input kategori, pada **Daftar Kategori**, klik tombol **Input Kategori Baru**.
1. Muncul kotak dialog input, isi "Nama Kategori".
1. Pilih "Warna Kategori"
    - {{< badge text="Hijau" backgroundColor="#00AABB" >}} untuk kategori **pemasukan**.
    - {{< badge text="Merah" backgroundColor="#F16867" >}} untuk kategori **pengeluaran**.
1. Isi "Deskripsi Kategori" (tidak wajib).
1. Klik tombol **Input Kategori Baru**.

## Edit Kategori

![Edit Kategori](images/desktop-view/14-kategori-03.jpg "Edit Kategori")

<h4 class="mt-2">Keterangan</h4>

1. Untuk edit kategori, pada **Daftar Kategori**, klik tombol **Edit** pada salah satu kategori yang ingin diubah.
1. Muncul kotak dialog edit, ubah data yang diinginkan.
1. Pada pilihan "Status":
    - Pilih **"Non Aktif"** jika kategori sudah tidak digunakan lagi.
    - Pilih **"Aktif"** jika kategori masih aktif digunakan.
1. Pada pilihan "Visibilitas Laporan":
    - Pilih **"Publik"** jika laporan transaksi pada kategori ini bersifat publik (bisa dilihat rincinannya oleh masyarakat umum).
    - Pilih **"Internal"** jika laporan transaksi pada kategori ini bersifat internal pengurus (misal pengeluaran gaji karyawan).
1. Klik tombol **Update Kategori**.

## Non-aktifkan Kategori

Sedikit kita rincikan tentang kategori **"Aktif"** dan **"Non Aktif"**":

1. Jika kita sudah tidak lagi menggunakan salah satu kategori, maka sebaiknya kategori tersebut cukup di non aktifkan saja (tidak dihapus).
1. Kategori yang berstatus non aktif tidak muncul pada saat kita akan input transaksi.
1. Kategori yang berstatus non aktif akan tetap muncul pada laporan bulanan, ketika kita melihat riwayat laporan bulan yang telah lalu.

## Visibilitas Kategori

Sedikit kita rincikan tentang visibilitas kategori **"Publik"** dan **"Internal"**:

1. Kategori yang visibilitasnya bersifat **"Publik"**, maka rincian pemasukan dan pengeluaran yang masuk pada kategori tersebut akan **tampil** pada laporan publik (untuk jamaah dan masyarakat umum).
1. Kategori yang visibilitasnya bersifat **"Internal"**, maka rincian pemasukan dan pengeluarannya pada kategori tersebut **tidak tampil** pada laporan publik.
1. Setiap input kategori yang baru, secara default visibilitasnya bersifat **"Publik"**.

{{< alert icon="💡" context="warning" >}}
Tampilan laporan terkait visibilitas kategori dibahas pada [Laporan Keuangan → Visibilitas Laporan]({{< relref "tutorial/report/visibility" >}}).
{{< /alert >}}

## Hapus Kategori

Sistem menyediakan fitur untuk menghapus kategori yang sudah tidak digunakan lagi.

{{< alert icon="❗" context="danger" >}}
Kategori yang telah dihapus tidak dapat dikembalikan lagi.
{{< /alert >}}

![Hapus Kategori](images/desktop-view/14-kategori-04.jpg "Hapus Kategori")

<h4 class="mt-2">Keterangan</h4>

1. Untuk menghapus kategori, dimulai dari kotak dialog edit kategori, kemudian klik tombol **Hapus**.
1. Muncul kotak dialog **Hapus Kategori** sebagai konfirmasi bahwa kita memang ingin menghapus kategori tersebut.
1. Ada pilihan centang "Hapus semua Transaksi pada Kategori ini".
    - Jika **dicentang** maka semua transaksi yang ada pada kategori tersebut akan ikut dihapus.
    - Jika **Tidak dicentang** maka semua transaksi yang ada pada kategori tersebut tidak ikut dihapus dan menjadi transaksi tanpa kategori.
1. Klik tombol **Ya, silakan hapus!** untuk menghapus kategori.

{{< alert icon="⚠️" context="warning" >}}
Menghapus kategori hanya dilakukan jika memang kategori ini sudah tidak digunakan lagi baik untuk riwayat transaksi di waktu lalu dan ke depan.
{{< /alert >}}
