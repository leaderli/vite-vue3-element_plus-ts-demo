<template>
    <h2>about页面</h2>
      <p>{{ store.state.user.username }}</p>
</template>

<script setup lang="ts">
import { useStore } from '@/store';



const store = useStore()
</script>