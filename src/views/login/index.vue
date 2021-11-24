<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
// import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import cookies from '@/util/cookie';
const router = useRouter();
const param = reactive({
    username: 'admin',
    password: '123123'
});

const rules = {
    username: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
        }
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
};
const login = ref(null);
const submitForm = () => {
    router.push('/');
    let millisecond = new Date().getTime();
    let expiresTime = new Date(millisecond + 60 * 1000 * 15);
    cookies.set('ms_username', param.username,expiresTime);
    ElMessage.success('登录成功');
    
};

onMounted(() => {
    // let my_cookie_value = cookies.get('myCoookie')
    // cookies.set('myCoookie', 'abcdefg')
    // my_cookie_value = cookies.get('myCoookie')
});
</script>

<template>
    <div class='btn'>
        <div class='ms-login'>
            <div class='ms-title'>
                后台管理系统
            </div>
            <el-form
                ref='login'
                :model='param'
                :rules='rules'
                class='ms-form'
            >
                <el-form-item prop='username'>
                    <el-input
                        v-model='param.username'
                        placeholder='username'
                    >
                        <template #prepend>
                            <el-button icon='el-icon-user' />
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop='password'>
                    <el-input
                        v-model='param.password'
                        type='password'
                        placeholder='password'
                    >
                        <template #prepend>
                            <el-button icon='el-icon-lock' />
                        </template>
                    </el-input>
                </el-form-item>
                <div class='login-btn'>
                    <el-button
                        type='primary'
                        @click='submitForm()'
                    >
                        登录
                    </el-button>
                </div>
                <p class='login-tips'>
                    Tips : 用户名和密码随便填。
                </p>
            </el-form>
        </div>
    </div>
</template>

<style scoped lang="scss">
 .btn{
     position: relative;
     display: flex;
     height:100%;
     background-image: url(@/assets/img/login-bg1.jpeg);
     background-size: cover;
     background-repeat: no-repeat;
     background-position: center center;
 }
 .ms-login{
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
    
 } 
.ms-title {
    font-size: 50px;
    margin-left: 50px;
}
.ms-form{
    padding-top: 50px;
}
.el-form-item{
    width: 400px;
}

.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100px;
    height: 36px;
    margin-top: 10px;
}
.login-tips {
    font-size: 18px;
    text-align: center;
    line-height: 30px;
    color: #fff;
} 
</style>
