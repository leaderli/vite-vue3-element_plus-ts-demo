<template>
    <h2>{{ }}</h2>
</template>

<script setup lang='ts'>
import { inject } from 'vue';
const msg:any = inject('text');
 
setTimeout(() => {
    msg.value = '123123';
}, 3000);
</script>

<style scoped lang='scss'>
</style>