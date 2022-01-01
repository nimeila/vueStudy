/*
 * @return 通用路由
 */

const _import = require("./config/_import_" + process.env.NODE_ENV);

export default [
  {
    path: "/",
    redirect: "/index",
  },
  //无权限页面
  {
    path: "/nopermission",
    name: "无权限页面",
    component: _import("nopermission"),
  },
  //404
  {
    path: "*",
    name: "404",
    component: _import("404"),
  },
];
