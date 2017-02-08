<template>
    <x-content v-scroll-record title="激活会员卡" style="background-color: #fff;">
        <!-- 会员卡 start -->
        <div class="x-vip-activation-head">
            <div class="x-vip-card" flex="dir:top cross:justify">
                <h3 class="x-title">严村里小二哥面馆会员卡</h3>
                <p class="x-subtitle">生活圈会员卡</p>
            </div>
        </div>
        <!-- 会员卡 end -->

        <!-- 激活所需填写的信息 start -->
        <div class="x-vip-activation-info">
            <x-input title="真实姓名" placeholder="请输入真实姓名"></x-input>
            <x-input title="手机号码" type="tel" placeholder="请输入手机号码"></x-input>
        </div>
        <!-- 激活所需填写的信息 end -->

        <div class="default-padding">
            <x-button>激活</x-button>
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
