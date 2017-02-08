<template>
    <div>
        <x-content v-scroll-record title="会员卡充值列表" style="bottom:0">
            <x-simple-item
                v-for="n of 10"
                title="小二哥面馆"
                sub-title="2016-09-09"
                @on-click="goVipRechargeDetail"
            >
                <div flex-box="1" flex="main:justify cross:center">
                    <i class="x-give-money-icon margin-left-10">0.5元</i>
                    <span class="color-skin big-font">+50元</span>
                </div>
            </x-simple-item>
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
             * 点击其中一个充值记录
             * 跳转到该条充值记录的详情页面
             * */
            goVipRechargeDetail(){
                this.$router.push({ name : 'vipRechargeDetail'});
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/css/modules/vipRechargeList.less";
</style>
