<template>
    <el-container class='layout'>
        <el-aside
            width='auto'
            class='asside'
        >
            <jinmenu-bar />
        </el-aside>
        <el-container>
            <el-header class='header'>
                <Header />
            </el-header>
            <el-main class='main'>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import Header from '@/components/layout/header/index.vue';
import JinmenuBar from '@/components/layout/menu/JinmenuBar.vue';

</script>
<style scoped lang="scss">
.layout {
    height: 100%;
    .asside {
        background-color: rgb(48, 65, 86);
    }
    .header {
        height: 45px;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        align-items: center; 
      
    }
}
</style>