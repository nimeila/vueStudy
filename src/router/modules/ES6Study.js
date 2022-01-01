const _import = require("../config/_import" + process.env.NODE_ENV);

/*
 * @return 业务模块
 */

export default [
  //首页
  {
    path: "/index",
    name: "首页",
    component: _import(),
    meta: {
      keepAlive: true,
      requiresAuth: true, //要求验证的页面，在此情况下其子页面也会被验证
    },
  },
];
