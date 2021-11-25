<template>
    <el-row style='width: -webkit-fill-available;'>
        <el-col :span='2'>
            <jin-collapse />
        </el-col>
        <el-col :span='20'>
            <jin-tabs class='tablist' />
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
import JinCollapse from '@/components/layout/header/JinCollapse.vue';
import JinTabs from '@/components/layout/tabs/JinTabs.vue';
import { useRouter } from 'vue-router';
import cookies from '@/util/cookie';
const router = useRouter();
const signOut = () => {
    router.push('/logo');
    cookies.remove('ms_username');
};
</script>
<style scoped lang='scss'>
    .dropdown{
        margin-right: 30px;
        img{
            width: 42px;
            height: 42px;
            border-radius: 21px;
            margin-top: 2px;
        }
      } 

</style>

