const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://tariqaqib980:qB3fEtp0d7ipptXm@cluster0.8gd8f.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/C3hvdeFzNGw85epEc0Q56P";
global.website=process.env.GURL || "https://chat.whatsapp.com/C3hvdeFzNGw85epEc0Q56P" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/XPO3Vt8.jpeg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Amir-X-Whatsapp bot Beta!" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923114397148";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923114397148,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_56_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNzQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInlIU0R3QjNqc0ZuMUhKZms3c01ZVjZqSktaSEdqSW9weXc0SzlOZTBJWDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9JWXN1aUNPUlNxLWVha1kya1p5VGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTY5OWNiMzktMWVhMC00YTUzLWE3MjQtMzQ1MjdiYjBkMWI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDEzOSxcbiAgICAgIDE4MixcbiAgICAgIDE0MCxcbiAgICAgIDU2LFxuICAgICAgMTAwLFxuICAgICAgNzksXG4gICAgICAyMjAsXG4gICAgICAyMzAsXG4gICAgICAxNDYsXG4gICAgICAyMjQsXG4gICAgICAxNzMsXG4gICAgICAxOTksXG4gICAgICAxNzUsXG4gICAgICAxNjgsXG4gICAgICAzNyxcbiAgICAgIDIxMSxcbiAgICAgIDczLFxuICAgICAgMjM3LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgMTg4LFxuICAgICAgMTMsXG4gICAgICAyOCxcbiAgICAgIDIzMCxcbiAgICAgIDEwOCxcbiAgICAgIDE5MixcbiAgICAgIDIzMixcbiAgICAgIDEyMixcbiAgICAgIDQyLFxuICAgICAgMzYsXG4gICAgICAyMTIsXG4gICAgICAyMjEsXG4gICAgICA0NyxcbiAgICAgIDQ5LFxuICAgICAgMTUsXG4gICAgICAxMjMsXG4gICAgICAxOTgsXG4gICAgICAxMjMsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlhRU1QyRlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzExNDM5NzE0ODo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFtaXJcIixcbiAgICBcImxpZFwiOiBcIjc1NTY1ODg5NDk5MzUxOjg4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2MXdaZ0JFS2F5emJZR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT2d1SktYQlJQYzFpaUU1b25RVjh4dzFvWjNYSnlOWllIMVdVZnc4MGFEbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJSVNtRHJmMkNFRGxqUmptSlpPa3REZVJYZzZmdlpyTWlOSmFTSEZxMDBkWkRVbzQzLytlaGlUZlYzaXl2eDFHRENmblkxQ0ZtR1ppTUdZZkdGeU5BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoRndyVVB0WkhyNW00WkhaOHUvWEdvVSsweFV5aE10ditMUk5SRHpPRVh2RGhUdktJSmdkbzUyTml0Q0h5UmpENUoxOUdyR2RFbldraUtxOWJiQUlpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMTQzOTcxNDg6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTEyNjk1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNyS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3JLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYzQydytpZ0VLNHJPdW1VOU1Qc09aNkxobVdxUzYyRytqdjlvMzEvQ1lHND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTk4Mzg5NzQsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjUxMjY4OTk4MjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Amir",
  ownername:process.env.OWNER_NAME|| "Mian-amir",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "AMIR"  ).toUpperCase(),



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
