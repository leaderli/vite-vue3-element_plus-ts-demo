import _ from 'lodash';
// 选项卡的数据类型
import { defineStore } from 'pinia';
import { Tab,Tabs } from '@/type/tabs';
// import moduleName from '@/r';
// const router = useRouter()
export default defineStore('tabs', {
    state: (): Tabs => ({
        tabs: [],
        activeTab:''
       
    }),
    // getters:{
    //     tabs:(state:Tabs) => {
    //         console.log('state tabs',state.tabs);
    //         if(state.tabs === undefined) {
    //             state.tabs = [];
    //         }
    //         state.tabs = [{}];

    //         console.log('state tabs',state.tabs);
            
            
    //         return state.tabs;
    //     }
    // },
    actions: {
        addTab(path: string, title: string) {

            let index = _.findIndex(this.tabs,tab => tab.path === path);
            
            if (index == -1) {
                index = this.tabs.length;
                this.tabs.push({ index, path, title });
            }
            this.activeTab = path;
            

        },	
        removeTab(path: string) {

            const compare = (tab :Tab) => tab.path === path;
            const index = _.findIndex(this.tabs,compare);
            _.remove(this.tabs,compare);
            // 如果删除的是被激活的tag，激活删除节点前一个tag
            if(this.activeTab === path && index > 0) {
                this.activeTab = this.tabs[index - 1].path;
            }
            
        }
		
    }
});
