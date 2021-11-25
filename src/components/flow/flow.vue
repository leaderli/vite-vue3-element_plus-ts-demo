<template>
    <div>
        <el-button @click='add()'>内部Add: {{ num }}</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue';
const x6 = inject('node', 'getNode') as any;
console.log(x6);
let num = ref(0);
function add() {
    num.value = num.value + 1;
}
</script>
