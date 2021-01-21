
import Vue from "@/common/extend.js";
import App from "./App.vue";

import router from "./router";
import store from "./store";

// 引入插件
import "@/plugin";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount("#app");
