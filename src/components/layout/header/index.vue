<template>
    <div class="action">
        <h2 @click="handleClick(1)">首页</h2>
        <h2 @click="handleClick(0)">关于</h2>
        <h2 @click="handleClick(2)">关于</h2>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
import axios from 'axios';

const handleClick = (num: number) => {

    console.log('click', num);
    axios({
        url: "/api/post",

        method: "post",
        data: "{}",
        headers: { "Content-type": "application/json" },
    }).then((res: {}) => {
        console.log(res);
    });

    // axios({
    //     url: "/test",
    //     method: "get",
    // }).then((res: {}) => {
    //     console.log(res);
    // });
    if (num===1) {
        router.push({
            name: "home",
        });
    } else if(num===0) {
        router.push({
            name: "about",
        });
    }else{
        router.push({
            name: "404",
        });
    }
};
</script>

<style>
.action {
    display: flex;
}

h2 {
    padding: 0px 10px;
    cursor: pointer;
}
h2:hover {
    color: red;
}
</style>
