const Router = require("koa-router");
const books = new Router();
const BookController = require("../controller/book.controller");
books.get("/", BookController.getBook);
module.exports = books;
