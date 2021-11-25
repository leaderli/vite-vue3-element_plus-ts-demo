<template>
    <h2>about页面</h2>
    <p>{{ user.username }}</p>
    <div>  {{ want }} </div>
</template>

<script setup lang="ts">
import { defineUser } from '@/store/modules/user';
import { log } from 'console';
import { reactive ,toRefs ,toRef } from 'vue';
let me = reactive({
    single:true,
    want:'暖的像火炉的暖男'
});
setTimeout(() => {
    me.want = '夏天容易化了';
},3000);


const { want } = toRefs(me);

const love = toRef(me,'love');

console.log('love',love);
console.log(me);



const user = defineUser();


</script>