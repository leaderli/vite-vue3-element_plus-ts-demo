import { DefineComponent } from 'vue';

type define_component = DefineComponent<unknown, unknown, any>; // eslint-disable-line
type typeOf_import_vue = Promise<typeof import('*.vue')>;
type func_typeOf_import_vue = () => typeOf_import_vue;
type component = define_component | typeOf_import_vue | func_typeOf_import_vue;

export interface SiderBar {
	collapse: boolean;
}

export interface IMenubar {
	parentId?: number | string;
	id?: number | string;
	name: string;
	path: string;
	redirect?: string | { name: string };
	meta: {
		icon: string;
		title: string;
		permission?: string[];
		activeMenu?: string; // 路由设置了该属性，则会高亮相对应的侧边栏
		noCache?: boolean; // 页面是否不缓存
		hidden?: boolean; // 是否隐藏路由
		alwaysShow?: boolean; // 当子路由只有一个的时候是否显示当前路由
	};
	component: component;
	children?: Array<IMenubar>;
}
