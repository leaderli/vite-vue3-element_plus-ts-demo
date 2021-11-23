<template>
    <div>
        <!-- <el-button @click="add()">内部Add: {{ num }}</el-button> -->
    </div>
</template>

<script lang="ts" setup>
import { Graph } from '@antv/x6';
import { inject } from 'vue';
const x6 = inject("getGraph", "getNode") as any as Graph
let num = 0;
// const node = x6.getNode() ;

// // 监听数据改变事件
// node.on("change:data", ({ current }) => {
//     num = current.num;
// });

// methods: {
//     add() {
//         const node = this.getNode();
//         const { num } = node.getData();
//         node.setData({
//             num: num + 1,
//         });
//     },
// },
</script>
