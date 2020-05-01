export function install(Vue) {
  Vue.prototype.$isDev = process.env.NODE_ENV === "development";
}
