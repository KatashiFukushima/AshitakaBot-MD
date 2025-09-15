import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["51974399615"]

global.botname = '🏹 AshitakaBot-MD'
global.namebot = '🏹 Ashitaka Bot'
global.bot = 'AshitakaBot'
global.packname = '🏹 𝗔𝘀𝗵𝗶𝘁𝗮𝗸𝗮𝗕𝗼𝘁-𝗠𝗗'
global.wm = '🌿 𝘼𝙨𝙝𝙞𝙩𝙖𝙠𝙖𝘽𝙤𝙩-𝙈𝘿'
global.author = '🥷 KatashiFukushima'
global.dev = '© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴛᴀꜱʜɪꜰᴜᴋᴜꜱʜɪᴍᴀ.'

global.banner = 'https://stellarwa.xyz/files/1757377941018.jpeg'
global.icon = 'https://stellarwa.xyz/files/1757378468505.jpeg'
global.currency = 'CryptoCoins'
global.sessions = 'sessions/session-bot'
global.jadi = 'sessions/session-sub'

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'Diamond'
}

global.my = {
  ch: '120363178367665133@newsletter',
  name: '💫👁️‍🗨️ 【Katashi Fukushima】 🥷🏻🚀',

  ch2: '120363315379486244@newsletter', 
  name2: '*ੈ✩‧₊˚ 『SpaceNight Team』 *ੈ✩‧₊˚',

  ch: '120363178367665133@newsletter',
  name: '💫👁️‍🗨️ 【Katashi Fukushima】 🥷🏻🚀',

  ch: '120363178367665133@newsletter',
  name: '💫👁️‍🗨️ 【Katashi Fukushima】 🥷🏻🚀',

  ch: '120363178367665133@newsletter',
  name: '💫👁️‍🗨️ 【Katashi Fukushima】 🥷🏻🚀',

  ch: '120363178367665133@newsletter',
  name: '💫👁️‍🗨️ 【Katashi Fukushima】 🥷🏻🚀'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
