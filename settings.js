//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +6285850268349
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Galirus Official" //ur yt chanel name
global.socialm = "GitHub: Galirus404" //ur github or insta name
global.location = "1-chōme-3-20 Nakanoshima, Kita Ward, Osaka, 530-0005, Jepang(1-chōme-3-20 Nakanoshima, Kita Ward, Osaka, 530-0005, Jepang)" //ur location

//new
global.botname = 'Shiroko Chan & Galirus Sensei' //ur bot name
global.ownernumber = '6285850268349' //ur owner number
global.ownername = 'GALIRUS SENSEI' //ur owner name
global.websitex = "https://youtu.be/OkJvdx27t-w"
global.wagc = "https://whatsapp.com/channel/0029VacIkty7dmeShHqzJC1W"
global.themeemoji = '🧐'
global.wm = "Galirus Sensei."
global.botscript = 'https://Github.com/Galirus404/bug-wa' //script link
global.packname = "Sticker By"
global.author = "GALIRUS SENSEI\n\n+6285850268349"
global.creator = "6285850268349@s.whatsapp.net"
global.xprefix = ''
global.premium = ["6285850268349"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '48' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Batas Anda sudah habis!',
	nsfw: 'Nsfw dinonaktifkan di grup ini, Tolong beritahu admin untuk mengaktifkannya',
    done: 'ガリラス先生クリア | Selesai Sensei Galirus ✓',
    error: 'Error Mas E !',
    success: 'GALIRUS: Wanjaay Nih Tod Dah Selesai!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
