const path = require("path");
module.exports = {
  // 基础路径
  // 部署生产环境和开发环境下的URL，可对当前环境进行区分
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  // 输出文件目录
  outputDir: "dist",
  // 在保存时时候起用eslint-loader
  lintOnSave: true,
  //
};
