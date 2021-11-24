<script setup lang="ts">
</script>

<template>
    <div class='error-page'>
        <div class='error-code'>
            4<span>0</span>4
        </div>
        <div class='error-desc'>
            啊哦~ 你所访问的页面不存在
        </div>
    </div>
</template>

<style scoped lang="scss">
.error-page {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f3f3f3;
    box-sizing: border-box;
    .error-code {
    font-size: 250px;
    font-weight: bolder;
    color: #2d8cf0;
    span {
    color: #00a854;
}
}
.error-desc {
    font-size: 30px;
    color: #777;
    margin-bottom: 200px;
}
}

</style>
