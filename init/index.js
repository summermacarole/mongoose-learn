const mongoose = require("mongoose");
const Router = require("koa-router");
const index = new Router();
const { routerDir, modelDir, databaseUrl } = require("../config");
const { addNewRoutes, addNewModel } = require("./scan");
exports.initRouter = app => {
  index.get("/", ctx => {
    ctx.body = "index";
  });
  addNewRoutes(index, routerDir);
  app.use(index.routes()).use(index.allowedMethods());
};
exports.initDatabase = () => {
  mongoose.connect(
    databaseUrl,
    { useNewUrlParser: true }
  );
  let connection = mongoose.connection;
  connection.on("error", function() {
    console.log("connection failed");
  });
  connection.on("open", function() {
    console.log("connection successfully");
    addNewModel(modelDir);
  });
};
