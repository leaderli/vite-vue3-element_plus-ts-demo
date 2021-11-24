<template>
    <h5>{{ msg }}</h5>
    <itemb />
</template>

<script setup lang='ts'>
import itemb from '@/views/home/itemb.vue';
import { inject } from 'vue';
const msg = inject('text');
</script>

<style scoped lang='scss'>
</style>