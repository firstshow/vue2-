<template>
    <x-content v-scroll-record title="会员秒杀列表">
        <!-- 跳转到我的秒杀 start -->
        <x-cell-item @on-click="goMySeckillList()">
            <div class="x-seckill-nav">
                <i class="x-seckill-icon"></i>
                <span>我的秒杀</span>
            </div>
        </x-cell-item>
        <!-- 跳转到我的秒杀 end -->

        <!-- 会员秒杀列表 start -->
        <ul class="x-seckill-list-box">
            <li class="x-seckill-item" v-for="n of 10" v-tap="{ methods : openAlert }">
                <!-- 图片展示 start -->
                <div class="x-img-box">
                    <img src="./../../../assets/images/demo/demo-goods.png" alt="商家图片" width="100%">
                    <div class="x-store-info">
                        <i class="x-logo"></i>
                        <span>我的秒杀</span>
                    </div>
                </div>
                <!-- 图片展示 end -->

                <!-- 文字说明 start -->
                <div class="x-des-box">
                    <h3 class="x-title">蓝莓原价XXXXXXXXXXXX</h3>
                    <div flex="main:justify cross:center">
                        <div class="x-left">
                            <div class="x-info">
                                <p class="color-red dis-inline-block">￥<span>25</span></p>
                                <del>￥40</del>
                                <span>已完成16笔会员秒杀</span>
                            </div>
                            <div class="x-number">
                                <span class="ver-align-m">已抢1789件</span>
                                <x-progress class="ver-align-m" :value=5 :total=10></x-progress>
                            </div>
                        </div>
                        <div class="x-right">
                            <p>马上抢</p>
                            <p>到店自取</p>
                        </div>
                    </div>
                </div>
                <!-- 文字说明 end -->
            </li>
        </ul>
        <!-- 会员秒杀列表 end -->

        <x-alert :show="alertShow" title="111111"></x-alert>
    </x-content>
</template>

<script>
    export default {
        data () {
            return {
                alertShow : false
            }
        },
        methods:{
            /**
             * 点击我的秒杀，跳转到我的秒杀列表
             * */
            goMySeckillList(){
                this.$router.push({ name : 'mySeckillList' });
            },
            openAlert(){
                this.alertShow = true;
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/css/modules/vipSeckillList.less";
</style>
