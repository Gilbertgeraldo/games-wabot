let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Simpati [081235136510]
│ • Gopay [081235136510]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281235136510
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
