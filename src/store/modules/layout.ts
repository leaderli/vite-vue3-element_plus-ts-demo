
import { defineStore } from 'pinia';

import { SiderBar } from '@/type/layout';


export const defineSiderBar = defineStore('main',{
    state: ():SiderBar => ({
        collapse:false
    }),
    actions: {
        toggleCollapse() {
            this.collapse = !this.collapse;
        }
    }
});