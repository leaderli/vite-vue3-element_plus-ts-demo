<template>
<el-icon class="fn-icon" @click="changeIcon">
<component :is="status?Expand:Fold"/>
</el-icon>
</template>
<script setup lang='ts'>
import { ref,computed } from 'vue'
import { storeToRefs } from "pinia";
import { definePage } from '@/store/modules/page';
import { Fold, Expand } from '@element-plus/icons'
const {getCollapse} = storeToRefs(definePage())
// const status=computed(()=>{
// console.log(status.value);
// return getCollapse.value
// })
let status=ref(!getCollapse.value)
// 图标切换
const changeIcon=()=>{
    // console.log(getCollapse.value);
    status.value=!status.value

    
    //  !getCollapse.value
//  status=computed(()=>{
//     return !getCollapse.value
//  })
//  console.log(status.value);
 

}

</script>
<style scoped lang='scss'>
.fn-icon{
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #303133;
}
</style>