import { createRouter, createMemoryHistory } from "vue-router";

import LayOut from "@/components/layout/index.vue";
const routes = [
	{
		path: "/login",
		component: () => import("@/views/login/index.vue"),
	},
	{
		path: "/",
		component: LayOut,
		redirect: "",
		children: [
			{
				path: "/home",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					title: "首页",
					icon: "",
				},
			},
			{
				path: "/about",
				name: "about",
				component: () => import("@/views/about/index.vue"),
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
		component: () => import("@/views/login/login.vue"),
		meta: {
			title: "login",
			icon: "",
		},
	},
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
