<template>
    <el-row style='width: -webkit-fill-available;'>
        <el-col :span='2'>
            <Collapse />
        </el-col>
        <el-col :span='20'>
            <Tabs class='tablist' />
        </el-col>
        <el-col :span='2'>
            <div class='dropdown'>
                <el-dropdown>
                    <img src='@/assets/img/img.jpg'>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item @click='signOut'>
                                退出登录
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-col>
    </el-row>
</template>
<script setup lang='ts'>
import Collapse from '@/components/layout/header/Collapse.vue'
import Tabs from '@/components/layout/tabs/Tabs.vue'
import { useRouter } from 'vue-router'
import cookies from '@/util/cookie'
const router = useRouter()
const signOut = () => {
    router.push('/logo')
    cookies.remove('ms_username')
}
</script>
<style scoped lang='scss'>
    .dropdown{
        margin-right: 30px;
        img{
            width: 46px;
            height: 46px;
            border-radius: 23px;
            margin-top: 2px;
        }
      } 

</style>

