// 选项卡的数据类型


import { createPinia, defineStore } from 'pinia'
import { Tabs } from '@/type/tabs'

export const pinia = createPinia()
export default defineStore('tabs', {
    state: (): Tabs => ({
        tabs: []
    }),
    actions: {
        addTab(path: string, title: string) {
            if (this.tabs.filter((tab) => tab.path === path).length === 0) {
                this.tabs.push({ index: this.tabs.length, path, title })
            }
        }

        // removeTab(index: number) {
        // 	console.log("before", index, this.tabs.length);

        // 	if (index > -1 && index < this.tabs.length) {
        // 		this.tabs.splice(index, 1);
        // 		console.log("remove");
        // 	}
        // 	console.log("after", index, this.tabs.length);
        // },

    }
})
