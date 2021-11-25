<template>
    <el-sub-menu
        v-if='menuBar && menuBar.children &&menuBar.children.length > 0'
        :key='0'
        :index='menuBar.path'
    >
        <template #title>
            <!-- 动态使用组件的方法 -->
            <component
                :is='menuBar.meta.icon||"Setting"'
                class='icons'
            />
            <span>{{ menuBar.meta.title }}</span>
        </template>
        <el-menu-item-group>

            <jinmenu-item
                v-for='item in menuBar.children'
                :key='item.path'
                :index='item.path'
                :menu-bar='item'
            />

        </el-menu-item-group>
    </el-sub-menu>

    <el-menu-item
        v-else
        :key='1'
        :index='menuBar.path'
        @click='openTab(menuBar)'
    >
        <!-- <i :class='"el-icon-setting"' /> -->
        <component
            :is='menuBar.meta.icon||"Setting"'
            class='icons'
        />
        <template #title>
            <!-- 动态使用组件的方法 -->
      
            <span>{{ menuBar.meta.title }}</span>
        </template>
    </el-menu-item>
    
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { IMenubar } from '@/type/layout';
import defineTabs from '@/store/modules/tabs';

const tabs = defineTabs();
defineProps({
    menuBar: {
        type: Object as PropType<IMenubar>,
        default: function() { return {}; }
    }
});

const openTab = function(menuBar: IMenubar) {
    tabs.addTab(menuBar.path, menuBar.name);
};
</script>
<style scoped lang="scss">
.icons {
width: 24px;
    height: 18px;
    // margin-right: 5px;
      vertical-align: middle;
}
.el-menu-item  {
    color: #f4f4f5 !important;
}
</style>