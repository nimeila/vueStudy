/*
 * @return 生成环境使用懒加载
 */
module.export = (file) => import("@/views/" + file + ".vue");
