<template>
  <el-tabs v-model="activeTab" type="card" closable @tab-click="tabClick"  @tab-remove="tabRemove">
    <el-tab-pane
      v-for="item in tablist.tabs"
      :key="item.index"
      :label="item.title"
      :name="item.path"
      closable 
    ></el-tab-pane>
  </el-tabs>
</template>
<script setup lang='ts'>
import { ref,watch, onMounted}from 'vue'
import defineTabs from '@/store/modules/tabs';
import {Tab}from '@/type/tabs'
import { useRouter,useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const tablist = defineTabs()
// const tabRemove = function (index: number) {
//   tabs.removeTab(index)
// }
// 删除选项卡
const tabRemove=(targetName:string) =>{
  if(targetName==='/home')return
  // 选项卡的数据列表
  const tabs = tablist.tabs
  // 当前激活的选项卡
      let activeName = activeTab.value
      if (activeName === targetName) {
        tabs.forEach((tab:Tab , index:number) => {
          if (tab.path === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.path
            }
          }
        })
      }
// 重新设置当前激活的选项卡
      activeTab.value= activeName
      // 重新设置选项卡数据
      tablist.tabs= tabs.filter((tab:Tab) => tab.path !== targetName)

      router.push({path:activeName})
    }
const activeTab = ref('')
const serActiveTab = function () {
activeTab.value =route.path
}
watch(()=>route.path,()=>{
  // 设置激活的选项卡
  serActiveTab()
})
// 解决刷新数据丢失的问题
const beforeRefresh=()=>{
  window.addEventListener('beforeunload',()=>{
    sessionStorage.setItem('tabsView',JSON.stringify(tablist.tabs))
  })
  let tabSesson=sessionStorage.getItem('tabsView')
  if(tabSesson){
    let oldtabs=JSON.parse(tabSesson)
    if(oldtabs.length>0){
      tablist.tabs=oldtabs
    }
  }
}
onMounted(()=>{
  beforeRefresh()
  serActiveTab()
})
const tabClick=function (tab:any) {
  const{props} = tab
  router.push({path:props.name})
  
}
</script>
<style scoped lang='scss'>
:deep(.el-tabs__header) {
     margin: 0;
     margin-top: 8px;
}
:deep(.el-tans__item) {
  height: 26px !important;
  line-height: 26!important;
  text-align: center!important;
  border:1px solid #d8dce5!important;
  margin: 0 3px!important;
  color: #495060;
  font-size: 12px !important;
  padding: 0 10px !important;
}
:deep(.is-active){
  border-bottom: 1px solid transparent !important;
  border:1px solid #42b983 !important;
  background-color: #42b983 !important;
  color: #fff !important;
}
:deep(.el-tabs__item:hover){
  color:#495060 !important;
}
:deep(.is-active:hover){
  color: #fff !important;
}
:deep(.el-tabs__nav-scroll) {
    background-color: rgb(255,255,255);
}
:deep(.el-tabs__nav-wrap){
  border: 0;
}

</style>