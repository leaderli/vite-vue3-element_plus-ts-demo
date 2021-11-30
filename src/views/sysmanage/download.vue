<template>
    <el-form>
        <el-row>
            <el-col :span="4">
                <el-form-item>
                    <el-button type="primary" size="mini" icon="Download" @click="txtDownload">下载txt</el-button>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item>
                    <el-button type="primary" size="mini" icon="Download" @click="excelDownload">下载EXCEL</el-button>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item>
                    <el-button type="primary" size="mini" icon="Download" @click="csvDownload">下载CSV</el-button>
                </el-form-item>
            </el-col>

        </el-row>
    </el-form>
</template>

<script setup lang='ts'>

    import { saveAs } from 'file-saver';

    //下载为文字
    const txtDownload = () => {
        let blob = new Blob(["Hello, world!中国"], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "hello world.txt");
    }

    let result :any={
        name:'zhangsan',
        age:'18'
    };

    //下载为Excel
    const excelDownload = () => {
        let blob = new Blob([result.name,result.age], {
            type: "application/vnd.ms-excel;charset=utf-8"
        });

        saveAs(blob, "Excel文件" + ".xls");
    }

    //下载为csv
    const csvDownload = () => {
        let blob = new Blob([result.name,result.age], {
            type: "text/csv;charset=utf-8"
        });
        saveAs(blob, "CSV文件" + ".csv");
    }

</script>
