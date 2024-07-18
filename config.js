const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923105171009";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_30_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDYwLFxuICAgICAgICA2NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMyLFxuICAgICAgICAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1LFxuICAgICAgICA4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgODMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhkcmlXUkFrSnQyUGlVblRFK0hCeEFGOTZYVHVyZXZicHNDYVBSQmtJdGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFhdHo2UTNJVFhPYndGTG45Z0J3MXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzZlMTEyYjItZTQzOS00ZWRkLWIzMzItMzA4ZTc3ZDE0MjczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICA0NCxcbiAgICAgIDE2OCxcbiAgICAgIDExMCxcbiAgICAgIDIzOCxcbiAgICAgIDkyLFxuICAgICAgMTU3LFxuICAgICAgMTAsXG4gICAgICA5LFxuICAgICAgMTYwLFxuICAgICAgMTYsXG4gICAgICAxMjgsXG4gICAgICA5MyxcbiAgICAgIDIwMyxcbiAgICAgIDExNyxcbiAgICAgIDk1LFxuICAgICAgMTA4LFxuICAgICAgODksXG4gICAgICAyNDIsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDI2LFxuICAgICAgMzcsXG4gICAgICA3MSxcbiAgICAgIDIzMyxcbiAgICAgIDE4NixcbiAgICAgIDExMyxcbiAgICAgIDYyLFxuICAgICAgNTIsXG4gICAgICA3NSxcbiAgICAgIDEwOSxcbiAgICAgIDQ5LFxuICAgICAgMTk1LFxuICAgICAgMTAwLFxuICAgICAgOTksXG4gICAgICAxMSxcbiAgICAgIDEzNyxcbiAgICAgIDE2NSxcbiAgICAgIDE2NCxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyNks4UFNWQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTA1MTcxMDA5OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4riw4oCi4LmPyZ7NnM2hy5DiuLvigKLiuLDwk4ap8J2Zj/CdmYPwnZmAICDwk4aj8JKErM2HzYfNh8yKzYrNhsyDXCIsXG4gICAgXCJsaWRcIjogXCIxMzc3MDU3NjE1NjI3OTU6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFdDdmRRQ0VQakQ0YlFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRQXRXSGozOFdjdDdnbW9uYXRmMUVSbFBPMkdYK1Z5TG81T0JveGVNL25JPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImd0UTFWRFZFb3k5N0VsYThBMnFyQkY0MmJxS1owaC9OTG5MZ2ZlbEpXREdsdHp6Q1FHcVlOdE5sbzExMmRrcUc2T1pYTUxxYVRqWUQ1UXVOMWRPa0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjM3U3RKN0E3Y0xicGNYSmdQMnNPTldaZDZrY2p3MGU3QXRxZU9BMTdnU3JuK0luTlhWK0dRd2daOVhFdkZ4b0lqcWMwTWIrVXp4enRzc3Q0aW8rM0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwNTE3MTAwOToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNjI1ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEWitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURaKy5qc29uIjogIntcImtleURhdGFcIjpcImJyanlqQUxEWGluMVkxalV3UmRaVTNpU0dzTnZnVWZIQ2hSMEdXck1wdEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MDMxNDEzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyNDQ2MDAwNDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
