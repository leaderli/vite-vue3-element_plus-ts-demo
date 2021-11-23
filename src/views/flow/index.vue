<template>
  <div id="container"></div>
</template>


<script lang="ts">
import { Graph } from "@antv/x6";
import "@antv/x6-vue3-shape";
import Router from "@/components/flow/Graph.vue";
// import Count from "./components/Count";

export default {
  name: "container",
  data() {
    return {
      nodeData: {
        num: 0,
      },
    };
  },
  mounted() {
    const self = this;
    const graph = new Graph({
      container: document.getElementById("container") as any,
      width: 600,
      height: 400,
      grid: true,
    });

    // Graph.registerVueComponent(
    //   "router-component",
    //   {
    //     template: `<router :num="num" @add="add"></router>`,
    //     data() {
    //       return self.nodeData;
    //     },
    //     methods: {
    //       add(step) {
    //         self.nodeData.num += step;
    //       },
    //     },
    //     components: {
    //       Router,
    //     },
    //   },
    //   true
    // );

    graph.addNode({
      shape: "vue3-shape",
      x: 100,
      y: 100,
      width: 150,
      height: 100,
      component: Router,
      // attrs: {
      //   body: {
      //     stroke: "#ebebeb",
      //   },
      // },
    });
  },
};
</script>

<style>
#container{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
