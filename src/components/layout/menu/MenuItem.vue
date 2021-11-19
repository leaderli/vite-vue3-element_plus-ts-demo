<template>
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
      <template #title>
        <!-- 动态使用组件的方法 -->
        <component class="icons" :is="menu.meta.icon" />
        <span>{{ menu.meta.title }}</span>
      </template>
      <menu-item :menuList="menu.children"></menu-item>
    </el-sub-menu>
    <el-menu-item style="color: #f4f4f5;" v-else :index="menu.path" @click="openTab(menu)">
      <component class="icons" :is="menu.meta.icon" />
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
import { PropType } from 'vue'

import { IMenubar } from '@/type/layout';
import defineTabs from '@/store/modules/tabs';

const tabs = defineTabs()
defineProps({
  menuList: {
    type: Object as PropType<Array<IMenubar>>,
    default: []
  }
})

const openTab = function (menuBar: IMenubar) {

  console.log('openTab', menuBar);
  tabs.addTab(menuBar.path,menuBar.name)

}
</script>
<style scoped lang="scss">
.icons {
  width: 24px;
  height: 18px;
  margin-right: 5px;
}
</style>