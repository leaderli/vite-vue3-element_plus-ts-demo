<template>
    <el-icon class="fn-icon" @click="menuBar.toggleCollapse">
        <component :is="menuBar.collapse ? Expand : Fold" />
    </el-icon>
</template>
<script setup lang='ts'>
import { defineMenuBar } from '@/store/modules/layout';
import { Fold, Expand } from '@element-plus/icons'
const menuBar = defineMenuBar();
</script>
<style scoped lang='scss'>
.fn-icon {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #303133;
    margin-right: 15px;
}
</style>