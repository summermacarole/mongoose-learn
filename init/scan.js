/*
* 扫描添加新路由的功能函数
* */
const fs = require("fs");
const path = require("path");
const currentFilename = __filename.substr(__filename.lastIndexOf("\\") + 1);
const getRealData = (path, whitelist) => {
    let files = fs.readdirSync(path);
    let newRoutes = [];
    files.forEach(key => {
        if (!whitelist.includes(key)) {
            newRoutes.push(key);
        }
    });
    return newRoutes;
};
exports.addNewModel = (
    dir = __dirname,
    whitelist = ["index.js", currentFilename]
) => {
    let newModels = getRealData(dir, whitelist);
    newModels.forEach(key => {
        require(path.resolve(dir, key));
    });
};
exports.addNewRoutes = (
    root = "index",
    dir = __dirname,
    whitelist = ["index.js", currentFilename]
) => {
    let newRoutes = getRealData(dir, whitelist);
    newRoutes.forEach(route => {
        let filename = route.substr(0, route.indexOf("."));
        let newRoute = require(path.resolve(dir, route));
        root.use("/" + filename, newRoute.routes(), newRoute.allowedMethods());
    });
};
exports.addNewMock = dir => {
    let files = fs.readdirSync(dir);
    files.forEach(key => {
        require(path.join(dir, key));
    });
};