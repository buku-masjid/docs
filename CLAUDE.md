## Project Overview

Documentation site for [Buku Masjid](https://github.com/buku-masjid/buku-masjid), an open-source web-based mosque financial management and lecturing schedule system. This repo contains only the **documentation site**, not the application itself.

## Project Goals

Buku Masjid aims to solve three problems for mosques (masjid/mushalla):

1. **Financial transparency**: Enable public online access to mosque financial reports so donors (jamaah/masyarakat) can see where funds go and decide where to donate.
2. **Ease bendahara (treasurer) workload**: Automate financial report generation (monthly, per-category, per-week, PDF export) so treasurers only need to input transactions.
3. **Lecturing schedule publication**: Allow mosques to publish weekly khatib and pengajian schedules online, making it easy for jamaah and community groups to find daily lectures.

### Key features (of the Buku Masjid app this site documents)

**For mosque management (pengurus):**
- Book/ledger management (separate books per activity)
- Income/expense category management per book
- Transaction input (income and expenses)
- Financial reports with PDF export: monthly, per-category, per-week
- Friday khatib schedule management
- Regular lecturing schedule (public and women-only/muslimah)

**For the public (jamaah/masyarakat):**
- Monthly, per-category, and per-week financial reports
- Today's, tomorrow's, this week's, and next week's lecturing schedules
- Schedules grouped into: Friday khatib, general pengajian, muslimah-only pengajian

## Business Flow / Logic

### Core Concepts

The Buku Masjid app (which this site documents) has these core domain entities and flows:

**Users & Roles:**
- **Pengurus (management)** -logged-in users who input data and manage the system
- **Publik (public/jamaah)** -unauthenticated visitors who view published reports and schedules
- Default login: `admin@example.net` / `rahasia`

**Buku (Book/Ledger):**
- Central organizing unit -each mosque activity gets its own book (e.g., "Kas Masjid", "Ramadhan 2023", "Qurban 2023")
- Only **one book is active at a time** -all transaction input, category management, and report viewing operates on the active book
- To work on a different book, user must switch the active book first
- Each book has: Status (Aktif/Non Aktif) and Visibilitas (Publik/Internal)
- Non-active books: read-only (no new transactions/categories), but historical reports remain accessible
- Public books with active status appear in public reports; Internal books are hidden from public

**Kategori (Category):**
- Each book has its own set of income and expense categories
- Categories are color-coded: green = pemasukan (income), red = pengeluaran (expense)
- Default income categories: Kotak Infaq Jumat, Kotak Infaq Kajian Subuh, Kotak Infaq Harian, Infaq Lain-lain
- Default expense categories: Gaji Karyawan, Insentif Jumat, Insentif Kajian, Konsumsi Kajian, Tagihan Air/Listrik/Internet, etc.
- Categories have Visibilitas: **Publik** (transaction details visible to public) or **Internal** (only total shown to public, e.g., employee salary)
- Non-active categories don't appear in transaction input forms but remain in historical reports
- Deleting a category can optionally delete all its transactions or leave them uncategorized

**Transaksi (Transaction):**
- Each transaction belongs to one book and one category
- Fields: date, category, description, amount
- Two types: Pemasukan (income) and Pengeluaran (expense)

**Rekening Bank (Bank Account):**
- Records mosque bank account info (number, name, bank)
- Only tracks **end-of-month balance snapshots** -not individual bank transactions
- Bank balances are included in monthly financial reports
- Bank rule context: mosque accounts typically require dual-signature (ketua + bendahara) for withdrawals, no ATM card

### Report Flow

Reports are always scoped to the **active book**:

1. **Laporan Bulanan (Monthly)** - Summary by category with: opening balance (previous month's closing + bank balances), total income, total expense, net difference. Exportable as PDF.
2. **Laporan per Kategori (Per-Category)** - Detailed transaction list grouped by category for a given month.
3. **Laporan per Pekan (Per-Week)** - Transaction breakdown by week within a month.

Visibility rules apply: categories marked "Internal" show only the category name + total to public visitors (no transaction details).

### Lecturing Schedule Flow

Separate from the financial module:

1. **Jadwal Khatib Jumat** - Friday sermon schedule: date, time, khatib name, topic, optional video/audio links
2. **Jadwal Pengajian** - Regular lectures: date, time range, audience type (umum/muslimah), speaker, book/kitab info, optional media links
3. Schedules can be **duplicated** to quickly create recurring entries
4. Public view groups schedules by: today, tomorrow, this week, next week

### App Tech Stack (for context when writing docs)

- **Framework**: Laravel 10.x (PHP 8.1)
- **Database**: MySQL or MariaDB
- **Web server**: Apache or Nginx
- **Auth**: Laravel Passport (API keys)
- **Testing**: SQLite
- **Deployment options**: VPS with Apache (native), VPS with Docker, cPanel hosting

## Tech Stack

- **Static site generator**: [Hugo](https://gohugo.io/) v0.107.0 (extended)
- **Theme**: [Doks](https://getdoks.org/) v0.5.0 (Hugo theme for documentation)
- **CSS framework**: Bootstrap 5.2 (via npm)
- **Styling**: SCSS (`assets/scss/`)
- **JS bundling**: Babel
- **Linting**: ESLint (JS), Stylelint (SCSS), markdownlint-cli2 (Markdown)
- **Search**: FlexSearch
- **Deployment**: Netlify (redirects/headers output formats configured)
- **Package manager**: npm
- **Node.js**: >= 16.16.0

## Common Commands

```bash
npm install          # Install dependencies (also installs Hugo via hugo-installer)
npm run start        # Dev server at localhost (with --disableFastRender --buildFuture)
npm run build        # Production build (--gc --minify)
npm run lint         # Run all linters (scripts, styles, markdown)
npm test             # Same as lint
npm run clean        # Remove public/ and resources/
```

## Project Structure

```
config/                     # Hugo configuration
  _default/config.toml      # Main config (baseurl, multilingual, outputs, modules)
  _default/menus/menus.id.toml  # Navigation menus (Indonesian)
  production/config.toml     # Production overrides
content/id/                  # All content in Indonesian (id is the only active language)
  docs/                      # Documentation pages
    prologue/                # Introduction, features, screenshots
    installation/            # Local install guides (Windows, Ubuntu, Mac)
    deployment/              # Deploy guides (VPS Apache, VPS Docker, cPanel)
  blog/                      # Blog posts (monthly news, articles)
  tutorial/                  # Feature tutorials
  contact/                   # Contact page
  donate/                    # Donation page
  free-cloud/                # Free cloud info page
data/                        # Data files (sponsors.yml, docs-versions.yml)
layouts/                     # Hugo templates and shortcodes
assets/
  scss/                      # SCSS stylesheets
  images/                    # Images (blog, sponsors, desktop-view)
```

## Content Conventions

### Frontmatter (docs)

All docs use this frontmatter pattern:

```yaml
---
title: "Page Title"
description: "Short description."
lead: "Short description (same as description)."
date: 2023-08-30T10:21:00+08:00
lastmod: 2024-08-04T11:11:00+08:00
draft: false
images: []
menu:
  docs:
    parent: "deployment"   # Must match a section identifier
weight: 300                # Controls sort order within the section
toc: true
---
```

### Docs menu parents

- `prologue` (weight ~10-40)
- `installation` (weight ~200-240)
- `deployment` (weight ~300-320)
- `help` (weight ~60)

### Blog posts

Filename format: `YYYY-MM-DD-slug.md`. Blog images go in `assets/images/blog/` with naming pattern `YYYY-MM-DD-slug_NN.{jpg,png}`.

### Hugo shortcodes available

- `{{< alert icon="..." context="warning|info" >}}...{{< /alert >}}`
- `{{< youtube VIDEO_ID >}}`
- `{{< details "title" >}}...{{< /details >}}`
- `{{< badge >}}`
- `{{< email >}}`
- `{{< video >}}`
- `{{< mermaid >}}`
- `{{< bank_account_number >}}`
- `{{< whatsapp_number >}}`

## Language

- Content language: **Indonesian** (id). English, German, and Dutch are disabled.
- Write all content, descriptions, and leads in Indonesian.
- Code blocks and technical commands remain in English.

## Git Workflow

- **Upstream**: `git@github.com:buku-masjid/docs.git` (main project)
- **Origin**: `git@github.com:budiantoip/docs.git` (fork)
- **Main branch**: `master`
- Sync origin with upstream regularly via fetch + fast-forward merge.

## Do's

- Keep `description` and `lead` fields identical in frontmatter.
- Update `lastmod` when modifying existing content.
- Use Hugo shortcodes (e.g., `{{< youtube >}}`, `{{< alert >}}`) instead of raw HTML when possible.
- Place images in `assets/images/` (not `static/images/`).
- Follow existing weight numbering when adding new docs pages.
- Run `npm run lint` before committing to check for markdown/style issues.
- Always write detailed commit messages that explain what changed and why, not just "fix" or "update".

## Don'ts

- Don't add content in languages other than Indonesian (`id`).
- Don't change `config/_default/config.toml` `disableLanguages` without coordination.
- Don't use raw HTML for YouTube embeds -use `{{< youtube VIDEO_ID >}}`.
- Don't put images in `static/` -use `assets/images/` so Hugo can process them.
- Don't remove or reorder menu entries in `menus.id.toml` without checking the live nav.
- Don't modify `node_modules/` or commit `public/`/`resources/` directories.
