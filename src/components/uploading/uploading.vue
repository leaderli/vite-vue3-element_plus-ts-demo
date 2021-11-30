<template>
    <div class='album-box'>
        <div>{{ state.title }}</div>
        <div>
            <el-upload
                ref='album'
                action='https'
                list-type='picture-card'
                :on-preview='handlePictureCardPreview'
                :multiple='true'
                drag
                :http-request='submitEvent'
                :auto-upload='false'
                :limit='state.count'
            >
                <Plus style='width: 20px;height: 20px; margin:60px auto;' />
                <!-- <i class='Plus' /> -->
            </el-upload>
            <el-dialog
                v-model='state.dialogVisible'
                size='tiny'
            >
                <img
                    style='height:500px;margin:0 auto;display: block;'
                    :src='state.dialogImageUrl'
                    alt='预览'
                >
            </el-dialog>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { upApi } from '@/api/login';
export default defineComponent({
    props: {
        // 上传携带参数
        value: {
            type: Object,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            default: () => {}
        },
        // 标题
        title: {
            type: String,
            default: '上传图片'
        },
        // 上传个数（默认不限制）
        count: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        let state = reactive({
            dialogImageUrl: '',
            dialogVisible: false,
            formData: new FormData(),
            isEmpty: false,
            title: props.title,
            count: props.count,
            value: props.value
        });
        let album = ref();
        const submitEvent = (params: any) => {
            state.isEmpty = true;
            state.formData.append('file', params.file);
        };
        // const handleRemove = (file: any, fileList: any) => {};
        const handlePictureCardPreview = (file: any) => {
            state.dialogImageUrl = file.url;
            state.dialogVisible = true;
        };
        const parent = () => {
            album.value.submit();
            state.formData.append('value', JSON.stringify(state.value));
            let child = () => {
                    // 上传函数
                    return upApi({
                        data: state.formData
                    });
                },
                { isEmpty } = state;
            state.isEmpty = false;
            return {
                child,
                isEmpty,
                stop: () => {
                    state.formData = new FormData();
                    album.value.clearFiles();
                }
            };
        };
        return {
            state,
            submitEvent,
            handlePictureCardPreview,
            album,
            parent
        };
    }
});
</script>
<style lang="scss">
.album-box {
    text-align: center;
}
.album-box > div {
    padding: 5px;
    font-size: 14px;
    color: #666;
}
.el-upload-dragger {
    width: 146px !important;
    height: 146px !important;
}</style
>>
