<template>
<el-icon class="fn-icon" @click="changeFlag">
<component :is="flag?Expand:Fold"/>
</el-icon>
</template>
<script setup lang='ts'>
import { storeToRefs } from "pinia";
import { useMainStore } from '@/store/index';
import { Fold, Expand } from '@element-plus/icons'
const {flag} = storeToRefs(useMainStore())
const {changeFlag}=useMainStore()
</script>
<style scoped lang='scss'>
.fn-icon{
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #303133;
    margin-right: 15px;
}
</style>