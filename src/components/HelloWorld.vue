<script setup lang="ts">

import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useStore } from '@/store';



const store = useStore()



console.log('hello user ', store.state.user)
// 定义使用父组件的变量
// const props = defineProps({
//   msg: {
//     type: String,
//     default: () => '默认值'
//   }
// })

withDefaults(defineProps<{
  msg?: string,
  title?: string
}>(), {
  msg: 'hello',
  title: 'title'
})

//定义一个可以抛出的事件
const emit = defineEmits(['on-change'])

const handleClick = () => {
  //抛出事件，附带参数
  emit('on-change', '父组件方法被调用了')
}


//定义暴露给父组件的属性和方法
defineExpose({
  child: '我是暴露的子组件',
  child_method: () => {
    console.log('我是暴露的子组件方法')
  }
})


const counter = ref(0)
watch(
  counter,
  (newValue, oldValue) => {
    console.log('The new counter value is: ' + counter.value)
  },
  { deep: true, immediate: true }
)


onMounted(() => {
  console.log('onMounted');
})

onUnmounted(() => {

  console.log('onUnmounted');
})


console.log(store)
</script>

<template>
  <p>{{ store.state.user.username }}</p>
  <button @click="handleClick">点击调用父组件方法</button>
  <p>{{ counter }}</p>
  <button @click="counter++">增加</button>
</template>

<style>
</style>

