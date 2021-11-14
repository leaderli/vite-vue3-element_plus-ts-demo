import { InjectionKey } from "vue";

import { useStore as baseUseStore, createStore, Store } from "vuex";

//声明state的类型
export interface State {
	username: string;
}

//定义注入类型
export const key: InjectionKey<Store<State>> = Symbol();

//定义store
export const store = createStore<State>({
	state: {
		username: "li",
	},
	mutations: {},
	getters: {},
	actions: {},
});

export function useStore() {
	return baseUseStore(key);
}
