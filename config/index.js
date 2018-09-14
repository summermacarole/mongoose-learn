const path = require("path");
module.exports = {
  port: 3000,
  routerDir: path.resolve(__dirname, "../router"),
  modelDir: path.resolve(__dirname, "../model"),
  databaseUrl: "mongodb://localhost/good1"
};
