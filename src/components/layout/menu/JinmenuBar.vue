<template>
    <jinmenu-logo
        v-if='!siderBar.collapse'
        class='layout-logo'
    />
    <el-menu
        class='el-menu-vertical-demo'
        :collapse='siderBar.collapse'
        background-color='#304156'
        router
    >
        <jinmenu-item
            v-for='item in allowRouter'
            :key='item.path'
            :index='item.path'
            :menu-bar='item'
        />

    </el-menu>
</template>

<script setup lang="ts">
import { defineSiderBar } from '@/store/modules/layout';
import JinmenuItem from '@/components/layout/menu/JinmenuItem.vue';
import JinmenuLogo from '@/components/layout/menu/JinmenuLogo.vue';
import { allowRouter } from '@/router';


const siderBar = defineSiderBar();
</script>

<style scoped>
@keyframes logoAnimation {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
}
.layout-logo {
    animation: logoAnimation 1s ease-out;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
}
.el-menu {
  border-right: none;
  /* background-color: #1f2d3d !important; */
}
:deep(.el-sub-menu .el-sub-menu__title) {
    color: #f4f4f5 !important;
}
:deep(.el-menu-item) {
    background-color: #304156 !important;
}
:deep(.el-menu .el-menu__item) {
    color: #a7b4c4;
}
:deep(.el-menu-item .el-menu-item__title) {
    color: #f4f4f5 !important;
}
/* 菜单点中文字的颜色*/
:deep(.el-menu-item.is-active) {
    color: #409eff !important;
}
/* 当前打开菜单的所有子菜单的颜色 */
:deep(.is-opened .el-menu-item) {
    background-color: #1f2d3d !important;
}
/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover) {
    background-color: #001528 !important;
}
/* :deep(.el-popper:hover){
  background-color: #001528 !important;
} */
:deep(.el-sub-menu__title:hover) {
    background-color: #1f2d3d !important;
}
:deep(.el-menu-item-group__title){
   padding: 0!important;
}
</style>
