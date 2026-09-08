/***********************************************
 * Google Apps Script — Form Mitra BukuMasjid
 * ---------------------------------------------
 * Deploy sebagai Web App:
 *   Deploy -> New deployment -> Web App
 *   - Execute as        : Me
 *   - Who has access    : Anyone (untuk dipanggil Cloudflare Function)
 *
 * SETUP WAJIB di Script properties:
 *   TELEGRAM_BOT_TOKEN  = <bot token>
 *   TELEGRAM_CHAT_ID    = <chat id>
 *
 * Sheet: tab "Sheet2", kolom sesuai urutan append di bawah.
 ***********************************************/

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents || '{}');

    // Urutan kolom (Sheet2): nama, ponsel, domisili, status,
    //   pekerjaan, alasan, info_source, agreement, timestamp
    var agreement = data.agreement ? 'Yes' : 'No';
    var row = [
      data.nama_lengkap || '',
      data.nomor_ponsel || '',
      data.domisili || '',
      data.status_pernikahan || '',
      data.pekerjaan || '',
      data.alasan || '',
      data.info_source || '',
      agreement,
      new Date().toISOString(),
    ];

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Sheet2') || ss.insertSheet('Sheet2');
    sheet.appendRow(row);

    // Kirim notif Telegram
    var message =
      '🤝 <b>Gabung Mitra</b>\n' +
      '<b>Nama:</b> ' + (data.nama_lengkap || '-') + '\n' +
      '<b>Ponsel:</b> ' + (data.nomor_ponsel || '-') + '\n' +
      '<b>Domisili:</b> ' + (data.domisili || '-') + '\n' +
      '<b>Status:</b> ' + (data.status_pernikahan || '-') + '\n' +
      '<b>Pekerjaan:</b> ' + (data.pekerjaan || '-') + '\n' +
      '<b>Alasan:</b> ' + (data.alasan || '-');

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
