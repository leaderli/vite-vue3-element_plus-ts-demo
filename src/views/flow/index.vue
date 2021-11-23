<!-- <template>
    <div class="app-container documentation-container">
        <flow></flow>
        <div id="container" />
    </div>
</template>

<script setup lang="ts">
console.log('----------------------------');

import { Graph } from '@antv/x6'
import '@antv/x6-vue-shape'
import flow from '@/components/flow/flow.vue'

import { onMounted, provide } from 'vue';
// import { ToolsView } from "/node_modules/@antv/x6/src/view/tool.ts";

// console.log(ToolsView);

provide('node', 'test1')






console.log('----------------------------------------');

// console.log(container);
console.log('----------------------------------------');
const data1 = { num: 0 }
// const graph = new Graph({
//     // container: container as any,
//     width: 600,
//     height: 600,
//     grid: true,
// });

const init = function (container: HTMLElement) {
    const graph = new Graph({
        container: container,
        width: 1000,
        height: 500,
        background: {
            color: 'rgba(184,180,180,0.2)' // 设置画布背景颜色
        },
        grid: {
            size: 10, // 网格大小 10px
            visible: true // 渲染网格背景
        }
    })
    const data = {
        // 节点
        nodes: [
            {
                id: 'node1', // String，可选，节点的唯一标识
                x: 40, // Number，必选，节点位置的 x 值
                y: 40, // Number，必选，节点位置的 y 值
                width: 80, // Number，可选，节点大小的 width 值
                height: 40, // Number，可选，节点大小的 height 值
                label: '普线' // String，节点标签
            },
            {
                id: 'node2', // String，节点的唯一标识
                x: 160, // Number，必选，节点位置的 x 值
                y: 80, // Number，必选，节点位置的 y 值
                width: 80, // Number，可选，节点大小的 width 值
                height: 40, // Number，可选，节点大小的 height 值
                label: '夜间' // String，节点标签
            },
            {
                id: 'node3', // String，节点的唯一标识
                x: 160, // Number，必选，节点位置的 x 值
                y: 180, // Number，必选，节点位置的 y 值
                width: 80, // Number，可选，节点大小的 width 值
                height: 40, // Number，可选，节点大小的 height 值
                attrs: {
                    body: {
                        fill: '#fbca00',
                        stroke: '#000',
                        strokeDasharray: '10,2'
                    },
                    label: {
                        text: '白金',
                        fill: '#333',
                        fontSize: 13
                    }
                }
            }
        ],
        // 边
        edges: [
            {
                source: 'node1', // String，必须，起始节点 id
                target: 'node2' // String，必须，目标节点 id
            },
            {
                source: 'node1', // String，必须，起始节点 id
                target: 'node3' // String，必须，目标节点 id
            }
        ]
    }
    graph.fromJSON(data)

    graph.addNode({
        shape: 'vue-shape',
        width: 200,
        height: 200,
        x: 100,
        y: 100,
        attrs: {
            body: {
                width: 200,
                height: 200,
                stroke: 'red',
            }
        },
        component: {
            template: `<flow :num="num" @add="add()"></flow>`,
            data() {
                return data1
            },
            methods: {
                add: () => {
                    data1.num += 1
                }
            },
            provide: {
                node: 'test2'
            },
            components: {
                flow,
            }
        }
    });
}


onMounted(() => {
    const container = document.getElementById('container')
    init(container as HTMLElement)
})
</script>

<style lang="scss" scoped>
.documentation-container {
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .document-btn {
        flex-shrink: 0;
        display: block;
        cursor: pointer;
        background: black;
        color: white;
        height: 60px;
        padding: 0 16px;
        margin: 16px;
        line-height: 60px;
        font-size: 20px;
        text-align: center;
    }
}
</style>

 -->



<template>
    <div>
        <div id="container"></div>
    </div>
</template>

<script lang="ts" setup>
import { Graph } from "@antv/x6";
import "@antv/x6-vue-shape";
import Count from "@/components/flow/flow.vue";
import { onMounted } from 'vue';

let graph = null;
onMounted(() => {
    graph = new Graph({
        container: document.getElementById("container") as HTMLElement,
        width: 600,
        height: 400,
        grid: true,
    });

    // 注册 vue component
    // 如果需要序列化/反序列化数据，必须使用该方式
    Graph.registerVueComponent(
        "count",
        {
            template: `<Count />`,
            components: {
                Count,
            },
        },
        true
    );

    graph.addNode({
        id: "1",
        shape: "vue-shape",
        x: 200,
        y: 150,
        width: 150,
        height: 100,
        component: "count",
        data: {
            num: 0,
        },
    });
})

</script>

<style>
#container {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
