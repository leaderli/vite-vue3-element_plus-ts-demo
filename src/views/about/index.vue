<template>
    <h2>about页面</h2>
    <p>{{ user.username }}</p>
</template>

<script setup lang="ts">
import { defineUser } from '@/store/modules/user';


const user = defineUser();


</script>