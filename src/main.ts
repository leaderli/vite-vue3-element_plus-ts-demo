import { createApp } from "vue";
import App from "./App.vue";
import { key, store } from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";

const app = createApp(App);
//引入vuex
app.use(store, key);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
