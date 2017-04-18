<template>
    <div>
        <x-content class="bg-white" title="我的" v-scroll-record style="bottom:50px">
            <!-- 头像与昵称 start -->
           <router-link :to="{ name : 'myInfo' }" class="x-my-info-box" flex="dir:top main:center cross:center" >
               <div class="x-head-box">
                   <img src="./../../assets/images/demo/demo_logo.png" alt="头像">
               </div>
               <p class="margin-top-20 color-white">玲珑</p>
           </router-link>
            <!-- 头像与昵称 end -->

            <!-- 我的中栏目分类 start -->
            <x-flex-box class="x-my-category-box" wrap="wrap">
                <x-flex-item class="margin-bottom-20" :span="1/3" @on-click="goNext('myRedBagList')">
                    <i class="x-category-icon my-redbag-icon"></i>
                    <p class="margin-top-10">我的红包</p>
                </x-flex-item>
                <x-flex-item class="margin-bottom-20" :span="1/3" @on-click="goNext('myQrCode')">
                    <i class="x-category-icon my-qrcode-icon"></i>
                    <p class="margin-top-10">我的二维码</p>
                </x-flex-item>
                <x-flex-item class="margin-bottom-20" :span="1/3" @on-click="goNext('vipSeckillList')">
                    <i class="x-category-icon my-seckill-icon"></i>
                    <p class="margin-top-10">秒杀</p>
                </x-flex-item>
                <x-flex-item :span="1/3" @on-click="goNext('myOrderList')">
                    <i class="x-category-icon my_order-icon"></i>
                    <p class="margin-top-10">我的买单</p>
                </x-flex-item>
                <x-flex-item :span="1/3" @on-click="goNext('myRedBagList')">
                    <i class="x-category-icon my-attention-icon"></i>
                    <p class="margin-top-10">我的关注</p>
                </x-flex-item>
            </x-flex-box>
            <!-- 我的中栏目分类 end -->
        </x-content>
        <x-footer></x-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                aa : '111'
            }
        },
        methods:{
            /**
             * 点击某一项，跳转到对应的页面
             * */
            goNext(router){
                this.$router.push({ name : router });
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "./../../assets/css/modules/my.less";
</style>
