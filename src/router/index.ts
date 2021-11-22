import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'
import { IMenubar } from '@/type/layout';
import LayOut from "@/components/layout/index.vue";


export const allowRouter: Array<IMenubar> = [
	{
		name: "",
		path: "/",
		meta: {
			title: "首页",
			icon: "HomeFilled",
		},
		component: LayOut,
		redirect: '/home',
		children: [
			{
				path: "/home",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					title: "首页",
					icon: "HomeFilled",
				},
			},
			{
				path: "/about",
				name: "about",
				component: () =>import("@/views/about/index.vue"),
				meta: {
					title: "关于",
					icon: "Setting",
				},
			},
			
		],
	},
	{
		path: "/404",
		name: "404",
		component:LayOut,
		meta: {
			title: "404",
			icon: "Warning",
		},
		children: [
			{
				path: "/404",
				name: "404",
				component: () => import("@/views/404/404.vue"),
				meta: {
					title: "404",
					icon: "Warning",
				},	
			}
		]
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
	{
		path: "/scene",
		name: "scene",
		component:LayOut,
		meta: {
			title: "菜单",
			icon: "Setting",
		},
		children: [
			{
		path: "/scene",
		name: "scene",
		component: () =>import("@/views/scene/scene.vue"),
		meta: {
			title: "菜单",
			icon: "Setting",
		},
			}
		]
	},
];

const router = createRouter({
	history: createMemoryHistory(),
	routes: allowRouter as RouteRecordRaw[]
});

export default router;
