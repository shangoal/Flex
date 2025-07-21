const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "jRF2RKgD#0Xb3k-hSBxBQFw0gOQWSBqQLXzcwFlrQe-uMt-HA7XU",
  OWNER_NUM: process.env.OWNER_NUM || "94764527598",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/shangoal/Flex/blob/main/images/20250720_212545.png?raw=true",
  ALIVE_MSG: process.env.ALIVE_MSG || "👋 Hello , I am alive now!!👀\n\nMore info-https://whatsapp.com/channel/0029VafGSncKLaHqTUlwhu2t\n\n𝐌𝐚𝐝𝐞 𝐛𝐲 Flex Team",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "private",
};
