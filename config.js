const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94740637622"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94740637622' 
global.devs = '94740637622';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1TR3k5NUM0QXEySFhGMnlMYWZXb0ZZZlZ0RFJ1OVVRNVJUdHFHWWdGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzJYRFA5MTQ0N2hFUHhyRHZCTlIxVUc3d3FRYkdKSDdsZnV5ajk0OHFXdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QmlMemJsV2RDd3BjeTkxd2pOa2trSkZheU80Q0RkbWpSOXBKdDlnSW1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwM0lRRHcwN3lVSnFhZU0wYkpCeGhNeXJFT0ZUZ0xoTW44U2RvOFkvNFFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCNGpHdFh2MzhEZDlObFQrTWtVUDZuRlJBWUplU1ZnUlBGRXUyUXBsVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im02NUVJUVdiU1IvOFcwblBaTTVJK3VERTlScFlzMzFHNTZnRTlPMVN1QUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNiYW5YKzFRSDdWR2ZUM0VzRFNsVFpRdVZ2dTByWllrZ2cvcEJudmEyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjMvWkdJR2xOdEt5bzN4ZUJqaU40YmF3VnJtMWtEb1JGelBNajdTNGdEZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhNSkhoVUp3dTZPZ1JDbVNrTkJOQ3oxR2Rra3dIMHJTNU9jZEY2TzNCVjRFalZaaDBVTHlUbUJYRjB1eGhNS3VIa1pURWdUdWd4Qm9VVU1ZdHM3Nmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6IlFmd3dKNHhMeUgwejc1Y0h6SEh4SjRSWXEzYTlZdFV2WWdYNmRxRU5aK0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRSQVVkampaU21PYkNwYi1NTE1uY2ciLCJwaG9uZUlkIjoiNWYzNTVmOTYtZjA1Ny00YzQwLThmZDQtOWM5MjBmNjFjMmNmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkzNlJrTDRVS3p1cVRZZUxzaGYvVzBwQXFrMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyMGRtUlBaOE90c0kySHY3ZUlUeVpnQzkyTFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTM0VlNXUjgiLCJtZSI6eyJpZCI6Ijk0NzQwNjM3NjIyOjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNhZGVlcGEuLi7wn42C8J+SjPCfkbwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08yWDA0WUZFTGU5MWE0R0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii91QnZicm9pK3RtWnVHRjZ1YVhMamtKeG80MWl2R3JzUE92L09GczQ3RXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImF1ditsOUNDYXkzS2NyYUJCU092L0d6Ti9CMkVrN3lVUkptNHQ2L1lCUUZDUUZRMnZVZENHWmZ5NWo0MFZyOXc5allaM21xenhaZlp5VHQ1Zkt4NUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMcTVGYUNBczZzQmlwRWRJVGRkOC93RzF3YWdLVHNWRE15WnNLRStPN0JWSTdadDBJMTlkaWpzL05TazdkMDFTMi9JSG9BMExEd1dPV1U3REVaNExqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQwNjM3NjIyOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmY3Z2IyNjZJdnJabWJoaGVybWx5NDVDY2FPTllyeHE3RHpyL3poYk9PeEwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDg0ODIyMzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRDIxIn0= ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sadeepa official' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '👼..HI I AM ONLINE NOW.....😁💓' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'praivet' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
