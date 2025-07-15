const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "eVEWnbQY#b_5EOUNodI6Zeq1mnuu_tX3UM8Q046Myo3weopYMfIE",
  MONGODB: process.env.MONGODB || "mongodb://mongo:ylLlhjbpxHjKTqYkIqAaSinushsobfaK@yamabiko.proxy.rlwy.net:59692",
  OWNER_NUM: process.env.OWNER_NUM || "94764527598",
};
