import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTyperPlugin from 'vue-typer'
Vue.config.productionTip = false;
Vue.use(VueTyperPlugin)
new Vue({
  router,
  store,
  VueTyperPlugin,
  render: h => h(App)
}).$mount("#app");
