<template>
    <div>
        <x-content v-scroll-record title="会员卡详情" style="bottom:0">
            <!-- 会员卡信息 start -->
            <div class="x-vip-detail-info-box">
                <div class="x-vip-detail-info">
                    <x-simple-item
                        class="margin-bottom-10"
                        :hasBottomBorder=false
                    >
                        <h3 class="color-white" slot="title">阿超果业</h3>
                        <span class="color-white small-font" slot="subTitle">21342345435123123243</span>
                    </x-simple-item>

                </div>
            </div>
            <!-- 会员卡信息 end -->

            <!-- 会员余额等 start -->
            <div class="x-vip-money-box">
                <ul flex="{main:left box:mean}">
                    <li class="x-border-right">
                        <p class="x-title">889</p>
                        <p class="x-money">消费</p>
                    </li>
                    <li>
                        <p class="x-title">222</p>
                        <p class="x-money">余额</p>
                    </li>
                </ul>
            </div>

            <div class="x-vip-detail-btn-box" flex="main:justify">
                <x-button class="x-btn" title="去买单" @on-click="goPay"></x-button>
                <x-button class="x-btn x-border-btn" bgColor="transparent" textColor="#f96269" title="充值" @on-click="goVipRecharge"></x-button>
            </div>
            <!-- 会员余额等 end -->

            <!-- 会员卡功能 start -->
            <x-cell-item title="充值记录" @on-click="goVipRechargeList"></x-cell-item>
            <x-cell-item title="消费记录" @on-click="goVipPayList"></x-cell-item>
            <x-cell-item title="使用说明" @on-click="goVipUseDirection"></x-cell-item>
            <!-- 会员卡功能 end -->
        </x-content>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            /**
             * 点击去买单
             * 跳转到买单页面
             * */
            goPay(){
                this.$router.push({ name : 'pay' });
            },
            /**
             * 点击充值
             * 跳转到会员卡充值页面
             * */
            goVipRecharge(){
                this.$router.push({ name : 'vipRecharge'});
            },
            /**
             * 点击充值记录
             * 跳转到会员卡充值记录列表
             * */
            goVipRechargeList(){
                this.$router.push({ name : 'vipRechargeList'});
            },
            /**
             * 点击消费记录
             * 跳转到会员卡消费记录列表
             * */
            goVipPayList(){
                this.$router.push({ name : 'vipPayList'});
            },
            /**
             * 点击使用说明
             * 跳转到会员卡使用说明页面
             * */
            goVipUseDirection(){
                this.$router.push({ name : 'vipUseDirection'});
            },
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/css/modules/vipDetail.less";
</style>
