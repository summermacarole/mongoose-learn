const Book = require("../model/book.model");
module.exports = {
  async getBook(ctx, next) {
    let book = new Book({
      title: "西游记后转",
      production_day: Date.now()
    });
    let result = await book.save();
    ctx.body = result;
  }
};
