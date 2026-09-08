/**
 * Cloudflare Pages Function — Register / Daftar BukuMasjid
 * Endpoint: POST /api/register
 *
 * Alur (Opsi A):
 *  1. Terima form submit (JSON atau urlencoded)
 *  2. Validasi field wajib
 *  3. Forward ke Google Apps Script Web App URL (dari env APP_SCRIPT_REGISTER_URL)
 *     - Apps Script yang bertanggung jawab: append ke Google Sheet + kirim notif Telegram
 *
 * Env yang dibutuhkan (set di Cloudflare Pages -> Settings -> Environment variables):
 *  - APP_SCRIPT_REGISTER_URL  : URL Google Apps Script Web App untuk register
 */
export async function onRequestPost(context) {
  const { request, env } = context;

  // 1. Terima body (dukung JSON & form-urlencoded)
  let payload;
  try {
    if (request.headers.get('content-type')?.includes('application/json')) {
      payload = await request.json();
    } else {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    }
  } catch (err) {
    return json({ ok: false, error: 'Invalid request body' }, 400);
  }

  // 2. Validasi field wajib
  const required = ['service_type', 'masjid_name', 'alamat', 'domisili', 'name', 'jabatan', 'whatsapp'];
  const missing = required.filter((f) => !payload[f] || !String(payload[f]).trim());
  if (missing.length > 0) {
    return json({ ok: false, error: `Missing fields: ${missing.join(', ')}` }, 400);
  }

  // 2b. Validasi email (opsional, format dasar)
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return json({ ok: false, error: 'Invalid email' }, 400);
  }

  // 3. Forward ke Google Apps Script
  const target = env.APP_SCRIPT_REGISTER_URL;
  if (!target) {
    return json({ ok: false, error: 'APP_SCRIPT_REGISTER_URL not configured' }, 500);
  }

  try {
    const resp = await fetch(target, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const text = await resp.text();
    return json({ ok: resp.ok, result: text, status: resp.status }, resp.ok ? 200 : 502);
  } catch (err) {
    return json({ ok: false, error: `Forward failed: ${err.message}` }, 502);
  }
}

export async function onRequestGet() {
  return json({ ok: false, error: 'Method not allowed. Use POST.' }, 405);
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
