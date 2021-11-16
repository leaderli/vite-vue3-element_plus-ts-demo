<template>
    <h2 class="test-sass-color">home页面</h2>
    <el-button>I am ElButton</el-button>
    <div>
        <el-icon :size="size" :color="color">
            <edit></edit>
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { Edit } from '@element-plus/icons'

const size = 20
const color = 'green'
</script>

<style lang="scss" scoped>
.test-sass-color {
    color: $color-primary;
}
</style>