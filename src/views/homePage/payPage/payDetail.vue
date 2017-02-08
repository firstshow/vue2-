<template>
    <x-content v-scroll-record title="买单详情" style="background-color: #fff;">
        <x-cell-item :has-bottom-border=false @on-click="goStoreDetail">
            <div flex="cross:center">
                <img src="./../../../assets/images/demo/demo_logo.png" alt="logo" width="60px">
                <h3 class="margin-left-20">阿超果业</h3>
            </div>
        </x-cell-item>

        <!-- 支付金额 start -->
        <div class="x-pay-item" flex="dir:top main:center cross:center">
            <h3 class="x-title">24.89元</h3>
            <p class="margin-top-10">会员卡支付</p>
        </div>
        <!-- 支付金额 end -->

        <!-- 会员中心 start -->
        <x-cell-item :has-bottom-border=false>
            <span class="color-skin">会员中心</span>
        </x-cell-item>
        <!-- 会员中心 end -->

        <div class="x-pay-item" flex="cross:center" style="padding: 1rem;">
            <span class="color-gray margin-right-20">立即评价</span>
            <i class="x-star-icon x-big-star x-gray-star-icon"></i>
            <i class="x-star-icon x-big-star x-gray-star-icon"></i>
            <i class="x-star-icon x-big-star x-gray-star-icon"></i>
            <i class="x-star-icon x-big-star x-gray-star-icon"></i>
            <i class="x-star-icon x-big-star x-gray-star-icon"></i>
        </div>

        <div flex="cross:center" style="padding: 1rem;">
            <span class="color-gray margin-right-20">交易时间</span>
            <span class="color-gray">2017-01-01</span>
        </div>

        <div flex="cross:center" style="padding: 0 0 1rem 1rem;">
            <span class="color-gray margin-right-20">交易订单</span>
            <span class="color-gray">324123123423424</span>
        </div>

    </x-content>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            /**
             * 点击其中一个城市，按该搜索条件，搜索对应的门店
             * 选择城市
             * */
            goStoreDetail(){
                this.$router.push({ name :  'storeDetail' , params: { storeId: 123 }});
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/css/modules/payDetail.less";
</style>
