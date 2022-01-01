/*
 * @return 开发环境使用全量默认加载
 *  开发环境使用懒加载会导致热更新，导致更新变慢，所以开发环境使用全量默认加载，生产环境使用懒加载
 */
module.export = (file) => require("@/views/" + file + ".vue").default;
