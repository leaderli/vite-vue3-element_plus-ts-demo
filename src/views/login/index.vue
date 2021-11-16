<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useCookies } from "vue3-cookies";
import cookies from "../../util/cookie"
import { use } from "element-plus/es/locale";

const router = useRouter();
const param = reactive({
    username: "admin",
    password: "123123",
});

const rules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
        },
    ],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};
const login = ref(null);
const submitForm = () => {
    ElMessage.success("登录成功");
    router.push("/");
};

onMounted(() => {
    let my_cookie_value = cookies.get("myCoookie");
    console.log(my_cookie_value);
    cookies.set("myCoookie", "abcdefg");
    my_cookie_value = cookies.get("myCoookie");
    console.log(my_cookie_value);
})
</script>

<template>
    <div class="btn">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" >
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                    >
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
</template>

<style scoped lang="scss">
 .btn{
     width: 100%;
     height:920px;
     background-image: url(@/assets/img/login-bg.jpg);
     background-size: 100%;
 }
 .ms-login{
     text-align: center;
    
 } 
.ms-title {
    padding-top: 200px;
    font-size: 50px;
}
.el-form{
    padding-top: 50px;
}
.el-form-item{
    padding-top: 30px;
    padding-left: 700px;
    width: 500px;
}
// .ms-login {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     width: 350px;
//     margin: -190px 0 0 -175px;
//     border-radius: 5px;
//     background: rgba(255, 255, 255, 0.3);
//     overflow: hidden;
// }
// .ms-content {
//     padding: 30px 30px;
// }
.login-btn {
    text-align: center;
}
// .login-btn button {
//     width: 100%;
//     height: 36px;
//     margin-bottom: 10px;
// }
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
} 
</style>
