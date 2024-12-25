//ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUV5R3phTlcvV2w5cm9MbWJoMlBUbk5pU29SSFJtZzIzcDdNRmpaay9sYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUNXTDRTT0IrZG5nRWpxcXcxMXZ2ZUNzMzlmc1NnR2NScmoraVBqWjl5RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ3RRUkJOQU5NZjFaT2hqN0FFVHNXZ1h3Y1ZnU3o0Nkx0QWJuSENKUVdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NC9ZRDdsbUpUdXVrcXdqZDVvS1NqRnBnK2dhOWhQNGp2aTVNU2hVamx3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNSXFkaTlCM0h0endYVW5yM29EbDR2NVF6aU4rZ1ZSSnBJeG1aRGRwWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ1RWpacVFzMXNtWWttRm5tZnNQa2xYeUltNUZjZXhKWDJlb3pHNjhnWGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0Nxdy9zVk1DQkQ5R1NsZHBrbEFlNUxtNnlzYmU0RjJHTUdFTlpzQjRVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0ZGQ1lVYkZKQ0o0bldTRmFPM05kSllRMjRxZlg4Z1lSK3ZNWTYrOTBFMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZnbnphZ0xDSDFBaVo1WHU1UWlpRC9jQVhRa2NuTTdGaTA2M1MxTnhoT3lPcGJEd2MyZG9SWGlzekExa2l4N2FtVm9JLzZVbHU2eVdrVHliMnFlMGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJWK1JHQlBqakNLNkFwMFFNK0MxYUVabFVuYjAvQXZ5SkNkWEhFZnB3TXZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXMzRpNlZia1FDUzNVSEkxYklEb1ZBIiwicGhvbmVJZCI6ImU2YzRjMmY4LWZlNGMtNDZmNy1hZTg0LTFhNmFjMGUwMWQ3MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6V1V1WEM5N09qMVpZQmlPeGN0ekFNNUc4cVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNy84L29ocUxndnBxZGVHNWMzOFNKZHB6ODFVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1FTjJBVEJTIiwibWUiOnsiaWQiOiIyNjA3NzY2NDI5MzA6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTmlwc3kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lUdGxISVE5b214dXdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVsUzhWYkdVenlqUm1UVVZ2YUs2d2o3TmRmZVlYUEJzdWUrZWQzM2hsRFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjAxbzFCcHgySDluam5KTFlmZ3l6b1NML1VUaDZRUFBNejlERXljdU5NVURqMkNWUENUVU9GVGlmWUw3OVJ2YUtJM3JiOFlwYzkwU2lKUXBYS0VqR0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRVVVqdkVpR0dPWnUzdEQ1d0dEb1l6Z1lsSlVLRUd1Z01YaUNLWnh0U2kvdEtjbTA0Y2pxaVFwVVVNaTN3UDRrWitldEZtS2tlYjhCUTA5QzhyWDdnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDc3NjY0MjkzMDoyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSSlV2Rld4bE04bzBaazFGYjJpdXNJK3pYWDNtRnp3Ykxudm5uZDk0WlExIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MTQ4ODAzfQ== "; // <--- put session id
global.MONGODB = process.env.MONGODB_URI || "mongodb+srv://nipsy:
200518kay@cluster0.94tna.mongodb.net/";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://nipsy:
200518kay@cluster0.94tna.mongodb.net/";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "260776642930")
  : "27717311486";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://raw.githubusercontent.com/coderxsa/WABot/main/ANITA/PIC/anita.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://raw.githubusercontent.com/coderxsa/WABot/main/ANITA/PIC/anita.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "2.0.4",
  caption: process.env.CAPTION || "`©ANITA`",
  author: process.env.PACK_AUTHER || "Nipsy's",
  packname: process.env.PACK_NAME || "Creation",
  botname: process.env.BOT_NAME || "A 🔌without Socket",
  ownername: process.env.OWNER_NAME || "NIPSY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "https://m.payquiz.top/34376296841237472/",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-4145abe9-5ba1-4c54-872b-6605fec0faad",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "nipusi",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/coderxsa/ANITAv2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "27717311486";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "false");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://coderx-sessions.onrender.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
