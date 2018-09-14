const User = require("../model/user.model");
module.exports = {
  async getUsers(ctx, next) {
    let user = new User({
      name: "macaorle",
      age: 100
    });
    let result = await user.save();
    ctx.body = result;
  }
};
