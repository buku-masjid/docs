---
title: "Visibilitas Laporan"
description: "Pengaturan kategori laporan internal dan publik."
lead: "Pengaturan kategori laporan internal dan publik."
date: 2023-09-07T17:10:00+08:00
lastmod: 2023-09-09T23:56:00+08:00
draft: false
images: []
type: docs
menu:
  tutorial:
    parent: "report"
weight: 230
toc: true
---

Pada sistem ini disediakan pengaturan kategori mana yang dapat dilaporkan rincian secara **publik** dan mana yang hanya untuk **internal** pengurus. Contohnya seperti gaji karyawan. Kategori Gaji Karyawan kita set "visibilitas"-nya menjadi "Internal"

## Visibilitas Publik

Secara default, seluruh kategori (kelompok) transaksi sifatnya publik, artinya pengunjung web atau jamaah dapat melihat rincian transaksi untuk kategori ini seperti yang dilihat oleh pengurus (user yang login).

## Visibilitas Internal

Jika kita ubah visibilitas kategori menjadi **Internal**, maka pengunjung web atau jamaah hanya akan melihat judul kategori dan total transaksi saja. Lebih detail digambarkan dengan contoh kasus di bawah

### Laporan Gaji Karyawan

Contoh pengeluaran kategori Gaji Karyawan. Pengurus (user yang login) akan melihat rincian pengeluaran per transaksi.

![Laporan Internal](images/desktop-view/12-visibilitas-laporan-1.jpg "Laporan Internal")

### Set Visibilitas Internal

Pada pengaturan kategori, "Gaji Karyawan" di set visibilitas **Internal**.

![Set Visibilitas Internal](images/desktop-view/12-visibilitas-laporan-2.jpg "Set Visibilitas Internal")

{{< alert icon="💡" context="warning" >}}
Pengaturan kategori dibahas pada tutorial [Pengaturan → Kategori]({{< relref "tutorial/settings/category" >}}).
{{< /alert >}}

### Laporan yang tampil di publik

Maka laporan per kategori yang tampil di publik akan seperti ini (hanya judul kategori dan total transaksi saja):

![Laporan per Kategori di publik](images/desktop-view/12-visibilitas-laporan-3.jpg "Laporan per Kategori di publik")

Dan laporan kas per pekan yang tampil di publik akan seperti ini (hanya judul kategori dan total transaksi saja):

![Laporan Kas per Pekan di publik](images/desktop-view/12-visibilitas-laporan-4.jpg "Laporan Kas per Pekan di publik")
