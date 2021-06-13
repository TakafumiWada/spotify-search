import Vue from "vue";
import App from "./App.vue";
import "./firebase.js";

import dotenv from "dotenv";
dotenv.config();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
