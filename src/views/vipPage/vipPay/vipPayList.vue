<template>
    <div>
        <x-content v-scroll-record title="会员卡买单列表" style="bottom:0">
            <x-simple-item
                v-for="n of 10"
                title="小二哥面馆"
                sub-title="2016-09-09"
                @on-click="goVipPayDetail"
            >
                <div flex-box="1" flex="main:right cross:center">
                    <span class="big-font">+50元</span>
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
             * 点击其中一个消费记录
             * 跳转到该条消费记录的详情页面
             * */
            goVipPayDetail(){
                this.$router.push({ name : 'vipPayDetail'});
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/css/modules/vipRechargeList.less";
</style>
