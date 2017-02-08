<template>
    <x-content v-scroll-record title="会员卡充值" style="background-color: #fff;">
        <!-- 顶部轮播的充值活动信息 start -->
        <div class="x-store-slider-banner bg-light-yellow">
            <div class="x-text slider-right-to-left">
                <span>充100送200，充100送200，充100送200</span>
            </div>
        </div>
        <!-- 顶部轮播的充值活动信息 end -->

        <!-- 激活所需填写的信息 start -->
        <div class="x-vip-activation-info no-padding-top">
            <x-input title="真实姓名" placeholder="请输入真实姓名"></x-input>
            <x-input title="手机号码" type="tel" placeholder="请输入手机号码"></x-input>
            <x-input title="充值金额" type="number" placeholder="请输入充值金额"></x-input>
        </div>
        <!-- 激活所需填写的信息 end -->

        <div class="default-padding">
            <x-button>充值</x-button>
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
                this.$router.push({ name : 'storeDetail' , params: { storeId: 123 }});
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/css/modules/vipActivation.less";
</style>
