<template>
 <!-- <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs> -->
</template>
<script setup lang='ts'>
import { ref,reactive } from 'vue'
const activeTab = ref('');
</script>
<style scoped lang='scss'>
</style>