<template>
    <div class="x-page-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
           title : { // 网页标题
                type: String,
                default: ''
            },
        },
        created(){
            this.setTitle(this.title);
        }
    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
