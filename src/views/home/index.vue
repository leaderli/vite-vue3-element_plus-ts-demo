<template>
    <div class='app-container'>
        <div class='layui-ellem-quote'>
            菜单管理
        </div>
        <!-- 搜索部分 -->
        <div class='searchbtn'>
            <el-form>
                <el-row>
                    <el-col :span='8'>
                        <el-form-item label='启用标识'>
                            <el-select
                                placeholder='请选择'
                                size='mini'
                                clearable
                            >
                                <el-option
                                    label='未启用'
                                    value='0'
                                />
                                <el-option
                                    label='启用'
                                    value='1'
                                />
                                <el-option
                                    label='延迟启用'
                                    value='2'
                                />
                            </el-select>
                        </el-form-item>
                    </el-col>
                
                    <el-col :span='8'>
                        <el-form-item label='场景编号'>
                            <el-input
                                placeholder='请输入内容'
                                size='mini'
                                clearable
                                style='width:200px'
                            />
                        </el-form-item>
                    </el-col>
                
                    <el-col :span='8'>
                        <el-form-item label='场景名称'>
                            <el-input
                                placeholder='请输入内容'
                                size='mini'
                                clearable
                                style='width:200px'
                            />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span='8'>
                        <el-form-item label='场景类型'>
                            <el-select
                                placeholder='请选择'
                                size='mini'
                                clearable
                            >
                                <el-option
                                    label='异步'
                                    value='0'
                                />
                                <el-option
                                    label='实时'
                                    value='1'
                                />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span='8'>
                        <el-form-item label='个性化播报编号'>
                            <el-input
                                placeholder='请输入内容'
                                size='mini'
                                clearable
                                style='width:200px'
                            />
                        </el-form-item>
                    </el-col>
                    <el-col :span='8'>
                        <el-form-item>
                            <el-button
                                type='primary'
                                size='mini'
                                icon='Search'
                            >
                                搜索
                            </el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script setup lang='ts'>
</script>
<style scoped lang='scss'>
// .layui-ellem-quote{
//     margin-bottom: 10px;
//     padding: 15px;
//     line-height: 22px;
//     border-left: 5px solid #409eff;
//     border-radius: 0 2px 2px 0;
//     background-color: #f2f2f2;
// }
// .searchbtn{
//     margin: 25px;
// }
</style>