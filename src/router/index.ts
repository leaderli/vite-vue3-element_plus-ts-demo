import { Router,createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';
import { IMenubar } from '@/type/layout';
import LayOut from '@/components/layout/index.vue';

export const allowRouter: Array<IMenubar> = [
    {
        name: '',
        path: '/',
        meta: {
            title: '首页',
            icon: 'HomeFilled'
        },
        component: LayOut,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'HomeFilled'
                }
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    title: '关于',
                    icon: 'Setting'
                }
            },
            {
                path: '/flow',
                name: 'flow',
                component: () => import('@/views/flow/index.vue'),
                meta: {
                    title: '流程',
                    icon: 'Connection'
                }
            }
        ]
    },
    {
        path: '/404',
        name: '404',
        component: LayOut,
        meta: {
            title: '404',
            icon: 'Warning'
        },
        children: [
            {
                path: '/404',
                name: '404',
                component: () => import('@/views/404/index.vue'),
                meta: {
                    title: '404',
                    icon: 'Warning'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: 'login',
            icon: ''
        }
    },
    {
        path: '/jinscene',
        name: 'scene',
        component: LayOut,
        meta: {
            title: '菜单',
            icon: 'Setting'
        },
        children: [
            {
                path: '/jinscene',
                name: 'scene',
                component: () => import('@/views/scene/jinscene.vue'),
                meta: {
                    title: '菜单',
                    icon: 'Setting'
                }
            },
            {
                path: '/clipboard',
                name: 'clipboard',
                component: () => import('@/views/scene/clipboard.vue'),
                meta: {
                    title: 'clipboard',
                    icon: 'Setting'
                }
            },
            {
                path: '/uploading',
                name: 'upload',
                component: () => import('@/views/scene/uploading.vue'),
                meta: {
                    title: 'uploading',
                    icon: 'Setting'
                }
            }

        ]
    },
    {
        path: '/demo',
        name: 'demo',
        component: LayOut,
        meta: {
            title: '示例',
            icon: 'Box'
        },
        children: [
            {
                path: '/highlightjs',
                name: 'highlightjs',
                component: () => import('@/views/demo/HighlightJs.vue'),
                meta: {
                    title: '高亮',
                    icon: 'MagicStick'
                }
            },
            {
                path: '/nprogress',
                name: 'nprogress',
                component: () => import('@/views/demo/NProgress.vue'),
                meta: {
                    title: '进度条',
                    icon: 'Refresh'
                }
            },
            {
                path: '/fusejs',
                name: 'fusejs',
                component: () => import('@/views/demo/fusejs.vue'),
                meta: {
                    title: '模糊搜索',
                    icon: 'Search'
                }
            }
        ]
    },
    {
        path: '/sysmanage',
        name: 'sysmanage',
        component: LayOut,
        meta: {
            title: 'Demo',
            icon: 'Operation'
        },
        children:[
            {
                path: '/usermanage',
                name: '模糊查询',
                component: () => import('@/views/sysmanage/usermanage.vue'),
                meta: {
                    title: '模糊查询',
                    icon: 'Avatar'
                }
            },{
                path: '/download',
                name: '文件下载',
                component: () => import('@/views/sysmanage/download.vue'),
                meta: {
                    title: '文件下载',
                    icon: 'Download'
                }
            }
        ]
    },
];

const router:Router = createRouter({
    history: createMemoryHistory(),
    routes: allowRouter as RouteRecordRaw[]
});

export default router;
