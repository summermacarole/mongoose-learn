const Koa = require("koa");
const app = new Koa();
const { port } = require("./config");
const { initRouter, initDatabase, initMock } = require("./init");
initDatabase();
initMock();
initRouter(app);
app.listen(port, function() {
  console.log("ok");
});
