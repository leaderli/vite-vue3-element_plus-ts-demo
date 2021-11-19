// 选项卡的数据类型
import { createPinia,defineStore } from "pinia";

export const pinia = createPinia();
export const useTabStore = defineStore('tab',{
    state: () => ({
        ITab: {
            title: '',
            path: ''
        }
    }),
    getters: {
        changeFlag () {
           
        }
    }
})
