<template>
  <el-tabs v-model="tabs.tabs" type="card" closable @tab-remove="tabRemove">
    <el-tab-pane
      v-for="item in tabs.tabs"
      :key="item.title"
      :label="item.title"
      :name="item.index"
    >{{ item.path }}</el-tab-pane>
  </el-tabs>
</template>
<script setup lang='ts'>
import defineTabs from '@/store/modules/tabs';


const tabs = defineTabs()
const tabRemove = function (index: number) {

  console.log('remove', index);

  console.log(tabs);

  tabs.removeTab(index)
  console.log('after remove', index);

}
</script>
<style scoped lang='scss'>
</style>