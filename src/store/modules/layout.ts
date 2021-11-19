
import { defineStore } from "pinia";

import { MenuBar } from "@/type/layout";


export const defineMenuBar= defineStore('main',{
    state: ():MenuBar => ({
        collapse:false,
    }),
    actions: {
        toggleCollapse () {
            this.collapse = !this.collapse
        }
    }
})