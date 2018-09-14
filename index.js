const Koa = require("koa");
const app = new Koa();
const { port } = require("./config");
const { initRouter, initDatabase } = require("./init");
initDatabase();
initRouter(app);
app.listen(port, function() {
  console.log("ok");
});
