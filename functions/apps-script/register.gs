/***********************************************
 * Google Apps Script — Form Register BukuMasjid
 * ---------------------------------------------
 * DEploy sebagai Web App:
 *   Deploy -> New deployment -> Web App
 *   - Execute as        : Me
 *   - Who has access    : Anyone (untuk dipanggil Cloudflare Function)
 *
 * Alur: Cloudflare Function forward JSON ke URL web app ini.
 * Script ini append baris ke Sheet dan kirim notif Telegram.
 *
 * SETUP WAJIB di tab File > Project properties > Script properties:
 *   TELEGRAM_BOT_TOKEN  = <bot token>
 *   TELEGRAM_CHAT_ID    = <chat id>
 *
 * Sheet: tab "Sheet1", kolom sesuai urutan append di bawah.
 ***********************************************/

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents || '{}');

    // Urutan kolom (Sheet1): service, nama_masjid, alamat, maps, domisili,
    //   nama_dkm, jabatan, whatsapp, email, info_source, agreement, timestamp
    var agreement = data.agreement ? 'Yes' : 'No';
    var row = [
      data.service_type || '',
      data.masjid_name || '',
      data.alamat || '',
      data.google_maps || '',
      data.domisili || '',
      data.name || '',
      data.jabatan || '',
      data.whatsapp || '',
      data.email || '',
      data.info_source || '',
      agreement,
      new Date().toISOString(),
    ];

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Sheet1') || ss.insertSheet('Sheet1');
    sheet.appendRow(row);

    // Kirim notif Telegram
    var message =
      '📝 <b>Daftar BukuMasjid</b>\n' +
      '<b>Layanan:</b> ' + (data.service_type || '-') + '\n' +
      '<b>Masjid:</b> ' + (data.masjid_name || '-') + '\n' +
      '<b>Alamat:</b> ' + (data.alamat || '-') + '\n' +
      '<b>Domisili:</b> ' + (data.domisili || '-') + '\n' +
      '<b>DKM:</b> ' + (data.name || '-') + ' (' + (data.jabatan || '-') + ')\n' +
      '<b>WA:</b> ' + (data.whatsapp || '-') + '\n' +
      '<b>Email:</b> ' + (data.email || '-');

    sendTelegram(message);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendTelegram(text) {
  var token = PropertiesService.getScriptProperties().getProperty('TELEGRAM_BOT_TOKEN');
  var chatId = PropertiesService.getScriptProperties().getProperty('TELEGRAM_CHAT_ID');
  if (!token || !chatId) return;

  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
    }),
  });
}
