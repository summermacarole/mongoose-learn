const Router = require("koa-router");
const index = new Router();
const path = require("path");
const scan = require("./scan");
module.exports = function(app) {
  index.get("/", ctx => {
    ctx.body = "index";
  });
  scan(index, path.resolve(__dirname), ["index.js", "scan.js"]);
  app.use(index.routes()).use(index.allowedMethods());
};
