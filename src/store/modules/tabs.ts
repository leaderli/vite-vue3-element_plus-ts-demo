// 选项卡的数据类型
import { createPinia,defineStore } from "pinia";
import { Tabs } from "@/type/tabs";

export const pinia = createPinia();
export const defineTabs = defineStore('tabs',{
    state: ():Tabs => ({
        
            path: '',
            title: ''
        
    }),
    actions: {
    }
})
