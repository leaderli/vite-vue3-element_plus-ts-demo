<template>
    <el-tabs
        v-model='tabBar.activeTab'
        type='card'
        closable
        @tab-click='tabClick'
        @tab-remove='tabRemove'
    >
        <el-tab-pane
            v-for='item in tabBar.tabs'
            :key='item.index'
            :label='item.title'
            :name='item.path'
            closeable
        />
    </el-tabs>
</template>
<script setup lang='ts'>
import { watch } from 'vue';
import defineTabs from '@/store/modules/tabs';
import { useRouter, useRoute } from 'vue-router';
// import cookies from '@/util/cookie'
const router = useRouter();
const route = useRoute();
const tabBar = defineTabs();
const tabRemove = function(targetName: string) {
    router.push(tabBar.removeTab(targetName));
};


watch(() => tabBar,() => {
//
});
watch(() => route.path, () => {
    // 设置激活的选项卡
    
});
// 解决刷新数据丢失的问题
// const beforeRefresh = () => {
//     window.addEventListener('beforeunload', () => {
//         cookies.set('tabsView', JSON.stringify(tablist.tabs))
//     })
//     let tabSesson = cookies.get('tabsView')
//     if (tabSesson) {
//         let oldtabs = JSON.parse(tabSesson)
//         if (oldtabs.length > 0) {
//             tablist.tabs = oldtabs
//         }
//     }
// }
// onMounted(() => {
//     // beforeRefresh()
// });
const tabClick = function(tab:any) {
    const { props } = tab;
    router.push({ path: props.name });

};
</script>
<style scoped lang='scss'>
:deep(.el-tabs__header) {
    margin: 0;
    margin-top: 4px;
}
:deep(.el-tans__item) {
    height: 26px !important;
    line-height: 26 !important;
    text-align: center !important;
    border: 1px solid #d8dce5 !important;
    margin: 0 3px !important;
    color: #495060;
    font-size: 12px !important;
    padding: 0 10px !important;
}
:deep(.is-active) {
    border-bottom: 1px solid transparent !important;
    border: 1px solid #42b983 !important;
    background-color: #42b983 !important;
    color: #fff !important;
}
:deep(.el-tabs__item:hover) {
    color: #495060 !important;
}
:deep(.is-active:hover) {
    color: #fff !important;
}
:deep(.el-tabs__nav-scroll) {
    background-color: rgb(255, 255, 255);
}
:deep(.el-tabs__nav-wrap) {
    border: 0;
}
</style>