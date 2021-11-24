<template>
    <el-icon
        class='fn-icon'
        @click='siderBar.toggleCollapse'
    >
        <component :is='siderBar.collapse ? Expand : Fold' />
    </el-icon>
</template>
<script setup lang='ts'>
import { defineSiderBar } from '@/store/modules/layout';
import { Fold, Expand } from '@element-plus/icons';
const siderBar = defineSiderBar();
</script>
<style scoped lang='scss'>
.fn-icon {
    display: flex;
    margin-top: 15px;
    align-items: center;
    font-size: 24px;
    color: #303133;
    margin-right: 15px;
}
</style>