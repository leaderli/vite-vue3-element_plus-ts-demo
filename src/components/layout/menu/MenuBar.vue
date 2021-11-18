<template>
    <MenuLogo v-if="!isCollapse"></MenuLogo>
  <el-menu
    :default-active="activeIdex"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router
  >
   <MenuItem :menuList='menuList'></MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import {  ref,computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from "pinia";
import { definePage } from '@/store/modules/page';
import MenuItem from '@/components/layout/menu/MenuItem.vue'
import MenuLogo from '@/components/layout/menu/MenuLogo.vue'
import { allowRouter as menuList } from '@/router'
// 当前路由
    const route = useRoute();
    const activeIdex=computed(()=>{
    const {path}=route;
      return path
    })
    const {getCollapse} = storeToRefs(definePage())
    const isCollapse = computed(()=>{
         return !getCollapse.value
    })
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu{
  border-right: none;
  background-color: #1f2d3d!important;
}
:deep(.el-sub-menu .el-sub-menu__title){
  color: #f4f4f5!important;
}
:deep(.el-menu .el-menu__item){
  color: #bfcbd9;
}
/* 菜单点中文字的颜色*/
:deep(.el-menu-item .is-active){
  color: #409eff!important;
}
/* 当前打开菜单的所有子菜单的颜色 */
:deep( .is-opened .el-menu-item){
  background-color: #1f2d3d!important;
}
/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover){
background-color: #001528!important;
}
:deep(.el-sub-menu__title:hover:hover){
background-color: #001528!important;
}
</style>

