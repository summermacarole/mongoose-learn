const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  title: String,
  price: {
    type: Number,
    default: 10
  },
  tags: [String],
  publishDate: {
    type: Date,
    default: Date.now
  }
});
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
