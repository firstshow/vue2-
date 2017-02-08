<template>
    <dl class="x-store-evaluate-item" flex="main:left cross:top box:first" :class="{ 'x-item-border' : hasBottomBorder}">
        <dt class="x-logo-box">
            <img src="./../../assets/images/demo/demo_logo.png" alt="logo">
        </dt>
        <dd class="x-evaluate-box" flex="dir:top main:left cross:center">
            <div class="x-item" flex="main:justify cross:center">
                <h3>荷花</h3>
                <span class="small-font color-gray">2016-02-02</span>
            </div>
            <!-- 星级评分 -->
            <div class="x-item padding-bottom-5">
                <x-star-box class="margin-top-5 margin-bottom-5" :num=3.6 :showText=false></x-star-box>
            </div>
            <!-- 评论文字 -->
            <div class="x-item">
                面不错~就是酱油度了点
            </div>
            <div class="x-item x-photo-box">
                <img class="x-evaluate-img" src="./../../assets/images/demo/demo_evaluate_img.jpg" alt="图片">
                <img class="x-evaluate-img" src="./../../assets/images/demo/demo_evaluate_img.jpg" alt="图片">
                <img class="x-evaluate-img" src="./../../assets/images/demo/demo_evaluate_img.jpg" alt="图片">
                <img class="x-evaluate-img" src="./../../assets/images/demo/demo_evaluate_img.jpg" alt="图片">
                <img class="x-evaluate-img" src="./../../assets/images/demo/demo_evaluate_img.jpg" alt="图片">
            </div>
        </dd>
    </dl>
</template>
<script>
    export default {
        props: {
            logo: { // 图标logo
                type: String,
                default: ''
            },
            title: { // 标题
                type: String,
                default: ''
            },
            subTitle: { // 副标题
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
