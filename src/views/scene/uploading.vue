<template>
    <div>
        <Uploading
            ref='parent'
            title='模拟自定义上传'
            :count='0'
            :value='{}'
        />

        <!-- <el-button
            style='width:200px;margin:10px auto;display: block;'
            class='theme-all'
            @click='up'
        >确认上传</el-button> -->
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Uploading from '@/components/uploading/uploading.vue';
// import { ElLoading ,ElMessage } from 'element-plus';
const parent = ref();
        
// const up = async() => {
//     let { child, isEmpty, stop } = parent.value.parent();
//     if(!isEmpty) return ElMessage.error('请选择需要上传的图片');
//     const loading = ElLoading.service({
//         lock: true,
//         text: '上传中....',
//         spinner: 'el-icon-loading',
//         background: 'rgba(0, 0, 0, 0.7)'
//     });
//     // 实现上传
//     await child();
//     // 上传完成
//     stop();
//     loading.close();
            
// };
</script>
<style lang="scss" scoped>
.theme-all {
    color: #fff;
    background-color: #304156!important;
}
</style>
