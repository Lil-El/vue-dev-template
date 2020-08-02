import Vue from "vue";
import VueLazyload from "vue-lazyload";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import "./styles/element-variables.scss";
import "@/styles/index.scss";

import App from "./App";
import store from "./store";
import router from "./router";
import "./loadElUI";
// import "./icons";
import "./permission";
import "./utils/error-log";

import * as filters from "./filters";

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;

Vue.use(VueLazyload);
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
