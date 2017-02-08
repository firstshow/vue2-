<template>
    <div>
        <x-content v-scroll-record title="会员" style="bottom:50px">
             <!-- 头部金额展示 start -->
            <div class="x-vip-money-box">
                <ul flex="{main:left box:mean}">
                    <li class="x-border-right">
                        <p class="x-title">充值金额(元)</p>
                        <p class="x-money">889</p>
                    </li>
                    <li>
                        <p class="x-title">赠送金额(元)</p>
                        <p class="x-money">889</p>
                    </li>
                </ul>
            </div>
             <!-- 头部金额展示 end -->

            <!-- 搜索输入框 start -->
            <div class="x-vip-search-box">
                <div class="x-input" :class="{ 'x-placeholder' : !isFocusInput && searchValue.length === 0 }">
                    <input type="text" v-model="searchValue" @focus="isFocusInput = true" @blur="isFocusInput = false"/>
                </div>
            </div>
            <!-- 搜索输入框 end -->

            <!-- 会员卡列表信息 start -->
            <div class="x-store-vip-info-box">
                <x-simple-item
                    class="x-store-vip-info margin-bottom-10"
                    v-for="n of 5"
                    :hasBottomBorder=false
                    title="小二哥面馆"
                    @on-click="goStoreDetail(n)"
                >
                    <span class="color-red small-font" slot="subTitle">余额:200.55元</span>
                    <div class="x-bottom-text">立即充值</div>
                </x-simple-item>
            </div>
            <!-- 会员卡列表信息 end -->
        </x-content>
        <x-footer></x-footer>
    </div>
</template>

<script>
    import { mapGetters , mapActions } from 'vuex'
    export default {
        data () {
            return {
                isFocusInput : false, // 搜索框是否获得焦点
                searchValue : '' // 输入的搜索内容
            }
        },
        computed : {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods : {
            ...mapActions([
                'uploadUserInfo'
            ]),
            /**
             * 点击单个会员卡，跳转到该会员卡的详情
             * @param  id  会员卡id
             * */
            goStoreDetail(id){
                this.$router.push({ name : 'vipCardDetail' , params: { vipCardId: id } });
            },
        },
    }
</script>
<style lang="less" scoped>
    @import "./../../assets/css/modules/vip.less";
</style>
