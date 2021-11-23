import { createApp } from "vue";
import App from "./App.vue";
import { pinia } from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";

import "./permission";
//  引入图标
import * as Icons from "@element-plus/icons";
const app = createApp(App);
// 全局注册图标
// typeof获取一个对象的类型
// keyof获取某种类型的所有键（key）。返回的类型是一个联合类型
Object.keys(Icons).forEach((key) => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

//引入pinia
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
