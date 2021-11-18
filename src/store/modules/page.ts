import { defineStore } from "pinia";

import { Page } from "@/type/page";

export const definePage = defineStore({
	id: "page",
	state: (): Page => ({
		collapse:false,
    }),
    getters: {
        getCollapse(state){
          return !state.collapse
        }
    },
	actions: {},
});