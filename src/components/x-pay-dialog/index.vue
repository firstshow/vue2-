<template>
    <div class="x-pay-dialog" :class="{ 'x-show' : show }" v-tap="{ methods : closeDialog }">
        <div class="x-content" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            show : { // 是否显示
                type: Boolean,
                default: false,
            }
        },
        methods:{
            /**
             * 关闭弹出框
             * */
            closeDialog(){
                this.$emit('close-dialog');
            },
            /**
             * 点击左边的按钮
             * 调父元素的方法
             * */
            clickCancel(){
                this.$emit('on-cancel');
            },
            /**
             * 点击右边的按钮
             * 调父元素的方法
             * */
            clickConfirm(){
                this.$emit('on-confirm');
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>