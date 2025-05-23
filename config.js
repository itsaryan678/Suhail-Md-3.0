const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="orochibestbot2@gmail.com"
global.location="Himachal Pradesh, India."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "Aryan Chauhan" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919317171638";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_11_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDgyLFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk1LFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDg3LFxuICAgICAgICAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTAyWG5tWHYrbXgxZjFhQy9hNkY3NDhtcTY5UUZYejFpenQ4Y1MvWXdrND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTgwOTE5ODI4NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFBM0QzNzQzODM5NzREMzM3MjkwMTIzNzcxNTU0N0UxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0Nzk4NzkwNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODA5MTk4Mjg2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0U3NTlGQzZBM0ZDREQ0NjQyOEYyRjc3OTJFQjE0RDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ3OTg3OTA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4MDkxOTgyODY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNzY1QkZGMDc3MEQyQjM4NDAyMUEwRTMyRTdCQUY5Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDc5ODc5MDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNjJoblRsTnhSc1dVQjRiY2NJU3hZZ1wiLFxuICBcInBob25lSWRcIjogXCIyYzQzN2FhMi0wMWVkLTQxYTItYjZhNi1kN2JhZWE0Njg5YmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAyNyxcbiAgICAgIDI0OSxcbiAgICAgIDIzOSxcbiAgICAgIDgxLFxuICAgICAgMTU5LFxuICAgICAgNDYsXG4gICAgICAxODIsXG4gICAgICA2NixcbiAgICAgIDEwOCxcbiAgICAgIDAsXG4gICAgICAxNjgsXG4gICAgICA0MixcbiAgICAgIDg0LFxuICAgICAgMjE1LFxuICAgICAgNDAsXG4gICAgICAxNjUsXG4gICAgICAxMjEsXG4gICAgICAxMzgsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE5MCxcbiAgICAgIDI0NSxcbiAgICAgIDI1MSxcbiAgICAgIDAsXG4gICAgICAyMzgsXG4gICAgICAxNDUsXG4gICAgICAxNjQsXG4gICAgICAxMDgsXG4gICAgICAxOTUsXG4gICAgICAyNDAsXG4gICAgICAyMzAsXG4gICAgICA2NixcbiAgICAgIDIyMixcbiAgICAgIDk3LFxuICAgICAgNzgsXG4gICAgICAyNTAsXG4gICAgICAxNTgsXG4gICAgICAyNTEsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01EQitmd0JFTHpid01FR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaW1ZT0NLU3VMcjA3TmxPWnRUVWJES0U3cDZYY0ZhSVM1NG9BRS9GU2hSRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5VDEzQ3I4T3AzNlY1aUxudkwxa0UrYko1ME1vMmZ1ZGk1Y2RkVlkrekxKdXR0MEhyemI3Y092NGlxcU5wNTJGb2VROVN3RVQwNmlHcFFnZzJhYzNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCbUNid3hQTVdUTHA4aVdRSDYreTlkSWtMMXEvY3ZIMDFZMlk1ZVF6SUFMVkc3OE5PcUZVeS9GZjNyQmFORSs1RGFKUkc4emFjblBMTWRmWTFvK1REdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODA5MTk4Mjg2ODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT3JvY2hpIEJlc3Rib3RcIixcbiAgICBcImxpZFwiOiBcIjE3MTI1Mzg4NTMyMTMwODo1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MDkxOTgyODY4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDc5ODc5MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFcnhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVydS5qc29uIjogIntcImtleURhdGFcIjpcIlFxZEhzOFd4YjFaeW4rWEZsaHVPMUUrZG9QcTZlY0ZhcXFSaWZiRndra289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTMwNDczMTUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFcnYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjUncvM1JtV1dZbEdMN3NJVytFalpjd3ZVdEpjbXRTaFZvRnJuMjR1SHVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUzMDQ3MzE1MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXJ3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZURkOXd6R1pLbkwyWjhzTW5vUERzbEI3Wmhoa1YrcjVTVnNKSVhtRWVvVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MzA0NzMxNTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc5ODczNjAwOTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFcnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMRTBqSHJNSGRGWm9DbDVvR1R0YUtGczE5NFRiVE5EdCtHbU1RV3o2bXBVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUzMDQ3MzE1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ3OTg3OTA1OTQ4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Aryan Chauhan",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Orochi Bestbot 🤖",
  ownername:process.env.OWNER_NAME|| "Aryan Chauhan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
