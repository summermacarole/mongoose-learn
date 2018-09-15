const Book = require("../model/book.model");
for (let i = 0; i < 10; i++) {
  let current = new Book({
    title: "title-" + i,
    price: Math.floor(Math.random() * 101),
    tags: ["hello", "world"]
  });
  current.save();
}
