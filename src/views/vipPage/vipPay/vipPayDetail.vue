<template>
    <x-content v-scroll-record title="会员卡买单详情" style="background-color: #fff;">
        <x-cell-item :has-bottom-border=false @on-click="goStoreDetail">
            <div flex="cross:center">
                <img src="./../../../assets/images/demo/demo_logo.png" alt="logo" width="60px">
                <h3 class="margin-left-20">阿超果业</h3>
            </div>
        </x-cell-item>

        <!-- 支付金额 start -->
        <div class="x-pay-item" flex="dir:top main:center cross:center">
            <h3 class="x-title">24.89元</h3>
            <p class="margin-top-10 color-gray">交易成功</p>
        </div>
        <!-- 支付金额 end -->

        <x-cell-item class="no-padding-bottom" title="订单金额" sub-title="10.00" :hasArrow=false :hasBottomBorder=false :hasActive="false"></x-cell-item>
        <x-cell-item class="no-padding-bottom" title="实付金额" sub-title="10.00" :hasArrow=false :hasBottomBorder=false :hasActive="false"></x-cell-item>
        <x-cell-item class="no-padding-bottom" title="返现金额" title-color="#f96269" sub-title="10.00" sub-title-color="#f96269" :hasArrow=false :hasBottomBorder=false :hasActive="false"></x-cell-item>
        <x-cell-item class="no-padding-bottom"title="付款时间" sub-title="2016-09-09 00:00:00" :hasArrow=false :hasBottomBorder=false :hasActive="false"></x-cell-item>
        <x-cell-item title="订单号" sub-title="1231242324234124" :hasArrow=false :hasBottomBorder=false :hasActive="false"></x-cell-item>

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
                this.$router.push({ name : 'storeDetail' , params: { storeId: 123 }});
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/css/modules/payDetail.less";
</style>
