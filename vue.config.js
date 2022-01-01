const { resolve } = require("path");
const path = require("path");
const isProd = process.env.NODE_ENV === "production";
const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = {
  // 基础路径
  // 部署生产环境和开发环境下的URL，可对当前环境进行区分
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  // 输出文件目录
  outputDir: "dist",
  // 在保存时时候起用eslint-loader
  lintOnSave: true,
  //
  /**
   * 设置模式：
   * development开发环境
   * production生产模式
   * 默认值为production
   * 也可以设置为none
   * */
  // mode: "development",
  configureWebpack: (config) => {
    if (isProd) {
      // 配置webPack 压缩  [1] npm i compression-webpack-plugin -D
      // gzip
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096,
        })
      );
    }
  },
  chainWebpack: (config) => {
    // alias
    config.resolve.alias
      .set("@", resolve("src"))
      .set("api", resolve("src/apis"))
      .set("common", resolve("src/common"));
  },
};
