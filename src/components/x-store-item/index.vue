<template>
    <div class="x-store-item" flex="main:left cross:top box:first" v-tap.stop="{methods : clickMe }">
        <div class="x-logo-box">
            <img src="./../../assets/images/demo/demo_logo.png" alt="logo" width="100%" height="100%">
        </div>
        <div class="x-content-box">
            <div class="x-store-info" flex="dir:top cross:left">
                <h3 class="x-title">{{title}}</h3>
                <p class="x-average-money">
                    <x-star-box class="margin-top-5 margin-bottom-5" :num=3.6 :showText=false></x-star-box>
                    <span>人均65元</span>
                </p>
                <p class="x-subtitle">
                    {{category}} &nbsp;|&nbsp; 3.8km
                </p>
            </div>
            <div class="x-store-discount" flex="dir:top cross:left">
                <p class="border-bottom" v-if="hasRandomCut">
                    <i class="x-discount-icon x-random-cut-icon"></i>
                    <span>拼人品，随机减</span>
                </p>
                <p v-if="hasRedbag">
                    <i class="x-discount-icon x-redbag-icon"></i>
                    <span>有一元红包可用</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            logo: { // 商家logo
                type: String,
                default: './../../assets/images/demo/demo_logo.png'
            },
            title: { // 商家名称
                type: String,
                default: '小二哥'
            },
            money: { // 人均消费
                type: String,
                default: '小二哥'
            },
            category: { // 商家类型
                type: String,
                default: '中餐'
            },
            hasRandomCut: { // 是否有随机减
                type: Boolean,
                default: false
            },
            hasRedbag: { // 是否有红包
                type: Boolean,
                default: false
            },
        },
        methods: {
            clickMe() {
                this.$emit('on-click');
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>