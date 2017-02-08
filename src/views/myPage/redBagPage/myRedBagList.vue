<template>
    <x-content v-scroll-record title="红包列表">
        <!-- 红包列表顶部 start -->
        <div class="x-my-redbag-head" flex="dir:top main:left cross:left">
            <h3 style="font-size: .9rem">已通过红包节省</h3>
            <div class="padding-top-10" flex="main:justify cross:bottom">
                <div class="x-money">
                    <h3>100</h3>
                    <span>元</span>
                </div>
                <router-link class="x-btn" :to="{ name : 'myHistoryRedBagList' }">
                    历史红包
                </router-link>
            </div>
        </div>
        <!-- 红包列表顶部 end -->

        <!-- 红包列表 start -->
        <div class="x-redbag-list">
            <div class="x-redbag-item" flex="dir:top main:left" v-for="n of 10">
                <div class="x-content" flex="main:justify cross:center">
                    <div flex="dir:left main:left cross:center">
                        <img class="x-logo" src="./../../../assets/images/demo/demo_logo.png" alt="logo">
                        <div class="x-title">
                            <h3>不二家棒棒糖</h3>
                            <i class="x-status-icon">无使用门槛</i>
                        </div>
                    </div>
                    <h2 class="x-money">￥<span>5</span></h2>
                </div>
                <div class="x-foot">
                    有效时间：无限制
                </div>
            </div>
        </div>
        <!-- 红包列表 end -->
    </x-content>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods:{

        },
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/css/modules/myRedList.less";
</style>
