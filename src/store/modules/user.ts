import { createStore } from "vuex";

//声明state的类型
interface User {
	username: string;
}

//定义store
export const user = createStore<User>({
	state: {
		username: "li",
	},
	mutations: {},
	getters: {},
	actions: {},
});
