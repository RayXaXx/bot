const xpperlimit = 50
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `╭「➻❥RɑyXɑXx-BOT➻❥」
│🛒 *NOTA DE PAGO* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➯‣ *Compra nominal* : + ${count}💎 
│➯‣ *Gastado* : -${xpperlimit * count} RayXaXx-ᴄᴏɪɴs
╰───────────────╯`, m)
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *RayXaXx-ᴄᴏɪɴs* para comprar *${count}* Diamantes💎`, m)
}
handler.help = ['bus', 'busyall']
handler.tags = ['money']
handler.command = ['bus', 'busyall'] 
handler.register = false
handler.disabled = false

export default handler
