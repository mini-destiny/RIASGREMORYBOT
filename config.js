//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349130188656";
global.sudo = process.env.SUDO || "2349130188656";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEs4bFJjaTcySVFHbnZTdGVjOEQ2alhIYUxqZ0Myb0V4SlFLa1lXazFrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFVsNS81TWo3anQ1MU9WUHEvOVZoSTNhekVMREZQSjFqVnR4ZEt0RHFTMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUCs0YTRNZW1Eem51T0V0dG1ON0VxOFhhamdpU29KaU0yNnBnKzNmWW1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwUFkvWE45VUdHN25qZHB6S1llMlNtcTJHQkxOelU4bi9QQTZCNHE3Q1IwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9BdDhoZW9ZQ2l2emJTNFhhZ0lxNXRQWUFTSUpSL3dzYityQVdjRi9QbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpTdjNCV0NJdjFKZUZYMFZPN1dORGkwd1lMOURLclpMMVpZSzZlSmFtMnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU4wUjd2QmRwRDhjYnV5VUwwNEJraWNtUExuTGFoN3lFWGxiNy81SytIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXVwWk16dVBEVmp6MlBXdElUVUY4cy9ZSGs5MVQxclBpNWJFbzhXcVRTTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndvV1I4b1pLblRTbTFibXpDbEFDalVDbEJXWS9uK3RXYjFGWHZ6Z1hKdWljMXN5b24rakhDelVKbU04ZWVEN2NnSDJBdFlwU0c5U3BpSzA3Wk5RbmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiI4YlJPV2pOZHlwcWlWc2FhMUl5aVVyeTZsMEFIQ1VIOTB6RFd1VTNVcUY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMzAxODg2NTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjVDOUIzNDE2N0ZGNTQ3RTA5NDU3NTc0RUVCQzkxMjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzEzNDU1M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEzMDE4ODY1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2OENCNDczMUY4MTQzODU4MEUzNjIyQzUxREJGRTVERiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzMTM0NTUzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfMjRIenlMeVRrbVZfUXVYcmF0VV93IiwicGhvbmVJZCI6ImM3ZGY5YTI3LTY5MWYtNDQ5Mi04YTdlLTQxNTZlN2M0YmFjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5YmlORWRxUm5qbDNVUkdvbytSOFZ4WmxrY1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZktNalFEVExDRlhEMStiTE5FYUk4THVRcTdNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJZNUFXODdFIiwibWUiOnsiaWQiOiIyMzQ5MTMwMTg4NjU2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUm9fYm90In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNYkNvazhReXBHMnVnWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwYjIveTd1ckxLQ1BQcTdVaTRVYTY5MU9jTnNvVkpjVWFKSUFDdWZMekZvPSIsImFjY291bnRTaWduYXR1cmUiOiJ4R05tbzZiUEpaTDN1SWRycXJ5NTFjSlF2UW04Yml5aVprYWl2V0xWZkZrZENGMi9GYmc5K3dDRkRxam0yWDVFZmd2WmpMNHpCMEJlT2NvRmx3Tk1DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicnQ1RGZUM0EwcU5MUTFEUzZBaXRoU3VVT0ZaanhxbGlnUUZwajd2cWxUM1d1em5JMTJNdzhXaXE1WVRYam5RcHFxanlCdWtOZHJEc3RMbVlZR00vaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTMwMTg4NjU2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVc5djh1N3F5eWdqejZ1MUl1Rkd1dmRUbkRiS0ZTWEZHaVNBQXJueTh4YSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzEzNDU1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKdXYifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
