<template>
<el-container class="layout">
    <el-aside width="auto" class="asside">
        <MenuBar />
    </el-aside>
    <el-container>
        <el-header class="header">
            <Header />
           <div class="dropdown">
                <el-dropdown>
            <img src="@/assets/img/img.jpg" >
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item @click="signOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
           </div>
        
        </el-header>
        <el-main class="main">
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
    
</template>
<script setup lang="ts">
import Header from '@/components/layout/header/index.vue';
import MenuBar from '@/components/layout/menu/MenuBar.vue';
import { useRouter } from "vue-router";
import cookies from "@/util/cookie"
const router = useRouter();
const signOut=()=>{
 router.push("/logo");
    cookies.remove("ms_username")
}
</script>
<style scoped lang="scss">
.logoImg{
    width: 24px;
    height: 24px;
   display: flex;
align-items: end;
margin-right: 20px;
    background-color: pink;
}
.layout {
    height: 100%;
    .asside {
        background-color: rgb(48, 65, 86);
    }
    .header {
        height: 50px;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        justify-content: space-between;
        align-items: center;
      .dropdown{
        margin-right: 30px;
        img{
            width: 46px;
            height: 46px;
            border-radius: 23px;
            margin-top: 2px;
        }
      } 
      
    }
}
</style>