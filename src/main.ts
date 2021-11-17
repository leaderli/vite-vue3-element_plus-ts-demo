import { createApp } from "vue";
import App from "./App.vue";
import { pinia } from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";

import "./permission";

const app = createApp(App);
//引入pinia
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
