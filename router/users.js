const Router = require("koa-router");
const users = new Router();
const UserControl = require("../controller/user.controller");
users.get("/", UserControl.getUsers);
module.exports = users;
