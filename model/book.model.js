const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  title: String,
  production_day: Date,
  price: {
    type: String,
    default: 10
  }
});
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
