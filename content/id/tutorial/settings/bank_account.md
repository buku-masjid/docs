---
title: "Rekening Bank"
description: "Pencatatan saldo rekening bank masjid."
lead: "Pencatatan saldo rekening bank masjid."
date: 2023-09-22T14:56:00+08:00
lastmod:
draft: false
images: []
type: docs
menu:
  tutorial:
    parent: "settings"
weight: 440
toc: true
---

## Tentang Fitur Rekening Bank

Fitur **Rekening Bank**, adalah fitur yang memungkinkan pengurus masjid untuk mencatat riwayat saldo rekening bank masjid. Fungsi dari fitur ini:

1. Mencatat nomor rekening bank milik masjid (bisa lebih dari satu).
1. **Hanya** mencatat riwayat saldo akhir bulan untuk masing-masing rekening bank.
1. **Tidak** mencatat transaksi pemasukan dan pengeluaran rekening bank.

Fitur ini dibuat berdasarkan hasil riset kami, bahwa aturan rekening bank untuk masjid adalah sebagai berikut:

1. Reneking bisa menerima transfer masuk dari mana saja
1. Penarikan saldo harus dilakukan melalui teller bank dengan formulir slip penarikan yang ditandatangai minimal 2 pengurus masjid (Ketua dan Bendahara).
1. Tidak ada kartu ATM untuk tarik tunai atau transfer di mesin ATM

Sehingga fitur ini hanya digunakan untuk **mencatat saldo setiap akhir bulan**. Saldo rekening bank akan masuk ke dalam perhitungan pada laporan keuangan bulanan. Seperti pada contoh laporan di bawah ini, misal kita mencatat saldo akhir bulan **Juli 2023**.

![Saldo Rekening akhir bulan](images/desktop-view/20-bank-account-01.jpg "Saldo Rekening akhir bulan")

Maka saldo tersebut akan tercatat pada laporan bulan **Juli 2023** untuk dijumlahkan dengan saldo kas masjid di bulan tersebut.

![Saldo Rekening Bank pada Laporan Buku Masjid](images/desktop-view/20-bank-account-02.jpg "Saldo Rekening Bank pada Laporan Buku Masjid")


## Daftar Rekening Bank

![Rekening Bank Masjid](images/desktop-view/20-bank-account-03.jpg "Rekening Bank Masjid")

<h4 class="mt-2">Keterangan</h4>

1. Untuk melihat daftar Rekening Bank, klik menu **Rek. Bank**.
1. Tampil daftar Rekening Bank yang ada pada sistem saat ini (bisa lebih dari satu).
1. "Nama Bank".
1. "No. Rek" dan "Atas nama" diisi sesuai dengan Nomor Rekening dan Atas Nama rekening bank.
1. Informasi saldo tercatat terakhir per tanggal berapa.
1. Status rekening **Aktif** atau **Non Aktif**.
1. Tombol untuk melihat riwayat saldo rekening.
1. Tombol untuk edit data rekening.
1. Tombol untuk input rekening baru.

## Input Rekening Bank Baru

![Input Rekening Bank Baru](images/desktop-view/20-bank-account-04.jpg "Input Rekening Bank Baru")

1. Buka halaman Rekening Bank, dan klik **Input Rek. Bank Baru**.
1. Isi "Nama Bank".
1. Isi "No. Rek".
1. Isi "Atas Nama".
1. Isi "Deskripsi" (tidak wajib).
1. Klik **Input Rek. Bank Baru**.

## Riwayat Saldo Rekening Bank

![Riwayat Saldo](images/desktop-view/20-bank-account-06.jpg "Riwayat Saldo")

1. Buka halaman Rekening Bank, dan klik **Lihat Detail** pada rekening yang ingin dilihat riwayat saldonya.
1. Tampil informasi detail bank
1. Tampil riwayat saldo setiap akhir bulan yang berisi
    - Per Tanggal: Tanggal cek saldo di akhir bulan
    - Jumlah: Saldo di rekening bank pada tanggal tersebut
    - Deskripsi: Bisa berupa informasi saldo akhir bulan {nama bulan} {tahun}
    - Oleh: Nama user yang menginput saldo rekening bank.
    - Tombol Edit: Untuk mengubah data riwayat saldo jika ada keliru input data.

## Edit Rekening Bank

![Edit Rekening Bank](images/desktop-view/20-bank-account-05.jpg "Edit Rekening Bank")

<h4 class="mt-2">Keterangan</h4>

1. Untuk edit Rekening Bank, pada **Daftar Rekening Bank**, klik tombol **Edit** pada salah satu Rekening Bank yang ingin diubah.
1. Muncul kotak dialog edit, ubah data yang diinginkan.
1. Pada pilihan "Status":
    - Pilih **"Non Aktif"** jika Rekening Bank sudah tidak digunakan lagi.
    - Pilih **"Aktif"** jika Rekening Bank masih aktif digunakan.
1. Klik tombol **Update Rek. Bank**.

## Riwayat Saldo Rekening Bank

![Riwayat Saldo](images/desktop-view/20-bank-account-06.jpg "Riwayat Saldo")

1. Buka halaman Rekening Bank, dan klik **Lihat Detail** pada rekening yang ingin dilihat riwayat saldonya.
1. Tampil informasi detail bank
1. Tampil riwayat saldo setiap akhir bulan yang berisi
    - Per Tanggal: Tanggal cek saldo di akhir bulan
    - Jumlah: Saldo di rekening bank pada tanggal tersebut
    - Deskripsi: Bisa berupa informasi saldo akhir bulan {nama bulan} {tahun}
    - Oleh: Nama user yang menginput saldo rekening bank.
    - Tombol Edit: Untuk mengubah data riwayat saldo jika ada keliru input data.

### Input Riwayat Saldo

![Input Riwayat Saldo](images/desktop-view/20-bank-account-07.jpg "Input Riwayat Saldo")

1. Pada halaman Detail Rekening Bank, klik **Input Riwayat Saldo Baru**.
1. Isi "Per Tanggal" sesuai dengan tanggal cek saldo.
1. Isi "Saldo" sesuai dengan jumlah saldo saat itu.
1. Isi "Deskripsi" (tidak wajib).
1. Klik **Input Riwayat Saldo Baru**.

### Edit/Hapus Riwayat Saldo

![Edit Hapus Riwayat Saldo](images/desktop-view/20-bank-account-08.jpg "Edit Hapus Riwayat Saldo")

1. Pada halaman Detail Rekening Bank, klik **Edit** pada riwayat saldo yang ingin diubah.
1. Ubah data riwayat saldo sesuai yang benar
1. Klik **Update Riwayat Saldo**.
1. Atau klik tombol **Hapus** untuk menghapus riwayat saldo.
