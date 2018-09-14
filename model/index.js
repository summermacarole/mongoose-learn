const mongoose = require("mongoose");
const scan = require("./scan");
const init = () => {
  mongoose.connect(
    "mongodb://localhost/good1",
    { useNewUrlParser: true }
  );
  let connection = mongoose.connection;
  connection.on("error", function() {
    console.log("connection failed");
  });
  connection.on("open", function() {
    console.log("connection successfully");
    scan();
  });
};
module.exports = init;
