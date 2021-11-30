<template>
    <div class='app-container'>
        <!-- 搜索部分 -->
        <div class='searchbtn'>
            <el-form :model="searchData">
                <el-row>
                    <el-col :span='8'>
                        <el-form-item label='用户名称' prop="username">
                            <el-input
                                    v-model="searchData.username"
                                    placeholder='请输入内容'
                                    size='mini'
                                    clearable
                                    style='width: 200px'
                            >

                            </el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span='8'>
                        <el-form-item label='手机号' prop="phone">
                            <el-input
                                    v-model="searchData.phone"
                                    placeholder='请输入内容'
                                    size='mini'
                                    clearable
                                    style='width: 200px'
                            />
                        </el-form-item>
                    </el-col>

                    <el-col :span='8'>
                        <el-form-item label='使用状态' prop="statu">
                            <el-select
                                    v-model="searchData.statu"
                                    placeholder='请选择'
                                    size='mini'
                                    clearable
                            >
                                <el-option
                                        value="0"
                                        label="停用"
                                >

                                </el-option>
                                <el-option
                                        value="1"
                                        label="使用"
                                >

                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
<!--                    <el-col :span="2">-->
<!--                        <el-form-item>-->
<!--                            <el-button type="primary" size="mini" icon="Search">搜索</el-button>-->
<!--                        </el-form-item>-->
<!--                    </el-col>-->
<!--                    <el-col :span="2">-->
<!--                        <el-form-item>-->
<!--                            <el-button type="primary" size="mini" icon="Download" @click="handleDownload">下载</el-button>-->
<!--                        </el-form-item>-->
<!--                    </el-col>-->
                </el-row>
            </el-form>
        </div>
        <!-- 表格部分 -->
        <div>
            <el-table
                    :data='searchData_list'
                    border
                    highlight-current-row
            >
                <el-table-column
                        type="selection"
                        width='55'
                        align='center'
                />
                <el-table-column
                        label='用户名'
                        prop='username'
                        align='center'
                />
                <el-table-column
                        label='用户角色'
                        prop='userrole'
                        align='center'
                />
                <el-table-column
                        label='手机号'
                        prop='phone'
                        align='center'
                />
                <el-table-column
                        label='使用状态'
                        prop='statu'
                        align='center'
                        :formatter="formatter"
                />
                <el-table-column
                        label='创建时间'
                        prop='createtime'
                        align='center'
                />

                <el-table-column
                        label='操作'
                        align='center'
                        width='200'
                >

                    <el-link
                            type='info'
                    >分配角色
                    </el-link>
                    <el-link>编辑</el-link>
                    <el-link type='primary'>删除</el-link>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script setup lang='ts'>
    import {reactive, ref, onMounted, watch} from 'vue';
    import axios from 'axios';
    import Fuse from 'fuse.js';

    let list: any = ref([]);
    let fuse: any;
    const options = {
        includeScore: true,
        keys: ['statu', 'phone', 'username']
    }

    const searchData: any = reactive({
        statu: '',
        phone: '',
        username: ''
    })


    onMounted(() => {
        axios.get('/api/usermanage').then(res => {
            if (res.data.list.length > 0) {
                let i: number;
                for (i = 0; i < res.data.list.length; i++) {
                    list.value.push(res.data.list[i]);
                }
            }
            fuse = ref(new Fuse(list.value, options))
        });
    })

    watch(searchData, new_val => {
        if (searchData?.uaername != '') {
            searchData_list.value = fuse.value.search(searchData.username).map((item: any) => item.item);
        } else {
            searchData_list.value = list;
        }
    })

    let searchData_list = ref(list)

    const formatter = (row: any) => {
        if (row.statu === '0') {
            return '停用'
        } else {
            return '使用'
        }
    }

</script>
<style scoped lang='scss'>
    .searchbtn {
        margin: 25px;
    }

    .el-link {
        margin-right: 10px;
    }

</style>
