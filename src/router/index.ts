import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'
import { IMenubarList } from '@/type/layout';
import LayOut from "@/components/layout/index.vue";
import home from "@/views/home/index.vue"


export const allowRouter: Array<IMenubarList> = [
	{
		name: "",
		path: "/",
		meta: {
			title: "404",
			icon: "",
		},
		component: LayOut,
		redirect: '',
		children: [
			{
				path: "/home",
				name: "home",
				component: home,
				meta: {
					title: "首页",
					icon: "",
				},
			},
			{
				path: "/about",
				name: "about",
				component: () =>import("@/views/about/index.vue"),
				meta: {
					title: "关于",
					icon: "",
				},
			},
			{
				path: "/404",
				name: "404",
				component: () => import("@/views/404/404.vue"),
				meta: {
					title: "404",
					icon: "",
				},
			},
		],
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			title: "login",
			icon: "",
		},
	},
];

const router = createRouter({
	history: createMemoryHistory(),
	routes: allowRouter as RouteRecordRaw[]
});

export default router;
