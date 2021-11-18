<template>
    <MenuLogo></MenuLogo>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
   <MenuItem :menuList='menuList'></MenuItem>
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
   
  </el-menu>
</template>

<script setup lang="ts">
import {  ref,reactive } from 'vue'
import MenuItem from '@/components/layout/menu/MenuItem.vue'
import MenuLogo from '@/components/layout/menu/MenuLogo.vue'
// import {
//   Location,
//   Document,
//   Menu as IconMenu,
//   Setting,
// } from '@element-plus/icons'

let menuList=reactive([
  {
    path:'/dashboard',
    component:'Layout',
    meta:{
      title:'首页',
      icon:'HomeFilled',
      roles:["sys:manage"]
    },
    children:[]
  },
  {
     path:'/system',
    component:'Layout',
    alwaysShow:true,
    name:'system',
    meta:{
      title:'系统管理',
      icon:'Setting',
      roles:["sys:manage"],
      parentId:0
    },
     children:[
       {
          path:'/department',
          component:'/system/department/department',
          alwaysShow:false,
          name:'department',
          meta:{
            title:'机构管理',
            icon:'OfficeBuilding',
            roles:["sys:dept"],
            parentId:17
          },
       },
         {
          path:'/userList',
          component:'/system/User/UserList',
          alwaysShow:false,
          name:'userList',
          meta:{
            title:'用户管理',
            icon:'User',
            roles:["sys:user"],
            parentId:17
          },
       },
        {
          path:'/roleList',
          component:'/system/Role/RoleList',
          alwaysShow:false,
          name:'roleList',
          meta:{
            title:'角色管理',
            icon:'UserFilled',
            roles:["sys:role"],
            parentId:17
          },
       },
       {
          path:'/menuList',
          component:'/system/Menu/MenuList',
          alwaysShow:false,
          name:'menuList',
          meta:{
            title:'权限管理',
            icon:'Pointer',
            roles:["sys:menu"],
            parentId:17
          },
       }
     ]
  },
   {
    path:'/goods',
    component:'Layout',
    alwaysShow:true,
    name:"goods",
    meta:{
      title:'商品管理',
      icon:'Present',
      roles:["sys:goods"],
      parentId:0
    },
    children:[
       {
          path:'/goodCategory',
          component:'/goods/goodCategory/goodCategoryList',
          alwaysShow:false,
          name:'goodCategory',
          meta:{
            title:'商品分类',
            icon:'Lock',
            roles:["sys:goodCategory"],
            parentId:34
          },
       }
    ]
  },
   {
    path:'/systenConfig',
    component:'Layout',
    alwaysShow:true,
    name:"systenConfig",
    meta:{
      title:'系统工具',
      icon:'Odometer',
      roles:["sys:systenConfig"],
      parentId:0
    },
    children:[
       {
          path:'/document',
          component:'/system/config/systemDocument',
          alwaysShow:false,
          name:'http://42.193.158.170:8089/swagger-ui/index.html',
          meta:{
            title:'接口文档',
            icon:'Tickets',
            roles:["sys:document"],
            parentId:42
          },
       }
    ]
  }
])

    const isCollapse = ref(false)
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

