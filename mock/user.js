const User = require("../model/user.model");
for (let i = 0; i < 10; i++) {
  let current = new User({
    name: "name-" + i,
    age: Math.random() * 101,
    likes: ["西游记", "红楼梦"]
  });
  current.save();
}
