<template>
    <div class="x-input-box" flex="{ cross:center box:first }" @click="clickMe" :class="{ 'x-cell-border' : hasBottomBorder}" >
        <span class="x-title" :style="{ 'margin-right':titleMarginRight , color : titleColor}">{{title}}</span>
        <input :type="type" :placeholder="placeholder">
    </div>
</template>

<script>
    export default {
        props: {
            title: { // 标题
                type: String,
                default: ''
            },
            titleMarginRight:{ // 文字右侧外边距
                type: String,
                default: '1rem'
            },
            titleColor:{
                type: String,
                default: '#5e5e5e'
            },
            type : { // 背景颜色
                type: String,
                default: 'text'
            },
            placeholder:{ // 输入框提示文字
                type: String,
                default: ''
            },
            hasBottomBorder: { // 是否有下边框
                type: Boolean,
                default: true
            },
        },
        methods: {
            clickMe() {
                this.$emit('on-click');
            }
        }
    }
</script>

<style lang="less">
    @import "./index.less";
</style>
