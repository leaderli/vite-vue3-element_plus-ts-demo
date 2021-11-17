import { defineStore } from 'pinia'

import { User } from '@/type/user'


export const user = defineStore({
	id: 'user',
	state: (): User => ({
		username: "li",
		password: 'li'
	}),
	getters:{

	},
	actions:{

	}
})();
