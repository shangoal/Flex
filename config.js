const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "jRF2RKgD#0Xb3k-hSBxBQFw0gOQWSBqQLXzcwFlrQe-uMt-HA7XU",
  MONGODB: process.env.MONGODB || "mongodb://mongo:ylLlhjbpxHjKTqYkIqAaSinushsobfaK@yamabiko.proxy.rlwy.net:59692",
  OWNER_NUM: process.env.OWNER_NUM || "94764527598",
};
