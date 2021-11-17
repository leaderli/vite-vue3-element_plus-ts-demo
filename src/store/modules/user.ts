import { createStore } from "vuex";

//声明state的类型
interface User {
	username: string;
	password: string;
}

//定义store
export const user = createStore<User>({
	state: {
		username: "li",
		password:'li'
	},
	mutations: {},
	getters: {},
	actions: {},
});
