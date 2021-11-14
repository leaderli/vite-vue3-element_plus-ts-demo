<template>
    <div class="action">
        <h2 @click="handleClick(1)">首页</h2>
        <h2 @click="handleClick(0)">关于</h2>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = (num: number) => {

    console.log('click', num);

    if (num) {
        router.push({
            name: "home",
        });
    } else {
        router.push({
            name: "about",
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
