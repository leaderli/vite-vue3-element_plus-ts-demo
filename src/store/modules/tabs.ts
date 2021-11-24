// 选项卡的数据类型
import { createPinia, defineStore } from "pinia";
import { Tab,Tabs } from "@/type/tabs";
import { useRouter } from 'vue-router'
const router=useRouter()
export const pinia = createPinia();
export default defineStore("tabs", {
	state: (): Tabs => ({
		tabs: [],
		activeTab:''
	}),
	actions: {
		addTab(path: string, title: string) {
			// if (this.tabs.some(tab => tab.path === path)) return
			// this.tabs.push({ index: this.tabs.length, path, title})
			console.log(this.tabs);
			
			if (this.tabs.filter((tab) => tab.path === path).length === 0) {
				this.tabs.push({ index: this.tabs.length, path, title });
			}

		},	
			removeTab(targetName: string) {
						if (targetName === '/home') return
						// 选项卡的数据列表
						const tablist: Array<Tab> = this.tabs
						// 当前激活的选项卡
						let activeName = this.activeTab
						if (activeName === targetName) {
							tablist.forEach((tab: Tab, index: number) => {
								if (tab.path === targetName) {
									const nextTab = tablist[index + 1] || tablist[index - 1]
									if (nextTab) {
										activeName = nextTab.path
									}
								}
							})
						}
						// 重新设置当前激活的选项卡
						this.activeTab = activeName
						// 重新设置选项卡数据
						this.tabs = tablist.filter((tab: Tab) => tab.path !== targetName)

						router.push({ path: activeName })
					
					},
		
				}
			})
