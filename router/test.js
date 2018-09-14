const Router = require("koa-router");
const test = new Router();

test.get("/", ctx => {
    ctx.body = "test";
});
module.exports = test;
