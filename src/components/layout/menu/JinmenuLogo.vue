<template>
    <div class='logo'>
        <img
            src='@/assets/img/logo1.png'
            alt='logo'
        >
        <span class='title'>Vite App</span>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.logo{
background-color: #304156;
height: 50px;
border: none;
line-height: 50px;
display: flex;
align-items: center;
padding-left: 15px;
color: #fff;
img{
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
span{
  font-weight: 600;
  line-height: 50px;
  font-size: 20px;
  // vertical-align: middle;
  font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
}
}
</style>