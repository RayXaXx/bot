import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen3
//let vn = './media/menu.mp3'
let img =  './views/Me.jpg'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╭「➻❥RɑyXɑXx-BOT➻❥」
│➯✨ *𝗛ᴏʟᴀ,➟${taguser}*
│➯🌴 *ᴏᴡɴᴇʀ:©RɑyXɑXx*
│➯🧿 *Número*➟51902061233*
│➯📅 *ғᴇᴄʜᴀ:➟${date}*
│➯⏰ *ᴛɪᴇᴍᴘᴏ:➟${uptime}*
│➯👥 *ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}*
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Estadísticas* ➻❥」
│➯ *✳️️Nivel:* ${level}
│➯ *🧿Experiencia:* ${exp}
│➯ *⚓Rango:* ${role}
│➯ *💎Diamantes:* ${limit}
│➯ *🔱RayXaXx-Coins:* ${money}
│➯ *💵dolares:* ${joincount}
│➯ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥📌 *𝕀ℕ𝔽𝕆 𝔹𝕆𝕋* 📌❥」
│➯🆙 *.enable comandos para el owner*
│➯♻️ *.tagall*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥🌟 *Grupos* 🌟❥」
│➯📌 *.welcome @tag*
│➯📌 *bye @tag*
│➯📌 *.infobot <estado del bot>*
│➯📌 *.hidetag*
│➯📌 *.del*
│➯📌 *.link link de tu grupo*
│➯📌 *.advertir*
│➯📌 *.unwarn*
│➯📌 *.listanum 52*
│➯📌 *.kicknum 52*
│➯📌 *.listwarn*
│➯📌 *.tagall*
│➯📌 *.warn*
│➯📌 *.grupo abrir/cerrar*
│➯📌 *.nowa 5190206123x*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥💎 *transfer* 💎❥」
│➯💵 *.transfer joincount mas <cantidad>*
│➯💎 *.transfer limit mas <cantidad>*
│➯🧿 *.transfer exp mas <cantidad>*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥ *gana&compara* ❥」
│➯⛏️ *.minar gana xp*
│➯⛏️ *.minar2 gana Diamantes*
│➯⛏️ *.minar3 gana RayXaXx-Coins*
│➯🧿 *.claim reclama tu recompensa diaria exp*
│➯🎁 *.coffer un cofre de recompensas diarias*
│➯📃 *.dinero para ver tus diamantes y dinero*
│➯💎 *puedes comprar diamantes usando los comandos* 
│➯🔱 *.busyall te cobra RayXaXx-Coins*
│➯🔱 *.bus <cantidad>* 
│➯🧿 *.buyall te cobra experiencia*
│➯🧿 *.buy <cantidad>*
│➯📃 *.perfil*
│➯💵 *.dolares te cobra diamantes*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥💎 *comandos-owner-add* 🧿❥」
│➯🧿 *.añadirxp <cantidad> @tag*
│➯💎 *.añadirdiamantes @tag <cantidad>*
│➯🔱 *.añadirdolares  @tag <cantidad>*
│➯💵 *.añadirdolares @tag <cantidad>*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥👾 *Stickers* 🌴❥」
│➯👾 *.s usalo con una imagen*
│➯👾 *.emojimix ☺&😈*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭──「❥🎙️ *Descargas* 📽️❥」
│➯📇 *.play nombre de tu canción*
│➯📇 *.facebook tu link de fb*
│➯📇 *.ig link de video instagram*
│➯📇 *.tiktok link de video tiktok*
│➯📇 *.calculadora Ejemplo : .calc 2+2*
│➯📇 *.ssweb link de tu img*
│➯📇 *.tts audio google*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭──「❥🗣️ *ia rayXaXx* 📃❥」
│➯👥 *.simi texto*
│➯👥 *.bot texto*
│➯👥 *.ia2 crea imagenes*
│➯👥 *.ia texto*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥🎮 *Juegos* 🎮❥」
│➯🎮 *.ttt juego michi*
│➯🎮 *.juego piedra/papel/tijera*
│➯🎮 *.acertijo*
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥🧿 *nivel* 🧿❥」
│➯🧿 *.levelup subir de nivel*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥🤴 *comandos-owner* 🤴❥」
│➯👁️‍🗨️ *.block*
│➯👁️‍🗨️ *.infinito*
│➯👁️‍🗨️ *.limpiarbot*
│➯👁️‍🗨️ *.blocklist*
│➯👁️‍🗨️ *.unblocklist*
│➯👁️‍🗨️ *.banuser*
│➯👁️‍🗨️ *.unbanuser*
│➯👁️‍🗨️ *.kick*
│➯👁️‍🗨️ *.fantasmas*
│➯👁️‍🗨️ *.agregar*
│➯👁️‍🗨️ *.resetlink*
│➯👁️‍🗨️ *.banchat banea el chat*
│➯👁️‍🗨️ *.unbanchat desbanea el chat*
│➯👁️‍🗨️ *.addcmd*
│➯👁️‍🗨️ *.delcmd*
│➯👁️‍🗨️ *.listcmd*
│➯👁️‍🗨️ *.actualizar*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥🎙️ *convertidor&mp3* 📽️❥」
│➯🎙️ *.mp3*
│➯🎙️ *.toimg*
│➯🎙️ *.tomp4*
│➯🎙️ *.tts* es hola
│➯🎙️ *.tovn*
│➯🎙️ *.qrcode*
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥📊 *Otros Comandos* ⚙️❥」
│➯📊 *.topdf*
│➯📊 *.afk*
╰───────────────╯`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.register = false
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
