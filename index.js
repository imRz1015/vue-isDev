export default {
  install(Vue, options) {
    Vue.prototype.$isDev = process.env.NODE_ENV === "development";
  },
};
