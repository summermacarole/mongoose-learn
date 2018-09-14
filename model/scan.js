/*
* 扫描添加新路由的功能函数
* */
const fs = require("fs");
const path = require("path");
const currentFilename = __filename.substr(__filename.lastIndexOf("\\") + 1);
const getRealModel = (path, whitelist) => {
  let files = fs.readdirSync(path);
  let newModels = [];
  files.forEach(key => {
    if (!whitelist.includes(key)) {
      newModels.push(key);
    }
  });
  return newModels;
};
const addNewModel = (
  root = "index",
  dir = __dirname,
  whitelist = ["index.js", currentFilename]
) => {
  let newModels = getRealModel(dir, whitelist);
  newModels.forEach(key => {
    require(path.resolve(dir, key));
  });
};
module.exports = addNewModel;
