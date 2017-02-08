<template>
    <div>
        <x-content v-scroll-record title="会员卡使用说明" style="bottom:0">
            <!-- 会员卡使用信息 start -->
            <div class="x-vip-direction-head">
                <x-simple-item
                        class="bg-transparent x-vip-info"
                        :hasBottomBorder=false
                        logo-size="4rem"
                >
                    <h3 class="color-white big-font" slot="title">会员卡</h3>
                    <span class="color-white small-font" slot="subTitle">首展科技会员卡</span>
                </x-simple-item>

                <!-- 客服电话 -->
                <div flex="main:justify cross:bottom">
                    <div>
                        <h3 class="x-title">客服电话</h3>
                        <p class="margin-top-5 color-white">4008-000-1234</p>
                    </div>
                    <i class="x-phone-icon x-vip-phone-icon"></i>
                </div>
            </div>
            <!-- 会员卡使用信息 end -->

            <!-- 会员卡使用说明详情 start -->
            <div class="x-vip-direction-content">
                <h3>使用说明</h3>
                <p class="margin-top-10 color-gray">消费送积分，积分可抵扣金额,消费送积分，积 分可抵扣金额</p>

            </div>
            <!-- 会员卡使用说明详情 end -->

            <div class="x-vip-direction-foot color-gray">
                <router-link :to="{ name : 'storeDetail' , params: { storeId: 123 } }">
                    <span>商铺首页</span>
                </router-link> |
                <router-link :to="{ name : 'vipCardDetail', params: { vipCardId: 123 } }">
                    <span>会员中心</span>
                </router-link>
            </div>

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

        },
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/css/modules/vipUseDirection.less";
</style>
