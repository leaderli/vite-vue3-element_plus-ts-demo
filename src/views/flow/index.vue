<template>
    <div id='container' />
</template>


<script setup lang="ts">
import { Graph } from '@antv/x6';
import { onMounted } from 'vue';



onMounted(() => {
    const graph = new Graph({
        // container: getElementById('container') ,
        container:document.getElementById('container')!,

        width: 1000,
        height: 500,
        background: {
            color: 'rgba(184,180,180,0.2)' // 设置画布背景颜色
        },
        grid: {
            size: 10, // 网格大小 10px
            visible: true // 渲染网格背景
        }
    });
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
    };
    graph.fromJSON(data);
});

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


