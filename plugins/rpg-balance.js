let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`╭「➻❥RɑyXɑXx-BOT➻❥」
│💰 *𝐁𝐀𝐋𝐀𝐍𝐂𝐄* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➯‣❏ *✨*𝙽𝚘𝚖𝚋𝚛𝚎:* ${taguser}
│➯‣❏ *💎𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜:* ${global.db.data.users[who].limit}💎
│➯‣❏ *💵dolares* ${global.db.data.users[who].joincount}
│➯‣❏ *♦️RayXaXx-ᴄᴏɪɴs* ${global.db.data.users[who].money}
│➯‣❏ *🧿Exp* ${global.db.data.users[who].exp}
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥RɑyXɑXx-BOT➻❥」
│➯‣ 📝*𝙽𝙾𝚃𝙰:*
│➯‣ *para ir al tienda y 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎 usa el  𝚌𝚘𝚖𝚊𝚗𝚍𝚘*
│➯‣❏ *.shop*
╰───────────────╯`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'dinero', 'balance'] 
handler.register = false
export default handler
