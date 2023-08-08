import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['19703726995', '©RɑyXɑXx', true],
  ['19703726995', '©RɑyXɑXx', true],
]
global.suittag =['19703726995']
global.mods = []
global.prems = ['19703726995'], 
global.prems = ['19703726995'],

global.packname = '\n\n\n\n\n\n\n\n\n\n\n\n©RɑyXɑXx'
global.author = 'Tu bot con elegancia'
global.vs = '1.10.90'
global.version = vs
global.gt = '©RɑyXɑXx-BOT'
global.hadesbot = gt
global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt
global.ig = 'https://www.instagram'
global.hadesig = ig
global.md = 'https://github.com/RayXaXx/bot.git'
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/KlAYxPxLAkSGOyZxeXXHjYk'
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/KlAYxPxLAkSGOyZxeXXHjYk'
global.nnngrupo = nnn
global.paypal = 'https://pay'
global.donar = paypal
global.rg = '🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨'
global.resultado = rg
global.ag = '⚠️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ⚠️'
global.advertencia = ag
global.iig = '📌ɪɴғᴏʀᴍᴀᴄɪᴏɴ✨'
global.informacion = iig
global.fg = '❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌'
global.fallo = fg
global.mg = '❗ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʟᴏ ʜᴀ ᴜsᴀᴅᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ'
global.mal = mg
global.eeg = '📩ˢᵁ ᴿᴱᴾᴼᴿᵀᴱ ᴴᴬ ˢᴵᴰᴼ ᴱᴺⱽᴵᴬᴰᴼ📩'
global.envio = eeg
global.eg = '🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨'
global.exito = eg

global.wm = '©RɑyXɑXx-BOT'
global.igfg = '©RɑyXɑXx-BOT'
global.wait = '⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱'

global.imagen1 = fs.readFileSync('./views/Menu.jpg')
global.imagen2 = fs.readFileSync('./views/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./views/Me.jpg')
global.imagen4 = fs.readFileSync('./views/+18.jpg')
global.imagen5 = fs.readFileSync('./views/anime.jpg')
global.imagen6 = fs.readFileSync('./views/bot.jpg')
global.imagen7 = fs.readFileSync('./views/minecraft.jpg')


global.mods = [] 

global.multiplier = 65

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
