<template>
    <div>
        <el-button @click='add()'>内部Add: {{ num }}</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue';
const x6 = inject('node', 'getNode') as any;
console.log(x6);
console.log(x6.getNode);


let num = ref(0);
// const node = x6.getNode();

// // 监听数据改变事件
// node.on("change:data", ({ current }) => {
//     num = current.num;
// });

// console.log(x6);
// console.log(x6.getNode);

// methods: {
function add() {
    // const node = x6.getNode();
    // const { num } = node.getData();
    // node.setData({
    // num: num + 1,
    // });
    console.log('add', num.value);

    num.value = num.value + 1;
}
// },
</script>
