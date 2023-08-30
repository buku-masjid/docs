<h1 align="center">
  Panduan Buku Masjid
</h1>

<p align="center">
  Buku Masjid adalah sistem pengelolaan keuangan dan jadwal pengajian masjid berbasis web.
</p>

<p align="center">
  <a href="https://github.com/buku-masjid/buku-masjid/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/buku-masjid/buku-masjid?style=flat-square" alt="GitHub">
  </a>
</p>

## Kebutuhan Spesifikasi

- [Git](https://git-scm.com/) - versi terbaru
- [Node.js](https://nodejs.org/) - versi LTS terbaru

<details>
<summary>Kenapa butuh Node.js?</summary>

Tema Hugo [Doks](https://getdoks.org/) (yang digunakan pada dokumentasi ini) menggunakan npm (dari Node.js) untuk manajemen dependensi.

</details>

## Cara Install

1. Clone Repositori Git
    ```bash
    git clone https://github.com/buku-masjid/docs.git buku-masjid-docs && cd buku-masjid-docs
    ```

2. Install Dependensi
    ```bash
    npm install
    ```

3. Jalankan server development
    ```bash
    npm run start
    ```

## Resep

Dokumentasi ini dibuat dengan

- [Hugo](https://gohugo.io/documentation/) - generator web statis
- [Doks](https://getdoks.org/) - tema hugo untuk dokumentasi
