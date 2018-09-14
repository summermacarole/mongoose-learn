const Router = require("koa-router");
const home = new Router();
home.get("/", ctx => {
  ctx.body = "home index";
});
module.exports = home;
