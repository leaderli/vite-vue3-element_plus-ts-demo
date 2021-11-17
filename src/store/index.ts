import { InjectionKey } from "vue";
import { user } from "./modules/user";

import { useStore as baseUseStore, createStore, Store } from "vuex";

//声明state的类型
export interface State {
	user: typeof user.state;
}
//定义store
export const store = createStore<State>({
	modules: {
		user: user,
	},
});

//定义注入类型
export const key: InjectionKey<Store<State>> = Symbol();

//用于component的setup
export function useStore() {
	return baseUseStore(key);
}
