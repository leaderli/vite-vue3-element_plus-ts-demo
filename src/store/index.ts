import { createPinia,defineStore } from "pinia";


export const pinia = createPinia();
export const useMainStore = defineStore('main',{
    state: () => ({
        flag:false,
    }),
    actions: {
        changeFlag () {
            this.flag = !this.flag
        }
    }
})