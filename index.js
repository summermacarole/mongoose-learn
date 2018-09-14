const Koa = require("koa");
const app = new Koa();
const initDatabase = require("./model/index");
const initRouter = require("./router");
initDatabase();
initRouter(app);
app.listen(3000, function() {
  console.log("ok");
});
